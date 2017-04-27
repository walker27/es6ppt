title: javascript ES6语法简介
speaker: 郑州
url: https://github.com/ksky521/nodePPT
transition: zoomin
theme: dark
files: /js/demo.js,/css/demo.css

[slide]

# javascript ES6语法简介

[slide]

# 封面样式2 {:&.flexbox.vleft}
## 左对齐
- 1 {:&.fadeIn}
- 2
[slide style="background-image:url('/img/bg1.png')"]

## 使用背景

[slide]
## 使用.class/#id/自定义属性样式
----

```javascript
function Point(x = 0, y = 0){
    this.x = x;
    this.y = y;
}
let p = new Point();
p // { x: 0, y: 0 }
```

[slide]

## 主页面样式
### ----是上下分界线
----

nodeppt是基于nodejs写的支持 **Markdown!** 语法的网页PPT，当前版本：1.4.2

Github：https://github.com/ksky521/nodePPT
