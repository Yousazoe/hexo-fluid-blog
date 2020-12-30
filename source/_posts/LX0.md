---
title: LATEX现学现用抢救指南
tags:
  - Write
  - Latex
  - Markdown
categories: 
  - 写作技巧(Write Skill)
  - LATEX
index_img: 
banner_img: 'https://tva1.sinaimg.cn/large/0081Kckwgy1gkb9od3oecj314g0mg755.jpg'
comment: false
abbrlink: a5f7b62
date: 2020-11-02 23:43:56
sticky:
---



本文作为即忘即看的备忘文档，适用于各种编写博客需要专业数学公式但不熟悉的Latex的读者，所有内容摘自 [常用数学符号的 LaTeX 表示方法](http://mohu.org/info/symbols/symbols.htm)。

<!--more-->



### 指数与下标

指数和下标可以用`^`和`_`后加相应字符来实现。比如:

```latex
$a_{1}$ \qquad 
$x^{2}$ \qquad 
$e^{-\alpha}$ \qquad 
$a^{3}_{i,j}$ \qquad 
$e^{x^2} \neq {e^x}^2$
```

效果如下：

> $a_{1}$ $\qquad$ $x^{2}$ $\qquad$ $e^{-\alpha}$ $\qquad$ $a^{3}_{i,j}$ $\qquad$ $e^{x^2} \neq {e^x}^2$



### 根号

平方根（square root）的输入命令为：`\sqrt`，n 次方根相应地为:` \sqrt[n]`。方根符号的大小由LATEX自动加以调整。也可用`\surd` 仅给出符号。比如：

```latex
$\sqrt{x}$ \qquad 
$\sqrt{x^{2}+\sqrt{y}}$ \qquad 
$\sqrt[3]{2}$ \qquad 
$\surd[x^2+y^2]$
```

效果如下：

> $\sqrt{x}$ $\qquad$ $\sqrt{x^{2}+\sqrt{y}}$ $\qquad$ $\sqrt[3]{2}$ $\qquad$ $\surd[x^2+y^2]$



### 水平线

命令`\overline` 和`\underline` 在表达式的上、下方画出水平线。比如：

```latex
$\overline{m+n}$ \qquad
$\underline{m+n}$
```

效果如下：

> $\overline{m+n}$ $\qquad$$\underline{m+n}$



### 水平大括号

命令`\overbrace` 和`\underbrace` 在表达式的上、下方给出一水平的大括号。

```latex
$\underbrace{a+b+\cdots+z}_{26}$
```

效果如下：

> $\underbrace{a+b+\cdots+z}_{26}$



### 向量

向量（Vectors）通常用上方有小箭头（arrow symbols）的变量表示。这可由`\vec` 得到。另两个命令`\overrightarrow` 和`\overleftarrow`在定义从A 到B 的向量时非常有用。

```latex
$\vec a\quad\overrightarrow{AB}$
```

效果如下：

> $\vec a\quad\overrightarrow{AB}$



### 分数

分数（fraction）使用`\frac{...}{...}` 排版。一般来说，1/2 这种形式更受欢迎，因为对于少量的分式，它看起来更好些。

```latex
$1\frac{1}{2}$~hours
$\frac{x^{2}}{k+1}$ \qquad
$x^{\frac{2}{k+1}}$ \qquad
$x^{1/2}$
```

效果如下：

> $1\frac{1}{2}$ $~hours$ $\qquad$ $\frac{x^{2}}{k+1}$ $\qquad$ $x^{\frac{2}{k+1}}$ $\qquad$ $x^{1/2}$



### 积分 求和 乘积

积分运算符（integral operator）用`\int` 来生成。求和运算符（sum operator）由`\sum` 生成。乘积运算符（product operator）由`\prod` 生成。上限和下限用`^` 和`_`来生成，类似于上标和下标。

```latex
$\sum_{i=1}^{n}$ \qquad
$\int_{0}^{frac{\pi}{2}}$ \qquad
$\prod_\epsilon$
```

效果如下：

> $\sum_{i=1}^{n}$ $\qquad$$\int_{0}^{frac{\pi}{2}}$ $\qquad$ $\prod_\epsilon$



### 常用符号表示方法

#### 数学模式重音符

```latex
\hat{a}   \check{a} \tilde{a}   \acute{a} 
\grave{a} \dot{a}   \ddot{a}    \breve{a} 
\bar{a}   \vec{a}   \widehat{a} \widetilde{a}
```



> $\hat{a} \qquad \check{a} \qquad \tilde{a} \qquad \acute{a} \\\\
> \grave{a} \qquad \dot{a} \qquad \ddot{a} \qquad \breve{a} \\\\
> \bar{a} \qquad \vec{a} \qquad \widehat{a} \qquad \widetilde{a} \\\\$





#### 小写希腊字母

```latex
\alpha      \theta    o         \upsilon
\beta       \vartheta \pi       \phi
\gamma      \iota     \varpi    \varphi
\delta      \kappa    \rho      \chi
\epsilon    \lambda   \varrho   \psi
\varepsilon \mu       \sigma    \omega
\zeta       \nu       \varsigma 
\eta        \xi       \tau
```



> $$
> \alpha \qquad \theta \qquad o \qquad \upsilon \\\\
> \beta \qquad \vartheta \qquad \pi \qquad \phi \\
> \gamma \qquad \iota \qquad \varpi  \qquad \varphi \\
> \delta \qquad \kappa \qquad \rho \qquad \chi \\
> \epsilon \qquad \lambda \qquad \varrho \qquad \psi \\
> \varepsilon \qquad \mu \qquad \sigma \qquad \omega \\
> \zeta \qquad \nu \qquad \varsigma \\ 
> \eta \qquad \xi \qquad \tau \\
> $$



#### 大写希腊字母







#### 二元关系符









#### 二元运算符







#### 大尺寸运算符







#### 箭头







#### 定界符





#### 大尺寸定界符



#### 其他符号





