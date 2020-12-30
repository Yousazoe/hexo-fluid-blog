---
title: Foundations of Computer Graphics Unit0
top: false
mathjax: true
abbrlink: 7406020a
translate_title: foundations-of-computer-graphics-unit0
tags:
  - Computer Graphics
  - Mooc
  - Math
categories: [计算机基础(Computer Basic),计算机图像学(Foundations of Computer Graphics)]
index_img: 
banner_img: https://tva1.sinaimg.cn/large/0081Kckwgy1gkq5ou5zn2j31hc0u0my9.jpg
date: 2020-11-16 00:19:47
comments: false
---



本文课程我们将一起探索发现计算机图形学的美，学习几种创建三维图形的方法，并会完成一些有趣的作业使我们能够创建属于自己的计算机图形程序。

<!--more-->

### Lecture1 Course Overview

#### 学习动机

##### 自我介绍

Ravi Ramamoorthi http://www.cs.berkeley.edu/~ravir

> - PhD Stanford, 2002. PhD thesis developed “Spherical Harmonic Lighting” widely used in games (*e.g. Halo series*), movies (*e.g. Avatar*), etc. (*Adobe, ...*)
> - At Columbia 2002-2008, UC Berkeley since Jan 2009
> - Awards for research: White House PECASE (2008),SIGGRAPH Significant New Researcher (2007)
> - http://www.cs.berkeley.edu/~ravir/RaviR.wmv
> - Have taught Computer Graphics 10+ times



这门课经过更新，涵盖了计算机图形学的基础知识，同时也很好的结合了计算机图形学近年的发展，例如与时俱进地介绍了图形编程单元的使用、可编程着色器额度使用等等三维图形学许多基础内容。



##### 目标

> + **Systems:** Write complex 3D graphics programs (real-time scene viewer in OpenGL, offline raytracer)
>
> + **Theory:** Mathematical aspects and algorithms underlying modern 3D graphics systems
>
> + This course is ***not*** about the specifics of 3D graphics programs like Maya, Alias, DirectX but about the concepts underlying them. You will write programs in OpenGL/GLSL



课程的目标主要有两个：首先，要具备编写系统的能力，这是一门真正教你如何编写三维计算机图形程序以及如何编写属于你自己的三维图形程序的课程，因此我们将会使用OpenGL（一种图形API）来编写实时图形程序，也会使用OpenGL着色语言（来编写实时图形程序）。特别的，我们将创建一个实时的场景浏览器。我们还要使用一种被称为“光线追踪”的技术离线开发程序。

本课程的目的是理解计算机图形的理论，特别是大多数现代三维图形系统背后的数学原理和算法。这里特别指出这不是一门讲解某一特定三维图形编程环境细节的课程，比如 *Maya*、*DirectX*，但为了可以更好地理解概念，我们需要使用OpenGL和GL着色语言大量编写三维图形程序，如果后续需要，这些程序可以被移植到其他系统中。



##### 为什么学习三维计算机图形学

> + Applications (discussed next)
> + Fundamental Intellectual Challenges

我们为什么要学习三维计算机图形学？原因有两个：一个是有许许多多的应用对我们的生活产生了极大的影响；另一个原因是它真的是一个极其富有挑战、令人激动的领域，是值得从事的、最吸引人的、充满智慧的领域之一。



##### 应用领域

> + Movies
> + Games
> + Computer Aided Design (CAD)
> + Lighting Simulation (Interiors, Automobiles, ...)   Visualization (Scientific, Medical)
> + Virtual Reality

在这里列举了一些应用，也许其中来说最显而易见的是它在**电影中的应用**。可能你们都看过皮克斯公司（*Pixar*）最近的一部电影《勇敢传说》（*Brave*）。现在其他许多电影也都是完全由电脑生成的。1995年，皮克斯的《玩具总动员》（*Toy Story*）是第一部完全由计算机图形生成的电影。现在几乎制作的每一部电影都有很多计算机图形特效。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gkt4p3mhf4j31zv0u0qv6.jpg)



**三维电子游戏**是另一个热门领域，这些年来，我们看到它们的视觉效果提升到很高的水平，很多时候在某些方面意见接近电影的质量。然而计算机图形学最早的应用之一是**计算机辅助设计**（*CAD*），如今波音飞机完全在电脑上设计，不同的部件可能在不同的地方生产，最后将它们放在一起依然可以完美地运行。

**光照模拟**是计算机图形学中的一个非常重要的领域，它是真实感图像合成的一个方面。因此，光照模拟对于生成使建筑物内部、房间内部看起来逼真的模拟非常重要，比如一辆汽车在室外光照环境下看起来是什么样的？

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gkwwnrx6m5j31hc0u0e82.jpg)

计算机图形学被用于所有的这些应用，它既可用于科学计算可视化，也可用于医学可视化，我们有可视人类计划。在许多其他的项目中，计算机图形学对于可视化也非常关键。当然在将显示和虚拟结合起来的**虚拟现实**系统中，计算机图形学也很关键。这些从计算机图形学最早期开始就一直很关键，比如飞行模拟器等等。



