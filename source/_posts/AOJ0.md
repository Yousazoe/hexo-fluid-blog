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
    cin>>a[0]>>a[1]>>a[2];
    sort(a,a+3);
    cout<<a[0]<<" "<<a[1]<<" "<<a[2]<<endl;
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

#### ITP1_4_A/B Problem

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



```c++

```















### About Aizu

**University of Aizu**

| University of Aizu Official Web Page |
| :----------------------------------- |
| https://www.u-aizu.ac.jp/            |



| University of Competitive Programming Club |
| ------------------------------------------ |
| http://www.u-aizu.ac.jp/circles/acpc/      |




<div align=center>
  <font size="3">
    <i> Acknowledgement <br/> 
      <a href="https://www.behance.net/MChahin">Mohamed Chahin</a>
    </i>
  </font>
</div>



