// instrument by jscoverage, do not modifly this file
(function () {
  var BASE;
  if (typeof global === 'object') {
    BASE = global;
  } else if (typeof window === 'object') {
    BASE = window;
  } else {
    throw new Error('[jscoverage] unknow ENV!');
  }
  if (!BASE._$jscoverage) {
    BASE._$jscoverage = {};
    BASE._$jscoverage_cond = {};
    BASE._$jscoverage_done = function (file, line, express) {
      if (arguments.length === 2) {
        BASE._$jscoverage[file][line] ++;
      } else {
        BASE._$jscoverage_cond[file][line] ++;
        return express;
      }
    };
    BASE._$jscoverage_init = function (base, file, lines) {
      var tmp = [];
      for (var i = 0; i < lines.length; i ++) {
        tmp[lines[i]] = 0;
      }
      base[file] = tmp;
    };
  }
})();
_$jscoverage_init(_$jscoverage, "/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js",[1,11,12,15,16,18,36,39,40,41,45,46,47,48,50,53,54,55,57,60,61,62,64,68,72,73,77,81,82,84,85,92,95,96,97,100,102,109,112,113,116,117,124,126,127,128,133]);
_$jscoverage_init(_$jscoverage_cond, "/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js",[95]);
_$jscoverage["/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js"].source = ["var Util = require('achart-util'),","    Candlestick = require('./candlestick'),","    Group = require('achart-actived').Group,","    PlotItem = require('achart-plot').Item;","","/**"," * @class Chart.Group.Candlesticks"," * 股票k线图"," * @extends Chart.PlotItem"," */","var Candlesticks = function(cfg){","    Candlesticks.superclass.constructor.call(this,cfg);","};","","Util.extend(Candlesticks,PlotItem);","Util.mixin(Candlesticks,[Group]);","","Candlesticks.ATTRS = {","    elCls : 'x-chart-candlesticks',","    zIndex : 6,","    /**","     * 标记的配置项","     * @type {Object}","     */","    candlestick : {},","    /**","     *  初始的candlestick集合配置信息","     *  @type {Array}","     */","    items : null,","","    //@private","    candlestickGroup: []","};","","Util.augment(Candlesticks,{","    //渲染控件","    renderUI : function(){","        var _self = this;","        Candlesticks.superclass.renderUI.call(_self);","        _self._drawCandlesticks();","    },","    //绑定事件","    bindUI :function(){","        var _self =this;","        _self.on('click',function(ev){","            var candlestick = _self.findBy(function(item){","                return item.containsElement && item.containsElement(ev.target)","            });","            _self.fire('stockclick',{candlestick : candlestick});","        });","","        _self.on('mouseover',function(ev){","            var candlestick = _self.findBy(function(item){","                return item.containsElement && item.containsElement(ev.target)","            });","            _self.fire('stockover',{candlestick : candlestick});","        });","","        _self.on('mouseout',function(ev){","            var candlestick = _self.findBy(function(item){","                return item.containsElement && item.containsElement(ev.target)","            });","            _self.fire('stockout',{candlestick : candlestick});","        })","    },","    _drawCandlesticks: function(){","        var _self = this,","            candlestickGroup = _self.get('candlestickGroup'),","            items = _self.get('items');","","        Util.each(items,function(item,index){","            _self._drawSingle(item);","        });","    },","    _drawSingle: function(item){","        var _self = this,","            candlestickGroup = _self.get('candlestickGroup'),","            candlestick = _self.get('candlestick');","","        var cfg = Util.mix({},candlestick,item);","        var group = _self.addGroup(Candlestick,cfg);","","        candlestickGroup.push(group);","        return group;","    },","    /**","     * 添加单个candlestick","     * @param {Object} item candlestick的配置信息","     */","    addCandlestick: function(item){","        var _self = this,","            items = _self.get('items');","","        if(!items) {","            items = [];","            _self.set('items',items);","        }","","        items.push(item);","","        return  _self._drawSingle(item);","    },","    /**","     * 删除所有candlestick","     *","     */","    removeAll: function(){","        var _self = this,","            candlestickGroup = _self.get('candlestickGroup');","","        Util.each(candlestickGroup,function(item,index){","            item.remove();","        });","","        _self.set('candlestickGroup',[]);","        _self.set('items',[]);","    },","    /**","     * 修改candlestick","     * @param {Array} items 新的配置信息","     */","    change: function(items){","        var _self = this;","","        _self.removeAll();","        _self.set('items',items);","        _self._drawCandlesticks();","","    }","});","","module.exports = Candlesticks;"];
_$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 1);
var Util = require("achart-util"), Candlestick = require("./candlestick"), Group = require("achart-actived").Group, PlotItem = require("achart-plot").Item;

