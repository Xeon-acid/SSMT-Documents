# VitePress踩坑记录。

## 初始化步骤
把项目克隆到本地，或者直接创建新项目。

首先安装一下：

`npm add -D vitepress`

随后初始化一下：

`npx vitepress init`

启动预览：

`npm run docs:dev`

随后即可访问 http://localhost:5173/ 查看效果。

这里安装和初始化一般只需要在Clone操作拿到项目后搞一次，但是随后会经常使用

`npm run docs:dev`

来实时查看修改的效果。

## 不显示样式的BUG

如果按照官方文档正常来搭建，就会导致不显示CSS样式，无法加载CSS，

此时需要我们手动在comfig.mts中添加一行base设置

`base:"/SSMT-Documents/",`

这里base里的内容就是/仓库名称/

这样才能让自动构建的VitePress能够展示出CSS样式

## 自动发布

自动发布的话，按照官方文档的发布指南，正常发布到Github Pages正常操作就可以。

自动发布是VitePress的灵魂所在，让我们无需服务器就能利用Github Pages发布自己的文档。

就算只在本地进行部署，其效果也超越了大部分笔记软件，我用了2年语雀，我觉得比语雀好用。

# 开发工具

目前用的是VSCode

只需要在Terminal中运行
```
npm run docs:dev
```
即可在本地预览效果