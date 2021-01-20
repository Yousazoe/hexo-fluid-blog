---
title: GoogleDinosaur--Unity2D游戏开发
banner_img: 'https://tva1.sinaimg.cn/large/008eGmZEly1gmidafmpnfj31400u0wmh.jpg'
abbrlink: 87cbf473
date: 2021-01-10 09:51:25
tags:
  - Unity
  - 2D Game
  - Game Develop
categories: [游戏引擎(Game Engine),Unity]
index_img:
comment:
sticky:
---



本文将使用Unity2D复刻谷歌小恐龙游戏。

<!--more-->



### 素材切片与场景搭建





![](https://tva1.sinaimg.cn/large/008eGmZEly1gmidiukv4wj30aj0b0q49.jpg)





![](https://tva1.sinaimg.cn/large/008eGmZEly1gmidp5p593j308n0cwq3q.jpg)





### 背景制作

复制一个与之相同的地板，两者首尾相连。





```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ScrollingBackground : MonoBehaviour
{
    public float moveSpeed = 10;
    
    
    void Update()
    {
        transform.position += Vector3.left * moveSpeed * Time.deltaTime;

        if (transform.position.x < -99.02f)
        {
            transform.position = new Vector3(99.02f,-2.9f,0);
        }
    }
}
```





