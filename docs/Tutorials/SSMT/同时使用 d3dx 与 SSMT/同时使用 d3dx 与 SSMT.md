# 一句话总结
```bash
# 仅 cmd 可用，PowerShell 不可用。
mklink /j "X:\path\to\d3dx\home\<game>\work\Mods\SSMT_Mods" "X:\path\to\SSMT-package\3dmigoto\<game>\mods"
```

# 小白看这里

在实践中遇到了前置知识极其薄弱的朋友为此事反复询问，故下文面向几乎完全的小白。

键盘左下角有一个印有形似 “田” 字的键，叫做 *Windows 徽标键*，简称 win 键。为了打开命令提示符窗口，我们需要按下 win 键，并保持按住，然后按一下键盘上主键盘区的字母键 R 键，然后松开两个键。上述操作被称为 *按下组合键 `Win + R`*，功能是打开一个名字就叫 “打开” 或者叫 “运行” 的窗口。

![alt text](image.png)

在 “运行” 窗口中，我们需要输入 `cmd` 三个字母，然后挪动鼠标，操纵光标（也就是电脑屏幕上常被称为鼠标的那个白色小箭头）挪动到 “运行” 窗口的 “确定” 按钮，按一下鼠标左键，点击该按钮。此时会出现一个黑色的窗口，这个就是我们的 cmd 命令提示符界面了。

![alt text](image-1.png)

然后用你知道的任何方式获取 SSMT 的 Mods 文件夹所在路径，得到形如

`X:\path\to\SSMT-package\3dmigoto\<game>\mods`
 
的一串字符串，这里的 `<game>` 是你预期游戏的名字，这里以我们的原神，即 `GI` 为例，**在我自己的电脑上**，上述字符串会是 

`C:\Users\angel\AppData\Local\SSMT\ssmt-package\3Dmigoto\GI\Mods`

然后用你知道的任何方式获取 d3dxskinmanager 的 Mods 文件夹所在路径，得到形如

`X:\to\path\d3dx\home\<username>\work\Mods`

的遗传字符串，这里的 `<username>` 是你自己起的名字，我起了个 `用户名称`，**我自己的电脑上**，上述字符串会是：

`C:\Users\angel\Desktop\d3dx\home\用户名称\work\Mods`

得到两处路径字符串，我们在 cmd 中输入如下文本：

```bash
mklink /j "X:\path\to\d3dx\home\<game>\work\Mods\SSMT_Mods" "X:\path\to\SSMT-package\3dmigoto\<game>\mods" 
```

**在我自己的电脑上**，我应该输入的是：

```bash
mklink /j "C:\Users\angel\Desktop\d3dx\home\用户名称\work\Mods\SSMT_Mods" "C:\Users\angel\AppData\Local\SSMT\ssmt-package\3Dmigoto\GI\Mods"
```



然后回车即可。这样，我们将会建立一个软链接，让 d3dx 能够直接管理 ssmt 中的 mod。

## 还是不会怎么办？

去问 deepseek/ChatGPT/Gimini/Claude/Grok。