---
title: Introduction to Programming I
date: 2020-11-25 23:21:02
tags:
  - Algorithm
  - AOJ
  - Online Judge
  - C++
categories: [在线测评(Online Judge),会津大学在线测评(Aizu Online Judge)]
index_img: 
banner_img: https://tva1.sinaimg.cn/large/0081Kckwgy1gl1tzdi89aj311i0u07bw.jpg
comments: false
sticky:
abbrlink: c735be6b
translate_title:
top: true
---





Acquire fundamental elements of programming languages.

<!--more-->



### Topic # 1 Getting Started

As an introduction to programming, you will learn basic structures, variables, input/output, and computation.



#### ITP1_1_A Hello World

> Time Limit : `1 sec` , Memory Limit : `131072 KB` 

Welcome to Online Judge!

Write a program which prints "Hello World" to standard output.

##### Input

There is no input for this problem.

##### Output

Print "Hello World" in a line.

##### Sample Input 1

```
No input
```

##### Sample Output 1

```
Hello World
```



##### 問題を解く

每个程序员学习一门语言时都会打印`Hello,World!`，这里我们使用c++的`cout`函数打印即可：

```c++
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
```







#### ITP1_1_B X Cubic

> Time Limit : `1 sec` , Memory Limit : `131072 KB` 

Write a program which calculates the cube of a given integer *x*.

##### Input

An integer *x* is given in a line.

##### Output

Print the cube of *x* in a line.

##### Constraints

- 1 ≤ *x* ≤ 100

##### Sample Input 1

```
2
```

##### Sample Output 1

```
8
```

##### Sample Input 2

```
3
```

##### Sample Output 2

```
27
```



##### 問題を解く

本题给出一个正整数`x`（1 ≤ *x* ≤ 100），返回这个数的立方，我们直接用`cin`接收输入`x`，再用`cout`打印即可：

```c++
#include <iostream>
using namespace std;

int main() {
    int x;
    cin >> x;
    cout << x*x*x << endl;
    return 0;
}
```







#### ITP1_1_C Rectangle

> Time Limit : `1 sec` , Memory Limit : `131072 KB` 

Write a program which calculates the area and perimeter of a given rectangle.

##### Input

The length *a* and breadth *b* of the rectangle are given in a line separated by a single space.

##### Output

Print the area and perimeter of the rectangle in a line. The two integers should be separated by a single space.

##### Constraints

- 1 ≤ *a*, *b* ≤ 100

##### Sample Input 1

```
3 5
```

##### Sample Output 1

```
15 16
```



##### 問題を解く

本题要求我们输入一个矩形的整数长宽`a`、`b`（1 ≤ *a*, *b* ≤ 100），输出矩形的面积（area）和周长（perimeter）。很显然`area = a * b`、`perimeter = 2*(a + b)`，最后输出即可。

```c++
#include <iostream>
using namespace std;

int main() {
    int a,b;
    cin >> a >> b;
    cout << a*b << " " << 2*(a+b) << endl;
    return 0;
}
```







#### ITP1_1_D Watch

> Time Limit : `1 sec` , Memory Limit : `131072 KB` 

Write a program which reads an integer S [second] and converts it to h : m : s where h, m, s denote hours, minutes (less than 60) and seconds (less than 60) respectively.

##### Input

An integer S is given in a line.

##### Output

Print hh, mm and ss separated by ‘:’. You do not need to put ‘0’ for a value, which consists of a digit.

##### Constraints

- 0≤S≤86400


##### Sample Input 1

```
46979
```

##### Sample Output 1

```
13:2:59
```



##### 問題を解く

本题输入是一个整型的秒数，让我们转换成 `时：分：秒` 的形式。

我们先求出小时`h`，`h=S/3600` 取整最后得出的就是小时数`h`；之后减去小时数`h`所占的秒数就是分钟数`m`与秒数`s`之和，然后如法炮制`m=S/60`取整得到分钟数`m`，最后剩下的就是`s`的部分，输出即可：

```c++
#include <iostream>
using namespace std;

int main() {
    int h,m,s,S;
  	cin >> S;
  	
  	h = S/3600;
  	S -= 3600*h;
  	
  	m = S/60;
  	S -= 60*m;	
  
  	s = S;
  	cout << h << ":" << m << ":" << s << endl;
  	return 0;
}
```



### Topic # 2 Branch on Condition

You will learn how to write branches and conditions.





#### ITP1_2_A Small, Large, or Equal

>  Time Limit : `1 sec` , Memory Limit : `131072 KB` 

Write a program which prints small/large/equal relation of given two integers *a* and *b*.

##### Input

Two integers *a* and *b* separated by a single space are given in a line.

##### Output

For given two integers *a* and *b*, print

```
a < b
```

if *a* is less than *b*,

```
a > b
```

if *a* is greater than *b*, and

```
a == b
```

if *a* equals to *b*.

##### Constraints

- -1000 ≤ *a*, *b* ≤ 1000

##### Sample Input 1

```
1 2
```

##### Sample Output 1

```
a < b
```

##### Sample Input 2

```
4 3
```

##### Sample Output 2

```
a > b
```

##### Sample Input 3

```
5 5
```

##### Sample Output 3

```
a == b
```



##### 問題を解く

本题需要我们根据输入的两个整数（-1000 ≤ *a*, *b* ≤ 1000）输出对两者大小的正确判断。

我们假定一个函数`string Equal(int a,int b)`，接收输入的两个整数作为参数，返回大小判断的字符串类型的符号（>、<、==）。

```c++
a > b?1:a == b?0:-1
```

这个三目运算符是关键所在，通过判断大小返回不同的数字，最后交给`switch`去返回不同的符号即可。遇到这种情况我们只需要层层深入一步一步来基本不会出错，`a>b?1:(...)`代表若`a > b`则返回1，否则执行`(...)`；同样的`(...) = a == b?0:-1`，代表若`a == b`返回0，否则（`a < b`）返回-1。如果按照`if--else`的逻辑我们也可以写成这样：

```c++
if(a >b){
	return 1;
}else if(a == b){
	return 0;
}else{
	return -1;
}
```

前后比较很显然，虽然多目运算符逻辑上可能一眼不太好看，但非常简洁，代码量少。



```c++
#include <iostream>
#include <string>
using namespace std;

string Equal(int a,int b){
    switch (a > b?1:a == b?0:-1) {
        case 1:
            return ">";
            break;
        case 0:
            return "==";
            break;
        case -1:
            return "<";
            break;
    }
}

int main() {
    int a,b;
    cin >> a >> b;
    cout << "a " << Equal(a,b) << " b" << endl;
    return 0;
}
```







#### ITP1_2_B Range

> Time Limit : `1 sec` , Memory Limit : `131072 KB`  

Write a program which reads three integers *a*, *b* and *c*, and prints "Yes" if *a*<*b*<*c*, otherwise "No".

##### Input

Three integers *a*, *b* and *c* separated by a single space are given in a line.

##### Output

Print "Yes" or "No" in a line.

##### Constraints

- 0 ≤ *a*, *b*, *c* ≤ 100

##### Sample Input 1

```
1 3 8
```

##### Sample Output 1

```
Yes
```

##### Sample Input 2

```
3 8 1
```

##### Sample Output 2

```
No
```

##### 問題を解く

本题需要我们根据给出的三个输入的正整数判断大小顺序是否正确，如果 *a* < *b* < *c*,输出“Yes”，否则输出“No”。

逻辑上如果要确定*a*、*b*、*c*三者关系，我们需要三个条件：

+ *a < b*
+ *a < c*
+ *b < c*

而根据小于号的传递性质，实际上我们只需要`a < b`和`b < c`就可以推断出`a < c`。需要注意的是有些朋友可能会绕进传递性质的陷阱里：`a < b`和`b < c`会有`a < c`，所以只需要`a < c`即可。这种想法显然是错误的，在这种假设下`b`的值不会受到任何限制，举个例子：`a=1`，`c=3`，`b=100`也满足`a < c`，但三者的关系链没有连接起来。

代码实现上我们接着用之前的三目运算符，判断条件为`a < b && b < c`，所以整体是：`(a < b && b < c)?"Yes":"No"`

```c++
#include <iostream>
#include <string>
using namespace std;

int main() {
    int a,b,c;
    cin >> a >> b >> c;
    string str = (a < b && b < c)?"Yes":"No";
    cout << str << endl;
    return 0;
}
```





#### ITP1_2_C Sorting Three Numbers

> Time Limit : `1 sec` , Memory Limit : `131072 KB`  

Write a program which reads three integers, and prints them in ascending order.

##### Input

Three integers separated by a single space are given in a line.

##### Output

Print the given integers in ascending order in a line. Put a single space between two integers.

##### Constraints

- 1 ≤ the three integers ≤ 10000

##### Sample Input 1

```
3 8 1
```

##### Sample Output 1

```
1 3 8
```

##### 問題を解く

本题要求我们对输入的三个正整数（1 ≤ the three integers ≤ 10000）进行排序从小到大输出。

排序问题是数据结构与算法的一个重难点，作为基础题三个数之间的排序不需要去想的很复杂，下面我总结出三种解决方法以供参考：

###### 条件控制

单纯质朴的初学者朋友们可能会不假思索写出下面的代码：

```c++
#include <iostream>
using namespace std;

int main() {
    int a,b,c;
    cin >> a >> b >> c;

    if (a > b && a > c){
        if (b > c)
            cout << c << " " << b << " " << a << endl;
        else
            cout << b << " " << c << " " << a << endl;
    }else if (b > a && b > c){
        if (a > c)
            cout << c << " " << a << " " << b << endl;
        else
            cout << a << " " << c << " " << b << endl;
    } else{
        if (a > b)
            cout << b << " " << a << " " << a << endl;
        else
            cout << a << " " << b << " " << c << endl;
    }

    return 0;
}
```

通过`if--else`的条件控制，我们达到了对于所有情况的完美输出。

但这道题仅仅给出了3个数的排序，我们就需要写9（3x3）个不同的输出语句，如果多加1个排序数不同的输出语句就变为了16（4x4）个，这还是在其实排序完全没有进展只是分情况输出的情况之下。虽然我们最终实现了对不同情况的输出，但代码的冗余度极高，并且随着排序数量的增加很有可能造成错乱导致输出错误......这些问题迫使我们去思考有什么简便的办法去优化代码，或者换一种思考方式去理解这个问题。



###### 冒泡排序

冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢"浮"到数列的顶端。

冒泡算法的整体步骤大概是这样：

+ 比较相邻的元素。如果第一个比第二个大，就交换他们两个。

+ 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数

