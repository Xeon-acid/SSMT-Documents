import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base:"/SSMT-Documents/",
  title: "SSMT-Documents",
  description: "SSMT's Documtns",
  
  themeConfig: {
    // 提供全局搜索框
    search: { provider: 'local' },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'SSMT文档', link: '/Tutorials/SSMT/SSMT介绍/SSMT介绍' },
      { text: 'SSMT Blender插件文档', link: '/Tutorials/SSMT-Blender-Plugins/(1)分支集合架构/分支集合架构' },
      { text: '各游戏常见问题', link: '/Tutorials/Games/GI/10612-4001解决方案/10612-4001解决方案.md' },
      { text: '常用工具', link: '/Tutorials/Tools/Index.md' },
      { text: '3Dmigoto', link: '/Tutorials/3Dmigoto/3Dmigoto介绍/3Dmigoto介绍' },


      
    ],

    sidebar: {
      '/Tutorials/SSMT/':[{
        text: 'SSMT文档',
        items: [
          { text: 'SSMT介绍', link: '/Tutorials/SSMT/SSMT介绍/SSMT介绍' },
          { text: '(1)SSMT安装教程', link: '/Tutorials/SSMT/(1)SSMT安装教程/SSMT安装教程' },
          { text: '(2)SSMT Blender插件安装教程', link: '/Tutorials/SSMT/(2)SSMT Blender插件安装教程/SSMT的Blender插件安装教程' },
          { text: '(3)SSMT运行日志', link: '/Tutorials/SSMT/(3)SSMT运行日志/SSMT运行日志' },
          { text: '(4)找不到数据类型解决办法', link: '/Tutorials/SSMT/(4)找不到数据类型解决办法/找不到数据类型解决办法' },
          { text: '(5)提取的模型导入后UV错误', link: '/Tutorials/SSMT/(5)提取的模型导入后UV错误/提取的模型导入后UV错误' },
          { text: '(6)Dump直接卡到游戏掉线', link: '/Tutorials/SSMT/(6)Dump直接卡到游戏掉线/Dump直接卡到游戏掉线' },
          { text: '(7)SSMT使用流程', link: '/Tutorials/SSMT/(7)SSMT使用流程/SSMT使用流程' },
          { text: '(8)Symlink特性', link: '/Tutorials/SSMT/(8)Symlink特性/Symlink特性' },
          { text: '(9)贴图格式转换', link: '/Tutorials/SSMT/(9)贴图格式转换/贴图格式转换' },
          { text: '(10)开关红字报错显示', link: '/Tutorials/SSMT/(10)开关红字报错显示/开关红字报错显示' },
        ]
      }],

      '/Tutorials/SSMT-Blender-Plugins/':[{
        text: 'SSMT Blender插件文档',
        items: [
          { text: '(1)分支集合架构', link: '/Tutorials/SSMT-Blender-Plugins/(1)分支集合架构/分支集合架构' },
          { text: '★平滑法线存TEXCOORD1.xy', link: '/Tutorials/SSMT-Blender-Plugins/★平滑法线存TEXCOORD1.xy/★平滑法线存TEXCOORD1.xy' },
          { text: '★投影TEXCOORD2.xy(近似)', link: '/Tutorials/SSMT-Blender-Plugins/★投影TEXCOORD2.xy(近似)/★投影TEXCOORD2.xy(近似)' },
        ]
      }],

      '/Tutorials/Games/':[
        {
          text: 'GI',
          items: [
            { text: '10612-4001解决方案', link: '/Tutorials/Games/GI/10612-4001解决方案/10612-4001解决方案' },
            { text: 'Mod变成一坨', link: '/Tutorials/Games/GI/Mod变成一坨/Mod变成一坨' },
            { text: 'COLOR不同导致Mod无法显示', link: '/Tutorials/Games/GI/COLOR不同导致Mod无法显示/COLOR不同导致Mod无法显示' },
            { text: '原神角色轮廓线修复', link: '/Tutorials/Games/GI/原神角色轮廓线修复/原神角色轮廓线修复' },
            { text: '原神脸部隐藏问题', link: '/Tutorials/Games/GI/原神脸部隐藏问题/原神脸部隐藏问题' },
          ]
        },
        {
          text: 'HI3',
          items: [
            { text: '崩坏三角色轮廓线修复', link: '/Tutorials/Games/HI3/崩坏三角色轮廓线修复/崩坏三角色轮廓线修复' },
          ]
        },
        {
          text: 'HSR',
          items: [
            { text: 'UV2是干什么的', link: '/Tutorials/Games/HSR/UV2是干什么的/UV2是干什么的' },
            { text: '动态Mod导致角色描边抽搐', link: '/Tutorials/Games/HSR/动态Mod导致角色描边抽搐/动态Mod导致角色描边抽搐' },
            { text: '贴图槽位乱窜问题', link: '/Tutorials/Games/HSR/贴图槽位乱窜问题/贴图槽位乱窜问题' },
            { text: '崩铁角色轮廓线修复', link: '/Tutorials/Games/HSR/崩铁角色轮廓线修复/崩铁角色轮廓线修复' },
            { text: '崩铁角色黄色描边修复', link: '/Tutorials/Games/HSR/崩铁角色黄色描边修复/崩铁角色黄色描边修复' },
            { text: '部分动作导致Mod炸裂', link: '/Tutorials/Games/HSR/部分动作导致Mod炸裂/部分动作导致Mod炸裂' },

          ]
        },
        {
          text: 'ZZZ',
          items: [
            { text: 'Mod法线贴图错误问题', link: '/Tutorials/Games/ZZZ/Mod法线贴图错误问题/Mod法线贴图错误问题' },
            { text: '上下身体分开的问题', link: '/Tutorials/Games/ZZZ/上下身体分开的问题/上下身体分开的问题' },
            { text: '关闭动态高精度', link: '/Tutorials/Games/ZZZ/关闭动态高精度/关闭动态高精度' },
            { text: '完美阴影和轮廓线', link: '/Tutorials/Games/ZZZ/完美阴影和轮廓线/完美阴影和轮廓线' },
            { text: '虚假头发问题', link: '/Tutorials/Games/ZZZ/虚假头发问题/虚假头发问题' },

          ]
        },
        {
          text: 'YYSLS',
          items: [
            { text: 'YYSLS无法注入问题', link: '/Tutorials/Games/YYSLS/YYSLS无法注入问题/YYSLS无法注入问题' },
          ]
        },
        {
          text: 'WWMI',
          items: [
            { text: '如何正确配置进程路径', link: '/Tutorials/Games/WWMI/如何正确配置进程路径/如何正确配置进程路径' },
          ]
        },
        {
          text: 'LiarsBar',
          items: [
            { text: '手枪模型只有一个能完整显示', link: '/Tutorials/Games/LiarsBar/手枪模型只有一个能完整显示/手枪模型只有一个能完整显示' },
          ]
        },
        {
          text: 'GF2',
          items: [
            { text: 'GF2人物模型删减与偏移教程', link: '/Tutorials/Games/GF2/GF2人物模型删减与偏移教程/GF2人物模型删减与偏移教程' },
          ]
        },
      ],
      '/Tutorials/Tools/':[{
        text: '常用工具',
        items: [
          { text: 'Vertex Color Master', link: '/Tutorials/Tools/Vertex Color Master/Vertex Color Master' },
          { text: 'Material Combiner', link: '/Tutorials/Tools/Material Combiner/Material Combiner' },
          { text: 'Paint.net', link: '/Tutorials/Tools/Paint.net/Paint.net' },

        ]
      }],
      '/Tutorials/3Dmigoto/':[{
        text: '3Dmigoto',
        items: [
          { text: '3Dmigoto介绍', link: '/Tutorials/3Dmigoto/3Dmigoto介绍/3Dmigoto介绍' },
          { text: '如何手动安装Mod', link: '/Tutorials/3Dmigoto/如何手动安装Mod/如何手动安装Mod' },
          { text: '没有小键盘如何使用Hunting界面', link: '/Tutorials/3Dmigoto/没有小键盘如何使用Hunting界面/没有小键盘如何使用Hunting界面' },

        ]
      }],
    },

    footer: {
        copyright: 'By <a href="https://github.com/StarBobis">NicoMico</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/StarBobis/SSMT' },
      { icon: 'discord', link: 'https://discord.gg/sMdsGAptss' }
    ]
  }
})
