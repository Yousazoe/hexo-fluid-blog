---
title: 开始画像素画#6
abbrlink: 25e9a91
date: 2020-11-19 19:42:31
tags:
  - Art
  - Pixel
  - Aseprite
  - Reprint
categories: [像素美工(Pixel Art Designing),开始画像素画(Making Pixel Art)]
index_img:
banner_img: https://tva1.sinaimg.cn/large/0081Kckwgy1glhv3lwatuj30u00gwq47.jpg
comment:
sticky:
---



这是来自佩德罗・梅代鲁斯（Pedro Medeiros，[@saint11](https://twitter.com/saint11)）授权的一系列像素美术教程，转载自[风农](https://indienova.com/u/fengnong)的翻译整理。本文将讲解颜色理论基础。



<!--more-->



佩德罗・梅代鲁斯最为知名的作品莫过于《塞莱斯特山（蔚蓝，Celeste）》，不过他持续在网络上发布的像素美术教程也同样相当知名，indienova 已经做了完整转载。

这部分教程就是经过风农翻译整理的另一部分内容：《开始画像素画（Making Pixel Art）》。

![图片](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv4avw6rj30u008c74z.jpg)



这期是颜色理论基础，系列第 6 期。

### 理解颜色

即使是使用预先创建的调色盘，我们还是需要了解正在使用的颜色。对于颜色，我的主要理念是用尽可能少的色做到尽可能多的事情。我会解释一些颜色之间的特性和协同效果。

颜色可以分解成 3 个主要方面：**色调，饱和度和亮度**，或者缩写成 HSV。还有些其他的颜色分解方式，比如 HSL，RGB，LAB，CMYK 等等，我选择 HSV 是因为它很简单，也是画画时操控颜色比较直接的方式。

我们来一个个的讲一下这几方面。

### 色调

色调是用来描述颜色本身的属性。也可以称为颜色的本质，像是红，绿，蓝，而不是它有多亮。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv486le1j30b007fa9t.jpg)



注意，有的色调，像是蓝和紫，也可以显得比黄色更暗，即使是亮度值相同的情况下。要记住你可能需要对这种情况做些补偿，这取决于你最终要的效果是什么。

通常我们会避免在一幅画里加太多的不同色调，否则它会显得很杂。后面的**色彩设计**部分我会再讲一点这个。

### 饱和度

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv47qsjrj30el0aza9u.jpg)

低对比度皮肤和高对比度细节



饱和度是指颜色或者色素的强度。一个亮红色有较高的饱和度，灰色则相反，饱和度很低。通常过高的饱和度容易伤眼，所以不确定的时候不要用 `100%` 饱和度的色。

大片的高饱和度区域也会让眼睛疲劳，所以同样的，不确定的时候就用大片的低饱和度区域配合小的高饱和度细节。

### 亮度

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv4affkhj30eb0aya9t.jpg)



简单讲，亮度就是颜色上有多少光。亮橙色亮度值高，暗橙色亮度值低。这通常跟光照直接相关，有光的地方亮度值就高，相反阴影处亮度值就低。

### 色温

色温并不是 HSV 模型的内容，但也是很重要的颜色特质。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv48k6rnj30ep030dfm.jpg)



色温是由所有的颜色特性共同表现出来的：色调，饱和度和亮度。总得来说，你可以这样去考虑：

- 红色暖，蓝色冷
- 高饱和度用作极端温度（冷或者暖），低饱和度是中间温度。纯灰色通常给人感觉稍冷。
- 亮度稍复杂，但大部分时候，高亮度暖，低亮度冷。

我喜欢画面里带有相反的阴影和光照色温，通常是暖色的光和冷色阴影，不过有时候反过来也可以。这不是说必须一个红一个蓝，稍微暖或者冷一点就可以，取决于你想要营造的氛围。

### 明暗

选择颜色在处理光照和阴影时候尤其重要。我在之前的教程里讲到过基本的明暗，大家应该看过了：[开始画像素画 第四部分](http://mp.weixin.qq.com/s?__biz=MjM5MjIyOTc2Nw==&mid=2649568642&idx=1&sn=71b93198ad0c99098089883b4dd19fb7&chksm=beb0e56a89c76c7cf9cfe95292dad6357037ab4eac1f7ab9ea7dc57d47077b5d39b00bd22390&scene=21#wechat_redirect)。

这里我就重点讲如何在上明暗时选色。

我们先简单的画个花瓶，这是我画的：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv4903poj307c07c0ho.jpg)



当画光照的时候，你可能想“直接增加亮处的亮度值！”，但这并不是实际情况。

观察这个教堂的照片。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv49mkrzj30cv0eh488.jpg)



你可以看出顶部的亮处明显饱和度更高，也更黄，暗处在对比之下感觉有些偏蓝（但其实是非常低饱和度的红）。用这种照片非常有利于理解颜色和光照。

我们来把这个逻辑应用到花瓶上。我们使用色调偏移和饱和度偏移的方式，而不是简单的调整亮度。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv4btpc2j30en07h742.jpg)



能看出，左边简单调整亮度的看起来很枯燥，模糊。而右边的更生动有趣。这里我把阴影画的更蓝，饱和度更低（更冷），光照时更黄和饱和度更高（更暖），就像是教堂的照片。

当不确定的时候，就去找些照片参考，多做些实验！有时候尝试一些疯狂的组合，比如加上高亮度而不是中间亮度，或者在高亮处使用完全不同的色调，你可能会发现有趣的技巧。

### 色彩设计

你可以把颜色按巧妙的方式组合来创建调色盘和组合。这不是必须做的事情，但绝对是创建有趣对比和气氛的好工具。



**单色**

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv477s1ij30li0b1mwy.jpg)



最简单的色彩设计，只用一个色调怎么也不会出错。这一般会带来非常个性的感觉，谨慎使用。记住这不是说你必须要用一个饱和度，或者说禁止稍微调整一点色调，只要避免大的颜色变化，你依然可以偏移一点色调。



**补偿色**

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv4be9smj30lk0ayt8i.jpg)



这是个很棒的设计，适合创造出强对比。通常其中一个颜色是主色，而补偿的色，就是色轮里位置相对的色，用在细节上。红和绿，蓝和橙，紫和黄绿是其他的一些例子。

用这种组合时也要注意，它会创建非常强烈，有侵略性的画面，尤其是饱和度很高时。



**类似色**

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhv49y8irj30ll0aw3yb.jpg)



类似色设计是选择一个主色，比如这里的绿色，然后选相近的两个色调。这个色彩设计一般给人感觉平静舒适。非常适合低对比度的，和谐的画面。

### 接下来

还有很多的色彩设计，像是三色设计（Triad），分散互补色搭配（Split Complementary），方形色彩设计（Square）等等。颜色理论是非常深的主题，如果你想更深入了解的话可以看看下面这些：

- On Wikipedia
  https://en.wikipedia.org/wiki/Color_theory

- Basic Color Theory （上面提到的几个色彩设计，这里都有图解）
  http://www.tigercolor.com/color-lab/color-theory/color-theory-intro.htm

- Thread about colors in Pixel Joint
  http://pixeljoint.com/forum/forum_posts.asp?TID=10695

- Understanding Colors in Blender Guru
  https://www.youtube.com/watch?v=Qj1FK8n7WgY

  

如果要做自己的调色盘，Adobe 有个很棒的工具：

https://color.adobe.com/create/color-wheel/

最后提一下：记住，处理颜色是个很主观的事情。这里提到的都不是雷打不动的规则，都是灵活的指导方针，不过我还是建议在你能更自信的打破这些规则之前，继续遵守他们。