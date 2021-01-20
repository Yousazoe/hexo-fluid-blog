---
title: C#初级编程
abbrlink: 5342c81f
date: 2020-12-27 16:57:23
tags:
 - C#
 - Unity
categories: [游戏引擎(Game Engine),Unity]
index_img:
banner_img: https://tva1.sinaimg.cn/large/0081Kckwgy1gmd6blk9puj30xc0eg0w4.jpg
comment:
sticky:
---



本课程将通过Unity社区简单易学的讲解，从零基础开始介绍游戏开发编程。

<!--more-->



### 课程大纲

[点击查看Unity社区全部教程](https://unity.cn/ask/question/5f924d5cedbc2a0020a89d1e)

[**观看地址：**https://www.bilibili.com/video/BV1oy4y1q7jJ/](https://www.bilibili.com/video/BV1oy4y1q7jJ/)



+ **作为行为组件的脚本：**Unity 中的脚本是什么？了解作为 Unity 脚本的行为组件，以及如何创建这些脚本并将它们附加到对象。

+ **变量和函数：**什么是变量和函数？它们如何为我们存储和处理信息？

+ **约定和语法：**了解编写代码的一些基本约定和语法：点运算符、分号、缩进和注释。

+ **IF 语句：**如何使用 IF 语句在代码中设置条件。

+ **循环：**如何使用 For、While、Do-While 和 For Each 循环在代码中重复操作。

+ **作用域和访问修饰符：**了解变量和函数的作用域和可访问性。

+ **Awake 和 Start：**如何使用 Unity 的两个初始化函数 Awake 和 Start。

+ **Update 和 FixedUpdate：**如何使用 Update 和 FixedUpdate 函数实现每帧的更改，以及它们之间的区别。

+ **矢量数学：**矢量数学入门以及有关点积和叉积的信息。

+ **启用和禁用组件：**如何在运行时通过脚本启用和禁用组件。

+ **激活游戏对象：**如何使用 SetActive 和 activeSelf/activeInHierarchy 单独处理以及在层级视图中处理场景内部游戏对象的活动状态。

+ **Translate 和 Rotate：**如何使用两个变换函数 Translate 和 Rotate 来更改非刚体对象的位置和旋转。

+ **Look At：**如何使用 LookAt 函数使一个游戏对象的变换组件面向另一个游戏对象的变换组件。

+ **线性插值：**在制作游戏时，有时可以在两个值之间进行线性插值。这是通过 Lerp 函数来完成的。

+ **Destroy：**如何在运行时使用 Destroy() 函数删除游戏对象和组件。

+ **GetButton 和 GetKey：**本教程演示如何在 Unity 项目中获取用于输入的按钮或键，以及这些轴的行为或如何通过 Unity Input Manager 进行修改。

+ **GetAxis：**如何在 Unity 中为游戏获取基于轴的输入，以及如何通过 Input Manager 修改这些轴。

+ **OnMouseDown：**如何检测碰撞体或 GUI 元素上的鼠标点击。

+ **GetComponent：**如何使用 GetComponent 函数来处理其他脚本或组件的属性。

+ **DeltaTime：**什么是 Delta Time？如何在游戏中将其用于对值进行平滑和解释？

+ **数据类型：**了解“值”和“引用”数据类型之间的重要区别，以便更好地了解变量的工作方式。

+ **类：**如何使用类来存储和组织信息，以及如何创建构造函数以便处理类的各个部分。

+ **Instantiate：**如何在运行期间使用 Instantiate 创建预制件的克隆体。

+ **数组：**使用数组将变量集合在一起以便于管理。

+ **Invoke：**Invoke 函数可用于安排在以后的时间进行方法调用。在本视频中，您将学习如何在 Unity 脚本中使用 Invoke、InvokeRepeating 和 CancelInvoke 函数。

+ **枚举：**枚举可用于创建相关常量的集合。在本视频中，您将学习如何在代码中声明和使用枚举。

+ **Switch 语句：**Switch 语句的作用类似于简化条件。当您希望将单个变量与一系列常量进行比较时，这类语句很有用。在本视频中，您将学习如何编写和使用 switch 语句。



### 作为行为组件的脚本

与Unity中的其他组件一样，脚本也可以应用于对象并显示在Inspector中。在本例中有一个`Rigibody`组件，该组件赋予它物理质量，按运行时立方体会因为重力掉落到地上。

添加示例脚本：

```c#
using UnityEngine;
using System.Collections;

public class ExampleBehaviourScript: MonoBehaviour
{
  void Update()
    {
        if(Input.GetKeyDown(KeyCode.R))
        {
            GetComponent<Renderer>().material.color = Color.red;
        }
        if(Input.GetKeyDown(KeyCode.G))
        {
            GetComponent<Renderer>().material.color = Color.green;
        }
        if(Input.GetKeyDown(KeyCode.B))
        {
            GetComponent<Renderer>().material.color = Color.blue;
        }
        
    }
}  
```



该代码通过调整对象关联的默认材质的`Color`值改变目标体的颜色：

+ 按`R`键时，颜色变成红色
+ 按`G`键时，颜色变成绿色
+ 按`B`键时，颜色变成蓝色

将此脚本关联至对象后，当我们引用游戏对象时，引用的就是这个特定项，接着深入其中（`Mesh Renderer`渲染器），找到我们想要的值（关联渲染器材质）并使其生效（颜色）。



脚本可以在项目面板中创建，选择`Create`-->`C# Script`，然后将脚本关联到对象：可以通过拖拽的方式；也可以选中`Add Component`按钮（位于组件菜单底部），然后从当前脚本列表中选择或下拉菜单底部的`New Script`，然后给脚本命名。



### 变量和函数

#### 变量

我们可以将变量看作包含信息的盒子，不同类型的信息需要使用不同类型的盒子。

定义变量时首先要确定想要哪种类型的盒子，例如`int`是integer的缩写；接着为盒子命名以标识盒子；最后是声明变量，也就是在末尾加上分号`;`

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VariablesAndFunctions : MonoBehaviour
{
    int myInt;
}
```



也可以在盒子中输入要包含的信息，比如数字5：前半部分是声明，后半部分是初始化，也就是盒子被赋予实际信息值的过程。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VariablesAndFunctions : MonoBehaviour
{
    int myInt = 5;
}
```


如果想让这个变量发挥实际作用，就要把它套入函数中。大家可以看到，编写新脚本时我们会用到`Start()`函数和`Update()`函数。

当这个脚本绑定的对象进入场景时就会调用`Start()`函数，我们可以输入`Debug.Log()`来获取游戏中任意变量的值，所以我们在这里输入`myInt`，如果只是为了记录这个变量的值，应该能在Unity控制台中看到这个值。保存脚本，然后关联到`GameObject`比如一个空对象，按运行后就会看到控制台中显示`myInt`的值。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VariablesAndFunctions : MonoBehaviour
{
    int myInt;

    void Start()
    {
        Debug.Log(myInt);
    }
}
```



![](https://tva1.sinaimg.cn/large/008eGmZEly1gmjhv3wervj30sn0830t5.jpg)



这个变量会保持这个值不变直到我们给它指定一个新值。比如我们可以把这个变量和另一个整数一起使用。这里我用`myInt`乘以2，这时控制台会显示这个整数乘以2的结果（5乘以2等于10）。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VariablesAndFunctions : MonoBehaviour
{
    int myInt = 5;

    void Start()
    {
        Debug.Log(myInt * 2);
    }
}
```



当然，如果我们要重新赋值，就会得到一个不同的值。如果我输入`myInt = 55`，虽然这个变量的初始值为5，但已重新赋值为55，现在我们得到值110.如果我保存脚本，再次运行，就会看到110。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VariablesAndFunctions : MonoBehaviour
{
    int myInt = 5;

    void Start()
    {
      	myInt = 55;
        Debug.Log(myInt * 2);
    }
}
```



![](https://tva1.sinaimg.cn/large/008eGmZEly1gmjigo14utj30tv08j0t5.jpg)


#### 函数

为了利用盒子（也就是变量）实现更复杂的操作，就需要使用函数。函数有时被称为方法，函数以存储信息的盒子为输入，然后输出结果，这个过程称为返回，比如刚刚输入的`Start()`函数是一个不返回任何结果的函数的例子，所以它的返回类型是`void`。

编写函数时可以指定一个特定的返回类型，我可以把`int`定义为一个函数类型，然后给它指定名称，我可以把这个函数命名为`MultiplyByTwo`。函数可以有参数，所以需要给这个函数指定特定类型的参数时，我还会指定`int`因为我想把这类信息提供给这台机器，这样才能返回相应的结果。

要记住的是，这些花括号定义的是这台机器的内部运作，虽然变量或参数放在圆括号中，但花括号才是真正定义函数实际操作的。我在这里输入了`int number`实际上是创建了一个临时变量名为`number`，它是函数或机器的组成部分，稍后调用这个函数时我会用它向这个函数提供数字。

在这个机器内，我会再创建一个临时变量，然后对这个变量进行操作。我要再创建一个名为`result`的整数，然后使用这个变量指定这个变量等于`number`变量乘2，接着使用这个`return`指令运行这个函数的实际结果。退回到`Start()`函数调用`MultiplyByTwo()`。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VariablesAndFunctions : MonoBehaviour
{
    int myInt = 5;

    void Start()
    {
        MultiplyByTwo(myInt);
    }

    int MultiplyByTwo(int number)
    {
        int result;
        result = number * 2;
        return result;
    }
}
```



此时的`myInt`依然为5，因为没有真正给它赋值。下面我们通过函数对它进行赋值，最后通过`Debug.Log()`在控制台窗口中查看输出的结果：

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VariablesAndFunctions : MonoBehaviour
{
    int myInt = 5;

    void Start()
    {
        myInt = MultiplyByTwo(myInt);
        Debug.Log(myInt);
    }

    int MultiplyByTwo(int number)
    {
        int result;
        result = number * 2;
        return result;
    }
}
```



![](https://tva1.sinaimg.cn/large/008eGmZEly1gmjir0a4raj30tx08ndg9.jpg)



### 约定和语法

#### 代码编写语法

代码编写语法就是指语言结构，有些约定对于学习阅读和编写代码至关重要。比如句点运算符是一个句点或句号，常用于代码内的单词之间，它的作用就像是编写一行地址。观察下面的代码，我们可以把`Debug`看作国家，把`Log`看作城市，我们深入探索`Debug`中的内容，而`Log是其中一个元素。而代码补全会在我们打出句号后提供一个选项列表便于我们补完代码，这样有助于提高编程速度避免出错，也有助于了解有哪些可用选项。

再换一个来理解：`transform`相当于国家，`position`相当于城市，`x`相当于城市中我们要找的那条街道。句点运算符让我们能有效分隔或访问Unity中复合项的各个元素。复合项指包括多个元素的项，例如`transform`包含`position`、`rotation`和`scale`，我们用句点选择`position`；同理我们也可以再次用句点选择`x`。



```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BasicSyntax : MonoBehaviour
{
    void Start()
    {
        Debug.Log(transform.position.x);

        if (transform.position.y <= 5f)
        {
            Debug.Log("I'm about to hit the ground");
        }
    }
}
```

#### 分号

下一个语法元素是分号。分号的作用是终止语句，因此每一行末尾都有一个分号。但并非所有代码都是语句，例如类声明语句的首尾、函数或`if`语句的首尾等。所有使用花括号的语句末尾都不需要分号，花括号中的所有语句例如左花括号后面或者右花括号的前面之间的所有语句都以分号结尾。

#### 缩进

接下来讲解缩进。缩进是代码编写的重要组成部分，它令代码清晰易读。从技术角度来说，缩进代码并非必需，但它能让我们更轻松地阅读代码，因为它能显示代码的功能结构。现在上面这些代码已经完全采用缩进格式，但如果我按`Shift`和`Tab`键取消缩进，给人的感觉会非常糟糕：

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BasicSyntax : MonoBehaviour
{
void Start()
{
Debug.Log(transform.position.x);

if (transform.position.y <= 5f)
{
Debug.Log("I'm about to hit the ground");
}
}
}
```

#### 注释

最后介绍注释。注释的作用是写下关于某一段代码的注释，给自己留下备注或提醒。要编写单行注释使用双正斜杠`//`；要编写多行注释，用一个正斜杠加一个星号`/*`，终止时调转顺序`*/`。在这个范围内可以写入任意行数的注释。注释的作用是给自己或者其他程序员留下备注，但也可以用于部分暂时禁用的代码。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BasicSyntax : MonoBehaviour
{
    void Start()
    {
        // This line is there to tell me the X position of my object
        Debug.Log(transform.position.x);

        /* Hi there!
         * This is two lines!
         */
        if (transform.position.y <= 5f)
        {
            Debug.Log("I'm about to hit the ground");
        }
    }
}
```





### IF语句

编写代码时，你所写的代码通常需要根据条件作出决策。想象一下喝咖啡的情景，刚开始时咖啡很烫，你需要试试看温度是否合适入口，如果咖啡的温度高于你能接受的最高温度，那你就不会喝。`if`语句的一个延伸语句是`if-else`，以咖啡为例，`else`语句可以是你会喝咖啡。要执行这个动作，必需满足第一个条件，所以如果咖啡温度适合入口，则饮用。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class IfStatements : MonoBehaviour
{
   private float coffeeTemperature = 85.0f;
   private float hotLimitTemperature = 70.0f;
   private float coldLimitTemperature = 40.0f;

   void Update()
   {
      if (Input.GetKeyDown(KeyCode.Space))
         TemperatureTest();
   }

   void TemperatureTest()
   {
      if (coffeeTemperature > hotLimitTemperature)
      {
         print("Coffee is too hot.");
      }
      else
      {
         print("Coffee is just right.");
      }
   }
}
```



这个语句还可以继续延伸，再用一个`if`将这个`else`语句设为条件语句。在咖啡示例中，如果咖啡太烫，则不饮用；但如果咖啡搁置太久而凉掉，则同样不饮用；但如果这两个条件都不满足，即 咖啡既不过烫又不过凉，说明咖啡处于合适的饮用温度。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class IfStatements : MonoBehaviour
{
   private float coffeeTemperature = 85.0f;
   private float hotLimitTemperature = 70.0f;
   private float coldLimitTemperature = 40.0f;

   void Update()
   {
      if (Input.GetKeyDown(KeyCode.Space))
         TemperatureTest();
     
      coffeeTemperature -= Time.deltaTime * 5f;
   }

   void TemperatureTest()
   {
      if (coffeeTemperature > hotLimitTemperature)
      {
         print("Coffee is too hot.");
      }
      else if (coffeeTemperature < coldLimitTemperature)
      {
         print("Coffee is too cold.");
      }
      else
      {
         print("Coffee is just right.");
      }
   }
}
```



回到Unity中不断按空格键查看代码实际运行结果：

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmjknydwrgj30sl0d50tl.jpg)





### 循环

循环是编程中重复操作的方式，我们将学习3种不同的循环类型：`ForLoop`、`WhileLoop`和`DoWhileLoop`。所有循环示例都已关联了游戏对象，通过查看控制台查看响应结果。

#### WhileLoop

首先看一下`WhileLoop`。`WhileLoop`的作用是在满足条件时执行操作，本例有一个名为`cupsInTheSink`的变量，水槽中有4个杯子，当`cupsInTheSink`的值大于0时就需要洗杯子。我们只需要查找"I've washed a cup!"并从`cupsInTheSink`变量的值中减去1。


```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WhileLoop : MonoBehaviour
{
   private int cupsInTheSink = 4;

   void Start()
   {
      while (cupsInTheSink > 0)
      {
         Debug.Log("I've washed a cup!");
         cupsInTheSink--;
      }
   }
}
```


这个循环会继续4次，因为我们有4只杯子，看一下实际的运行情况。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmjl1sw0fbj30ty0dy3z4.jpg)


可以看到，我们洗了4只杯子。

#### DoWhileLoop

接下来我们来介绍`DoWhileLoop`。`DoWhileLoop`的功能与`WhileLoop`几乎一样，只有一个明显区别，`WhileLoop`在循环主体前检验条件，但`DoWhileLoop`在循环主体结束时检验条件，这个区别意味着`DoWhileLoop`主体至少会运行一次。

在本例中，变量`shouldContinue`为`true`时才会继续。可以看到变量初始值设为`false`，所以条件句会让循环结束。最后注意条件句后面的分号，`WhileLoop`不使用分号，但`DoWhileLoop`使用分号。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DoWhileLoop : MonoBehaviour
{
   void Start()
   {
      bool shouldContinue = false;

      do
      {
         print("Hello World");
      } while (shouldContinue == true);
   }
}
```

回到控制台界面，启动`DoWhileLoop`脚本，然后运行。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmjlfjy9wtj30ty0dyq3j.jpg)

可以看到控制台中输出了"hello world"字样。虽然条件初始设定是解析为`false`，但`DoWhileLoop`的循环主体始终会运行至少一次。


#### ForLoop

最后介绍`ForLoop`。`ForLoop`或许是最常见最灵活的循环，它利用可控数量的迭代创建循环。就功能而言，他会先检查循环中的条件，也就是这里`i`小于`numEnemies`。如果符合条件，就执行循环主体中的指令，一个循环为一次迭代，每次循环结束后可以选择让值递增。在这里的第3个参数中，可以看到`i`的值每次增加1。

从代码编写的角度来看，它的语法由3个参数组成，首先介绍这个成为迭代子的变量`int i = 0;`。它的作用是计算循环迭代次数，也就是循环次数；第2个参数是一个条件`i < numEnemies;`，只有当它为`true`时循环才会继续；最后第3个参数定义的是每次循环中对迭代子的处理`i++`，这通常意味着增加迭代子的值直到完成循环。

在编程中，通常从0开始计数，所以第1次循环`i`的值为0，然后运行让`i`值增加1的`i++`运算；第2次循环`i`值为1，以此类推。循环会继续下去直到`i`等于或者大于`numEnemies`变量时停止循环，验证条件变为`false`。控制台也不会输出"Creating enemy number:3"的信息，因为当`i`等于3时它就不再小于`numEnemies`，因此不再运行循环主体中的命令。



```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ForLoop : MonoBehaviour
{
   private int numEnemies = 3;
   
   void Start()
   {
      for (int i = 0; i < numEnemies; i++)
      {
         Debug.Log("Creating enemy number:" + i);
      }
   }
}
```

简而言之，任何需要执行指定次数的运算都可以使用`ForLoop`实现。运行代码可以看到它在控制台记录了3次：`i`值起始为0，接着是1，最后是2。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmjn4l93gdj30sl0ckgmf.jpg)


