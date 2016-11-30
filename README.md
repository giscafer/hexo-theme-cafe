# hexo-theme-cafe

Cafe 主题旨在追求简约、操作简单、阅读舒适度。 或查看英文版介绍[Read in English](./README_en.md)

Inspire by [Landscape](https://github.com/hexojs/hexo-theme-landscape)

响应式，手机预览主题演示demo：

![cafe-qrcode](./cafe-qrcode.png)



## 使用

### 安装

    $ git clone https://github.com/giscafer/hexo-theme-cafe.git themes/cafe


**Cafe 需要 Hexo 2.4 及以上版本支持.**

### 使用主题

    修改博客配置文件 `_config.yml` 主题属性 theme 为 `cafe`.

### 更新升级

    cd themes/cafe
    git pull


## 主题配置

主题 `themes/cafe/_config.yml` 文件内容参考说明配置

```yml
# 头部
menu:
  首页: /
  归档: /archives
rss: /atom.xml

# 内容
excerpt_link: 继续阅读全文 »
fancybox: true

# 侧边栏
sidebar: right
widgets:
- category
- tagcloud
- recent_posts
- archive

# display widgets at the bottom of index pages (pagination == 2)
index_widgets:
# - category
# - tagcloud
# - archive

# 插件行为
archive_type: 'monthly'
show_count: false

# 其他
google_analytics:
favicon: /favicon.png
twitter:
google_plus:
fb_admins:
fb_app_id:


```

- menu - 导航菜单
- rss - RSS 链接
- excerpt_link - "Read More" 在文章底部显示阅读更多字样，设置`false`则隐藏
- fancybox - 启用 Fancybox
- sidebar - 侧边栏（Sidebar）样式。 有 left, right, bottom or false 四个可选属性
- widgets - 在侧边栏`sidebar`显示的组件
- google_analytics - Google Analytics ID
- favicon - Favicon 路径
- twitter - Twiiter ID
- google_plus - Google+ ID


## Features

### Fancybox

Cafe 使用`Fancybox` 展示相册、图片。 您可以使用减记语法或fancybox标签插件添加你的照片。

    ![img caption](img url)

    {% fancybox img_url [img_thumbnail] [img_caption] %}

### Sidebar

你可以设置`sidebar` 配置侧边栏，有 `left`、`right`、`bottom` 三种选择

Cafe 主题提供 5 个内置 widgets:

- category
- tag
- tagcloud
- archives
- recent_posts

你可以在主题配置文件 `widget` 设置选项设置需要的 widgets。


## License

MIT