---

title: OnOff-Unity2D游戏开发
abbrlink: 2445f889
date: 2020-12-09 23:34:48
tags:
  - Unity
  - 2D Game
  - Game Develop
categories: [游戏引擎(Game Engine),Unity]
index_img:
banner_img: https://tva1.sinaimg.cn/large/0081Kckwgy1gli1b0wag8j311x0j60t7.jpg
comment:
sticky:
---



本文将使用Unity2D引擎制作一款2D横版跳跃类游戏。

<!--more-->



### 项目介绍

#### 项目架构

+ 玩家 `PlayerController.cs`
+ 游戏功能 `GameManager.cs`
+ 转换颜色 `SwitchColor.cs`
+ 地板 `Ground.cs`
+ 终点 `Goal.cs`



#### 玩家功能

##### 按左右键进行移动

+ 侦测左右键输入
  + `float h = Input.GetAxisRaw("Horizontal")`
  + 不按键，`h=0`；按右键，`h=1`；按左键，`h=-1`
+ 实际移动
  + 修改速度 `rb.velocity`
  + 只修改`x`方向速度
  + `rb.velocity=new Vector2(moveSpeed*h,rb.velocity.y)`

+ 角色面向随行走方向改变
  + 通过改变`transform.localScale.x`实现
+ 角色动画
  + 站立、行走、跳跃三个动画之间的转换

##### 向上进行跳跃

+ 向上施加力
+ 不能在空中跳跃
  + 判断是否踩在地板上 `isGround`







### 核心功能搭建



#### 角色控制

##### 变量声明

我们首先声明一些变量：

+ `moveSpeed`：玩家移动速度
+ `jumpForce`：玩家跳跃速度
+ `rb`：玩家物理组件
+ `anim`：玩家动画组件



```c#
public float moveSpeed;
public float jumpForce;

private Rigidbody2D rb;
private Animator anim;  
```



声明变量之后我们先在`Start()`中获取这些组件，需要注意的是动画组件是用获取子物件的`GetComponentInChildren<Animator>()`

```c#
// Start is called before the first frame update
void Start()
{
  rb = GetComponent<Rigidbody2D>();
  anim = GetComponentInChildren<Animator>();
}
```



##### 横向移动实现



这里使用`GetAxisRaw`而不是`GetAxis`的原因是如果我们使用`GetAxis`按键松手后h会慢慢过渡回0，而`GetAxisRaw`是瞬时变化为0。

移动的实现我们选择`rb.velocity`，`Vector2()`中的`h * moveSpeed`代表了方向乘以移动速度，这样如果按下左键`h = -1`就会向左移动；如果按下右键`h = 1`则向右移动；没有输入则保持不动。



```c#
// Update is called once per frame
void Update()
{
  //right h =1
  //left h = -1
  //no input h = 0
  //GetAxis GetAxisRaw
  float h = Input.GetAxisRaw("Horizontal");

  rb.velocity = new Vector2(h * moveSpeed,rb.velocity.y);

}   
```



回到Unity，在`PlayerController.cs`脚本中设定`moveSpeed`，测试角色可以正常移动。但相比其他平台跳跃类游戏，我们的角色移动时的朝向并不会改变，所以我们需要接着修改。        



##### 移动朝向

朝向问题其实不难解决，我们可以先尝试修改一下角色`Transform`组件中的`Scale`，不难发现向右时为1；向左时为-1。这时候联想一下刚才的`h`，赋值属性非常契合。

在代码中我们需要考虑没有输入的情况，如果依然随着`h`，那么角色会被压缩到无，所以需要加入判断`if (h != 0)`，然后在判断内通过对`Scale`赋值为`h`来改变朝向。



```c#
// Update is called once per frame
void Update()
{
  ......
	if (h != 0)
  {
  	transform.localScale = new Vector3(h,1,1);
  }
}   

```



回到Unity测试，角色已经可以随着移动方向改变而改变朝向。



##### 跳跃

通常来讲一般和物理相关都需要写在`FixedUpdate()`里，但我们这个小游戏没有很吃性能，所以就写在`Update()`里面了。