你可以灵活利用不同循环，而且也应该考虑使用循环根据特定条件重复不同的操作。


### 作用域和访问修饰符

变量作用域指代码中可使用这个变量的区域，变量局限于代码中可以使用这个变量的位置。代码块通常用于定义变量作用域，用花括号表示，例如这个类内的所有内容都可以成为该类的局部代码。可以说变量`alpha`、`beta`、`gamma`在`ScopeAndAccessModifiers`类的作用域内，也可以说`pens`、`crayons`和`answer`变量在`Example`函数的作用域内。

接下来介绍公开和私有访问修饰符。类内定义的变量不同于函数内声明的变量，前者分配有访问修饰符。访问修饰符是在声明变量时放在数据类型前面的关键词，其用途是定义能够看到变量或函数的位置。一般而言，如果其他脚本需要访问某个变量或函数，就应将其公开`public`，否则就应设为私有`private`。

#### 公有变量

将变量设为公开意味着可从类外部访问这个变量，也意味着这个变量可在Inspector中的组件上现实和编辑。


```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScopeAndAccessModifiers : MonoBehaviour
{
   public int alpha = 0;

   private int beta = 0;
   private int gamma = 5;

   void Example(int pens, int crayons)
   {
      int answer;
      answer = pens * crayons * alpha;
      Debug.Log(answer);
   }

   void Update()
   {
      Debug.Log("Alpha is set to:" + alpha);
   }
}
```



