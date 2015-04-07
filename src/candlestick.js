/**
 * @fileOverview 股票k线图 单个节点
 * @ignoreig
 */

var Util = require('achart-util'),
    Item = require('achart-plot').Item;

/**
 * @class Chart.Candlesticks.Candlestick
 * 图形标记，包含文本和连接线
 */
var Candlestick = function (cfg) {
    Candlestick.superclass.constructor.call(this,cfg);
};


Candlestick.ATTRS = {
    /**
     * 上升线的配置信息
     * @type {Object}
     */
    riseLine : null,
    /**
     * 下降线的配置信息
     * @type {Object}
     */
    fallLine : null,
    /**
     * 上升的图形的配置信息
     * @type {Object}
     */
    riseShape: null,
    /**
     * 下降的图形的配置信息
     * @type {Object}
     */
    fallShape: null,
    /**
     * 点信息
     * @type {Array}
     * [open,high,low,close]
     */
    points : null,
    /**
     * 单个蜡烛的宽度
     * @type {Number}
     */
    singleWidth: null
};

Util.extend(Candlestick,Item);

Util.augment(Candlestick,{
    //渲染控件
    renderUI : function(){
        var _self = this;
        Candlestick.superclass.renderUI.call(_self);
        _self._drawCandlestick();
    },
    _drawCandlestick: function(){
        var _self = this;

        //判断涨还是跌
        _self._setType();
        //画线
        _self._drawLine();
        //画图形
        _self._drawShape();
    },
    //判断涨还是跌
    _setType: function(){
        var _self = this,
            points = _self.get('points'),
            openPoint = points[0],
            closePoint = points[3];

        var isRise = openPoint.value >= closePoint.value ? false : true;

        _self.set('isRise',isRise);
    },
    //画线
    _drawLine: function(){
        var _self = this,
            isRise = _self.get('isRise'),
            lineAttr = isRise ? _self.get('riseLine') : _self.get('fallLine'),
            points = _self.get('points'),
            highPoint = points[1],
            lowPoint = points[2];

        var cfg = Util.mix(lineAttr,{
            x1: highPoint.x,
            y1: highPoint.y,
            x2: lowPoint.x,
            y2: lowPoint.y
        });

        var line = _self.addShape('line',cfg);

        _self.set('lineShape',line);
    },
    //画图形
    _drawShape: function(){
        var _self = this,
            points = _self.get('points'),
            isRise = _self.get('isRise'),
            shapeCfg = isRise ? _self.get('riseShape') : _self.get('fallShape'),
            openPoint = points[0],
            closePoint = points[3];

        var width = _self.get('singleWidth') || shapeCfg.width || 20;

        var cfg = Util.mix(shapeCfg,{
            x: openPoint.x - width/2,
            y: Math.min(openPoint.y, closePoint.y),
            width: width,
            height: Math.max(Math.abs(openPoint.y - closePoint.y),0.1)
        });

        var rect = _self.addShape('rect',cfg);

        _self.set('rectShape', rect);
    }
});

module.exports = Candlestick;