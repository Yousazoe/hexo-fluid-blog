---
title: 开始画像素画#2
tags:
  - Art
  - Pixel
  - Aseprite
  - Reprint
categories: [像素美工(Pixel Art Designing),开始画像素画(Making Pixel Art)]
banner_img: 'https://tva1.sinaimg.cn/large/0081Kckwgy1glhu6x5zcbj31hc0u0434.jpg'
abbrlink: 90b77012
date: 2020-9-19 19:37:25
index_img:
comment:
sticky:
---



这是来自佩德罗・梅代鲁斯（Pedro Medeiros，[@saint11](https://twitter.com/saint11)）授权的一系列像素美术教程，转载自[风农](https://indienova.com/u/fengnong)的翻译整理。本文会讲解像素绘画的流程，逐渐完善直到达到满意的效果。

<!--more-->



佩德罗・梅代鲁斯最为知名的作品莫过于《塞莱斯特山（蔚蓝，Celeste）》，不过他持续在网络上发布的像素美术教程也同样相当知名，indienova 已经做了完整转载。

这部分教程就是经过风农翻译整理的另一部分内容：《开始画像素画（Making Pixel Art）》。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhu7imh83j30u008c74z.jpg)


相关链接：

- Pedro Medeiros@Patreon
  https://www.patreon.com/saint11
- 风农@indienova
  https://indienova.com/u/fengnong
- 风农@bilibili 专栏
  https://www.bilibili.com/read/readlist/rl38114

像素簇草图和绘画。

系列的第二篇。

这个教程会使用 Aseprite。这次我会教大家一个很像传统绘画流程的像素画技术。我一般叫它像素簇草图技术，因为我会从大的像素簇画起，再逐渐完善，直到达到我满意的效果。

### 什么是像素簇

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhu7kk00zj30ln0axwec.jpg)



一个簇，或者颜色簇，或者像素簇，就是一组连续的同色像素。对角线连接的像素算不算还有些争论。我认为也算，我把这种叫弱连接，会尽量避免，不过不会太担心这种。

画像素画的时候，我的重点是尽量少出现像素簇，而且一定避免单像素的簇。这些单像素的也可以叫孤立像素，通常会让画面看起来有很多噪点，很乱。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhu7ix03cj30ra0e3q2q.jpg)



有时候你需要把一个孤立像素删除，但有时候你可能还需要这个细节。对于后者，我有一些喜欢的形状可以代替这个孤立像素，就是饼干下面这些绿色形状。不过有些时候它也可以用，像是纹理，抗锯齿（以后的章节会讲），以及一些强细节，比如下面骷髅里的红色眼睛：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhu7jxpdvj307o07j0nc.jpg)



### 开始画

我们来画点什么。我要画一个小的场景，用 `DB32` 调色盘，分辨率用 `100` 乘以 `64` 像素。对这个练习我推荐用个手绘板，因为自然的线条对结果能有些帮助。

如果你觉得这个场景有些复杂，可以自己去掉一些东西，比如建筑，或者人。实验新的技术时一定要画自己舒服的东西。如果觉得画布太大，或者太小，就自己改一下尺寸，不过我不建议小于 `64` 或者大于 `128`，暂时别。

#### 第一步：大簇

上次我们是画了线条，再用颜色填充内部。这次我们直接开始画颜色。大致的画上你想画的东西，重点在选择颜色和氛围。自由的下笔，不要加细节。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhu7lcj7dj30nj085t8h.jpg)



这个技术的思路是从大的色块开始，每一步逐渐改小。这是少数可以用 `2` 或者 `3` 个像素宽度的画笔的情况。可以按 + 或者 - 来调节笔刷大小。另外一种方式是画出一个簇的轮廓，再用油漆桶填充颜色，快捷键是 G。

#### 第二步：改良

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhu7ktfnnj30ms0f0web.jpg)



你可以看出我是从远处开始，像天空和山，然后添加了建筑，再添加了人物剪影。这是一种常见的绘画技巧，对像素画也很适用。这个思路是先准备好基础，再往上面放东西，用这种方法比较容易选择颜色，以及确定物体尺寸。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhu7lvuf3j30es07dq2t.jpg)



像这类图我喜欢用图层，把天空，建筑，地面放到不同的图层。要新建图层，可以在时间轴上，右键点击“layer 1”这里，选择新建图层（`New Layer`）。你可以建任意多的图层，不过我会保持图层尽可能的少，不然会很乱。

#### 第三步：修正锯齿，添加细节

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhu7m739fj30gi0eba9u.jpg)



什么算锯齿？好吧，听起来可能很复杂，但其实没有。

锯齿指的是像素画里不必要的拐角，通常是手自然运动绘画时，缺少抗锯齿的副作用。

想象你需要修正的边界是个楼梯，每一阶上的像素数量要有逻辑。我们要计算像素数，保证曲线接近于水平时，像素数量是逐渐增加的，当曲线接近垂直时是逐渐减少的。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhu7jfk5oj308y07f0sh.jpg)



分解一下，每一条线或者簇的边界都应该遵从一些逻辑。你能看到在我的例子里，一个完美曲线中的各阶的像素数递增再递减。这就是曲线的行为，通常会遵守一些几何比例，以指数递增或者递减。

锯齿就是这个逻辑里的错误点。是曲线中间突然增加或者减少的地方。数量可以增加或者减少的很快，只要曲线符合逻辑。

修复的时候，把像素来回移动，让各阶保持一致，或者正确的增加减少。

现在回到我们的画。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhu7nr5gej30p609ddfo.jpg)



这里的思路就是“最后加上些细节”（https://knowyourmeme.com/photos/572078-how-to-draw-an-owl），主要是找到锯齿，一个个的修复。在这个过程中我会不断添加细节，增强对比，优化光照等等。不是很有组织的流程，但还是能帮我画出一幅画。

### 接下来

练习！如果一整个场景对你来说有些难，就从简单点的开始，像是石头，树墩。这个技术能产出很有机，很油画感的作品，很适合画背景或自然事物，比如植物，水，山。

