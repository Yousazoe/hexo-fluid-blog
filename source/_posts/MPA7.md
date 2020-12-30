---
title: 开始画像素画#7
abbrlink: 7559aa07
date: 2020-11-29 19:42:38
tags:
  - Art
  - Pixel
  - Aseprite
  - Reprint
categories: [像素美工(Pixel Art Designing),开始画像素画(Making Pixel Art)]
index_img:
banner_img: https://tva1.sinaimg.cn/large/0081Kckwgy1glhv6p4d9kj30u00gwt9p.jpg
comment:
sticky:
---





这是来自佩德罗・梅代鲁斯（Pedro Medeiros，[@saint11](https://twitter.com/saint11)）授权的一系列像素美术教程，转载自[风农](https://indienova.com/u/fengnong)的翻译整理。本文将讲解线条和具体操作。

<!--more-->



佩德罗・梅代鲁斯最为知名的作品莫过于《塞莱斯特山（蔚蓝，Celeste）》，不过他持续在网络上发布的像素美术教程也同样相当知名，indienova 已经做了完整转载。

这部分教程就是经过风农翻译整理的另一部分内容：《开始画像素画（Making Pixel Art）》。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv8bd0hfj30u008c74z.jpg)


系列第 7 篇。

### 什么是线条

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv89ju74j30ei0d812e.jpg)



线条是艺术领域最重要的工具之一。他们可以用来强调形状，对比。现实世界里我们看不到线条，但他们能帮助我们分隔空间，创造纹理，表现体积和方向。

在像素美术中，屏幕上的空间非常受限。每个像素都很重要，绘制线条就变得很昂贵。因此，如果你在画非常低像素作品，不推荐使用线条。即使有一些富裕的空间，还是要谨慎的使用线条，试着不使用线条去完成。最少化线条的使用，是保持像素画整洁的好办法。

![](https://mmbiz.qpic.cn/mmbiz_png/VZ8kwNia656nTI2LBj3suic8XQ4Ec2mDovDCt2BDcwjydRAsAavRfUE6DHsv5ia5XcbHnydHaaHo09AvG04kIS50Q/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)



不必要的线可以用阴影或者高对比区域代替。将线条与暗影部分融合能让画面显得更统一，自然。

### 不必要的拐角

之前简单的解释过（第一节），这里再进一步讲一下。

这种不必要的拐角，通常出现在手绘线条时。你可以手工去清理，也可以打开铅笔工具的“像素完美”（`pixel perfect`）功能来避免这些。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv88tzipj309w05c741.jpg)



这个算法在画单像素线条时非常有用，不过不总是完美的，你还是应该知道如何手工去清理。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv8cjbhrj30a205p0jc.jpg)



查找模式很简单：每当你看到一个拐角（`3` 或 `4` 个像素组成的方形），思考一下这里是否应当是个拐角。如果这部分不是拐角，就去掉一个像素让他更圆。

注意这跟锯齿是不同的，我在之前的章节（第二节）解释过锯齿，以及如何处理他们。修复拐角可能会创造出很多锯齿，所以通常这会是个多步过程：`绘制` > `修复拐角` > `修复锯齿`。

### 方形线

![](https://mmbiz.qpic.cn/mmbiz_png/VZ8kwNia656nTI2LBj3suic8XQ4Ec2mDovZlINW3bgF8R1K5SK9yyhNaKCib7BiblqlicP8AkCzIBxyFMttmyIBNLKQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)



单像素线条问题还有一种更风格化的解决办法。你可以到处加拐角，而不是尝试去移除他们。听起来没道理，但确实是种风格化的选择，很有趣，适合高度风格化的作品，因为它模拟了一种更粗的线条。

处理过程基本一样，只是你需要找到每个对角链接的像素，把它变方，而不是去删掉拐角。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv8a5yvaj309w05m0i1.jpg)

注意这样做也会产生很多锯齿，别忘了处理他们。

### Colored lines 有色线条

有些时候，尤其是在较低分辨率，线条会吸引过多的注意。有个弱化这种效果的方法是，给线条添加临近颜色的深色版本。

