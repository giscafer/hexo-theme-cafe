title: Mathjax测试帖
date: 2017-4-15 23:20:32
tags:
- mathjax
categories: 
- Cafe演示
- mathjax
mathjax: true
----
---

### 公式代码举例

    $$\sum_{i=1}^n a_i=0$$

$$\sum_{i=1}^n a_i=0$$

<!--more-->

    $$f(x_1,x_2,\ldots,x_n) = x_1^2 + x_2^2 + \cdots + x_n^2$$ 

$$f(x_1,x_2,\ldots,x_n) = x_1^2 + x_2^2 + \cdots + x_n^2$$ 

    $$\left(\frac{\sqrt x}{y^3}\right)$$

$$\left(\frac{\sqrt x}{y^3}\right)$$


    $$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$


$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$


### 使用方式

在博客配置文件 `_config.yml` 中设置mathjax的`enable`属性为`true`即可开启mathjax语法，支持数学公式书写；`per_page`如果为true表示所有文章都设置支持mathjax，如果为false，则在需要支持mathjax的文章加上`mathjax: true`


以下为本文章的markdown代码:

```markdown

title: Mathjax测试帖
date: 2017-4-15 23:20:32
tags:
- mathjax
categories: 
- Cafe演示
- mathjax
mathjax: true
----
---

### 如下举例

    $$\sum_{i=1}^n a_i=0$$

$$\sum_{i=1}^n a_i=0$$

    $$f(x_1,x_2,\ldots,x_n) = x_1^2 + x_2^2 + \cdots + x_n^2$$ 

$$f(x_1,x_2,\ldots,x_n) = x_1^2 + x_2^2 + \cdots + x_n^2$$ 

    $$\left(\frac{\sqrt x}{y^3}\right)$$

$$\left(\frac{\sqrt x}{y^3}\right)$$


    $$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$


$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$


```