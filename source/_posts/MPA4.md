---
title: 开始画像素画#4
abbrlink: ec50fbbd
date: 2020-10-19 19:42:17
tags:
  - Art
  - Pixel
  - Aseprite
  - Reprint
categories: [像素美工(Pixel Art Designing),开始画像素画(Making Pixel Art)]
index_img:
banner_img: https://tva1.sinaimg.cn/large/0081Kckwgy1glhuqy3491j30u00gw75o.jpg
comment:
sticky:
---



这是来自佩德罗・梅代鲁斯（Pedro Medeiros，[@saint11](https://twitter.com/saint11)）授权的一系列像素美术教程，转载自[风农](https://indienova.com/u/fengnong)的翻译整理。本文将讲解明暗基础。

<!--more-->



佩德罗・梅代鲁斯最为知名的作品莫过于《塞莱斯特山（蔚蓝，Celeste）》，不过他持续在网络上发布的像素美术教程也同样相当知名，indienova 已经做了完整转载。

这部分教程就是经过风农翻译整理的另一部分内容：《开始画像素画（Making Pixel Art）》。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhurk4n8zj30u008c74z.jpg)



明暗基础

系列第 4 篇。这期文字比较长，准备好。

### 光照的原理

我们能看到东西是因为有光，当我们画某个事物时，实际上是在表现光在这个物体上的反应。即使没学过这些，你其实也知道光是如何工作的，因为你每天都在看：它会从一些材质上弹开，有时候会折射到其他东西上。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhurql7vrj30rx07tt8i.jpg)



另外一个也很重要，但是不太明显的方面是光照射物体的角度，垂直的光要比直射光暗些。

你需要试着在脑海里模拟光的表现，就好像你是个人型渲染机器。因为这是非常难的，而且很容易出错，所以还有个好的学习光照的方法，就是用照片参考。拿照片参考是很好的，你不需要去复制照片，但你可以用它来理解特定条件下光的表现。使用照片参考也是个不错的练习。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhuroajwcj30al0ea741.jpg)

### 基本结构

给图片加明暗时，最好有个可遵循的结构，这里我做了个简单的词汇表，以及每个词的简单定义。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhurosiosj30g90f3742.jpg)



**体积阴影（volume shadow）**：最常见的阴影，是自投射的软阴影。由于光被物体自身体积阻挡而产生。

**明暗交界线（Terminator）** ：明和暗区域的过渡区，可以是软的或者尖锐的。像素画里我们倾向尖锐的，以避免色带问题（之后会讲）。

**投射阴影（Projected shadow）** ：一个物体向另外一个物体投射的阴影，通常很尖锐。

**反射高光 （Reflection highlight）** ：也被称为镜面高光（Specular highlight），是物体上最亮的一个点。光滑易反光的物体有很小很聚焦的高亮点。粗糙的物体可能没有反射高光。

**高光 （highlight）** ：物体上基本的高亮区，想象成体积阴影的反面。

**边缘光 （rim light）**：当光从背面射来，看着就像轮廓变亮了。这通常由另外一个，暗点的光产生。

**漫反射光 （bounce light）**：有时候很难见到，是一个体积阴影中比较亮的地方，由光弹到地面又弹回物体上产生。

这些你没必要记住，只是如果画的时候不确定了，就来看看这个表。另外一个要记住的是这些东西可能大部分的像素画都装不下，尤其是低分辨率，或者低颜色数的像素画。永远记住：**好的像素画会去除所有不需要的细节**。

### 使用照片参考

我们做个练习，来画一下这个照片：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhurnugnvj30u00r941g.jpg)



首先新建文件，我用的是 `48` 乘以 `48` 的画布，`AAP-64` 调色盘。我推荐你拍个简单的东西，然后一起做，或者就用这个。试着跟这我的步骤。

像之前的教程，我先画出大的颜色簇，试着去除光照在照片中的效果。线面是整个过程，以及最后的一个缩放版的照片。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhurkhsj0j30hi0h1t8v.jpg)



