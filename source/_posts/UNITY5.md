---
title: C#中级编程
tags:
  - C#
  - Unity
categories:
  - 游戏引擎(Game Engine)
  - Unity
banner_img: 'https://tva1.sinaimg.cn/large/0081Kckwgy1gmd6blk9puj30xc0eg0w4.jpg'
abbrlink: 7d83bb70
date: 2021-01-13 20:04:58
index_img:
comment:
sticky:
---



本文将讲解中级C#脚本开发的基本知识。 

<!--more-->

[点击查看Unity社区全部教程](https://unity.cn/ask/question/5f924d5cedbc2a0020a89d1e)

[**观看地址：**https://www.bilibili.com/video/BV1f5411G7bp/](https://www.bilibili.com/video/BV1f5411G7bp/)





### 课程大纲

**创建属性：**如何创建属性以访问类中的成员变量（字段）。

**三元运算符：**如何利用三元运算符建立简单、简写的 IF-ELSE 逻辑条件。

**静态：**了解如何创建静态变量、方法和类。

**方法重载：**如何重载方法以创建具有相同名称的不同方法。

**通用：**如何创建和使用通用方法和类。

**继承：**如何使用继承来重用代码并在相关类之间建立牢固的关系。

**多态：**如何使用多态 (Polymorphism)、向上转换 (Upcasting) 和向下转换 (Downcasting) 在继承的类之间创建强大而动态的功能。

**成员隐藏：**如何在派生类中实现基成员的隐藏。

**覆盖：**如何用子类的成员覆盖基类的成员。

**接口：**如何创建接口并在类中实现它们。

**扩展方法：**如何创建、实现和调用扩展方法。

**命名空间：**如何创建和使用命名空间来组织您的类。

**列表和字典：**如何创建和使用列表和字典集合。

**协程：**如何创建协程并使用它们来实现复杂的行为。

**四元数：**如何利用四元数系统来管理游戏对象的旋转。

**委托：** 如何创建和使用委托在脚本中提供复杂的动态功能。

**属性：**使用属性可以将其他行为附加到所创建的方法和变量。在本视频中，您将学习属性的格式以及如何使用“Range”和“ExecuteInEditMode”属性。

**事件：**如何使用事件创建动态的“广播”系统。


### 创建属性

我们经常需要通过某种方式从位于类之外的代码访问这个类的成员变量。一种方法是公开变量，然后直接访问，虽然这种方法已经够用，但还有更好的办法，那就是使用属性。

属性本身可以当作变量并可以封装成员变量，我们也称之为字段。通过这种封装我们可以更好地控制字段的访问时间和访问方式。假设有一个名为`experience`的字段，该字段位于`Player`类中，我们要想办法让位于该类之外的代码能够访问这个字段，我们要创建一个属性。

属性语法的工作原理如下：首先指定访问修饰符；然后指定类型后跟属性名称，最好将属性命名为字段的名称，不同的是以大写字母开头。在属性名称的后面输入左右花括号就像函数一样，在括号内输入属性的访问器。一个属性可以有两个访问器`get`和`set`，引用属性和分配属性时会分别调用这两个函数，它们使用关键字`get`和`set`，后跟花括号进行声明。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player
{
   private int experience;

   public int Experience
   {
      get { return experience; }
      set { experience = value; }
   }
}
```

在`get`访问器内我们返回所封装的字段；在`set`访问器中我们使用关键字`value`给字段赋值。以上就是实现属性所需的操作。现在打开另一个脚本，我们可以使用属性代替字段就像平时一样。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Game : MonoBehaviour
{
   void private void Start() 
   {
       Player mPlayer = new Player();

       myPlayer.Experience = 5;
       int x = myPlayer.Experence;
   }
}
```

既然可以使用公共访问修饰符作为变量的开头，为什么还要完成属性创建的过程？使用属性可以执行两项公开变量无法实现的操作：第一，通过省略`get`或`set`可以有效地将字段设置为只写或只读，如果字段是私有的，那么没有`get`访问器就无法读取该字段、没有`set`访问器就无法写入该字段；第二，还可以将访问器视为函数，这表示你可以在访问器内部运行其他代码或调用其他函数，顺着这一思路继续想，可以推断出使用`set`访问器启动协同程序。

字段封装不需要是直接的。设想一个游戏，玩家每获得1000经验即可升级。如果有一个字段代表经验值，就可以使用属性来代表玩家的等级。等级属性的`get`访问器可以返回`experience`字段除以1000得到的值而不返回真实的经验值，这样一来它会返回数字等级而不是玩家拥有的经验数量。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player
{
   private int experience;

   public int Experience
   {
      get { return experience; }
      set { experience = value; }
   }

   public int Level
   {
       get { return experience/1000; }
       set { experience = value * 1000; }
   }
}
```

此外，等级属性可以有`set`访问器用于接收等级和计算玩家所获得的经验数量并将值存储在`experience`字段中。

属性的另一个特点是它们可以被自动实现。要创建自动实现的属性，可以使用简写语法。在这种语法中，`get`和`set`访问器后面仅跟一个分号。通过这种方式创建的属性，行为与字段完全相同，区别在于可以通过移除`get`或`set`访问器使属性只读或只写。



### 三元运算符

三元运算符是`if-else`语句的精简形式。作为最基本的形式，三元运算符用于根据布尔表达式在两个值之间做出选择，语法格式为`bool ? true表达式 : false表达式`。第一个参数是布尔值或求值为要检验的布尔值的条件，这个参数的结尾标有一个问号；下一个参数是条件为`true`时三元运算符的求值结果，后跟一个冒号；最后一个参数是条件为`false`时三元运算符的求值结果。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TernaryOperator : MonoBehaviour
{
   void Start()
   {
      int health = 10;
      string message;

      message = health > 0 ? "Player is Alive" : "Player is Dead";
   }
}
```

在这里，我们使用一个简单的三元运算符来判断玩家是生是死。


```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TernaryOperator : MonoBehaviour
{
   void Start()
   {
      int health = 10;
      string message;

      message = health > 0 ? "Player is Alive" : health == 0 ? "Player is Barely Alive" : "Player is Dead";
   }
}
```

三元运算符可相互嵌套，但如果用于长表达式，这可能会导致代码繁琐，难以理解。使用三元运算符而非`if`语句的一个基本规则是代码需要简单的`if-else`结构且每种情况只需要一个短表达式。



### 静态

静态成员如变量和方法是跨类的所有实例共享的成员，此外，静态成员可直接通过类访问无需先对类的对象进行实例化。通常，成员变量对于类的每个对象是唯一的，虽然类的每个对象具有相同的变量，但它们各有自己的值。然而对于静态变量，类的每个对象具有相同的变量和相同的值，因此如果在一处更改某个静态变量的值，则所有其他静态变量的值也将改变。

假设你想知道`Enemy`类中实例化了多少个对象，一种简单的方法是使用名为`enemyCount`的静态成员变量，将关键字`static`输入到成员声明中即表示声明这是静态的，因此它属于类本身而不属于类的任何实例。然后每次创建enemy对象时都需要让这个变量递增，由于每个对象都让同一个变量递增，因此它自己将包含已创建的所有敌人总数。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy
{
   public static int enemyCount = 0;

   public Enemy()
   {
      enemyCount++;
   }
}
```

访问该静态变量也非常简单，这是一个`game`类，其中创建了几个敌人。为了弄清创建了多少个敌人，我们只需使用类的名称和点运算符来访问`enemyCount`静态变量。在本例中，`enemyCount`变量等于3。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Game
{
   void Start()
   {
      Enemy enemy1 = new Enemy();
      Enemy enemy2 = new Enemy();
      Enemy enemy3 = new Enemy();
   }
}
```

这个过程也适合要用做游戏对象组件的脚本。例如如果要了解在某个场景中创建玩家的数量，我们可以创建一个玩家脚本组件，在这个脚本中我们可以声明静态变量`playerCount`，在`Start()`方法中让这个变量递增。现在只要创建与这个脚本关联的游戏对象，玩家总数就会增加。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Player : MonoBehaviour
{
   public static int playerCount = 0;

   void Start()
   {
      playerCount++;
   }
}
```

在另一个脚本组件中，我们可以使用脚本名称和点运算符来访问这个静态变量。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerManager : MonoBehaviour
{
   void Start()
   {
      int x = Player.playerCount;
   }
}
```

与静态变量一样，静态方法属于类而不属于类的特定对象。举一个非常简单的例子，假设有一个名为`Utilities`的类，在这个类中有一个名为`Add`的静态方法，它返回两个数字相加得到的结果，你可以通过方法`Add`前面的`static`关键字来判断它是静态的。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Utilities
{
   public static int Add(int num1,int num2)
   {
       return num1 + num2;
   }
}
```

现在在另一个类中，你可以使用类的名称和点运算来调用`Add`方法，无需通过实例化类的对象来使用其静态成员。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UtilitiesExample : MonoBehaviour
{
   void Start()
   {
      int x = Utilities.Add(5,6);
   }
}
```

有可能你已经使用过静态方法只是自己还没有意识到，回顾Unity中使用`Input`的情景，`Input.GetAxis`、`Input.GetKey`和`Input.GetButton`等方法都是静态方法，之所以可以判断这些是静态方法，因为不需要通过实例化`Input`类的对象来使用它们。事实上，Unity提供类许多静态方法从而为您提供多种实用工具和功能。

需要注意的是，不能在静态方法内部使用非静态成员变量。记住，静态方法属于类，而非静态变量属于类的实例。你也可以使整个变量成为静态，只需将关键字`static`置于名称前面即可，结果是类成为静态并且不能创建类的实例。如果想要使类完全由静态成员变量和方法组成如`Input`类，则这样非常有用。



### 方法重载

通过重载过程可以为单个方法提供多个定义，这意味着可以使用同一个方法名称执行两项不同的操作。假设你需要一个方法来执行加法，可以创建`AddNumbers`方法将两个数字相加。但是将字符串相加的工作原理不同，你需要一个名为`AddStrings`的新方法，这样虽然可以达到目的，但问题在于现在需要记住两个不同的方法名称，而它们本质上执行的是相同的操作，一种更好的方法是重载名为`Add`的方法使其处理数字或字符串。

在这里我们有一个名为`Add`的方法，它读取两个数字并返回一个数字，每个方法都有签名。签名(形式参数)由方法的名称和参数组成，在同一个作用域内每个方法的签名(形式参数)都是唯一的。重载方法的操作是为新方法指定相同名称，但指定不同的签名(形式参数)。继续之前的示例，我们可以重载这个`Add`方法来创建一个将字符串相加的新方法，请注意新的`Add`方法名称相同，但具有不同的参数列表。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SomeClass
{
   public int Add(int num1,int num2)
   {
      return num1 + num2;
   }

   public int Add(stirng str1,string str2)
   {
      return str1 + str2;
   }
}
```

由于签名(形式参数)不同，因此这样是可行的。在其他类中，当我们尝试访问`Add`方法时，可以看到它有两个版本，将根据传入的参数选择正确的版本。如果传入两个数字，将运行用来数字相加的方法；同样，如果传入两个字符串则运行用来将字符串相加的方法。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SomeOtherClass : MonoBehaviour
{
   void Start()
   {
        SomeClass myClass = new SomeClass();

        myClass.Add(1, 2);
        myClass.Add("Hello ", "World");   
   }
}
```

当系统尝试确定要运行的正确的已重载方法版本时可能会出现三种情况：
+ Exact Match: 与传入参数完全匹配运行这个版本的已重载方法
+ Least Conversion: 如果不是完全匹配，系统将查看所有可能的匹配项，并将选择一个需要最少转换量的版本
+ Error: 最后如果没有可能的匹配项或多个版本所需的转换量相同，则会抛出错误





### 泛型

泛型是一种特征，通过该特征类型可以作为参数传递给类和方法等。实际上，这允许你在不了解所处理数据的确切类型的情况下进行一般编程。我们之前已经看到过`GetComponent`方法使用泛型参数来获取其所寻找的组件的类型，它就是泛型方法。

我们来看一下如何创建泛型方法，这是一个简单泛型方法的示例，首先要看的是泛型的参数`T`，用尖括号括起来置于方法名称之后形参之前。由于这个`T`可以代表任意类型，所以其名称是任意的，但按照惯例字母`T`最为常用。同样，如果要添加多个泛型参数，你可以使用逗号继续添加，命名惯例通常遵循`T`之后的参数是`U`和`V`。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SomeClass
{
   public T GenericMethod<T, U, V>(T param)
   {
      return param;
   }
}
```

虽然泛型函数不仅限于三个参数，但很少看到人们使用超过三个参数。现在我们知道与这个方法关联的泛型类型是`T`，但`T`只是一个占位符，调用这个方法时`T`最终会成为实际类型，也将成为方法的返回类型和参数类型，因为它们都使用`T`作为其类型。

即使我们有一个方法可使用泛型类型，但目前还不是很有用，泛型类型有什么用途呢？由于我们不知道这个泛型类型的行为方式，所以能做的操作不多。这个泛型参数可以是任意值：浮点数、模型行为等，由于我们不知道它是什么，所以能对它执行的运算很少。例如，我们不能用模型行为乘以2、我们不能访问浮点数的游戏对象字段。

目前，我们把它当作类对象进行处理，这是基类，所有C#类隐式地从基类继承而来，如何才能执行更多运算呢？为了解类型的一些特征，我们必须限制可能的类型，方法是对泛型参数施加限制。为了给函数添加限制，我们在参数之后函数主题之前输入`where`后跟我们将限制的泛型类型，即本例中的`T`。

限制通常分为以下几种类别：
+ 使用关键字`class`确保`T`是引用类型
+ 使用关键字`struct`确保它是值类型
+ 使用关键字`new()`确保它具有不含参数的公共构造函数
+ 使用类名称`MonoBehaviour`表示`T`代表这个类或通过多态表示，`T`代表从中衍生的任意类
+ 使用接口名称表示`T`已实现这个接口


```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SomeClass
{
   public T GenericMethod<T>(T param) where T : limit
   {
      return param;
   }
}
```

为使用泛型方法，必须指定希望它使用的具体类型。假设你想要使用刚刚创建的泛型方法，在另一个类中，你可以写入方法名称，后跟尖括号里面是你想要的类型，然后在后面输入圆括号和任意参数。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SomeOtherClass : MonoBehaviour
{
   void Start() 
   {
        SomeClass myClass = new SomeClass();

        myClass.GenericMethod<int>(5);   
   }
}
```

我们讨论的所有特征都适用于`GenericClass`和接口以及方法。通过为类指定泛型类型，你可以影响其中的字段、属性和方法的类型，创建`GenericClass`是泛型的一种较为常见的用法，有助于轻松实现数据结构。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GenericClass<T>
{
    T item;

    public void UpdateItem(T newItem)
    {
        item = newItem;
    }
}
```

这意味着在使用时在类中用作类型的类型`T`的每个实例将替换为实际类型，为了实例化这个对象必须为`T`指定一个类型，方法是输入类的名称后跟尖括号和所需类型。在输入构造函数的名称之后并在构造函数的参数列表之前也必须执行这个操作。泛型最常见的一种用法是用于字典和列表等集合。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GenericClassExample : MonoBehaviour
{
    void Start()
    {
        GenericClass<int> myClass = new GenericClass<int>();

        myClass.UpdateItem(5);
    }
}
```





### 继承

Unity支持的脚本语言拥有一个特征叫做继承（Inheritance）。继承是面向对象编程即OOP的基础之一，一个类继承自另一个类时，它会获得被继承类的特征。

在继承的语境下，被继承类称为父类或基类（Parent），继承类称为子类或派生类（Child）。继承结果是父类中存在的项也将出现在子类中，因此方法和变量可以在子类中使用就像父类中一样。例如假设你有一个父类名为`ClassA`，它包含两个方法`dance()`和`sing()`。

```c#
Class A{
	dance();
	sing();
}
```

你还有一个类`ClassB`是从`ClassA`继承而来，因此也会拥有`dance()`和`sing()`这两个方法，无需在`ClassB`中创建这两个方法，因为它们已经存在于`ClassA`中。



处理继承时需要注意三个访问修饰符`public`、`private`和`protected`。大家应该已经熟悉`public`和`private`访问修饰符的概念了，请注意公开的父类的特征将存在于子类中并且可供访问；而私有的特征将存在于子类中但不可访问。`protected`访问修饰符相当于`public`和`private`的混合，与公开的特征一样，受保护的父类的所有特征将存在于子类中并可供访问，但在父类或子类之外将不可访问就像私有的特征一样。

到目前为止你在Unity中使用的大多数类可能都是继承的，作为组件应用于游戏对象的所有脚本的确都是`MonoBehaviour`，这这表明它们继承自`MonoBehaviour`类，默认情况下Unity中创建的脚本遵循这种格式：

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SomeScript : MonoBehaviour
{
   void Start()
   {
      
   }

   void Update()
   {
      
   }
}
```



要使这个类继承自其他类，只需将名称`MonoBehaviour`更改为其他类名即可：

```c#
public class SomeScript : SomeClass
```

要更改类以使其不继承任何父类，只需删除冒号和父类名称即可。大家可能会疑惑我们的脚本为什么继承自`MonoBehaviour`，游戏对象、转换、`start()`方法、`update()`方法等项均来自`MonoBehaviour`，因为继承了`MonoBehaviour`，我们能够访问这些特征。

继承结构是分层的，通常可以将继承想象成动物王国。在本例中我们有一个父类名为`Animal`，这个类将包含所有必需的定义和属性以使这个类拥有动物行为。从这个`Animal`基类我们可以派生出两个子类`Vertebrate`和`Invertebrate`，然后`Vertebrate`又成为更多类的父类比如哺乳动物、爬行动物或两栖动物，每个子类将获得其基类提供的信息并添加更多信息。

```
Animal
|_ Vertebrate
|_ Invertebrate
```



正如我们的动物示例，面向对象编程中的继承称为IS-A关系，这表示子类是父类，爬行动物是脊椎动物，哺乳动物是动物。大家之前可能遇到过Unity中的一个示例：`Capsule Collider`是`Collider`，后面将进一步介绍多态这一概念。

在游戏开发中，继承的概念可能非常有用且适用。例如我们可能有一个名为`Humanoid`的类，这个类含钙类人动物应该在游戏中执行的所有操作。然后有两个子类`Enemy`和`Player`，这两个子类控制玩家和敌人在游戏中的行为细节同时仍具有类人动物的行为，因为它们继承了`Humanoid`类的所有成员。

```
Humanoid
|_ Player
|_ Enemy
	 |_ Orc
	 |_ Goblin
```

然后`Enemy`可能还有两个子类`Orc`和`Goblin`，这两者的行为类似于`Enemy`，继而又类似于`Humanoid`。通过这种方式为了使`Orc`和`Goblin`拥有我们所设计的行为，要编写的代码大大减少，因为我们在反复利用`Humanoid`和`Enemy`的代码。



在子类继承的项中构造函数是一个例外，因为它们对类是唯一的，不会共享。但是在子类中调用构造函数时，其父类的构造函数会立即被调用。由于类可能有多个不同的构造函数，因此我们可能想要控制调用哪个基类构造函数函数。为此可以使用关键字`base`，通过在子类构造函数的参数列表后添加一个冒号可以使用关键字`base`，在基类构造函数的参数列表中显式调用基类的具体构造函数；如果不显式调用基类的构造函数，则仍会隐式调用默认构造函数。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Apple : Fruit
{
   public Apple() : base("apple")
   {
      //Constructor Code
   }
}
```

除了调用基类的构造函数，`base`关键字还可用来访问基类的其他成员。这种方法十分适用于访问基类版本的任何内容，因为它不同于派生的版本，覆盖函数时通常会有这样的需要。





### 多态

多态是继承的一个特征，允许类拥有多个类型。在继承层次结构中任何子类都可以称为父类，这表示再需要基类的时候可用派生类来替代它。假设有一个游戏使用继承层次结构，其中`Orc`和`Goblin`派生自`Enemy`，而`Enemy`派生自`Humanoid`。你可能想要创建一个集合让它包含场景中的所有`Enemy`对象，不必创建两个集合一个包含所有`Orc`一个包含所有`Goblin`，而是创建一个集合让它包含所有`Enemy`对象（即`Orc`对象和`Goblin`对象都是这个集合的元素）。同样，如果有一个`Player`类继承自`Humanoid`，你可以创建一个集合让它包含场景中的所有`Humanoid`对象。

```
Humanoid
|_ Player
|_ Enemy
	 |_ Orc
	 |_ Goblin
```

多态也适用于函数参数等。思考一下`OnTriggerEnter()`函数，它们通常包含`Collider`参数`other`，游戏对象没有`Collider`组件，但它们可能有`BoxCollider`，`Sphere Collider`，`Mesh Collider`或类似组件。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SomeScript : MonoBehaviour
{
   void OnTriggerEnter(Collider other)
   {
      //Do Something Fun!
   }
}
```

调用`OnTriggerEnter()`函数时，我们不知道会使用什么类型的`Collider`。事实上，每个对象的特定`Collider`都会传入函数，由于所有这些不同的`Collider`均继承自`Collider`父类，因此它们都将发挥作用。需要注意的是，反过来则不成立。在前面的示例中`Orc`是`Enemy`但是`Enemy`不是`Orc`，你不能为需要子类的某个项提供父类。

多态的一种较为明智的用法是涉及构造函数和对象引用，你可以声明基类类型的对象，然后调用其中一个派生类的构造函数。这是因为变量引用需要的是基类的类型，子类的构造函数会创建衍生类型的项。如果你感到困惑，只要记得子类是父类即可，因此这种转换是有效的，这个过程被称为向上转型（up-casting），当对象向上转型时，它只能被视作其父类的一个对象。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SomeScript : MonoBehaviour
{
   void Start()
   {
      ParentClass myClass = new ChildClass();
     
      myClass.ParentMethod();
   }
}
```

在本例中，子类向上转型时它只能被视作父类，这表示只能使用父类中可用的变量和方法。在使用时会把它们视为位于父类对象中。虚拟函数是一个例外，它将调用最新覆盖版本，有关虚拟函数以及覆盖虚拟函数的更多信息在后面会讲到。

为了将这个子类视作子类我们需要向下转型子类变量使其恢复为子类类型，具体方法是将类型名称括在括号内并将其置于变量前面，我们可以再用一组括号括起来并使用点运算符来访问成员，也可以创建对这个新版本的引用。

```c#
ChildClass myChild = (ChildClass)myClass;
myChild.ChildMethod();
```





### 成员隐藏

通过继承父类的成员在子类中自动可用或继承到子类中。在子类中重新创建即重新声明父类成员的过程被称为成员隐藏。隐藏成员使用关键字`new`的方式略有不同，为了隐藏基类的成员，应在成员的类型前面使用`new`声明子类成员。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ChildCLass : ParentClass
{
   new float SomeValue = 5f;

   void SayHello()
   {
      //Do something fun!
   }
}
```

一般情况下，这不会影响以这种方式生命的成员的使用，但是当子类向上转型为父类和使用的成员时它将是来自父类的成员，尽管实例为子类。

想象之前的继承层次结构`Humanoid-Enemy-Orc`。`Humanoid`中有一个方法`Yell()`，这个方法会播放一个音频片段并移动模型手臂。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Humanoid
{
   void Yell()
   {
     //Play audio clip
     //Move arms.
   }
}
```

`Enemy`中有另一个函数`Yelll()`，这个函数将`Enemy`主纹理的颜色更改为黄色。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : Humanoid
{
   new void Yell()
   {
      ///Change material color to yellow
   }
}
```

`Orc`也有一个新的`Yell()`函数，但这个函数将导航网格目的地发送到Northern Shetland Isle。假设我们有一个`Humanoid`对象集合，其中包括部分`Humanoid`、部分`Enemy`和部分`Orc`。如果我们对这个集合中的所有对象调用`Yell()`函数，则它们都将调用`Humanoid`版本的`Yell`，这是因为我们将`Orc`和`Enemy`对象声明为`Humanoid`并且它们已隐式向外转型为`Humanoid`。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Orc : Enemy
{
   new void Yell()
   {
      //Set nav mesh to Northern Shetland Isle
   }
}
```

这种行为通常不是期望的行为因此并不常用，但这一点值得引起注意，事实上这种行为与覆盖完全相反，有关覆盖的更多信息在之后的章节会介绍。







### 覆盖

覆盖是指更改子类中的父类方法，结果是当我们调用方法时将调用最新版本的方法或最新覆盖的版本。使用继承层次结构时，我们通常想要使用与积累略微不同的函数版本，这个操作非常简单，只需在子类中重新创建方法并根据需要编写代码即可。

考虑这样一种情况，有一个`Humanoid`基类，它有一个`Enemy`派生类，后者又有一个`Orc`派生类。`Humanoid`类有一个名为`Yell()`的函数，调用时模型会发出叫喊声并举起双手捂住嘴巴。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Humanoid
{
   public void Yell()
   {
     //Play "Yelling Sound"
     //Raise hands to mouth
   }
}
```

`Enemy`类自动继承这个`Yell()`方法，但是我们要进行修改想让敌人吸引其他敌人。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : Humanoid
{
   public void Yell()
   {
      ///Attract nearby enemies
   }
}
```

我们也希望`Orc`能够调用这个函数，但从`Orc`对象调用`Yell()`时这个区域内的所有`Orc`会在短时间内因其攻击而获得奖励。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Orc : Enemy
{
   public void Yell()
   {
      //Power up nearby orcs
   }
}
```

我们实际要做的是在每个子类中覆盖`Yell()`方法的父版本。当我们尝试覆盖子类中的父方法时Unity会发出警告，为了抑制该警告并告知Unity我们就是要覆盖方法，可以使用`virtual`和`override`关键字，它们位于方法的返回类型之前，父类中的方法定义为`virtual`，而所有子类中的方法定义为`override`。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Humanoid
{
   public virtual void Yell()
   {
     //Play "Yelling Sound"
     //Raise hands to mouth
   }
}

public class Enemy : Humanoid
{
   public override void Yell()
   {
      ///Attract nearby enemies
   }
}

public class Orc : Enemy
{
   public override void Yell()
   {
      //Power up nearby orcs
   }
}
```

声明为`virtual`的任何方法可被任何子类覆盖，覆盖的一种更有趣的用法是让每个子类为方法添加特定的功能，同时不失去父类提供的原始功能。为此需要使用`base`关键字来同时调用方法的父版本。

在上一个示例中，我们想让`Enemy`保留`Humanoid`的功能同时添加其自己的效果、让`Orc`保留`Enemy`的功能同时添加自己的效果，为此我们需要对`Enemy`和`Orc`中的父`Yell()`方法进行`base`调用：

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy : Humanoid
{
   public override void Yell()
   {
   		base.Yell();
      ///Attract nearby enemies
   }
}
```

现在调用`Orc`的`Yell()`方法时将调用`Enemy`的`Yell()`方法，继而将调用`Humanoid`的`Yell()`方法：

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Orc : Enemy
{
   public override void Yell()
   {
      base.Yell();
      //Power up nearby orcs
   }
}
```



覆盖对多态也非常有用，通常将父方法声明为`virtual`、将子方法声明为`override`，我们将有效覆盖方法的父版本。当我们将子引用向上转型为父对象然后调用方法时，将调用这个方法的子版本。



### 接口

接口可被视为关于功能的协定，实现接口的任何类必需拥有其所有方法和属性。作为交换，通过使用多态其他类可将实现类视作接口，需要注意的是借口不是类，不能有自己的实例。继承是一种类的关系（即一个类继承自另一个类）；而接口使用实现关系（即一个类实现一个接口）。

接口通常在类外部声明，声明接口时通常对每个接口使用一个脚本。但在本示例中我们将在同一个脚本中展示两个接口。按照惯例，声明接口所使用的名称以大写字母I开头，后跟以另一个大写字母开头的名称；由于接口通常描述实现类将具备的某种功能，因此许多接口以后缀`able`结尾，但值得注意的是这不是强制性的并且可能具有误导性，具体取决于接口。



```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface IKillabe
{
    void Kill();
}

public interface IDamageable<T>
{
    void Damage(T damageTaken);
}
```



我们在这里声明了两个接口，`IKillable`中有一个函数`Kill()`，它的返回类型为`void`没有参数。实现`IKillable`接口的任何类必须有一个与这个签名匹配的公共函数。`IDamageable`接口具有泛型类型`T`，这表示这个接口中的任意内容都可以具有泛型类型，它的函数`Damage()`需要一个类型为`T`的参数，当类实现具有泛型类型的接口时必须选中这个类型，然后必须始终使用相应类型。

实现接口需要满足一些要求，也有一些好处。为了实现接口，类必须公开这个接口中存在的所有方法、属性、事件和索引器，如果不这样做将导致错误。接口的主要优势是允许跨多个类定义通用功能，因此你可以根据类实现的接口安全的对类的用途作出假设。

要实现接口，只需在类具有的任何继承之后添加一个逗号，后跟接口的名称。如果类不是从其他类继承而来，则不需要逗号。如果接口具有泛型类型，则名称应后跟尖括号并在里面输入类型。在本例中，我们有一个`Avatar`类，它继承自`MonoBehaviour`并实现`IKillable`和类型为`float`的`IDamageable`。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public class Avatar : MonoBehaviour, IKillable , IDamageable<float>
{
    public void Kill()
    {
      	//Do something fun
    }
  
  	public void Damage(float damageTaken)
    {
      	//Do something fun
    }
}
```



我们还必须声明这些接口所需要的两个函数，请注意函数主体与接口相互独立，可按你希望的任何方式进行实现。在你的游戏中如果想要实现全毁或全灭的效果，那么这些接口来源可能很有用。只要找到实现了`IKillable`或`IDamageable`的所有项，就能确保它们将获得`Kill()`或`Damage()`函数。

你可能会好奇既然可在一个类中合理使用函数并让其他类继承这个函数，为什么还要在类中实现接口呢？简单点回答就是：你可以实现多个接口，但不能从多个类继承，因此通过接口可以很好的提供广泛功能。

```
IDamageable
|__ Wall
|__ Car
```



更好的答案是接口用于跨多个互不相关的类定义通用功能。考虑两个类`Wall`和`Car`，它们之间几乎没有什么关联，唯一的共通之处是它们都是可破坏的。由于两者之间如此不同，因此继承父类毫无意义，但实现接口则非常实用。



### 扩展方法

通过扩展方法，可以向类型添加功能而不必创建`Drive Type`或更改原始类型，它们非常适用于需要向类添加功能但不能编辑类的情况。

考虑一下Unity中内置的`Transform`类，我们无法访问它的源码，假设我们想要使用函数轻松重置`Transform`的位置：旋转和缩放。这个函数的理想位置是放在`Transform`类中，但由于不能直接向这个类进行添加并且将这个函数添加到派生类也没有任何意义，所以我们将为其创建扩展。

扩展方法必须放在非泛型静态类中。静态类中常见做法是专门创建一个类来包含它们，扩展方法的用法与实例方法类似它们也声明为静态方法，而非静态类方法需要在参数中使用`this`关键字。在我们的示例中将创建一个静态类`ExtensionMethods`，然后创建扩展方法`ResetTransformation`，注意该方法声明为静态方法，并且第一个参数带有`this`关键字，如果我们想要更多参数，可以直接输入而不使用`this`关键字。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;


public static class ExtensionMethods
{
    public static void ResetTransformation(this Transform trans)
    {
        trans.position = Vector3.zero;
        trans.localRotation = Quaternion.identity;
        trans.localScale = new Vector3(1,1,1);
    }    
}
```



在方法中我们可以编写代码来重置`Transform`。需要注意的是，尽管这个函数声明具有参数，但调用函数时它将没有参数，参数隐式地成为`Transform`的实例。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SomeClass : MonoBehaviour
{
    void Start()
    {
        transform.ResetTransformation();
    }
}
```

为了使用这个拓展方法，你只需将其视为所扩展的类的成员。在本例中我们扩展的是`Transform`，可以认为这个方法现已成为`Transform`类的一部分。





### 命名空间

命名空间就像类的容器，其目的是帮助组织脚本避免脚本之间发生冲突。例如你可能会在Unity中创建工具来帮助你开发应用，你可以将工具和实际应用放在不同的命名空间中，这样一来自动补全功能就不会建议过多不必要的类。

到目前为止编写的所有脚本可能一直在使用命名空间，在Unity中的C#脚本顶部默认情况下你会看到几行：

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
```

它们都是命名空间，`using`关键字表示其后面的命名空间中的任何内容都可在脚本中使用，如果注释掉其中的一部分可以看到自动补全功能建议的可供使用的类大幅减少，这是因为游戏对象、转换、刚体等许多类均位于`UnityEngine`命名空间中。

为了将我们的类放入命名空间中，需要用命名空间语法将类包围起来，首先输入关键字`namespace`，然后是命名空间的名称（可以是现有命名空间，也可以是新的）。在本例中，我们将命名空间称为`SampleNamespace`，然后在类前面输入花括号括起来。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SampleNamespace;

namespace SampleNamespace
{
		public class SomeClass : MonoBehaviour
		{
    		void Start()
    		{
          	
    		}
		}
}
```

我们可以通过三种方法使用来自特定命名空间的类。前面已介绍过第一种用法，即在脚本顶部包含`using`指令。访问类的第二种方法是使用点运算符，例如无需在脚本顶部添加`using SampleNamespace`，每次要引用来自`SampleNamespace`的类时都可以输入`SampleNamespace.SomeClass`:

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SomeClass : MonoBehaviour
{
    void Start()
    {
 				SampleNamespace.SomeClass myClass = new SampleNamespace.SomeClass();          	
    }
}
```

这种方法可以避免歧义，但可能较为繁琐，尤其是对于大命名空间名称例如`SampleNamespace`。

最后一种选择是将你编写的类放入需要访问的命名空间中，一般不建议使用这种方法除非你打算将这个类放入同一个命名空间中。只要类位于不同的命名空间中，它们就可以使用相同名称，但是由于脚本的名称与其中包含的类的名称相同，因此脚本必须位于不同文件夹中，这样才能具有相同的类名。

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using SampleNamespace;

namespace SampleNamespace
{
		public class SomeClass : MonoBehaviour
		{
    		void Start()
    		{
          	SomeClass myClass = new SomeClass();
    		}
		}
}
```

使用命名空间时，请注意避免模糊定义，比如`System`和`UnityEngine`是两个常用的命名空间，它们均包含`Random`类的定义如果你同时使用它们则需要通过使用点运算符来消除类的歧义。

命名空间可以嵌套，只需将一个命名空间声明括在另一个命名空间声明内即可。





### 列表和字典

在本章中我们将介绍两个泛型集合列表和字典，我们还将使用它们的方法，两者的工作原理类似于数组，但有一些明显区别。

我们首先介绍`List`类