##### 数字可视媒体

> + From text to images to video (to 3D?)
> + Image and video processing and photography
> + Flickr, YouTube, WebGL
> + Real, Virtual Worlds (Google Earth, Second Life)   Electronic publishing
> + Online gaming
> + 3D printers and fabrication

当然，今天我们被数字可视媒体包围，计算机图形学是其中的一个组成部分。想想我们消费国的可视媒体类型，哪怕在互联网上，也已经从文字发展到图片再发展到视频。也许媒体的下一波浪潮就是三维几何模型，即计算机图形学的现实基础。然而即使在那之前，计算机图形学对于图像、视频处理以及摄影已经是必不可少的了。Adobe属于第一批起家的图形公司，它奠定了我们处理图像和视频的方式的基础。

可视媒体已经非常普遍，我们有Flickr, YouTube, WebGL。通过这些方式，我们可以在线使用可视媒体。甚至，现实世界与虚拟世界的界限也在随着类似谷歌地球（Google Earth）、第二人生（Second Life）等的理念而变得模糊。在第二人生这个游戏中，玩家可以做许多现实生活中的事，这是一个完全虚拟的世界，但里面的角色和人物却是真实的。

![](https://www.google.com/earth/assets/static/images/studio_video_mobile_poster.png)

现在，电子出版、在线游戏已经形成巨大的市场，这可能是游戏行业最大驱动力。更进一步，我们正在见证三维打印和制造的一次巨大革命，也许我们可以用真实的材料去打印真实的三维物体，这是一个大家非常感兴趣的研究领域。现在可视化媒体是我们生活中非常普遍的一部分，在接下来的5至10年，我们可以期望看到它巨大的进步与进展。

> + Fundamental Intellectual Challenges
>   + Create and interact with realistic virtual world
>   + Requires understanding of all aspects of physical world
>   + New computing methods, displays, technologies
>
> + Technical Challenges
>   + Math of (perspective) projections, curves, surfaces
>   + Physics of lighting and shading
>   + 3D graphics software programming, hardware

以上仅仅是从应用以及我们日常生活的效用方面总结的学习本课程的动机。但是除此之外，计算机图形学也因为它充满智慧和活力成为令人感兴趣的领域：这里有根本性的智力挑战，如何创建一个逼真的虚拟世界并与之交互？计算机图形学的一个目标就是模拟并创建一个表现的很像真实世界的虚拟世界。如何来完成这个目标呢？创建逼真的虚拟世界时，你需要了解物理世界的方方面面。除了这一点，我们还需要了解新的计算方法、新的显示技术，这些领域已经有肉眼可见的巨大进步。

还有技术和智力挑战：如何理解做三维计算机图形时所需要的数学？拿到一个物体后如何正确地把它摆到屏幕上？如何绘制出三维计算机图形中所需要用的曲面？如何从不同的方面建立数学模型？如何为一个物体正确地照明？如何正确地在物体上布高光？如何正确地在物体上光滑着色？这就要求懂得光照和着色原理在现实世界如何照明的。

还有深层的系统挑战：我们怎样构建三维图形编程软件和硬件？这些年来，三维图形硬件的图形处理器已经得到广泛应用，甚至超过了计算机图形的需要。因此，我们这里看到的是，计算机图形学拥有丰富的应用，它涉及了基础的智力和技术挑战，使之成为最激动人心的研究领域之一。



#### 课程纲要和课程安排

我们将简要概述这门课讲述了什么内容，课程的主线是什么。

##### 三维图形管线

首先我们将介绍三维图形管线（流水线）的概念。图形管线包含三个阶段：建模、动画以及绘制。

> *Modeling* --> *Animation* --> Rendering

**建模**是一个对我们所感兴趣的物体建立几何模型的过程，可以是像茶壶这样的简单模型，也可以是一个象猫雕像那样复杂的网格模型，还可能是一个具有20亿个多边形网格的米开朗基罗的大卫像（该模型是由Levoy教授和他的团队在多年前扫描的）。

下一步，如果你想要物体真正动起来，就需要考虑**动画**或者人物的动作。这是一个很广阔的领域，我们经常想要真实的人体动作；另外，我们也可能只需要把物体从一个地方移动到另一个地方的动作。

最后一步就是**绘制**，或者说是让几何体生成真实感的图像活着动画。我们要模拟场景中光线传播的方式，来生成类似逼真复杂的阴影细节等效果。

> + HW 1: Transformations
>    Place objects in world, view them Simple viewer for a teapot
> + HW 2: Scene Viewer
>    View scene, Lighting and Shading (with GLSL programmable shaders)
> + HW 3: RayTracer
>    Realistic images with ray tracing (two basic approaches: rasterize And raytrace images [HW 2,3])

所以在这门课程中大家要完成几个作业，涵盖了图形管线中的**建模**和**绘制**部分，让大家对计算机图形学有一个基本的理解。



##### 工作量

> - Lots of fun, rewarding but may involve significant work
> - 3 programming projects; almost all are time-consuming
> - Course will involve understanding of mathematical, geometrical concepts taught (tested on final)
> - Prerequisites: Solid C/C++/Java programming.
> - Linear algebra (review next lecture) and basic math skills

所有涉及在图形处理器上的编程作业都使用GL着色语言，GPU使得三维图形可编程，是三维计算机图形学的变革。

> + Modern 3D Graphics Programming with GPUs
>
> + GLSL + Programmable Shaders in HW 0,1,2
>
> + Should be very portable, but need to set up your environment, compilation framework (HW 0)





#### 计算机图形学的历史

本章节将简单地介绍一下计算机图形学的历史。计算机图形学这个术语是从1960年由波音公司的William Fetter提出的；首个图形系统--美国空军SAGE雷达系统是在上世纪50年代中期发展起来的，该系统是在MIT研究的基础上开发的。

我强烈建议大家，如果有机会，一定要看看计算机图形学历史的视频，它是在SIGGRAPH 25周年庆上发布的，虽然有点久了，但它很好地介绍了本领域的早期历史。在概论课上我最喜欢做的事情之一，就是告诉大家文字本身在计算机图形学上有着重大发展。如果你去阅读阿兰·图灵（Alan Turing）在开发Manchester Mark I号时的传记，会发现他提到了很多关于计算机未来潜能的很多细节，比如能下象棋的机器，甚至比如编译器，到高级编程语言，但不知何故他却没提到文字的概念。

Manchester Mark I号，其显示器本质上是一堆发光二极管。因此，人们只能通过直接查看其存储器，去试图发现发生了什么事情。所以从那时起，到计算机真正显示文字，是一个巨大的进步。字体的设计方式、字体在场景中的显示方式、在屏幕上如何呈现出平滑的效果，是二维计算机图形学早期一些非常有意思的问题。

当然，文本化的表达已经不再是最近几十年中我们在计算机中使用的主要形式了。一个很重要的发展是图形用户界面的概念。图形用户界面有着有趣的历史。它发明于上世纪70年代的施乐公司在帕罗奥图（Palo Alto）的研究中心，大概在1975年前后。但是施乐公司并没有从图形用户界面的发展中真正获利。图形用户界面在苹果公司的Macintosh电脑中被首次使用，随后成为了所有计算机的一个标配。画图是计算机图形的一个早期应用。伊凡·苏泽兰（Ivan Sutherland）的画板（Sketchpad）系统，开发于60年代的MIT，在当时遥遥领先。它介绍了很多现在系统中还用到的绘图的概念，比如弹出菜单、基于约束的画图、分层建模。我在这给出了一个视频链接，讲述苏泽兰的画板系统。我强烈建议你们在课后观看。

画板可以被认为是第一个交互式计算机图形系统，实际上这也是第一篇关于计算机图形的博士学位论文。实际上，它为计算机图形的应用打下了很好的基础。在此之后，很多人对开发绘图系统饶有兴趣（绘图系统得到了很好的发展）。由Richard Shoup和Alvy Ray Smith开发的SuperPaint系统，也是70年代在施乐Palo Alto研究中心进行的。我在网上搜集了这些我提到的伟大产品的图片，它们是由Richard Shoup整理的。

SuperPaint系统真正预示了现代软件技术，比如Adobe Photoshop。实际上，Adobe是最早从事计算机图形的新兴企业之一。当然现今，我们会毫不犹豫地用它来对图像进行通用操作。图像处理技术在我们能从屏幕上看到什么中扮演着重要的角色。我们很少能见到没有经过处理的图像。你可以通过裁剪、缩放、合成来修改图像。你甚至可以增减物体。电视体育节目中常常结合了二维和三维图形处理，无论是奥运会播出中的世界纪录线，还是在各泳道上显示游泳运动员名字。甚至在各地显示的各种广告，所有这些都可能是由智能的图像和视频技术处理出来的。



<center><iframe width="560" height="315" src="https://www.youtube.com/embed/FfSnJdpFBb8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>



我们快速地回顾了二维计算机图形学的历史。回顾之余，我要指出，虽然二维已不再是图形学课程中要学习的重点了，但它真正改变了我们生活的世界。你无法想象如果离开了二维计算机图形，当今世界会变成什么样。这门课的大部分内容是关于三维计算机图形的，我只打算给你们简要介绍建模和绘制（渲染）方面的历史。

几何建模是一个创建三维几何的过程，能在计算机的图形系统中使用。在七八十年代，最重要发展之一就是样条曲线和曲面的发明。这些几何方法能把这个被称为犹他茶壶的物体创建出来。这个模型是犹他大学建立的。在当时这是一个很有意思的模型，因为这个茶壶中包含了很多有趣的几何信息。它不是一个0亏格的曲面，它有一个把手，有一个壶嘴，所有这些都能通过样条模型生成。后来，从真实世界获取三维几何形状引起了广泛的兴趣，模型被表示为从真实物体上获取的三角网格。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gkwwqcelnzj30m80etgm6.jpg)

