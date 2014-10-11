# achart-candlesticks [![spm version](http://spmjs.io/badge/achart-candlesticks)](http://spmjs.io/package/achart-candlesticks)

---

生成多个Candlesticks

  * [wiki 文档](wiki/)

---

candlesticks for acharts

## Install

```
$ spm install achart-candlesticks --save
```

## Usage

```js
var achartCandlesticks = require('achart-candlesticks');
// use achartCandlesticks
```

## Candlesticks

candlestick的管理控件。

### 配置项

  * __candlestick__ 所有candlestick的默认配置项,见下面candlestick
  * __items__ 初始的candlestick集合配置信息

### 方法

  * addCandlestick(item) 添加candlestick
  * removeAll() 删除所有candlestick
  * change(items) 更改所有的candlestick

### 事件

  * stockclick 点击candlestick

    * ev：事件对象，通过ev.candlestick获取candlestick对象，通过ev.candlestick获取candlestick属性内容

  * stockover 鼠标移到candlestick

      * ev：事件对象，通过ev.candlestick获取candlestick对象，通过ev.candlestick获取candlestick属性内容

  * stockout 鼠标移出candlestick

      * ev：事件对象，通过ev.candlestick获取candlestick对象，通过ev.candlestick获取candlestick属性内容

### 更多

 * 由于candlesticks使用了 Actived.Group的扩展所以可以使用此扩展的所有的[属性和方法](http://spmjs.io/docs/achart-actived/latest/)

## candlestick

一种图形标记，包含文本和连接线。

### 配置项

 * __riseLine__ {object} 上升线的配置信息,详见[line](http://spmjs.io/docs/achart-canvas/#line)
 * __fallLine__ {object} 下降线的配置信息,详见[line](http://spmjs.io/docs/achart-canvas/#line)
 * __riseShape__ {object} 上升的图形的配置信息,详见[rect](http://spmjs.io/docs/achart-canvas/#rect)
 * __fallShape__ {object} 下降的图形的配置信息,详见[rect](http://spmjs.io/docs/achart-canvas/#rect)
 * __points__ {Array} 点信息数据，格式为[open,high,low,close]
 * __singleWidth__ {Number} 蜡烛的统一宽度

### 方法

  * change(cfg) 修改candlestick配置，会触发重绘

### 更多

 * 由于candlestick使用了 Actived.Group的扩展所以可以使用此扩展的所有的[属性和方法](http://spmjs.io/docs/achart-actived/latest/)