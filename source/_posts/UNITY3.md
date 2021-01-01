---
title: C#初级编程
abbrlink: 5342c81f
date: 2020-12-27 16:57:23
tags:
categories: [游戏引擎(Game Engine),Unity]
index_img:
banner_img: https://tva1.sinaimg.cn/large/0081Kckwgy1gm781udc6fj30qo0gowg8.jpg
comment:
sticky:
---



本课程将通过简单易学的讲解，从零基础开始介绍游戏开发编程。

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





```c#
using UnityEngine;
using System.Collections;

public class ExampleVehaviourScript: MonoBehaviour
{
  void Update()
  {
    
  }
}  
```







### 变量和函数





### 约定和语法





### IF语句





### 循环