如今我们已经有由数十亿多边形网格组成的雕塑扫描了。斯坦福大学的Levoy教授和他的团队在这方面做出了突出贡献，数字 米开朗基罗项目，扫描了很多米开朗基罗的雕塑，其中包括了拥有20亿个多边形的大卫模型。几何越来越复杂，也更加有趣。

下面我们来介绍计算机图形绘制。上世纪60年代，一大挑战是处理可见性，当时提出了很多技术。这是消除隐藏线算法、消除隐藏面算法。这会导致一种非常有趣的图像，因为你看这里无法确定哪个物体在哪个物体的前方。我无法解释哪个物体在另一个的前面。这直接就引发了隐藏线消除问题——我想要消除我看不到的线条。这是艺术上的一个挑战，同时也生成图像来传达深度的概念。这是上世纪60年代的问题。Roberts 和 Appel 在这方面进行工作，提出一些现在看起来更有趣的东西，因为你可以感知深度。让我来做一个对比。这里很难分辨哪个物体在哪个的前面，然而当隐藏线被消除后，你可以更好地感知深度了。当然，隐藏线消除只是一方面，你可以将它扩展到隐藏面消除。所以，这就提出了判断可见性的根本挑战——哪个物体在哪个的前面。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gkxvspjcvxj30sg0lcwfd.jpg)

