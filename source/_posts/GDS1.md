---
title: 2D游戏开发
top: false
mathjax: false
tags:
  - Game Develop
  - 2D Game
  - SEGA
  - C++
categories: 游戏开发(Game Development)
index_img: 
banner_img: https://tva1.sinaimg.cn/large/0081Kckwgy1gkrfcylq45j312w0gak12.jpg
abbrlink: 6487e0f7
translate_title: 2d-game-development
date: 2020-11-16 23:20:35
comments: false
---





使用C++开发一个通过命令行运行的简单游戏。

<!--more-->



### 开发一个益智游戏

作为第一个游戏，我们决定去开发那个非常有名的“推箱子”的游戏。准备好场景数据后就可以进行单人游戏，游戏中也没有什么复杂的动作，因此无须设计太多东西能够完成。从结果来看，只需200行的代码就可以实现。

#### 需求分析

玩家用键盘操作，这里只支持移动操作。`p`代表玩家角色。上下左右移动分别通过`w`、`a`、`s`、`d`控制，并且需要按下回车键`Enter`。例如，依次按下`a`和`Enter`后，玩家将向左移动。

除了`p`外，`#`代表墙壁，`o`代表尚未到达目的地的箱子，`.`代表目的地。为了便于识别，玩家到达`.`处时将变成`P`，箱子将变成`O`。等所有箱子都被推到`.`并变成`O`时，就表示游戏成功了。游戏中的箱子只能一个一个地推，不能拉。以上就是游戏的大概玩法。

#### 键盘和画面输出

画面的输入输出都是通过C++标准库`iostram`实现的。输入处理主要使用`istream`（*input stream*），输出处理则依赖`ostream`（*output stream*）

```c++
#include <iostream>
using namespace std;

int main(){
  char c;
  cin >> c;
  cout << "Input Character is " << c << endl;
  return 0;
}
```

`cin`和`cout`分别是`istream`类型和`ostream`类型的全局变量 `A`（全局变量指的是不属于任何类的变量。在C#和 Java 中没有这个概念，它们使用类中的`static`且`public`的变量来替代。），包含`iostream`头文件并声明`using namespace std`后，就可以在任意位置使用。
`cin`通过`>>`将输入值写入变量，`cout`通过`<<`将变量值输出。`endl`是“end line”的缩写，也就是换行，程序执行到该处将会输出一行字符到画面上。上面虽然只是一个在键盘上输入字符并通过回车键显示字符的简单程序，但这就是该游戏输入输出处理的全部内容。

#### 主循环

所谓游戏程序，无非就是获取输入、将输入反映到游戏世界中、显示结果这三项处理的无限循环，这个过程称为游戏循环或者主循环，代码如下所示：

```c++
while (true){
  getInput();
  updateGame();
  draw();
}
```

代码十分简单，但据笔者所知，所有的游戏程序无一例外地都采用了这种结构。可能根据游戏的不同，在`getInput()`中会有`cin`或手柄输入的不同，或者在`draw()`中会有`cout`或 3D 图形输出的不同，但是最基本的结构都是一致的。前面的例子中只执行了一次主循环，这是因为该游戏采用了命令行执行的方式。至于如何去掉这种限制，我们将在后续章节中讨论。

#### 编写逻辑处理

接下来开始各个模块的开发。建议读者动起手来，首先试着创建出前面截图中出现的游戏场景。
为方便描述，我们将像下面这样使用文本来表示游戏场景：

```
########
# .. p #
# oo # #
#      #
#      #
########
```

#### 测试

代码编写完后必须进行测试，这里我们按照下列四个要点进行：

+ 移动墙壁所在的格子会如何

+ 移动已经到达目的地的箱子会如何

+ 推动两个以上的箱子会如何

+ 朝着墙壁推动箱子会如何


测试中是不是发现了很多问题？可能要么墙壁排乱了，要么推动位于目的地的箱子时目标地点不见了，要么箱子被挤到墙壁中了……如果一开始就能正确运行，那固然值得高兴，但从长远来看，现在经历一些挫折或许会更有利。



### 示例代码讲解

#### 场景数据常量

刚开始我们使用全局变量来存储场景数据：

```c++
//“#”代表墙壁、“_”代表空间、“.”代表目的地、“o”代表箱子、“p”代表玩家
const char gStageData[] = "\
########\n\
# .. p #\n\
# oo   #\n\
#      #\n\
#\n\   #\n\
########";
const int gStageWidth = 8;
const int gStageHeight = 5;
```