如果按下上键，那么我们会给`Rigidbody2D`添加一个方向向上、大小为`jumpForce`，施力模式向`ForceMode2D.Impulse`是此 `rigidbody2D` 添加瞬时力冲击。



```c#
// Update is called once per frame
void Update()
{
  ......
  if (Input.GetKeyDown(KeyCode.UpArrow))
  {
    rb.AddForce(Vector3.up * jumpForce,ForceMode2D.Impulse);
  }
}   
```



返回Unity，设置调整`jumpForce`数值，测试角色跳跃。

但如果多测试几次就会发现，角色可以在空中进行多次跳跃，也就是所谓的“无限跳”。对于这个问题，我们其实只需要判断 **角色的脚底是否是地板** 就可以了，而踩在地板这个条件则可以通过标签进行判断，如果角色脚底是地板则可以进行跳跃操作，否则则不能跳跃。

所以我们在`Player`上创建子物件`GroundCheck`移到角色脚底，作用就是检测角色是否碰到地板。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glppevonu5j30lh0b4dg5.jpg)



回到程式我们需要找到这个检测物件`GroundCheck`，所以首先在前面声明变量：

```c#
public class PlayerController : MonoBehaviour
{
	......
	public Transform groundCheck;
	......
}
```



然后回到跳跃的判断，加入判断函数`isGround()`来判断我们是否踩在地板上：

```c#
- if (Input.GetKeyDown(KeyCode.UpArrow))
+ if (Input.GetKeyDown(KeyCode.UpArrow) && IsGround())
{
  rb.AddForce(Vector3.up * jumpForce,ForceMode2D.Impulse);
  AudioManager.S.PlayPlayerSFX(0);
}
```



编写判断函数`isGround()`，这里`Physics2D.CircleCast(transform.position,0.3f,Vector2.down,0.35f,whatIsGround)`的意思是我们画一个圆在物件本身的位置上，向下0.35个单位画一个半径为0.3的圆，这个圆将只会和被我们判定成`Ground`的图层碰撞。如果`hit`碰撞到返回`true`，否则返回`false`。

```c#
bool IsGround()
{
	RaycastHit2D hit = Physics2D.CircleCast(transform.position,0.3f,Vector2.down,0.35f,whatIsGround);

	return hit;
}
```

这样写就不需要`groundCheck`了，我们删除之前设置的变量和空物件，改为获取图层`LayerMask`：

```c#
public class PlayerController : MonoBehaviour
{
	......
	- public Transform groundCheck;
  + public LayerMask whatIsGround;
	......
}
```



回到Unity设置检测图层为`Ground`：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glr6d7070ij30c0052767.jpg)



##### 动画连接

Move部分是由`Move`这个Parameter判断的，0播放Player_Idle；1播放Player_Move。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glr6hlcranj30ud0cjmyv.jpg)



可以发现动画播放和`h`的关联性，但因为有-1的关系需要取绝对值`Mathf.Abs()`，这样左右移动取值均为1。

```c#
// Update is called once per frame
void Update()
{
	......
  anim.SetFloat("Move",Mathf.Abs(h));
  anim.SetBool("isGround",IsGround());
}
```

回到Unity，测试站立、移动和跳跃的动画。



##### 整理

对我们`PlayerController.cs`的代码稍加整理，添加一些注释：

```c#
// Update is called once per frame
void Update()
{
  // Move
  //right h =1 left h = -1 no input h = 0
  //GetAxis GetAxisRaw
  float h = Input.GetAxisRaw("Horizontal");
  rb.velocity = new Vector2(h * moveSpeed,rb.velocity.y);

  //Change Face Direction
  if (h != 0)
  {
    transform.localScale = new Vector3(h,1,1);
  }

  //Apply Jump
  if (Input.GetKeyDown(KeyCode.UpArrow) && IsGround())
  {
    rb.AddForce(Vector3.up * jumpForce,ForceMode2D.Impulse);
    AudioManager.S.PlayPlayerSFX(0);
  }

  //Set Animator
  anim.SetFloat("Move",Mathf.Abs(h));
  anim.SetBool("isGround",IsGround());
}
```



#### 颜色转换