挂载脚本后我们可以看到公开变量`alpha`作为属性包含在内，而且可以编辑，这样用户就可以在测试游戏时编辑这个变量。例如，假设这个值控制汽车速度，最好能在测试时调整这个变量而不必暂停，然后编辑脚本再重新运行。因此把它设为公开变量就很合理。

注意，如果变量在类中初始化为默认值，例如输入`alpha = 5`，它仍会被Inspector中的值覆盖。但如果这些值在函数中设置如`Start()`和`Awake()`，它们则出现在Inspector中设置过变量之后，因此不会被覆盖。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScopeAndAccessModifiers : MonoBehaviour
{
   public int alpha = 5;

   private int beta = 0;
   private int gamma = 5;

   void Start()
   {
      alpha = 29;
   }
   
   void Example(int pens, int crayons)
   {
      int answer;
      answer = pens * crayons * alpha;
      Debug.Log(answer);
   }

   void Update()
   {
      Debug.Log("Alpha is set to:" + alpha);
   }
}
```


![](https://tva1.sinaimg.cn/large/008eGmZEly1gmju1wo8cgj3080037dfy.jpg)


#### 私有变量

私有变量只能在类内编辑。在C#中，未指定访问修饰符的任意变量默认使用私有访问修饰符，所以虽然在`beta`和`gamma`中写入了`private`，但即使没写，它们也会使用`private`。

最好是将所有成员变量，也就是属于类而非函数的变量都设为私有，除非需要将它们公开以满足特定需要。将变量和函数设为公开也意味着可以通过其他脚本访问它们，比如这个类有2个函数，公开函数名为`FruitMachine`，私有函数名为`OfficeSort`，还有一些公开变量和一些私有变量。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AnotherClass
{
    public int apples;
    public int bananas;

    private int stapler;
    private int sellotape;

    public void FruitMachine(int a, int b)
    {
        int answer;
        answer = a + b;
        Debug.Log("Fruit total:" + answer);
    }

    private void OfficeSort(int a,int b)
    {
        int answer;
        answer = a + b;
        Debug.Log("Office Supplies total:" + answer);
    }

}
```

回到原脚本中，我只能访问刚才那个脚本的公开成员。例如我创建一个`AnotherClass`类实例，可以看到当我尝试访问它时，可以使用`apple`和`bananas`变量以及`FruitMachine`。


![](https://tva1.sinaimg.cn/large/008eGmZEly1gmjuomizf0j30xb0g6wig.jpg)


```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScopeAndAccessModifiers : MonoBehaviour
{
   public int alpha = 5;

   private int beta = 0;
   private int gamma = 5;
   private AnotherClass myAnotherClass;
   
   
   void Start()
   {
      alpha = 29;
      
      myAnotherClass = new AnotherClass();
      myAnotherClass.FruitMachine(alpha,myAnotherClass.apples);
   }
   
   void Example(int pens, int crayons)
   {
      int answer;
      answer = pens * crayons * alpha;
      Debug.Log(answer);
   }

   void Update()
   {
      Debug.Log("Alpha is set to:" + alpha);
   }
}
```

注意，由于`OfficeSort()`和`stapler`都是私有的，所以无法通过创建`AnotherClass`实例来访问它们，它们只能在这个类中使用。



### Awake和Start

`Awake()`和`Start()`是在加载脚本时自动调用的两个函数。

首先调用`Awake()`，即使还未启用脚本组件也没关系，它非常适合于在脚本与初始化之间设置任何引用。`Start()`在`Awake()`之后调用，而且是直接在首次更新之前调用，但前提是已经启用了脚本的组件，即启用脚本组件的情况下可以用`Start()`启动任何所需操作。这样就可以将初始化代码的任何部分延迟到真正需要的时候再运行。

例如有一个敌方角色进入游戏并使用`Awake()`获得了分配的弹药，但要想射击需在启用脚本组件时使用`Start()`在定义时间实现射击。但需要注意的是`Start()`和`Awake()`在一个对象绑定脚本的生命周期只能调用一次，因此不能通过禁用和重新启用脚本来重复执行`Start()`函数。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AwakeAndStart : MonoBehaviour
{
   //Reference between scripts,initialization
   void Awake()
   {
      Debug.Log("Awake called.");
   }

   //Once script component is enabled
   void Start()
   {
      Debug.Log("Start called.");
   }
   
}
```



![](https://tva1.sinaimg.cn/large/008eGmZEly1gmjzbi2fn0j30ty0eet9g.jpg)


### Update和FixedUpdate

#### Update

Update是Unity中最常用的函数之一，在每个使用它的脚本中每帧调用一次。基本上只要需要变化或调整都需要使用Update来实现，非物理对象的移动、简单的计时器、输入检测等等一般都在`Update()`中完成。请注意，`Update()`并不是按固定时间调用的，如果某一帧比下一帧的处理时间长，那么`Update()`调用的时间间隔就会不同。


```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UpdateAndFixedUpdate : MonoBehaviour
{
   private float fixedUpdateTimer;
   private float UpdateTimer;

   void FixedUpdate()
   {
      Debug.Log("FixedUpdate time:" + Time.deltaTime);
   }

   void Update()
   {
      //Called every frame
      //Used for regular updates such as:
      //Moving non-physics object
      //Simple Timers
      //Receiving Input
      
      //Update interval time vary
      Debug.Log("Update time:" + Time.deltaTime);
   }
}
```

#### FixedUpdate

`FixedUpdate()`函数与`Update()`相似，但有几点明显不同。`FixedUpdate()`按固定时间调用，调用的时间间隔相同，调用`FixedUpdate()`之后会立即进行任何必要的物理计算。因此，任何影响刚体（即物理对象）的动作都应使用`FixedUpdate()`执行而不是`Update()`。

在`FixedUpdate()`循环中编写物理脚本时最好使用力来定义移动。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UpdateAndFixedUpdate : MonoBehaviour
{
   private float fixedUpdateTimer;
   private float UpdateTimer;

   void FixedUpdate()
   {
      //Called every physics step
      //FixedUpdate intervals are consistent
      //Used for regular updates such as:
      //Adjusting physics (Ridgidbody) objects
      Debug.Log("FixedUpdate time:" + Time.deltaTime);
   }

   void Update()
   {
      Debug.Log("Update time:" + Time.deltaTime);
   }
}

```

回到Unity来看一下两者的具体区别：

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmk1annywij30tx0eegne.jpg)

可以发现`FixedUpdate()`的时间间隔始终是0.02，而`Update()`的时间间隔各不相同。

`Update()`和Unity中许多其他特殊函数都可以通过MonoBehavior脚本编写向导即可实现。在Vistual Studio中，将光标放在需要插入新函数的位置，然后按`Ctrl + Shift + M`启动向导，在"Create Script Methods"窗口中勾选想要添加的各个方法名称旁边的复选框。