+ 针对所有的元素重复以上的步骤，除了最后一个

+ 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较



![](https://tva1.sinaimg.cn/large/0081Kckwgy1gl63n7t3stg30my075thy.gif)



冒泡排序中最重要的就是 **交换**。在代码实现上我们设定一个交换函数`swap()`，需要注意的是这里函数的参数不能传递形式参数，否则交换只发生在函数内部，而不能影响到真正的变量，结果就是函数执行完毕后恢复原样。所以需要传递参数的地址进行交换：

```c++
void swap(int& x, int& y){
	int tmp = x;
	x = y;
	y = tmp;
}
```

根据冒泡排序的原理，第一次遍历交换2次，排出三者中的最大值放在尾端；第二次遍历交换1次，排出三者中第二大的放在次尾端。此时因为只有3个数，所以排序完毕：

```c++
#include <iostream>
using namespace std;

void swap(int& x, int& y){
	int tmp = x;
	x = y;
	y = tmp;
}

int main(){
	int a, b, c;
	cin >> a >> b >> c;
	if(a>b) swap(a,b);
	if(b>c) swap(b,c);
	if(a>b) swap(a,b);
	
	cout << a << " " << b << " "  << c << endl;
}

```



###### sort函数

前面的两种方法的函数都是自己实现的，而对于c++而言已经为我们封装好了现成的排序函数，使用时直接调用即可。

sort函数包含在头文件为`#include<algorithm>`的c++标准库中，调用标准库里的排序方法可以实现对数据的排序，但是sort函数是如何实现的，我们不用考虑，下面给出函数原型：

```c++
void sort (RandomAccessIterator first, RandomAccessIterator last, Compare comp);
```

+ 第一个参数`first`：要排序的数组的起始地址
+ 第二个参数`last`：结束的地址（最后一个数据的后一个数据的地址）
+ 第三个参数`comp`：排序的方法，可以是从升序也可是降序。如果第三个参数不写，则默认的排序方法是从小到大排序。

我们通过将三个正整数存储到数组中，利用`sort`函数进行排序，最后遍历数组输出即可：

```c++
#include<iostream>
#include<algorithm>
using namespace std;

int main(){
    int a[3];
    cin >> a[0] >> a[1] >> a[2];
    sort(a,a+3);
    cout << a[0] <<" " << a[1] << " " << a[2] << endl;
}
```







#### ITP1_2_D Circle in a Rectangle

> Time Limit : `1 sec` , Memory Limit : `131072 KB` 

Write a program which reads a rectangle and a circle, and determines whether the circle is arranged inside the rectangle. As shown in the following figures, the upper right coordinate (W,H)(W,H) of the rectangle and the central coordinate (x,y)(x,y) and radius rr of the circle are given.


![Circle inside a rectangle](https://tva1.sinaimg.cn/large/0081Kckwgy1gl6aoy8rm5j30i9054mx2.jpg)



##### Input

Five integers WW, HH, xx, yy and rr separated by a single space are given in a line.

##### Output

Print "Yes" if the circle is placed inside the rectangle, otherwise "No" in a line.

##### Constraints

- −100≤x,y≤100−100≤x,y≤100
- 0<W,H,r≤1000<W,H,r≤100

##### Sample Input 1

```
5 4 2 2 1
```

##### Sample Output 1

```
Yes
```

##### Sample Input 2

```
5 4 2 4 1
```

##### Sample Output 2

```
No
```



##### 問題を解く

本题需要我们接收矩形长宽、圆的圆心坐标以及半径，判断圆是否包含于矩形之内。

这是一道简单的平面解析几何题，圆的四边极限顺时针开始分别是`(x-r,y)`、`(x,y+r)`、`(x+r,y)`、`(x,y-r)`，而圆在矩形内的限定我们可以列出4个约束方程：

+ $x-r>=0$
+ $x+r<=w$
+ $y-r>=0$
+ $y+r<=h$

4个约束条件同时满足输出"Yes"，否则输出"No"，记得不要忘记条件中的等号。

```c++
#include <iostream>
#include <string>
using namespace std;

int main() {
    int x,y,w,h,r;
    cin >> w >> h >> x >> y >> r;

    string str = (x - r) >= 0 && (x + r) <= w && (y - r) >= 0 && (y + r) <= h?"Yes":"No";
    cout << str << endl;

    return 0;
}
```





### Topic # 3 Repetitive Processing

You will learn how to write repetitive constructs.





#### ITP1_3_A Print Many Hello World

> Time Limit : `1 sec` , Memory Limit : `131072 KB` 

Write a program which prints 1000 "Hello World".

##### Input

There is no input for this problem.

##### Output

The output consists of 1000 lines. Print "Hello World" in each line.

##### Sample Input

```
No input
```

##### Sample Output

```
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
Hello World
.
.
.
.
.
.
Hello World
```



##### 問題を解く

本题是简单的循环应用，将`Hello World`打印1000遍即可：

```c++
#include <iostream>
using namespace std;

int main() {
    for (int i = 0; i < 1000; ++i) {
        cout << "Hello World" << endl;
    }

    return 0;
}
```







#### ITP1_3_B Print Test Cases

> Time Limit : `1 sec` , Memory Limit : `131072 KB` 

In the online judge system, a judge file may include multiple datasets to check whether the submitted program outputs a correct answer for each test case. This task is to practice solving a problem with multiple datasets.

Write a program which reads an integer *x* and print it as is. Note that multiple datasets are given for this problem.

##### Input

The input consists of multiple datasets. Each dataset consists of an integer *x* in a line.

The input ends with an integer 0. You program should not process (print) for this terminal symbol.

##### Output

For each dataset, print *x* in the following format:

```
Case i: x
```

where *i* is the case number which starts with 1. Put a single space between "Case" and *i*. Also, put a single space between ':' and *x*.

##### Constraints

- 1 ≤ *x* ≤ 10000
- The number of datasets ≤ 10000

##### Sample Input

```
3
5
11
7
8
19
0
```

##### Sample Output

```
Case 1: 3
Case 2: 5
Case 3: 11
Case 4: 7
Case 5: 8
Case 6: 19
```



##### 問題を解く

本题要求我们接收一个参数`x`，不断输出打印`Case i: x`的形式直至`x=0`。

我们只需要在循环中加入输入和输出即可，但不要忘记输入时同时判断跳出循环的条件`x=0`：

```c++
#include <iostream>
using namespace std;

int main() {
    int x,i = 1;

    while (cin >> x && x != 0){
        cout << "Case " << i << ": " << x << endl;
        i++;
    }

    return 0;
}
```







#### ITP1_3_C Swapping Two Numbers

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

Write a program which reads two integers *x* and *y*, and prints them in ascending order.

##### Input

The input consists of multiple datasets. Each dataset consists of two integers *x* and *y* separated by a single space.

The input ends with two 0 (when both *x* and *y* are zero). Your program should not process for these terminal symbols.

##### Output

For each dataset, print *x* and *y* in ascending order in a line. Put a single space between *x* and y.

##### Constraints

- 0 ≤ *x*, *y* ≤ 10000
- the number of datasets ≤ 3000

##### Sample Input

```
3 2
2 2
5 3
0 0
```

##### Sample Output

```
2 3
2 2
3 5
```



##### 問題を解く

本题要求我们输入一组组数据，将其以升序排列直至输入数据组为`(0,0)`。

那我们只需要`while(cin >> x >> y && (x || y))`即可在接收输入的前提下同时检测是否需要停止程序。对于交换函数`void swap(int& x,int& y)`注意一下参数传递的是地址就好了：

```c++
#include <iostream>
using namespace std;

void swap(int& x,int& y){
    int tmp = x;
    x = y;
    y = tmp;
}

int main() {
    int x,y;

    while(cin >> x >> y && (x || y)){
        if (x > y)
            swap(x , y);
        cout << x << " " << y << endl;
    }
    return 0;
}
```







#### ITP1_3_D How Many Divisors?

> Time Limit : `1 sec` , Memory Limit : `131072 KB`  

Write a program which reads three integers *a*, *b* and *c*, and prints the number of divisors of *c* between *a* and *b*.

##### Input

Three integers *a*, *b* and *c* are given in a line separated by a single space.

##### Output

Print the number of divisors in a line.

##### Constraints

- 1 ≤ *a*, *b*, *c* ≤ 10000
- *a* ≤ *b*

##### Sample Input 1

```
5 14 80
```

##### Sample Output 1

```
3
```



##### 問題を解く

本题需要接受三个参数，`a`与`b`是约束条件，`c`为被除数，输出为`[a,b]`之间的`c`的因数。

代码实现上只需要在`[a,b]`之间进行遍历循环，循环内判断是否为因数即可。但是要注意因数都是一对一对的出现的，所以不能只进行一次判断，需要对`i`和`c % i`同时判断，满足条件令计数器`count`增加。



```c++
#include <iostream>
using namespace std;

int main() {
    int a,b,c,count = 0;
    cin >> a >> b >> c;

    for (int i = a; i <= b; ++i) {
        if (c % i == 0){
            if (i >= a && i <= b)
                count++;
            if ((c % i >= a) && (c % i <= b))
                count++;
        }
    }

    cout << count << endl;

    return 0;
}
```





### Topic # 4 Computation

You will learn operators to define statements.





#### ITP1_4_A A/B Problem

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

Write a program which reads two integers *a* and *b*, and calculates the following values:

- *a* ÷ *b*: *d* (in integer)
- remainder of *a* ÷ *b*: *r* (in integer)
- *a* ÷ *b*: *f* (in real number)

##### Input

Two integers *a* and *b* are given in a line.

##### Output

Print *d*, *r* and *f* separated by a space in a line. For *f*, the output should not contain an absolute error greater than 10-5.

##### Constraints

- 1 ≤ *a*, *b* ≤ 109

##### Sample Input 1

```
3 2
```

##### Sample Output 1

```
1 1 1.50000
```



#####  問題を解く

本题要求我们接受被除数、除数两个输入，输出商、余数和真正的结果。一开始没有想特别多，就正常输入输出：

```c++
#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int a,b;
    cin >> a >> b;

    cout << a/b << " " << a%b << " " << (double)a/b << endl;
    return 0;
}
```

最后卡在了第6组测试数据：

**Input:**

```
12300 99
```

**Output:**

```
124 24 124.24242424
```

而我们的输出是：

**False Output:**

```
124 24 124.242
```

很显然我们的输出没有精度控制。C语言中的 printf() 函数使用以`%`开头的格式控制符，例如 %X、%.2f、%6d 等，而C++中我还没有具体了解过格式化输出，遂查阅后找到在头文件`<iomanip>`中包含的`setprecision()`函数用来控制`cout`输出精度：

```c++
#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int a,b;
    cin >> a >> b;

    cout << setprecision(10) << a/b << " " << a%b << " " << (double)a/b << endl;

    return 0;
}
```

提交后再次WA，问题出在第9组数据：

**Input:**

```
2 100000009
```

**Output:**

```
0 2 0.00000002
```

而我们的输出是：

**False Output:**

```
0 2 1.99999982e-08
```

这里可能是小数点位数过多导致的系统省略为科学记数法，显然不能完全满足我们的要求。再次查阅资料发现了`fixed`操作符，它表示浮点输出应该以固定点或小数点表示法显示：

```c++
cout << fixed;
```

当然，`fixed` 操作符可能最重要的还是当它与 `setprecision` 操作符一起使用时，`setprecision` 即可以以一种新的方式显示。它将指定浮点数字的小数点后要显示的位数，而不是要显示的总有效数位数。而这通常正是我们想要的，例如，可以重写上面程序的如下：

```c++
cout << fixed << setprecision(控制精度) << ...;
```

改写程序即可：

```c++
#include <iostream>
#include <iomanip>
using namespace std;

int main() {
    int a,b;
    cin >> a >> b;
    cout << fixed;
    cout << setprecision(8) << a/b << " " << a%b << " " << (double)a/b << endl;

    return 0;
}
```



##### C++ 常用的输出流操纵算子

> 注意：“流操纵算子”一栏中的星号`*`不是算子的一部分，星号表示在没有使用任何算子的情况下，就等效于使用了该算子。例如，在默认情况下，整数是用十进制形式输出的，等效于使用了 dec 算子。



| 流操纵算子          | 作  用                                                       |
| ------------------- | ------------------------------------------------------------ |
| *dec                | 以十进制形式输出整数                                         |
| hex                 | 以十六进制形式输出整数                                       |
| oct                 | 以八进制形式输出整数                                         |
| fixed               | 以普通小数形式输出浮点数                                     |
| scientific          | 以科学计数法形式输出浮点数                                   |
| left                | 左对齐，即在宽度不足时将填充字符添加到右边                   |
| *right              | 右对齐，即在宽度不足时将填充字符添加到左边                   |
| setbase(b)          | 设置输出整数时的进制，b=8、10 或 16                          |
| setw(w)             | 指定输出宽度为 w 个字符，或输人字符串时读入 w 个字符         |
| setfill(c)          | 在指定输出宽度的情况下，输出的宽度不足时用字符 c 填充（默认情况是用空格填充） |
| setprecision(n)     | 设置输出浮点数的精度为 n。  在使用非 fixed 且非 scientific 方式输出的情况下，n 即为有效数字最多的位数，如果有效数字位数超过 n，则小数部分四舍五人，或自动变为科学计 数法输出并保留一共 n 位有效数字。  在使用 fixed 方式和 scientific 方式输出的情况下，n 是小数点后面应保留的位数。 |
| setiosflags(flag)   | 将某个输出格式标志置为 1                                     |
| resetiosflags(flag) | 将某个输出格式标志置为 0                                     |
| boolapha            | 把 true 和 false 输出为字符串                                |
| *noboolalpha        | 把 true 和 false 输出为 0、1                                 |
| showbase            | 输出表示数值的进制的前缀                                     |
| *noshowbase         | 不输出表示数值的进制.的前缀                                  |
| showpoint           | 总是输出小数点                                               |
| *noshowpoint        | 只有当小数部分存在时才显示小数点                             |
| showpos             | 在非负数值中显示 +                                           |
| *noshowpos          | 在非负数值中不显示 +                                         |
| *skipws             | 输入时跳过空白字符                                           |
| noskipws            | 输入时不跳过空白字符                                         |
| uppercase           | 十六进制数中使用 A~E。若输出前缀，则前缀输出 0X，科学计数法中输出 E |
| *nouppercase        | 十六进制数中使用 a~e。若输出前缀，则前缀输出 0x，科学计数法中输出 e。 |
| internal            | 数值的符号（正负号）在指定宽度内左对齐，数值右对 齐，中间由填充字符填充。 |



####  ITP1_4_B Circle

> Time Limit : `1 sec` , Memory Limit : `131072 KB`  

Write a program which calculates the area and circumference of a circle for given radius *r*.

##### Input

A real number *r* is given.

##### Output

Print the area and circumference of the circle in a line. Put a single space between them. The output should not contain an absolute error greater than 10-5.

##### Constraints

- 0 < *r* < 10000

##### Sample Input 1

```
2
```

##### Sample Output 1

```
12.566371 12.566371
```

##### Sample Input 2

```
3
```

##### Sample Output 2

```
28.274334 18.849556
```



#####  問題を解く

本题要求我们接收圆的半径`r`，按格式输出面积和周长。思路和上题一样，需要注意的是圆周率需要很准确，不然会因为小数计算而导致错误。

```c++
#include <iostream>
#include <iomanip>
using namespace std;

#define PI 3.141592653589793238

int main() {
    double r;
    cin >> r;
    cout << fixed;
    cout << setprecision(6) << PI*r*r << " " << 2.0*PI*r << endl;

    return 0;
}
```





#### ITP1_4_C Simple Calculator

> Time Limit : `1 sec `, Memory Limit : `131072 KB`  

Write a program which reads two integers *a*, *b* and an operator *op*, and then prints the value of *a* *op* *b*.

The operator *op* is '+', '-', '*' or '/' (sum, difference, product or quotient). The division should truncate any fractional part.

##### Input

The input consists of multiple datasets. Each dataset is given in the following format.

```
a op b
```

The input ends with a dataset where *op* = '?'. Your program should not process for this dataset.

##### Output

For each dataset, print the value in a line.

##### Constraints

- 0 ≤ *a*, *b* ≤ 20000
- No divisions by zero are given.

##### Sample Input 1

```
1 + 2
56 - 18
13 * 2
100 / 10
27 + 81
0 ? 0
```

##### Sample Output 1

```
3
38
26
10
108
```



##### 問題を解く

本题要求我们接收两个数`a`、`b`和运算符`op`，进行相应运算直至出现运算符`?`。这道题主要考察的是判断和`switch`语句的使用，通过`case`语句分支不同的运算结果。

```c++
#include <iostream>
using namespace std;

int main() {
    int a,b,c;
    char op;

    while ((cin >> a >> op >> b)&&(op != '?')){
        switch (op) {
            case '+':
                c = a + b;
                break;
            case '-':
                c = a - b;
                break;
            case '*':
                c = a * b;
                break;
            case '/':
                c = a / b;
                break;
        }
        cout << c << endl;
    }
    return 0;
}
```



#### ITP1_4_D Min, Max and Sum

> Time Limit : `1 sec` , Memory Limit : `131072 KB`  

Write a program which reads a sequence of *n* integers *a**i*(*i*=1,2,...*n*), and prints the minimum value, maximum value and sum of the sequence.

##### Input

In the first line, an integer *n* is given. In the next line, *n* integers *a**i* are given in a line.

##### Output

Print the minimum value, maximum value and sum in a line. Put a single space between the values.

##### Constraints

- 0<*n*≤10000
- −1000000≤$a_i$≤1000000

##### Sample Input

```
5
10 1 5 4 17
```

##### Sample Output

```
1 17 37
```

##### 問題を解く

本题要求我们从一组数中输出最大值、最小值和所有数的和。对于最大值和最小值，在遍历输入的过程中不断比较迭代替换即可，而求和也是在遍历过程中累加最后输出，但作为一道入门题目有一些需要注意的初始化问题：

+ 求和需要先进行初始化，否则求和初值默认为内存中的任意值造成累加错误

+ 最大值、最小值需要一开始赋值为第一个传进来的数而非0，因为题目中明确取值范围：−1000000≤$a_i$≤1000000，说明有负数存在，而0作为初始值会筛除所有非正值



```c++
#include <iostream>
using namespace std;

int main(){
    int n,tmp,min,max,sum = 0;
    cin >> n;

    for (int i = 0; i < n; ++i){
        cin >> tmp;

        if (i == 0){
            min = max = tmp;
        }

        if (max < tmp){
            max = tmp;
        }

        if (min > tmp){
            min = tmp;
        }

        sum += tmp;
    }

    cout << min << " " << max << " " << sum << endl;
    return 0;
}
```



到这里基本上已经ok了，但没有过，原因是数值比较大，`int`类型的求和不能满足条件，改为`long`类型即可：

```c++
#include <iostream>
using namespace std;

int main(){
    int n,tmp,min,max;
    long sum = 0;
    cin >> n;

    for (int i = 0; i < n; ++i){
        cin >> tmp;

        if (i == 0){
            min = max = tmp;
        }

        if (max < tmp){
            max = tmp;
        }

        if (min > tmp){
            min = tmp;
        }

        sum += tmp;
    }

    cout << min << " " << max << " " << sum << endl;
    return 0;
}
```







### Topic # 5 Structured Program I

You will learn how to write a structured program.



#### ITP1_5_A Print a Rectangle

> Time Limit : `1 sec` , Memory Limit : `131072 KB` 

Draw a rectangle which has a height of *H* cm and a width of *W* cm. Draw a 1-cm square by single '#'.

##### Input

The input consists of multiple datasets. Each dataset consists of two integers *H* and *W* separated by a single space.

The input ends with two 0 (when both *H* and *W* are zero).

##### Output

For each dataset, print the rectangle made of *H* × *W* '#'.

Print a blank line after each dataset.

##### Constraints

- 1 ≤ *H* ≤ 300
- 1 ≤ *W* ≤ 300

##### Sample Input

```
3 4
5 6
2 2
0 0
```

##### Sample Output

```
####
####
####

######
######
######
######
######

##
##
```



##### 問題を解く

本题要求我们以给定的长（`w`）、宽（`h`）打印相应的矩形。实现上比较简单，一个二重循环打印即可，但不要忘记每次打印后需要再次换行。



```c++
#include <iostream>
using namespace std;

int main(){
    int w,h;
    while ((cin >> w >> h)&&(w||h)){
        for (int i = 0; i < w; ++i) {
            for (int j = 0; j < h; ++j) {
                cout << "#";
            }
            cout << endl;
        }
        cout << endl;
    }
    return 0;
}
```





#### ITP1_5_B Print a Frame

> Time Limit : `1 sec` , Memory Limit : `131072 KB`  

Draw a frame which has a height of *H* cm and a width of *W* cm. For example, the following figure shows a frame which has a height of 6 cm and a width of 10 cm.

```
##########
#........#
#........#
#........#
#........#
##########
```

##### Input

The input consists of multiple datasets. Each dataset consists of two integers *H* and *W* separated by a single space.

The input ends with two 0 (when both *H* and *W* are zero).

##### Output

For each dataset, print the frame made of '#' and '.'.

Print a blank line after each dataset.

##### Constraints

- 3 ≤ *H* ≤ 300
- 3 ≤ *W* ≤ 300

##### Sample Input

```
3 4
5 6
3 3
0 0
```

##### Sample Output

```
####
#..#
####

######
#....#
#....#
#....#
######

###
#.#
###
```



##### 問題を解く

本题与上一题相似，只不过由全填充转换为边缘填充。我们只需要保留边框其余替换为点阵即可。

```
######
#....#
#....#
#....#
######
```

观察题中给出的输出，我们可以发现这样的规律：**第一行和最后一行全填充；第一列和最后一列全填充。**对应到代码上就是`i == 0 || i == w - 1 || j == 0 || j == h - 1`，所以只需要加上判断条件稍作修改。



```c++
#include <iostream>
using namespace std;

int main(){
    int w,h;
    while ((cin >> w >> h)&&(w||h)){
        for (int i = 0; i < w; ++i) {
            for (int j = 0; j < h; ++j) {
                if (i == 0 || i == w - 1 || j == 0 || j == h - 1)
                    cout << "#";
                else
                    cout << ".";
            }
            cout << endl;
        }
        cout << endl;
    }
    return 0;
}
```



#### ITP1_5_C Print a Chessboard

> Time Limit : `1 sec` , Memory Limit : `131072 KB`  

Draw a chessboard which has a height of *H* cm and a width of *W* cm. For example, the following figure shows a chessboard which has a height of 6 cm and a width of 10 cm.

```
#.#.#.#.#.
.#.#.#.#.#
#.#.#.#.#.
.#.#.#.#.#
#.#.#.#.#.
.#.#.#.#.#
```

Note that the top left corner should be drawn by '#'.

##### Input

The input consists of multiple datasets. Each dataset consists of two integers *H* and *W* separated by a single space.

The input ends with two 0 (when both *H* and *W* are zero).

##### Output

For each dataset, print the chessboard made of '#' and '.'.

Print a blank line after each dataset.

##### Constraints

- 1 ≤ *H* ≤ 300
- 1 ≤ *W* ≤ 300

##### Sample Input

```
3 4
5 6
3 3
2 2
1 1
0 0
```

##### Sample Output

```
#.#.
.#.#
#.#.

#.#.#.
.#.#.#
#.#.#.
.#.#.#
#.#.#.

#.#
.#.
#.#

#.
.#

#
```



##### 問題を解く

本题要求我们打印一个比较抽象的国际象棋棋盘。和前两题不一样这次改为了交替出现的情况，每行的输出情况都不一样。一个简单不怎么需要思考的办法是对奇偶行使用判断语句（偶数行的偶数列`#`，奇数列`.`；奇数行的偶数列`.`，奇数列`#`），最后用四个分支分别输出。

```
3 x 4

#.#.	
.#.#
#.#.
```

四个分支虽然不多，但还是略显臃肿。再次观察题目给出的输出，虽然奇偶行的打印规则不一样，但正是因为**奇偶行打印的规则相反**，我们可以利用这一特点寻找规律，有一点像“负负得正”的意味。

```
#.#.	(0,0) _ (0,2) _ 
.#.#	_ (1,1) _ (1,3)
#.#.	(2,0) _ (2,2) _
```

标出所有`#`的坐标，我们可以发现行列的和总是偶数；同理`.`的坐标和也总是奇数。我们顺理成章写出判断条件：

+ 行列和为偶数 #
+ 行列和为奇数 .



```c++
#include <iostream>
using namespace std;

int main(){
    int w,h;
    while ((cin >> w >> h)&&(w||h)){
        for (int i = 0; i < w; ++i) {
            for (int j = 0; j < h; ++j) {
                if ((i + j)%2 == 0)
                    cout << "#";
                else
                    cout << ".";
            }
            cout << endl;
        }
        cout << endl;
    }
    return 0;
}
```



#### ITP1_5_D Structured Programming

> Time Limit : `1 sec` , Memory Limit : `131072 KB`  

In programming languages like C/C++, a goto statement provides an unconditional jump from the "goto" to a labeled statement. For example, a statement "goto CHECK_NUM;" is executed, control of the program jumps to CHECK_NUM. Using these constructs, you can implement, for example, loops.

Note that use of goto statement is highly discouraged, because it is difficult to trace the control flow of a program which includes goto.

Write a program which does precisely the same thing as the following program (this example is wrtten in C++). Let's try to write the program without goto statements.

```c++
void call(int n){
  int i = 1;
 CHECK_NUM:
  int x = i;
  if ( x % 3 == 0 ){
    cout << " " << i;
    goto END_CHECK_NUM;
  }
 INCLUDE3:
  if ( x % 10 == 3 ){
    cout << " " << i;
    goto END_CHECK_NUM;
  }
  x /= 10;
  if ( x ) goto INCLUDE3;
 END_CHECK_NUM:
  if ( ++i <= n ) goto CHECK_NUM;

  cout << endl;
}
```

##### Input

An integer *n* is given in a line.

##### Output

Print the output result of the above program for given integer *n*.

##### Constraints

- 3 ≤ *n* ≤ 10000

##### Sample Input

```
30
```

##### Sample Output

```
 3 6 9 12 13 15 18 21 23 24 27 30
```

Put a single space character before each element.



##### 問題を解く

本题要求我们不使用跳转的`goto`语句实现给出代码的功能，我们可以先跑一下观察一下代码结构：

+ `CHECK_NUM(1)`指向`END_CHECK_NUM(3)`
+ `INCLUDE3(2)`指向`END_CHECK_NUM(3)`
+ `if(x)`指向`INCLUDE3(2)`
+ `END_CHECK_NUM(3)`指向`CHECK_NUM(1)`

```c++
#include <iostream>
using namespace std;

void call(int n);

int main(){
    int n;
    cin >> n;

    call(n);

    return 0;
}

void call(int n){
    int i = 1;
    CHECK_NUM:
    int x = i;
    if ( x % 3 == 0 ){
        cout << " " << i;
        goto END_CHECK_NUM;
    }
    INCLUDE3:
    if ( x % 10 == 3 ){
        cout << " " << i;
        goto END_CHECK_NUM;
    }
    x /= 10;
    if ( x ) goto INCLUDE3;
    END_CHECK_NUM:
    if ( ++i <= n ) goto CHECK_NUM;

    cout << endl;
}
```



由于`(1)`、`(2)`都指向`(3)`而`(3)`也指向`(1)`、`(2)`，我们可以判断这是一个两层的嵌套循环，其中`(1)`、`(3)`为首层循环的首尾，中间夹杂着`(2)`、`(3)`的二级循环。需要注意的是二级循环因为要先运行一次所有需要使用`while`而非`do-while`循环。



```c#
#include <iostream>
using namespace std;

void call(int n);

int main(){
    int n;
    cin >> n;
    call(n);

    return 0;
}

void call(int n){
    for (int i = 1; i <= n; ++i) {
        int x = i;

        if (x % 3 == 0){
            cout << " " << i;
            continue;
        }

        do {
            if (x % 10 == 3){
                cout << " " << i;
                break;
            }
            x /= 10;
        }while (x);
    }
    cout << endl;
}
```











### Topic # 6 Array

You will learn how to define and use arrays which manage sequences of elements.





#### ITP1_6_A Reversing Numbers

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

Write a program which reads a sequence and prints it in the reverse order.

##### Input

The input is given in the following format:

```
n
a1 a2 . . . an
```

*n* is the size of the sequence and *a**i* is the *i*th element of the sequence.

##### Output

Print the reversed sequence in a line. Print a single space character between adjacent elements (Note that your program should not put a space character after the last element).

##### Constraints

- *n* ≤ 100
- 0 ≤ *a**i* < 1000

##### Sample Input 1

```
5
1 2 3 4 5
```

##### Sample Output 1

```
5 4 3 2 1
```

##### Sample Input 2

```
8
3 3 4 4 5 8 7 9
```

##### Sample Output 2

```
9 7 8 5 4 4 3 3
```



##### 問題を解く

本题要求我们倒置输入的数据，只需要用一个数组存储下来再倒置输出即可：

```c++
#include <iostream>
using namespace std;

int main(){
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; ++i) {
        cin >> arr[i];
    }

    for (int j = n - 1; j >= 0; --j) {
        if (j == n - 1)
            cout << arr[j];
        else
            cout << " " << arr[j];
    }
    cout << endl;
    
    return 0;
}
```







#### ITP1_6_B Finding Missing Cards

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

Taro is going to play a card game. However, now he has only *n* cards, even though there should be 52 cards (he has no Jokers).

The 52 cards include 13 ranks of each of the four suits: spade, heart, club and diamond.

##### Input

In the first line, the number of cards *n* (*n* ≤ 52) is given.

In the following *n* lines, data of the *n* cards are given. Each card is given by a pair of a character and an integer which represent its suit and rank respectively. A suit is represented by 'S', 'H', 'C' and 'D' for spades, hearts, clubs and diamonds respectively. A rank is represented by an integer from 1 to 13.

##### Output

Print the missing cards. The same as the input format, each card should be printed with a character and an integer separated by a space character in a line. Arrange the missing cards in the following priorities:

- Print cards of spades, hearts, clubs and diamonds in this order.
- If the suits are equal, print cards with lower ranks first.

##### Sample Input

```
47
S 10
S 11
S 12
S 13
H 1
H 2
S 6
S 7
S 8
S 9
H 6
H 8
H 9
H 10
H 11
H 4
H 5
S 2
S 3
S 4
S 5
H 12
H 13
C 1
C 2
D 1
D 2
D 3
D 4
D 5
D 6
D 7
C 3
C 4
C 5
C 6
C 7
C 8
C 9
C 10
C 11
C 13
D 9
D 10
D 11
D 12
D 13
```

##### Sample Output

```
S 1
H 3
H 7
C 12
D 8
```



##### 問題を解く

本题要求我们从给出的52张卡片中挑选出输入中没有的卡片。据题可知这个卡牌有四个种类（红桃、方片、黑桃、梅花），每个种类有13张牌分别赋值1到13。我们据此可以写出这个包含1个类别`s`和13个数字`rank[13]`的卡牌组的结构体`Card`：

```c++
struct Card{
    char s;
    int rank[13];
};
```



有了结构体我们就可以用`card[4]`来表示全部四个类别的卡牌组了，那么接下来我们需要对这四个牌组进行初始化：

+ 赋予卡牌类型
+ 内置数组值全部初始化为0

```c++
void init(Card& card,char s){
    card.s = s;
    for (int i = 0; i < 13; ++i) {
        card.rank[i] = 0;
    }
}
```



对于这道题我的思路是因为每次输入都是`<类型 数值>`，所以可以在主函数中用`switch`语句承接，`case`值为类型分支到各个卡牌结构体。

```c++
int main(){
    int n,tmp;
    char suit;
    cin >> n;

    Card card[4];
    init(card[0],'S');
    init(card[1],'H');
    init(card[2],'C');
    init(card[3],'D');
  
    for (int i = 0; i < n; ++i) {
      cin >> suit >> tmp;
      switch (suit) {
        case 'S':
          break;
        case 'H':
          break;
        case 'C':
          break;
        case 'D':
          break;
      }
    }
  
    return 0;
}
```



之后在各自的`rank`数组中搜索输入的数值，找到将对应数组的数值设为1，因为复用性我们封装为函数：

+ `tmp`作为卡牌的数值对应数组的下标

```c++
void find(Card& card,int tmp){
    card.rank[tmp - 1] = 1;
}
```



最后输出就遍历每个结构体的数组，所有数组数值仍为0的就是输入中未出现的，输出即可。

```c++
void output(Card& card){
    for (int i = 0; i < 13; ++i) {
        if (!card.rank[i])
            cout << card.s << " " << i + 1 << endl;
    }
}
```





特别需要注意几个子函数的数组下标问题，卡牌是从1到13而数组是0到12，一定不要混淆两者。

```c++
#include <iostream>
using namespace std;

struct Card{
    char s;
    int rank[13];
};

void init(Card& card,char s){
    card.s = s;
    for (int i = 0; i < 13; ++i) {
        card.rank[i] = 0;
    }
}

void find(Card& card,int tmp){
    card.rank[tmp - 1] = 1;
}

void output(Card& card){
    for (int i = 0; i < 13; ++i) {
        if (!card.rank[i])
            cout << card.s << " " << i + 1 << endl;
    }
}

int main(){
    int n,tmp;
    char suit;
    cin >> n;

    Card card[4];
    init(card[0],'S');
    init(card[1],'H');
    init(card[2],'C');
    init(card[3],'D');

    for (int i = 0; i < n; ++i) {
        cin >> suit >> tmp;
        switch (suit) {
            case 'S':
                find(card[0],tmp);
                break;
            case 'H':
                find(card[1],tmp);
                break;
            case 'C':
                find(card[2],tmp);
                break;
            case 'D':
                find(card[3],tmp);
                break;
        }
    }
  
    for (int j = 0; j < 4; ++j) {
        output(card[j]);
    }

    return 0;
}
```





#### ITP1_6_C Official House

> Time Limit : `1 sec` , Memory Limit : `131072 KB` 

You manage 4 buildings, each of which has 3 floors, each of which consists of 10 rooms. Write a program which reads a sequence of tenant/leaver notices, and reports the number of tenants for each room.

For each notice, you are given four integers *b*, *f*, *r* and *v* which represent that *v* persons entered to room *r* of *f*th floor at building *b*. If *v* is negative, it means that −*v* persons left.

Assume that initially no person lives in the building.

##### Input

In the first line, the number of notices *n* is given. In the following *n* lines, a set of four integers *b*, *f*, *r* and *v* which represents *i*th notice is given in a line.

##### Output

For each building, print the information of 1st, 2nd and 3rd floor in this order. For each floor information, print the number of tenants of 1st, 2nd, .. and 10th room in this order. Print a single space character before the number of tenants. Print "####################" (20 '#') between buildings.

##### Constraints

- No incorrect building, floor and room numbers are given.
- 0 ≤ the number of tenants during the management ≤ 9

##### Sample Input

```
3
1 1 3 8
3 2 2 7
4 3 8 1
```

##### Sample Output

```
 0 0 8 0 0 0 0 0 0 0
 0 0 0 0 0 0 0 0 0 0
 0 0 0 0 0 0 0 0 0 0
####################
 0 0 0 0 0 0 0 0 0 0
 0 0 0 0 0 0 0 0 0 0
 0 0 0 0 0 0 0 0 0 0
####################
 0 0 0 0 0 0 0 0 0 0
 0 7 0 0 0 0 0 0 0 0
 0 0 0 0 0 0 0 0 0 0
####################
 0 0 0 0 0 0 0 0 0 0
 0 0 0 0 0 0 0 0 0 0
 0 0 0 0 0 0 0 1 0 0
```



##### 問題を解く

本题要求我们作为酒店管理员管理酒店输出入住情况。我们现在有4栋建筑，每栋建筑有3层，1层有10个房间，也就是4 * 3 * 10 = 120个房间，我们可以使用三维数组`arr[4][3][10]`来表示这个酒店的数据结构。输入中的`b`、`f`、`r`、`v`分别代表建筑编号`building`、层数`floor`、房间号`room`以及访客数`visitor`，而题中说明有可能会有访问离开，也就是`v`为负数，所以我们选择累加的形式而非直接赋值`arr[b -1][f - 1][r - 1] += v;`。



```c++
#include <iostream>
using namespace std;

int main(){
    int n,b,f,r,v;
    int building[4][3][10] = {0};
    cin >> n;

    for (int i = 0; i < n; ++i) {
        cin >> b >> f >> r >> v;
        building[b -1][f - 1][r - 1] += v;
    }

    for (int i = 0; i < 4; ++i) {
        for (int j = 0; j < 3; ++j) {
            for (int k = 0; k < 10; ++k) {
                cout << " " << building[i][j][k];
            }
            cout << endl;
        }
        if(i != 3)
            cout << "####################" << endl;
    }

    return 0;
}
```



最后注意`"####################"`分隔符最后一个建筑不需要输出，加入判断筛选掉。



#### ITP1_6_D Matrix Vector Multiplication

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

Write a program which reads a $n×m$ matrix $A$ and a $m×1$ vector $b$, and prints their product $Ab$.

A column vector with $m$ elements is represented by the following equation.

$b=\begin{pmatrix}b_1 \\ b_2 \\ .. \\ b_m\end{pmatrix}$

A $n×m$ matrix with $m$ column vectors, each of which consists of $n$ elements, is represented by the following equation.

$A=\begin{pmatrix}a_{11} & a_{12} & ... & a_{1m} \\ a_{21} & a_{22} & ... & a_{2m} \\ ... & ... & ... & ... \\ a_{n1} & a_{n2} & ... & a_{nm}\end{pmatrix}$

$i$-th element of a $m×1$ column vector $b$ is represented by $b_i$ ($i=1,2,...,m$), and the element in $i$-th row and $j$-th column of a matrix $A$ is represented by $a_{ij}$ ($i=1,2,...,n, j=1,2,...,m$).

The product of a $n×m$ matrix $A$ and a $m×1$ column vector $b$ is a $n×1$ column vector $c$, and $c_i$ is obtained by the following formula:

$c_i=∑_{j=1}^ma_{ij}b_j=a_{i1}b_1+a_{i2}b_2+...+a_{im}b_{m}$

##### Input

In the first line, two integers $n$ and $m$ are given. In the following $n$ lines, $a_{ij}$ are given separated by a single space character. In the next $m$ lines, $b_i$ is given in a line.

##### Output

The output consists of $n$ lines. Print $c_i$ in a line.

##### Constraints

- $1≤n,m≤1001≤n,m≤100$
- $0≤b_i,a_{ij}≤10000≤b_i,a_{ij}≤1000$

##### Sample Input

```
3 4
1 2 0 1
0 3 0 1
4 1 1 0
1
2
3
0
```

##### Sample Output

```
5
6
9
```



##### 問題を解く

本题要求我们模拟一个`m * n`与`n * 1`矩阵的乘法运算。我们可以抛下复杂的数学表达式，先来研究一下样例的输出：

$\begin{pmatrix}1 & 2 & 0 & 1 \\ 0 & 3 & 0 & 1 \\ 4 & 1 & 1 & 0\end{pmatrix} \begin{pmatrix}1 \\ 2 \\ 3 \\ 0\end{pmatrix} = \begin{pmatrix} 1*1+2*2+0*3+1*0 \\ 0*1+3*2+0*3+1*0 \\ 4*1+1*2+1*3+0*0 \end{pmatrix} = \begin{pmatrix} 1+4+0+0 \\ 0+6+0+0 \\ 4+2+3+0 \end{pmatrix} = \begin{pmatrix} 5 \\ 6 \\ 9 \end{pmatrix}$



```c++
for (int l = 0; l < m; ++l) {
	for (int i = 0; i < n; ++i) {
  	c[l] += A[l][i] * b[i];
  }
  cout << c[l] << endl;
}
```

矩阵乘法的本质就是“前行乘后列”，前一个矩阵的每行乘以后一个矩阵的每列，所以我们只需明白`A[l][i] *b[i] `，这里两者的下标都为`i`就对应着矩阵运算的法则。多想一下，现在的`b`只是`n * 1`，也就是说代码里的只是特殊化的`A[l][i] * b[i][1]` ，那么正常的矩阵运算又该怎么写的呢？大家可以思考一下。

```c++
#include <iostream>
using namespace std;

int main(){
    int m,n;
    cin >> m >> n;
    int A[m][n],b[n],c[m];

    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            cin >> A[i][j];
        }
        c[i] = 0;
    }

    for (int k = 0; k < n; ++k) {
        cin >> b[k];
    }

    for (int l = 0; l < m; ++l) {
        for (int i = 0; i < n; ++i) {
            c[l] += A[l][i] * b[i];
        }
        cout << c[l] << endl;
    }

    return 0;
}
```



### Topic # 7 Structured Program II

You will master the structured programming.





#### ITP1_7_A Grading

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

Write a program which reads a list of student test scores and evaluates the performance for each student.

The test scores for a student include scores of the midterm examination *m* (out of 50), the final examination *f* (out of 50) and the makeup examination *r* (out of 100). If the student does not take the examination, the score is indicated by -1.

The final performance of a student is evaluated by the following procedure:

- If the student does not take the midterm or final examination, the student's grade shall be F.
- If the total score of the midterm and final examination is greater than or equal to 80, the student's grade shall be A.
- If the total score of the midterm and final examination is greater than or equal to 65 and less than 80, the student's grade shall be B.
- If the total score of the midterm and final examination is greater than or equal to 50 and less than 65, the student's grade shall be C.
- If the total score of the midterm and final examination is greater than or equal to 30 and less than 50, the student's grade shall be D. However, if the score of the makeup examination is greater than or equal to 50, the grade shall be C.
- If the total score of the midterm and final examination is less than 30, the student's grade shall be F.

##### Input

The input consists of multiple datasets. For each dataset, three integers *m*, *f* and *r* are given in a line.

The input ends with three -1 for *m*, *f* and *r* respectively. Your program should not process for the terminal symbols.

The number of datasets (the number of students) does not exceed 50.

##### Output

For each dataset, print the grade (A, B, C, D or F) in a line.

##### Sample Input

```
40 42 -1
20 30 -1
0 2 -1
-1 -1 -1
```

##### Sample Output

```
A
C
F
```



##### 問題を解く

本题要求我们根据输入的期中`mid`、期末`final`和补考`makeup`成绩输出从A到F的等级成绩：

+ 期中 + 期末 >= 80 --  A
+ 65 <= 期中 + 期末 < 80 -- B
+ 50 <= 期中 + 期末 < 65 -- C
+ 30 <= 期中 + 期末 < 50 
  + 补考 >= 50 -- C
  + 否则 -- D
+ 期中 + 期末 <= 30 -- F
+ 期中期末任意一次旷考 -- F

作为分类问题我们程序的主体以`switch`为核心筛选等级，而`case`语句不可能让我们繁琐的从0一直写到100写100句，所以这里我们用到一个技巧：

```c++
sum /= 10;
```

通过对`sum`取商，我们将100个`case`语句（0～100）缩小到了10个（0～10），而因为没有非法输入所以我们只需要写8个即可。但这样又有一个新的问题：成绩B、C的判定条件分界是65，夹在70和60两个取整整数之间。这里我的想法比较简单，就是人工去把这两个区间的数字分流到两个整数70和60上：

```c++
if (sum < 70 && sum >= 65)
  sum = 70;
else if (sum < 65 && sum >= 50)
	sum = 50;
```

最后不要忘记任何一次缺考都会被判为F即可：

```c++
#include <iostream>
using namespace std;

int main(){
    int mid,final,makeup,sum = 0;
    char score;

    while ((cin >> mid >> final >> makeup) && !(mid == -1 && final == -1 && makeup == -1)) {
        sum = mid + final;

        if (sum < 70 && sum >= 65)
            sum = 70;
        else if (sum < 65 && sum >= 50)
            sum = 50;

        sum /= 10;
        switch (sum) {
            case 10:
            case 9:
            case 8:
                score = 'A';
                break;
            case 7:
                score = 'B';
                break;
            case 5:
                score = 'C';
                break;
            case 4:
            case 3:
                if (makeup >= 50)
                    score = 'C';
                else
                    score = 'D';
                break;
            default:
                score = 'F';
                break;
        }

        if(mid == -1 || final == -1)
            score = 'F';
        
        cout << score << endl;
    }

    return 0;
}
```





#### ITP1_7_B How many ways?

> Time Limit : `1 sec` , Memory Limit : `131072 KB` 

Write a program which identifies the number of combinations of three integers which satisfy the following conditions:

- You should select three distinct integers from 1 to *n*.
- A total sum of the three integers is *x*.

For example, there are two combinations for *n* = 5 and *x* = 9.

- 1 + 3 + 5 = 9
- 2 + 3 + 4 = 9

##### Input

The input consists of multiple datasets. For each dataset, two integers *n* and *x* are given in a line.

The input ends with two zeros for *n* and *x* respectively. Your program should not process for these terminal symbols.

##### Constraints

- 3 ≤ *n* ≤ 100
- 0 ≤ *x* ≤ 300

##### Output

For each dataset, print the number of combinations in a line.

##### Sample Input

```
5 9
0 0
```

##### Sample Output

```
2
```



##### 問題を解く

本题要求我们从给定的数列中找出三个能相加为目标`x`的组合的个数。这道题是典型的三数求和问题，这里我直接使用最直接的暴力求解的三重循环。

我们先来考虑两数求和的问题，设想一下如果序列从1开始一直到4，我们该如何遍历每个组合？

```
[1,2,3,4]
(1,2) (1,3) (1,4)
(2,3) (2,4)
(3,4)
```

我们在第二次循环的时候要注意不能和第一次重复，所以要从第一个循环的下一个循环子开始。而三数求和就是再多加一层循环：

```c++
#include <iostream>
using namespace std;

int main(){
    int n,x,count = 0;

    while ((cin >> n >> x)&& (x || n)){
        count = 0;

        for (int i = 1; i <= n; ++i) {
            for (int j = i + 1; j <= n; ++j) {
                for (int k = j + 1; k <= n; ++k) {
                    if (i + j + k == x)
                        count++;
                }
            }
        }
        cout << count << endl;
    }

    return 0;
}
```



本题的难点本应该是去重和复杂度简化，但似乎我们的测试数据没有考虑诸如`[3,3,3,3]`这样的情况，而且这个算法的复杂度达到了$O(N^3)$。





  

#### ITP1_7_C Spreadsheet

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

Your task is to perform a simple table calculation.

Write a program which reads the number of rows *r*, columns *c* and a table of *r* × *c* elements, and prints a new table, which includes the total sum for each row and column.

##### Input

In the first line, two integers *r* and *c* are given. Next, the table is given by *r* lines, each of which consists of *c* integers separated by space characters.

##### Output

Print the new table of (*r*+1) × (*c*+1) elements. Put a single space character between adjacent elements. For each row, print the sum of it's elements in the last column. For each column, print the sum of it's elements in the last row. Print the total sum of the elements at the bottom right corner of the table.

##### Constraints

- 1 ≤ *r*, *c* ≤ 100
- 0 ≤ an element of the table ≤ 100

##### Sample Input

```
4 5
1 1 3 4 5
2 2 2 4 5
3 3 0 1 1
2 3 4 4 6
```

##### Sample Output

```
1 1 3 4 5 14
2 2 2 4 5 15
3 3 0 1 1 8
2 3 4 4 6 19
8 9 9 13 17 56
```



##### 問題を解く

本题要求我们接收一个`r*c`的表格，返回一个`r+1*c+1`的表格，多出的行列分别是各行各列的和。这个很像EXCEL表格里的那种求和功能，只不过这回是由我们自己去实现。首先我们先写出输入和输出的部分：

```c++
#include <iostream>
using namespace std;

int main(){
    int r,c,sum = 0;
    cin >> r >> c;
    int table[r + 1][c + 1];

    for (int i = 0; i < r + 1; ++i) {
        for (int j = 0; j < c + 1; ++j) {
            table[i][j] = 0;
        }
    }

    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            cin >> table[i][j];
        }
    }

    for (int i = 0; i < r + 1; ++i) {
        for (int j = 0; j < c + 1; ++j) {
            if (j == 0)
                cout << table[i][j];
            else
                cout << " " << table[i][j];
        }
        cout << endl;
    }

    return 0;
}
```



输入样例后打印结果，这里我的想法是先把每行的和求出来，然后再求每列的和，最后的总和通过`sum`在输入过程中累加填充即可：

```
1 1 3 4 5 0
2 2 2 4 5 0
3 3 0 1 1 0
2 3 4 4 6 0
0 0 0 0 0 0
```



原本想的是两次分开累加，但后面想了一下直接同时进行也互不影响，就都写进输入的循环中。

对于行的累加，我们的`i`是按行变化的，而列固定为最后一列`c`；列累加同理，列按`j`变化，而行固定为最后一行`r`。

```c++
for (int i = 0; i < r; ++i) {
		for (int j = 0; j < c; ++j) {
  			cin >> table[i][j];
    		table[i][c] += table[i][j];
        table[r][j] += table[i][j];
        sum += table[i][j];
    }
}
table[r][c] = sum;
```



最后完整的代码如下：

```c++
#include <iostream>
using namespace std;

int main(){
    int r,c,sum = 0;
    cin >> r >> c;
    int table[r + 1][c + 1];

    for (int i = 0; i < r + 1; ++i) {
        for (int j = 0; j < c + 1; ++j) {
            table[i][j] = 0;
        }
    }

    for (int i = 0; i < r; ++i) {
        for (int j = 0; j < c; ++j) {
            cin >> table[i][j];
            table[i][c] += table[i][j];
            table[r][j] += table[i][j];
            sum += table[i][j];
        }
    }
    table[r][c] = sum;

    for (int i = 0; i < r + 1; ++i) {
        for (int j = 0; j < c + 1; ++j) {
            if (j == 0)
                cout << table[i][j];
            else
                cout << " " << table[i][j];
        }
        cout << endl;
    }

    return 0;
}
```







#### ITP1_7_D Matrix Multiplication

> Time Limit : `1 sec` , Memory Limit : `131072 KB`  

Write a program which reads a $n×m$ matrix $A$ and a $m×l$ matrix $B$, and prints their product, a $n×l$ matrix $C$. An element of matrix $C$ is obtained by the following formula:

$c_{ij}=∑^m_{k=1}a_{ik}b_{kj}$

where $a_{ij}$, $b_{ij}$ and $c_{ij}$ are elements of $A$ $B$ and $C$ respectively.

##### Input

In the first line, three integers $n$, $m$ and $l$ are given separated by space characters

In the following lines, the $n×m$ matrix $A$ and the $m×l$ matrix $B$ are given.

##### Output

Print elements of the $n×l$ matrix $C$ ($c_{ij}$). Print a single space character between adjacent elements.

##### Constraints

- $1≤n,m,l≤100$
- $0≤a_{ij},b_{ij}≤10000$

##### Sample Input

```
3 2 3
1 2
0 3
4 5
1 2 1
0 3 2
```

##### Sample Output

```
1 8 5
0 9 6
4 23 14
```



##### 問題を解く

本题是在6_D的基础上拓展为任意规模的矩阵运算。和之前一样先写好输入输出的部分：

```c++
#include <iostream>
using namespace std;

int main(){
    int n,m,l;
    cin >> n >> m >> l;

    int A[n][m],B[m][l],C[n][l];

    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < l; ++j) {
            C[i][j] = 0;
        }
    }

    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < m; ++j) {
            cin >> A[i][j];
        }
    }

    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < l; ++j) {
            cin >> B[i][j];
        }
    }

    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < l; ++j) {
            if(j == 0)
                cout << C[i][j];
            else
                cout << " " << C[i][j];
        }
        cout << endl;
    }

    return 0;
}
```



对于矩阵的运算部分，前两层的循环我们可以根据输出的矩阵为`n*l`确定循环次数，最后一层根据题目给出的数学公式直接抄下来就行了：

$c_{ij}=∑^m_{k=1}a_{ik}b_{kj}$

```c++
for (int i = 0; i < n; ++i) {
		for (int j = 0; j < l; ++j) {
    		for (int k = 0; k < m; ++k) {
        		C[i][j] += A[i][k]*B[k][j];
    		}
		}
}
```



在最后没有通过边界条件的测试，回到代码应该是在矩阵乘法时数值可能会超过`int`类型的边界，改为`long`类型即可通过。

```c++
+ long A[n][m],B[m][l],C[n][l];
- int A[n][m],B[m][l],C[n][l];
```



完整的代码如下：

```C++
#include <iostream>
using namespace std;

int main(){
    int n,m,l;
    cin >> n >> m >> l;

    int A[n][m],B[m][l],C[n][l];

    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < l; ++j) {
            C[i][j] = 0;
        }
    }

    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < m; ++j) {
            cin >> A[i][j];
        }
    }

    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < l; ++j) {
            cin >> B[i][j];
        }
    }

    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < l; ++j) {
            for (int k = 0; k < m; ++k) {
                C[i][j] += A[i][k]*B[k][j];
            }
        }
    }

    for (int i = 0; i < n; ++i) {
        for (int j = 0; j < l; ++j) {
            if(j == 0)
                cout << C[i][j];
            else
                cout << " " << C[i][j];
        }
        cout << endl;
    }

    return 0;
}
```





### Topic # 8 Character

You will learn how to manage characters.







#### ITP1_8_A Toggling Cases

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

Write a program which converts uppercase/lowercase letters to lowercase/uppercase for a given string.

##### Input

A string is given in a line.

##### Output

Print the converted string in a line. Note that you do not need to convert any characters other than alphabetical letters.

##### Constraints

- The length of the input string < 1200

##### Sample Input

```
fAIR, LATER, OCCASIONALLY CLOUDY.
```

##### Sample Output

```
Fair, later, occasionally cloudy.
```



##### 問題を解く

本题要求我们接收一组字符串然后对其进行大小写转换。做这道题的难点其实在于如何将空格包含的字符串输入进来，这里我总结一下关于字符串输入输出空格的问题：

###### cin

`cin`是我最初的选择，它会遇到空格或回车键停止，只能输入没有空格的字符串，当输入中含有空格，则只能输出空格之前的字符。

###### gets

遇到回车键结束。（有时与`getchar()`配合使用）

###### cin.get

可以接收空格，遇到回车键结束。（有时与`getchar()`配合使用）此外还有`cin.get(ch)`,其中`ch` 是`char`型，可以一个一个接收字符，包括空字。

###### getline

针对`string`类型，可以接收空格，遇到回车键结束。（有时与`getchar()`配合使用）

###### cin.getline

`cin.getline()`函数与`cin.get()`函数类似，可以接收空格，遇到回车键结束。（有时与`getchar()`配合使用）



```c++
#include <iostream>
#include <string>
using namespace std;

int main(){
    string str;
    getline(cin,str);

    for (int i = 0; i < str.size(); ++i) {
        if (str[i] >= 'a' && str[i] <= 'z')
            str[i] -= 'a' - 'A';
        else if (str[i] >= 'A' && str[i] <= 'Z')
            str[i] += 'a' - 'A';

        cout << str[i];
    }
    cout << endl;

    return 0;
}
```







#### ITP1_8_B Sum of Numbers

> Time Limit : `1 sec` , Memory Limit : `131072 KB` 

Write a program which reads an integer and prints sum of its digits.

##### Input

The input consists of multiple datasets. For each dataset, an integer *x* is given in a line. The number of digits in *x* does not exceed 1000.

The input ends with a line including single zero. Your program should not process for this terminal symbol.

##### Output

For each dataset, print the sum of digits in *x*.

##### Sample Input

```
123
55
1000
0
```

##### Sample Output

```
6
10
1
```



##### 問題を解く

本题要求我们接收一组字符串，然后求各个位的数字之和。这道题非常简单，唯一需要注意的是不能直接这样写：

```c++
for (int i = 0; i < str.size(); ++i)
		sum += str[i];
```



这样的话`sum`累加出来的是所有位数上数字的ASCII码之和而非真正的数字和，所以我们需要用字符`0`来减去每个字符求出数字的绝对值再累加`sum`，本题完成。

```c++
#include <iostream>
#include <string>
using namespace std;

int main(){
    string str;

    while (cin >> str && (str[0] != '0')){
        int sum = 0;
        for (int i = 0; i < str.size(); ++i)
            sum += str[i] - '0';
        cout << (int)sum << endl;
    }

    return 0;
}
```







#### ITP1_8_C Counting Characters

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

Write a program which counts and reports the number of each alphabetical letter. Ignore the case of characters.

##### Input

A sentence in English is given in several lines.

##### Output

Prints the number of alphabetical letters in the following format:

```
a : The number of 'a'
b : The number of 'b'
c : The number of 'c'
  .
  .
z : The number of 'z'
```

##### Constraints

- The number of characters in the sentence < 1200

##### Sample Input

```
This is a pen.
```

##### Sample Output

```
a : 1
b : 0
c : 0
d : 0
e : 1
f : 0
g : 0
h : 1
i : 2
j : 0
k : 0
l : 0
m : 0
n : 1
o : 0
p : 1
q : 0
r : 0
s : 2
t : 1
u : 0
v : 0
w : 0
x : 0
y : 0
z : 0
```

##### 問題を解く

本题要求我们统计输入的字符串的`a`~`z`的个数。大致的思路是先将输入的字符串大小写转换，因为我们不可能写26个字母的打印和计算，所以这里我们借助循环，数字的增长伴随着由`a`到`z`。

```c++
#include <iostream>
#include <algorithm>
#include <string>
using namespace std;

int main(){
    int count[26] = {0};
    string str;
    getline(cin,str);

    for (int i = 0; i < str.size(); ++i) {
        transform(str.begin(),str.end(),str.begin(),::tolower);

        for (int j = 0; j < 26; ++j) {
            if (str[i] == (char)('a' + j))
                count[j]++;
        }
    }

    for (int i = 0; i < 26; ++i) {
        cout << (char)('a' + i) << " : " << count[i] << endl;
    }
    return 0;
}
```



但我们无法通过第3个样例：

```
ABCD E F Z
x 
y
z
```

这里的输入就不是之前的那一行了，我们改用`char` + `getchar()`输入。看了一下别人的解题步骤，要比自己的简单不少：`count`数组设为256保证ASCII码的位置足够，然后直接令字符（的ASCII码值）作为下标累加进`count`数组。最后同时计算大小写（ASCII码值差值为32）的数值即可。



```c++
#include <iostream>
#include <stdio.h>
using namespace std;

int main(){
    int count[256] = {0};
    char c;

    while ((c = getchar()) != EOF)
        count[c]++;

    for (int i = 97; i <= 122; ++i)
        cout << (char)i << " : " << count[i] + count[i - 32] << endl;
    return 0;
}
```







#### ITP1_8_D Ring

> Time Limit : `1 sec` , Memory Limit : `131072 KB` 

Write a program which finds a pattern pp in a ring shaped text ss.



![](https://tva1.sinaimg.cn/large/008eGmZEly1gmquxgnehqj3050056a9w.jpg)



##### Input

In the first line, the text ss is given.
In the second line, the pattern pp is given.

##### Output

If pp is in ss, print Yes in a line, otherwise No.

##### Constraints

- 1≤ length of p ≤ length of s ≤100
- s and p consists of lower-case letters

##### Sample Input 1

```
vanceknowledgetoad
advance
```

##### Sample Output 1

```
Yes
```



##### Sample Input 2

```
vanceknowledgetoad
advanced
```

##### Sample Output 2

```
No
```



  

##### 問題を解く



```c++

```





### Topic # 9 String

You will learn how to manage strings.





#### ITP1_9_A Finding a Word

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

Write a program which reads a word *W* and a text *T*, and prints the number of word *W* which appears in text *T*

*T* consists of string $T_i$ separated by space characters and newlines. Count the number of $T_i$ which equals to *W*. The word and text are case insensitive.

##### Constraints

- The length of *W* ≤ 10
- *W* consists of lower case letters
- The length of *T* in a line ≤ 1000

##### Input

In the first line, the word *W* is given. In the following lines, the text *T* is given separated by space characters and newlines.

"END_OF_TEXT" indicates the end of the text.

##### Output

Print the number of *W* in the text.

##### Sample Input

```
computer
Nurtures computer scientists and highly-skilled computer engineers
who will create and exploit "knowledge" for the new era.
Provides an outstanding computer environment.
END_OF_TEXT
```

##### Sample Output

```
3
```



##### 問題を解く











#### ITP1_9_B Shuffle

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

Your task is to shuffle a deck of *n* cards, each of which is marked by a alphabetical letter.

A single shuffle action takes out *h* cards from the bottom of the deck and moves them to the top of the deck.

The deck of cards is represented by a string as follows.

```
abcdeefab
```

The first character and the last character correspond to the card located at the bottom of the deck and the card on the top of the deck respectively.

For example, a shuffle with *h* = 4 to the above deck, moves the first 4 characters "abcd" to the end of the remaining characters "eefab", and generates the following deck:

```
eefababcd
```

You can repeat such shuffle operations.

Write a program which reads a deck (a string) and a sequence of *h*, and prints the final state (a string).

##### Input

The input consists of multiple datasets. Each dataset is given in the following format:

```
A string which represents a deck
The number of shuffle m
h1
h2
  .
  .
hm
```

The input ends with a single character '-' for the string.

##### Constraints

- The length of the string ≤ 200
- 1 ≤ *m* ≤ 100
- 1 ≤ $h_i$ < The length of the string
- The number of datasets ≤ 10

##### Output

For each dataset, print a string which represents the final state in a line.

##### Sample Input

```
aabc
3
1
2
1
vwxyz
2
3
4
-
```

##### Sample Output

```
aabc
xyzvw
```



##### 問題を解く











#### ITP1_9_C Card Game

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

Taro and Hanako are playing card games. They have *n* cards each, and they compete *n* turns. At each turn Taro and Hanako respectively puts out a card. The name of the animal consisting of alphabetical letters is written on each card, and the bigger one in lexicographical order becomes the winner of that turn. The winner obtains 3 points. In the case of a draw, they obtain 1 point each.

Write a program which reads a sequence of cards Taro and Hanako have and reports the final scores of the game.

##### Input

In the first line, the number of cards *n* is given. In the following *n* lines, the cards for *n* turns are given respectively. For each line, the first string represents the Taro's card and the second one represents Hanako's card.

##### Constraints

- *n* ≤ 1000
- The length of the string ≤ 100

##### Output

Print the final scores of Taro and Hanako respectively. Put a single space character between them.

##### Sample Input

```
3
cat dog
fish fish
lion tiger
```

##### Sample Output

```
1 7
```



##### 問題を解く













#### ITP1_9_D Transformation

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

Write a program which performs a sequence of commands to a given string strstr. The command is one of:

- print a b: print from the a-th character to the b-th character of strstr
- reverse a b: reverse from the a-th character to the b-th character of strstr
- replace a b p: replace from the a-th character to the b-th character of strstr with p

Note that the indices of strstr start with 0.

##### Input

In the first line, a string strstr is given. strstr consists of lowercase letters. In the second line, the number of commands *q* is given. In the next *q* lines, each command is given in the above mentioned format.

##### Output

For each print command, print a string in a line.

##### Constraints

- 1≤1≤ length of str≤1000str≤1000
- 1≤q≤1001≤q≤100
- 0≤a≤b<0≤a≤b< length of strstr
- for replace command, b−a+1=b−a+1= length of pp

##### Sample Input 1

```
abcde
3
replace 1 3 xyz
reverse 0 2
print 1 4
```

##### Sample Output 1

```
xaze
```

##### Sample Input 2

```
xyz
3
print 0 2
replace 0 2 abc
print 0 2
```

##### Sample Output 2

```
xyz
abc
```



##### 問題を解く









### Topic # 10 Math Functions

You will learn how to use mathematical functions.







#### ITP1_10_A Distance

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

Write a program which calculates the distance between two points P1(x1, y1) and P2(x2, y2).

##### Input

Four real numbers x1, y1, x2 and y2 are given in a line.

##### Output

Print the distance in real number. The output should not contain an absolute error greater than $10^{-4}$.

##### Sample Input

```
0 0 1 1
```

##### Sample Output

```
1.41421356
```



##### 問題を解く







#### ITP1_10_B Triangle

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

For given two sides of a triangle *a* and *b* and the angle *C* between them, calculate the following properties:

- *S*: Area of the triangle
- *L*: The length of the circumference of the triangle
- *h*: The height of the triangle with side *a* as a bottom edge

##### Input

The length of *a*, the length of *b* and the angle *C* are given in integers.

##### Output

Print *S*, *L* and *h* in a line respectively. The output should not contain an absolute error greater than $10^{-4}$.

##### Sample Input

```
4 3 90
```

##### Sample Output

```
6.00000000
12.00000000
3.00000000
```



##### 問題を解く













#### ITP1_10_C Standard Deviation

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

You have final scores of an examination for n students. Calculate standard deviation of the scores $s_1, s_2 ... s_n$.

The variance $α^2$ is defined by

$α2 = (∑^n_{i=1}(s_i - m)^2)/n$

where *m* is an average of $s_i$. The standard deviation of the scores is the square root of their variance.

##### Input

The input consists of multiple datasets. Each dataset is given in the following format:

```
n
s1 s2 ... sn
```

The input ends with single zero for *n*.

##### Output

For each dataset, print the standard deviation in a line. The output should not contain an absolute error greater than $10^-4$.

##### Constraints

- *n* ≤ 1000
- 0 ≤ $s_i$ ≤ 100

##### Sample Input

```
5
70 80 100 90 20
3
80 80 80
0
```

##### Sample Output

```
27.85677655
0.00000000
```





##### 問題を解く







#### ITP1_10_D Distance II

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

Your task is to calculate the distance between two nn dimensional vectors $x={x_1,x_2,...,x_n}$ and $y={y_1,y_2,...,y_n}$.

The Minkowski's distance defined below is a metric which is a generalization of both the Manhattan distance and the Euclidean distance.

$D_{xy}=(∑^n_{i=1}|x_i−y_i|^p)^{\frac{1}{p}}$

It can be the Manhattan distance

$D_{xy}=|x_1−y_1|+|x_2−y_2|+...+|x_n−y_n|$

where $p=1$.

It can be the Euclidean distance

$D_{xy}=\sqrt(|x_1−y_1|)^2+(|x_2−y_2|)^2+...+(|x_n−y_n|)^2$

where $p=2$.

Also, it can be the Chebyshev distance

$D_{xy}=max^n_{i=1}(|x_i−y_i|)$

where $p=∞$

Write a program which reads two nn dimensional vectors $x$ and $y$, and calculates Minkowski's distance where $p=1,2,3,∞$ respectively.

##### Input

In the first line, an integer nn is given. In the second and third line, $x={x_1,x_2,...x_n}$ and $y={y_1,y_2,...y_n}$ are given respectively. The elements in $x$ and $y$ are given in integers.

##### Output

Print the distance where $p=1,2,3$ and $∞$ in a line respectively. The output should not contain an absolute error greater than $10^{-5}$.

##### Constraints

- $1≤n≤100$
- $0≤x_i,y_i≤1000$

##### Sample Input

```
3
1 2 3
2 0 4
```

##### Sample Output

```
4.000000
2.449490
2.154435
2.000000
```



##### 問題を解く









### Topic # 11 Structure and Class

You will learn how to define and use structures and classes.



 

#### ITP1_11_A Dice I



Write a program to simulate rolling a dice, which can be constructed by the following net.



![](https://tva1.sinaimg.cn/large/008eGmZEly1gmuhrlov6nj30fc05ma9v.jpg)
![](https://tva1.sinaimg.cn/large/008eGmZEly1gmuhrm1fuvj30dm03twea.jpg)





As shown in the figures, each face is identified by a different label from 1 to 6.

Write a program which reads integers assigned to each face identified by the label and a sequence of commands to roll the dice, and prints the integer on the top face. At the initial state, the dice is located as shown in the above figures.

##### Input

In the first line, six integers assigned to faces are given in ascending order of their corresponding labels.

In the second line, a string which represents a sequence of commands, is given. The command is one of 'E', 'N', 'S' and 'W' representing four directions shown in the above figures.

##### Output

Print the integer which appears on the top face after the simulation.

##### Constraints

- 0≤ the integer assigned to a face ≤100
- 0≤ the length of the command ≤100

##### Sample Input 1

```
1 2 4 8 16 32
SE
```

##### Sample Output 1

```
8
```

You are given a dice where 1, 2, 4, 8, 16 are 32 are assigned to a face labeled by 1, 2, ..., 6 respectively. After you roll the dice to the direction S and then to the direction E, you can see 8 on the top face.



##### Sample Input 2

```
1 2 4 8 16 32
EESWN
```

##### Sample Output 2

```
32
```



##### 問題を解く







#### ITP1_11_B Dice II

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

Construct a dice from a given sequence of integers in the same way as [Dice I](https://onlinejudge.u-aizu.ac.jp/courses/lesson/2/ITP1/11/description.jsp?id=ITP1_11_A).

You are given integers on the top face and the front face after the dice was rolled in the same way as [Dice I](https://onlinejudge.u-aizu.ac.jp/courses/lesson/2/ITP1/11/description.jsp?id=ITP1_11_A). Write a program to print an integer on the right side face.



![](https://tva1.sinaimg.cn/large/008eGmZEly1gmuhuyzi7ij305603nmwx.jpg)





##### Input

In the first line, six integers assigned to faces are given in ascending order of their corresponding labels. In the second line, the number of questions qq is given.

In the following qq lines, qq questions are given. Each question consists of two integers on the top face and the front face respectively.

##### Output

For each question, print the integer on the right side face.

##### Constraints

- 0≤ the integer assigned to a face ≤100
- The integers are all different
- 1≤q≤24

##### Sample Input

```
1 2 3 4 5 6
3
6 5
1 3
3 2
```

##### Sample Output

```
3
5
6
```



##### 問題を解く







#### ITP1_11_C Dice III

> Time Limit : `1 sec` , Memory Limit : `131072 KB`

Write a program which reads the two dices constructed in the same way as [Dice I](https://onlinejudge.u-aizu.ac.jp/courses/lesson/2/ITP1/11/description.jsp?id=ITP1_11_A), and determines whether these two dices are identical. You can roll a dice in the same way as [Dice I](https://onlinejudge.u-aizu.ac.jp/courses/lesson/2/ITP1/11/description.jsp?id=ITP1_11_A), and if all integers observed from the six directions are the same as that of another dice, these dices can be considered as identical.

##### Input

In the first line, six integers assigned to faces of a dice are given in ascending order of their corresponding labels.
In the second line, six integers assigned to faces of another dice are given in ascending order of their corresponding labels.

##### Output

Print "Yes" if two dices are identical, otherwise "No" in a line.

##### Constraints

- 0≤ the integer assigned to a face ≤100

##### Sample Input 1

```
1 2 3 4 5 6
6 2 4 3 5 1
```

##### Sample Output 1

```
Yes
```



##### Sample Input 2

```
1 2 3 4 5 6
6 5 4 3 2 1
```

##### Sample Output 2

```
No
```



##### 問題を解く







#### ITP1_11_D Dice IV

> Time Limit : `1 sec` , Memory Limit : `131072 KB` 

Write a program which reads nn dices constructed in the same way as [Dice I](https://onlinejudge.u-aizu.ac.jp/courses/lesson/2/ITP1/11/description.jsp?id=ITP1_11_A), and determines whether they are all different. For the determination, use the same way as [Dice III](https://onlinejudge.u-aizu.ac.jp/courses/lesson/2/ITP1/11/description.jsp?id=ITP1_11_C).

##### Input

In the first line, the number of dices nn is given. In the following nn lines, six integers assigned to the dice faces are given respectively in the same way as [Dice III](https://onlinejudge.u-aizu.ac.jp/courses/lesson/2/ITP1/11/description.jsp?id=ITP1_11_C).

##### Output

Print "Yes" if given dices are all different, otherwise "No" in a line.

##### Constraints

- 2≤n≤100
- 0≤ the integer assigned to a face ≤100

##### Sample Input 1

```
3
1 2 3 4 5 6
6 2 4 3 5 1
6 5 4 3 2 1
```

##### Sample Output 1

```
No
```



##### Sample Input 2

```
3
1 2 3 4 5 6
6 5 4 3 2 1
5 4 3 2 1 6
```

##### Sample Output 2

```
Yes
```



##### 問題を解く







### About Aizu

**University of Aizu**

| University of Aizu Official Web Page |
| :----------------------------------- |
| https://www.u-aizu.ac.jp/            |



| University of Competitive Programming Club |
| ------------------------------------------ |
| http://www.u-aizu.ac.jp/circles/acpc/      |



 *Aizu Online Judge 2.0 © 2004-2017 University of Aizu*