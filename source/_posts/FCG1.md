---
title: Foundations of Computer Graphics Unit1
abbrlink: 301329c
date: 2020-12-06 11:00:02
tags:
  - Computer Graphics
  - Mooc
categories: [计算机基础(Computer Basic),计算机图像学(Foundations of Computer Graphics)]
index_img:
banner_img: https://tva1.sinaimg.cn/large/0081Kckwgy1gldye06tlhj31hc0u0weo.jpg
comment:
sticky:
---



本文将在上节课向量和矩阵概念的基础上介绍关于这些变换的数学知识，理解计算机图形学中基本变换的概念。

<!--more-->

### Transforms



> + Many different coordinate systems in graphicsWorld, model, body, arms, … 
> + To relate them, we must transform between them 
> + Also, for modeling objects. I have a teapot, but
>   + Want to place it at correct location in the world
>   + Want to view it from different angles (HW 1) 
>   + Want to scale it to make it bigger or smaller 
> + Demo of HW 1 



在计算机图形学中经常会接触到许多不同的坐标系统，可能是一个世界坐标系，还可能有一个为世界上某个角色创建的坐标系。为了将它们关联起来，我们必须在不同的坐标系间变换。这种变换非常频繁，当有一个手臂的几何模型、躯干的几何模型、头部的几何模型，需要做的就是把它们都变换到一个共同的坐标系下，并且将它们放置在世界中合适的位置。

坐标变换对于建模尤为重要，因为很多时候在模型系统中已经创建好了一个茶壶，但是你现在想将它放置在世界某个正确的位置，你需要放缩到合适的尺寸，从不同的角度去观察它。

#### 目标

> + This unit is about the math for these transformations
>   + Represent transformations using matrices and matrixvector multiplications. 
> + Demos throughout lecture: HW 1 and Applet 
> + Transformations Game Applet
>   + Brown University Exploratories of Software  
>   + http://www.cs.brown.edu/exploratories/home.html 
>   + Credit: Andries Van Dam and Jean Laleuf



本单元介绍关于这些变换的数学知识。在前面的章节，我们介绍了向量和矩阵的概念，所有的变换使用矩阵来表达，可表示为矩阵向量的乘积。



#### 基本内容

> + Object in model coordinates
> + Transform into world coordinates
> + Represent points on object as vectors
> + Multiply by matrices
> + Demos with applet 



一般，我们得到的物体是在模型坐标系下的，我们将把物体变换到世界坐标系。电荷物体模型用向量表示，它们被乘以对应不同的变换的矩阵。



> + 2D transformations: rotation, scale, shear 
> + Composing transforms 
> + 3D rotations
> + Translation: Homogeneous Coordinates (next time)
> + Transforming Normals (next time)



这部分将会处理二维变换：旋转、缩放和错切。本讲后面部分会讨论其他有趣的问题比如组合变换、三维旋转。这些内容将会用来处理齐次坐标，这是计算机图形学的重大突破，我们使用这种方法处理法向变换和遮挡。



#### 缩放变换

> $Scale(s_x,s_y)= \begin{pmatrix}s_x & 0 \\\\ 0 & s_y \end{pmatrix} \qquad S^{-1} = \begin{pmatrix} s_x^{-1} & 0 \\\\ 0 & s_y^{-1}\end{pmatrix}$
>
> $\begin{pmatrix}s_x & 0 & 0 \\\\ 0 & s_y & 0 \\\\ 0 & 0 & s_z\end{pmatrix}\begin{pmatrix}x \\\\ y \\\\ z\end{pmatrix}=\begin{pmatrix}s_xx \\\\ s_yy \\\\ s_zz\end{pmatrix}$



我们首先讨论缩放变换。缩放可以是非均匀的，X方向的缩放和Y方向的缩放可以是不同的。相应的缩放矩阵是一个对角矩阵，矩阵的相应行标注了放大的倍数。这里的$s_x$和$s_y$分别表示X方向和Y方向的放大倍数，因此X坐标乘以$s_x$、Y坐标乘以$s_y$。