### 矢量教学

在游戏开发中，我们利用向量来定义网格、方向和所有其他类型的计算，因此必须理解何谓向量。



#### 二维向量 

向量(Vector)是在两点之间绘制的线条，向量的长度称为大小(Magnitude)。先简单了解一下二维向量：

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmk29qlrasj30uc0eegoh.jpg)

二维向量表示二维平面上的点，它以原点(0,0)为参照指向二维平面的任意点。因为从原点出发，因此有隐含方向，它由X和Y这两个坐标组成，它们分别代表X和Y轴上与0的距离。在本例中，向量始于原点指向位置(12,5)这2个点之间的距离称为向量大小。向量大小可以利用勾股定理计算出来，斜边平方等于另外两边的平方和，而向量运算中的斜边就是我们要确定的向量大小。


![](https://tva1.sinaimg.cn/large/008eGmZEly1gmk2c71knrj30u70fsjx1.jpg)

假设场地中有2个人，Charles和Quentin，他们要厮杀对决。为符合绅士身份，他们同意用手枪决斗，但枪的射程为12个单位，他们是否能射中彼此呢？我们来计算一下：

$Magnitude = \sqrt{x^2 + y^2} = \sqrt{12^2 + 5^2} = 13$

可以看到，向量大小等于网格上X和Y平方之和的平方根，所以他们无法射中彼此。

再来看另一个例子如何用向量解决二维空间中的问题。我们已经直到向量可用于表示空间内相对于原点的位置，但还应该知道移动物体有速度，而且位置会随着时间变化，这也能用向量表示。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmk2py42ibj30tp0cy76v.jpg)

在这个图中，Frederick的位置为(5,6)，速度是(12,5)/小时，这意味着他的移动方向是沿X轴前进12个单位，沿Y轴前进5个单位。为了找到他在1小时后的新位置，我们用当前位置向量加上速度向量计算出最终位置坐标为(17,11)。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmk2qqhhwej30y10fbjva.jpg)

记住，所有向量表示都相对于原点，即空间中0点的位置，速度向量也是如此。这在涉及预测的游戏开发任务中十分有用，应该注意的是最终位置的坐标等于这2个向量的坐标之和。


#### 三维向量

三维向量与二维向量的原理是相同的，但延伸出一个Z轴，它表示深度。X轴和Z轴构成水平面，Y轴代表朝上的方向。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmk345a92kj30nx0af3zr.jpg)

Unity采用左手坐标系(Left Hand Rule Coordinates)，这意味着如果你举起左手食指朝上，拇指朝外成L形，中指朝前，则拇指代表X轴，食指代表Y轴，中指代表Z轴，这个手势能有效地让你联想到X Y和Z轴的顺序。

由于Z轴代表深度，那么在上一个例子中，Charles和Quentin其实是站在X/Z平面上。要记住，任何三维坐标都采用X/Y/Z的顺序表示，Quentin站立位置是(0,0,0)即三维坐标原点，Charles站立位置是(12,0,5)。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmk35645kqj30v10hw49d.jpg)

为增强三维空间感，可以想象Charles位于更高的优势点，现在他站在高7个单位的平台上，位置坐标是(12,7,5)。Charles和Quentin之间的向量大小计算方式与二维坐标相同，不过现在多了一个Z轴：

$Magnitude = \sqrt{x^2 + y^2 + z^2} = \sqrt{12^2 + 7^2 + 5^2} = \sqrt{218} = 14.76$


![](https://tva1.sinaimg.cn/large/008eGmZEly1gmk362mf2gj30up0i1alk.jpg)

Unity为了方便进行此类计算引入了一个帮助函数`Vector3.magnitude`，可以参阅官方温度以了解详情。

#### 点积

有多个有的函数适用于三维向量，点积和叉积。点积需要2个向量，根据它们的X Y和Z值分别相乘然后将乘积相加最终计算出一个值，即标量：

$Dot Produxt=(Ax * Bx)+(Ay * By)+(Az * Bz)$

利用点积可以了解指定的2个向量的相关信息，比如可以了解2个向量是否相互垂直，如果点积为0则表明这2个向量相互垂直。

使用点积的示例包括创建飞行模拟器。这时可以检查场景向上向量与飞机向前向量的关系，如果2个向量相互垂直/点积等于0，飞机阻力最小。随着点积正值增大，表明飞机正在爬升，我们可以增加阻力；如果点积负值增大，表明飞机正在俯冲。

Unity有一个帮助函数可轻松完成点积运算`Vector3.Dot(VectorA,VectorB)`，可以参阅官方温度以了解详情。

#### 叉积

叉积以不同的方式组合2个向量，而不是产生一个标量值。叉积会计算出另一个向量，具体来说是与原来2个向量垂直的向量。例如，如果对向量A和B进行叉积运算得出结果是向量C，C与向量A和向量B垂直，在数学上用插入符号表示 A ^ B = C。

因为Unity采用左手坐标系，叉积也是如此。在本例中，拇指和食指表示向量A和B即已知向量，中指表示叉积结果即向量C。

$Cross Product = \begin{pmatrix}Ay*Bz - Az*By \\\\ Az*Bx - Ax*Bz \\\\ Ax*By - Ay*Bx\end{pmatrix} = \begin{pmatrix}Cx \\\\ Cy \\\\ Cz\end{pmatrix}$

虽然这个运算很复杂，但好在Unity提供了另一个帮助函数`Vector3.Cross(VectorA,VectorB)`，可以参阅官方温度以了解详情。

使用叉积的示例包括确定围绕哪个轴施加扭矩来旋转坦克的炮塔。假设你已知炮塔目前的朝向，也知道炮塔的目标朝向就可以对2个向量进行叉积运算确定对哪个轴施加转动扭矩

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmk3vupocej311y0lc0vn.jpg)


### 启用和禁用组件

启用和禁用Unity中的组件，只需使用`enabled`标记。在本例中，我们引用了Light命名为`myLight`，在`Start()`中我们用`GetComponent`函数将这个变量设置为与对象关联的Light组件。在`Update()`中要等待按下空格键，然后将`myLight`的`enabled`标记设为`false`。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnableComponents : MonoBehaviour
{
   private Light myLight;

   void Start()
   {
      myLight = GetComponent<Light>();
   }

   void Update()
   {
      if (Input.GetKeyUp(KeyCode.Space))
      {
         myLight.enabled = false;
      }
   }
}

```

更改为切换模式，让空格起到切换作用，而组件显示为勾选和取消勾选。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnableComponents : MonoBehaviour
{
   private Light myLight;

   void Start()
   {
      myLight = GetComponent<Light>();
   }

   void Update()
   {
      if (Input.GetKeyUp(KeyCode.Space))
      {
         myLight.enabled = !myLight.enabled;
      }
   }
}

```

脚本也是组件，所以也可以使用`.enabled`标记来禁用脚本。


### 激活游戏对象

要通过脚本激活或停用对象，可以使用`SetActive`函数，此函数能在场景中激活或停用对象。在本例中用了一个简单的`Start()`函数，它包含`gameObject.SetActive(false);`，在游戏对象已经激活的状态点击运行对象会被停用。


```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ActiveObjects : MonoBehaviour
{
   void Start()
   {
      gameObject.SetActive(false);
   }
}
```

如果使用对象层次结构必须知道父对象可被停用，这样也会停止场景中活跃的子对象，但它仍在其层次结构中保持活跃状态。因此可以禁用个别对象，但可以使用父对象保持对于子对象的控制。

要确认某个对象在场景或在层次结构中是否为活跃状态，可以使用`Active Self`和`Active in Hierarchy`状态查询。在这个`CheckState`脚本中，这个公开变量表示游戏对象，检查这个游戏对象确认它是`Active Self`还是`Active in Hierarchy`。我们以调试记录的方式将其状态记录到控制台中。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CheckState : MonoBehaviour
{
   public GameObject myObject;
   
   void Start()
   {
      Debug.Log("Active Self:" + myObject.activeSelf);
      Debug.Log("Active in Hierarchy" + myObject.activeInHierarchy);
   }
}
```

当父对象被停用时，子对象再次激活在场景中也不是活跃状态。还应注意当子对象由于其父对象被禁用而随之被禁用时，使用`Set Active to True`也不会激活子对象，要再次激活子对象就必须激活父对象。


### Translate和Rotate

平移`Translate`和旋转`Rotate`是2种常用函数用来更改游戏对象的位置和旋转。在本例中，我们先介绍平移，可以看到平移参数为`Vector3`仅沿Z轴向下平移，所以可以看到X和Y的值都为0。每帧移动一个单位，因为它在`Update()`函数中，所以会移动的非常快。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TransformFunctions : MonoBehaviour
{
   void Update()
   {
      transform.Translate(new Vector3(0,0,1));
   }
}
```

通常在使用平移操作时会乘以`Time.deltaTime`，这意味着它会按每秒多少米的速度移动而不是每帧多少米。


