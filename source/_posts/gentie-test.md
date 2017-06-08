title: 网易云跟帖使用说明&测试
date: 2017-04-14 11:30:26
tags: 测试
categories: 
- 技术
- 网易云跟帖
---



### 注册网易云跟帖，填写站点信息

注册很简单，可以直接使用网易邮箱或者qq账号登录绑定即可。

然后进入`后台管理`，设置`站点信息`

![设置站点信息](/images/gentie1.png)

<!--more-->

### 获取productKey

![gentie_productKey获取方式](/images/gentie2.png)


### 修改cafe主题配置文件

将`productKey`填到配置属性`gentie_productKey`下。

**注意的有：**

- 1、gentie_productKey后边的冒号别整成中文的冒号了。

- 2、把其他的评论，如多说都关了，设置为false。

- 3、博客网址要正确，如果是https协议，就写https:// 


### 多说评论数据导出导入

进入多说后台管理，工具——导出数据，勾选`包含文章数据`、`包含评论数据`，点击导出评论。然后登陆网易云跟帖后台管理，进行数据导入

详情参考：https://gentie.163.com/help.html#data-import




_跟帖测试效果可以在下边回复_



