var extend = hexo.extend;
var route = hexo.route;
var path = require('path');
var fs = require('fs');
var moment = require('moment');
var filePath = path.join(__dirname, '../source/js/');

/**
 * 生成随机文章
 */
extend.generator.register('random_post', function (locals, render, callback) {
    var posts = locals.posts;
    var SitePosts = [];
    posts.each(function (item) {
        // console.log(item.excerpt);
        SitePosts.push({
            title: item.title,
            date: moment(item.date).format('YYYY.MM.DD'),
            uri: item.path,
            excerpt: getExcerpt(item.excerpt)
        });
    })
    fs.writeFile(filePath + 'posts.js', JSON.stringify(SitePosts), function (err) {
        if (err) {
            console.error(err);
            console.log('随机文章生成失败！');
            render();
        } else {
            console.log('随机文章生成成功！');
            render();
        }
    });
    if (callback) {
        callback();
    }
});
function getExcerpt(excerpt) {
/*    excerpt = excerpt.replace(/<h2 /g, '').replace(/<\/h2>/g, '')
        .replace(/<img/g, '').replace(/<\/img>/g, '')
    return excerpt.substring(0, 80);*/
    return "";
}
hexo.on('generateBefore', function (locals) {
})
hexo.on('generateAfter', function (locals) {
})