```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TransformFunctions : MonoBehaviour
{
   public float moveSpeed = 10f;
   
   void Update()
   {
      transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
   }
}
```

这样就可以通过调整Inspector中的变量加以控制，但如果不希望逐帧运动应该怎么办？比如希望按下某个键时发生运动，即只有按下UP/DOWN/Left/Right方向键时才会运动。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TransformFunctions : MonoBehaviour
{
   public float moveSpeed = 10f;
   
   void Update()
   {
      if (Input.GetKey(KeyCode.UpArrow))
         transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
      if (Input.GetKey(KeyCode.UpArrow))
         transform.Translate(-Vector3.forward * moveSpeed * Time.deltaTime);
   }
}
```

接下来介绍`transform.Rotate`，它的原理十分相似，还是使用`Vector3`作为参数，它表示围绕哪个轴旋转；旋转量是第二个参数。


```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TransformFunctions : MonoBehaviour
{
   public float moveSpeed = 10f;
   public float turnSpeed = 50f;
   
   void Update()
   {
      if (Input.GetKey(KeyCode.UpArrow))
         transform.Translate(Vector3.forward * moveSpeed * Time.deltaTime);
      if (Input.GetKey(KeyCode.UpArrow))
         transform.Translate(-Vector3.forward * moveSpeed * Time.deltaTime);
      if (Input.GetKey(KeyCode.LeftArrow))
         transform.Rotate(Vector3.up * turnSpeed * Time.deltaTime);
      if (Input.GetKey(KeyCode.RightArrow))
         transform.Rotate(-Vector3.up * turnSpeed * Time.deltaTime);
   }
}
```

应当注意，这些函数作用于局部轴而非世界轴，所以使用`Vector3D.forward/up`时相对的是脚本所应用到的游戏对象的轴。还需要注意如果想用碰撞体移动某个对象，也就是将会产生物理作用的物体，则不应使用`Translate`和`Rotate`函数，而是应该考虑使用`Physics`函数。


### LookAt

`LookAt`可用于让游戏对象的正向指向世界中的另一个`transform`。在本例中，`Lemonhead`掉到了`Skatebot`并弹开，摄像机对准了`Skatebot`就像游戏视图所示一样，但如果想让镜头对准正在掉落的对象呢？


```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraLookAt : MonoBehaviour
{
   public Transform target;

   void Update()
   {
      transform.LookAt(target);
   }
}
```

这时就可以在`Update()`函数中使用`LookAt`函数来达到这个目的。在这个脚本中，可以看到我们引用了想要寻找的对象`target`，通过`transform.LookAt()`函数让对象看向`target`。

现在我们只需将此脚本应用于摄像机，并将`Lemonhead`游戏对象拖入`target`变量字段，按下运行摄像机持续朝向移动对象。记住，可以在界面顶部切换`Global`和`Local`访问形式，如果切换为`Local`，可以看到正向朝向对象。


### Destory

`destory`函数可用于在运行时移除游戏对象或从游戏对象移除组件，也可以通过延时达到相同目的，只需要使用第2个参数和1个浮点数。例如如果要销毁某个游戏对象，我们只需引用与脚本关联的游戏对象。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DestoryBasic : MonoBehaviour
{
   void Update()
   {
      if (Input.GetKey(KeyCode.Space))
      {
         Destroy(gameObject);
      }
   }
}
```

在本例中，按空格键时游戏对象会被销毁。问题在于你可能会将这个脚本用于不同用途，因此不应该销毁对象，否则脚本组件也会随之被删除，因为两者是关联的。所以应该引用另一个对象，我们设置了一个名为`other`的公开变量用来引用另一个对象，接着在Inspectot中拖入另一个要使用的对象，返回Unity运行脚本时对象被销毁。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DestoryOther : MonoBehaviour
{
   public GameObject other;
   
   void Update()
   {
      if (Input.GetKey(KeyCode.Space))
      {
         Destroy(other);
      }
   }
}
```

也可以使用`destory`命令移除组件而不是整个游戏对象，为此我们在`destory`中使用`GetComponent`函数来引用组件。在本例中，我将销毁`MeshRenderer`组件，这样这个对象就不会再渲染出来。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DestoryComponent : MonoBehaviour
{  
   void Update()
   {
      if (Input.GetKey(KeyCode.Space))
      {
         Destroy(GetComponent<MeshRenderer>());
      }
   }
}
```

运行可以看到对象仍在游戏中，而且所有其他元素都在，除了刚刚移除的`MeshRenderer`。

上述所有示例都可以使用数字作为第2个参数用来创建延时，例如输入一个浮点数3作为第二个参数，保存脚本运行，按下空格就会出现3秒的延迟，接着对象会被移除，这同样适用于销毁组件。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DestoryBasic : MonoBehaviour
{
   void Update()
   {
      if (Input.GetKey(KeyCode.Space))
      {
         Destroy(gameObject,3f);
      }
   }
}
```

### GetButton和GetKey

在Unity中`GetButton`和`GetKey`通过unity的输入类接收来自按键或操纵杆按钮的输入。两者的代码差异在于`GetKey`会使用`KeyCode`明确指定按钮名称，例如空格键(`KeyCode.Space`)。这虽然适用于键盘按键，但建议使用`GetButton`指定你自己的控制。




```c#
using UnityEngine;
using System.Collections;

public class KeyInput : MonoBehaviour
{
    public GUITexture graphic;
    public Texture2D standard;
    public Texture2D downgfx;
    public Texture2D upgfx;
    public Texture2D heldgfx;
    
    void Start()
    {
        graphic.texture = standard;
    }
    
    void Update ()
    {
        bool down = Input.GetKeyDown(KeyCode.Space);
        bool held = Input.GetKey(KeyCode.Space);
        bool up = Input.GetKeyUp(KeyCode.Space);
        
        if(down)
        {
            graphic.texture = downgfx;
        }
        else if(held)
        {
            graphic.texture = heldgfx;
        }
        else if(up)
        {
            graphic.texture = upgfx;
        }
        else
        {
            graphic.texture = standard; 
        }
        
        guiText.text = " " + down + "\n " + held + "\n " + up;
    }
}
```



输入管理器允许指定输入名称，然后给它指定一个键或按钮。要访问这个功能，可以从顶部菜单`Edit`-`Project Settings` - `Input`。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmkz9reozgj311y0lctae.jpg)

调用时可以用字符串来引用名称，例如`Jump`是空格键表示的默认输入，但我们可以输入其他键或按钮代码来更改表示`Jump`的输入，接着当我们调用这个按钮时，可以使用字符串`Jump`引用名称。如需了解`Positive Button`中可输入哪些内容，请查阅文档中的参考资料。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmkze744hrj311y0lc76m.jpg)

使用`GetButton`和`GetKey`时，这些输入有3种状态，都会返回布尔值`true`或`false`。首先是`GetButton`还是`GetKey`根据有没有按下按钮来记录`true`或`false`：
+ 目前没有按下按键，所以`GetButton`返回`false`
+ 第一次按下按键时，第一帧返回`true`，然后随着帧数的增加，我们按住按钮`GetButtonDown`返回`false`，`GetButton`仍等于`true`这样我们就能确认是否按住了按钮
+ 当我们松开按钮时，`GetButtonUp`显示为`true`，但也仅限第一帧
+ 继续操作，所有值都恢复为`false`

注意，`GetKey`的行为完全相同，只是代码写法略有差异。要查看按钮的状态，使用输入管理器内输入的标题字符串`jump`，但如果要查看特定键的状态，可以使用`KeyCode`，因为`KeyCode`只与特定键相关。

```c#
using UnityEngine;
using System.Collections;

public class ButtonInput : MonoBehaviour
{
    public GUITexture graphic;
    public Texture2D standard;
    public Texture2D downgfx;
    public Texture2D upgfx;
    public Texture2D heldgfx;
    
    void Start()
    {
        graphic.texture = standard;
    }
    
    void Update ()
    {
        bool down = Input.GetButtonDown("Jump");
        bool held = Input.GetButton("Jump");
        bool up = Input.GetButtonUp("Jump");
        
        if(down)
        {
            graphic.texture = downgfx;
        }
        else if(held)
        {
            graphic.texture = heldgfx;
        }
        else if(up)
        {
            graphic.texture = upgfx;
        }
        else
        {
            graphic.texture = standard;
        }
    
        guiText.text = " " + down + "\n " + held + "\n " + up;
    }
}
```


### GetAxis

`Input.GetAxis`的用法与`GetButton`和`GetKey`类似，但存在一些根本性差异：`GetButton`和`GetKey`均返回布尔值，按钮要么被按下，要么没按下；而`GetAxis`会返回浮点值，这个值介于-1到1之间。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmkzxiy9vcj311y0lcwgu.jpg)

轴在输入管理器中设置，访问方法是从顶部菜单选择`Edit`-`Project Settings` - `Input`。对于按钮操作，我们只会考虑`Positive Button`的值，但对于轴，`Positive Button`和`Negative Button`都要考虑，以及`Gravity`、`Sensitivity`、`Dead`和`Snap`，这是`GetAxis`横轴的标准行为。

要记住`GetAxis`返回的是浮点值，因此它相当于是介于正负1之间的滑尺。轴的`Gravity`会影响滑尺在按钮松开后归零的速度，`Gravity`越高，归零速度越快。如果将`Gravity`的值从3增至100，轴归零的速度就会变快；同样如果降至0.1，轴归零的速度会变慢。

`Sensitivity`与`Gravity`相反，它控制着输入的返回值到达1或-1的速度有多快。`Sensitivity`值越大，反应速度就越快；值越小，移动越流畅。

如果我们用操纵杆表示轴，那我们就不希望感受到操纵杆轻微移动的作用。为避免这种情况，我们需要有一个盲区，`Dead`值越大，盲区越大，操纵杆的移动幅度也必须越大才能让`GetAxis`返回非0值。

`Snap`选项的作用是同时按下正负按钮时归零。为获得横轴或竖轴的值，只需在代码中添加一个`Input.GetAxisRaw("Horizontal")`或`Input.GetAxisRaw("Vertical")`。

```c#
using UnityEngine;
using System.Collections;

