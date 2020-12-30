---
title: Markdown入门指南
abbrlink: dbc11c00
date: 2020-11-26 19:54:43
tags:
  - Markdown
  - Write
categories: 
  - 写作技巧(Write Skill)
  - Markdown
index_img: 
banner_img: https://tva1.sinaimg.cn/large/0081Kckwgy1gl2tm1nc2nj31360go78r.jpg
comment: false
sticky:
---



有关 Markdown 的概述、工作原理、用途以及语法快速参考手册 / 速查表。

<!--more-->



### 入门指南

#### Markdown 是什么？

Markdown 是一种轻量级的标记语言，可用于在纯文本文档中添加格式化元素。Markdown 由 [John Gruber](https://daringfireball.net/projects/markdown/) 于 2004 年创建，如今已成为世界上最受欢迎的标记语言之一。

使用 Markdown 与使用 [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG) 编辑器不同。在 Microsoft Word 之类的应用程序中，单击按钮以设置单词和短语的格式，并且，更改立即可见。而 Markdown 与此不同，当你创建 Markdown 格式的文件时，可以在文本中添加 Markdown 语法，以指示哪些单词和短语看起来应该有所不同。

例如，要表示标题，只须在短语前面添加一个井号即可（例如， `# Heading One`）。或者要加粗一个短语，只须在短语前后各加两个星号即可（例如，`**this text is bold**`）。可能需要一段时间才能习惯在文本中看到 Markdown 语法，尤其是如果你已习惯了所见即所得的应用程序。以下屏幕截展示了 Markdown 文件在 [Atom 文本编辑器](https://atom.io/) 中显示的效果。

![Markdown file in the Atom text editor](https://tva1.sinaimg.cn/large/0081Kckwgy1glbqcquj2lj31360go41p.jpg)

你可以使用文本编辑器为纯文本文件添加 Markdown 格式的元素。或者，你也可以安装针对 macOS、Windows、Linux、iOS 和 Android 操作系统的 Markdown 应用程序。或者还可以使用一些基于 Web 的应用程序用于 Markdown 编写。

依赖于你所使用的应用程序，你可能无法实时预览格式化的文档。但是没关系。[根据 Gruber 的说法](https://daringfireball.net/projects/markdown/)，Markdown 的语法被设计为可读性强且不显眼，因此即使 Markdown 文件中的文本未经过渲染也易于阅读。

> Markdown 语法的首要设计目标是尽可能易读。基于这个目标，Markdown 格式的文档能够以纯文本形式原样发布，而不会看起来像被填满了标签或格式化指令。

#### 为什么要使用 Markdown？

你可能想知道为什么人们使用 Markdown 而不是所用即所得（WYSIWYG）编辑器。当你可以通过按下界面中的按钮来设置文本格式时，为什么还要使用 Markdown 来书写呢？事实证明，人们使用 Markdown 而不是 WYSIWYG 编辑器的原因有两个：

- Markdown 处处可用。人们使用它来创建 [网站](https://www.markdown.xyz/getting-started/#websites)、[文档](https://www.markdown.xyz/getting-started/#documents)、[便签](https://www.markdown.xyz/getting-started/#notes)、[书籍](https://www.markdown.xyz/getting-started/#books)、[演示文稿](https://www.markdown.xyz/getting-started/#presentations)、[邮件](https://www.markdown.xyz/getting-started/#email) 和 [技术文档](https://www.markdown.xyz/getting-started/#documentation)。
- Markdown 是可移植的。几乎可以使用任何应用程序打开包含 Markdown 格式的文本文件。如果你不喜欢当前使用的 Markdown 应用程序了，则可以将 Markdown 文件导入另一个 Markdown 应用程序中。这与 Microsoft Word 等文字处理应用程序形成了鲜明的对比，Microsoft Word 将你的内容锁定在专有文件格式中。
- Markdown 是独立于平台的。你可以在运行任何操作系统的任何设备上创建 Markdown 格式的文本。
- Markdown 能适应未来的变化。即使你正在使用的应用程序将来会在某个时候不能使用了，你仍然可以使用文本编辑器读取 Markdown 格式的文本。当涉及需要无限期保存的书籍、大学论文和其他里程碑式的文件时，这是一个重要的考虑因素。
- Markdown 无处不在。例如 Reddit 和 GitHub 等网站都支持 Markdown，许多桌面和基于 Web 的应用程序也都支持 Markdown。

#### 工欲善其事，必先利其器

Markdown 入门的最佳方式就是多使用它。由于有大量免费工具的存在，这比以前任何时候都更容易开始上手了。

你甚至都不需要下载任何程序，就可以使用几种在线的 Markdown 编辑器来编写 Markdown。[Dillinger](https://dillinger.io/) 是最好的在线 Markdown 编辑器之一。进入其站点就可以开始在左侧窗格中书写了。渲染后的文档在右侧窗格预览。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glbqcrss2lj30s90mun01.jpg)

阅读本指南时，你可以打开 Dillinger 网站。这样，你就可以一边学习 Markdown 语法一边练习了。熟悉 Markdown 之后，你可以在台式计算机或移动设备上安装支持 Markdown 的应用程序。

#### Markdown 的工作原理

Dillinger 让 Markdown 的编写变得容易，因为它隐藏了幕后发生的事情，但是该过程的总体工作方式是值得探索的。

在使用 Markdown 格式书写时，文本内容存储在带有 `.md` 或 `.markdown` 扩展名的纯文本文件中。那然后呢？你的 Markdown 格式的文件如何转换为 HTML 或可打印的文档呢？

简单来说，你需要一个能够处理 Markdown 文件的 *Markdown 应用程序*。有许多应用程序可供选择，从简单的脚本到类似于 Microsoft Word 的桌面应用程序，应有尽有。尽管它们在视觉上有所不同，但所有应用程序都执行相同的操作。像 Dillinger 一样，它们都是将 Markdown 格式的文本转换为 HTML，以便可以在 Web 浏览器中显示。

Markdown 应用程序使用一种称为 *Markdown 处理器*（也通常称为“解析器”或“实现”）的东西将获取到的 Markdown 格式的文本输出为 HTML 格式。此时，可以在 Web 浏览器中查看你的文档，或者将其与样式表组合并打印。你可以在下图看到此过程的直观表示。

**注意：** Markdown 应用程序和处理器是两个单独的组件。为了简洁起见，在下图中，我将它们组合为一个元素（即 “Markdown应用程序”）。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glbqcra4hxj30c00ew0sw.jpg)

总而言之，这是一个四步的过程：

1. 使用文本编辑器或 Markdown 专用的应用程序创建 Markdown 文件。该文件应带有 `.md` 或 `.markdown` 扩展名。
2. 在 Markdown 应用程序中打开 Markdown 文件。
3. 使用 Markdown 应用程序将 Markdown 文件转换为 HTML 文档。
4. 在 web 浏览器中查看 HTML 文件，或使用 Markdown 应用程序将其转换为其他文件格式，例如 PDF。

从你的角度来看，该过程将根据你使用的应用程序的不同而有所不同。例如，Dillinger 本质上将第 1-3 步组合到一个单一、无缝的界面中，你要做的就是在左窗格中键入内容，然后转换结果就在右窗格中就神奇地出现了。但是，如果你使用的是其他工具（例如带有静态网站生成器的文本编辑器），则会发现该过程更为明显。

#### Markdown 有什么用？

Markdown 是做笔记、为网站创建内容以及生成可打印文档的快速、简便的方法。

学习 Markdown 语法并不需要很长时间，一旦你知道如何使用它，你就可以在几乎所有地方使用 Markdown 进行书写了。大多数人使用 Markdown 来为网站创建内容，但是 Markdown 也可以很好地格式化从电子邮件到购物清单的所有内容。

下面是一些你可以使用 Markdown 的场景。

##### 网站

Markdown 是为 web 而设计的，因此，市面上有很多专门用于创建网站内容的应用程序就不足为奇了。

如果你您正在寻找利用 Markdown 文件创建网站的最简单方法，请参考 [blot.im](https://blot.im/) 和 [smallvictori.es](https://smallvictori.es/) 两个站点。在你注册某个服务之后，它们将在你的计算机上创建一个 Dropbox 文件夹。你只需将 Markdown 文件拖放到该文件夹中，然后嗖的一声，这些文件就在你的网站上了。再简单不过了。

如果您熟悉 HTML、CSS和版本管理工具，请试试 Jekyll，这是一个广受欢迎的静态网站生成器，它能将 Markdown 文件并构建为 HTML 网站。这种方法的优势之一是 GitHub Pages 为 Jekyll 生成的网站提供免费托管服务。如果 Jekyll 不是你的理想之选，你可以在 其它大量可用的静态站点生成器 中选择一个。

**注意：** 此 *Markdown 指南* 就是用 Jekyll 创建的。你可以在 [GitHub](https://github.com/mattcone/markdown-guide) 上查看其源码。

如果你想使用内容管理系统（CMS）来支撑你的网站，请试试 [Ghost](https://www.markdown.xyz/tools/ghost/)。这是一个免费的开源博客平台，具有出色的 Markdown 编辑器。如果你是 WordPress 用户，你将很高兴地知道 WordPress.com 上托管的网站都 [支持 Markdown](https://en.support.wordpress.com/markdown/)。自托管的 WordPress 网站可以使用 [Jetpack 插件](https://jetpack.com/support/markdown/)实现对 Markdown 的支持。

##### 文件资料

Markdown 并不具备像 Microsoft Word 这样的文字处理程序的所有功能，但是对于创建基本文件（例如作业和信件）来说已经足够了。你可以使用 Markdown 文档创作工具来创建 Markdown 格式的文档并将其导出为 PDF 或 HTML 格式。PDF 格式是关键，因为一旦有了 PDF 文档，您就可以使用它进行任何操作：打印、通过电子邮件发送或将其上传到网站。

这是我推荐的一些Markdown文档创作工具：

- Mac: MacDown、iA Writer 或 Marked
- iOS / Android: iA Writer
- Windows: ghostwriter 或 Markdown Monster
- Linux: ReText 或 ghostwriter
- Web: Dillinger 或 StackEdit

提示： iA Writer 提供了模板用于预览、打印和导出 Markdown 格式的文档。例如，“ Academic – MLA 样式”的模板会缩进段落并添加双倍行间距。

##### 笔记

在几乎所有方面，Markdown 都是记笔记的理想语法。不幸的是，两个最受欢迎的笔记应用程序 [Evernote](https://evernote.com/) 和 [OneNote](https://www.onenote.com/) 目前都不支持 Markdown。好消息是，其他一些笔记应用程序 *是* 支持 Markdown 的：

- Simplenote 是适用于所有平台的免费、简单的笔记应用程序。
- Notable 是可以在各种平台上运行的笔记应用程序。
- Bear 是适用于 Mac 和 iOS 设备的类似 Evernote 的应用程序。默认情况下，它并不专门针对 Markdown 的，但是你可以启用 Markdown 兼容模式。
- Boostnote 自称是“专为程序员设计的开源笔记应用程序”。

如果你无法放弃 Evernote，可以试试 [Marxico](https://marxi.co/)，一个专门针对 Evernote 的基于订阅付费的 Markdown编辑器，或在 Evernote 网站上使用 [Markdown Here](https://www.markdown.xyz/tools/markdown-here/) 插件。

##### 书籍

想要自行出版小说？请试试 [Leanpub](https://leanpub.com/)，该服务可将你的 Markdown 格式的文件转换为电子书。Leanpub 以 PDF、EPUB 和 MOBI 文件格式输出你的图书。如果你要创建纸版书籍，可以将 PDF 文件上传到类似 [Kindle Direct Publishing](https://kdp.amazon.com/) 之类的服务提供商处。要了解有关使用 Markdown 编写和自行出版书籍的更多信息，请阅读 [此博文](https://medium.com/techspiration-ideas-making-it-happen/how-i-wrote-and-published-my-novel-using-only-open-source-tools-5cdfbd7c00ca)。

##### 演示文稿

信不信由你，你可以将 Markdown 格式的文件转换成演示文稿。在 Markdown 中创建演示文稿需要一点时间来适应，但是一旦你掌握了它，你就能体会到比使用 PowerPoint 或 Keynote 之类的应用程序更快、更容易。[Remark](https://remarkjs.com/)（[GitHub 仓库](https://github.com/gnab/remark)）和 [Cleaver](https://jdan.github.io/cleaver/)（[GitHub 仓库](https://github.com/jdan/cleaver)）一样，是一种基于浏览器的、流行的 Markdown 幻灯片工具。如果你使用的是 Mac，并且希望安装一个应用程序来使用的话，请试试 [Deckset](https://www.decksetapp.com/) 或 [Marked](https://marked2app.com/)。

##### 邮件

如果你需要发送大量电子邮件，并且对大多数电子邮件提供商网站上可用的格式设置控件感到厌倦，那么你将很高兴地发现有一种使用 Markdown 编写电子邮件的简便方法：Markdown Here 是一个免费、开源的浏览器扩展程序，可将 Markdown 格式的文本转换为可用于发送的 HTML。

##### 文档

Markdown 非常适合技术文档。像 GitHub 这样的公司越来越多地转向使用 Markdown 来创建其文档了，请查看此 博文 以了解如何将 Markdown 格式的文档迁移到 Jekyll。如果你是为产品或服务编写文档，请试试以下的便捷工具：

- Read the Docs 可以将你所开源的 Markdown 文件生成文档网站。只需将你的 GitHub 仓库连接到他们的服务，然后你就可以将内容推送到该仓库中，Read the Docs 会完成其余的工作。他们还为 商业实体提供服务。
- MkDocs 是一个快速、简单的静态站点生成器，专门用于构建项目文档。文档源文件使用 Markdown 编写，并使用一个 YAML 配置文件进行配置。MkDocs 有多个 内置主题，包括移植自 Read the Docs 的文档主题。最新的一个主题是 MkDocs Material。
- Docusaurus 是一个静态网站生成器，专门用于创建文档网站。它支持翻译、搜索和版本控制。
- VuePress 是基于 Vue 构建的静态站点生成器，并针对编写技术文档进行了优化。
- Jekyll 前面已经提到过它了，但它也是将 Markdown 文件生成文档网站的一个不错的选择。如果你选择 Jekyll，请务必试试 Jekyll 文档主题。





#### Markdown 方言

使用 Markdown 的过程中，最令人困惑的地方是：实际上每个 Markdown 应用程序都实现了稍有不同的 Markdown 语法。Markdown 的这些变体通常被称为 *flavors（方言）*。掌握你的应用程序所实现的 Markdown 语法是你需要注意的。

为了让你了解各 Markdown 方言的概念，将它们比作语言的方言（language dialects）可能会有所帮助。华雷斯城（Ciudad Juárez）的人说西班牙语，就像巴塞罗那（Barcelona）人一样，但是两个城市使用的方言之间有很大的不同。使用不同 Markdown 应用程序的人也是如此。Dillinger 支持的 Markdown 格式与 Ulysses 有着很大的不同。

实际上，这意味着当一个应用程序说它支持 “Markdown” 时，你永远也不会确切地知到它的实际意思。它说的是仅支持基本语法？还是所有基本语法加扩展语法 ？或者是某些语法的组合呢？在你阅读其文档或开始使用该应用程序之前，你永远都不会知道。

如果你只是新手，我能给你的最好建议就是选择一个具有良好 Markdown 支持的应用程序。这对保持 Markdown 文件的可移植性大有帮助。你可能需要在其它应用程序中保存或使用你的 Markdown 文件，要实现这一点，你应当从使用一个具有良好 Markdown 支持的应用程序开始。你可以在 Markdown 工具列表中找到合适的应用程序。





#### 其它资源

网上有很多资源用来学习 Markdown。以下列出一些：

- [John Gruber’s Markdown documentation](https://daringfireball.net/projects/markdown/). Markdown 的创建者编写的原始指南。
- [Markdown Tutorial](https://www.markdowntutorial.com/). 一个开源网站，你能用浏览器在这个网站上尝试 Markdown。
- [Awesome Markdown](https://github.com/mundimark/awesome-markdown). Markdown 工具和学习资源列表。
- [Typesetting Markdown](https://dave.autonoma.ca/blog/2019/05/22/typesetting-markdown-part-1). 这是一个系列教程，介绍了使用 [pandoc](https://pandoc.org/) 和 [ConTeXt](https://www.contextgarden.net/) 对 Markdown 文档进行排版的系统。





### 速查表

#### 基本语法

这些是 John Gruber 的原始设计文档中列出的元素。所有 Markdown 应用程序都支持这些元素。

| 元素                       | Markdown 语法                              |
| -------------------------- | ------------------------------------------ |
| 标题（Heading）            | `# H1## H2### H3`                          |
| 粗体（Bold）               | `**bold text**`                            |
| 斜体（Italic）             | `*italicized text*`                        |
| 引用块（Blockquote）       | `> blockquote`                             |
| 有序列表（Ordered List）   | `1. First item2. Second item3. Third item` |
| 无序列表（Unordered List） | `- First item- Second item- Third item`    |
| 代码（Code）               | ``code``                                   |
| 分隔线（Horizontal Rule）  | `---`                                      |
| 链接（Link）               | `[title](https://www.example.com)`         |
| 图片（Image）              | `![alt text](image.jpg)`                   |



#### 扩展语法

这些元素通过添加额外的功能扩展了基本语法。但是，并非所有 Markdown 应用程序都支持这些元素。

| 元素                        | Markdown 语法                                                |
| --------------------------- | ------------------------------------------------------------ |
| 表格（Table）               |                                                              |
| 代码块（Fenced Code Block） | ````{ "firstName": "John", "lastName": "Smith", "age": 25}```` |
| 脚注（Footnote）            | `Here's a sentence with a footnote. [^1][^1]: This is the footnote.` |
| 标题编号（Heading ID）      | `### My Great Heading { #custom-id}`                         |
| 定义列表（Definition List） | `term: definition`                                           |
| 删除线（Strikethrough）     | `~~The world is flat.~~`                                     |
| 任务列表（Task List）       | `- [x] Write the press release- [ ] Update the website- [ ] Contact the media` |

#### Downloads

You can download this cheat sheet as a Markdown file for use in your Markdown application.