这部分我们来实现游戏的核心功能：颜色转换的部分。首先为所有需要颜色转换功能的物件（玩家、地板等等）新建一个共同的脚本命名为`SwitchColor.cs`，同时因为这是游戏的核心功能，所以我们新建一个`GameManager.cs`来进行管理。

为了确保`GameManager`游戏管理者有且仅有一个，我们使用单例模式：

```c#
public class GameManager : MonoBehaviour
{
	public static GameManager S;
	
	private void Awake()
  {
  	S = this;
  }
}
```



`SwitchAllColor()`函数用于抓取场景所有有`SwitchColor`，同时设置数组存储这些物体：

```c#
private SwitchColor[] colorObjs;
public void SwitchAllColor(){}
```



而`colorObjs`则在开始时的`Start()`中获取，保存在`SwitchColor[]`中：

```c#
void Start()
{
	colorObjs = FindObjectsOfType<SwitchColor>();
}
```



回到`SwitchAllColor()`中遍历数组呼叫里面的`SwichObjColor()`函数：

```c#
public void SwitchAllColor()
{
  + foreach (SwitchColor colorObj in colorObjs)
  + {
  + 	colorObj.SwichObjColor();
  + }
}
```



新建`SwitchColor.cs`，声明之前在`GameManager.cs`调用的`SwichObjColor()`。因为这个脚本需要同时满足玩家、地板、背景、UI等的颜色变换需求，所以我们用枚举的方式区分不同的类别，然后根据枚举的类型决定颜色转换的方式：

对于玩家而言，颜色的改变只需要将`spriteRender`中的颜色改变即可；而地板则需要考虑碰撞体的激活问题；背景则由相机的`Background`来控制；`image`和`text`之后会用于UI的颜色转换。

```c#
public class SwitchColor : MonoBehaviour
{
	public void SwichObjColor(){}
}

public enum ComponentType
{
   player,spriteRender,image,text,camera,ground
}
```



回到Unity对相应物件的组件类型`ComponentType`进行赋值。返回`SwitchColor.cs`，声明作为选项的组件类型和变换前后的两种颜色：

```c#
public class SwitchColor : MonoBehaviour
{
    + public ComponentType componentType;
    + public Color startColor;
    + public Color endColor;
  
  ......
}
```





有了上面的变量，我们就可以根据不同的组件类型利用`Switch`对转换颜色进行分支操作：

+ `player`：获取精灵渲染器改变颜色，`color == startColor ? endColor : startColor`做一个颜色的翻转
+ `spriteRender`：同`player`
+ `image`：涉及UI部分需要引入`using UnityEngine.UI`
+ `text`：同`image`
+ `camera`：同`player`
+ `ground`：在`player`的基础上对是否启用`BoxCollider2D`进行翻转

```c#
public void SwichObjColor()
{
  switch (componentType)
  {
    case ComponentType.player:
      {
        //if black
        //change to white
        //else
        //change to black
        GetComponentInChildren<SpriteRenderer>().color =
          GetComponentInChildren<SpriteRenderer>().color == startColor ? endColor : startColor;
        break;
      }

    case ComponentType.spriteRender:
      {
        GetComponent<SpriteRenderer>().color =
          GetComponent<SpriteRenderer>().color == startColor ? endColor : startColor;
        break;
      }

    case ComponentType.image:
      {
        GetComponent<Image>().color =
          GetComponent<Image>().color == startColor ? endColor : startColor;
        break;
      }

    case ComponentType.text:
      {
        GetComponent<Text>().color =
          GetComponent<Text>().color == startColor ? endColor : startColor;
        break;
      }

    case ComponentType.camera:
      {
        Camera.main.backgroundColor = Camera.main.backgroundColor == startColor ? endColor : startColor;
        break;
      }

    case ComponentType.ground:
      {
        GetComponent<BoxCollider2D>().enabled = !GetComponent<BoxCollider2D>().enabled;

        GetComponentInChildren<SpriteRenderer>().color =
          GetComponentInChildren<SpriteRenderer>().color == startColor ? endColor : startColor;
        break;
      }
  }
}
```



回到`PlayerController.cs`，在`Update()`函数中调用`GameManager.cs`中的`SwitchAllColor()`，再经由此跳转到`SwitchColor.cs`中的`SwichObjColor()`方法：

