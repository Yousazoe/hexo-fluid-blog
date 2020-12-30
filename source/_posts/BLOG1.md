---
title: Hexo-Fluid写作指南
tags:
  - Hexo
  - Fluid
  - Blog
categories: 
- [博客搭建(Blog Building)]
- [写作技巧(Write Skill),Markdown]
index_img: 
banner_img: https://tva1.sinaimg.cn/large/0081Kckwgy1glcvi78izlj313g0joabt.jpg
comment:
sticky:
abbrlink: f0a0db79
date: 2020-12-03 19:51:34
---







记录Hexo-Fluid主题的写作技巧。

<!--more-->





### MarkDown

#### 文章在首页的封面图

对于单篇文章，在文章开头 [Front-matter (opens new window)](https://hexo.io/zh-cn/docs/front-matter)中配置 `index_img` 属性。

```yaml
---
title: 文章标题
tags: [Hexo, Fluid]
index_img: /img/example.jpg
date: 2019-10-10 10:00:00
---
以下是文章内容
```

和 Banner 配置相同，`/img/example.jpg` 对应的是存放在 `/source/img/example.jpg` 目录下的图片（目录也可自定义，但必须在 source 目录下）。

也可以使用外链 Url 的绝对路径。

如果想统一给文章设置一个默认图片（文章不设置 `index_img` 则默认使用这张图片），可在**主题配置**中设置：

```yaml
post:
  default_index_img: /img/example.jpg
```

当 `default_index_img` 和 `index_img` 都为空时，该文章在首页将不显示图片。

#### 文章页顶部大图

默认显示**主题配置**中的 `post.banner_img`，如需要设置单个文章的 Banner，在 [Front-matter (opens new window)](https://hexo.io/zh-cn/docs/front-matter)中指定 `banner_img` 属性。

本地图片存放位置同上。

```yaml
---
title: 文章标题
tags: [Hexo, Fluid]
index_img: /img/example.jpg
banner_img: /img/post_banner.jpg
date: 2019-10-10 10:00:00
---
以下是文章内容
```

#### 文章内容图片

本地图片存放位置同上。

```markdown
![](/img/example.jpg)
```

#### 日期/字数/阅读时长/阅读数

显示在文章页大标题下的文章信息，除了作者和阅读次数，其他功能都是默认开启的。

```yaml
post:
  meta:
    author:  # 作者，优先根据 front-matter 里 author 字段，其次是 hexo 配置中 author 值
      enable: false
    date:  # 文章日期，优先根据 front-matter 里 date 字段，其次是 md 文件日期
      enable: true
      format: "dddd, MMMM Do YYYY, h:mm a"  # 格式参照 ISO-8601 日期格式化
    wordcount:  # 字数统计
      enable: true
      format: "{} 字"  # 显示的文本，{}是数字的占位符（必须包含)，下同
    min2read:  # 阅读时间
      enable: true
      format: "{} 分钟"
    views:  # 阅读次数
      enable: false
      source: "leancloud"  # 统计数据来源，可选：leancloud | busuanzi   注意不蒜子会间歇抽风
      format: "{} 次"
```

TIP

日期格式必须遵循 ISO-8601 规范，否则无法正常显示；

其他格式必须包括 `{}` 符号代替数字，文字可自由设置。

#### 代码块

```yaml
code:
  copy_btn: true
  highlight:
    enable: true
    lib: "highlightjs"
    highlightjs:
      style: 'Github Gist'
      bg_color: false
    prismjs:
      style: "default"
      preprocess: true
```

`copy_btn`: 是否开启复制代码的按钮

`highlight`: 是否开启代码高亮

`lib`: 选择生成高亮的库，可选项: highlightjs、prismjs，对应下面两组配置，高亮的配置说明具体见**主题配置**中的注释

WARNING

高亮暂不支持行号

#### 评论

开启评论需要在**主题配置**中开启并指定评论模块：

```yaml
post:
  comments:
    enable: true
    type: disqus
```

然后在下方还要设置对应评论模块的参数，比如 disqus 对应设置：

```yaml
disqus:
  shortname: fluid
```

当前支持 Valine、Disqus、Gitalk、Utterances、畅言、来必力(livere)、Remark42、twikoo，使用和参数设置需要自行查询各自的文档（文档地址在配置注释里）。

若需要自定义添加其他评论系统，请自行在 `fluid/layout/_partial/comments/` 目录内创建 ejs 文件，参照自带的 ejs 填入评论服务商提供的代码，再修改 `post.comments.type` 为对应文件名。

TIP

国内用户推荐使用 Valine 或者 Utterances

如果设置后评论模块没有显示，说明配置没有完成，或者配置有误出现报错（请在浏览器控制台查看具体报错）

如果想在某个文章页关闭评论，或者想在某个自定义页面开启评论，可以通过在 [Front-matter (opens new window)](https://hexo.io/zh-cn/docs/front-matter)设置 `comment: bool` 来控制，例如在关于页开启评论：

```yaml
---
title: 关于页
layout: about
index_img: /img/example.jpg
date: 2019-10-10 10:00:00
comment: true
---
以下是正文内容
```

#### 脚注

主题内置了脚注语法支持，可以在文章末尾自动生成带有锚点的脚注，该功能在**主题配置**中默认开启：

```yaml
post:
  footnote:
    enable: true
    header: ''
```

脚注语法如下：

```markdown
这是一句话[^1]
[^1]: 这是对应的脚注
```

更优雅的使用方式，是将脚注写在文末，比如：

```markdown
正文

## 参考
[^1]: 参考资料1
[^2]: 参考资料2
```

当然你也可以通过修改上方配置项 `header` 来自动加入节标题，如下所示：

```yaml
post:
  footnote:
    enable: true
    header: '<h2>参考</h2>'  # 等同于手动写 `## 参考`
```

#### Tag 插件

WARNING

所有 Tag 仍在测试中，后续版本可能会修改

#### 便签

在 markdown 中加入如下的代码来使用便签：

```markdown
{% note success %}
文字 或者 `markdown` 均可
{% endnote %}
```

或者使用 HTML 形式：

```html
<p class="note note-primary">标签</p>
```

可选便签：

primary

secondary

success

danger

warning

info

light

WARNING

使用时 `{% note primary %}` 和 `{% endnote %}` 需单独一行，否则会出现问题

##### 行内标签

在 markdown 中加入如下的代码来使用 Label：

```markdown
{% label primary @text %}
```

或者使用 HTML 形式：

```html
<span class="label label-primary">Label</span>
```

可选 Label：

primary default info success warning danger

WARNING

若使用 `{% label primary @text %}`，text 不能以 @ 开头

##### 勾选框

在 markdown 中加入如下的代码来使用 Checkbox：

```markdown
{% cb text, checked?, incline? %}
```

text：显示的文字
checked：默认是否已勾选，默认 false
incline: 是否内联（可以理解为后面的文字是否换行），默认 false

示例：

{% cb 普通示例 %}

{% cb 默认选中, true %}

{% cb 内联示例, false, true %} 后面文字不换行

{% cb false %} 也可以只传入一个参数，文字写在后边（这样不支持外联）



##### 按钮

你可以在 markdown 中加入如下的代码来使用 Button：

```markdown
{% btn url, text, title %}
```

或者使用 HTML 形式：

```html
<a class="btn" href="url" title="title">text</a>
```

url：跳转链接
text：显示的文字
title：鼠标悬停时显示的文字（可选）

[text](javascript:;)

##### 组图

如果想把多张图片按一定布局组合显示，你可以在 markdown 中按如下格式：

```markdown
{% gi total n1-n2-... %}
  ![](url)
  ![](url)
  ![](url)
  ![](url)
  ![](url)
{% endgi %}
```

total：图片总数量，对应中间包含的图片 url 数量
n1-n2-...：每行的图片数量，可以省略，默认单行最多 3 张图，求和必须相等于 total，否则按默认样式

如下图为 `{% gi 5 3-2 %}` 示例，代表共 5 张图，第一行 3 张图，第二行 2 张图。

![Group Images](https://tva1.sinaimg.cn/large/0081Kckwgy1glawxszspnj31d40t8txa.jpg)



#### LaTeX 数学公式

```text
Hexo 5.0 以上，可尝试 Hexo 官方的 [hexo-math](https://github.com/hexojs/hexo-math) 插件，支持更多定制化参数，使用方式参照仓库内的文档，以下介绍的是主题内置的 LaTeX 功能。
```

当需要使用 [LaTeX (opens new window)](https://www.latex-project.org/help/documentation/)语法的数学公式时，可手动开启本功能，需要完成三步操作：

**1. 设置主题配置**

```yaml
post:
  math:
    enable: true
    specific: false
    engine: mathjax
```

`specific`: 建议开启。当为 true 时，只有在文章 [Front-matter (opens new window)](https://hexo.io/zh-cn/docs/front-matter)里指定 `math: true` 才会在文章页启动公式转换，以便在页面不包含公式时提高加载速度。

`engine`: 公式渲染引擎，目前支持 `mathjax` 或 `katex`。

**2. 更换 Markdown 渲染器**

由于 Hexo 默认的 Markdown 渲染器不支持复杂公式，所以必须更换渲染器。

先卸载原有渲染器：

```shell
npm uninstall hexo-renderer-marked --save
```

然后根据上方配置不同的 `engine`，推荐更换如下渲染器：

mathjax: `npm install hexo-renderer-kramed --save`

katex: `npm install @upupming/hexo-renderer-markdown-it-plus --save`

**3. 安装完成后执行 `hexo clean`**

WARNING

不可同时安装多个渲染器，如果更换公式引擎，对应渲染器也要一并更换。

如果公式没有被正确渲染，请仔细检查是否符合上面三步操作。

另外不同的渲染器，可能会导致一些 Markdown 语法不支持。

自定义页面默认不加载渲染，如需使用，需在 Front-matter 中指定 `math: true`

TIP

不同的公式引擎有不同的优缺点。

**MathJax**

优点

- 对 LaTeX 语法支持全面
- 右键点击公式有扩展功能

缺点

- 需要加载 JS，页面加载会比较慢，并且有渲染变化
- kramed 渲染器对内联公式的转义字符 `\` 支持不足

**KaTeX**

优点

- 没有 JS 不会影响页面加载
- 渲染器效果好 (相对 kramed 对 MathJax 的内联公式)

缺点

- 小部分 LaTeX 不支持



#### Mermaid 流程图

当需要使用 [Mermaid (opens new window)](http://mermaid-js.github.io/mermaid/#/)渲染流程图时，可手动开启本功能：

```yaml
post:
  mermaid:
    enable: true
    specific: false
    options:
```

`specific`: 建议开启。当为 true 时，只有在文章 [Front-matter (opens new window)](https://hexo.io/zh-cn/docs/front-matter)里指定 `mermaid: true` 才会在文章页启动流程图渲染，以便在页面不包含流程图时提高加载速度。

`options`: 官方 API 的配置项，具体可见 [mermaidAPI.js(opens new window)](http://mermaid-js.github.io/mermaid/#/mermaidAPI)

TIP

自定义页面默认不加载，如需使用，需在 Front-matter 中指定 `mermaid: true`

使用 Mermaid 可以通过内置的 Tag 书写：

```
{% mermaid %}
gantt
dateFormat  YYYY-MM-DD
title Adding GANTT diagram to mermaid

section A section
Completed task            :done,    des1, 2014-01-06,2014-01-08
Active task               :active,  des2, 2014-01-09, 3d
Future task               :         des3, after des2, 5d
Future task2               :         des4, after des3, 5d
{% endmermaid %}
```

也可以通过代码块书写：

~~~
```mermaid
classDiagram
Class01 <|-- AveryLongClass : Cool
Class03 *-- Class04
Class05 o-- Class06
Class07 .. Class08
Class09 --> C2 : Where am i?
Class09 --* C3
Class09 --|> Class07
Class07 : equals()
Class07 : Object[] elementData
Class01 : size()
Class01 : int chimp
Class01 : int gorilla
Class08 <--> C2: Cool label
~~~



### HTML

我们可以在 Markdown 中插入一些简单的 HTML 代码或 CSS 片段来获得更多扩展，使得文章内容更具有多样性。以下演示几个简单功能。

跳转位置演示（跳转位置设置点）

#### 文字颜色

<span  style="color: #519D9E; ">#519D9E颜色演示</span>

```html
<span  style="color: #519D9E; ">#519D9E颜色演示</span>
```



#### 文字大小

<span  style="font-size:0.7em;">0.7em 文字大小演示</span>

```html
<span  style="font-size:0.7em;">0.7em 文字大小演示</span>
```



#### 文字位置

<p style="text-align:center">内容居中演示</p>

```html
<p style="text-align:center">内容居中演示</p> # 可以修改 text-align 参数来设置文字位置。
```



#### 页内跳转

<a href="#demo">点击到达跳转位置演示</a> 
<a id="demo">跳转位置演示（跳转位置设置点）</a> 

```html
<a href="#demo">点击到达跳转位置演示</a> # 在需要跳转的地方添加此代码。
<a id="demo">跳转位置演示（跳转位置设置点）</a> # 在跳转位置添加次代码。
```



#### 综合演示

<p style="text-align:center;color:#8EC0E4;font-size:1.5em;font-weight: bold;">
综合演示
<br>
优雅使用 Fluid 写文章
</p>

```html
<p style="text-align:center;color:#8EC0E4;font-size:1.5em;font-weight: bold;">
综合演示
<br>
优雅使用 Fluid 写文章
</p>
```

#### iframe 页面镶套

iframe 页面镶套可以帮助我们更好的展示一个页面。比如以下演示页面。

<iframe src="https://hexo.fluid-dev.com/" width="100%" height="650" name="topFrame" scrolling="yes" noresize="noresize" frameborder="0" id="topFrame" style="box-sizing: border-box; color: rgb(44, 62, 80); font-family: -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"></iframe>



```html
<iframe src="https://hexo.fluid-dev.com/" width="100%" height="500" name="topFrame" scrolling="yes"  noresize="noresize" frameborder="0" id="topFrame"></iframe>
```

一些参数说明，`width="100%"` 为宽度自适应，高度请根据实际需求跳转，**注意移动端页面是否匹配。** `scrolling` 为滚动条参数。`frameborder` 为边框参数。`noresize` 属性规定用户无法调整框架的大小。

#### details 标签

用于展示代码较多需要折叠或折叠相关内容，以下为演示。`summary` 填写显示名称。

<details style="box-sizing: border-box; display: block; margin-top: 0px; margin-bottom: 16px; cursor: pointer; color: rgb(44, 62, 80); font-family: -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; background-color: rgb(255, 255, 255); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="box-sizing: border-box; display: list-item; cursor: pointer; outline: none;">Demo</summary></details>

```html
<details>
<summary>Demo</summary>
<p><b>好友申请备注：fluid</b></p>
<p><b>提问之前请先仔细查阅用户文档</b></p>
<img width="200" src="https://cdn.jsdelivr.net/gh/fluid-dev/static@master/hexo-theme-fluid/wechat.png" alt="wechat">
</details>
```

#### 善用 Tag 组件

Fluid 内置了许多 Tag 组件，包含便签、行内标签（已知不会出现间隔，谨慎使用）、勾选框、按钮和组图，可以使用这些组件来丰富文章内容，具体点击查看官方文档查看，**[点击跳转到 Fluid Doc](https://hexo.fluid-dev.com/docs/guide/#tag-插件)**。





### IMG

众所周知，**博客好不好看，配图占一半**。这里给大家推荐几个我常用找配图的地方。**另外，请遵循相关网站的版权协议。**

#### Wallpaper Hub

[![Wallpaper Hub](https://tva1.sinaimg.cn/large/0081Kckwgy1glj5j8dw79j317c0rf7wh.jpg)](https://cdn.vince.pub/blog-file/photo/2020-04-17_175244.png)



**[点击跳转到 Wallpaper Hub](https://wallpaperhub.app/)**



#### Wallhaven

[![Wallhaven](https://tva1.sinaimg.cn/large/0081Kckwgy1glj5j97imbj317c0rfb29.jpg)](https://cdn.vince.pub/blog-file/photo/2020-04-17_174841.png)



**[点击跳转到 Wallhaven](https://wallhaven.cc/)**



#### Unsplash

[![Unsplash](https://tva1.sinaimg.cn/large/0081Kckwgy1glj5ja00g5j317c0rf7wh.jpg)](https://cdn.vince.pub/blog-file/photo/2020-05-14_000557.png)

**[点击跳转到 Unsplash](https://unsplash.com/)**

