# 简介

----

画布模块的简介

----

## 目录

  * 为什么创建这个模块
  * 可以做什么
  * 包含的内容

### 为什么

 * 这个模块作为图形库的基础库，用来绘制图形。由于这个图形库是针对的是PC端的应用，兼容所有主流浏览器，所以需要支持svg和vml,由于vml和svg的差异和难点，所以这个模块基于[raphael](http://raphaeljs.com/)封装了一层，便于更高层次的模块使用。
 * 我们在raphael的基础上增加了分组的概念，便于批量操作图形和组织图形，便于开发和调试.
 * 由于raphael比较大，很多功能未使用上，所以后期的版本会基于raphael做简化。

### 可以做什么

  * 作为图形库的基础库使用
  * 实现的通用图表
  * 实现个性化的可视化控件

### 包含的内容

  * [画布](2-canvas.md)
  * [分组](3-group.md)
  * [图形](4-shape.md)
  * [事件](5-event.md)
  * [扩展分组和图形](6-extend.md)