Sutherland 在1974年写了一篇著名的论文，提出把可见性归纳为排序问题的方法，并且比较了许多不同的可见性算法。当然一旦完成了消隐，我还可以给物体上色。但目前为止，大家可以看到它们只是被涂上某个固定的颜色。这个图像仍然不怎么好看。看看这儿的这个椎体，你能清楚地看到不同的面片（三角形），这许多三角面片构成了一个近似的椎体。同样，对这个球体，可以看到多边形轮廓，这些三角形和几何形状都是用来近似球体的，所以这还是不理想。

因此上世纪70年代的挑战就是，如何得到几何体的好看、色彩平滑过渡的图像。我打算从我早前展示给你们的能清楚看到
多边形轮廓的图像开始讲起。犹他大学的Henri Gouraud 在1971年提出了一种可以处理这些多边形轮廓的方法，即插值明暗使表面看起来平滑。这就是著名的Gouraud明暗处理，在OpenGL里仍然使用该方法。这是平滑着色法，图像瞬间看起来平滑了很多。实际上，它们看起来象真正的曲面，而非我们用计算机图形表示的那样。但是，它们看起来仍然没有光泽，象泥土质地。实际上它们仅仅被赋了个恒定的颜色。下一个由Bui Tuong Phong提出的新方法，有了镜面反射的概念，该方法称为Phong明暗处理，或Phong光照模型。Phong明暗处理以发明人的名字命名，可以说，计算机生成的图像有99%仍然在用该方法。Phong方法加入了高光，让图像看起来更加真实。实际上，该方法是让塑料的外表除了有漫反射、物体本身的颜色分量外，还加入了镜面高光。此后，还有很多工作。Jim Blinn和他的同事在曲面和纹理方面做了大量工作。1974年Ed Catmull提出了z-buffer的概念，即在现在的显卡中广泛使用的消除隐藏面算法。这些问题在80年代和90年代解决了。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gkwwt61xkbj315o0gojvl.jpg)

下一个挑战就是全局光照问题。Turner Whitted,在1980年首次提出了递归的光线跟踪算法。这个是你在作业3需要完成的任务，实际上，你可以生成比这张更好的图像。把自己穿越回1980年，只能看到非常简单的计算机图形图像，有些有个球，球面上折射了该表面，还有反射、折射，各种非常有趣的视觉效果。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gkwwyg6088j30mm0cl3z0.jpg)

Turner Whitted的这个图像非常经典，让许多人对计算机图形学的前景感到非常激动，因为它真的能地生成逼真的图像。
另外一个重要的突破是辐射度，你可以模拟光在墙壁和盒子间的相互作用。在这个例子中，两个小盒子分别在这里和这里。它们实际上由中性灰色金属制成。所以所有的颜色实际上是来自于墙面的反射。因此这里蓝色的墙往盒子上反射了能量，同样，红色的墙也反射了能量。通过这种方式，盒子有了微微的红色和淡淡的蓝色，这就是著名的康奈尔盒子（Cornell Box）。康奈尔盒子是由康奈尔大学提出的。此后，Kajiya在1986年提出了渲染方程，它是一个统一处理各种视觉现象的方式，比如左边的两个图像，光线跟踪或辐射度处理的现象。他生成了这幅美丽的图像，所有的颜色都来自于绿球的焦散，是由物体间的互相作用而生成的。除绿球之外的所有物体，本身都是中性的灰色。通过这种方法，他得到了很多视觉效果，而之前人们很难通过一个统一的框架来实现。事实上，80年代和90年代的很多工作都是在求解渲染方程。这个要考虑到环境中各处光线的全局光照问题至今仍是一个挑战。

