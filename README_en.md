# hexo-theme-cafe

Cafe is aimed at the pursuit of simplicity, simple operation, reading comfort. Read in Chinese[中文介绍](./README.md)

Inspire by [Landscape](https://github.com/hexojs/hexo-theme-landscape)

Online Demo：http://cafe.giscafer.com/

There is a demo On a mobile phone：

[cafe-qrcode](./cafe-qrcode.png)


## ScreenShot

![PC display](https://raw.githubusercontent.com/giscafer/hexo-theme-cafe/master/assets/pc-display.gif)

![Mobile display](https://raw.githubusercontent.com/giscafer/hexo-theme-cafe/master/assets/mobie-display.gif)


## Usage

### Install

    $ git clone https://github.com/giscafer/hexo-theme-cafe.git themes/cafe


**Cafe requires Hexo 2.4 and above.**

### Enable

    Modify theme setting in `_config.yml` to cafe.

### Update

    cd themes/cafe
    git pull


## Configuration

```yml
# Header
menu:
  Home: /
  Archives: /archives
rss: /atom.xml

# show in footer
email: 'youremail@outlook.com'

# Content
excerpt_link: Read More »
fancybox: true

# Sidebar
sidebar: right
# post:show in the right of post page;widget:show as a widget
content_position: widget
# content will diplay as fixed style when setting true 
content_display_fixed: true

widgets:
- post_content      # post content
- category
- tagcloud
- recent_posts
- archive
- lastest_comments
- hot_comment_posts

# display widgets at the bottom of index pages (pagination == 2)
index_widgets:
# - category
# - tagcloud
# - archive

# widget behavior
archive_type: 'monthly'
show_count: false

# TagClound Color
# Colorizes the tag cloud when set true
tagcloud_color: false 

# Miscellaneous
google_analytics:
favicon: /favicon.png
# 若使用多说，此处填写的是多说评论账号ID
# 若使用Disqus，请在博客 config 文件中填写disqus_shortname，并设置duosuo: false关闭多说评论
duoshuo_shortname: false
twitter:
google_plus:
fb_admins:
fb_app_id:


```

- menu - Navigation menu
- rss - RSS link
- excerpt_link - "Read More" link at the bottom of excerpted articles. false to hide the link.
- fancybox - Enable Fancybox
- sidebar - Sidebar style. You can choose left, right, bottom or false.
- widgets - Widgets displaying in sidebar
- google_analytics - Google Analytics ID
- favicon - Favicon path
- twitter - Twiiter ID
- google_plus - Google+ ID


## Features

### Fancybox

Cafe uses Fancybox to showcase your photos. You can use Markdown syntax or fancybox tag plugin to add your photos.

    ![img caption](img url)

    {% fancybox img_url [img_thumbnail] [img_caption] %}

### Sidebar

You can put your sidebar in left side, right side or bottom of your site by editing sidebar setting.

Cafe provides**7**built-in widgets:

- category
- tag
- tagcloud
- archives
- recent_posts
- lastest_comments
- hot_comment_posts

All of them are enabled by default. You can edit them in `widget` setting.

## [开发历史 Changelog](https://github.com/giscafer/hexo-theme-cafe/wiki/Changelog)



## License

MIT