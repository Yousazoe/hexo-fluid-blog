---
title: Github个人首页美化
abbrlink: d7f21a0b
date: 2021-01-05 23:18:58
tags:
  - Github
categories: Github入门(Introducing Github)
index_img:
banner_img: https://tva1.sinaimg.cn/large/008eGmZEgy1gmf9ktw5flj30rs0bodhc.jpg
comment:
sticky:
---



本文将介绍如何从零开始美化自己的Github主页，让`Github Profile`展示更多有用的信息

<!--more-->

### 美化动机

起因是自己给Typora换了一个类似于hexo-next主题：

![](https://tva1.sinaimg.cn/large/008eGmZEgy1gmeevxbz6mj30w30u0afk.jpg)



然后顺藤摸瓜在Github上找到了原作者，一看主页怎么长得和我差好多......反观自己除了仓库光秃秃的，立判高下。



![](https://tva1.sinaimg.cn/large/008eGmZEgy1gmeeppmsdbj31fh0u0akw.jpg)



Google 一番，原来 GitHub 在上个月就推出了自定义首页这个功能。并且结合 GitHub Action，可以有非常多的玩法，甚至可以显示 Twitter 、微博以及豆瓣的相关动态。

然后本着折腾的精神下载了人家的README研究了一下，也是用markdown写的，只是很有意思的是本着不求甚解的态度，它的代码比我想象中要简单，同时这些也可以用在自己博客的关于页面上（也是markdown），所以决定再折腾一下。



```markdown
<img  align="right" src="https://github-readme-stats.vercel.app/api?username=BillChen2K&show_icons=true&count_private=true&hide_title=true">

### Hi there 👋

- 🗞 Code is poetry.
- 🌱 Currently an undergraduate in ECNU
- 📫 You can find me in my Tg Channel [@Hertz2000](https://t.me/Hertz2000).

#### Coding status last week ⌨️

<!--START_SECTION:waka-->
​```text
C++          11 hrs 27 mins  ████████████░░░░░░░░░░░░░   48.61 % 
C            2 hrs 45 mins   ███░░░░░░░░░░░░░░░░░░░░░░   11.73 % 
CMake        2 hrs 9 mins    ██▒░░░░░░░░░░░░░░░░░░░░░░   09.15 % 
Python       1 hr 53 mins    ██░░░░░░░░░░░░░░░░░░░░░░░   08.00 % 
JavaScript   1 hr 12 mins    █▒░░░░░░░░░░░░░░░░░░░░░░░   05.15 % 
​```
<!--END_SECTION:waka-->


<div>
<a href="https://spotify-now-playing.billchen2k.vercel.app/now-playing?open">
   <img align="right" src="https://spotify-now-playing.billchen2k.vercel.app/now-playing" width="256" height="64" alt="Now Playing">
</a>
</div>

<div>
<p align="right"><code>🎵 Now playing on Spotify</code></p>
</div>

<!--
**BillChen2K/BillChen2K** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
```





### 创建个人主页

新建一个与自己Github用户名相同的仓库，下面的消息提示你这是Github为你预留的特殊仓库，该仓库的README就是我们前面看见的主页的展示。

![](https://tva1.sinaimg.cn/large/008eGmZEgy1gme9mhz5nzj31540i477l.jpg)

> *You found a secret! Yousazoe/Yousazoe is a ✨special ✨ repository that you can use to add a README.md to your GitHub profile. Make sure it’s public and initialize it with a README to get started.*

意思就是同名仓库是一个特殊的仓库，你可以通过添加一个 README.md显示在你的Github个人主页。但必须保证仓库是public的并且有README文件。

### 仓库统计信息

#### GitHub 统计卡片

将这行代码复制到你的 markdown 文件中，就是如此简单！

更改 `?username=` 的值为你的 GitHub 用户名。

```
[![Anurag's github stats](https://github-readme-stats.vercel.app/api?username=anuraghazra)](https://github.com/anuraghazra/github-readme-stats)
```

*注: 等级基于用户的统计信息计算得出，详见 [src/calculateRank.js](https://github.com/anuraghazra/github-readme-stats/blob/master/src/calculateRank.js)*



##### 隐藏指定统计

想要隐藏指定统计信息，你可以调用参数 `?hide=`，其值用 `,` 分隔。

> 选项：`&hide=stars,commits,prs,issues,contribs`

```markdown
![Anurag's github stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&hide=contribs,prs)
```



##### 将私人项目贡献添加到总提交计数中

你可以使用参数 `?count_private=true` 把私人贡献计数添加到总提交计数中。

*注：如果你是自己部署本项目，私人贡献将会默认被计数，如果不是自己部署，你需要分享你的私人贡献计数。*

> 选项: `&count_private=true`

```markdown
![Anurag's github stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&count_private=true)
```



##### 显示图标

如果想要显示图标，你可以调用 `show_icons=true` 参数，像这样：

```markdown
![Anurag's github stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true)
```



#### 主题

你可以通过现有的主题进行卡片个性化，省去[手动自定义](https://github.com/anuraghazra/github-readme-stats/blob/master/docs/readme_cn.md#自定义)的麻烦。

通过调用 `?theme=THEME_NAME` 参数，像这样：

```
![Anurag's github stats](https://github-readme-stats.vercel.app/api?username=anuraghazra&show_icons=true&theme=radical)
```



###### 所有现有主题

dark, radical, merko, gruvbox, tokyonight, onedark, cobalt, synthwave, highcontrast, dracula

[![](https://tva1.sinaimg.cn/large/008eGmZEly1gmhsiudjy1j311o0u0wjd.jpg)](https://camo.githubusercontent.com/8fd2570f103d1aae8a4d8970535274ae19c2ee62587d8868d618be37001263d0/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f616e7572616768617a72612f696d6167652f75706c6f61642f76313539353137343533362f6772732d7468656d65735f6c34796e6a612e706e67)

你可以预览[所有可用主题](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md)或者签出[主题配置文件](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/index.js), 而且如果你喜欢, **你也可以贡献新的主题** :D



#### 自定义

你可以通过使用 URL 参数的方式，为你的 `Stats Card` 或 `Repo Card` 自定义样式。

常用选项：

- `title_color` - 卡片标题颜色 *（十六进制色码）*
- `text_color` - 内容文本颜色 *（十六进制色码）*
- `icon_color` - 图标颜色（如果可用）*（十六进制色码）*
- `bg_color` - 卡片背景颜色 *（十六进制色码）* **或者** 以 *angle,start,end* 的形式渐变
- `hide_border` - 隐藏卡的边框 *(布尔值)*
- `theme` - 主题名称，从[所有可用主题](https://github.com/anuraghazra/github-readme-stats/blob/master/themes/README.md)中选择
- `cache_seconds` - 手动设置缓存头 *（最小值: 1800，最大值: 86400）*
- `locale` - 在卡片中设置语言 *(例如 cn, de, es, 等等)*



##### bg_color 渐变

你可以在 bg_color 选项中提供多个逗号分隔的值来呈现渐变，渐变的格式是 :-

```
&bg_color=DEG,COLOR1,COLOR2,COLOR3...COLOR10
```

> 缓存的注意事项: 如果 fork 数和 star 数 少于 1k , Repo 卡片默认缓存是 4 小时 （14400 秒） ，否则是 2 小时（7200）。另请注意缓存被限制为最短 2 小时，最长 24 小时。



##### 统计卡片专属选项:

- `hide` - 隐藏特定统计信息 *(以逗号分隔)*
- `hide_title` - *(boolean)*
- `hide_rank` - *(boolean)*
- `hide_border` - *(boolean)*
- `show_icons` - *(boolean)*
- `include_all_commits` - 统计总提交次数而不是仅统计今年的提交次数 *(boolean)*
- `count_private` - 统计私人提交 *(boolean)*
- `line_height` - 设置文本之间的行高 *(number)*



###### Repo 卡片专属选项:

- `show_owner` - 显示 Repo 的所有者名字 *(boolean)*



###### 语言卡片专属选项:

- `hide` - 从卡片中隐藏指定语言 *(Comma seperated values)*
- `hide_title` - *(boolean)*
- `hide_border` - *(boolean)*
- `layout` - 在两个可用布局 `default` & `compact` 间切换
- `card_width` - 手动设置卡片的宽度 *(number)*

> ⚠️ **重要:** 如 [Percent Encoding](https://en.wikipedia.org/wiki/Percent-encoding) 所指定，语言名称应使用 uri 转义。 (例: `c++` 应该是 `c%2B%2B`, `jupyter notebook` 应该是 `jupyter%20notebook`, 等.)



#### GitHub 更多置顶

GitHub 更多置顶 允许你在使用 GitHub readme profile 时，在个人资料中置顶多于 6 个 repo 。

是的！你不再受限于置顶最多 6 个存储库了。

##### 使用细则

复制粘贴这段代码到你的 README 文件中，并更改链接。

端点: `api/pin?username=anuraghazra&repo=github-readme-stats`

```markdown
[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=github-readme-stats)](https://github.com/anuraghazra/github-readme-stats)
```



##### Demo

[![](https://camo.githubusercontent.com/4476523bb32839d42dd1fe60b300d310d241551f9e2b353712485d789314d865/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f70696e2f3f757365726e616d653d616e7572616768617a7261267265706f3d6769746875622d726561646d652d7374617473)](https://github.com/anuraghazra/github-readme-stats)

使用 [show_owner](https://github.com/anuraghazra/github-readme-stats/blob/master/docs/readme_cn.md#自定义) 变量将 Repo 所有者的用户名包含在内。

[![](https://camo.githubusercontent.com/f548106f8829ec5c8fc5c377ec45e6744d394dc62f860bacdd69b7c80acaa3cb/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f70696e2f3f757365726e616d653d616e7572616768617a7261267265706f3d6769746875622d726561646d652d73746174732673686f775f6f776e65723d74727565)](https://github.com/anuraghazra/github-readme-stats)



#### 热门语言卡片

热门语言卡片显示了 GitHub 用户常用的编程语言。

*注意：热门语言并不表示我的技能水平或类似的水平，它是用来衡量用户在 github 上拥有最多代码的语言的一项指标，它是 github-readme-stats 的新特性*

##### 使用细则

将此代码复制粘贴到您的 `README.md` 文件中，并修改链接。

端点: `api/top-langs?username=anuraghazra`

```markdown
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra)](https://github.com/anuraghazra/github-readme-stats)
```



##### 隐藏指定语言

可以使用 `?hide=language1,language2` 参数来隐藏指定的语言。

```markdown
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&hide=javascript,html)](https://github.com/anuraghazra/github-readme-stats)
```



##### 紧凑的语言卡片布局

你可以使用 `&layout=compact` 参数来改变卡片的样式。

```markdown
[![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=anuraghazra&layout=compact)](https://github.com/anuraghazra/github-readme-stats)
```



##### Demo

[![](https://camo.githubusercontent.com/fbf4f4aadb79493225ed43d6daca84015eafa94d496ef07bbf723200e12f923c/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d616e7572616768617a7261)](https://github.com/anuraghazra/github-readme-stats)

- 紧凑布局

[![](https://camo.githubusercontent.com/d7490794a2d042e6eb6a434616022fe17f075368c31740e69bf1b3cb0acb273f/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d616e7572616768617a7261266c61796f75743d636f6d70616374)](https://github.com/anuraghazra/github-readme-stats)



##### 全部 Demos

- 默认

[![](https://camo.githubusercontent.com/53b1a4c3005e1be7962d60a214d490221e3c5c976489ba1a13834d017b04d0b1/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616e7572616768617a7261)](https://camo.githubusercontent.com/53b1a4c3005e1be7962d60a214d490221e3c5c976489ba1a13834d017b04d0b1/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616e7572616768617a7261)

- 隐藏指定统计

[![](https://camo.githubusercontent.com/3c542c3badeaed608ea11bf9fd8cf4d2438c067335d634dc25af02e7149eb925/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616e7572616768617a726126686964653d636f6e74726962732c697373756573)](https://camo.githubusercontent.com/3c542c3badeaed608ea11bf9fd8cf4d2438c067335d634dc25af02e7149eb925/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616e7572616768617a726126686964653d636f6e74726962732c697373756573)

- 显示图标

[![](https://camo.githubusercontent.com/f6104e73e4e07ee81c3a9223083d604446183f5c9d08cde7fec91b36f21b0fae/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616e7572616768617a726126686964653d6973737565732673686f775f69636f6e733d74727565)](https://camo.githubusercontent.com/f6104e73e4e07ee81c3a9223083d604446183f5c9d08cde7fec91b36f21b0fae/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616e7572616768617a726126686964653d6973737565732673686f775f69636f6e733d74727565)

- 包含全部提交

[![](https://camo.githubusercontent.com/b9f90b1d6fe362d60baca13304e88cd983f95da54f8cc41396bc4debbe8e4c59/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616e7572616768617a726126696e636c7564655f616c6c5f636f6d6d6974733d74727565)](https://camo.githubusercontent.com/b9f90b1d6fe362d60baca13304e88cd983f95da54f8cc41396bc4debbe8e4c59/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616e7572616768617a726126696e636c7564655f616c6c5f636f6d6d6974733d74727565)

- 主题

从[默认主题](https://github.com/anuraghazra/github-readme-stats/blob/master/docs/readme_cn.md#主题)中进行选择

[![](https://camo.githubusercontent.com/ffcbbe1dfca600112a808bb11b32f113ebd2bf315c976528d92c57cefcfb4262/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616e7572616768617a72612673686f775f69636f6e733d74727565267468656d653d7261646963616c)](https://camo.githubusercontent.com/ffcbbe1dfca600112a808bb11b32f113ebd2bf315c976528d92c57cefcfb4262/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616e7572616768617a72612673686f775f69636f6e733d74727565267468656d653d7261646963616c)

- 渐变

[![](https://camo.githubusercontent.com/3986fdef016105b2217a0fa57b66c566550e5dfdb27e9bd939211823b9f60f11/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616e7572616768617a72612662675f636f6c6f723d33302c6539363434332c393034653935267469746c655f636f6c6f723d66666626746578745f636f6c6f723d666666)](https://camo.githubusercontent.com/3986fdef016105b2217a0fa57b66c566550e5dfdb27e9bd939211823b9f60f11/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d616e7572616768617a72612662675f636f6c6f723d33302c6539363434332c393034653935267469746c655f636f6c6f723d66666626746578745f636f6c6f723d666666)

- 自定义统计卡片

[![](https://camo.githubusercontent.com/e7c29a95a1a41235de85523c5bce85eff442b9eaeb1e126eefd41ddb5a0a3785/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f3f757365726e616d653d616e7572616768617a72612673686f775f69636f6e733d74727565267469746c655f636f6c6f723d6666662669636f6e5f636f6c6f723d37396666393726746578745f636f6c6f723d3966396639662662675f636f6c6f723d313531353135)](https://camo.githubusercontent.com/e7c29a95a1a41235de85523c5bce85eff442b9eaeb1e126eefd41ddb5a0a3785/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f3f757365726e616d653d616e7572616768617a72612673686f775f69636f6e733d74727565267469746c655f636f6c6f723d6666662669636f6e5f636f6c6f723d37396666393726746578745f636f6c6f723d3966396639662662675f636f6c6f723d313531353135)

- 自定义 repo 卡片

[![](https://camo.githubusercontent.com/aaa45ae6d7257960322d83e8c00adf6c94c7ba92a2743feedf6c89e22b7abfda/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f70696e3f757365726e616d653d616e7572616768617a7261267265706f3d6769746875622d726561646d652d7374617473267469746c655f636f6c6f723d6666662669636f6e5f636f6c6f723d66396639663926746578745f636f6c6f723d3966396639662662675f636f6c6f723d313531353135)](https://camo.githubusercontent.com/aaa45ae6d7257960322d83e8c00adf6c94c7ba92a2743feedf6c89e22b7abfda/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f70696e3f757365726e616d653d616e7572616768617a7261267265706f3d6769746875622d726561646d652d7374617473267469746c655f636f6c6f723d6666662669636f6e5f636f6c6f723d66396639663926746578745f636f6c6f723d3966396639662662675f636f6c6f723d313531353135)

- 热门语言

[![](https://camo.githubusercontent.com/fbf4f4aadb79493225ed43d6daca84015eafa94d496ef07bbf723200e12f923c/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d616e7572616768617a7261)](https://github.com/anuraghazra/github-readme-stats)



##### 快速提示 (对齐 Repo 卡片)

你通常无法将图片靠边显示。为此，您可以使用以下方法：

```html
<a href="https://github.com/anuraghazra/github-readme-stats">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=github-readme-stats" />
</a>
<a href="https://github.com/anuraghazra/convoychat">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=anuraghazra&repo=convoychat" />
</a>
```



### 统计代码时长

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmibz5cvu6j311y0go0uo.jpg)



 这个功能非常有趣，这里我们要利用WakaTime对事情的统计功能，并绑定到Github来实现展示。官网：[WakaTime](https://wakatime.com/)

下面详细讲一下如何部署到Github：

1. 登录WakaTime官网，注册 一个WakaTime 账号

   这里可以直接绑定Github账号登陆，非常的方便



2. 在自己常用的 IDE 上下载 WakaTime 插件，配置上自己的 API Key

   当注册好账号后，你会得到属于自己专属的API Key。然后在需要监控工作的IDE里安装WakaTime的插件，并配上自己的Key。官方上有非常详细的配置步骤

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmicknuaqhj31180h6ta2.jpg)



到此为止，其实本地的开发环境就已经被WakaTime所监控啦，数据会被传输到WakaTime然后在dashboard中展示。

除Clion外，WakaTime还支持很多其他的开发环境，如下：

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmiclt40r9j317j0u01ar.jpg)



3. 将自己的 API Key 存到自己 Github 仓库的 secrets中

   从项目里点击`Setting -> Secrets -> New secret` 创建一个。其中name需要填写`WAKATIME_API_KEY`，value就把WakaTime官网生成的API Key粘贴进去就行。

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmic6t6izdj32100s0439.jpg)







4. 配置 GitHub 仓库的 Actions

   我们还需要在项目里配置Actions。点击 `Actions -> New workflow`

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmicoqbv1kj326m0qate8.jpg)

把默认的内容全部删除，把下面的内容粘贴上：

```yml
name: Waka Readme
 
on:
  push:
    branches:
      - master
  workflow_dispatch:
  schedule:
    # Runs at 12am UTC
    - cron: '0 0 * * *'
 
jobs:
  update-readme:
    name: Update this repo's README 
    runs-on: ubuntu-latest
    steps:
      - uses: Yourname/waka-readme@master
        with:
          WAKATIME_API_KEY: ${{ secrets.WAKATIME_API_KEY }}
```

这里需要改的是`uses`中的地方换成你自己的名字。

**注意：这里需要一个waka-readme的项目，请将https://github.com/athul/waka-readme中的项目fork到自己仓库里就行**



5. 点击 Waka Readme ，再点击run

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmicqq1u29j32340r6jx3.jpg)

 当你看到正常跑起来之后，就离胜利不远啦！



6. 在README文件中添加以下这段文字：

```html
  <!--START_SECTION:waka-->
  <!--END_SECTION:waka-->
```

添加修改后，再次提交commit。然后，返回到主页，会看到以下这样，说明WakaTime其实已经关联上你的Github啦！需要等待一段时间（一天），就会同步到Github啦！







### 拿来主义

以下是我的配置；

```markdown
### Hi there 👋


<img src="https://raw.githubusercontent.com/sagar-viradiya/sagar-viradiya/master/resources/banner.png" alt="Hello world">
<p align="center"> 
  Visitor count<br/>
  <img src="https://profile-counter.glitch.me/youszoe/count.svg" />
</p>

<br/>


- 🍻  Study at Beijing Normal University Zhuhai, _Computer Science_
- ⚡  C / C++ / C#
- ✍️  Blogger
- ♟  Chess / Chess960 


#### Coding status last week ⌨️

<!--START_SECTION:waka-->
​```text
C++        1 hr 48 mins    ██████████░░░░░░░░░░░░░░░   39.98 % 
Markdown   1 hr 21 mins    ███████▒░░░░░░░░░░░░░░░░░   29.93 % 
YAML       42 mins         ████░░░░░░░░░░░░░░░░░░░░░   15.81 % 
C          10 mins         █░░░░░░░░░░░░░░░░░░░░░░░░   03.90 % 
Other      9 mins          █░░░░░░░░░░░░░░░░░░░░░░░░   03.66 % 
​```
<!--END_SECTION:waka-->

<br/>
<center><img src="http://ghchart.rshah.org/409ba5/yousazoe" alt="" /></center>


<h6>* These nice badges are generated by <a href="https://shields.io/">Shields.io</a> and <a href="https://github.com/spencerwooo/Substats">Substats</a>.</h6>

```



除了代码统计其余换成自己的名称均可直接拿去使用。





### 参考

+ [Github个人首页美化指北](https://zhuanlan.zhihu.com/p/265462490)
+ [2020年，一招教你打造个性化的Github主页！](https://blog.csdn.net/zwluoyuxi/article/details/107600491)
+ [GitHub 自定义首页，结合 GitHub Action 更香](https://zhuanlan.zhihu.com/p/180550738)
+ [为你的GitHub个人资料构建出色的自述文件](https://zhuanlan.zhihu.com/p/248746206)
+ [Github-Weekly-WakaTime](https://zhuanlan.zhihu.com/p/141051031)
+ [给自己弄一个酷酷的Github主页吧](https://blog.csdn.net/sinat_23133783/article/details/107643656)

