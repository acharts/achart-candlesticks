# Demo

---

## Normal usage

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
