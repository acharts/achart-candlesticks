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
_$jscoverage_init(_$jscoverage, "/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js",[6,13,14,18,42,44,47,48,49,52,55,57,59,63,68,70,74,81,88,90,94,101,103,110,112,116]);
_$jscoverage_init(_$jscoverage_cond, "/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js",[]);
_$jscoverage["/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js"].source = ["/**"," * @fileOverview 股票k线图 单个节点"," * @ignoreig"," */","","var Util = require('achart-util'),","    Item = require('achart-plot').Item;","","/**"," * @class Chart.Group.Flag"," * 图形标记，包含文本和连接线"," */","var Candlestick = function (cfg) {","    Candlestick.superclass.constructor.call(this,cfg);","};","","","Candlestick.ATTRS = {","    /**","     * 连接线的配置信息","     * @type {Object}","     */","    line : null,","    /**","     * 上升的图形的配置信息","     * @type {Object}","     */","    riseShape: null,","    /**","     * 下降的图形的配置信息","     * @type {Object}","     */","    fallShape: null,","    /**","     * 点信息","     * @type {Array}","     * [open,high,low,close]","     */","    points : null","};","","Util.extend(Candlestick,Item);","","Util.augment(Candlestick,{","    //渲染控件","    renderUI : function(){","        var _self = this;","        Candlestick.superclass.renderUI.call(_self);","        _self._drawCandlestick();","    },","    _drawCandlestick: function(){","        var _self = this;","","        //判断涨还是跌","        _self._setType();","        //画线","        _self._drawLine();","        //画图形","        _self._drawShape();","    },","    //判断涨还是跌","    _setType: function(){","        var _self = this,","            points = _self.get('points'),","            openPoint = points[0],","            closePoint = points[3];","","        var isRise = openPoint.value > closePoint.value ? false : true;","","        _self.set('isRise',isRise);","    },","    //画线","    _drawLine: function(){","        var _self = this,","            lineAttr = _self.get('line'),","            points = _self.get('points'),","            isRise = _self.get('isRise'),","            highPoint = points[1],","            lowPoint = points[2];","","        var cfg = Util.mix(lineAttr,{","            x1: highPoint.x,","            y1: highPoint.y,","            x2: lowPoint.x,","            y2: lowPoint.y","        });","","        var line = _self.addShape('line',cfg);","","        _self.set('lineShape',line);","    },","    //画图形","    _drawShape: function(){","        var _self = this,","            points = _self.get('points'),","            isRise = _self.get('isRise'),","            shapeCfg = isRise ? _self.get('riseShape') : _self.get('fallShape'),","            openPoint = points[0],","            closePoint = points[3];","","        var width = shapeCfg.width || 20;","","        var cfg = Util.mix(shapeCfg,{","            x: openPoint.x - width/2,","            y: Math.min(openPoint.y, closePoint.y),","            width: width,","            height: Math.abs(openPoint.y - closePoint.y)","        });","","        var rect = _self.addShape('rect',cfg);","","        _self.set('rectShape', rect);","    }","});","","module.exports = Candlestick;"];
_$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 6);
var Util = require("achart-util"), Item = require("achart-plot").Item;

_$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 13);
var Candlestick = function(cfg) {
    _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 14);
    Candlestick.superclass.constructor.call(this, cfg);
};

_$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 18);
Candlestick.ATTRS = {
    line: null,
    riseShape: null,
    fallShape: null,
    points: null
};

_$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 42);
Util.extend(Candlestick, Item);

_$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 44);
Util.augment(Candlestick, {
    renderUI: function() {
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 47);
        var _self = this;
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 48);
        Candlestick.superclass.renderUI.call(_self);
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 49);
        _self._drawCandlestick();
    },
    _drawCandlestick: function() {
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 52);
        var _self = this;
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 55);
        _self._setType();
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 57);
        _self._drawLine();
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 59);
        _self._drawShape();
    },
    _setType: function() {
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 63);
        var _self = this, points = _self.get("points"), openPoint = points[0], closePoint = points[3];
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 68);
        var isRise = openPoint.value > closePoint.value ? false : true;
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 70);
        _self.set("isRise", isRise);
    },
    _drawLine: function() {
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 74);
        var _self = this, lineAttr = _self.get("line"), points = _self.get("points"), isRise = _self.get("isRise"), highPoint = points[1], lowPoint = points[2];
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 81);
        var cfg = Util.mix(lineAttr, {
            x1: highPoint.x,
            y1: highPoint.y,
            x2: lowPoint.x,
            y2: lowPoint.y
        });
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 88);
        var line = _self.addShape("line", cfg);
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 90);
        _self.set("lineShape", line);
    },
    _drawShape: function() {
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 94);
        var _self = this, points = _self.get("points"), isRise = _self.get("isRise"), shapeCfg = isRise ? _self.get("riseShape") : _self.get("fallShape"), openPoint = points[0], closePoint = points[3];
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 101);
        var width = shapeCfg.width || 20;
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 103);
        var cfg = Util.mix(shapeCfg, {
            x: openPoint.x - width / 2,
            y: Math.min(openPoint.y, closePoint.y),
            width: width,
            height: Math.abs(openPoint.y - closePoint.y)
        });
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 110);
        var rect = _self.addShape("rect", cfg);
        _$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 112);
        _self.set("rectShape", rect);
    }
});

_$jscoverage_done("/Users/zhenyi/Documents/git/achart-candlesticks/src/candlestick.js", 116);
module.exports = Candlestick;