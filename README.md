# hexo-theme-cafe

Cafe 主题旨在追求简约、操作简单、阅读舒适度。 英文版介绍 [Read in English](./README_en.md)

Inspire by [Landscape](https://github.com/hexojs/hexo-theme-landscape)，目前版本主要调整了整体的样式，布局细调，以及新增一些widget等，后期会在使用的过程中不断进行调整。

（色调有点像阮大神博客？是的，有借参考，个人觉得看久了眼睛舒服，如果后期调整或者改动大，该版本也会保留，喜欢的朋友拿去）

PC端体验：http://cafe.giscafer.com/ 或参考本人博客 [Giscafer's blog](http://giscafer.com)

响应式兼容手机端，扫码预览演示demo：

![cafe-qrcode](./cafe-qrcode.png)

## [开发历史 Changelog](https://github.com/giscafer/hexo-theme-cafe/wiki/Changelog)

欢迎到[issues](https://github.com/giscafer/hexo-theme-cafe/issues)提建议

## 效果截图

![PC演示](https://raw.githubusercontent.com/giscafer/hexo-theme-cafe/master/assets/pc-display.gif)

![Mobile演示](https://raw.githubusercontent.com/giscafer/hexo-theme-cafe/master/assets/mobie-display.gif)


## 使用

### 安装

    $ git clone https://github.com/giscafer/hexo-theme-cafe.git themes/cafe

或者直接到[releases](https://github.com/giscafer/hexo-theme-cafe/releases)下载最新源码文件，重命名为`cafe`放到博客themes目录下

**Cafe 需要 Hexo 2.4 及以上版本支持.**

### 使用主题

    修改博客配置文件 `_config.yml` 主题属性 theme 为 `cafe`.

### 更新升级

    cd themes/cafe
    git pull


## 主题配置

主题 `themes/cafe/_config.yml` 文件内容参考说明配置

配置教程具体见[_config.yml文件](./_config.yml)注释说明

## Features

### 社区化

支持国内外主流社区分享：

![share](https://github.com/giscafer/hexo-theme-cafe/raw/master/assets/share.png)

支持`Disqus`与`多说`两种方式评论

![share](https://github.com/giscafer/hexo-theme-cafe/raw/master/assets/duoshuo_comment.png)

### Fancybox

Cafe 使用`Fancybox` 展示相册、图片。 您可以使用减记语法或fancybox标签插件添加你的照片。

    ![img caption](img url)

    {% fancybox img_url [img_thumbnail] [img_caption] %}

### Sidebar

你可以设置`sidebar` 配置侧边栏，有 `left`、`right` 二种选择

Cafe 主题提供以下内置 widgets:
- social            # 社交账号链接
- category          # 归类
- tag               # 标签
- tagcloud          # 云标签
- archives          # 归档
- recent_posts      # 最新文章
- lastest_comments  # 最新评论
- hot_comment_posts # 热评文章
- friendly_link     # 友情链接

你可以在主题配置文件 `widget` 设置选项设置需要的 widgets。


## License

MIT

---

> [giscafer.com](http://giscafer.com) &nbsp;&middot;&nbsp;
> GitHub [@giscafer](https://github.com/giscafer) &nbsp;&middot;&nbsp;
> Weibo [@Nickbing Lao](https://weibo.com/laohoubin)