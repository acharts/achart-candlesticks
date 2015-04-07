var Util = require('achart-util'),
    Candlestick = require('./candlestick'),
    Group = require('achart-actived').Group,
    PlotItem = require('achart-plot').Item;

/**
 * @class Chart.Candlesticks
 * 股票k线图

 *  - <a href="http://spmjs.io/docs/achart-candlesticks/" target="_blank">文档</a>
 *  - <a href="http://spmjs.io/docs/achart-candlesticks/wiki/" target="_blank">wiki</a>

 * @extends Chart.PlotItem
 */
var Candlesticks = function(cfg){
    Candlesticks.superclass.constructor.call(this,cfg);
};

Util.extend(Candlesticks,PlotItem);
Util.mixin(Candlesticks,[Group]);

Candlesticks.ATTRS = {
    elCls : 'x-chart-candlesticks',
    zIndex : 6,
    /**
     * 标记的配置项
     * @type {Object}
     */
    candlestick : {},
    /**
     *  初始的candlestick集合配置信息
     *  @type {Array}
     */
    items : null,

    //@private
    candlestickGroup: []
};

Util.augment(Candlesticks,{
    //渲染控件
    renderUI : function(){
        var _self = this;
        Candlesticks.superclass.renderUI.call(_self);
        _self._drawCandlesticks();
    },
    //绑定事件
    bindUI :function(){
        var _self =this;
        _self.on('click',function(ev){
            var candlestick = _self.findBy(function(item){
                return item.containsElement && item.containsElement(ev.target)
            });
            _self.fire('stockclick',{candlestick : candlestick});
        });

        _self.on('mouseover',function(ev){
            var candlestick = _self.findBy(function(item){
                return item.containsElement && item.containsElement(ev.target)
            });
            _self.fire('stockover',{candlestick : candlestick});
        });

        _self.on('mouseout',function(ev){
            var candlestick = _self.findBy(function(item){
                return item.containsElement && item.containsElement(ev.target)
            });
            _self.fire('stockout',{candlestick : candlestick});
        })
    },
    _drawCandlesticks: function(){
        var _self = this,
            candlestickGroup = _self.get('candlestickGroup'),
            items = _self.get('items');

        Util.each(items,function(item,index){
            _self._drawSingle(item);
        });
    },
    _drawSingle: function(item){
        var _self = this,
            candlestickGroup = _self.get('candlestickGroup'),
            candlestick = _self.get('candlestick');

        var cfg = Util.mix({},candlestick,item);
        var group = _self.addGroup(Candlestick,cfg);

        candlestickGroup.push(group);
        return group;
    },
    /**
     * 添加单个candlestick
     * @param {Object} item candlestick的配置信息
     */
    addCandlestick: function(item){
        var _self = this,
            items = _self.get('items');

        if(!items) {
            items = [];
            _self.set('items',items);
        }

        items.push(item);

        return  _self._drawSingle(item);
    },
    /**
     * 删除所有candlestick
     *
     */
    removeAll: function(){
        var _self = this,
            candlestickGroup = _self.get('candlestickGroup');

        Util.each(candlestickGroup,function(item,index){
            item.remove();
        });

        _self.set('candlestickGroup',[]);
        _self.set('items',[]);
    },
    /**
     * 修改candlestick
     * @param {Array} items 新的配置信息
     */
    change: function(items){
        var _self = this;

        _self.removeAll();
        _self.set('items',items);
        _self._drawCandlesticks();

    }
});

module.exports = Candlesticks;