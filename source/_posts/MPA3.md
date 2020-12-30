---
title: 开始画像素画#3
tags:
  - Art
  - Pixel
  - Aseprite
  - Reprint
categories: [像素美工(Pixel Art Designing),开始画像素画(Making Pixel Art)]
banner_img: 'https://tva1.sinaimg.cn/large/0081Kckwgy1glhubt60qhj31hc0u0dje.jpg'
abbrlink: 90b77012
date: 2020-10-09 19:41:58
index_img:
comment:
sticky:
---



这是来自佩德罗・梅代鲁斯（Pedro Medeiros，[@saint11](https://twitter.com/saint11)）授权的一系列像素美术教程，转载自[风农](https://indienova.com/u/fengnong)的翻译整理。本文将讲解简单的 Aseprite 动画。

<!--more-->



佩德罗・梅代鲁斯最为知名的作品莫过于《塞莱斯特山（蔚蓝，Celeste）》，不过他持续在网络上发布的像素美术教程也同样相当知名，indienova 已经做了完整转载。

这部分教程就是经过风农翻译整理的另一部分内容：《开始画像素画（Making Pixel Art）》。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhud6tcj7j30u008c74z.jpg)


简单的 Aseprite 动画。这是系列的第 3 篇。

### 什么是动画？

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhuggpz84g30dw05oab9.gif)



动画是由一系列表现动作流程图像，按特定顺序播放，所引起的运动错觉。我们的工作就是让这个序列看起来尽可能让人信服。

### 时间轴

首先我们要了解时间轴。它是一种在单个文件里表现多个图像的方法。每一列都是完整的图像，有一个编号，我们称之为帧。

![图片](https://tva1.sinaimg.cn/large/0081Kckwgy1glhudbdlr7j30dq02t0pm.jpg)



新建帧的最简单方法是按 ALT + B。这会在当前选中帧的后面新建一个空白帧，然后选择它。你可以点击某帧来选中，或者按',','.'改变选中帧，在键盘上找 < 和 >，比较好记。

试着在不同帧上画些颜色，点击播放（Enter 键，回车）。也可以在预览窗口看，按 F7。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhud72cy8j308w07idfl.jpg)



你可能感觉“这么多快捷键我怎么记得住”，没关系。记住快捷键需要时间跟肌肉记忆，而且大部分也都可以只用鼠标完成。当你记不住某个快捷键，就在菜单里找找，或者查看 Aseprite 的官方键位参考图：https://www.aseprite.org/quickref/

### 一个非常简单的动画

画动画有非常多的技巧，比如应该按什么顺序绘制每帧，如何优化，不过我们暂时先讲我了解的最简单的一个技巧：一个“连续动作（straight-ahead）”的弹球动画。“连续动作”是指我们按顺序一帧一帧直接画，而不是先画出重要帧，再添加中间帧的方式。先建个 `32` 乘 `32` 的文件，随便选个调色盘。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhudcea72j30pt03r741.jpg)



![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhud855nnj30ig03va9t.jpg)



动画第一帧我称之为“静止”。它既是概念图，定义动画的风格，也是这个序列的停止位置。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhudekly7j30440440ba.jpg)

你要注意这帧里添加的细节，因为下一帧也要保持相同的风格。

接着复制这一帧（ALT + N），把它向上移动 `4` 像素，像这样：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhudajda0j303u03w0b4.jpg)

之后，继续向上 `3` 像素，`2` 像素，`1` 像素，多保持相同位置一帧，后面反过来一遍。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhud8k43lj30gt029741.jpg)

### 节奏

尽管节奏的运用是个相当复杂的主题，甚至可以做一整期专门的教程，我现在简单的从技术方面讲一点，让你可以自己去试试。

我们来添加一些节奏。球在落地后停一段时间，再跳起来。要增加某一帧的持续时间，右键 点击帧上的数字，选择帧属性（Frame Properties）。然后你可以输入你想要这帧持续的时间。我们试下 `300` 毫秒。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhud9h0a1j308d05qdfm.jpg)



你也可以选中多个帧，同时修改持续时间。对于一次性快速修改整个动画的速度很有帮助。

### 挤压和拉伸

这里我们可以做的一个简单改进是添加一点挤压和拉伸，一种让动作看起来更流畅自然的技术。包括沿着运动方向拉伸或者压扁物体，同时保持整体面积。

具体原理可以参考之前的教程：

[链接：像素宝典 #8](http://mp.weixin.qq.com/s?__biz=MjM5MjIyOTc2Nw==&mid=2649561430&idx=1&sn=50924ed496f2b1a5e91c843bbc4c8384&chksm=beb0c9be89c740a8f0eb6ce3e7f98fc4a65e7bdba4cfe0738ee0e67594721cd5278f81a87de7&scene=21#wechat_redirect)

我们复制下第一帧，把它水平拉伸，垂直方向上压扁，保持整体体积。保持体积是很重要的，这样物体不会看起来变小或者变大了。当然这属于在我们更有经验之后可以尝试打破的规则，不过暂时还是遵守它。这帧也被称作“准备帧”，主要用来让下一帧发生的动作看起来更强烈。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhud7nyyfj30bi0640kw.jpg)

现在我们用同样方式复制并修改球落地时的帧，可以画的更加夸张点。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhudd1yndj307m07l0f8.jpg)



最后是垂直拉伸（同时水平挤压）跳起的第一帧和下落的最后一帧，当球速度最快的时候。这就完成了，我们看下结果：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhudbt9f1j30mg07uwe9.jpg)



![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhud9yqt4g305c05cmxc.gif)

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhudaxnfug305c05cq31.gif)



### 保存动画

尽管保存成 `.aseprite` 格式可以保存动画，你可能想要把动画导出，发到网上或者用到游戏里。

网上，最简单的方式是保存成 `gif`，用 `FIle > Export...` 命令。勾选 `Export for twitter`， 如果你想把最后一帧修改成 `1/4` 的持续时间，这样即使 Twitter 把它转成 MP4 也可以完美播放。

当导出给游戏使用时，通常会保存成 png，动画一般会分解成一个精灵表或者图像序列。要保存成图像序列，选择导出为 png 格式，导出的文件后都带一个数字，像是“`bounce00.png`”。这回导出多个文件，像“`bounce01.png`”，“`bounce02.png`”等等。

有的引擎需要精灵表的形式，不需要手工处理，只要选择 File>Export Sprite Sheet，可以改改设置，有很多参数可选。

### 接下来

![图片](https://tva1.sinaimg.cn/large/0081Kckwgy1glhude6qwbg305c05c747.gif)



接下来我建议多试试时间轴，试着画点别的动画。你可以看看我其他的教程，选个感兴趣的跟着画画。

另外也可以试试经典的初学者练习，画一个面粉袋走和跳的动画：
https://www.youtube.com/watch?v=C8cbTGshkZw。

暂时保持低一点的分辨率和颜色数，不要太复杂了。