public class DualAxisExample : MonoBehaviour 
{
    public float range;
    public GUIText textOutput;
    
    
    void Update () 
    {
        float h = Input.GetAxis("Horizontal");
        float v = Input.GetAxis("Vertical");
        float xPos = h * range;
        float yPos = v * range;
        
        transform.position = new Vector3(xPos, yPos, 0);
        textOutput.text = "Horizontal Value Returned: "+h.ToString("F2")+"\nVertical Value Returned: "+v.ToString("F2");    
    }
}
```

也可以使用`Input.GetAxis("Raw")`仅返回整数，不返回非整数，这十分适合需要精准控制的二维游戏，而不适用于需要平滑值的游戏。注意它不需要使用`Gravity`或`Sensitivity`。


### OnMouseDown

`OnMouseDown`及其相关函数可检测对碰撞体或GUI文本元素的点击。在这个示例中，Door对象有一个箱体碰撞体，还连接了一个刚体。编写的脚本包含一个`OnMouseDown`函数，点击这个对象时开始调试记录，也就是在控制台中输出"Clicked on the door!"。

```c#
using UnityEngine;
using System.Collections;

public class MouseClick : MonoBehaviour
{
    void OnMouseDown ()
    {
        Debug.Log("Clicked on the door!");
    }
}
```

运行脚本时查看控制台，点击游戏中的门，就会输出一条调试日志。同样我们可以实现更复杂的操作，例如给被点击的Door对象添加一个作用力。在本例中，我给对象的`forward`添加了一个反作用力，这样门就会从指定轴上弹开。同时我们还启用了重力，这样点击时门就会倒地。

```c#
using UnityEngine;
using System.Collections;

public class MouseClick : MonoBehaviour
{
    void OnMouseDown ()
    {
        rigidbody.AddForce(-transform.forward * 500f);
        rigidbody.useGravity = true;
    }
}
```


### GetComponent

在Unity中脚本被视为自定义组件，我们通常需要访问与同一个游戏对象关联的其他脚本，甚至是与其他游戏对象关联的脚本，访问其他脚本和组件要使用`GetComponent`。

```c#
using UnityEngine;
using System.Collections;

public class AnotherScript : MonoBehaviour
{
    public int playerScore = 9001;
}
```

在本例中，`AnotherScript`和`YetAnotherScript`都含有公开变量，我们希望能够在`UsingOtherComponents`脚本中使用这些变量。

```c#
using UnityEngine;
using System.Collections;

public class YetAnotherScript : MonoBehaviour
{
    public int numberOfPlayerDeaths = 3;
}
```

这里有3个变量，一个存放`otherGameObject`，另外两个存放对其他脚本的引用。注意，对其他脚本的引用也就是以脚本名称为类型的变量，这是因为我们其实引用的是这个脚本中定义的类的实例。

```c#
using UnityEngine;
using System.Collections;

public class UsingOtherComponents : MonoBehaviour
{
    public GameObject otherGameObject;
    
    
    private AnotherScript anotherScript;
    private YetAnotherScript yetAnotherScript;
    private BoxCollider boxCol;
    
    
    void Awake ()
    {
        anotherScript = GetComponent<AnotherScript>();
        yetAnotherScript = otherGameObject.GetComponent<YetAnotherScript>();
        boxCol = otherGameObject.GetComponent<BoxCollider>();
    }
    
    
    void Start ()
    {
        boxCol.size = new Vector3(3,3,3);
        Debug.Log("The player's score is " + anotherScript.playerScore);
        Debug.Log("The player has died " + yetAnotherScript.numberOfPlayerDeaths + " times");
    }
}
```

在`Awake()`函数中进行变量初始化，`GetComponent`函数使用的调用类型与我们常用的略有差异：我们在普通括号前使用一对尖括号，这些尖括号的作用是让类型成为参数。在本例中，类型是`AnotherScript`，也可以调用`GetComponent`来访问我们所引用的其他游戏的组件，比如`otherGameObject`。

`GetComponent`会返回调用它的游戏对象中任意指定类型组件的引用。在本例中，我要访问的是`Another Script`，它与我的主脚本`UsingOtherComponents`在同一个对象中，所以可以写入`anotherScript = GetComponent<AnotherScript>()`然后直接引用`playerScore`。但如果想引用玩家的死亡次数，那我会用`otherGameObject.GetComponent`引用另一个脚本，这样可以直接调用玩家死亡次数。

虽然`GetComponent`最常用于访问其他脚本，但它也可用于访问API未公开的其他组件。例如通常我们通过输入`Collider`访问的碰撞体并不是具体的碰撞体，比如`SphereCollider`的属性与`BoxCollider`不同，如果想再脚本中访问这些属性，可以使用`GetComponent`。

关于`GetComponent`需要注意的是它会占用大量处理能力，所以应该尽量减少调用，最好是在`Awake()`或`Start()`函数中调用或仅在首次需要时调用一次。


### DeltaTime

`delta`一词是指两个值之间的差，`time`类的`DeltaTime`属性基本上指两次更新或固定更新函数调用的间隔时长。它的作用是让用于移动其他增量计算的值变得平滑。

帧与帧之间的时差不是固定的，假设某个对象每帧移动固定距离，整体效果可能并不流畅，这是因为完成一帧所需的时间是不同的，虽然移动的距离是固定不变的。如果使用`Time.deltaTime`修改变化量，所需时间较长的帧变化较大；所需时间较短的帧变化较小，所以最后整体的效果是在一段时间内变化看起来很流畅。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UsingDeltaTime : MonoBehaviour
{
   public float speed = 8f;
   public float countdown = 3.0f;

   void Update()
   {
      countdown -= Time.deltaTime;
      if (countdown <= 0.0f)
      {
         GetComponent<Light>().enabled = false;
      }

      if (Input.GetKey(KeyCode.RightArrow))
      {
         transform.position += new Vector3(speed * Time.deltaTime,0.0f,0.0f);
      }
   }

}
```

`Time.deltaTime`的这种用法让我们能更改每秒的值非每帧的值。


### 数据类型

编写代码时不可避免地需要使用很多类型的变量。归根结底，所有变量都会有数据类型，两种主要的数据类型为值类型(`Value`)和引用类型(`Reference`)。

#### 值类型

整数(`int`)、浮点数(`float`)、双精度(`double`)、布尔型(`bool`)和字符(`char`)等变量都属于值类型。此外还有一些复杂的变量类型，例如`Structs`属于值数据类型，包含一个或多个其他变量，Unity中最常见的2种`Structs`为`Vector3`和`Quaternion`。

#### 引用类型

引用类型列表要简单多了。基本上任何属于类对象(Classes)的变量都叫做引用类型。因此最常见的2个类是Unity种最常见的引用类型`Transform`和`GameObject`。


大家或许想问值类型和引用类型有什么区别？简而言之，值类型变量其实包含某个值，所有引用类型变量都包含值存储位置的存储地址。因此如果值类型改变，则只会影响特定变量；但如果引用类型改变，所有包含特定存储地址的变量都会受到影响。我们可以打个打个比方，Charles有栋漂亮的蓝色住宅，装满了他最喜爱的东西。Quentin在网上看到了Charles的房子，心生羡慕，于是他原样仿造了那栋房子并摆满了Charles所有东西的复制品。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gml7u6wdjwj311y0lc0wh.jpg)

这就像值类型赋值，其实就是复制变量。Quentin并不拥有Charles的房子，他对自己的房子所做的改变不会影响原房屋，漆成红色也没影响。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gml7uw5orkj311y0lc0wb.jpg)

如果Quentin知道Charles家的地址，那他就不必仿造那栋房子了，他可以在需要时随时去Charles家，看看房子里有哪些东西。这就像引用类型赋值，记住所需值的存储地址，在需要时返回这个地址获取变量的值。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gml7vi50vbj311y0lc0vr.jpg)