还有，我们如今的目标是创建一张象照片一样真实的图像。也就是说，要让图像看起来和真实照片一样。而且，越来越多的挑战来自于如何实时地生成真实感图片。实时真实感图形的生成是当前的学术前沿问题，我们将首次能够去实现它。

我终于介绍完建模和绘制的历史了。当然计算机动画的历史和计算机图形学的历史也非常重要。我强烈地推荐这个短片，这个是它的网址，这个很棒的10分钟短片介绍了计算机动画的历史。它也涵盖了我们讨论过的一些话题。特别是画板（Sketchpad）、动画、基本的建模和绘制。它是一个很好的关于三维计算机图形学和这门课程的简介。



> + 10 min clip from video on history of animation
>
> + http://www.youtube.com/watch?v=LzZwiLUVaKg
>
> + Covers sketchpad, animation, basic modeling, rendering
>
> + A synopsis of what this course is about



### Lecture2 Basic Math

#### 向量和点乘

##### 下阶段任务

> + Complete HW 0
>   + Sets up basic compilation issues
>   + Verifies you can work with feedback/grading servers
> + First few lectures core math ideas in graphics
>   + This lecture is a revision of basic math concepts
> + HW 1 has few lines of code (but start early)
>   + Use some ideas discussed in lecture, create images
> + Textbooks: None required
>   + OpenGL/GLSL reference helpful (but not required) 

课程最初的几讲讲介绍计算机图形学中的核心数学和技术思路，它们是计算机图形学中的一些最迷人的思想。

##### 学习动机

> + Many graphics concepts need basic math like linear algebra
>   + Vectors (dot products, cross products, …)
>   + Matrices (matrix-matrix, matrix-vector mult., …) 
>   + E.g: a point is a vector, and an operation like translating or rotating points on object can be matrix-vector multiply
> + Should be refresher on very basic material for most of you
>   + Only basic high school math required 

许多计算机图形学的概念会用到基础数学，如线性代数。我们关注向量、点积、叉积、矩阵、矩阵向量和矩阵之间的乘积。举一个例子，有一点你想将它移动到其他区域或有一个人物你想在场景中把它移动到其他位置。你可以把点看成是一个向量，然后我们来看如何将平移、旋转等操作写成矩阵向量的乘积。



##### 向量

> Usually written as $\vec a$ or in bold. Magnitude written as $||a||$
>
> + Length and direction. Absolute position not important
> + Use to store offsets, displacements, locations
>   +  But strictly speaking, positions are not vectors and cannot be added: a location implicitly involves an origin, while an offset does not.

向量通常用向量符号表示，在字母项上有一个箭头$\vec a$，如果在书面上表示向量也经常用粗体；向量的模通过在向量两边添加竖线来表示。

向量有一个长度和一个方向，它的的绝对位置并不重要。向量可以用来储存偏移量、位移量和位置，但严格来说它们在技术上有微小的差异，那就是一个位置不能严格地称为一个向量。实际上，你不能将两个位置作为向量相加，因为对于位置来说包含一个隐藏的原点。然而，向量应该是和原点独立的，可以相对自身进行平移。尽管如此，将位置表示成向量还是非常方便的，可以将它们作为矩阵作乘法来完成各种变换操作。



##### 向量加法

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gl58x8ngjng307s04vjr6.gif)

> + Geometrically: Parallelogram rule
> + In cartesian coordinates (next), simply add coords

在几何上，这可以用“平行四边形法则”来完成。现在有一个向量$\vec a$，还有一个向量$\vec b$，然后平移$\vec b$，使得向量$\vec b$的起点和向量$\vec a$的终点相连，然后将平行四边形补充完整，它的对角线就是加法的结果。如果不考虑平行四边形，考虑成三角形也是可以的：从向量 $\vec a$ 的起点到向量 $\vec b$ 的终点就是向量 $\vec a+\vec b$。向量的加法是可交换的，因此 $\vec a+\vec b$ 和 $\vec b+\vec a$ 是相等的。

> $A=\begin{gathered} \begin{pmatrix}x \\ y \end{pmatrix} \qquad A^T=(x \space y) \qquad ||A||=\sqrt{x^2+y^2} \end{gathered}$
>
> + X and Y can be any (usually orthogonal unit) vectors 

如果你对平行四边形不太感兴趣，那么我们可以简单地考虑成在笛卡尔坐标系下的坐标加法。



![](https://tva1.sinaimg.cn/large/0081Kckwgy1gl58mclzsfg307s04v0sj.gif)

##### 向量乘法

> + Dot product
> + Cross product
> + Orthonormal bases and coordinate frames
> + Note: We use right-handed (standard) coordinate

向量可以作乘法，实际上向量有两种乘法：点积（点乘）或者数量积、叉积（叉乘）或者向量积。在本课程中，我们将使用右手坐标系，这是大多数数学教科书采用的标准坐标系。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gl5qh03qerg307s04vmwy.gif)