你能看出我的设计里有很多自由发挥，我把姿势修改了一点，删掉了镜面高光，把娃娃画的更像个蛋一样。主要的原因是我们不是想要画的像个缩放版的照片，我们要让它看起来更好，所以我进行了调整，可读性更好，也更有趣。

我聚焦在重要的细节上。因为我们在非常低的分辨率上画，有些细节不需要包括进来，而有一些需要被”高亮“。注意缩放版的嘴，几乎看不到了，我把它画的更大，更好注意到，因为这算是个重要细节。眼睛一样，现在更大，更常规。

我们一步一步看：

1. 先画基本颜色和形状，我喜欢先用暗的色，然后画上亮的，不过这是个人喜好。
2. 画上物体内部的基本的光/影，这里先保持颜色数低些。
3. 画出投射的阴影。
4. 画上细节，以及其他小的部分。
5. 修正形状，增强阴影和高亮。
6. 如果需要的话添加抗锯齿和轮廓线。

如果你还是不满意结果，别担心，试着按自己节奏来，多练习。试着画简单点的东西，注意去掉不必要的细节。

### 识别面

下一个画，我们来试点其他的。你要给这个画加上明暗：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhutsmbosj301c01c0ag.jpg)



我们还是用 `AAP-64` 调色盘和 `48` 乘 `48` 的画布。要合理的给这个场景加上照明。这个跟其他图的主要区别是，这个大部分是平的面，其他的是圆的。

平面通常在整个面都有一致的颜色，圆的面上有颜色渐变。如果颜色不是很强烈，或者距离光源很近的话，平面也可以有渐变。不过我尽量避免这种，或者把变化做到最小。

了解这些之后，我么选个光的方向开始画。再回到这里检查如何解决这些问题，以及一些常见错误。

我没把光源也画到图里，因为这也是你需要练习的东西。选个好的光源是跟合理渲染场景一样重要的技术。

### 我的版本

我首先画的是背景和投射阴影，有助于我奠定整幅画的基调。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhurq5eacj306005t0mf.jpg)



之后给每个面选颜色，顶部和侧面应该是一致的颜色，斜面有个渐变。我只用了两个颜色是为了保持简单，并且让色带效果最小（下一节讲）。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhurrz2a2j305t05t0k5.jpg)



接着是轮廓线，比较烦人。我试着把他们现象成其他的小面，把形状软化一点。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhurmczqqj30630610p7.jpg)



现在对比度有些低，我加上了小的镜面高光，并加深了一些阴影。我还加上了简单的抖动，让斜面上的过渡更好。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhurnclc5j30610620sh.jpg)

### 常见错误

下面是加明暗时一些常见的错误，看看你有没有这样做过。注意这里的例子都比较夸张，这些也可能出现在更小的区域里。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhurl9tqgj306105z0mo.jpg)

**软面**

这通常出现在试图过分的软化物体光照时，或者是做错了方向。平面应该是一致的颜色，曲面应该只在弯曲方向上渐变颜色。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhurm13fvj305x05x0o0.jpg)



**枕形阴影**

这是个很常见的问题，通常是因为没有个明确的光源，沿着形状加上了阴影。

这个最好通过设置明确的光源，以及不要把面的边缘变暗来避免。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhurp9zppj306005x0qt.jpg)

**平光**

另一个常见错误是忽视了实际形状。记住你画的物体代表的是 3d 的形状，如果你不确定光如何表现，试着搜一下，或者直接拍一个照片参考。

### 接下来

练习！找更多的照片和其他的照明示例，直接复制，越多越好。去实验，用很有限的调色盘，你能否用一个颜色代替其他颜色？学习是关键，放大图片，看看他们的像素是什么样的，缩放照片看看什么可行，什么不可行。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhurprpryj30e60e6glf.jpg)



注意观察周围，在街上走时，看看光在建筑上的效果，看看它如何穿过你的手指。没什么比观察日常生活更能教会你明和暗的知识了。