```c#
using UnityEngine;
using System.Collections;

public class DatatypeScript : MonoBehaviour 
{
    void Start () 
    {
        //值类型变量
        Vector3 pos = transform.position;
        pos = new Vector3(0, 2, 0);
        
        //引用类型变量
        Transform tran = transform;
        tran.position = new Vector3(0, 2, 0);
    }
}
```

我们知道`currentPosition`是`Vector3 struct`类型，属于值类型，所以只有`currentPosition`会受这行代码的影响，`transform.position`不受影响。值类型包含其自己的数据副本，更改它们只会影响特定变量。

而对于`Transform`我们虽然并未直接更改`transform`的值，但我们可以使用引用变量间接改变这个值。


### 类

在Unity中，脚本可能包含类定义。如果我们将比喻延伸一下，将变量比作盒子、将函数比作机器，那类就相当于是这些盒子和机器所在的工厂。也许你已经注意到其他教程中的脚本在顶部附近有关键词`class`。在你创建新的C#脚本时，Unity会自动在脚本中输入`class`，这个`class`与它所在的脚本文件同名。这一点非常重要，因为如果更改其中一个的名称，就需要更改另一个的名称。所以在创建脚本时要给脚本取个合理的名称。

类是一个容器，用来储存变量和函数，具备多种功能，包括将配合工作的要素组合起来。它们是有组织结构的工具，属于面向对象编程(简称OOP)。面向对象编程的原则之一是将脚本拆分成多个脚本，其中每一个脚本承担一个角色或职责。因此类非常适合于专门完成一项任务。

在本例中，我们的脚本负责处理多项不同任务，因此我们应将它分成3个更短的脚本以便于管理和使用。比如这个脚本处理物品栏、移动和射击。

```c#
using UnityEngine;
using System.Collections;

public class SingleCharacterScript : MonoBehaviour
{
    public class Stuff
    {
        public int bullets;
        public int grenades;
        public int rockets;
        
        public Stuff(int bul, int gre, int roc)
        {
            bullets = bul;
            grenades = gre;
            rockets = roc;
        }
    }
    
    
    public Stuff myStuff = new Stuff(10, 7, 25);
    public float speed;
    public float turnSpeed;
    public Rigidbody bulletPrefab;
    public Transform firePosition;
    public float bulletSpeed;
    
    
    void Update ()
    {
        Movement();
        Shoot();
    }
    
    
    void Movement ()
    {
        float forwardMovement = Input.GetAxis("Vertical") * speed * Time.deltaTime;
        float turnMovement = Input.GetAxis("Horizontal") * turnSpeed * Time.deltaTime;
        
        transform.Translate(Vector3.forward * forwardMovement);
        transform.Rotate(Vector3.up * turnMovement);
    }
    
    
    void Shoot ()
    {
        if(Input.GetButtonDown("Fire1") && myStuff.bullets > 0)
        {
            Rigidbody bulletInstance = Instantiate(bulletPrefab, firePosition.position, firePosition.rotation) as Rigidbody;
            bulletInstance.AddForce(firePosition.forward * bulletSpeed);
            myStuff.bullets--;
        }
    }
}
```

虽然功能完善，但是这全部都包含在一个脚本。我们应该将它分成`Inventory`类、`Movement`类和`Shooting`类。这样脚本更易于管理、更易阅读，编程效率更高。

`Inventory`类:

```c#
using UnityEngine;
using System.Collections;

public class Inventory : MonoBehaviour
{
    public class Stuff
    {
        public int bullets;
        public int grenades;
        public int rockets;
        public float fuel;
        
        public Stuff(int bul, int gre, int roc)
        {
            bullets = bul;
            grenades = gre;
            rockets = roc;
        }
        
        public Stuff(int bul, float fu)
        {
            bullets = bul;
            fuel = fu;
        }
        
        // 构造函数
        public Stuff ()
        {
            bullets = 1;
            grenades = 1;
            rockets = 1;
        }
    }
    

    // 创建 Stuff 类的实例（对象）
    public Stuff myStuff = new Stuff(50, 5, 5);
    
    public Stuff myOtherStuff = new Stuff(50, 1.5f);
    
    void Start()
    {
        Debug.Log(myStuff.bullets); 
    }
}
```

`Movement`类：

```c#
using UnityEngine;
using System.Collections;

public class MovementControls : MonoBehaviour
{
    public float speed;
    public float turnSpeed;
    
    
    void Update ()
    {
        Movement();
    }
    
    
    void Movement ()
    {
        float forwardMovement = Input.GetAxis("Vertical") * speed * Time.deltaTime;
        float turnMovement = Input.GetAxis("Horizontal") * turnSpeed * Time.deltaTime;
        
        transform.Translate(Vector3.forward * forwardMovement);
        transform.Rotate(Vector3.up * turnMovement);
    }
}
```


`Shooting`类：

```c#
using UnityEngine;
using System.Collections;

public class Shooting : MonoBehaviour
{
    public Rigidbody bulletPrefab;
    public Transform firePosition;
    public float bulletSpeed;
    
    
    private Inventory inventory;
    
    
    void Awake ()
    {
        inventory = GetComponent<Inventory>();
    }
    
    
    void Update ()
    {
        Shoot();
    }
    
    
    void Shoot ()
    {
        if(Input.GetButtonDown("Fire1") && inventory.myStuff.bullets > 0)
        {
            Rigidbody bulletInstance = Instantiate(bulletPrefab, firePosition.position, firePosition.rotation) as Rigidbody;
            bulletInstance.AddForce(firePosition.forward * bulletSpeed);
            inventory.myStuff.bullets--;
        }
    }
}
```


### Instantiate

`Instantiate`函数的作用是克隆游戏对象，它常用于克隆`prefab`(预配置对象)保存在项目素材中。这类例子包括从发射器发出的抛射体，每个抛射体都需要实例化到游戏世界中从而实现发射操作。在本例中，我们使用`Fire1`激活`Instantiate`函数，最基本的形式只需一个参数，也就是我们想要克隆的对象`projectile`传到`Instantiate`函数。

```c#
using UnityEngine;
using System.Collections;

public class UsingInstantiate : MonoBehaviour
{
    public Rigidbody projectile;
    
    void Update ()
    {
        if(Input.GetButtonDown("Fire1"))
        {
           Instantiate(projectile);
        }
    }
}
```

这意味着`prefabs`将在其默认位置实例化，在本例中位置为0，运行并不能达到我们想要的抛射体发射效果。这个`Instantiate`函数包含3个参数，要实例化的对象(即本例中的抛射体`prefab`)以及为新克隆的`prefabs`指定的位置和旋转。

```c#
using UnityEngine;
using System.Collections;

public class UsingInstantiate : MonoBehaviour
{
    public Rigidbody rocketPrefab;
    public Transform barrelEnd;
    
    
    void Update ()
    {
        if(Input.GetButtonDown("Fire1"))
        {
            rocketInstance = Instantiate(rocketPrefab, barrelEnd.position, barrelEnd.rotation)
        }
    }
}
```

回到Unity运行，抛射体的位置看起来没错，但它只是掉落下来，这并非是我们想要的效果。我们需要能够影响通过实例化创建的对象，即本例中的抛射体克隆。一般而言，`Instantiate`会返回一个名为`object`的类型，但为了投射抛射体并给它添加作用力，我们需要将这个类型强制转换为`Rigidbody`。

```c#
using UnityEngine;
using System.Collections;

public class UsingInstantiate : MonoBehaviour
{
    public Rigidbody rocketPrefab;
    public Transform barrelEnd;
    
    
    void Update ()
    {
        if(Input.GetButtonDown("Fire1"))
        {
            Rigidbody rocketInstance;
            rocketInstance = Instantiate(rocketPrefab, barrelEnd.position, barrelEnd.rotation) as Rigidbody;
            rocketInstance.AddForce(barrelEnd.forward * 5000);
        }
    }
}
```

这样按运行和发射后发射器会对我创建的克隆体施加一个作用力，从而将抛射体抛射出去。记住，在游戏中创建多个克隆体时，这些克隆体仍会存在于场景中，所以如果要这么做可能需要考虑编写一个脚本在经过一段特定时间后将它们从世界中移除。

```c#
using UnityEngine;
using System.Collections;

public class RocketDestruction : MonoBehaviour
{
    void Start()
    {
        Destroy (gameObject, 1.5f);
    }
}
```

它会经过指定秒数后移除对象。


### 数组

数组的作用是存储同类型数据，假设我们需要存储5个整数，无需将它们分别单独存储为`int a,b,c,d,e`等等，而是可以将它们存入数组中。数组的声明方式类似于单个变量的声明方式，但在变量类型后要使用左右方括号。必须要明确区分数组不是类型，而是特定类型的变量集合。

