# 解压安装3Dmigoto
在拿到3Dmigoto之后，我们解压到桌面：

![alt text](image.png)


# 手动配置路径
打开d3dx.ini，找到target = 然后这里的路径改为你要注入的目标程序的路径
![alt text](image-3.png)

然后保存，打开3Dmigoto Loader.exe即可使用
![alt text](image-4.png)

这里手动可配置的参数有很多，如下是原始描述：
```
;------------------------------------------------------------------------------------------------------
; Settings used by the external 3DMigoto Loader
;------------------------------------------------------------------------------------------------------
[Loader]
launch = D:\ZenlessZoneZero Game\ZenlessZoneZero.exe
; Target process to load into. You can optionally include part of the directory
; structure in case the game's executable name is generic.
target = D:\ZenlessZoneZero Game\ZenlessZoneZero.exe

; This tells the loader where to find 3DMigoto. This DLL must be located
; in the same directory as 3DMigoto Loader.exe and will be loaded in the target
; process under the same name. If d3d11.dll doesn't work try 3dmigoto.dll
module = d3d11.dll

; Uncomment to always elevate the loader to support games that run as admin.
; This will display a UAC prompt so only enable it if you actually need it.
require_admin = true

; Automatically launch the game from the loader. If you put the executable name
; here than the loader will need to be located in the game directory. You can
; use the full path, but that is not recommended to ship any fixes with since
; it will vary on a user's system. If the game is on Steam you can use the
; steam browser protocol to launch it, optionally passing it any command line
; arguments you need (unfortunately Steam pops a dialog to confirm command line
; parameters, which tends to end up behind other windows):
;launch = DOA6.exe
;launch = steam://run/838380/
;launch = steam://run/237850//-window-mode exclusive/

; Delay this many extra seconds after confirming that 3DMigoto was loaded in
; the target process. For games that respawn themselves or have multiple
; executables of the same name when the first process we see may not be the
; actual one we need. Set to -1 to disable automatic shut down.
;delay = 20

```

参数通俗解释：

- target = 填写目标游戏的进程路径
- module = 一般填写d3d11.dll
- require_admin 一般填写true
- launch = 填写3Dmigoto Loader.exe运行后自动调起的程序路径
- delay = 填写3Dmigoto Loader.exe在运行后，经过多少秒自动退出

虽然原始3Dmigoto规定了这些用法，但现代的基于3Dmigoto的Mod加载器对这些参数进行了魔改，删掉了无用参数delay,module,require_admin，增加了部分参数例如launch_args。

所以这里仅供参考。

# 手动安装Mod到3Dmigoto

把Mod文件或Mod文件夹放到Mods文件夹中即可：

![alt text](image-1.png)

随后启动3Dmigoto并启动游戏即可。

# 为什么是安装到Mods文件夹中？

3Dmigoto的Mod安装到什么地方，是由d3dx.ini中的include参数控制的：

![alt text](image-2.png)

如图，原始的3Dmigoto一般会带有Mods文件夹，以及已经配置好的默认的include = Mods的配置

所以按照约定俗成的使用方法，我们会把Mod文件放到Mods文件夹中

