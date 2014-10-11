var expect = require('expect.js');
var Candlestick = require('../src/candlestick'),
    Candlesticks = require('../src/candlesticks'),
    simulate = require('event-simulate'),
    sinon = require('sinon'),
    Canvas = require('achart-canvas'),
    Util = require('achart-util');

var node = Util.createDom('<div id="s1"></div>');
document.body.appendChild(node);

var canvas = new Canvas({
    id : 's1',
    width : 1000,
    height : 500
});

describe('achart-candlestick',function(){
    var candlestick = canvas.addGroup(Candlestick,{

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
        /**
         * 上升的图形的配置信息
         * @type {Object}
         */
        riseShape: {
            width: 20,
            stroke : '#000000',
            fill : 'red'
        },
        /**
         * 下降的图形的配置信息
         * @type {Object}
         */
        fallShape: {
            width: 20,
            stroke : '#000000',
            fill : 'green'
        },
        /**
         * 点信息
         * @type {Array}
         * [open,high,low,close]
         */
        points : [
            {
                x: 50,
                y: 100,
                value: 100
            },
            {
                x: 50,
                y: 50,
                value: 200
            },
            {
                x: 50,
                y: 200,
                value: 50
            },
            {
                x: 50,
                y: 150,
                value: 75
            }
        ]

    });
    var candlestick1 = canvas.addGroup(Candlestick,{

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
        /**
         * 上升的图形的配置信息
         * @type {Object}
         */
        riseShape: {
            width: 20,
            stroke : '#000000',
            fill : 'red'
        },
        /**
         * 下降的图形的配置信息
         * @type {Object}
         */
        fallShape: {
            width: 20,
            stroke : '#000000',
            fill : 'green'
        },
        /**
         * 点信息
         * @type {Array}
         * [open,high,low,close]
         */
        points : [
            {
                x: 150,
                y: 100,
                value: 100
            },
            {
                x: 150,
                y: 30,
                value: 200
            },
            {
                x: 150,
                y: 200,
                value: 50
            },
            {
                x: 150,
                y: 50,
                value: 175
            }
        ]

    })

    it('单个Candlestick生成', function() {
        expect(candlestick.get('children').length).to.be(2);
    });
})

describe('achart-candlesticks',function(){
    var candlesticks = canvas.addGroup(Candlesticks,{
        events: {
            stockclick: function(ev){
            },
            stockover: function(ev){
            },
            stockout: function(ev){
            }
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
    it('生成', function() {
        expect(candlesticks.get('children').length).to.be(2);
    });

    it('加一条数据', function() {
        candlesticks.addCandlestick(
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
                        x: 450,
                        y: 100,
                        value: 100
                    },
                    {
                        x: 450,
                        y: 50,
                        value: 200
                    },
                    {
                        x: 450,
                        y: 200,
                        value: 50
                    },
                    {
                        x: 450,
                        y: 150,
                        value: 75
                    }
                ]

            }
        );
        expect(candlesticks.get('children').length).to.be(3);
    });

    it('change', function() {
        candlesticks.change([{
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
                    x: 550,
                    y: 100,
                    value: 100
                },
                {
                    x: 550,
                    y: 50,
                    value: 200
                },
                {
                    x: 550,
                    y: 200,
                    value: 50
                },
                {
                    x: 550,
                    y: 150,
                    value: 75
                }
            ]

        },{
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
                    x: 650,
                    y: 100,
                    value: 100
                },
                {
                    x: 650,
                    y: 50,
                    value: 200
                },
                {
                    x: 650,
                    y: 200,
                    value: 50
                },
                {
                    x: 650,
                    y: 150,
                    value: 75
                }
            ]

        }])

        expect(candlesticks.get('children').length).to.be(2);
    });

    it('click',function(){
        var callback = sinon.spy();
        candlesticks.on('stockclick',callback);
        simulate.simulate(candlesticks.getFirst().getFirst().get('node'),'click');
        expect(callback.called).to.be(true);
    })

    it('mouseover',function(){
        var callback = sinon.spy();
        candlesticks.on('stockover',callback);
        simulate.simulate(candlesticks.getFirst().getFirst().get('node'),'mouseover');
        expect(callback.called).to.be(true);
    })

    it('mouseout',function(){
        var callback = sinon.spy();
        candlesticks.on('stockout',callback);
        simulate.simulate(candlesticks.getFirst().getFirst().get('node'),'mouseout');
        expect(callback.called).to.be(true);
    })

})