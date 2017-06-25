var extend = hexo.extend;
var route = hexo.route;
var path = require('path');
var fs = require('fs');
var moment = require('moment');
var filePath = path.join(__dirname, '../source/js/');

/**
 * 生成随机文章
 */
extend.generator.register('random_post',function (locals, render, callback) {
    var posts = locals.posts;
    var SitePosts = [];
    posts.each(function (item) {
        // console.log(item.excerpt);
        SitePosts.push({ title: item.title,date:moment(item.date).format('YYYY.MM.DD'), uri: item.path, excerpt: item.excerpt.substring(0,150) });
    })
    fs.writeFile(filePath + 'posts.js', JSON.stringify(SitePosts), function (err) {
        if (err) {
            console.error(err);
            console.log('随机文章生成失败！')
        } else {
            console.log('随机文章生成成功！');
            return null;
        }
    });
    if(callback){
        callback();
    }
});

hexo.on('generateBefore', function (locals) {
    console.log('generateBefore')
})
hexo.on('generateAfter', function () {
   console.log('generateAfter')
})