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
      { text: 'SSMT文档', link: '/Tutorials/SSMT/(1)SSMT安装教程/SSMT安装教程' },
      { text: 'SSMT Blender插件文档', link: '/Tutorials/SSMT-Blender-Plugins/(1)分支集合架构/分支集合架构' },
    ],

    sidebar: [
      {
        text: 'SSMT文档',
        items: [
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
      },
      {
        text: 'SSMT Blender插件文档',
        items: [
          { text: '(1)分支集合架构', link: '/Tutorials/SSMT-Blender-Plugins/(1)分支集合架构/分支集合架构' },
          { text: '★平滑法线存TEXCOORD1.xy', link: '/Tutorials/SSMT-Blender-Plugins/★平滑法线存TEXCOORD1.xy/★平滑法线存TEXCOORD1.xy' },
          { text: '★投影TEXCOORD2.xy(近似)', link: '/Tutorials/SSMT-Blender-Plugins/★投影TEXCOORD2.xy(近似)/★投影TEXCOORD2.xy(近似)' }

        ]
      }
    ],

    footer: {
        copyright: 'By <a href="https://github.com/StarBobis">NicoMico</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/StarBobis/SSMT' },
      { icon: 'discord', link: 'https://discord.gg/sMdsGAptss' }
    ]
  }
})
