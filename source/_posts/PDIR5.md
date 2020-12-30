---
title: 像素宝典#5
tags:
  - Art
  - Pixel
  - Reprint
categories:
  - 像素美工(Pixel Art Designing)
  - 像素宝典(Pixel Dictionary)
banner_img: 'https://tva1.sinaimg.cn/large/0081Kckwgy1glwg68cmcdj30u00gw0va.jpg'
abbrlink: 2b4d75d4
date: 2020-12-22 16:15:13
index_img:
comment:
sticky:
---



这是来自佩德罗・梅代鲁斯（Pedro Medeiros，@saint11）授权的一系列像素美术教程，由风农翻译整理。本文将讲解视差和深度、渲染技巧、动画缓冲、像素画流程和废墟画法。

<!--more-->

佩德罗・梅代鲁斯最为知名的作品莫过于《塞莱斯特山（蔚蓝，Celeste）》，不过他持续在网络上发布的像素美术教程也同样相当知名。这里选择的教程就是经过风农翻译整理内容。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwg6zwi43j30u008c74z.jpg)

### 视差和深度

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwg71rziog30e80e8hdt.gif)

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwg71dlo7g30e80e8kjl.gif)


视差是游戏和编程里我很喜欢的技术。非常好实现，是 2D 游戏里表现深度的好办法。

我还附带了一个 `.love` 的例子，包括一个 `.lua` 的源代码文件，你可以看看。

要运行 `.love` 文件，需要先下载 Löve：https://love2d.org/

**parallax.love**：https://www.patreon.com/file?h=7863658&i=795078

**main.lua**：https://www.patreon.com/file?h=7863658&i=795082

**风农：**这一期跟后面有几期他都用到了这个叫 love 的引擎，我完全没用过，所以大家就领会领会精神就好了，如果感兴趣也可以去研究一下。

### 渲染技巧

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwg9vic3fg30e80e81hh.gif)

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwg72oqtcg30e80e8b0l.gif)


这一期是关于编程/美术的教程。

稍微有点偏向编程，但是对于想了解我常用的，简单的渲染技巧的同学会有点用。

希望这能帮助大家写自己的渲染代码。调整渲染能做到很多事情：精灵拖尾痕迹，故障效果，动态模糊等等。

附带了一个 `.love` 的例子，包括一个 `.lua` 的源代码文件，你可以看看。

**render_tricks.love**：https://www.patreon.com/file?h=7947098&i=809238

**main.lua**：https://www.patreon.com/file?h=7947098&i=809239

闪烁那个，原理是这样的：

一般游戏引擎里都获取时间的办法。

用这个时间数字，比如 `3` 秒，除以 `4`, 能得到商是 `0`，模/余数是 `3`。

```
3/4 = 0 
3%4 = 3
```

大概是这么个意思吧。

### 动画缓冲

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwg7361b6g30e80e8qc3.gif)

![img](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)
这节是编程和美术通用的。改变移动物体的速度能给动画增加个性，冲击力，让它更有趣。

对编程来说，使用补间动画时，别忘了加上缓冲函数。我特意给大家制作了一个简单的缓冲函数小抄，用的 Löve framework，（基于 Albano 的 glide  https://bitbucket.org/jacobalbano/glide）。

**风农：tween 在编程里一般指补间动画，意思是给两个位置，之间的运动由程序计算完成，所以说别忘了加上缓冲函数。有很多的库做这个。**

**一定注意看那几个代表位置的白块，那个东西就能解释他说的理念。**

**Easing.love**：https://www.patreon.com/file?h=8030922&i=825976

**main.lua**：https://www.patreon.com/file?h=8030922&i=825977

后面应该就没有这个什么 love 引擎的了。

### 像素画流程

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwg742sjjg30e80e8aig.gif)

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwg76vvejg30e80e8119.gif)


风农：这节图特别多，不过后面的静态图也都是动图里面的，只是拿出来，让大家慢慢看。

**动图后面 9 幅图都是定时特别长的，不是你手机卡住了。**

今天的教程稍有不同。因为要说的是流程，我决定用更传统的序列的形式。

带着定时阅读文字比较有压力，所以这个帖子我加了静态帧。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwganhqevj30e80e8746.jpg)

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwg77dnzpj30e80e8q2u.jpg)

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwgas8oknj30e80e8wee.jpg)

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwg76em1hj30e80e8jrb.jpg)

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwg77sbixj30e80e8glj.jpg)

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwg74kiltj30e80e80so.jpg)

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwg787tp9j30e80e8dfs.jpg)

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwg7607uij30e80e8jrc.jpg)

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwgb1jhw2j30e80e8749.jpg)



感谢大家的支持，下节见。

### 废墟

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glwg75jr6rg30e80e84qb.gif)

![img](data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==)


这个教程是关于废墟或者是损毁的东西。更多的是一些参考和窍门。我的主要建议是不要做的太过。加太多的裂痕，或者太多的对比，会显得所有东西都很乱。

图中提到的故障效果教程在之前的课程中可以找到

今天开始我要去温哥华，再到旧金山参加 GDC，所以可能要有一两周断更了。不过之后马上更新。

希望 GDC 上能看到大家：D

很骄傲的说目前这个系列已经有 6 个月了！不敢相信我已经做了 24 个教程！

这都是因为大家的支持和分享，非常感谢！



