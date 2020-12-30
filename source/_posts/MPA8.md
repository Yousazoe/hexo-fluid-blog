---
title: 开始画像素画#8
abbrlink: e5e6b796
date: 2020-12-09 19:42:43
tags:
  - Art
  - Pixel
  - Aseprite
  - Reprint
categories: [像素美工(Pixel Art Designing),开始画像素画(Making Pixel Art)]
index_img:
banner_img: https://tva1.sinaimg.cn/large/0081Kckwgy1glhvcfloefj31hc0u0423.jpg
comment:
sticky:
---



这是来自佩德罗・梅代鲁斯（Pedro Medeiros，[@saint11](https://twitter.com/saint11)）授权的一系列像素美术教程，转载自[风农](https://indienova.com/u/fengnong)的翻译整理。本文将讲解文件格式和导出方法。

<!--more-->



佩德罗・梅代鲁斯最为知名的作品莫过于《塞莱斯特山（蔚蓝，Celeste）》，不过他持续在网络上发布的像素美术教程也同样相当知名，indienova 已经做了完整转载。

这部分教程就是经过风农翻译整理的另一部分内容：《开始画像素画（Making Pixel Art）》。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvdd9dpvj30u008c74z.jpg)



这个是系列的第 8 节。这篇技术细节比较多，可以跳过你不感兴趣的部分。

本节主要是文件格式和导出方法。

### Bitmap and vector 位图和矢量图

我们先来讲讲图片在电脑上是如何保存的。简单来说，有两种 2d 的图像文件类型，位图和矢量图。

矢量图是点、线坐标，以及颜色信息的集合，可以用来创作能缩放到任意分辨率的图像。它主要的缺点在于难以用在表现细节的图像上，像是照片，你几乎无法在像素级别进行控制。尽管我们能创建出看起来像是像素画的矢量图，或者把像素画导出成矢量图格式，但几乎没人这么做。也有些例外情况，比如说要把像素画打印到很大的板子上。

```html
<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
```

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvdbgy43j30330310pw.jpg)

而位图图像，才是像素画能够存在的原因。位图把图像想象成很大的网格，打印在屏幕上，每个像素都单独存储。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvdh3fwmj30jn0770s1.jpg)



这样保存的文件有时候比较大。一个 `1080*1920` 的图，意味着包含了 `2.073.600` 个独立像素需要保存，所以有时候需要用高效算法来压缩一下。

### Image compression 图像压缩

图像压缩是为了减小图像文件的体积，但是依据使用算法的不同，有些算法可能会损坏原数据。

压缩可以是有损或者无损的。有损压缩一般对于照片或者大幅插画是可以接受的，但是像素画就不可以。用 JPG 格式保存像素画会造成随机的颜色变化，图形虚影。在压缩像素画时，我们必须检查是否用的是无损压缩，比如 PNG 格式。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvdcrltyj30en07lmx2.jpg)

总的来说，你的编辑器提供的图像格式，比如 Aseprite 的.aseprite 格式，或者 GraphicGale 的.gal 格式，可以安全的保存所有的图层和元数据。

### 在 Aseprite 里保存

在 Aseprite 里用保存对话框进行保存（Ctrl + S，或者 Ctrl + Shift + S 做另存为新文件）

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvdgjejzj30hz0avdg0.jpg)



很直观，是吧？在这里保存为 `.aseprite` 格式，保存所有文件信息，以便你以后可以回来做修改。

### 导出预览

在完成了你的精灵图之后，你可能想要发布到什么地方，或者发给谁，但如果直接保存成 `.png` 文件，会有两个不好的地方：第一，你的图像会保存成一个扁平的文件，就是说失去了图层和元数据，第二，你的 `png` 文件可能会长这样：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvf351jhj30180180bx.jpg)

导出做预览的正确方式是用导出对话框，在“文件 -> 导出”（`File` ->` Export`）菜单

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvdidzz7j30b809ua9u.jpg)



这个对话框里有非常多有用的选项，我们一个个看一下：

**Output File 输出文件**：文件名。如果你直接输入想使用的文件格式，Aseprite 就可以保存为这个格式。推荐静态的图用“`.png`”，动画用“`.gif`”。

这里不会把保存命令的默认格式也改掉，所以不用担心这里选择的格式以后会把所有东西都拍扁。

**Resize 缩放**：像素画对于目前的显示器来说通常都太小，所以需要缩放。Aseprite 提供了很多的分辨率供你选择。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvdixafaj30ft0760oy.jpg)



你可能注意到了，只能缩放成 `100%` 的整数倍，不能有小数，比如 `250%`。这是因为非整数倍的缩放会损坏像素画。这是个像素画的严重缺陷，并且没有什么办法能避免。记住缩放一定要用整数倍（`200%`，`300%` 等），不要用非整数倍（`130%`，`250%` 等等）。

如果你一定要满足某个大小，试着缩放到最接近的最小的倍数，然后把画布延伸到你需要的尺寸。

通常放大 `200%` 或者 `300%` 发布到网上足够了。

**Layers 图层：**当你导出文件时，他会被拍扁，就是失去所有图层信息。这个选项可以让你选择导出时需要包含哪个图层。

**Frames 帧：**后面会详细讲，这里就是指要导出哪些帧。如果你有不止一帧，那么会发生两件事：

- 如果导出格式支持动画，比如 `gif`，那么就会导出动画到这个文件。
- 如果导出格式不支持动画，比如 `png`，那么 Aseprite 就会保存到多个文件，每帧一个。
  （编辑注：现在 `APNG` 动画格式其实也已经得到了广泛支持）

**Animation direction 动画方向：**这里可以看到常用的方向，比如向前，向后等等，选最适合你的。这里的含义很直观，你也可以自己试试。