```c#
// Update is called once per frame
void Update()
{
  ......

  //Switch Color
  if (Input.GetKeyDown(KeyCode.Space))
  {
  	GameManager.S.SwitchAllColor();
	}
}
```



回到Unity，对组件的起始、结束的颜色进行赋值，注意透明度调至255：

| ComponentType | startColor  | endColor    |
| :------------ | :---------- | :---------- |
| Main Camera   | 255 255 255 | 0 0 0       |
| Player        | 0 0 0       | 255 255 255 |
| BlackGround   | 51 51 51    | 71 71 71    |
| WhiteGround   | 235 235 235 | 255 255 255 |

测试颜色转换功能：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glrbjvxjkaj311w0it0t5.jpg)

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glrbki061lj311v0isjrs.jpg)



#### 死亡及死亡特效



![](https://tva1.sinaimg.cn/large/0081Kckwgy1glr5tlnd9wj310g0kq0v6.jpg)



![](https://tva1.sinaimg.cn/large/0081Kckwgy1glr5vor43ej310g0kq0va.jpg)











```c#
//Switch Color
if (Input.GetKeyDown(KeyCode.Space))
{
  GameManager.S.SwitchAllColor();

  + if (insideBlock)
  + {
  +	 Die();
  + }
}
```



```c#
void Update()
{
  ......
	+ if (transform.position.y < seftDestructionHeight && sr.enabled)
  + {
  + 	Die();
  + }
}  
```





```c#
public void Die()
{
  GameManager.S.PlayerDie();
  sr.enabled = false;
  GetComponent<BoxCollider2D>().enabled = false;

  GameObject dfx = Instantiate(deadEffect, transform.position, Quaternion.identity);
  Destroy(dfx,2f);
}
```





#### 加载关卡







![](https://tva1.sinaimg.cn/large/0081Kckwgy1glrckakqhsj30mf0bx74v.jpg)



为目标添加`Goal.cs`：

+ `OnTriggerEnter2D(Collider2D collision)`：检测碰撞玩家，播放动画；为防止再次触发过关手动把`CircleCollider2D`关掉
+ `ToNextStage()`：调用`GameManager`中的`NextStage()`函数进入下一关
+ `EnableCollider()`：将碰撞体激活



```c#
using UnityEngine;

public class Goal : MonoBehaviour
{
    public void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.CompareTag("Player"))
        {
            GetComponent<Animator>().SetTrigger("Goal");
            GetComponent<CircleCollider2D>().enabled = false;
        }
    }

    public void ToNextStage()
    {
        GameManager.S.NextStage();
    }

    public void EnableCollider()
    {
        GetComponent<CircleCollider2D>().enabled = true;
    }
}
```



回到`GameManager.cs`编写进入关卡的逻辑，直接调用`SceneManager`读取我们的关卡数，+1后就是下一关。

```c#
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    + public void NextStage()
    + {   
    +    SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex + 1);
    + }
}
```



回到Unity将结束动画中最后帧中的`Function`赋值给`ToNextStage()`以触发：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glrcugvl4gj30bq05j74i.jpg)

​	



#### 用户界面及数据继承

搭建UI组件，放入素材中的图片，挂载颜色转换脚本`SwitchColor.cs`同时将类型更改为`Image`或`Text`：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glrx0hlcfdj30tx0bv0tt.jpg)



为了便于管理，我们新建一个管理UI的脚本`UIManager.cs`。

首先像之前一样使用单例模式创建一个UIManager，再声明两个`Text`类型的变量（死亡数和星星数），最后声明两个` Refresh`刷新函数用于接收新数据并更新UI界面的数据：

```c#
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    public static UIManager S;

    private void Awake()
    {
        S = this;
    }

    public Text skullText;
    public Text startText;

    public void RefreshSkullText(int amount)
    {
        skullText.text = amount.ToString();
    }

    public void RefreshStarText(int amount)
    {
        startText.text = amount.ToString();
    }
}
```



回到`GameManager.cs`新增统计死亡数和星星数的变量：

```c#
public class GameManager : MonoBehaviour
{
		......
    + public static int deadCount;
    + public static int starCount;
    ......
}    
```

分别在死亡和过关的函数中计数并调用UIManager：

```c#
public void PlayerDie()
{
  + deadCount++;
  + UIManager.S.RefreshSkullText(deadCount);

  StartCoroutine(PlayerRevive());
}

public void NextStage()
{
  + starCount++;
  + UIManager.S.RefreshStarText(starCount);

  SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex + 1);
}
```



最后在`Star()`函数中调用刷新函数确保数据能够刷新：

```c#
void Start()
{
  colorObjs = FindObjectsOfType<SwitchColor>();

  + UIManager.S.RefreshSkullText(deadCount);
  + UIManager.S.RefreshStarText(starCount);
}
```







#### 音乐与音效





```c#
using UnityEngine;

public class AudioManager : MonoBehaviour
{
    public static AudioManager S;
    private void Awake() 
    {
        if (S == null) 
        {
            S = this;
        }
        else
        {
            Destroy(gameObject);
        }
    }
    
    public AudioSource playerAudio;
    public AudioSource stageAudio;

    public AudioClip[] playerSfx;
    public AudioClip[] stageSfx;
    
    // Start is called before the first frame update
    void Start()
    {
        DontDestroyOnLoad(gameObject);
    }

    public void PlayPlayerSFX(int index)
    {
        playerAudio.clip = playerSfx[index];
        playerAudio.Play();
    }
    
    public void PlayStageSFX(int index)
    {
        stageAudio.clip = stageSfx[index];
        stageAudio.Play();
    }
}
```









### 效果完善总结

#### 开始界面



![](https://tva1.sinaimg.cn/large/0081Kckwgy1glrdc6meqlj310a0kptbf.jpg)



#### 残影效果

##### 代码逻辑

我们首先需要声明一些变量：

+ `dashSpeed`：冲刺速度
+ `dashTime`：冲刺持续时间
+ `startDashTime`：倒计时的计时器
+ `isDashing`：冲刺状态的记录量
+ `dashObj`：保存残影物体



冲刺的逻辑是：

```c#
if(不是冲刺状态)
{
	if(按下左Shift键)
	{
		进入冲刺状态；
		启用残影对象；
		启用计时器；
	}
}
else
{
	if(还有时间剩余)
	{
		velocity向前乘以向前的冲刺速度
	}
	else
	{
		改变冲刺状态；
		隐藏残影的游戏物体；		
	}
}
```



通过上面的伪代码，我们可以轻松写出业务逻辑：

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerController : MonoBehaviour
{
		public float dashSpeed;
  	public float dashTime;
    public GameObject dashObj;
    
 		private bool isDashing;
    private float startDashTime;
    
    
    void Update()
    {
        BASIC MOVEMENT

        
        if (!isDashing)
        {
            if (Input.GetKeyDown(KeyCode.LeftShift))
            {
                dashObj.SetActive(true);
                
                isDashing = true;
                startDashTime = dashTime;
            }
        }
        else
        {
            startDashTime -= Time.deltaTime;
            if (startDashTime <= 0)
            {
                isDashing = false;
                dashObj.SetActive(false);
            }
            else
            {
                rb.velocity = transform.right * dashSpeed;
            }
        }
      
        ......
    }
}    
```



##### 粒子效果

回到Unity编辑器，新建一个空的游戏对象并为其添加一个粒子系统组件



###### 粒子系统（Particle System）主模块

Particle System 模块包含影响整个系统的全局属性。大多数这些属性用于控制新创建的粒子的初始状态。

+ `Duration`：系统运行的时间长度。取值与冲刺时间相近避免残影持续太长时间
+ `Start LifeTime`：粒子的初始生命周期。与上面同理
+ `Start Size`：每个粒子的初始大小。根据自己的大小来调整

+ `StartColor`：每个粒子的初始颜色。这里我们选择由浅绿色到浅蓝色的随机渐变
+ `Simulation Space`：控制粒子的运动位置是在父对象的局部空间中（因此与父对象一起移动）、在世界空间中还是相对于自定义对象（与您选择的自定义对象一起移动）。选择世界空间（`World`）使残影生成时留在原地，不会和角色移动有任何关系
+ `Max Particles`：系统中同时允许的最多粒子数。可以适当调小一些



###### Emission 模块

此模块中的属性会影响粒子系统发射的速率和时间。

+ `Rate over Distance`：每个移动距离单位发射的粒子数。这样粒子系统就会随距离而不是时间生成粒子



![](https://tva1.sinaimg.cn/large/0081Kckwgy1glml20r92kj311y0lcwgz.jpg)



###### Shape模块

此模块用于定义可发射粒子的体积或表面以及起始速度的方向。Shape 属性定义发射体积的形状，其余模块属性根据您选择的 Shape 值而变化。

+ `Shape`：发射体积的形状。选择圆形（`Circle`）



###### Color Over Lifetime 模块

此模块指定粒子的颜色和透明度在其生命周期中如何变化。

+ `Color`：粒子在其生命周期内的颜色渐变，渐变条的左侧点表示粒子寿命的开始，而渐变条的右侧表示粒子寿命的结束。我们这里设置渐变透明，透明度由高到低



###### Texture Sheet Animation 模块

粒子的图形不必是静止图像。此模块允许您将纹理视为可作为动画帧进行播放的一组单独子图像。

+ `Mode`：弹出菜单。2D残影选择`Sprites`模式，图片选择切分好的站立的精灵即可



![](https://tva1.sinaimg.cn/large/0081Kckwgy1glml4ev83kj311y0lc0v6.jpg)



##### 效果

最后我们按下`LeftShift`就有一个由绿到蓝的渐变透明残影的效果了：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glmky153orj30nx0amgls.jpg)





#### 尖刺和二段跳

##### 尖刺

创建一个三角形物体并拖拽至精灵文件夹`Sprites`中，命名为`Triangle`：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glnol6g2kqj304702gaa1.jpg)

制作预制体，为其添加组件`BoxCollider2D`，可以在`Edit Collider`中变更碰撞判定。在实际游戏开发中不可能将碰撞体制作修正的和本体一模一样，大部分做法是根据感觉选择一个折中的碰撞判定区域，所以我们框选一个差不多的碰撞体即可。和之前的地板一致，在初始状态下白色的尖刺碰撞体应该是取消勾选碰撞组件的。



为其添加颜色转换组件`SwitchColor.cs`：

+ `Commponent Type`：选择`Ground`，性质与`Ground`一致
+ `Start Color`：颜色`235`，`235`，`235`；透明度 `255`
+ `End Color`：颜色`255`，`255`，`255`；透明度`255`

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glnovx64ddj30bb039wen.jpg)



对于尖刺的脚本只需要附载`OnTriggerEnter2D(Collider2D collision)`，通过判断碰撞体标签是否为`Player`来判断是否碰到玩家，如果碰到则触发玩家控制器`PlayerController.cs`中的玩家死亡`Die()`即可。

```c#
public class Trap : MonoBehaviour
{
    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.gameObject.CompareTag("Player"))
        {
            FindObjectOfType<PlayerController>().Die();
        }
    }
}
```



同理我们可以复制粘贴白色尖刺，通过更改变换颜色`SwitchColor.cs`脚本的颜色和重新勾选碰撞体来制作黑色尖刺：

+ `Commponent Type`：选择`Ground`，性质与`Ground`一致
+ `Start Color`：颜色`51`，`51`，`51`；透明度 `255`
+ `End Color`：颜色`71`，`71`，`71`；透明度`255`

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glotyuw5hmj30bn0biaaz.jpg)



最后将黑白两个尖刺都拖至预制体文件夹`Prefab`中以备之后关卡搭建使用。

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glou01t6tyj30dq0443yn.jpg)





#### 项目导出

##### 分辨率

直接导出为可执行程序会导致之前设计的UI位置会发生变化，所以我们新建脚本`Resolution.cs`，固定分辨率为1024x768：

```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Resolution : MonoBehaviour
{
    void Awake()
    {
        Screen.SetResolution(1024,768,true);
    }
}
```

这里1024x768的分辨率来源是根据UI的`Canvas Scaler`中的分辨率：

![](https://tva1.sinaimg.cn/large/0081Kckwgy1glrd93hiu4j30fk049mxi.jpg)

回到Unity将其挂在到主相机`Main Camera`上，测试运行，UI就恢复了正常，回到原位。