点积或数量积，记作$\vec a \cdot \vec b$。它是可交换的，也可以等于 $\vec b \cdot \vec a$。点乘依赖于 $\vec a$ 与 $\vec b$ 之间的夹角，入股向量是对齐的，那么这个结果应该是它们大小的乘积。但是，当它们没有对齐时，我们必须乘上一个它们之间的夹角的余弦值$\vec a \cdot \vec b = |\vec a|\vec b| \cos \phi$。反过来，我们也可以通过反函数求出夹角$\phi=\cos^{-1}{\frac{a \cdot b}{|a||b|}}$，而这是点乘最常见的用法，因为点乘在笛卡尔坐标系下求解非常有效，但是求两个向量之间的夹角却不是那么容易。

点积或数量积满足结合律和分配律，所以$a \cdot (b+c)=a \cdot b + a \cdot c$。如果你在任何向量前面乘一个标量$k$，$(ka)\cdot b$ 或 $a \cdot (kb)$等于在点乘的结果上乘以标量$k$。

##### 点积乘法推导

现在的问题是，笛卡尔坐标系下的点乘是什么（$a \cdot b = \begin{pmatrix}x_a \\ y_a \end{pmatrix} \cdot \begin{pmatrix}x_b \\ y_b \end{pmatrix}=?$）。我们现在可以对这个式子展开：

> $(x_a \vec x + y_a \vec y) \cdot (x_b \vec x + y_b \vec y)=(x_ax_b)(\vec x \cdot \vec x)+(y_ay_b) (\vec y \cdot \vec y)+ (x_ay_b+x_by_a)\vec x \vec y$

又因为 $\vec x$ 与 $\vec y$ 的夹角是90度，余弦值为0，所以 $\vec x \vec y$ 这一项等于0，也就是 $a \cdot b = \begin{pmatrix}x_a \\ y_a \end{pmatrix} \cdot \begin{pmatrix}x_b \\ y_b \end{pmatrix}=x_ax_b+y_ay_b$



> - Find angle between two vectors (e.g. cosine of angle between light source and surface for shading)
> - Finding projection of one vector on another (e.g. coordinates of point in arbitrary coordinate system)
> - Advantage: computed easily in cartesian components

让我们看一下数量积在计算机图形学中的一些应用，最明显的一个就是求两个向量之间的夹角。光源和表面之间夹角的余弦值对于投影来说非常关键。找到一个向量在另一个向量上的投影也非常重要，比如我们想知道一个点在新的坐标下的坐标。

点积的优点是它**在笛卡尔坐标系下计算非常容易**。

最后我们来看一下投影。我们经常想要一个向量在另一个向量上的分量是多少，而利用点乘我们可以很容易得到：投影向量的模乘以余弦值。所以我们可以说 $\vec b$ 在 $\vec a$ 上的投影等于 $\vec b$ 的模乘以夹角的余弦值（$|b \to a|=|b|\cos\phi=\frac{a \cdot b}{|a|}$）。



#### 叉乘

> + Dot product
> + Cross product
> + Orthonormal bases and coordinate frames
> + Note: We use right-handed (standard) coordinates

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gl5s4fgeu2g307s04vq2q.gif)

叉积用一个叉号表示，写作 $a \times b$。叉积的含义是由$a$和$b$所长成的平行四边形的面积，$|a \times b|=|a||b|\sin{\phi}$。它包含了因子 $\sin{\phi}$ 而不是 $\cos{\phi}$。叉积也有一个向量的方向，是由右手法则给定的：伸出右手，将手从向量 $a$ 弯曲向向量 $b$，拇指所指的方向就是叉积的方向。 



##### 叉积性质

不同于之前的点积，在叉积中前后两个向量的顺序是有意义的，如果颠倒顺序，根据右手法则叉积的符号会发生变化。有趣的是，叉积与两个向量垂直，所以它对于创建一个坐标系非常有用，可以用右手法则验证公式是正确的：

> $x \times y = +z \qquad a \times b = -b \times a$
>
> $y \times x = -z \qquad a \times a = 0$
>
> $y \times z = +x \qquad a \times(b+c) = a \times b + a \times c
> $
>
> $z \times y = -x $
>
> $z \times x = +y$
>
> $x \times z = -y$

叉乘本身有一些性质：向量和本身的叉乘等于0，因为 $sin$ 为0；叉乘满足结合律；如果在向量前乘以一个标量，那么叉积的结果也乘以这个标量。



##### 叉积方程推导

> $({x_a} {\vec x} + {y_a} {\vec y} + {z_a} {\vec z}) \times ({x_b} {\vec x} + {y_b} {\vec y} + {z_b} {\vec z})$
>
> $(x_a \vec x \times x_b \vec x) + (y_a \vec y \times y_b \vec y) + (z_a \vec z \times z_b \vec z) + (...)$

而之前我们的性质里有 $a \times a = 0$，所以这三项我们可以忽略，关注其他的部分。

