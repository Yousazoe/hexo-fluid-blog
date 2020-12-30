---
title: Pico-8 精彩代码--漩涡效果解析
tags:
  - Lua
  - Pico-8
  - Reprint
  - Game Engine
categories: [游戏引擎(Game Engine),Pico-8]
banner_img: 'https://tva1.sinaimg.cn/large/0081Kckwgy1gljxgzq715j30m80ciaat.jpg'
abbrlink: 2a6e7125
date: 2020-12-11 15:02:56
index_img:
comment:
sticky:
---



pico-8 的社区是一个满是热情与分享精神的社区，无数玩家与开发者贡献着代码。本系列日志将选取其中比较精彩的代码片段进行解析，学习其中的算法思路。本文将讲解如何实现漩涡的效果。

<!--more-->

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gljxi27lo3g30ar0arx6q.gif)

### 代码分析



**作者：**2DArray
**来源：**twiiter



神奇的漩涡效果，代码发布在作者的 twitter 上，整理下只有 11 行：

```lua
p={130,141,2,136,8,137,142,9}for i=1,8 do
pal(i-1,p[i],1)end::_::
x=rnd(128)
y=rnd(128)
d=sqrt((x-64)^2+(y-64)^2)-t()*4
a=atan2(y-64,x-64)*16
pset(x,y,(a+d/4)%8)goto _
```

1-4 行代码是调色板映射代码，用来实现渐变的颜色。我们知道 pico8 只有 16 种颜色，16 种颜色很难配合出渐变的过渡效果。这里作者用到 pico8 隐藏的调色板，变量 `p` 中的 `130, 141, 136, 137, 142` 都是隐藏调色板的色号。这个隐藏的调色板在官方文档里也没有介绍，在论坛翻了了好久才找到，新旧两个调色板的对比，我做了个对比图：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gljxixth3gj307d03ldfl.jpg)

6-9 行定义了 4 个参数：

- `x, y` 在屏幕范围内随机取值
- `d` 是取的点 `(x, y)` 相对于 `(64, 64)` 即中心点的距离，后面的 `t()*4` 是为了使距离根据运行时间改变
- `a` 是点 `(x, y)` 相对于中心点的角度，pico8 中 `atan2` 的返回值是 `0-1`，对应着 `0°-360°`。后面的 `*16` 将 `a` 的取值变成了 `0-16`


第 10 行 根据 `d` 和 `a` 的值将对应颜色填充到 `x, y`。我们可以分开来看下

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gljxktdho3j30ej0eit8h.jpg)



```lua
pset(x,y,a%8)
```

如果只用 `a` 来计算，会将屏幕按照点的到中间点的角度分割成 `16` 份，这个比较好理解，因为 `a` 的取值是 `0-16`，相当于把屏幕中的点映射到 `16` 个区域。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gljxkq5wmrj30ec0ec742.jpg)



```lua
pset(x,y,(d/4)%8)
```

`d` 是点到中心的距离，相同距离的圆形区域被填充同一个颜色。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gljxl650bjj30ek0eign1.jpg)



```lua
pset(x,y,(a+d/4)%8)
```

当把角度和距离加起来的时候神奇的图像就出现了，而且角度 `a` 必须于 `8` 的倍数相乘才可以对齐，不知道原理是什么，真的很神奇。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gljxi3fnaxj30dq05ogli.jpg)