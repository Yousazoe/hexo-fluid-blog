---
title: Pico-8 精彩代码--触手效果解析
tags:
  - Lua
  - Pico-8
  - Reprint
  - Game Engine
categories: [游戏引擎(Game Engine),Pico-8]
banner_img: 'https://tva1.sinaimg.cn/large/0081Kckwgy1gln5j73i34j30m80ciaav.jpg'
abbrlink: 6b115460
date: 2020-12-14 09:56:28
index_img:
comment:
sticky:
---



pico-8 的社区是一个满是热情与分享精神的社区，无数玩家与开发者贡献着代码。本系列日志将选取其中比较精彩的代码片段进行解析，学习其中的算法思路。本文将讲解如何实现触手的效果。

<!--more-->

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gln5jaei1kg30bp0bx7u5.gif)



### 代码分析

**作者：**Luca@lucatron_
**来源：**twitter



整理过后 14 行代码：

```lua
c={10,9,8,2,1,0}
fillp(0xa5a5)function _draw() for i=24576,32767 do
  poke(i,peek(i)/2)
 end
 for z=6,1,-.1 do
  for b=0,7 do
   b=b/8+sin(z/8+t()/4)/30
   k=19-sin((6-z)/20)*40*(.5+sin(t()/2+z/9+b*2)/2)
   circfill(64+cos(b)*k,64+sin(b)*k,z*2.3,c[flr(z)]+c[flr(z+.5)]*16)
  end
 endend
```

1-2 行，`c` 是触手的颜色，顶部到底部由明止暗。`fillp` 是填充样式，点阵图样填充，有种渐变的效果（在最后详细解释）。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gln5jcniwqj30lk0bjdgm.jpg)



4-6 行，是残影效果，这里没有用 `cls` 清空画布，直接将屏幕内存中的数值每帧减半，最终降为 `0` 透明，来实现透明效果

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gln5jbizg1j30kr0b3ab1.jpg)



10-11 行，两个嵌套循环，外层的 `z` 表示，每个触手的层数，内层 `b` 表示触手的数量（`8` 个）。单个触手是由从下至上，大小递减，颜色逐渐变亮的圆组成，`z` 表示圆的位置，相当于 `z` 轴的坐标，从 `6-1` 共有 `60` 层。

9 行，`b/8` 将八只触手映射到 `0-1`，pico8 中三角函数的参数取值 `0-1` 代表着 `0-360°`。在第 11 行的 `circlefill` 圆的绘制函数中，圆 B 的位置 `x,y =  64+cos(b)*k,64+sin(b)*k`。其中原点是屏幕的中心点 `64, 64`；角度 `b` 为每个触手映射的角度，`k` 为圆至屏幕中心的距离。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gln5jc5e08j30eg0e9aam.jpg)



10 行 计算每个圆至屏幕中心的距离 `k`，我们先把圆的角度 `b` 从中去掉看下结果。`k=19-sin((6-z)/20)*40*(.5+sin(t()/2+z/9)/2)`

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gln5je8onsg30bp0bx7u5.gif)



将圆的 `z` 轴坐标 `z` 映射到至中心的距离 `k`，通过 `sin` 的映射使得，距离 `k` 根据 `z` 呈现正弦波的形状。

最后把角度 `b` 加回去，`k=19-sin((6-z)/20)*40*(.5+sin(t()/2+z/9+b*2)/2)` 使得不同的触手在波形上拥有不同的位置。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gln5jgb5g0g30bp0bwtmr.gif)



第 11 行 `circlefill` 画圆，其中圆的半径 根据 `z` 轴距离变化，`z*2.3`。圆的颜色 `c[flr(z)]+c[flr(z+.5)]*16` 是两个颜色相加，利用高低位的不同颜色，再配合第 2 行的 `fillp` 实现两种颜色的填充图样。

最后补充下 `fillp` 的用法。pico8 中用一个 `4*4` 的图来填充 `circ()` `circfill()` `rect()` `rectfill()` `pset()` `line()` 等函数画的图形。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gln5jhrsjfj30l0060dg1.jpg)



16 个像素点用上图表格里的数字代表，如果想让某个点不着色就将点对应的数值累加，将最终得到的值传给 `fillp`，比如只让对角线 `32768,1024,32,1` 没有颜色，`fillp(32768+1024+32+1)`

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gln5jha90zj30jb0a775a.jpg)



也可以 `7+8*16` 指定第二个颜色

