---
title: Hexo-Fluid博客建站记录
tags:
  - Hexo
  - Fluid
  - Blog
categories: 博客搭建(Blog Building)
index_img: 
banner_img: https://tva1.sinaimg.cn/large/0081Kckwgy1glcvkpopxkj30zp0u040h.jpg
comment:
sticky:
abbrlink: e5b4d2d6
date: 2020-12-03 13:09:54
---





记录本博客Hexo-Fluid建站的全部过程，包括配置信息修改和功能拓展。

<!--more-->



### 压缩生成文件

> [hexo-all-minifier](https://github.com/chenzhutian/hexo-all-minifier)



#### 安装

```shell
npm install hexo-all-minifier --save
```

#### 使用



Just put this line in the config file of your hexo-site to enable this plugin.

```
all_minifier: true
```



### 字数统计

#### 安装

```shell
yarn add hexo-wordcount
# or
npm i --save hexo-wordcount
```

#### ejs使用

Post Count:

```html
   <span class="post-count"><%= wordcount(post.content) %></span>
```

Post Minutes to Read:

```html
   <span class="post-count"><%= min2read(post.content) %></span>
```

Total Count:

```html
   <span class="post-count"><%= totalcount(site) %></span>
```



最后添加至`~/themes/fluid/layout/_partials/footer.ejs`中即可：

```html
<footer class="text-center mt-5 py-3">
<font size="3" face="Georgia">
......
  <div>
  	<span class="post-count"><%= totalcount(site) %>&nbsp words</span>
  	......
  </div>
 </footer> 
  
```





### 简体繁体转换

不少网站为了更好地照顾不同用户使用简体/繁体的阅读习惯，会提供简体繁体两种版本字体切换，提高用户体验。例如hexo虽然作者是来自台湾的，但是hexo的官网不仅提供了适合台湾同胞阅读的繁体中文版，还提供了适合我们内地同胞阅读的简体中文版，照顾了我们这些习惯使用简体读写的大陆用户，hexo得到了不少内地忠实粉丝追捧。同样，我们也可以提供繁体版来照顾那些使用繁体字的台湾、香港同胞阅读习惯。

简体繁体切换的基本原理：首先建立一个简体字与繁体字相对应的映射表，然后遍历整个界面，把相应的简体字或者是繁体字映射为对应的字体即可。

#### 下载js文件

[点击这里](https://tding.top/js/tw_cn.js)右键另存下载或者拷贝如下的简繁字体切换所需的tw_cn.js文件，上传到`~/public/js `下。



#### 修改模板

在我们想要显示简繁转换按钮的地方添加如下代码。例如，我在 fluid 主题的布局文件 `~/themes/fluid/layout/_partials/footer.ejs` 里添加了如下代码：

```html
<div class="translate-style">
繁/简：<a id="translateLink" href="javascript:translatePage();">繁体
</a>
</div>
<script type="text/javascript" src="/js/tw_cn.js"></script>
<script type="text/javascript">
var defaultEncoding = 2; //网站编写字体是否繁体，1-繁体，2-简体
var translateDelay = 0; //延迟时间,若不在前, 要设定延迟翻译时间, 如100表示100ms,默认为0
var cookieDomain = "https://tding.top/"; //Cookie地址, 一定要设定, 通常为你的网址
var msgToTraditionalChinese = "繁体"; //此处可以更改为你想要显示的文字
var msgToSimplifiedChinese = "简体"; //同上，但两处均不建议更改
var translateButtonId = "translateLink"; //默认互换id
translateInitilization();
</script>
```

读者可以在**博客底部点击简体 / 繁体**来看具体的切换字体效果。

#### 参考

1. [三步让你的网站支持简体繁体切换](https://www.arao.me/website/hexo-support-jian-fan-language.html#more)

2. [两步让你的网站支持简体繁体切换](http://qingbo.site/2016/10/11/how-set-Chinese-Simplified-switch-to-Chinese-Traditional/)



### 添加运行时间 &访客数 & 访问量

在站点页面页脚处实时显示网站运行时间 & 自定义页脚信息。

#### 运行时间

打开 `~/themes/fluid/layout/_partials/footer.ejs`添加代码：

```html
<footer class="text-center mt-5 py-3">
<font size="3" face="Georgia">

  <%- partial('_partial/statistics.ejs') %>
  <%- partial('_partial/beian.ejs') %>

  <% if(theme.web_analytics.cnzz) { %>
    <!-- cnzz Analytics Icon -->
    <span id="cnzz_stat_icon_<%- theme.web_analytics.cnzz %>" style="display: none"></span>
  <% } %>

  <div>
    <span class="post-count"><%= totalcount(site) %>&nbsp words</span>
    <span id="timeDate">载入天数...</span>
    <span id="times">载入时分秒...</span>
    <script>
      var now = new Date();
      function createtime(){
        var grt= new Date("05/04/2020 21:02:06");//此处修改你的建站时间或者网站上线时间
        now.setTime(now.getTime()+250);
        days = (now - grt ) / 1000 / 60 / 60 / 24;
        dnum = Math.floor(days);
        hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum);
        hnum = Math.floor(hours);
        if(String(hnum).length ==1 ){
          hnum = "0" + hnum;
        }
        minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
        mnum = Math.floor(minutes);
        if(String(mnum).length ==1 ){
          mnum = "0" + mnum;
        }
        seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
        snum = Math.round(seconds);
        if(String(snum).length ==1 ){
          snum = "0" + snum;
        }
        document.getElementById("timeDate").innerHTML = "🚀 &nbsp for &nbsp"+dnum+"&nbspdays";  //此次自定义显示内容
        document.getElementById("times").innerHTML = hnum + "&nbsphr&nbsp" + mnum + "&nbspmin&nbsp" + snum + "&nbspsec";
      }  //此次自定义显示内容
      setInterval("createtime()",250);
    </script>
  </div>

</footer>


<!-- SCRIPTS -->
<%- partial('_partial/scripts.ejs') %>
```



#### 页脚信息

可以根据需要在`<foot></foot>`中加入脚本：

```html
<div class="text-center py-1">   
  <div>
    <span>Copyright © 2020</span></a>
    <a href="https://erenspace.cool/" target="_blank" rel="nofollow noopener">
     <span>Eren‘s Spaceship</span></a>    <br>
  </div>
```



#### 完整代码

由于后续加入了简体繁体转换和字数统计，所以可以在`~/themes/fluid/layout/_partials/footer.ejs`直接将代码替换成以下内容：

```html
<footer class="text-center mt-5 py-3">
<font size="3" face="Georgia">
  <div class="translate-style">
    繁/简：<a id="translateLink" href="javascript:translatePage();">繁体
    </a>
  </div>
  <script type="text/javascript" src="/js/tw_cn.js"></script>
  <script type="text/javascript">
    var defaultEncoding = 2; //网站编写字体是否繁体，1-繁体，2-简体
    var translateDelay = 0; //延迟时间,若不在前, 要设定延迟翻译时间, 如100表示100ms,默认为0
    var cookieDomain = "https://tding.top/"; //Cookie地址, 一定要设定, 通常为你的网址
    var msgToTraditionalChinese = "繁体"; //此处可以更改为你想要显示的文字
    var msgToSimplifiedChinese = "简体"; //同上，但两处均不建议更改
    var translateButtonId = "translateLink"; //默认互换id
    translateInitilization();
  </script>

  <%- partial('_partial/statistics.ejs') %>
  <%- partial('_partial/beian.ejs') %>


  <% if(theme.web_analytics.cnzz) { %>
    <!-- cnzz Analytics Icon -->
    <span id="cnzz_stat_icon_<%- theme.web_analytics.cnzz %>" style="display: none"></span>
  <% } %>


  <div>
    <span class="post-count"><%= totalcount(site) %>&nbsp words</span>
    <span id="timeDate">载入天数...</span>
    <span id="times">载入时分秒...</span>
    <script>
      var now = new Date();
      function createtime(){
        var grt= new Date("05/04/2020 21:02:06");//此处修改你的建站时间或者网站上线时间
        now.setTime(now.getTime()+250);
        days = (now - grt ) / 1000 / 60 / 60 / 24;
        dnum = Math.floor(days);
        hours = (now - grt ) / 1000 / 60 / 60 - (24 * dnum);
        hnum = Math.floor(hours);
        if(String(hnum).length ==1 ){
          hnum = "0" + hnum;
        }
        minutes = (now - grt ) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
        mnum = Math.floor(minutes);
        if(String(mnum).length ==1 ){
          mnum = "0" + mnum;
        }
        seconds = (now - grt ) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
        snum = Math.round(seconds);
        if(String(snum).length ==1 ){
          snum = "0" + snum;
        }
        document.getElementById("timeDate").innerHTML = "🚀 &nbsp for &nbsp"+dnum+"&nbspdays";  //此次自定义显示内容
        document.getElementById("times").innerHTML = hnum + "&nbsphr&nbsp" + mnum + "&nbspmin&nbsp" + snum + "&nbspsec";
      }  //此次自定义显示内容
      setInterval("createtime()",250);
    </script>
  </div>


  <!--<div class="text-center py-1">
    <div>
      <span>Copyright © 2020</span></a>
      <a href="https://yousazoe.top/" target="_blank" rel="nofollow noopener">
        <span>Fl0w3r</span></a>    <br>
    </div>-->

</footer>


<!-- SCRIPTS -->
<%- partial('_partial/scripts.ejs') %>
```



返回主题配置文件`~/themes/fluid/_config.yml`，找到页脚更改`pv_format`、`uv_format:`：

```yaml
#---------------------------
# 页脚
# Footer
#---------------------------
footer:
  # 页脚第一行文字的 HTML，建议保留 Fluid 的链接，用于向更多人推广本主题
  # HTML of the first line of the footer, it is recommended to keep the Fluid link to promote this theme to more people
  content: '
    <a href="https://hexo.io" target="_blank" rel="nofollow noopener"><span>Hexo</span></a>
    <i class="iconfont icon-love"></i>
    <a href="https://github.com/fluid-dev/hexo-theme-fluid" target="_blank" rel="nofollow noopener"><span>Fluid</span></a>
  '

  # 展示网站的 PV、UV 统计数
  # Display website PV and UV statistics
  statistics:
    enable: true

    # 统计数据来源，如果使用 leancloud 需要设置 `web_analytics: leancloud` 中的参数；如果使用 busuanzi 可能会有请求失败的情况
    # Data source. If use leancloud, you need to set the parameter in `web_analytics: leancloud`
    # Options: busuanzi | leancloud
    source: "busuanzi"

    # 页面显示的文本，{}是数字的占位符（必须包含)，下同
    # Displayed text, {} is a placeholder for numbers (must be included), the same below
    pv_format: "&nbsp✨&nbsp {} times"
    uv_format: "&nbsp💫&nbsp {} nums"
```



#### 实现效果

![](https://tva1.sinaimg.cn/large/0081Kckwgy1gli3m9aqx0j311p073aav.jpg)



#### 参考

1. [Hexo's Fluid 主题私人定制（持续更新）](https://erenship.com/posts/40222.html)
2. [Fluid 页脚增加网站运行时长](https://hexo.fluid-dev.com/posts/fluid-footer-custom/)







### 生成文章短链接

> [hexo-abbrlink](https://github.com/rozbo/hexo-abbrlink)



Add plugin to Hexo:

```shell
npm install hexo-abbrlink --save
```

Modify permalink in config.yml file:

```yml
permalink: posts/:abbrlink/
```

There are two settings:

```yaml
alg -- Algorithm (currently support crc16 and crc32, which crc16 is default)
rep -- Represent (the generated link could be presented in hex or dec value)
# abbrlink config
abbrlink:
  alg: crc32      #support crc16(default) and crc32
  rep: hex        #support dec(default) and hex
  drafts: false   #(true)Process draft,(false)Do not process draft. false(default) 
  # Generate categories from directory-tree
  # depth: the max_depth of directory-tree you want to generate, should > 0
  auto_category:
     enable: true  #true(default)
     depth:        #3(default)
     over_write: false 
  auto_title: false #enable auto title, it can auto fill the title by path
  auto_date: false #enable auto date, it can auto fill the date by time today
  force: false #enable force mode,in this mode, the plugin will ignore the cache, and calc the abbrlink for every post even it already had abbrlink.
```

#### Sample

The generated link will look like the following:

```yaml
crc16 & hex
https://post.zz173.com/posts/66c8.html

crc16 & dec
https://post.zz173.com/posts/65535.html
crc32 & hex
https://post.zz173.com/posts/8ddf18fb.html

crc32 & dec
https://post.zz173.com/posts/1690090958.html
```



### 标题翻译

> [hexo-translate-title](https://github.com/cometlj/hexo-translate-title)

使用Google翻译，百度翻译和有道翻译将Hexo中的汉字标题转成英文标题，配置完成后直接翻译，无需手工修改标题内容

#### 安装

```shell
npm install hexo-translate-title --save
```



#### 使用

1. **配置hexo根项目下的`_config.yml`**

```yaml
translate_title:
  translate_way: google  # google,youdao,baidu_with_appid,baidu_no_appid
  youdao_api_key: '' # Your youdao_api_key
  youdao_keyfrom: xxxx-blog # Your youdao_keyfrom
  is_need_proxy: false     # true | false
  proxy_url: http://localhost:50018 # Your proxy_url
  baidu_appid: '' # Your baidu_appid
  baidu_appkey: '' # Your baidu_appkey
  rewrite: false # is rewrite true | false 
```

**注意**：

> - 判断是否需要配置google本地代理，因为我在本地是开启时才能访问google翻译的，如果没有被墙，请将`_config.yml` 下的`is_need_proxy: true`改为false。如果设置为true,请设置本地代理地址
> - 目前google翻译，youdao翻译均可直接使用，百度翻译**使用APPID版本，无APPID版本均已完成**，APPID版本需要在[百度翻译开放平台](http://api.fanyi.baidu.com/)
> - 如果担心百度翻译开发平台的APP_ID和APP_KEY有泄漏风险，建议在百度翻译开发平台-》管理控制台的服务器地址一栏，填写好服务器IP即可

2. **修改hexo根目录下的`_config.yml`**

修改

```yaml
permalink: :year/:month:day/:translate_title.html
```

将`:title`修改为`:translate_title`即可，前面的路径也可按照自己的要求变更，例如 `permalink: blog/:translate_title.html`



### 搜索引擎收录



```shell
npm install hexo-generator-baidu-sitemap --save
npm install hexo-generator-sitemap --save
```





#### 参考

+ [百度、必应、谷歌收录](https://blog.csdn.net/weixin_41800884/article/details/103750683)
+ [Hexo博客SEO优化，添加robots.txt](https://mikolaje.github.io/2019/hexo_seo.html)



### 首页 Slogan 上显示一言

这个功能基本上是按照 [pxxyyz](https://pxxyyz.com/) 的 [Typing+hitokoto+jinrishici](https://pxxyyz.com/posts/30454/) 实现的：



##### typed.ejs

修改`layout\_partial\plugins`目录下的`typed.ejs`

```ejs
<% if(theme.fun_features.typing.enable && page.subtitle !== false){ %>
  <%- js_ex(theme.static_prefix.typed, "/typed.min.js") %>
  <script>
    function typing(id, title){
        var typed = new Typed('#' + id, {
            strings: [
              '  ',
              title + "&nbsp;",
            ],
            cursorChar: "<%- theme.fun_features.typing.cursorChar %>",
            typeSpeed: <%- theme.fun_features.typing.typeSpeed %>,
            loop: <%- theme.fun_features.typing.loop %>,
        });
        typed.stop();
        $(document).ready(function () {
            $(".typed-cursor").addClass("h2");
            typed.start();
        });
    }
    <% if(is_post()) { %>
        typing("subtitle", "<%- data.subtitle %>")
    <% } else if(theme.index.hitokoto.enable){ %>
        fetch('https://v1.hitokoto.cn')
        .then(response => response.json())
        .then(data => {
           typing("hitokoto", data.hitokoto)
        })
        .catch(console.error)
    <% } else { %>
        typing("subtitle", "<%- data.subtitle %>")
    <% } %>
  </script>
<% } %>
```

将原来的功能放在typing函数里面，再判断打字机显示subtitle还是hitokoto

- 所有的post都显示subtitle，即markdown的title，page的title是网站的标题
- 除了post以外，判断 `theme.index.hitokoto.enable`
  - 设置显示一言，则通过fetch调用hitokoto的API，这个部分官方说明[[1\]](https://hexo.fluid-dev.com/posts/fluid-hitokoto/#fn:1)和DIY教程[[2\]](https://hexo.fluid-dev.com/posts/fluid-hitokoto/#fn:2)都说的很详细了
  - 如果设置不显示一言，则显示subtitle
- hitokoto比subtitle优先级高，这会导致归档、分类、标签等页面的打字机显示hitokoto



这里需要注意的一点就是因为我一开始直接照搬照抄，后面出现如下报错：

```shell
Unhandled rejection ReferenceError: /Users/apple/Desktop/HEXO_BLOG/blog/themes/fluid/layout/layout.ejs:96
    94|   </main>
    95| 
 >> 96|   <%- partial('_partial/footer', { params: { subtitle: subtitle } }) %>
    97| 
    98| </body>
    99| </html>

/Users/apple/Desktop/HEXO_BLOG/blog/themes/fluid/layout/_partial/footer.ejs:47
    45| 
    46| <!-- SCRIPTS -->
 >> 47| <%- partial('_partial/scripts.ejs') %>

/Users/apple/Desktop/HEXO_BLOG/blog/themes/fluid/layout/_partial/scripts.ejs:60
    58| <% } %>
    59| 
 >> 60| <%- partial('_partial/plugins/typed.ejs') %>
    61| <%- partial('_partial/plugins/local-search.ejs') %>
    62| <%- partial('_partial/plugins/math.ejs') %>
    63| <%- partial('_partial/plugins/mermaid.ejs') %>

/Users/apple/Desktop/HEXO_BLOG/blog/themes/fluid/layout/_partial/plugins/typed.ejs:30
    28|             .catch(console.error)
    29|     <% }
 >> 30|     else { %>typing("subtitle", "<%- data.subtitle %>")<% }
    31|     %>
    32|   </script>
    33| <% } %>

data is not defined
    at eval (/Users/apple/Desktop/HEXO_BLOG/blog/themes/fluid/layout/_partial/plugins/typed.ejs:38:17)
    at typed (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/ejs/lib/ejs.js:682:17)
    at _View._compiledSync (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/hexo/lib/theme/view.js:132:24)
    at _View.renderSync (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/hexo/lib/theme/view.js:59:25)
    at Object.partial (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/hexo/lib/plugins/helper/partial.js:34:15)
    at eval (/Users/apple/Desktop/HEXO_BLOG/blog/themes/fluid/layout/_partial/scripts.ejs:153:17)
    at scripts (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/ejs/lib/ejs.js:682:17)
    at _View._compiledSync (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/hexo/lib/theme/view.js:132:24)
    at _View.renderSync (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/hexo/lib/theme/view.js:59:25)
    at Object.partial (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/hexo/lib/plugins/helper/partial.js:34:15)
    at eval (/Users/apple/Desktop/HEXO_BLOG/blog/themes/fluid/layout/_partial/footer.ejs:27:17)
    at footer (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/ejs/lib/ejs.js:682:17)
    at _View._compiledSync (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/hexo/lib/theme/view.js:132:24)
    at _View.renderSync (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/hexo/lib/theme/view.js:59:25)
    at Object.partial (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/hexo/lib/plugins/helper/partial.js:34:15)
    at eval (/Users/apple/Desktop/HEXO_BLOG/blog/themes/fluid/layout/layout.ejs:133:17)
    at layout (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/ejs/lib/ejs.js:682:17)
    at _View._compiled (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/hexo/lib/theme/view.js:136:50)
    at _View.render (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/hexo/lib/theme/view.js:39:17)
    at /Users/apple/Desktop/HEXO_BLOG/blog/node_modules/hexo/lib/theme/view.js:51:25
    at tryCatcher (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/bluebird/js/release/util.js:16:23)
    at Promise._settlePromiseFromHandler (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/bluebird/js/release/promise.js:547:31)
    at Promise._settlePromise (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/bluebird/js/release/promise.js:604:18)
    at Promise._settlePromise0 (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/bluebird/js/release/promise.js:649:10)
    at Promise._settlePromises (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/bluebird/js/release/promise.js:729:18)
    at _drainQueueStep (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/bluebird/js/release/async.js:93:12)
    at _drainQueue (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/bluebird/js/release/async.js:86:9)
    at Async._drainQueues (/Users/apple/Desktop/HEXO_BLOG/blog/node_modules/bluebird/js/release/async.js:102:5)

```

原因在于没有`data`导致`subtitle`读取不出来，所以我们修改一下源码即可：

```ejs
<% if(is_post()) { %>
    typing("subtitle", "<%- page.title %>")
```





#### layout.ejs

修改`layout`目录下的`layout.ejs`，在`<span>...</span>`与`<if(is_post())>`中插入代码：

```ejs
<% if(!is_post()) { %>
	<br>
  <span class="h2" id="hitokoto">
  <% if(theme.fun_features.typing.enable == false) { %>
  <%- hitokoto %>
  <% } %>
  </span>
 <% } %>
```

这个部分设置显示hitokoto的样式和位置，不设置这个会报关于`typing("hitokoto", data.hitokoto)`的错误：

> ```shell
> TypeError: Cannot read property 'tagName' of null
> ```



#### 修改配置

在`source\_data`目录下修改**主题配置**文件`fluid_config.yml`，在`index`下设置hitokoto的开关：

```yaml
#---------------------------
# 首页
# Home Page
#---------------------------
index:

	......

  slogan:
    enable: true

    ......

  hitokoto:  # 非post页面显示一言
    enable: true

    api:
      enable: true

      url: "https://v1.hitokoto.cn/"

      method: "GET"

      headers: {}

      keys: ["hitokoto"]
```



#### 加入出处

如果想加入出处，可在打印`data.hitokoto`后加入`data.from`，以及相应的格式

```ejs
typing("hitokoto", '『' + data.hitokoto + '』' + '<br /> <h5>'+ '——' + '「' + data.from + '」' + '</h5>')
```



```ejs
<% if(is_post()) { %>
    typing("subtitle", "<%- page.title %>")
    <% } else if(theme.index.hitokoto.enable){ %>
    fetch('https://v1.hitokoto.cn')
            .then(response => response.json())
            .then(data => {
              typing("hitokoto", '『' + data.hitokoto + '』' + '<br /><br /> <h5>'+ '——' + '「' + data.from + '」' + '</h5>')
            })
            .catch(console.error)
<% }
```



#### 参考

1. [一言开发者中心](https://developer.hitokoto.cn/) [↩](https://hexo.fluid-dev.com/posts/fluid-hitokoto/#fnref:1)
2. [为您的Hexo博客添加Hitokoto一言功能](https://blog.bill.moe/add-hitokoto/) [↩](https://hexo.fluid-dev.com/posts/fluid-hitokoto/#fnref:2)
3. [Code World](http://tanxinzheng.github.io/) [↩](https://hexo.fluid-dev.com/posts/fluid-hitokoto/#fnref:3)





### 博客嵌入PPT演示

#### 官方演示

<iframe src="https://nodeppt.js.org/" width="100%" height="600" name="topFrame" scrolling="yes"  noresize="noresize" frameborder="0" id="topFrame"></iframe>



> **可以通过鼠标和键盘控制**
>
> - 页面: ↑/↓/←/→ Space Home End（空格,home键,end键）
> - 全屏: F
> - Overview: -/+
> - 演讲者笔记: N
> - 网格背景: Enter



#### 安装

```shell
npm install -g nodeppt
```



#### 使用

- `new`：使用线上模板创建一个新的 md 文件
- `serve`：启动一个 md 文件的 webpack dev server
- `build`：编译产出一个 md 文件

```shell
# create a new slide with an official template
$ nodeppt new slide.md

# create a new slide straight from a github template
$ nodeppt new slide.md -t username/repo

# start local sever show slide
$ nodeppt serve slide.md

# to build a slide
$ nodeppt build slide.md
```



#### 帮助

```shell
# help
nodeppt -h
# 获取帮助
nodeppt serve -h
```



### 标签页添加标签云

#### 效果图



![](https://tva1.sinaimg.cn/large/008eGmZEly1gmlxgz5y7tj30u00z1tmb.jpg)



#### 安装

- 进入到 hexo 的根目录，然后在 `package.json` 中添加依赖: `"hexo-tag-cloud": "2.1.*"`

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmlxjb6g4bj311y0lcq94.jpg)

- 然后执行 `npm install hexo-tag-cloud` 命令



#### 修改

##### ejs用户

- 这里以默认主题 landscape 为例。
- tagcloud 模板文件为 `hexo/themes/landscape/layout/_widget/tagcloud.ejs`
- 将这个文件修改为如下内容：



```ejs
<% if (site.tags.length) { %>
  <script type="text/javascript" charset="utf-8" src="<%- url_for('/js/tagcloud.js') %>"></script>
  <script type="text/javascript" charset="utf-8" src="<%- url_for('/js/tagcanvas.js') %>"></script>
  <div class="widget-wrap">
    <h3 class="widget-title"><%= __('tagcloud') %></h3>
    <div id="myCanvasContainer" class="widget tagcloud">
      <canvas width="250" height="250" id="resCanvas" style="width:100%">
        <%- tagcloud() %>
      </canvas>
    </div>
  </div>
<% } %>
```

如果你使用的是 [icarus](https://github.com/ppoffice/hexo-theme-icarus) 主题, 请查阅 [Issue #31](https://github.com/MikeCoder/hexo-tag-cloud/issues/31).



##### swig用户

- 这里以 Next 主题为例。
- 找到文件 `next/layout/_macro/sidebar.swig`, 然后添加如下内容。

```html
{% if site.tags.length > 1 %}
<script type="text/javascript" charset="utf-8" src="{{ url_for('/js/tagcloud.js') }}"></script>
<script type="text/javascript" charset="utf-8" src="{{ url_for('/js/tagcanvas.js') }}"></script>
<div class="widget-wrap">
    <h3 class="widget-title">Tag Cloud</h3>
    <div id="myCanvasContainer" class="widget tagcloud">
        <canvas width="250" height="250" id="resCanvas" style="width:100%">
            {{ list_tags() }}
        </canvas>
    </div>
</div>
{% endif %}
```





##### jade用户

- 这里以 Apollo 主题为例
- 找到 `apollo/layout/archive.jade` 文件，并且把 container 代码块修改为如下内容:

```jade
block container
    include mixins/post
    .archive
        h2(class='archive-year')= 'Tag Cloud'
        script(type='text/javascript', charset='utf-8', src=url_for("/js/tagcloud.js"))
        script(type='text/javascript', charset='utf-8', src=url_for("/js/tagcanvas.js"))

        #myCanvasContainer.widget.tagcloud(align='center')
            canvas#resCanvas(width='500', height='500', style='width:100%')
                !=tagcloud()
            !=tagcloud()
    +postList()
```



##### pug用户

- 这里以 Butterfly 主题为例
- 找到 `Butterfly/layout/includes/widget/card_tags.pug` 文件
- 将这个文件修改为如下内容(注意缩进):

```
if site.tags.length
  .card-widget.card-tags
    .card-content
      .item-headline
        i.fa.fa-tags(aria-hidden="true")
        span= _p('aside.card_tags')
        script(type="text/javascript" charset="utf-8" src="/js/tagcloud.js")
        script(type="text/javascript" charset="utf-8" src="/js/tagcanvas.js")
        #myCanvasContainer.widget.tagcloud(align='center')
          canvas#resCanvas(width='200', height='200', style='width=100%')
            != tagcloud()
          != tagcloud({min_font: 16, max_font: 24, amount: 50, color: true, start_color: '#999', end_color: '#99a9bf'})
```



##### Fluid主题详解

对于Fluid主题用户而言，需要找到`/blog/themes/fluid/layout/tags.ejs`这个文件添加刚才ejs用户代码：

```ejs
<%
page.layout = "tags"
page.title = theme.tag.title || __('tag.title')
page.subtitle = theme.tag.subtitle || __('tag.subtitle')
page.banner_img = theme.tag.banner_img
page.banner_img_height = theme.tag.banner_img_height
page.banner_mask_alpha = theme.tag.banner_mask_alpha

var min_font = theme.tag.tagcloud.min_font || 15
var max_font = theme.tag.tagcloud.max_font || 30
var unit = theme.tag.tagcloud.unit || 'px'
var start_color = theme.tag.tagcloud.start_color || '#BBBBEE'
var end_color = theme.tag.tagcloud.end_color || '#337ab7'
%>


<div class="text-center tagcloud">

+  <% if (site.tags.length) { %>
+    <script type="text/javascript" charset="utf-8" src="<%- url_for('/js/tagcloud.js') %>"></script>
+    <script type="text/javascript" charset="utf-8" src="<%- url_for('/js/tagcanvas.js') %>"></script>
+    <div class="widget-wrap">
+      <h3 class="widget-title">
+        <%= __('tagcloud') %>
+      </h3>
+      <div id="myCanvasContainer" class="widget tagcloud">
+        <canvas width="700" height="700" id="resCanvas" style="width:100%">
+          <%- tagcloud() %>
+        </canvas>
+      </div>
+    </div>
+    <% } %>

    <%- tagcloud({
        min_font: min_font,
        max_font: max_font,
        amount: 999,
        unit: unit,
        color: true,
        start_color,
        end_color
      }) %>
</div>
```





##### 最后一步

- 完成安装和显示，可以通过 `hexo clean && hexo g && hexo s` 来进行本地预览, hexo clean 为必须选项。
- **PS:不要使用 `hexo g -d 或者 hexo d -g` 这类组合命令。**详情见: [Issue 7](https://github.com/MikeCoder/hexo-tag-cloud/issues/7)



#### 自定义

现在 hexo-tag-cloud 插件支持自定义啦。非常简单的步骤就可以改变你的标签云的字体和颜色，还有突出高亮。

- 在你的博客根目录，找到 *_config.yml* 文件然后添加如下的配置项:

```yaml
# hexo-tag-cloud
tag_cloud:
    textFont: Trebuchet MS, Helvetica
    textColor: '#333'
    textHeight: 25
    outlineColor: '#E2E1D1'
    maxSpeed: 0.5
    pauseOnSelected: false # true 意味着当选中对应 tag 时,停止转动
```

- 然后使用 `hexo c && hexo g && hexo s` 来享受属于你自己的独一无二的标签云吧。



对于我个人而言配置如下，如果比例掌握不对会造成字体的模糊：

```yaml
# hexo-tag-cloud
tag_cloud:
    textFont: Trebuchet MS, Helvetica
    textColor: '#000'
    textHeight: 20
    outlineColor: '#fff'
    maxSpeed: 0.1
    pauseOnSelected: true # true 意味着当选中对应 tag 时,停止转动

```



效果图：

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmlxt8wzxpj311k0j3jsh.jpg)



#### 官方文档

+ [Hexo Tag Cloud](https://github.com/D0n9X1n/hexo-tag-cloud/blob/master/README.ZH.md)





### 关于页添加贡献图

本文主要介绍如何在个人博客中展示 GitHub Chart。其实 GitHub 上已经有人开源了一个工具，并且提供了 API，我们只需要调用一下就可以了。

- 工具地址：[Github Chart API](https://ghchart.rshah.org/)



这个工具可以实时的将 `GitHub Chart` 信息**转化成一张图片**，如下图所示，然后我们就可以把它插入到自己的博客进行展示了。

<center><img src="http://ghchart.rshah.org/yousazoe" alt="" /></center>



#### 使用方法

我们只需要在 `https://ghchart.rshah.org/` 这个地址后加上自己的 **GitHub 用户名**即可构造 GitHub Chart 图片的 URL。例如：

```html
https://ghchart.rshah.org/yousazoe
```

##### HTML 引入图片

```html
<img src="http://ghchart.rshah.org/yousazoe" alt="yousazoe's Github chart" />
```

##### Markdown 引入图片

```markdown
![dta0502's Github chart](https://ghchart.rshah.org/yousazoe)
```



#### 自定义颜色

这个工具还支持自定义配色方案，我们可以提供任何基本颜色来为图表添加阴影。

我们只需访问 `https://ghchart.rshah.org/<HEX-COLOR>/2016rshah`，然后将 `<HEX-COLOR>` 替换为我们想要设置的十六进制颜色代码（不包括开头的标签）就可以了。

例如，如果我们想要一个的蓝色主题图表（`＃409ba5`），那么我们可以构造链接：

```html
<img src="http://ghchart.rshah.org/409ba5/yousazoe" alt="yousazoe's Blue Github Chart" />
```

<center><img src="http://ghchart.rshah.org/409ba5/yousazoe" alt="" /></center>

#### 参考

+ [Hexo 博客展示 GitHub Chart](https://tding.top/archives/90b9ba07.html)

- [Github Chart API](https://github.com/2016rshah/githubchart-api)
- [在博客中展示 GitHub Chart](https://mogeko.me/2019/067/)



### 添加游戏

预览效果见右上角↗「游戏」

源码分别来自：[LIUBOliubo/Games](https://github.com/LIUBOliubo/Games/tree/master/games/2048)，[mumuy/pacman](https://github.com/mumuy/pacman)



#### 引入

下载好游戏相关源码，解压到本地（通常包含html、css、js、图片和音频等资源文件），双击其中的`index.html`文件测试是否可用。



#### 修改

直接使用源码会有碍眼的广告横幅、恶意链接跳转，需要打开html或者js文件，找到多余代码，删掉它，保存，刷新网页查看是否出错。



##### 2048

替换`index.html`文件：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">

  <link href="style/main.css" rel="stylesheet" type="text/css">
  <link rel="shortcut icon" href="favicon.ico">
  <link rel="apple-touch-icon" href="meta/apple-touch-icon.png">
  <link rel="apple-touch-startup-image" href="meta/apple-touch-startup-image-640x1096.png" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"> <!-- iPhone 5+ -->
  <link rel="apple-touch-startup-image" href="meta/apple-touch-startup-image-640x920.png"  media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)"> <!-- iPhone, retina -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">

  <meta name="HandheldFriendly" content="True">
  <meta name="MobileOptimized" content="320">
  <meta name="viewport" content="width=device-width, target-densitydpi=160dpi, initial-scale=1.0, maximum-scale=1, user-scalable=no, minimal-ui">
</head>

<body>
  <div class="container">
    <div class="heading">
      <h1 class="title">2048</h1>
      <div class="scores-container">
        <div class="score-container">0</div>
        <div class="best-container">0</div>
      </div>
    </div>

    <div class="above-game">
      <a class="restart-button">点我开始</a>
    </div>

    <div class="game-container">
      <div class="game-message">
        <p></p>
        <div class="lower">
	        <a class="keep-playing-button">Keep going</a>
          <a class="retry-button">再玩一次</a>
        </div>
      </div>

      <div class="grid-container">
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
        <div class="grid-row">
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
          <div class="grid-cell"></div>
        </div>
      </div>

      <div class="tile-container">

      </div>
    </div>

   
    <hr>
    
   
</div>
  <script src="js/bind_polyfill.js"></script>
  <script src="js/classlist_polyfill.js"></script>
  <script src="js/animframe_polyfill.js"></script>
  <script src="js/keyboard_input_manager.js"></script>
  <script src="js/html_actuator.js"></script>
  <script src="js/grid.js"></script>
  <script src="js/tile.js"></script>
  <script src="js/local_storage_manager.js"></script>
  <script src="js/game_manager.js"></script>
  <script src="js/application.js"></script>
  

</body>
</html>
```



##### pacman

更改`index.html`文件：

```html
<html>
	<head>
		<meta charset="utf8">
		<title>Pac-Man . 吃豆人游戏</title>
		<link rel="shortcut icon" href="favicon.png">
		<style>
			*{padding:0;margin:0;}
			.wrapper{
				width: 960px;
				margin:0 auto;
				color:#999;
			}
			canvas{display:block;background: #000;}
			.info{
				line-height: 30px;
				text-align: center;
				margin-bottom: 10px;
			}
			p{
				line-height: 24px;
				text-indent: 2em;
				font-size: 14px;
			}
			.mod-botton{
				height: 32px;
				padding: 15px 0;
				text-align: center;
			}
		</style>
	</head>
	<body>
		<div class="wrapper">
			<canvas id="canvas" width="960" height="640">不支持画布</canvas>
			<div class="info">按［空格］暂停或继续</div>
			<div class="mod-botton">
				<a class="github-button" href="https://github.com/mumuy" data-style="mega" data-count-href="/mumuy/followers" data-count-api="/users/mumuy#followers" data-count-aria-label="# followers on GitHub" aria-label="Follow @mumuy on GitHub">Follow @mumuy</a>
				<a class="github-button" href="https://github.com/mumuy/pacman" data-style="mega" data-count-href="/mumuy/pacman/stargazers" data-count-api="/repos/mumuy/pacman#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star mumuy/pacman on GitHub">Star</a>
			</div>
		</div>
		<script src="game.js"></script>
		<script src="index.js"></script>
		<script async defer src="https://buttons.github.io/buttons.js"></script>
		<div style="display: none;">
			<script src="http://s95.cnzz.com/z_stat.php?id=1258310068&web_id=1258310068"></script>
		</div>
		<script>
		(function(){
		    var bp = document.createElement('script');
		    var curProtocol = window.location.protocol.split(':')[0];
		    if (curProtocol === 'https') {
		        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
		    }
		    else {
		        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
		    }
		    var s = document.getElementsByTagName("script")[0];
		    s.parentNode.insertBefore(bp, s);
		})();
		</script>
	</body>
</html>
```





#### 配置

##### 跳过渲染

打开博客根目录的`_config.yml`，找到`skip_render`，添加需要跳过渲染的文件（夹），这种页面不需要主题渲染，像这样：

```yaml
 skip_render:
- README.md
- game/** 
```



##### 二级菜单

在自己的博客源码的source文件夹下面新建一个``game`文件夹，然后把刚才的游戏源码整个文件夹拖进去。打开博客根目录的`_config.yml`，配置二级菜单：

```yaml
  menu:
    ......
    - { 
        key: "game", 
        icon: "iconfont icon-playstation-fill",
        submenu: [
        { key: '2048', link: '/game/2048/' },
        { key: '吃豆人', link: '/game/pacman/' }
      ]
    }
```



#### 参考

+ [给博客添加两个小游戏：2048、吃豆人 ](https://liuyifei.club/posts/33676.html)



### 基于CDN的主题美化特效

#### 使用css/js引入的方法

##### 新建css或者js文件

我们以css为例，在`themes\fluid\source\css\`文件夹下新建一个文本文档，找到一段可用的css美化代码，复制粘贴的新建的文档里面，然后把文档的.txt修改成.css，命好名字。
然后打开主题配置文件`/themes/fluid/_config.yml`找到`custom_js`和`custom_js`下面进行引入。



##### 把新建的css文件引入主题

```yml
custom_js:
  - /js/diy/timeDate.js
  - //cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js  #/APlayer#/APlayer依赖
  - //cdn.jsdelivr.net/gh/metowolf/Metingjs@1.2/dist/Meting.min.js  #/APlayer依赖
# 指定自定义 .css 文件路径，用法和 custom_js 相同
# The usage is the same as custom_js
custom_css:
  - /css/diy/shubiao.css #鼠标指针
  - //cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css   #/APlayer依赖
```





#### JS类特效

##### 头部上升的气泡

```
//cdn.jsdelivr.net/gh/bynotes/texiao/source/js/qipao.js #头部上升气泡
```



##### 动态彩带

```
//cdn.jsdelivr.net/gh/bynotes/texiao/source/js/caidai.js # 动态彩带
```



##### 静态彩带点击改变形状

```
//cdn.jsdelivr.net/gh/bynotes/texiao/source/js/jingtaisidai.js # 静态彩带
```



##### 动态黑色线条

```
//cdn.jsdelivr.net/gh/bynotes/texiao/source/js/xiantiao.js # 动态黑色线条
```



##### 小雪花飘落

```
//cdn.jsdelivr.net/gh/bynotes/texiao/source/js/xiaoxuehua.js # 小雪花飘落
```



##### 樱花飘落

```
//cdn.jsdelivr.net/gh/bynotes/texiao/source/js/yinghua.js # 樱花飘落
```



##### 鼠标跟随小星星

```
//cdn.jsdelivr.net/gh/bynotes/texiao/source/js/xiaoxingxing.js # 鼠标跟随小星星
```



##### 页脚加入运行时间


```
//cdn.jsdelivr.net/gh/bynotes/texiao/source/js/timeDate.js # 运行时间
```



##### 大雪花飘落


```
//cdn.jsdelivr.net/gh/bynotes/texiao/source/js/daxuehua.js # 大雪花飘落
```



##### 鼠标点击出字

```
//cdn.jsdelivr.net/gh/bynotes/texiao/source/js/dianjichuzi.js # 鼠标点击出字
```



##### 鼠标点击出小爱心❤

```
//cdn.jsdelivr.net/gh/bynotes/texiao/source/js/love.js # 鼠标点击出小爱心❤
```



##### 鼠标点击出爆炸效果


```
//cdn.jsdelivr.net/gh/bynotes/texiao/source/js/boom.js # 鼠标点击爆炸效果
//cdn.bootcss.com/animejs/2.2.0/anime.min.js #依赖
```



CSS类

#### CSS类

##### 头部打字机颜色效果渐变


```
//cdn.jsdelivr.net/gh/bynotes/texiao/source/css/toubudaziji.css # 头部打字机颜色效果渐变
```



##### 头部打字机颜色


```
//cdn.jsdelivr.net/gh/bynotes/texiao/source/css/daziyanse.css# 头部打字机颜色
```



##### 滚动条颜色

```
//cdn.jsdelivr.net/gh/bynotes/texiao/source/css/gundongtiao.css# 滚动条颜色
```



##### 鼠标指针

```
//cdn.jsdelivr.net/gh/bynotes/texiao/source/css/shubiao.css# 鼠标指针
```



#### 参考

+ [Hexo-Fluid主题美化](https://blog.csdn.net/weixin_43471926/article/details/109798811)