首先用一个容易理解的字符串对该变量赋值，游戏开始后再将其转化为其他形式。相比一开始就使用 `0` 代表空间、`1` 代表玩家进行赋值，这样做更加简单。但需要注意的是，在C++ 中，如果字符串常量要中途换行显示，就必须在行末加上符号` \`。
这里定义的常量都是全局变量，笔者习惯以`g`开头命名。因为全局变量可以在程序中的任何地方被访问，所以加上这样一个标志以示区别会很方便。此外，按笔者的命名习惯，变量名都以小写字母开头，其后的每个单词则首字母大写，比如 `gStageWidth`。另外，因为后续没有修改该值的打算，所以使用了`const`关键字，这个习惯可以避免很多bug。

```c++
const int gStageWidth = 8; //第一次赋值 OK
gStageWidth = 4; //编译错误！
```

因为添加了`const`，所以如果代码试图在变量定义之外的地方对其赋值，则将导致编译错误，这可以防止某些错误操作。建议读者养成这个习惯，对第一次赋值后就不会再修改的变量添加`const`关键字。

#### 枚举类型

接下来是枚举类型：

```c++
enum Object{
  OBJ_SPACE,
  OBJ_WALL,
  OBJ_GOAL,
  OBJ_BLOCK,
  OBJ_BLOCK_ON_GOAL,
  OBJ_MAN,
  OBJ_MAN_ON_GOAL,
  OBJ_UNKNOWN,
};
```

场景中的所有状态都被保存在容量等于“宽 × 高”的枚举类型数组中。数组元素的类型可以是`int`或者`char`，只要保证元素值不会超出该类型所能表示的范围即可。不过，这样有可能会因为疏忽而代入无意义的值。使用枚举类型则不会有这个问题，并且调试时可以看见枚举类型的名字，很方便，所以应该尽量使用枚举类型。
注意“位于目的地的箱子”和“不在目的地的箱子”的枚举值是不同的。其实也可以采用另一种做法，将是否是目的地的信息单独存储在另外一个数组中，或者通过位运算将两种信息保存在同一个数组里。不过为了便于理解，这里我们采用了最直接的做法。

#### 函数原型

下面我们来看函数原型：

```c++
// 函数原型
void initialize( Object* state, int w, int h, const char* stageData );
void draw( const Object* state, int w, int h );
void update( Object* state, char input, int w, int h );
bool checkClear( const Object* state, int w, int h );
```

上述代码声明了几个函数：读取场景数据字符串并将其转换Object数组的 `initialize()`、画面绘制函数 `draw()`、更新函数 `update()`、检测游戏是否通关的 `checkClear()`。至于前面讨论主循环时出现的 `getInput()`函数，因为此处我们直接在 `main()` 函数中添加了输入处理的代码，所以用不上。注意开发时应当尽可能地将各个功能封装成函数。

#### main函数

现在来看程序的入口`main`函数。首先创建一个大小等于“宽 × 高”的Object数组，并调用初始化函数 `initialize()`，使游戏处于就绪状态。

```c++
int main(){
  // 创建状态数组
  Object* state = new Object[ gStageWidth * gStageHeight ];
  // 初始化场景
  initialize( state, gStageWidth, gStageHeight, gStageData );
  // 主循环
  ( 略 )
  // 胜利时的提示信息
  cout << "Congratulation's! you win." << endl;
  // 通关
  delete[] state; //通过 new 创建的数组不能使用 delete，而应当使用 delete[]
  state = 0; //笔者的习惯
  return 0;
}
```



读者可能不太熟悉这种把枚举类型当作类名处理的写法。实际上枚举类型是一种用于列举的类 型，所以可以通过 `new` 生成，也可以用作参数和返回值。记住这一点将大有裨益。虽然枚举类型内 部本质上是一个 `int`，但是如果将 Object 类型的变量赋值为 `5` 或者 `10` 等数值，则会导致编译错误， 这就保证了只能通过枚举类型来赋值。

另外请注意，虽然逻辑上 Object 应当是个二维数组，但是这里使用了一维数组的创建方式。 初学者往往习惯通过二维数组的方式进行声明，即像下面这样：

```c++
Object state[ 5 ][ 8 ];
```

但遗憾的是，二维数组无法通过 new 动态创建。如果不采用 `new` 来动态创建，就必须在定义数 组时就确定好数组的尺寸，比如横 8 纵 5，但是这样做会使数组的尺寸永远固定，程序将丧失一定的 灵活性。后面我们会讨论如何将一维数组当作二维数组来使用。

主循环结束意味着顺利通关，这时会输出胜利时的提示信息，然后释放 `state` 空间并结束程 序。虽然在程序退出前不执行 `delete` 也不会有什么问题，但还是应当养成及时释放空间的习惯。 注意这里通过 `new` 创建的数组在释放时必须使用 `delete[]` 而非 `delete`。后面我们会解释这么做 的原因。

最好将 `delete` 后的指针赋值为 `0`，这样可以在很大程度上避免一些指针相关的 bug。笔者在任何时候都遵守这个习惯，哪怕在程序即将退出时，也会将无用的指针赋值为 `0`。



##### 主循环

相关代码大致如下所示：

```c++
// 主循环
while ( true ){
  // 首先绘制
  draw( state, gStageWidth, gStageHeight );
  // 通关检测
  if ( checkClear( state, gStageWidth, gStageHeight ) ){
  break; //通关检测 }
  // 获取输入
  cout << "a:left s:right w:up z:down. command?" << endl; //操作说明 char input;
  cin >> input;
  // 更新
  update( state, input, gStageWidth, gStageHeight );
}
```

为了将输入前的状态反映到画面上，程序一开始就执行了 `draw( )`，但游戏整体仍然按照输 入更新、绘制的顺序执行。调用 `draw()` 后立刻执行通关检测是为了应对满足通关条件时的突发情况。试想如果在某个时刻场景数据已经满足了通关条件，这时没有执行通关处理却继续响应输入，那么推动箱子后就又将变成不允许通关的状态了。正因为如此，才需要在响应输入前先判断通关条件。

输入处理只是简单地通过 `cin` 读取输入的字符，在读取之前程序会提示操作说明。输入的内容会被传递给 `update()` 以更新游戏的状态。各个游戏的主循环处理基本上都遵循这个模式。



#### 初始化场景

`initialize()` 的内容如下所示：

```c++
void initialize(Object* state,int width,int height,const char* stageData ){
  const char* d = stageData; //读取指针 int x = 0;
  int y = 0;
  while ( *d != '\0' ){ //当字符不为NULL时
    Object t;
    switch ( *d ){
      case '#': t = OBJ_WALL; break;
      case ' ': t = OBJ_SPACE; break;
      case 'o': t = OBJ_BLOCK; break;
      case 'O': t = OBJ_BLOCK_ON_GOAL; break;
      case '.': t = OBJ_GOAL; break;
      case 'p': t = OBJ_MAN; break;
      case 'P': t = OBJ_MAN_ON_GOAL; break; 
      case '\n': //到下一行
        x = 0; //x返回到最左边
        ++y; //y 进到下一段
        t = OBJ_UNKNOWN; //没有数据 break;
      default: t = OBJ_UNKNOWN; break; //非法数据 }
      ++d;
      // 如果遇到未知字符则无视
      if ( t != OBJ_UNKNOWN ){
        state[ y*width + x ] = t; //写入
        ++x; }
} }
```



这段代码会逐个读取字符并将其转换为 Object 类型。`switch` 后的 `if` 语句是为了忽略非法输入。虽然程序考虑了数据中存在注释等无关信息的情况，但是错误处理仍不够完善。比如当场景数 据残缺不全，或者宽度、高度值和预想的不一致时，程序的行为都是未知的。最好的做法是通过场景数据自行计算出宽度和高度值，我们可以封装一个函数来实现这个功能。

另外，如前所述，`state` 变量是按照一维数组的方式创建的。

```c++
state[ y*width + x ] = t; //写入
```

`y*width + x`表示从左上角向右 x 列，向下 y 行处的网格位置。







```c++
void draw( const Object* state, int width, int height ){
  //Object 枚举类型的顺序
  const char font[] = {' ', '#', '.', 'o', 'O', 'p', 'P'};
  for ( int y = 0; y < height; ++y ){
    for ( int x=0; x < width; ++x ){
      Object o = state[ y*width + x ];
      cout << font[ o ];
    }
    cout << endl;
  }
}
```







<div align=center>
  <font size="3">
    <i> Acknowledgement <br/> 
      <a href="https://www.behance.net/BlakeFawley">Blake Fawley</a>
    </i>
  </font>
</div>