这个缩放的逆操作就是简单地用X坐标和Y坐标分别乘以$s_x$和$s_y$的倒数，也就是$s_x^{-1}$和$s_y^{-1}$。如果进行我们感兴趣的三维空间缩放，只要分别讲坐标乘以相应地缩放系数$s_x$、$s_y$、$s_z$。



#### 错切变换

> $Shear=\begin{pmatrix}1 & a \\\\ 0 & 1\end{pmatrix} \qquad S^{-1}=\begin{pmatrix}1 & -a \\\\ 0 & 1\end{pmatrix}$



接下来我们谈谈错切。通过错切你可以将一个矩形变换成一个平行四边形：矩形的顶部向右移动，矩形的底部向左移动。一般情况下，中心线上不发生错切。

错切矩阵是什么样子呢？X坐标值依赖于Y坐标，因此如果Y坐标+1，那么变换后的X坐标将会加上a，即向前移动a的距离；如果Y坐标是-1，那么X坐标将会减a。因此错切可以写成：Y坐标不发生变化（$y=y'$），因此矩阵的第二行就是$[0,1]$；然而矩阵的第一行，$x$变换后的值$x'$等于之前的值加上a乘以Y坐标的值（$x'=x+ay$），这也是错切的基本方程。

错切的逆变换就是将a变为-a，错切公式不变。



![](https://tva1.sinaimg.cn/large/0081Kckwgy1glflr2ytjbj30go07fjri.jpg)



#### 旋转变换

> + 2D simple, 3D complicated. [Derivation? Examples?] 
>
> + 2D? 
>
>   $\begin{bmatrix}x' \\\\ y'\end{bmatrix}=\begin{bmatrix}\cos\theta & -\sin\theta \\\\ \sin\theta & \cos\theta \end{bmatrix}\begin{bmatrix}x \\\\ y\end{bmatrix}$
>
>   $R(X+Y)=R(X)+R(Y)$
>
> + Linear 
>
> + Commutative 



现在我们来讨论二维旋转变换。对于旋转变换而言，像其它变换一样它们也是矩阵，该矩阵使得X方向和Y方向的变换叠加，相当于先在X方向旋转再在Y方向旋转。如果物体上某个位置可以表示成物体质心加上一个位移量，那么旋转它等价于旋转质心然后旋转这个位移，因此你可以将它们叠加。

旋转变换是一个线性的操作，在二维的情况下它们是可交换的，交换旋转的顺序对于结果没有影响，三维空间则不然。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glfpny93dzj30ba0a3mx6.jpg)

接下来的问题是，二维旋转矩阵是什么样子？用极坐标非常简单：

> $o = (r\cos\theta,r\sin\theta)$
>
> $o'=(r\cos{(\phi+\theta)}),r\sin{(\phi+\theta)}))$

为了放到笛卡尔坐标系下，我们需要使用标准的三角公式展开：

> $\cos{(\phi+\theta)}=\cos{\phi}\cos{\theta}-\sin{\phi}\sin{\theta}$
>
> $\sin{(\phi+\theta)}=\sin{\phi}\cos{\theta}+\cos{\phi}\sin{\theta}$
>
> $O'_x=r\cos{\phi}(O_x)\cos{\theta}-r\sin{\phi}(O_y)\sin{\theta}=x\cos{\theta}-y\sin{\theta}$