> $0+（x_a \vec x \times y_b \vec y）+ (x_a \vec x \times z_b \vec z) + (y_a \vec y \times x_b \vec x) + 0 + (y_a \vec y \times z_b \vec z) + (z_a \vec z \times x_b \vec x) + (z_a \vec z \times y_b \vec y) + 0$

又由前面的性质知 $\vec x \times \vec y = \vec z$ ，同理 $\vec y \times \vec x = -(\vec x \times \vec y) = -\vec z$

$a \times b = \begin{bmatrix} x & y & z \\\\ x_a & y_a & z_a \\\\ x_b & y_b & z_b\end{bmatrix} = \begin{pmatrix}y_az_b - y_b z_a \\\\ z_ax_b - x_az_b \\\\ x_ay_b - y_ax_b \end{pmatrix}$

通常情况下，行列式是用来计算数值的，但是在这里它是计算叉积的一种简便方式，注意这里的$x$、$y$、$z$是向量。

我们也可以将它写成矩阵-向量乘积的形式，其中$a \times b$就是某个矩阵乘以向量$b$的列向量，矩阵乘法可以验证两者的一致性。

$a \times b = A \cdot b = \begin{pmatrix}0 & -z_a & y_a\\\\ z_a & 0 & -x_a \\\\ -y_a & x_a & 0\end{pmatrix}\begin{pmatrix}x_b \\\\ y_b \\\\ z_b\end{pmatrix}$



> + Cross product orthogonal to two initial vectors
> + Direction determined by right-hand rule
> + Useful in constructing coordinate systems (later)





#### 创建一个坐标系



> + Important for representing points, positions, locations
> + Often, many sets of coordinate systems (not just X, Y, Z)
> + Global, local, world, model, parts of model (head, hands, ...)
> + Critical issue is transforming between these systems/bases
> + Topic of next 3 lectures



正交基和坐标系对于表示点、位置非常重要。通常有很多不同的坐标系的集合，所以不是只有单一的XYZ坐标系。在图形学中，这种情况非常常见，你会有一个和模型相关联的坐标系，还会有一个和局部坐标相关联的坐标系，你会有一个和世界相关联的坐标系，甚至还会有分别关于肩膀、手、躯干、腿、鞋子的单独的坐标系。

一个非常重要的部分是在一个一致的坐标系中获取这些不同物体的位置，所以一个关键问题是这些不同的坐标系之间的转换。



##### 坐标系

> Any set of 3 vectors(in 3D) so that
>
> ​	$|u|=|v|=|w|=1$
>
> ​	$u \cdot v = v \cdot w = u \cdot w = 0$
>
> ​	$w = u \times v$
>
> $p=(p\cdot u)u+(p\cdot v)v+(p\cdot w)w$

什么是一个坐标系？它是三维空间中的任意三个向量的集合，这三个向量都是单位长度的，向量相互之间是正交的，它们之间满足叉乘关系，即$w=u \times v$。可以把所有的这些考虑成$X$、$Y$和$Z$。当然，$X$、$Y$、$Z$单位向量都是单位长度的，它们之间也相互正交，并且满足$Z = X \times Y$。

有趣的是，一个向量$p$可以写为它在$X$、$Y$、$Z$上的投影的形式，所以$p=(p\cdot u)u+(p\cdot v)v+(p\cdot w)w$



##### 构建坐标系

> + Often, given a vector **a** (viewing direction in HW1), want to construct an orthonormal basis 
>
> + Need a second vector **b** (up direction of camera in HW1) 
>
> + Construct an orthonormal basis (for instance, camera coordinate frame to transform world objects into in HW1) 

如何构建一个坐标系呢？通常有这种情况，给定一个向量$a$，它是观察方向。你想基于它创建一个正交基，但是一个正交基需要三个单位向量，所以你无法由一个向量得到，所以需要第二个向量$b$，也就是相机向上的方向。有了两个向量$a$、$b$，怎么创建一个正交坐标系呢？直观地来说，你要把向量$w$和向量$a$联系起来，把向量$v$和$b$联系起来。但是$a$和$b$既不是正交的，也不是单位向量，而且我们还需要找到向量$u$。

> We want to associate **w** with **a**, and **v** with **b** 
>
> + But **a** and **b** are neither orthogonal nor unit norm 
>
> + And we also need to find **u** 

首先，我们先来看向量$w$应该等于什么。在这种情况下，向量$w$应该等于向量$a$，但$a$的长度不是单位长度，所以我们需要把它归一化：只要除以向量$a$的模$w=\frac{a}{|a|}$就可以了。而对于其他向量找到它们并不是那么容易，因为不一定与$a$垂直，但叉乘为我们提供了机会：创造一个同时垂直于两个向量的向量。所以$u=\frac{b \times w}{|b \times w|}$。对于给定了$w$和$u$，$v$可以通过计算$w \times u$得到，这样我们就创建了一个完整的坐标系，只要给定两个向量，它们不一定是单位向量，也不需要是正交。（当然如果长度等于0或者叉积模为0时这样做就不行了）



#### 矩阵

> + Can be used to transform points (vectors)
>   + Translation, rotation, shear, scale(more detail next lecture)

