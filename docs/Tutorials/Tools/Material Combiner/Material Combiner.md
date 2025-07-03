# material combiner addon
项目地址：

https://github.com/Grim-es/material-combiner-addon

# 注意事项
- 安装完成插件后，需要点击面板里的Install Pillow，然后安装完成后重启Blender才能正常使用Material Combiner插件。
- 必须使用Blender的英文界面，其它语言的界面100%会导致Material Combiner用不了，此BUG最新版本仍然未修复。

# 用途
- 在Mod制作中，一般用于快速合并两个部位的贴图到一个贴图上，UV会自动对齐，随后将导出的Atlas转为dds格式，以此dds为基础，去PS中手动拼接其它贴图，方便偷懒节省拼UV时间。
  
# 缺点

- 自动对齐的UV如果设置不正确会导致dds文件变得很大，很多无效的空间占用，不如手动拼接贴图省贴图大小。