![](https://mmbiz.qpic.cn/mmbiz_png/VZ8kwNia656nTI2LBj3suic8XQ4Ec2mDov1liczK25ftiam3YsickNl5yTnNicL81HKl91snwwbw5s4XwAS1yrCib8lWA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)



过程很简单，回顾每条你画的线条，试着修改成临近颜色的深色版本。当你这么做之后，所选的颜色会让相应的区域显得变大了，所以线条的位置可能需要调整。有时候你可能不确定选哪个临近的颜色，有时候可能很容易确定。当你不确定的时候，就选更深的颜色。

我依然喜欢保留最外层的黑色描边，看分辨率合适的话我甚至会加倍这个外层描边。但这只是我个人的选择，你可以自己考虑。

### 线条草图

之前我们学过像素簇草图的画法，这次来试点别的。这种方法很适合于画角色以及画动画帧，因为画起来很快，而且聚焦于形状，而不是光和色（像像素簇草图那样）。

我们来做个实际案例学习，把这节提到的都应用上。如果你想要跟着做，建议新建 64*64 分辨率的画布，用 AAP-64 调色板。



**Step 1  — 草图**

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv87ygl3j30fh078mwx.jpg)

第一步先忽略各种像素画的规则，尽可能流畅的勾勒出形状。基本上跟在纸上或者其他数字化的，非像素的媒介一样。不要过多考虑之后如何清理线条。完成后可以稍作整理，去除明显的标志线，定义一些形状。

**Step 2  — 线条清理**

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvbdn60dj307j0770sh.jpg)



现在开始做清理。把草图层设置成半透明，可以 右键 点击图层名称，选择属性，再调低透明度。现在可以在上面的图层去画。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv8ao6foj30c007zq2q.jpg)

这里的思路是画出最终的线条图。先聚焦在重点线条上，比如构成角色剪影和脸部的线条。先不要关心颜色和光影，如果想画的话可以画一点主阴影，重点还是把主要形状弄对。



**Step 3  —  底色**

![](https://mmbiz.qpic.cn/mmbiz_png/VZ8kwNia656nTI2LBj3suic8XQ4Ec2mDovve85R4AL3Ns9CkkPy3GZ91D8PLYmrl3Sc3WztQWvgHOec9h0XZDLrg/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)



很简单的一步，找到符合需求的颜色，用油漆桶填充进去。避免过于饱和和过亮的颜色。还不到画光影的时候，但是要考虑好画面应该如何被照亮，有些区域会被周围的颜色影响。



**Step 4  —  光影**

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv88aqv3j307p077gld.jpg)



开始给画添加光影，添加明暗区域。试着想象光会如何照射到你画的物体上，相应的渲染。这一步找个参考图是个很好的办法。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvaibzjbj309z07h742.jpg)



我喜欢在这一步通过给弧线加上较深的颜色，来尽量弱化黑色的描边，就好像是做抗锯齿。不过别做太过，不然线条看起来会模糊。

这一步可以调整线条，但重点是光影。



**Step 5  —  线条上色和抗锯齿**

![图片](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv8c2gduj307p07agld.jpg)



之前提到过，过多的黑色描边可能会分散注意力。通过上色来弱化他们是个不错的方法。只要找到周围最近，最深的颜色，并把描边改成这个色的更深版本就行。

如果这个描边是用来分隔明显的区域，比如脖子和脸颊，衣领和头发，你可以画很深色，甚至保留黑色。这也是为什么我喜欢保持黑色的角色外层描边。弱化的过渡一般用亮一点的线，比如鼻子的线条。



**Step 6  — 打磨细节**

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvb2fvmtj307t076t8h.jpg)



最后这步你需要确定所有线条都做过抗锯齿，所有阴影过渡都合理的软化过（或者没有！如果是硬过渡的话。），并添加上所有细节。

添加背光，小的高亮，反射区域。因为所有东西都就位了，你可以衡量想要在画面添加多少细节。不要做得太过，注意别加入过多噪点。

这就完成了！多去练习，并试着把前几节的概念也融入进来。

Good luck!