![](https://tva1.sinaimg.cn/large/0081Kckwgy1glfpma91gtj30sg0lc75d.jpg)



#### 组合变换

我们经常需要将变换组合起来，比如你需要对自己的模型在X方向放大2倍，然后旋转45度。

> + Often want to combine transforms 
>
> + E.g. first scale by 2, then rotate by 45 degrees 
>
> + Advantage of matrix formulation: All still a matrix 
>
> + Not commutative!! Order matters 



矩阵的优点是你可以使用这些矩阵进行单独的操作，连接矩阵只是矩阵相乘，因此多个变换仍然是一个矩阵。然而，重要的是我们要知道连接矩阵不是可交换的，因为矩阵乘法不具有交换性。



> $x_3=Rx_2 \qquad x_2=Sx_1$
>
> $x_3=R(Sx_1)=(RS)x_1$
>
> $x_3\neq SRx_1$



组合旋转和旋转变换，从某个初始位置$x_1$开始，你可以先对它进行缩放，假设这个矩阵为$S$，缩放后的新位置是$x_2$；接着对$x_2$进行旋转，旋转矩阵是$R$得到$x_3$。因为矩阵的乘法满足结合律，因此这部分等于旋转矩阵$R$乘以缩放矩阵$S$的结果再乘以$x_1$。我们得到一个合成的变换矩阵：$R*S$。

我们可以交换顺序吗？矩阵乘法不可交换，如果按照相反的顺序做旋转和缩放，结果就会改变。先做旋转再做缩放和错切相似。



> + Say I want to invert a combination of 3 transforms 
>
> + Option 1: Find composite matrix, invert 
>
> + Option 2: Invert each transform **and swap order** 
>
> + Obvious from properties of matrices, demo 
>
> $M=M_1M_2M_3$
>
> $M^{-1}=M_3^{-1}M_2^{-1}M_1^{-1}$
>
> $M^{-1}M=M_3^{-1}(M_2^{-1}(M_1^{-1}M_1)M_2)M_3$



最后我们想做的是做一个组合变换的逆变换。假设我们有2到3个变换：缩放、旋转和平移，该如何对它逆变换使它返回到初始的正确位置呢？有两种方法可以尝试：求出所有这些单个矩阵的乘积然后使用通用的逆矩阵求解过程求出这个结果矩阵的逆矩阵；另一种方法你可以单独求出每一个矩阵的逆矩阵，但需要注意求连乘矩阵的逆需要求出每个矩阵的逆然后逆序防止这些矩阵。



#### 三维旋转

现在我们来讨论三维旋转。



> Review of 2D case 
>
> $\begin{bmatrix}x' \\\\ y'\end{bmatrix}=\begin{bmatrix}\cos\theta & -\sin\theta \\\\ \sin\theta & \cos\theta \end{bmatrix}\begin{bmatrix}x \\\\ y\end{bmatrix}$
>
> Orthogonal? $R^TR=I$



回顾一下二维旋转，对于这个矩阵有一个重要的性质没有提到--旋转矩阵是正交的。更直接的说，R的转置（$R^T$）乘以R等于单位矩阵I。

> $\begin{pmatrix}\cos & \sin \\\\ -\sin & \cos\end{pmatrix}\begin{pmatrix}\cos & -\sin \\\\ \sin & \cos\end{pmatrix}=\begin{pmatrix}1 & 0 \\\\ 0 & 1\end{pmatrix}$





> Rotations about coordinate axes simple 
>
> $R_z=\begin{pmatrix}\cos & -\sin & 0 \\\\ \sin & \cos & 0 \\\\ 0 & 0 & 1\end{pmatrix} \qquad R_x = \begin{pmatrix}1 & 0 & 0 \\\\ 0 & \cos & -\sin \\\\ 0 & \sin & \cos \end{pmatrix}$
>
> $R_y=\begin{pmatrix}\cos & 0 & \sin \\\\ 0 & 1 & 0 \\\\ -\sin & 0& \cos\end{pmatrix}$
>
> Always linear, orthogonal                 $R^TR=I$
>
> + Rows/cols orthonormal            $R(X+Y)=R(X)+R(Y)$ 

现在我们考虑三维空间中关于坐标轴的旋转。二维旋转可以看作是绕着Z轴的特殊旋转，因为Z轴保持不变。



> + Rows of matrix are 3 unit vectors of new coord frame 
>
> + Can construct rotation matrix from 3 orthonormal vectors 
>
> $R_{uvw}=\begin{pmatrix}x_u & y_u & z_u \\\\ x_v & y_v & z_v \\\\ x_w & y_w & z_w\end{pmatrix} \qquad u=x_uX+y_uY+z_uZ$
>
> $R_p=\begin{pmatrix}x_u & y_u & z_u \\\\ x_v & y_v & z_v \\\\ x_w & y_w & z_w\end{pmatrix}\begin{pmatrix}x_p \\\\ y_p \\\\ z_p\end{pmatrix}=?$

 

我们可以把矩阵的每一行当作一个新的单位向量，向量u是新坐标系的坐标轴。由此得出，当给定了3个正交向量，正交意味着向量u点乘向量v等于0、向量u点乘向量w等于0、向量v点乘向量w等于0，并且u，v，w都是单位向量。所以给定任意的这样三个向量，就可以确定标准的XYZ坐标系下的一个旋转，通过这些向量我们可以构建一个旋转矩形。



> + Rows of matrix are 3 unit vectors of new coord frame 
>
> + Can construct rotation matrix from 3 orthonormal vectors 
> + Effectively, projections of point into new coord frame 
> + New coord frame uvw taken to cartesian components xyz 
> + Inverse or transpose takes xyz cartesian to uvw



还有一种有趣的思考方式，就是旋转矩阵乘以点的形式。我们可以用这种方式写下这个旋转矩阵：$\begin{pmatrix}u \\\\ v \\\\ w\end{pmatrix}p=\begin{pmatrix}u \cdot p \\\\ v \cdot p \\\\ w \cdot p\end{pmatrix}$。因此，实际上我们做的仅仅是把点p映射到新的坐标系里，这是一个非常简单的三维旋转的解释：在一个坐标系下得到了p的点积。

这是一个很有用的性质，这个坐标可以用来表示新的u，v，w坐标并使它们等于X，Y，Z。逆变换就是使X，Y，Z的值等于u，v，w。



> + Not Commutative (unlike in 2D)!! 
> + Rotate by x, then y is not same as y then x 
> + Order of applying rotations does matter 
> + Follows from matrix multiplication not commutative
>   + R1 * R2 is not the same as R2 * R1 
> + Demo: HW1, order of right or up will matter 



三维旋转是不可交换的，当你先绕着X旋转再绕着Y轴旋转效果和先绕着Y轴旋转再绕着X轴旋转式不同的。其实这也可以从矩阵的乘法直接得出：矩阵$R_1*R_2 \neq R_2 * R_1$。



> + Rotate by an angle θ about arbitrary axis **a** 
>   + Homework 1: must rotate eye, up direction 
>   + Somewhat mathematical derivation but useful formula 
>
> + Problem setup: Rotate vector **b** by θ about **a** 
>
> + Helpful to relate **b** to X, **a** to Z, verify does right thing 
>
> + For HW1, you probably just need final formula 



在三维情况下，我们能否给出一个任意的旋转公式？绕任意一个角度（旋转的轴角 axis-angle）旋转，同样的表示方法还有欧拉角或四元数。



> + Step 1: **b** has components parallel to **a**, perpendicular
>   + Parallel component unchanged (rotating about an axis leaves that axis unchanged after rotation, e.g. rot about z) 
> + Step 2: Define **c** orthogonal to both **a** and **b**
>   + Analogous to defining Y axis 
>   + Use cross products and matrix formula for that 
> + Step 3: With respect to the perpendicular comp of **b** 
>   + Cos θ of it remains unchanged 
>   + Sin θ of it projects onto vector **c** 



#### 齐次坐标

> + *Translation: Homogeneous Coordinates*
>
> + Transforming Normals
>
> + Rotations revisited: coordinate frames
>
> + gluLookAt (quickly)



我们首先来讲平移和齐次坐标。到目前为止，我们已经处理了旋转、缩放，但我们还没处理将一个物体从一个地方移动到另一个地方的简单操作。



> + E.g. move x by +5 units, leave y, z unchanged
> + We need appropriate matrix. What is it?
>
> $\begin{pmatrix}x' \\\\ y' \\\\ z' \end{pmatrix}=\begin{pmatrix}?\end{pmatrix}\begin{pmatrix}x \\\\ y \\\\ z\end{pmatrix}=\begin{pmatrix}x+5 \\\\ y \\\\ z\end{pmatrix}$



这个矩阵是什么呢？这是一个挑战性的问题，也许有人说可以$[1 \space 0 \space \frac{5}{z}]$ 和 $\begin{pmatrix}x \\\\ y \\\\ z\end{pmatrix}$这样+5，但实际上变换矩阵是不能包含有关x、y、z的参数。

在图形学中我们通过齐次坐标的方法来解决。齐次坐标的产生时很多事情变为可能，否则的话很多事情将会非常困难。



> + Add a fourth homogeneous coordinate (w=1)
>
> + 4x4 matrices very common in graphics, hardware
>
> + Last row always 0 0 0 1 (until next lecture)
>
> $\begin{pmatrix}\end{pmatrix} = \begin{pmatrix}1 & 0 & 0 & 5 \\\\ 0 & 1 & 0 & 0 \\\\ 0 &0 & 1 & 0 \\\\ 0 & 0 & 0 &1 \end{pmatrix} \begin{pmatrix}x \\\\ y \\\\ z \\\\ 1\end{pmatrix} = \begin{pmatrix}x + 5 \\\\ y \\\\ z  \\\\ 1\end{pmatrix}$



回想起来这个想法非常简单，你只需要加入第四个齐次坐标即可。我们用w表示这第四个齐次坐标，专门用作平移变换的。可以看到 $\begin{pmatrix}1 & 0 & 0 & 5\end{pmatrix}\begin{pmatrix}x \\\\ y \\\\ z \\\\ 1\end{pmatrix}=x+5$

> Homogeneous coordinates
>
> + Divide by 4th coord (w) to get (inhomogeneous) point
>
> + Multiplication by w > 0, no effect
>
> + Assume w ≥ 0. For w > 0, normal finite point. For w = 0, point at infinity (used for vectors to stop translation)



这就是齐次坐标，通过加入一个w坐标，可以做平移变换。但事实上还可以使用齐次坐标做更多有趣的事情。

第一个问题这个齐次项来自何处？本质上，点的非齐次坐标是通过除以w给定的，所以实际上$P=\begin{pmatrix}x \\\\ y \\\\ z \\\\ w\end{pmatrix}=\begin{pmatrix}x/w \\\\ y/w \\\\ z/w \\\\ 1\end{pmatrix}$。一个重要的推论是四维齐次坐标的任何常量缩放会得到相同的结果。事实上，它包含点的非齐次坐标的所有可能缩放。在前面我们假设w=1，事实上w可以等于任何数值，如果w=0，这表示一个无穷远处的点。在实际应用中w等于0通常用来表示一个向量，矩阵不会对向量产生平移的效果。



> + Unified framework for translation, viewing, rot…
>
> + Can concatenate any set of transforms to 4x4 matrix
>
> + No division (as for perspective viewing) till end
>
> + Simpler formulas, no special cases
>
> + Standard in graphics software, hardware



齐次坐标的优点首先是它是我们考虑的所有变换的一个统一框架，这些变换包括平移、观察、旋转以及后面要讲到的透视投影。这意味着整个渲染管线都以这个$4\times4$的齐次坐标矩阵及其对应的四维向量为基础，只有在最后一步表示屏幕上真实点的位置的时候才需要把齐次变为非齐次。实际上，所有这些变换都可以通过齐次坐标联系起来，我可以移动我的模型、旋转它、缩放它、平移它、观察它......所有这些都是一个单一的$4\times4$的矩阵。

在计算机里除法是一个非常复杂的操作，相比于加法或乘法它花费更多的时钟周期，但除法却非常基础，所以如果你考虑透视投影，你可能看到远处的物体看起来更小，因此不得不除以深度。齐次坐标的优点就是只需在渲染管线的最后一步做一次除法将齐次坐标转换为非齐次，中间没有任何除法操作。

由于以上这些原因，4阶矩阵和齐次坐标是计算机图形软件和硬件中普遍使用的标准。



> $T=\begin{pmatrix}1 & 0 & 0 & T_x \\\\ 0 & 1 & 0 & T_y \\\\ 0 & 0 & 1 & T_z \\\\ 0 & 0 & 0 & 1\end{pmatrix}=\begin{pmatrix}I_3 & T \\\\ 0 & 1\end{pmatrix}$
>
> $P'=TP=\begin{pmatrix}1 & 0 & 0 & T_x \\\\ 0 & 1 & 0 & T_y \\\\ 0 & 0 & 1 & T_z \\\\ 0 & 0 & 0 & 1\end{pmatrix}\begin{pmatrix}x \\\\ y \\\\ z \\\\ 1\end{pmatrix}=\begin{pmatrix}x+T_x \\\\ y + T_y \\\\ z + T_z \\\\ 1\end{pmatrix}=P+T$



这里没有施加旋转，当单位矩阵作用到x，y，z时不变，这正是我们希望的结果。矩阵的右上部分是我们的平移向量，实际上是一个点加上一个平移向量。当考虑旋转和平移把$4\times4$矩阵写成这种形式很方便。



> + Order matters!! TR is not the same as RT (demo)
>
> + General form for rigid body transforms
>
> + We show rotation first, then translation (commonly used to position objects) on next slide. Slide after 
>
> that works it out the other way 
>
> + Demos with applet
>
> $P'=(TR)P=MP=RP+T$
>
> $P'=(RT)P=MP=R(P+T)=RP+RT$



#### 法向变换



> + Important for many tasks in graphics like lighting
> + Do not transform like points e.g. shear
> + Algebra tricks to derive correct transform



> $t \to Mt \qquad n \to Qn \qquad Q=?$
>
> $n^Tt=0$
>
> $n^TQ^TMt=0 \to Q^TM=I$
>
> $Q=(M^{-1})^T$



#### 旋转和坐标



> + All of discussion in terms of operating on points
>
> + But can also change coordinate system 
>
> + Example, motion means either point moves backward, or coordinate system moves forward





> + Can differ both origin and orientation (e.g. 2 people)
>
> + One good example: World, camera coord frames (H1)



> + Rows of matrix are 3 unit vectors of new coord frame
>
> + Can construct rotation matrix from 3 orthonormal vectors





#### 推导gluLookAt



> Defines camera, fundamental to how we view images
>
> + gluLookAt(eyex, eyey, eyez, centerx, centery, centerz, upx, upy, upz) 
>
> + Camera is at eye, looking at center, with the up direction being up
>
> + May be important for HW1
>
> + Combines many concepts discussed in lecture
>
> + Core function in OpenGL for later assignments





> + gluLookAt(eyex, eyey, eyez, centerx, centery, centerz, upx, upy, upz)
>
> + Camera is at eye, looking at center, with the up direction being up
>
> + *First, create a coordinate frame for the camera*
>
> + Define a rotation matrix
>
> + Apply appropriate translation for camera (eye) location



> We want to associate **w** with **a**, and **v** with **b** 
>
> + But **a** and **b** are neither orthogonal nor unit norm
>
> + And we also need to find **u**
>
> 
>
> + We want to position camera at origin, looking down –Z dirn
>
> + Hence, vector **a** is given by **eye** – **center**
>
> + The vector **b** is simply the **up** vector



> + Rows of matrix are 3 unit vectors of new coord frame
>
> + Can construct rotation matrix from 3 orthonormal vectors





### Viewing

#### 正交投影





#### 透视投影





#### gluPerspective