_$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 11);
var Candlesticks = function(cfg) {
    _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 12);
    Candlesticks.superclass.constructor.call(this, cfg);
};

_$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 15);
Util.extend(Candlesticks, PlotItem);

_$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 16);
Util.mixin(Candlesticks, [ Group ]);

_$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 18);
Candlesticks.ATTRS = {
    elCls: "x-chart-candlesticks",
    zIndex: 6,
    candlestick: {},
    items: null,
    candlestickGroup: []
};

_$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 36);
Util.augment(Candlesticks, {
    renderUI: function() {
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 39);
        var _self = this;
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 40);
        Candlesticks.superclass.renderUI.call(_self);
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 41);
        _self._drawCandlesticks();
    },
    bindUI: function() {
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 45);
        var _self = this;
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 46);
        _self.on("click", function(ev) {
            _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 47);
            var candlestick = _self.findBy(function(item) {
                _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 48);
                return item.containsElement && item.containsElement(ev.target);
            });
            _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 50);
            _self.fire("stockclick", {
                candlestick: candlestick
            });
        });
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 53);
        _self.on("mouseover", function(ev) {
            _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 54);
            var candlestick = _self.findBy(function(item) {
                _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 55);
                return item.containsElement && item.containsElement(ev.target);
            });
            _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 57);
            _self.fire("stockover", {
                candlestick: candlestick
            });
        });
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 60);
        _self.on("mouseout", function(ev) {
            _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 61);
            var candlestick = _self.findBy(function(item) {
                _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 62);
                return item.containsElement && item.containsElement(ev.target);
            });
            _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 64);
            _self.fire("stockout", {
                candlestick: candlestick
            });
        });
    },
    _drawCandlesticks: function() {
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 68);
        var _self = this, candlestickGroup = _self.get("candlestickGroup"), items = _self.get("items");
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 72);
        Util.each(items, function(item, index) {
            _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 73);
            _self._drawSingle(item);
        });
    },
    _drawSingle: function(item) {
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 77);
        var _self = this, candlestickGroup = _self.get("candlestickGroup"), candlestick = _self.get("candlestick");
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 81);
        var cfg = Util.mix({}, candlestick, item);
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 82);
        var group = _self.addGroup(Candlestick, cfg);
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 84);
        candlestickGroup.push(group);
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 85);
        return group;
    },
    addCandlestick: function(item) {
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 92);
        var _self = this, items = _self.get("items");
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 95);
        if (_$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 95, !items)) {
            _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 96);
            items = [];
            _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 97);
            _self.set("items", items);
        }
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 100);
        items.push(item);
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 102);
        return _self._drawSingle(item);
    },
    removeAll: function() {
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 109);
        var _self = this, candlestickGroup = _self.get("candlestickGroup");
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 112);
        Util.each(candlestickGroup, function(item, index) {
            _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 113);
            item.remove();
        });
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 116);
        _self.set("candlestickGroup", []);
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 117);
        _self.set("items", []);
    },
    change: function(items) {
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 124);
        var _self = this;
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 126);
        _self.removeAll();
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 127);
        _self.set("items", items);
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 128);
        _self._drawCandlesticks();
    }
});

_$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlesticks.js", 133);
module.exports = Candlesticks;