**Apply pixel ratio 应用像素比例：**这个不常用，如果你用的不是方形像素，选这个会把它压扁成方形。如果不确定这个是什么也没关系，他不会改变什么东西。

**Export for Twitter 导出到 twitter：**勾选后会让最后一帧动画持续时间整个动画的一半长度，完美适合 twitter MP4 循环。

### Saving for the engine 保存给引擎

游戏引擎各不相同，每个都需要你做特定处理，不过这里是一些通用的原则：

- 首先是文件格式：尽管有些引擎支持 `tiff`，`gif`，甚至是 `bmp`，最好还是用 `png`。轻量，解压相对迅速，透明支持的很好。别用 `jpg`，`mp4`，或者其他的有损压缩格式。
- 除非你有什么原因，否则不要在导出给游戏引擎时对像素画做缩放。正常情况下精灵应该是由引擎来做缩放，所有文件都应该保持原有分辨率。
- 动画应该保存成图片序列，或者精灵表（sprite sheet）。不要用任何的视频格式，除非你在做什么特别的。

### Saving an image sequence 保存图片序列

当把动画保存为 `png` 时，Aseprite 会创建一个图片序列，看起来这样:

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvdbuf77j30ep045dfm.jpg)



一般这就行了，不过我喜欢文件名从 `0` 开始，而且我喜欢两位数字。这个很容易实现：在文件名这，只要输入文件名后面加上"`00`"。这里我把文件名写为 `alert00.png`，结果是这样：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvdhjw9lj30fs023gld.jpg)



另外一个有用的技巧是加多个标签。在 Aseprite 里，你可以选择多组帧加上标签。这样一个文件里可以保存多个动画。像这样：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvddrdl3j30kj03i3ya.jpg)



这有助于整理，导出也很方便，只要输入 `boss_{tag}{tagframe00}.png`，aseeprite 会这样导出：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvdccrpkj30j10dijsi.jpg)



很方便吧？如果你想多几个或少几个 `0`，可以把 `{tagframe00}` 改成 `{tagframe000}` 或者直接 `{tagframe}`。

### 保存精灵表 sprite sheet

有些游戏引擎推荐用精灵表，而不是多张图片，我们可以用“文件>导出精灵表”（`File` > `Export Sprite Sheet`）命令自动导出。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvdec521j30m10e3a9x.jpg)



这里我们有多个选项，可以根据所用的引擎做调整。有些需要在精灵之间添加边距，提供 `JSON` 描述信息，其他的可能支持去除透明部分。`Extrude` 拉伸可以让所有瓦片的边界颜色向外延伸一个像素，避免 3D 瓦片的接缝，如果你用的是 3D 引擎的话。不确定就什么都不选就好。

对于行和列的数量设置，如果引擎没有特殊要求，我建议选择“最适合纹理的尺寸”（`Best fit for texture`），让 Aseprite 自动计算尺寸。

这里需要注意的是，不勾选“`Output file`”并提供文件名时，点击导出不会生成文件的。你也可以选择“`Open generated sprite sheet`”，这会打开一个新文件，你可以手工保存。

### 切割工具和命令行

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvdi043kj309m06wjr5.jpg)



最后一个技巧时用切割工具 slice。切割工具适合于把多个图放在同一个画布的时候。我喜欢在给游戏场景制作素材时用这个，我可以把素材放在旁边随时比对尺寸。

首先要把精灵放到一个文件，挨着。别互相重叠到一个矩形区域就好。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvdepvv0j30gg0cx749.jpg)



接着选择切割工具，开始在每个物体上做选取，注意不要把其他物体的部分包括进来。之后你可以双击其中一个，或者右键点击查看属性，给它命名。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glhvdfbb6uj30u00cg0vg.jpg)



现在，用命令行！如果你主要做美术，这部分听起来可能有点吓人，但我保证，只要简单了解并设置好之后，这能够自动处理很多枯燥的导出工作。

首先你需要把 Aseprite 添加到环境变量里，如果你不清楚这个，可以看看这个教程https://docs.telerik.com/teststudio/features/test-runners/add-path-environment-variables （百度什么的搜一下设置环境变量）。把 `Aseprite.exe` 加入到环境变量里。

现在，保存好 Aseprite 文件，在同一个文件夹打开命令行工具。如果不知道怎么做的话，在 windows 下，Shift + 右键，选择在当前位置打开命令行。

接着是有意思的地方了，用到的命令！直接输入下面这个，把 `myFile` 替换成你的文件名，按回车：

```
Aseprite.exe -b '.\myFile.aseprite' --save-as '{slice}.png'
```

我们分解一下这个的含义：

- `Aseprite.exe` 用来启动 Aseprite
- `-b` 表示我们是在批处理模式。不加这个的话 Aseprite 就打开了，我们不需要。
- `‘.\myFile.aseprite’` 是需要处理的文件名和拓展名。这个是相对于当前路径的。
- `--save-as` 是保存选中文件的命令，它也会根据你给的文件名里带的标签去格式化文件名。
- `'{slice}.png'` 是导出文件名, `{slice}` 是个标签，它表示文件名会用切割的名称并切割出来。

如果想了解更多命令行信息，Aseprite 有个不错的使用教程可以看看：

https://www.aseprite.org/docs/cli/#filename-format

### 接下来

现在你了解到如何正确的保存像素画了！当有不确定的地方时，参考以下几点：

- 永远用整数倍缩放，不用小数，不缩小。
- Aseprite 可以自动保存出图片序列。
- 别用 `jpg` 和 `mp4`，以及其他的有损压缩图像格式。
- 不确定时，就用 `png`，别缩放。