使用数组前我们需要知道数组的长度，即其中将会存储多少个元素，我们将数组中的元素称为项。为指定长度，需使用关键词`new`，接着输入数组类型并在方括号中输入元素数量。现在我们可以在`Start()`函数中初始化数组，为访问数组的初始化元素需要使用数组的名称，后跟方括号，在括号中输入元素索引，元素索引就是一个整数，第一个索引为0。考虑元素索引时，可以想一下你想访问的元素距第一个元素有多少步，要访问第一个元素可使用索引0，因为它距第一个元素的步数为0；要访问第二个元素可使用索引1，以此类推。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScopeAndAccessModifiers : MonoBehaviour
{
   private int[] myIntArray = new int[5];
   
   void Start()
   {
      myIntArray[0] = 12;
      myIntArray[1] = 76;
      myIntArray[2] = 8;
      myIntArray[3] = 937;
      myIntArray[4] = 903;
   }
}
```

现在我们完成了初始化数组中的五个元素，这是一种声明和初始化数组的方式，也可以在一行中进行声明和初始化。也就是说，可以同时初始化并声明数组。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScopeAndAccessModifiers : MonoBehaviour
{
   private int[] myIntArray = {12,76,8,937,903};
   
   void Start()
   {

   }
}
```

注意这次我们没有明确声明长度，长度由花括号中的元素数量定义，以这种方式声明的数组的访问方式仍可以使用第一个例子所示的方式。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScopeAndAccessModifiers : MonoBehaviour
{
   private int[] myIntArray = {12,76,8,937,903};
   
   void Start()
   {
      myIntArray[4] = 57;
   }
}
```

关于数组需要注意几点，如果设为公开数组就能在Inspector中看到这个数组并为它分配值。Unity有一些可以帮助我们完成这个操作的函数，我们希望`players`数组储存场景中的所有玩家，函数`FindGameObjectsWithTag`返回场景中由带有指定标记的所有游戏对象构成的数组。由于玩家游戏对象都含`player`标记，因此可以传递`player`并获得场景中的所有玩家。我们可以利用这个函数返回的数组来初始化新的公开数组`Players`，这样就已将这个函数返回的所有结果都赋值给`Players`数组，这意味着它集合了所有含有`player`标记的对象。

```c#
using UnityEngine;
using System.Collections;

public class Arrays : MonoBehaviour
{
    public GameObject[] players;

    void Start ()
    {
        players = GameObject.FindGameObjectsWithTag("Player");
    }
}
```

数组的另一项重要功能是非常适合与循环配合使用。假设我们想记录场景中所有玩家的名称，就可以使用完整循环来迭代数组中的每个元素。数组具有长度属性，它会返回数组中的元素数量，这意味着如果循环迭代子从0开始并继续循环直至其值大于等于数组长度为止。


```c#
using UnityEngine;
using System.Collections;

public class Arrays : MonoBehaviour
{
    public GameObject[] players;

    void Start ()
    {
        players = GameObject.FindGameObjectsWithTag("Player");
        
        for(int i = 0; i < players.Length; i++)
        {
            Debug.Log("Player Number "+i+" is named "+players[i].name);
        }
    }
}
```

### Invoke

`Invoke`函数的作用是将函数调用安排在指定延时后发生，我们可以借此构建对时间敏感的有效方法调用系统。在这个`Invoke`脚本中，`SpawnObject`方法只会将位置(0,2,0)处的对象实例化。在`Start()`方法中我们调用`Invoke`函数，它有两个参数，一个是字符串，包含我们想调用的方法名称；另一个是以秒为单位的延时时长。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class InvokeScript : MonoBehaviour
{
   public GameObject target;

   void Start()
   {
      Invoke("SpawnObject",2);
   }

   void SpawnObject()
   {
      Instantiate(target,new Vector3(0,2,0),Quaternion.identity);
   }

}
```

在这行代码中可以看到，2秒后会调用`SpawnObject`方法。值得注意的是，只有不包含参数且返回类型为`void`的方法才能用`Invoke`调用。

如果只调用一次方法，这个函数十分有用，但如果想反复调用方法该怎么办？只需使用`InvokeRepeating`函数即可轻松实现。在`InvokeRepeating`脚本中可以看到代码格式与`Invoke`脚本几乎完全相同。在`Start()`函数中我们调用了`InvokeRepeating`函数，这个函数有三个参数，一个是包含我们想调用的方法名称的字符串；以秒为单位调用方法之前的延时以及后续方法调用间隔的延时。

```c#
using UnityEngine;
using System.Collections;

public class InvokeRepeating : MonoBehaviour 
{
    public GameObject target;
    
    
    void Start()
    {
        InvokeRepeating("SpawnObject", 2, 1);
    }
    
    void SpawnObject()
    {
        float x = Random.Range(-2.0f, 2.0f);
        float z = Random.Range(-2.0f, 2.0f);
        Instantiate(target, new Vector3(x, 2, z), Quaternion.identity);
    }
}
```

可以看到`SpawnObject()`会在2秒钟后被调用，然后每过一秒重新调用一次。但显然我们必须知道如何暂停，否则这个过程将会是无穷无尽的。可以使用`Cancellnvoke`方法停止这个脚本中`Invoke`调用的所有实例，如果只是想停止某个特定的`Invoke`，可以传递包含想暂停方法名称的字符串`CancelInvoke("SpawnObject")`。

```c#
using UnityEngine;
using System.Collections;

public class InvokeRepeating : MonoBehaviour 
{
    public GameObject target;
    
    
    void Start()
    {
        InvokeRepeating("SpawnObject", 2, 1);
        CancelInvoke("SpawnObject");
    }
    
    void SpawnObject()
    {
        float x = Random.Range(-2.0f, 2.0f);
        float z = Random.Range(-2.0f, 2.0f);
        Instantiate(target, new Vector3(x, 2, z), Quaternion.identity);
    }
}
```

### 枚举

在Unity中编写脚本时有时我们需要变量属于一组常量。想象一下指南针的方位，我们可以使用整数描述方位：0代表北、1代表东、2代表南、3代表西。但这种描述方式不易阅读，也不利于编写代码，因为这意味着需要记住每个数字代表的方位，相反我们可以创建名为枚举的变量。枚举通常被称为`enums`，这是一组特殊的数据类型，有特定的可能值子集。

枚举可以在类内或类外创建。注意我们也可以创建只包含此枚举的C#脚本，我们不将它声明为类而是将它声明为枚举，然后可以在其他脚本的类中使用这个枚举如果它是公开的。我们可以将枚举放在类中，但前提必须是这个类需要访问这个枚举。我们需要列出枚举的各个常量，用逗号隔开、花括号括起来。


```c#
using UnityEngine;
using System.Collections;

public class EnumScript : MonoBehaviour 
{
   enum Direction {North, East, South, West};

   void Start () 
   {
      Direction myDirection;
      
      myDirection = Direction.North;
   }
   
   Direction ReverseDirection (Direction dir)
   {
      if(dir == Direction.North)
         dir = Direction.South;
      else if(dir == Direction.South)
         dir = Direction.North;
      else if(dir == Direction.East)
         dir = Direction.West;
      else if(dir == Direction.West)
         dir = Direction.East;
      
      return dir;     
   }
}
```

这个枚举中声明的每个常量都有一个默认为从0开始往上的整数，这些值通过集整合起来因此`North`的值为0、`East`的值为1、`South`的值为2、`West`的值为3。如果需要的话，值的类型和值本身都可以被覆盖。此外我们也可以声明每个常量的值：

```c#
enum Direction {North = 10, East = 11, South = 15, West = 27};
```

还可以更改枚举中常量的类型，常量可以更改为任意整数类型。如需更改类型，可在枚举名称后添加一个冒号，然后在后面输入类型。这将意味着枚举类型为`short`而非`int`。之所以要更改枚举类型一个主要原因是为了优化，但我们通常无需担心这一点。

```c#
enum Direction short{North = 10, East = 11, South = 15, West = 27};
```


### Switch语句

在代码做决策时通常使用`if`语句或一系列`if-else`语句，此外还可以使用`switch`语句。`switch`语句是更精简的条件语句，作用是将单一变量与一系列常量进行对比。`switch`语句通常在做决策时使用，决策依据的是枚举。假设在游戏中角色的对话选项基于其智力，设置这些选项时可以选择一系列`if-else`语句，但这样很容易令代码变得冗长。相反我们使用`switch`语句更轻松地实施解决方案。

```c#
using UnityEngine;
using System.Collections;

public class ConversationScript : MonoBehaviour 
{
    public int intelligence = 5;
    
    
    void Greet()
    {
        switch (intelligence)
        {
        case 5:
            print ("Why hello there good sir! Let me teach you about Trigonometry!");
            break;
        case 4:
            print ("Hello and good day!");
            break;
        case 3:
            print ("Whadya want?");
            break;
        case 2:
            print ("Grog SMASH!");
            break;
        case 1:
            print ("Ulg, glib, Pblblblblb");
            break;
        default:
            print ("Incorrect intelligence level.");
            break;
        }
    }
}
```

在最后一个实例中，我们需要获取所有无专属实例的内容。为此，此处不用`case`，而是另一个关键词`default`用于这段代码先前条件语句中未涵盖的所有其他情况，这点与`else`类似，因此它不需要有值，除此之外它和其他实例是一样的。
