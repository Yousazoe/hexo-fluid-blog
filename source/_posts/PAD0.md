---
title: Aseprite教学-Aseprite编译教程
tags:
  - CMake
  - Aseprite
categories:
  - 像素美工(Pixel Art Designing)
  - Aseprite教学(Aseprite Tutorial)
banner_img: 'https://tva1.sinaimg.cn/large/008eGmZEly1gmsvw4cknxj30hs0a0mwz.jpg'
abbrlink: 5d59087d
date: 2021-01-19 12:07:42
index_img:
comment:
sticky:
---



本文将介绍Aseprite的编译安装方法。

<!--more-->



### 官方说明文档

#### Platforms

You should be able to compile Aseprite successfully on the following platforms:

- Windows 10 + [Visual Studio Community 2019 + Windows 10.0.18362.0 SDK](https://imgur.com/a/7zs51IT) (we don't support [MinGW](https://github.com/aseprite/aseprite/blob/master/INSTALL.md#mingw))
- macOS 10.15.3 Mojave + Xcode 11.2.1 + macOS 10.15 SDK (older version might work)
- Linux + gcc 9.2 or clang 9.0

#### Get the source code

You can get the source code downloading a `Aseprite-v1.x-Source.zip` file from the latest Aseprite release (*in that case please follow the compilation instructions inside the `.zip` file*):

https://github.com/aseprite/aseprite/releases

Or you can clone the repository and all its submodules using the following command:

```
git clone --recursive https://github.com/aseprite/aseprite.git
```

To update an existing clone you can use the following commands:

```
cd aseprite
git pull
git submodule update --init --recursive
```

You can use [Git for Windows](https://git-for-windows.github.io/) to clone the repository on Windows.

#### Dependencies

To compile Aseprite you will need:

- The latest version of [CMake](https://cmake.org/) (3.14 or greater)
- [Ninja](https://ninja-build.org/) build system
- And a compiled version of the `aseprite-m81` branch of the [Skia library](https://github.com/aseprite/skia#readme). There are [pre-built packages available](https://github.com/aseprite/skia/releases). You can get some extra information in the [*laf* dependencies](https://github.com/aseprite/laf#dependencies) page.

##### Windows dependencies

- Windows 10 (we don't support cross-compiling)
- [Visual Studio Community 2019](https://visualstudio.microsoft.com/downloads/) (we don't support [MinGW](https://github.com/aseprite/aseprite/blob/master/INSTALL.md#mingw))
- The [Desktop development with C++ item + Windows 10.0.18362.0 SDK](https://imgur.com/a/7zs51IT) from the Visual Studio installer

##### macOS dependencies

On macOS you will need macOS 10.15 SDK and Xcode 11.2.1 (older versions might work).

##### Linux dependencies

You will need the following dependencies on Ubuntu/Debian:

```
sudo apt-get install -y g++ cmake ninja-build libx11-dev libxcursor-dev libxi-dev libgl1-mesa-dev libfontconfig1-dev
```

On Fedora:

```
sudo dnf install -y gcc-c++ cmake ninja-build libX11-devel libXcursor-devel libXi-devel mesa-libGL-devel fontconfig-devel
```



#### Compiling

1. [Get Aseprite code](https://github.com/aseprite/aseprite/blob/master/INSTALL.md#get-the-source-code), put it in a folder like `C:\aseprite`, and create a `build` directory inside to leave all the files that are result of the compilation process (`.exe`, `.lib`, `.obj`, `.a`, `.o`, etc).

   ```
    cd C:\aseprite
    mkdir build
   ```

   In this way, if you want to start with a fresh copy of Aseprite source code, you can remove the `build` directory and start again.

2. Enter in the new directory and execute `cmake`:

   ```
    cd C:\aseprite\build
    cmake -G Ninja -DLAF_BACKEND=skia ..
   ```

   Here `cmake` needs different options depending on your platform. You must check the details for [Windows](https://github.com/aseprite/aseprite/blob/master/INSTALL.md#windows-details), [macOS](https://github.com/aseprite/aseprite/blob/master/INSTALL.md#macos-details), and [Linux](https://github.com/aseprite/aseprite/blob/master/INSTALL.md#linux-details). Some `cmake` options can be modified using tools like [`ccmake`](https://cmake.org/cmake/help/latest/manual/ccmake.1.html) or [`cmake-gui`](https://cmake.org/cmake/help/latest/manual/cmake-gui.1.html).

3. After you have executed and configured `cmake`, you have to compile the project:

   ```
    cd C:\aseprite\build
    ninja aseprite
   ```

4. When `ninja` finishes the compilation, you can find the executable inside `C:\aseprite\build\bin\aseprite.exe`.

##### Windows details

Open a [developer command prompt](https://docs.microsoft.com/en-us/dotnet/framework/tools/developer-command-prompt-for-vs) or in the command line (`cmd.exe`) call:

```
call "C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\Common7\Tools\VsDevCmd.bat" -arch=x64
```

And then

```
cd aseprite
mkdir build
cd build
cmake -DCMAKE_BUILD_TYPE=RelWithDebInfo -DLAF_BACKEND=skia -DSKIA_DIR=C:\deps\skia -DSKIA_LIBRARY_DIR=C:\deps\skia\out\Release-x64 -DSKIA_LIBRARY=C:\deps\skia\out\Release-x64\skia.lib -G Ninja ..
ninja aseprite
```

In this case, `C:\deps\skia` is the directory where Skia was compiled or uncompressed.

###### MinGW

We don't support MinGW compiler and it might bring some problems into the compilation process. If you see that the detected C++ compiler by cmake is `C:\MinGW\bin\c++.exe` or something similar, you have to get rid of MinGW path (`C:\MinGW\bin`) from the `PATH` environment variable and run cmake again from scratch, so the Visual Studio C++ compiler (`cl.exe`) is used instead.

You can define the `CMAKE_IGNORE_PATH` variable when running cmake for the first time in case that you don't know or don't want to modify the `PATH` variable, e.g.:

```
cmake -DCMAKE_IGNORE_PATH=C:\MinGW\bin ...
```

More information in [issue #2449](https://github.com/aseprite/aseprite/issues/2449)

##### macOS details

Run `cmake` with the following parameters and then `ninja`:

```
cd aseprite
mkdir build
cd build
cmake \
  -DCMAKE_BUILD_TYPE=RelWithDebInfo \
  -DCMAKE_OSX_ARCHITECTURES=x86_64 \
  -DCMAKE_OSX_DEPLOYMENT_TARGET=10.9 \
  -DCMAKE_OSX_SYSROOT=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.15.sdk \
  -DLAF_BACKEND=skia \
  -DSKIA_DIR=$HOME/deps/skia \
  -DSKIA_LIBRARY_DIR=$HOME/deps/skia/out/Release-x64 \
  -DSKIA_LIBRARY=$HOME/deps/skia/out/Release-x64/libskia.a \
  -G Ninja \
  ..
ninja aseprite
```

In this case, `$HOME/deps/skia` is the directory where Skia was compiled or downloaded. Make sure that `CMAKE_OSX_SYSROOT` is pointing to the correct SDK directory (in this case `/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.15.sdk`), but it could be different in your Mac.

##### Issues with Retina displays

If you have a Retina display, check the following issue:

https://github.com/aseprite/aseprite/issues/589

##### Linux details

Run `cmake` with the following parameters and then `ninja`:

```
cd aseprite
mkdir build
cd build
cmake \
  -DCMAKE_BUILD_TYPE=RelWithDebInfo \
  -DLAF_BACKEND=skia \
  -DSKIA_DIR=$HOME/deps/skia \
  -DSKIA_LIBRARY_DIR=$HOME/deps/skia/out/Release-x64 \
  -DSKIA_LIBRARY=$HOME/deps/skia/out/Release-x64/libskia.a \
  -G Ninja \
  ..
ninja aseprite
```

In this case, `$HOME/deps/skia` is the directory where Skia was compiled or uncompressed.

#### Using shared third party libraries

If you don't want to use the embedded code of third party libraries (i.e. to use your installed versions), you can disable static linking configuring each `USE_SHARED_` option.

After running `cmake -G`, you can edit `build/CMakeCache.txt` file, and enable the `USE_SHARED_` flag (set its value to `ON`) of the library that you want to be linked dynamically.



### Brew安装

如果你的电脑没有安装brew，那么先打开MAC的终端，输入如下命令

```shell
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" < /dev/null 2> /dev/null ; brew install caskroom/cask/brew-cask 2> /dev/null
```

安装过程会提示你输入密码，输入密码后继续

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmsw88l638j30q60a677k.jpg)

安装brew之后输入命令

```shell
brew cask install aseprite
```

安装成功，信息输出如下

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmsw891ap7j30w0066jtl.jpg)

之后你可以在MAC的启动台启动Aseprite进行像素绘画

![](https://tva1.sinaimg.cn/large/008eGmZEly1gmsw89jgzaj318v0u0dhr.jpg)





### 参考

+ [Install Aseprite on Mac OSX](http://macappstore.org/aseprite/)
+ [Mac 编译安装 Aseprite](https://www.bestgcc.cn/20181204194300.html)