大部分变化都涉及矩阵乘以一个向量，因为矩阵可以用来变化点。实际上，所有的变换和图形学管线都是由矩阵完成的。



> + Array of numbers (m×n = m rows, n columns) 
>
>   $\begin{pmatrix}1 & 3 \\\\ 5 & 2 \\\\ 0 & 4\end{pmatrix}$
>
> + Addition, multiplication by a scalar simple: element by element 

什么是矩阵？它是一组数字，它有$m$行$n$列，示例中矩阵有3行2列。

矩阵的操作加法和数乘都很简单，它们是对矩阵中的每个元素做相应的运算。所以如果你把一个矩阵加到另一个矩阵上，只需要做对应元素的加法；如果你想给矩阵乘上一个标量，只需要把所有的元素都乘以这个常数，即标量。

重要的是 矩阵-向量 和 矩阵-矩阵 的乘法。注意向量是矩阵的一种特殊形式。在课程中我们一直使用列向量，所以它们有$n$行1列。



##### 矩阵-矩阵乘法

对于矩阵-矩阵 的乘法，规则是第一个矩阵的列数必须等于第二个矩阵的行数；如果你用$m$乘$n$的矩阵乘上另一个$n$乘$k$的矩阵，得到的结果是$m$乘$k$的矩阵。

另一种思考的方式是，乘积中$（i，j）$处的元素是第一个矩阵的$i$行和第二个矩阵的$j$列的点积，所以要求第一个矩阵的列数等于第二个矩阵的行数。



> + Number of columns in first must = rows in second 
>
>   $\begin{pmatrix}1 & 3 \\\\ 5 & 2 \\\\ 0 & 4\end{pmatrix}\begin{pmatrix}3 & 6 & 9 & 4 \\\\ 2 & 7 & 8 & 3\end{pmatrix}=\begin{pmatrix}9 & 27 & 33 & 13\\\\ 19 & 44 & 61 & 26\\\\ 8 & 28 & 32 & 12\end{pmatrix}$
>
> + Element (i,j) in product is dot product of row i of first matrix and column j of second matrix 



矩阵乘法不满足交换律。如果交换矩阵的次序，它甚至都不是一个合法的操作。

> + Number of columns in first must = rows in second 
>
>   
>
> + Non-commutative (AB and BA are different in general) 
>
> + Associative and distributive 
>   + A(B+C) = AB + AC 
>   + (A+B)C = AC + BC 

矩阵乘法满足结合律和分配律。



##### 矩阵-向量乘法

> + Key for transforming points (next lecture) 
>
> + Treat vector as a column matrix (m×1) 
>
> + E.g. 2D reflection about y-axis 
>
>   $\begin{pmatrix}-1 & 0\\\\ 0 &1\end{pmatrix}\begin{pmatrix}x \\\\ y\end{pmatrix}=\begin{pmatrix}-x \\\\ y\end{pmatrix}$

矩阵-向量 乘法是变换点的关键，我们可以把向量看成是一个列矩阵（$m$行1列）。



##### 矩阵转置

> $\begin{pmatrix}1 & 2 \\\\ 3 & 4 \\\\5 & 6\end{pmatrix}^T=\begin{pmatrix}1 & 3 & 5 \\\\ 2 & 4 & 6\end{pmatrix}$
>
> $(AB)^T=B^TA^T$

转置就是简单地把行替换成列。我们也可以转置一个向量，那么列向量就变成了航向量，反之亦然。

一个同样适用于矩阵转置和矩阵的逆的性质是如果你对两个矩阵的乘积进行转置，只需要分别求两个矩阵的转置，但是必须将转置的结果的次序颠倒，这是一个非常有用的性质。



##### 单位矩阵

> $I_{3 \times 3}=\begin{pmatrix}1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1\end{pmatrix}$
>
> $AA^{-1}=A^{-1}A=I$
>
> $(AB)^{-1}=B^{-1}A^{-1}$

定义单位矩阵也非常有用，这里的矩阵阶数是$3 \times 3$。它在主对角线上的元素都是1，其它地方都是0。

单位矩阵的性质是矩阵乘以矩阵的逆等于矩阵的逆乘以矩阵等于单位矩阵。怎么求$A$乘$B$的逆？就是分别求$A$的逆和$B$的逆，但是需要改变次序，即$B$的逆乘以$A$的逆。



##### 矩阵形式的向量乘法

###### 点积

> $a \cdot b =a^Tb$
>
> $\begin{pmatrix}x_a & y_a & z_a\end{pmatrix}\begin{pmatrix}x_b \\\\ y_b \\\\ z_b\end{pmatrix}=(x_ax_b+y_ay_b+z_az_b)$



###### 叉积

> $a \times b = A * b = \begin{pmatrix}0 & -z_a & y_a \\\\ z_a & 0 & -x_a \\\\ y_a & x_a & 0\end{pmatrix}\begin{pmatrix}x_b \\\\ y_b \\\\ z_b\end{pmatrix}$

