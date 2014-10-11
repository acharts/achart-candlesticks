# Candlesticks 使用

---

使用candlestick

---

## 目录

  * candlestick的类型和配置
  * 使用candlesticks管理candlestick
  * candlestick 事件

### candlestick 的类型

  * candlestick 是Canvas.Group.candlestick类，通过 传入的数据标志单个数据的股票走势。

````html

<div id="f1"></div>

````

````javascript
seajs.use(['../src/candlestick','achart-canvas'], function(candlestick,Canvas) {
    var canvas = new Canvas({
        id : 'f1',
        width : 500,
        height : 200
      });

    var candlestick = canvas.addGroup(candlestick,{
        riseLine : {
            stroke: 'red'
        },
        fallLine : {
            stroke: 'green'
        },
        riseShape: {
            width: 20,
            stroke : '#000000',
            fill : 'red'
        },
        fallShape: {
            width: 20,
            stroke : '#000000',
            fill : 'green'
        },
        points : [
            {
                x: 350,
                y: 100,
                value: 100
            },
            {
                x: 350,
                y: 50,
                value: 200
            },
            {
                x: 350,
                y: 200,
                value: 50
            },
            {
                x: 350,
                y: 150,
                value: 75
            }
        ]
    });
});

````

### 使用candlesticks管理candlestick

  * 页面有多个candlesticks一起使用，如果单个使用candlestick，逻辑非常分散，抽出来candlesticks做一个candlestick的管理


````html

<div id="f2"></div>

````

````javascript
seajs.use(['index','achart-canvas'], function(candlesticks,Canvas) {
    var canvas = new Canvas({
        id : 'f2',
        width : 500,
        height : 200
      });

    var candlesticks = canvas.addGroup(candlesticks,{
        events: {
          stockclick: function(ev){
              console.log(ev.candlestick);
          },
          stockover: function(ev){
              console.log(ev.candlestick);
          },
          stockout: function(ev){
              console.log(ev.candlestick);
          },
        },
        items : [
            {
                /**
                 * 连接线的配置信息
                 * @type {Object}
                 */
                riseLine : {
                    stroke: 'red'
                },
                /**
                 * 连接线的配置信息
                 * @type {Object}
                 */
                fallLine : {
                    stroke: 'green'
                },
                riseShape: {
                    width: 20,
                    stroke : '#000000',
                    fill : 'red'
                },
                fallShape: {
                    width: 20,
                    stroke : '#000000',
                    fill : 'green'
                },
                points : [
                    {
                        x: 250,
                        y: 100,
                        value: 100
                    },
                    {
                        x: 250,
                        y: 30,
                        value: 200
                    },
                    {
                        x: 250,
                        y: 200,
                        value: 50
                    },
                    {
                        x: 250,
                        y: 50,
                        value: 175
                    }
                ]

            },
            {

                /**
                 * 连接线的配置信息
                 * @type {Object}
                 */
                riseLine : {
                    stroke: 'red'
                },
                /**
                 * 连接线的配置信息
                 * @type {Object}
                 */
                fallLine : {
                    stroke: 'green'
                },
                riseShape: {
                    width: 20,
                    stroke : '#000000',
                    fill : 'red'
                },
                fallShape: {
                    width: 20,
                    stroke : '#000000',
                    fill : 'green'
                },
                points : [
                    {
                        x: 350,
                        y: 100,
                        value: 100
                    },
                    {
                        x: 350,
                        y: 30,
                        value: 200
                    },
                    {
                        x: 350,
                        y: 200,
                        value: 50
                    },
                    {
                        x: 350,
                        y: 50,
                        value: 175
                    }
                ]

            }
        ]
  });
});

````

### candlestick 事件

* candlesticks提供了 stockclick 事件，鼠标点击触发，通过ev.candlestick获取到candlestick对象
* candlesticks提供了 stockover 事件，鼠标移入触发，通过ev.candlestick获取到candlestick对象
* candlesticks提供了 stockout 事件，鼠标移出触发，通过ev.candlestick获取到candlestick对象