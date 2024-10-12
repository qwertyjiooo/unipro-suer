(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var objectKeys = ['qy', 'env', 'error', 'version', 'lanDebug', 'cloud', 'serviceMarket', 'router', 'worklet', '__webpack_require_UNI_MP_PLUGIN__'];
var singlePageDisableKey = ['lanDebug', 'router', 'worklet'];
var target = typeof globalThis !== 'undefined' ? globalThis : function () {
  return this;
}();
var key = ['w', 'x'].join('');
var oldWx = target[key];
var launchOption = oldWx.getLaunchOptionsSync ? oldWx.getLaunchOptionsSync() : null;
function isWxKey(key) {
  if (launchOption && launchOption.scene === 1154 && singlePageDisableKey.includes(key)) {
    return false;
  }
  return objectKeys.indexOf(key) > -1 || typeof oldWx[key] === 'function';
}
function initWx() {
  var newWx = {};
  for (var _key in oldWx) {
    if (isWxKey(_key)) {
      // TODO wrapper function
      newWx[_key] = oldWx[_key];
    }
  }
  return newWx;
}
target[key] = initWx();
var _default = target[key];
exports.default = _default;

/***/ }),

/***/ 10:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 101:
/*!************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/label.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 102:
/*!**********************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/xxx.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 105:
/*!**********************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/pages/index/scenicSpot/details/data.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultPersonList = void 0;
var defaultPersonList = [{
  text: '当季推荐',
  icon: __webpack_require__(/*! ../../../../static/oneA.png */ 106),
  backUrl: __webpack_require__(/*! ../../../../static/SimplicityA.jpg */ 107),
  URL: ''
}, {
  text: '微游打卡',
  icon: __webpack_require__(/*! ../../../../static/oneB.png */ 108),
  backUrl: __webpack_require__(/*! ../../../../static/SimplicityB.jpg */ 109),
  URL: ''
}, {
  text: '非遗拾萃',
  icon: __webpack_require__(/*! ../../../../static/oneC.png */ 110),
  backUrl: __webpack_require__(/*! ../../../../static/SimplicityA.jpg */ 107),
  URL: ''
}, {
  text: '博物探秘',
  icon: __webpack_require__(/*! ../../../../static/oneE.png */ 61),
  backUrl: __webpack_require__(/*! ../../../../static/SimplicityB.jpg */ 109),
  URL: ''
}, {
  text: '东北老字号',
  icon: __webpack_require__(/*! ../../../../static/oneE.png */ 61),
  backUrl: __webpack_require__(/*! ../../../../static/SimplicityA.jpg */ 107),
  URL: ''
}];
exports.defaultPersonList = defaultPersonList;

/***/ }),

/***/ 106:
/*!***********************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/oneA.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/oneA.png";

/***/ }),

/***/ 107:
/*!******************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/SimplicityA.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/SimplicityA.jpg";

/***/ }),

/***/ 108:
/*!***********************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/oneB.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/oneB.png";

/***/ }),

/***/ 109:
/*!******************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/SimplicityB.jpg ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ 11:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 110:
/*!***********************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/oneC.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/oneC.png";

/***/ }),

/***/ 12:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ 14);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 125:
/*!***********************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/more.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 128:
/*!*****************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/pages/index/entertainment/data.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultPersonList = void 0;
var defaultPersonList = [{
  text: '锅包肉',
  icon: __webpack_require__(/*! ../../../static/oneA.png */ 106)
}, {
  text: '锅包肉',
  icon: __webpack_require__(/*! ../../../static/oneB.png */ 108)
}, {
  text: '锅包肉',
  icon: __webpack_require__(/*! ../../../static/oneC.png */ 110)
}, {
  text: '锅包肉',
  icon: __webpack_require__(/*! ../../../static/oneE.png */ 61)
}];
exports.defaultPersonList = defaultPersonList;

/***/ }),

/***/ 13:
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 135:
/*!************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/moreW.png ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 138:
/*!***************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/pages/index/MicroTravel/data.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultPersonList = void 0;
var defaultPersonList = [{
  text: '当季推荐',
  icon: __webpack_require__(/*! ../../../static/oneA.png */ 106),
  backUrl: __webpack_require__(/*! ../../../static/SimplicityA.jpg */ 107),
  URL: ''
}, {
  text: '微游打卡',
  icon: __webpack_require__(/*! ../../../static/oneB.png */ 108),
  backUrl: __webpack_require__(/*! ../../../static/SimplicityB.jpg */ 109),
  URL: ''
}, {
  text: '非遗拾萃',
  icon: __webpack_require__(/*! ../../../static/oneC.png */ 110),
  backUrl: __webpack_require__(/*! ../../../static/SimplicityA.jpg */ 107),
  URL: ''
}, {
  text: '博物探秘',
  icon: __webpack_require__(/*! ../../../static/oneE.png */ 61),
  backUrl: __webpack_require__(/*! ../../../static/SimplicityB.jpg */ 109),
  URL: ''
}, {
  text: '东北老字号',
  icon: __webpack_require__(/*! ../../../static/oneE.png */ 61),
  backUrl: __webpack_require__(/*! ../../../static/SimplicityA.jpg */ 107),
  URL: ''
}];
exports.defaultPersonList = defaultPersonList;

/***/ }),

/***/ 14:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 147:
/*!*************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/pages/index/scenicSpot/scenicSpot/data.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.priceTextList = exports.popupList = void 0;
var priceTextList = [{
  title: '门票-全价票',
  text: ['【【请务必携带本人身份证原件】', '【18周岁(含)  - 60周岁(不含)】'],
  score: 80
}, {
  title: '门票-半价票/学生票/长者票',
  text: ['【需核验身份证及优惠证件】', '【14周岁(含）-  18周岁(不含)】', '【60周岁(含）- 65周岁(不含)】', '【预定须知中的在校学生-需核验证件】'],
  score: 40
}, {
  title: '门票-免费票',
  text: ['【需核验身份证和优惠证件】', '【14周岁(不含) 以下的儿童】', '【65周岁  (含）以上的长者】'],
  score: 0
}];
exports.priceTextList = priceTextList;
var popupList = [{
  title: '南岳大庙',
  cost: ['费用明细'],
  costDetails: '南岳大庙：50元【当天一次有效】水帘洞：30元【两天一次有效】 保险（A）：4元 保险（B）：3元'
}, {
  title: '预定须知',
  cost: ['1，景区严格执行“限量、预约、错峰要求，严格遵循“不预约不入园”的原则;', '2，游览南岳衡山中心景区需从全域旅游服务中心或康家城、白龙潭、西岭、龙凤门票卡口进入。景区内古道、游步道封闭管控', '3，游客进入景区请遵守国家森林防火法律法规，配合防火、禁火检查，主动扫“防火码”上交一切火源，禁止在景区内吸烟和野外用火等任何易发生火灾的行为；', '4，请在游玩当日凭身份证或二维码入园；门票一经使用不予退换，过期作废；', '5，进入景区注意安全，照顾好同行的老人儿童，保管好随身携带的物品。'],
  costDetails: ''
}, {
  title: '预定须知',
  cost: ['1，景区严格执行“限量、预约、错峰要求，严格遵循“不预约不入园”的原则;', '2，游览南岳衡山中心景区需从全域旅游服务中心或康家城、白龙潭、西岭、龙凤门票卡口进入。景区内古道、游步道封闭管控', '3，游客进入景区请遵守国家森林防火法律法规，配合防火、禁火检查，主动扫“防火码”上交一切火源，禁止在景区内吸烟和野外用火等任何易发生火灾的行为；', '4，请在游玩当日凭身份证或二维码入园；门票一经使用不予退换，过期作废；', '5，进入景区注意安全，照顾好同行的老人儿童，保管好随身携带的物品。'],
  costDetails: ''
}, {
  title: '预定须知',
  cost: ['1，景区严格执行“限量、预约、错峰要求，严格遵循“不预约不入园”的原则;', '2，游览南岳衡山中心景区需从全域旅游服务中心或康家城、白龙潭、西岭、龙凤门票卡口进入。景区内古道、游步道封闭管控', '3，游客进入景区请遵守国家森林防火法律法规，配合防火、禁火检查，主动扫“防火码”上交一切火源，禁止在景区内吸烟和野外用火等任何易发生火灾的行为；', '4，请在游玩当日凭身份证或二维码入园；门票一经使用不予退换，过期作废；', '5，进入景区注意安全，照顾好同行的老人儿童，保管好随身携带的物品。'],
  costDetails: ''
}];
exports.popupList = popupList;

/***/ }),

/***/ 15:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct.js */ 17);
function _construct(t, e, r) {
  if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && setPrototypeOf(p, r.prototype), p;
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 16:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 164:
/*!****************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/pages/index/lceCityImage/data.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabTagList = exports.tabList = void 0;
var tabList = [{
  text: '行政区域',
  icon: '^',
  tab: 'tab-A'
}, {
  text: '主题',
  icon: '^',
  tab: 'tab-B'
}, {
  text: '来源',
  icon: '^',
  tab: 'tab-C'
}];
exports.tabList = tabList;
var tabTagList = [{
  tab: '行政区域',
  type: '1',
  TagList: []
}, {
  tab: '行政区域',
  type: '2',
  TagList: [{
    text: '全部',
    type: ''
  }, {
    text: '亲子游',
    type: ''
  }, {
    text: '徒步达人',
    type: ''
  }, {
    text: '全家乐',
    type: ''
  }, {
    text: '文艺范',
    type: ''
  }]
}, {
  tab: '行政区域',
  type: '3',
  TagList: [{
    text: '全部',
    type: ''
  }, {
    text: '浦东新区',
    type: ''
  }, {
    text: '黄浦区',
    type: ''
  }, {
    text: '静安区',
    type: ''
  }, {
    text: '徐汇区',
    type: ''
  }]
}];
exports.tabTagList = tabTagList;

/***/ }),

/***/ 17:
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
  } catch (t) {}
  return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles.js */ 19);
var iterableToArray = __webpack_require__(/*! ./iterableToArray.js */ 20);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread.js */ 21);
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 189:
/*!*************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/pages/index/MicroTravel/MicroList/data.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tabTagList = exports.tabList = exports.items = void 0;
var tabList = [{
  text: '行政区域',
  icon: '^',
  tab: 'tab-A'
}, {
  text: '主题',
  icon: '^',
  tab: 'tab-B'
}, {
  text: '来源',
  icon: '^',
  tab: 'tab-C'
}];
exports.tabList = tabList;
var tabTagList = [{
  tab: '行政区域',
  type: '1',
  TagList: []
}, {
  tab: '行政区域',
  type: '2',
  TagList: [{
    text: '全部',
    type: ''
  }, {
    text: '亲子游',
    type: ''
  }, {
    text: '徒步达人',
    type: ''
  }, {
    text: '全家乐',
    type: ''
  }, {
    text: '文艺范',
    type: ''
  }]
}, {
  tab: '行政区域',
  type: '3',
  TagList: [{
    text: '全部',
    type: ''
  }, {
    text: '浦东新区',
    type: ''
  }, {
    text: '黄浦区',
    type: ''
  }, {
    text: '静安区',
    type: ''
  }, {
    text: '徐汇区',
    type: ''
  }]
}];
exports.tabTagList = tabTagList;
var items = [{
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneA.png */ 106)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneG.png */ 59)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneE.png */ 61)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneD.png */ 94)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneC.png */ 110)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneF.png */ 57)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneA.png */ 106)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneD.png */ 94)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneC.png */ 110)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneF.png */ 57)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneA.png */ 106)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneG.png */ 59)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneE.png */ 61)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneD.png */ 94)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneC.png */ 110)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneF.png */ 57)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneA.png */ 106)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneG.png */ 59)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneE.png */ 61)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneD.png */ 94)
}, {
  text: '繁华市井',
  url: __webpack_require__(/*! ../../../../static/oneC.png */ 110)
}]; // 从某处获取你的数据
exports.items = items;

/***/ }),

/***/ 19:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 198:
/*!************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/lib/qqmap-wx-jssdk.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(wx) {var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23);
var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ 24);
/**
 * 微信小程序JavaScriptSDK
 * 
 * @version 1.2
 * @date 2019-03-06
 */

var ERROR_CONF = {
  KEY_ERR: 311,
  KEY_ERR_MSG: 'key格式错误',
  PARAM_ERR: 310,
  PARAM_ERR_MSG: '请求参数信息有误',
  SYSTEM_ERR: 600,
  SYSTEM_ERR_MSG: '系统错误',
  WX_ERR_CODE: 1000,
  WX_OK_CODE: 200
};
var BASE_URL = 'https://apis.map.qq.com/ws/';
var URL_SEARCH = BASE_URL + 'place/v1/search';
var URL_SUGGESTION = BASE_URL + 'place/v1/suggestion';
var URL_GET_GEOCODER = BASE_URL + 'geocoder/v1/';
var URL_CITY_LIST = BASE_URL + 'district/v1/list';
var URL_AREA_LIST = BASE_URL + 'district/v1/getchildren';
var URL_DISTANCE = BASE_URL + 'distance/v1/';
var URL_DIRECTION = BASE_URL + 'direction/v1/';
var MODE = {
  driving: 'driving',
  transit: 'transit'
};
var EARTH_RADIUS = 6378136.49;
var Utils = {
  /**
  * md5加密方法
  * 版权所有©2011 Sebastian Tschan，https：//blueimp.net
  */
  safeAdd: function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
  },
  bitRotateLeft: function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  },
  md5cmn: function md5cmn(q, a, b, x, s, t) {
    return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(a, q), this.safeAdd(x, t)), s), b);
  },
  md5ff: function md5ff(a, b, c, d, x, s, t) {
    return this.md5cmn(b & c | ~b & d, a, b, x, s, t);
  },
  md5gg: function md5gg(a, b, c, d, x, s, t) {
    return this.md5cmn(b & d | c & ~d, a, b, x, s, t);
  },
  md5hh: function md5hh(a, b, c, d, x, s, t) {
    return this.md5cmn(b ^ c ^ d, a, b, x, s, t);
  },
  md5ii: function md5ii(a, b, c, d, x, s, t) {
    return this.md5cmn(c ^ (b | ~d), a, b, x, s, t);
  },
  binlMD5: function binlMD5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32;
    x[(len + 64 >>> 9 << 4) + 14] = len;
    var i;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (i = 0; i < x.length; i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;
      a = this.md5ff(a, b, c, d, x[i], 7, -680876936);
      d = this.md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = this.md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = this.md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = this.md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = this.md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = this.md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = this.md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = this.md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = this.md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = this.md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = this.md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = this.md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = this.md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = this.md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = this.md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = this.md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = this.md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = this.md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = this.md5gg(b, c, d, a, x[i], 20, -373897302);
      a = this.md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = this.md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = this.md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = this.md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = this.md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = this.md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = this.md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = this.md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = this.md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = this.md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = this.md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = this.md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = this.md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = this.md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = this.md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = this.md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = this.md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = this.md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = this.md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = this.md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = this.md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = this.md5hh(d, a, b, c, x[i], 11, -358537222);
      c = this.md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = this.md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = this.md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = this.md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = this.md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = this.md5hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = this.md5ii(a, b, c, d, x[i], 6, -198630844);
      d = this.md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = this.md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = this.md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = this.md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = this.md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = this.md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = this.md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = this.md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = this.md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = this.md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = this.md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = this.md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = this.md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = this.md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = this.md5ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = this.safeAdd(a, olda);
      b = this.safeAdd(b, oldb);
      c = this.safeAdd(c, oldc);
      d = this.safeAdd(d, oldd);
    }
    return [a, b, c, d];
  },
  binl2rstr: function binl2rstr(input) {
    var i;
    var output = '';
    var length32 = input.length * 32;
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
    }
    return output;
  },
  rstr2binl: function rstr2binl(input) {
    var i;
    var output = [];
    output[(input.length >> 2) - 1] = undefined;
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0;
    }
    var length8 = input.length * 8;
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
    }
    return output;
  },
  rstrMD5: function rstrMD5(s) {
    return this.binl2rstr(this.binlMD5(this.rstr2binl(s), s.length * 8));
  },
  rstrHMACMD5: function rstrHMACMD5(key, data) {
    var i;
    var bkey = this.rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = undefined;
    if (bkey.length > 16) {
      bkey = this.binlMD5(bkey, key.length * 8);
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }
    hash = this.binlMD5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
    return this.binl2rstr(this.binlMD5(opad.concat(hash), 512 + 128));
  },
  rstr2hex: function rstr2hex(input) {
    var hexTab = '0123456789abcdef';
    var output = '';
    var x;
    var i;
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i);
      output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);
    }
    return output;
  },
  str2rstrUTF8: function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  },
  rawMD5: function rawMD5(s) {
    return this.rstrMD5(this.str2rstrUTF8(s));
  },
  hexMD5: function hexMD5(s) {
    return this.rstr2hex(this.rawMD5(s));
  },
  rawHMACMD5: function rawHMACMD5(k, d) {
    return this.rstrHMACMD5(this.str2rstrUTF8(k), str2rstrUTF8(d));
  },
  hexHMACMD5: function hexHMACMD5(k, d) {
    return this.rstr2hex(this.rawHMACMD5(k, d));
  },
  md5: function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return this.hexMD5(string);
      }
      return this.rawMD5(string);
    }
    if (!raw) {
      return this.hexHMACMD5(key, string);
    }
    return this.rawHMACMD5(key, string);
  },
  /**
   * 得到md5加密后的sig参数
   * @param {Object} requestParam 接口参数
   * @param {String} sk签名字符串
   * @param {String} featrue 方法名
   * @return 返回加密后的sig参数
   */
  getSig: function getSig(requestParam, sk, feature, mode) {
    var sig = null;
    var requestArr = [];
    Object.keys(requestParam).sort().forEach(function (key) {
      requestArr.push(key + '=' + requestParam[key]);
    });
    if (feature == 'search') {
      sig = '/ws/place/v1/search?' + requestArr.join('&') + sk;
    }
    if (feature == 'suggest') {
      sig = '/ws/place/v1/suggestion?' + requestArr.join('&') + sk;
    }
    if (feature == 'reverseGeocoder') {
      sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;
    }
    if (feature == 'geocoder') {
      sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;
    }
    if (feature == 'getCityList') {
      sig = '/ws/district/v1/list?' + requestArr.join('&') + sk;
    }
    if (feature == 'getDistrictByCityId') {
      sig = '/ws/district/v1/getchildren?' + requestArr.join('&') + sk;
    }
    if (feature == 'calculateDistance') {
      sig = '/ws/distance/v1/?' + requestArr.join('&') + sk;
    }
    if (feature == 'direction') {
      sig = '/ws/direction/v1/' + mode + '?' + requestArr.join('&') + sk;
    }
    sig = this.md5(sig);
    return sig;
  },
  /**
   * 得到终点query字符串
   * @param {Array|String} 检索数据
   */
  location2query: function location2query(data) {
    if (typeof data == 'string') {
      return data;
    }
    var query = '';
    for (var i = 0; i < data.length; i++) {
      var d = data[i];
      if (!!query) {
        query += ';';
      }
      if (d.location) {
        query = query + d.location.lat + ',' + d.location.lng;
      }
      if (d.latitude && d.longitude) {
        query = query + d.latitude + ',' + d.longitude;
      }
    }
    return query;
  },
  /**
   * 计算角度
   */
  rad: function rad(d) {
    return d * Math.PI / 180.0;
  },
  /**
   * 处理终点location数组
   * @return 返回终点数组
   */
  getEndLocation: function getEndLocation(location) {
    var to = location.split(';');
    var endLocation = [];
    for (var i = 0; i < to.length; i++) {
      endLocation.push({
        lat: parseFloat(to[i].split(',')[0]),
        lng: parseFloat(to[i].split(',')[1])
      });
    }
    return endLocation;
  },
  /**
   * 计算两点间直线距离
   * @param a 表示纬度差
   * @param b 表示经度差
   * @return 返回的是距离，单位m
   */
  getDistance: function getDistance(latFrom, lngFrom, latTo, lngTo) {
    var radLatFrom = this.rad(latFrom);
    var radLatTo = this.rad(latTo);
    var a = radLatFrom - radLatTo;
    var b = this.rad(lngFrom) - this.rad(lngTo);
    var distance = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLatFrom) * Math.cos(radLatTo) * Math.pow(Math.sin(b / 2), 2)));
    distance = distance * EARTH_RADIUS;
    distance = Math.round(distance * 10000) / 10000;
    return parseFloat(distance.toFixed(0));
  },
  /**
   * 使用微信接口进行定位
   */
  getWXLocation: function getWXLocation(success, fail, complete) {
    wx.getLocation({
      type: 'gcj02',
      success: success,
      fail: fail,
      complete: complete
    });
  },
  /**
   * 获取location参数
   */
  getLocationParam: function getLocationParam(location) {
    if (typeof location == 'string') {
      var locationArr = location.split(',');
      if (locationArr.length === 2) {
        location = {
          latitude: location.split(',')[0],
          longitude: location.split(',')[1]
        };
      } else {
        location = {};
      }
    }
    return location;
  },
  /**
   * 回调函数默认处理
   */
  polyfillParam: function polyfillParam(param) {
    param.success = param.success || function () {};
    param.fail = param.fail || function () {};
    param.complete = param.complete || function () {};
  },
  /**
   * 验证param对应的key值是否为空
   * 
   * @param {Object} param 接口参数
   * @param {String} key 对应参数的key
   */
  checkParamKeyEmpty: function checkParamKeyEmpty(param, key) {
    if (!param[key]) {
      var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + key + '参数格式有误');
      param.fail(errconf);
      param.complete(errconf);
      return true;
    }
    return false;
  },
  /**
   * 验证参数中是否存在检索词keyword
   * 
   * @param {Object} param 接口参数
   */
  checkKeyword: function checkKeyword(param) {
    return !this.checkParamKeyEmpty(param, 'keyword');
  },
  /**
   * 验证location值
   * 
   * @param {Object} param 接口参数
   */
  checkLocation: function checkLocation(param) {
    var location = this.getLocationParam(param.location);
    if (!location || !location.latitude || !location.longitude) {
      var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + ' location参数格式有误');
      param.fail(errconf);
      param.complete(errconf);
      return false;
    }
    return true;
  },
  /**
   * 构造错误数据结构
   * @param {Number} errCode 错误码
   * @param {Number} errMsg 错误描述
   */
  buildErrorConfig: function buildErrorConfig(errCode, errMsg) {
    return {
      status: errCode,
      message: errMsg
    };
  },
  /**
   * 
   * 数据处理函数
   * 根据传入参数不同处理不同数据
   * @param {String} feature 功能名称
   * search 地点搜索
   * suggest关键词提示
   * reverseGeocoder逆地址解析
   * geocoder地址解析
   * getCityList获取城市列表：父集
   * getDistrictByCityId获取区县列表：子集
   * calculateDistance距离计算
   * @param {Object} param 接口参数
   * @param {Object} data 数据
   */
  handleData: function handleData(param, data, feature) {
    if (feature == 'search') {
      var searchResult = data.data;
      var searchSimplify = [];
      for (var i = 0; i < searchResult.length; i++) {
        searchSimplify.push({
          id: searchResult[i].id || null,
          title: searchResult[i].title || null,
          latitude: searchResult[i].location && searchResult[i].location.lat || null,
          longitude: searchResult[i].location && searchResult[i].location.lng || null,
          address: searchResult[i].address || null,
          category: searchResult[i].category || null,
          tel: searchResult[i].tel || null,
          adcode: searchResult[i].ad_info && searchResult[i].ad_info.adcode || null,
          city: searchResult[i].ad_info && searchResult[i].ad_info.city || null,
          district: searchResult[i].ad_info && searchResult[i].ad_info.district || null,
          province: searchResult[i].ad_info && searchResult[i].ad_info.province || null
        });
      }
      param.success(data, {
        searchResult: searchResult,
        searchSimplify: searchSimplify
      });
    } else if (feature == 'suggest') {
      var suggestResult = data.data;
      var suggestSimplify = [];
      for (var i = 0; i < suggestResult.length; i++) {
        suggestSimplify.push({
          adcode: suggestResult[i].adcode || null,
          address: suggestResult[i].address || null,
          category: suggestResult[i].category || null,
          city: suggestResult[i].city || null,
          district: suggestResult[i].district || null,
          id: suggestResult[i].id || null,
          latitude: suggestResult[i].location && suggestResult[i].location.lat || null,
          longitude: suggestResult[i].location && suggestResult[i].location.lng || null,
          province: suggestResult[i].province || null,
          title: suggestResult[i].title || null,
          type: suggestResult[i].type || null
        });
      }
      param.success(data, {
        suggestResult: suggestResult,
        suggestSimplify: suggestSimplify
      });
    } else if (feature == 'reverseGeocoder') {
      var reverseGeocoderResult = data.result;
      var reverseGeocoderSimplify = {
        address: reverseGeocoderResult.address || null,
        latitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lat || null,
        longitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lng || null,
        adcode: reverseGeocoderResult.ad_info && reverseGeocoderResult.ad_info.adcode || null,
        city: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.city || null,
        district: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.district || null,
        nation: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.nation || null,
        province: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.province || null,
        street: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street || null,
        street_number: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street_number || null,
        recommend: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.recommend || null,
        rough: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.rough || null
      };
      if (reverseGeocoderResult.pois) {
        //判断是否返回周边poi
        var pois = reverseGeocoderResult.pois;
        var poisSimplify = [];
        for (var i = 0; i < pois.length; i++) {
          poisSimplify.push({
            id: pois[i].id || null,
            title: pois[i].title || null,
            latitude: pois[i].location && pois[i].location.lat || null,
            longitude: pois[i].location && pois[i].location.lng || null,
            address: pois[i].address || null,
            category: pois[i].category || null,
            adcode: pois[i].ad_info && pois[i].ad_info.adcode || null,
            city: pois[i].ad_info && pois[i].ad_info.city || null,
            district: pois[i].ad_info && pois[i].ad_info.district || null,
            province: pois[i].ad_info && pois[i].ad_info.province || null
          });
        }
        param.success(data, {
          reverseGeocoderResult: reverseGeocoderResult,
          reverseGeocoderSimplify: reverseGeocoderSimplify,
          pois: pois,
          poisSimplify: poisSimplify
        });
      } else {
        param.success(data, {
          reverseGeocoderResult: reverseGeocoderResult,
          reverseGeocoderSimplify: reverseGeocoderSimplify
        });
      }
    } else if (feature == 'geocoder') {
      var geocoderResult = data.result;
      var geocoderSimplify = {
        title: geocoderResult.title || null,
        latitude: geocoderResult.location && geocoderResult.location.lat || null,
        longitude: geocoderResult.location && geocoderResult.location.lng || null,
        adcode: geocoderResult.ad_info && geocoderResult.ad_info.adcode || null,
        province: geocoderResult.address_components && geocoderResult.address_components.province || null,
        city: geocoderResult.address_components && geocoderResult.address_components.city || null,
        district: geocoderResult.address_components && geocoderResult.address_components.district || null,
        street: geocoderResult.address_components && geocoderResult.address_components.street || null,
        street_number: geocoderResult.address_components && geocoderResult.address_components.street_number || null,
        level: geocoderResult.level || null
      };
      param.success(data, {
        geocoderResult: geocoderResult,
        geocoderSimplify: geocoderSimplify
      });
    } else if (feature == 'getCityList') {
      var provinceResult = data.result[0];
      var cityResult = data.result[1];
      var districtResult = data.result[2];
      param.success(data, {
        provinceResult: provinceResult,
        cityResult: cityResult,
        districtResult: districtResult
      });
    } else if (feature == 'getDistrictByCityId') {
      var districtByCity = data.result[0];
      param.success(data, districtByCity);
    } else if (feature == 'calculateDistance') {
      var calculateDistanceResult = data.result.elements;
      var distance = [];
      for (var i = 0; i < calculateDistanceResult.length; i++) {
        distance.push(calculateDistanceResult[i].distance);
      }
      param.success(data, {
        calculateDistanceResult: calculateDistanceResult,
        distance: distance
      });
    } else if (feature == 'direction') {
      var direction = data.result.routes;
      param.success(data, direction);
    } else {
      param.success(data);
    }
  },
  /**
   * 构造微信请求参数，公共属性处理
   * 
   * @param {Object} param 接口参数
   * @param {Object} param 配置项
   * @param {String} feature 方法名
   */
  buildWxRequestConfig: function buildWxRequestConfig(param, options, feature) {
    var that = this;
    options.header = {
      "content-type": "application/json"
    };
    options.method = 'GET';
    options.success = function (res) {
      var data = res.data;
      if (data.status === 0) {
        that.handleData(param, data, feature);
      } else {
        param.fail(data);
      }
    };
    options.fail = function (res) {
      res.statusCode = ERROR_CONF.WX_ERR_CODE;
      param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
    };
    options.complete = function (res) {
      var statusCode = +res.statusCode;
      switch (statusCode) {
        case ERROR_CONF.WX_ERR_CODE:
          {
            param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
            break;
          }
        case ERROR_CONF.WX_OK_CODE:
          {
            var data = res.data;
            if (data.status === 0) {
              param.complete(data);
            } else {
              param.complete(that.buildErrorConfig(data.status, data.message));
            }
            break;
          }
        default:
          {
            param.complete(that.buildErrorConfig(ERROR_CONF.SYSTEM_ERR, ERROR_CONF.SYSTEM_ERR_MSG));
          }
      }
    };
    return options;
  },
  /**
   * 处理用户参数是否传入坐标进行不同的处理
   */
  locationProcess: function locationProcess(param, locationsuccess, locationfail, locationcomplete) {
    var that = this;
    locationfail = locationfail || function (res) {
      res.statusCode = ERROR_CONF.WX_ERR_CODE;
      param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
    };
    locationcomplete = locationcomplete || function (res) {
      if (res.statusCode == ERROR_CONF.WX_ERR_CODE) {
        param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
      }
    };
    if (!param.location) {
      that.getWXLocation(locationsuccess, locationfail, locationcomplete);
    } else if (that.checkLocation(param)) {
      var location = Utils.getLocationParam(param.location);
      locationsuccess(location);
    }
  }
};
var QQMapWX = /*#__PURE__*/function () {
  "use strict";

  /**
   * 构造函数
   * 
   * @param {Object} options 接口参数,key 为必选参数
   */
  function QQMapWX(options) {
    _classCallCheck(this, QQMapWX);
    if (!options.key) {
      throw Error('key值不能为空');
    }
    this.key = options.key;
  }
  _createClass(QQMapWX, [{
    key: "search",
    value:
    /**
     * POI周边检索
     *
     * @param {Object} options 接口参数对象
     * 
     * 参数对象结构可以参考
     * @see http://lbs.qq.com/webservice_v1/guide-search.html
     */
    function search(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      if (!Utils.checkKeyword(options)) {
        return;
      }
      var requestParam = {
        keyword: options.keyword,
        orderby: options.orderby || '_distance',
        page_size: options.page_size || 10,
        page_index: options.page_index || 1,
        output: 'json',
        key: that.key
      };
      if (options.address_format) {
        requestParam.address_format = options.address_format;
      }
      if (options.filter) {
        requestParam.filter = options.filter;
      }
      var distance = options.distance || "1000";
      var auto_extend = options.auto_extend || 1;
      var region = null;
      var rectangle = null;

      //判断城市限定参数
      if (options.region) {
        region = options.region;
      }

      //矩形限定坐标(暂时只支持字符串格式)
      if (options.rectangle) {
        rectangle = options.rectangle;
      }
      var locationsuccess = function locationsuccess(result) {
        if (region && !rectangle) {
          //城市限定参数拼接
          requestParam.boundary = "region(" + region + "," + auto_extend + "," + result.latitude + "," + result.longitude + ")";
          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
          }
        } else if (rectangle && !region) {
          //矩形搜索
          requestParam.boundary = "rectangle(" + rectangle + ")";
          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
          }
        } else {
          requestParam.boundary = "nearby(" + result.latitude + "," + result.longitude + "," + distance + "," + auto_extend + ")";
          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
          }
        }
        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_SEARCH,
          data: requestParam
        }, 'search'));
      };
      Utils.locationProcess(options, locationsuccess);
    }
  }, {
    key: "getSuggestion",
    value:
    /**
     * sug模糊检索
     *
     * @param {Object} options 接口参数对象
     * 
     * 参数对象结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-suggestion.html
     */
    function getSuggestion(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      if (!Utils.checkKeyword(options)) {
        return;
      }
      var requestParam = {
        keyword: options.keyword,
        region: options.region || '全国',
        region_fix: options.region_fix || 0,
        policy: options.policy || 0,
        page_size: options.page_size || 10,
        //控制显示条数
        page_index: options.page_index || 1,
        //控制页数
        get_subpois: options.get_subpois || 0,
        //返回子地点
        output: 'json',
        key: that.key
      };
      //长地址
      if (options.address_format) {
        requestParam.address_format = options.address_format;
      }
      //过滤
      if (options.filter) {
        requestParam.filter = options.filter;
      }
      //排序
      if (options.location) {
        var locationsuccess = function locationsuccess(result) {
          requestParam.location = result.latitude + ',' + result.longitude;
          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');
          }
          wx.request(Utils.buildWxRequestConfig(options, {
            url: URL_SUGGESTION,
            data: requestParam
          }, "suggest"));
        };
        Utils.locationProcess(options, locationsuccess);
      } else {
        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');
        }
        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_SUGGESTION,
          data: requestParam
        }, "suggest"));
      }
    }
  }, {
    key: "reverseGeocoder",
    value:
    /**
     * 逆地址解析
     *
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-gcoder.html
     */
    function reverseGeocoder(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      var requestParam = {
        coord_type: options.coord_type || 5,
        get_poi: options.get_poi || 0,
        output: 'json',
        key: that.key
      };
      if (options.poi_options) {
        requestParam.poi_options = options.poi_options;
      }
      var locationsuccess = function locationsuccess(result) {
        requestParam.location = result.latitude + ',' + result.longitude;
        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'reverseGeocoder');
        }
        wx.request(Utils.buildWxRequestConfig(options, {
          url: URL_GET_GEOCODER,
          data: requestParam
        }, 'reverseGeocoder'));
      };
      Utils.locationProcess(options, locationsuccess);
    }
  }, {
    key: "geocoder",
    value:
    /**
     * 地址解析
     *
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-geocoder.html
     */
    function geocoder(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      if (Utils.checkParamKeyEmpty(options, 'address')) {
        return;
      }
      var requestParam = {
        address: options.address,
        output: 'json',
        key: that.key
      };

      //城市限定
      if (options.region) {
        requestParam.region = options.region;
      }
      if (options.sig) {
        requestParam.sig = Utils.getSig(requestParam, options.sig, 'geocoder');
      }
      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_GET_GEOCODER,
        data: requestParam
      }, 'geocoder'));
    }
  }, {
    key: "getCityList",
    value:
    /**
     * 获取城市列表
     *
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-region.html
     */
    function getCityList(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      var requestParam = {
        output: 'json',
        key: that.key
      };
      if (options.sig) {
        requestParam.sig = Utils.getSig(requestParam, options.sig, 'getCityList');
      }
      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_CITY_LIST,
        data: requestParam
      }, 'getCityList'));
    }
  }, {
    key: "getDistrictByCityId",
    value:
    /**
     * 获取对应城市ID的区县列表
     *
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-region.html
     */
    function getDistrictByCityId(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      if (Utils.checkParamKeyEmpty(options, 'id')) {
        return;
      }
      var requestParam = {
        id: options.id || '',
        output: 'json',
        key: that.key
      };
      if (options.sig) {
        requestParam.sig = Utils.getSig(requestParam, options.sig, 'getDistrictByCityId');
      }
      wx.request(Utils.buildWxRequestConfig(options, {
        url: URL_AREA_LIST,
        data: requestParam
      }, 'getDistrictByCityId'));
    }
  }, {
    key: "calculateDistance",
    value:
    /**
     * 用于单起点到多终点的路线距离(非直线距离)计算：
     * 支持两种距离计算方式：步行和驾车。
     * 起点到终点最大限制直线距离10公里。
     *
     * 新增直线距离计算。
     * 
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-distance.html
     */
    function calculateDistance(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      if (Utils.checkParamKeyEmpty(options, 'to')) {
        return;
      }
      var requestParam = {
        mode: options.mode || 'walking',
        to: Utils.location2query(options.to),
        output: 'json',
        key: that.key
      };
      if (options.from) {
        options.location = options.from;
      }

      //计算直线距离
      if (requestParam.mode == 'straight') {
        var locationsuccess = function locationsuccess(result) {
          var locationTo = Utils.getEndLocation(requestParam.to); //处理终点坐标
          var data = {
            message: "query ok",
            result: {
              elements: []
            },
            status: 0
          };
          for (var i = 0; i < locationTo.length; i++) {
            data.result.elements.push({
              //将坐标存入
              distance: Utils.getDistance(result.latitude, result.longitude, locationTo[i].lat, locationTo[i].lng),
              duration: 0,
              from: {
                lat: result.latitude,
                lng: result.longitude
              },
              to: {
                lat: locationTo[i].lat,
                lng: locationTo[i].lng
              }
            });
          }
          var calculateResult = data.result.elements;
          var distanceResult = [];
          for (var i = 0; i < calculateResult.length; i++) {
            distanceResult.push(calculateResult[i].distance);
          }
          return options.success(data, {
            calculateResult: calculateResult,
            distanceResult: distanceResult
          });
        };
        Utils.locationProcess(options, locationsuccess);
      } else {
        var locationsuccess = function locationsuccess(result) {
          requestParam.from = result.latitude + ',' + result.longitude;
          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'calculateDistance');
          }
          wx.request(Utils.buildWxRequestConfig(options, {
            url: URL_DISTANCE,
            data: requestParam
          }, 'calculateDistance'));
        };
        Utils.locationProcess(options, locationsuccess);
      }
    }
  }, {
    key: "direction",
    value:
    /**
     * 路线规划：
     * 
     * @param {Object} options 接口参数对象
     * 
     * 请求参数结构可以参考
     * https://lbs.qq.com/webservice_v1/guide-road.html
     */
    function direction(options) {
      var that = this;
      options = options || {};
      Utils.polyfillParam(options);
      if (Utils.checkParamKeyEmpty(options, 'to')) {
        return;
      }
      var requestParam = {
        output: 'json',
        key: that.key
      };

      //to格式处理
      if (typeof options.to == 'string') {
        requestParam.to = options.to;
      } else {
        requestParam.to = options.to.latitude + ',' + options.to.longitude;
      }
      //初始化局部请求域名
      var SET_URL_DIRECTION = null;
      //设置默认mode属性
      options.mode = options.mode || MODE.driving;

      //设置请求域名
      SET_URL_DIRECTION = URL_DIRECTION + options.mode;
      if (options.from) {
        options.location = options.from;
      }
      if (options.mode == MODE.driving) {
        if (options.from_poi) {
          requestParam.from_poi = options.from_poi;
        }
        if (options.heading) {
          requestParam.heading = options.heading;
        }
        if (options.speed) {
          requestParam.speed = options.speed;
        }
        if (options.accuracy) {
          requestParam.accuracy = options.accuracy;
        }
        if (options.road_type) {
          requestParam.road_type = options.road_type;
        }
        if (options.to_poi) {
          requestParam.to_poi = options.to_poi;
        }
        if (options.from_track) {
          requestParam.from_track = options.from_track;
        }
        if (options.waypoints) {
          requestParam.waypoints = options.waypoints;
        }
        if (options.policy) {
          requestParam.policy = options.policy;
        }
        if (options.plate_number) {
          requestParam.plate_number = options.plate_number;
        }
      }
      if (options.mode == MODE.transit) {
        if (options.departure_time) {
          requestParam.departure_time = options.departure_time;
        }
        if (options.policy) {
          requestParam.policy = options.policy;
        }
      }
      var locationsuccess = function locationsuccess(result) {
        requestParam.from = result.latitude + ',' + result.longitude;
        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'direction', options.mode);
        }
        wx.request(Utils.buildWxRequestConfig(options, {
          url: SET_URL_DIRECTION,
          data: requestParam
        }, 'direction'));
      };
      Utils.locationProcess(options, locationsuccess);
    }
  }]);
  return QQMapWX;
}();
;
module.exports = QQMapWX;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 2:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;
exports.createComponent = createComponent;
exports.createPage = createPage;
exports.createPlugin = createPlugin;
exports.createSubpackageApp = createSubpackageApp;
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ 15));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 22);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var realAtob;
var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {
      throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
    }

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;
    var result = '';
    var r1;
    var r2;
    var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 | (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));
      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}
function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}
function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0
    };
  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}
function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {
    var _getCurrentUserInfo = getCurrentUserInfo(),
      role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {
    var _getCurrentUserInfo2 = getCurrentUserInfo(),
      permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {
    var _getCurrentUserInfo3 = getCurrentUserInfo(),
      tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}
var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isFn(fn) {
  return typeof fn === 'function';
}
function isStr(str) {
  return typeof str === 'string';
}
function isObject(obj) {
  return obj !== null && (0, _typeof2.default)(obj) === 'object';
}
function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function noop() {}

/**
 * Create a cached version of a pure function.
 */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}
var HOOKS = ['invoke', 'success', 'fail', 'complete', 'returnValue'];
var globalInterceptors = {};
var scopedInterceptors = {};
function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}
function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}
function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}
function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}
function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}
function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}
function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}
function wrapperHook(hook, params) {
  return function (data) {
    return hook(data, params) || data;
  };
}
function isPromise(obj) {
  return !!obj && ((0, _typeof2.default)(obj) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
function queue(hooks, data, params) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook, params));
    } else {
      var res = hook(data, params);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {}
        };
      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    }
  };
}
function wrapperOptions(interceptor) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res, options).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}
function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, (0, _toConsumableArray2.default)(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}
function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}
function invokeApi(method, api, options) {
  for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    params[_key - 3] = arguments[_key];
  }
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        // 重新访问 getApiInterceptorHooks, 允许 invoke 中再次调用 addInterceptor,removeInterceptor
        return api.apply(void 0, [wrapperOptions(getApiInterceptorHooks(method), options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}
var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  }
};
var SYNC_API_RE = /^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting|initUTS|requireUTS|registerUTS/;
var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];
var CALLBACK_API_RE = /^on|^off/;
function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}
function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}
function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).catch(function (err) {
    return [err];
  });
}
function shouldPromise(name) {
  if (isContextApi(name) || isSyncApi(name) || isCallbackApi(name)) {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
function promisify(name, api) {
  if (!shouldPromise(name) || !isFn(api)) {
    return api;
  }
  return function promiseApi() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      params[_key2 - 1] = arguments[_key2];
    }
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject
      })].concat(params));
    })));
  };
}
var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;
function checkDeviceWidth() {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
    platform = _wx$getSystemInfoSync.platform,
    pixelRatio = _wx$getSystemInfoSync.pixelRatio,
    windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}
function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }
  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}
var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';
var messages = {};
var locale;
{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}
initI18nMessages();
var i18n = (0, _uniI18n.initVueI18n)(locale, {});
var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {
    var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    }
  }
};
var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;
function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale()
  });
  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {
        return watch(v);
      });
    }
  });
}
function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  if (isFn(getApp)) {
    var app = getApp({
      allowDefault: true
    });
    if (app && app.$vm) {
      return app.$vm.$locale;
    }
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}
function setLocale$1(locale) {
  var app = isFn(getApp) ? getApp() : false;
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {
      return fn({
        locale: locale
      });
    });
    return true;
  }
  return false;
}
var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}
if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}
var interceptors = {
  promiseInterceptor: promiseInterceptor
};
var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors
});
function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}
var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  }
};
var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(function (item, index) {
        return index < currentIndex ? item !== urls[currentIndex] : true;
      });
    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false
    };
  }
};
var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId
    });
  }
  result.deviceId = deviceId;
}
function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom
    };
  }
}
function populateParameters(result) {
  var _result$brand = result.brand,
    brand = _result$brand === void 0 ? '' : _result$brand,
    _result$model = result.model,
    model = _result$model === void 0 ? '' : _result$model,
    _result$system = result.system,
    system = _result$system === void 0 ? '' : _result$system,
    _result$language = result.language,
    language = _result$language === void 0 ? '' : _result$language,
    theme = result.theme,
    version = result.version,
    platform = result.platform,
    fontSizeSetting = result.fontSizeSetting,
    SDKVersion = result.SDKVersion,
    pixelRatio = result.pixelRatio,
    deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  var extraParam = {};

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__22AC80C",
    appName: "uniapi_pro",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "4.15",
    uniRuntimeVersion: "4.15",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined
  };
  Object.assign(result, parameters, extraParam);
}
function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc'
    };
    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}
function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}
function getAppLanguage(defaultLanguage) {
  return getLocale$1 ? getLocale$1() : defaultLanguage;
}
function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }
  return _hostName;
}
var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  }
};
var showActionSheet = {
  args: function args(fromArgs) {
    if ((0, _typeof2.default)(fromArgs) === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  }
};
var getAppBaseInfo = {
  returnValue: function returnValue(result) {
    var _result = result,
      version = _result.version,
      language = _result.language,
      SDKVersion = _result.SDKVersion,
      theme = _result.theme;
    var _hostName = getHostName(result);
    var hostLanguage = language.replace('_', '-');
    result = sortObject(Object.assign(result, {
      appId: "__UNI__22AC80C",
      appName: "uniapi_pro",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme
    }));
  }
};
var getDeviceInfo = {
  returnValue: function returnValue(result) {
    var _result2 = result,
      brand = _result2.brand,
      model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);
    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model
    }));
  }
};
var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);
    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0
    }));
  }
};
var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {
    var locationReducedAccuracy = result.locationReducedAccuracy;
    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  }
};

// import navigateTo from 'uni-helpers/navigate-to'

var compressImage = {
  args: function args(fromArgs) {
    // https://developers.weixin.qq.com/community/develop/doc/000c08940c865011298e0a43256800?highLine=compressHeight
    if (fromArgs.compressedHeight && !fromArgs.compressHeight) {
      fromArgs.compressHeight = fromArgs.compressedHeight;
    }
    if (fromArgs.compressedWidth && !fromArgs.compressWidth) {
      fromArgs.compressWidth = fromArgs.compressedWidth;
    }
  }
};
var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting,
  compressImage: compressImage
};
var todos = ['vibrate', 'preloadPage', 'unPreloadPage', 'loadSubPackage'];
var canIUses = [];
var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];
function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}
function processArgs(methodName, fromArgs) {
  var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {
    // 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {
          // 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {
          // 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {
          // {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}
function processReturnValue(methodName, res, returnValue) {
  var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {
    // 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}
function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {
      // 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {
      // 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }
      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);
      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {
        // 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}
var todoApis = Object.create(null);
var TODOS = ['onTabBarMidButtonTap', 'subscribePush', 'unsubscribePush', 'onPush', 'offPush', 'share'];
function createTodoApi(name) {
  return function todoApi(_ref) {
    var fail = _ref.fail,
      complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported")
    };
    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}
TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});
var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin']
};
function getProvider(_ref2) {
  var service = _ref2.service,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service]
    };
    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found'
    };
    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}
var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider
});
var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();
function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}
function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}
var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit
});

/**
 * 框架内 try-catch
 */
/**
 * 开发者 try-catch
 */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}
function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}
var cid;
var cidErrMsg;
var enabled;
function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}
function invokePushCallback(args) {
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message)
    };
    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message)
      });
    });
  }
}
var getPushCidCallbacks = [];
function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}
function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }
  var _getApiCallbacks = getApiCallbacks(args),
    success = _getApiCallbacks.success,
    fail = _getApiCallbacks.fail,
    complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'uniPush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid
        };
        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '')
        };
        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}
var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};
var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};
var baseInfo = wx.getAppBaseInfo && wx.getAppBaseInfo();
if (!baseInfo) {
  baseInfo = wx.getSystemInfoSync();
}
var host = baseInfo ? baseInfo.host : null;
var shareVideoMessage = host && host.env === 'SAAASDK' ? wx.miniapp.shareVideoMessage : wx.shareVideoMessage;
var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  shareVideoMessage: shareVideoMessage,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback
});
var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];
function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}
function initBehavior(options) {
  return Behavior(options);
}
function isPage() {
  return !!this.route;
}
function initRelation(detail) {
  this.triggerEvent('__l', detail);
}
function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector) || [];
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || toSkip(component);
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}
function syncRefs(refs, newRefs) {
  var oldKeys = (0, _construct2.default)(Set, (0, _toConsumableArray2.default)(Object.keys(refs)));
  var newKeys = Object.keys(newRefs);
  newKeys.forEach(function (key) {
    var oldValue = refs[key];
    var newValue = newRefs[key];
    if (Array.isArray(oldValue) && Array.isArray(newValue) && oldValue.length === newValue.length && newValue.every(function (value) {
      return oldValue.includes(value);
    })) {
      return;
    }
    refs[key] = newValue;
    oldKeys.delete(key);
  });
  oldKeys.forEach(function (key) {
    delete refs[key];
  });
  return refs;
}
function initRefs(vm) {
  var mpInstance = vm.$scope;
  var refs = {};
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for') || [];
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || toSkip(component));
      });
      return syncRefs(refs, $refs);
    }
  });
}
function handleLink(event) {
  var _ref3 = event.detail || event.value,
    vuePid = _ref3.vuePid,
    vueOptions = _ref3.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;
  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }
  if (!parentVm) {
    parentVm = this.$vm;
  }
  vueOptions.parent = parentVm;
}
function markMPComponent(component) {
  // 在 Vue 中标记为小程序组件
  var IS_MP = '__v_isMPComponent';
  Object.defineProperty(component, IS_MP, {
    configurable: true,
    enumerable: false,
    value: true
  });
  return component;
}
function toSkip(obj) {
  var OB = '__ob__';
  var SKIP = '__v_skip';
  if (isObject(obj) && Object.isExtensible(obj)) {
    // 避免被 @vue/composition-api 观测
    Object.defineProperty(obj, OB, {
      configurable: true,
      enumerable: false,
      value: (0, _defineProperty2.default)({}, SKIP, true)
    });
  }
  return obj;
}
var WORKLET_RE = /_(.*)_worklet_factory_/;
function initWorkletMethods(mpMethods, vueMethods) {
  if (vueMethods) {
    Object.keys(vueMethods).forEach(function (name) {
      var matches = name.match(WORKLET_RE);
      if (matches) {
        var workletName = matches[1];
        mpMethods[name] = vueMethods[name];
        mpMethods[workletName] = vueMethods[workletName];
      }
    });
  }
}
var MPPage = Page;
var MPComponent = Component;
var customizeRE = /:/g;
var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});
function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }
    // 事件名统一转驼峰格式，仅处理：当前组件为 vue 组件、当前组件为 vue 组件子组件
    if (this.$vm || this.dataset && this.dataset.comType) {
      event = customize(event);
    } else {
      // 针对微信/QQ小程序单独补充驼峰格式事件，以兼容历史项目
      var newEvent = customize(event);
      if (newEvent !== event) {
        oldTriggerEvent.apply(this, [newEvent].concat(args));
      }
    }
    return oldTriggerEvent.apply(this, [event].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}
function initHook(name, options, isComponent) {
  var oldHook = options[name];
  options[name] = function () {
    markMPComponent(this);
    initTriggerEvent(this);
    if (oldHook) {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return oldHook.apply(this, args);
    }
  };
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;
  Component = function Component() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}
var PAGE_EVENT_HOOKS = ['onPullDownRefresh', 'onReachBottom', 'onAddToFavorites', 'onShareTimeline', 'onShareAppMessage', 'onPageScroll', 'onResize', 'onTabItemTap'];
function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}
function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }
  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }
  vueOptions = vueOptions.default || vueOptions;
  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super && vueOptions.super.options && Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }
  if (isFn(vueOptions[hook]) || Array.isArray(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {
      return hasHook(hook, mixin);
    });
  }
}
function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}
function initUnknownHooks(mpOptions, vueOptions) {
  var excludes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  findHooks(vueOptions).forEach(function (hook) {
    return initHook$1(mpOptions, hook, excludes);
  });
}
function findHooks(vueOptions) {
  var hooks = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  if (vueOptions) {
    Object.keys(vueOptions).forEach(function (name) {
      if (name.indexOf('on') === 0 && isFn(vueOptions[name])) {
        hooks.push(name);
      }
    });
  }
  return hooks;
}
function initHook$1(mpOptions, hook, excludes) {
  if (excludes.indexOf(hook) === -1 && !hasOwn(mpOptions, hook)) {
    mpOptions[hook] = function (args) {
      return this.$vm && this.$vm.__call_hook(hook, args);
    };
  }
}
function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}
function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}
function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;
  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}
function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};
  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"uniapi_pro","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }
  if (!isPlainObject(data)) {
    data = {};
  }
  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });
  return data;
}
var PROP_TYPES = [String, Number, Boolean, Object, Array, null];
function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;
  var vueProps = vueOptions.props;
  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }
  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: ''
          };
          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: ''
          };
        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(initBehavior({
      properties: initProperties(vueExtends.props, true)
    }));
  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(initBehavior({
          properties: initProperties(vueMixin.props, true)
        }));
      }
    });
  }
  return behaviors;
}
function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}
function initProperties(props) {
  var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: ''
    };
    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: ''
        };
        properties.virtualHostClass = {
          type: null,
          value: ''
        };
      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: ''
    };
    properties.vueSlots = {
      // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots
        });
      }
    };
  }
  if (Array.isArray(props)) {
    // ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key)
      };
    });
  } else if (isPlainObject(props)) {
    // {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {
        // title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }
        opts.type = parsePropType(key, opts.type);
        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key)
        };
      } else {
        // content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key)
        };
      }
    });
  }
  return properties;
}
function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}
  event.stopPropagation = noop;
  event.preventDefault = noop;
  event.target = event.target || {};
  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }
  if (hasOwn(event, 'markerId')) {
    event.detail = (0, _typeof2.default)(event.detail) === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }
  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }
  return event;
}
function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {
      // ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];
      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }
      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }
      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}
function processEventExtra(vm, extra, event, __args__) {
  var extraObj = {};
  if (Array.isArray(extra) && extra.length) {
    /**
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *[
     *    ['data.items', 'data.id', item.data.id],
     *    ['metas', 'id', meta.id]
     *],
     *'test'
     */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {
          // model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {
            // $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            extraObj['$' + index] = event.detail ? event.detail.__args__ || __args__ : __args__;
          } else if (dataPath.indexOf('$event.') === 0) {
            // $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }
  return extraObj;
}
function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}
function processEventArgs(vm, event) {
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var isCustom = arguments.length > 4 ? arguments[4] : undefined;
  var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象

  // fixed 用户直接触发 mpInstance.triggerEvent
  var __args__ = isPlainObject(event.detail) ? event.detail.__args__ || [event.detail] : [event.detail];
  if (isCustom) {
    // 自定义事件
    isCustomMPEvent = event.currentTarget && event.currentTarget.dataset && event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {
      // 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return __args__;
    }
  }
  var extraObj = processEventExtra(vm, extra, event, __args__);
  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {
        // input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(__args__[0]);
        } else {
          // wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });
  return ret;
}
var ONCE = '~';
var CUSTOM = '^';
function isMatchEventType(eventType, optType) {
  return eventType === optType || optType === 'regionchange' && (eventType === 'begin' || eventType === 'end');
}
function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}
function handleEvent(event) {
  var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;
  var ret = [];
  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];
    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;
    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {
            // mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx, processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName));
            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(_this2.$vm, event, eventArray[1], eventArray[2], isCustom, methodName);
          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });
  if (eventType === 'input' && ret.length === 1 && typeof ret[0] !== 'undefined') {
    return ret[0];
  }
}
var eventChannels = {};
function getEventChannel(id) {
  var eventChannel = eventChannels[id];
  delete eventChannels[id];
  return eventChannel;
}
var hooks = ['onShow', 'onHide', 'onError', 'onPageNotFound', 'onThemeChange', 'onUnhandledRejection'];
function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}
function initScopedSlotsParams() {
  var center = {};
  var parents = {};
  function currentId(fn) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      fn(vueId);
    }
  }
  _vue.default.prototype.$hasSSP = function (vueId) {
    var slot = center[vueId];
    if (!slot) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return slot;
  };
  _vue.default.prototype.$getSSP = function (vueId, name, needAll) {
    var slot = center[vueId];
    if (slot) {
      var params = slot[name] || [];
      if (needAll) {
        return params;
      }
      return params[0];
    }
  };
  _vue.default.prototype.$setSSP = function (name, value) {
    var index = 0;
    currentId.call(this, function (vueId) {
      var slot = center[vueId];
      var params = slot[name] = slot[name] || [];
      params.push(value);
      index = params.length - 1;
    });
    return index;
  };
  _vue.default.prototype.$initSSP = function () {
    currentId.call(this, function (vueId) {
      center[vueId] = {};
    });
  };
  _vue.default.prototype.$callSSP = function () {
    currentId.call(this, function (vueId) {
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    });
  };
  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    }
  });
}
function parseBaseApp(vm, _ref4) {
  var mocks = _ref4.mocks,
    initRefs = _ref4.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);
  _vue.default.prototype.mpHost = "mp-weixin";
  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }
      this.mpType = this.$options.mpType;
      this.$mp = (0, _defineProperty2.default)({
        data: {}
      }, this.mpType, this.$options.mpInstance);
      this.$scope = this.$options.mpInstance;
      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {
        // hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    }
  });
  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {
        // 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {
          // 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }
      this.$vm = vm;
      this.$vm.$mp = {
        app: this
      };
      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);
      this.$vm.__call_hook('onLaunch', args);
    }
  };

  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }
  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);
  initHooks(appOptions, hooks);
  initUnknownHooks(appOptions, vm.$options);
  return appOptions;
}
function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs
  });
}
function createApp(vm) {
  App(parseApp(vm));
  return vm;
}
var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};
function stringifyQuery(obj) {
  var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];
    if (val === undefined) {
      return '';
    }
    if (val === null) {
      return encodeStr(key);
    }
    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }
    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?".concat(res) : '';
}
function parseBaseComponent(vueComponentOptions) {
  var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    isPage = _ref5.isPage,
    initRelation = _ref5.initRelation;
  var needVueOptions = arguments.length > 2 ? arguments[2] : undefined;
  var _initVueComponent = initVueComponent(_vue.default, vueComponentOptions),
    _initVueComponent2 = (0, _slicedToArray2.default)(_initVueComponent, 2),
    VueComponent = _initVueComponent2[0],
    vueOptions = _initVueComponent2[1];
  var options = _objectSpread({
    multipleSlots: true,
    // styleIsolation: 'apply-shared',
    addGlobalClass: true
  }, vueOptions.options || {});
  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }
  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;
        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties
        };
        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options
        });

        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      }
    },
    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      }
    },
    methods: {
      __l: handleLink,
      __e: handleEvent
    }
  };
  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }
  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }
  if (needVueOptions) {
    return [componentOptions, vueOptions, VueComponent];
  }
  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}
function parseComponent(vueComponentOptions, needVueOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation
  }, needVueOptions);
}
var hooks$1 = ['onShow', 'onHide', 'onUnload'];
hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);
function parseBasePage(vuePageOptions) {
  var _parseComponent = parseComponent(vuePageOptions, true),
    _parseComponent2 = (0, _slicedToArray2.default)(_parseComponent, 2),
    pageOptions = _parseComponent2[0],
    vueOptions = _parseComponent2[1];
  initHooks(pageOptions.methods, hooks$1, vueOptions);
  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery)
    };
    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };
  {
    initUnknownHooks(pageOptions.methods, vuePageOptions, ['onReady']);
  }
  {
    initWorkletMethods(pageOptions.methods, vueOptions.methods);
  }
  return pageOptions;
}
function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions);
}
function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}
function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}
function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true
  });
  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}
todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});
canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name : canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});
var uni = {};
if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    }
  });
} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });
  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, extraApi[name]);
    });
  }
  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });
  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });
  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}
wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;
var uni$1 = uni;
var _default = uni$1;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 20:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 21:
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 213:
/*!*************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/pages/index/entertainment/details/data.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultPersonList = void 0;
var defaultPersonList = [{
  id: 0,
  name: "全部"
}, {
  id: 1,
  name: "特色菜"
}, {
  id: 2,
  name: "小吃/快餐"
}, {
  id: 3,
  name: "甜点饮品"
}, {
  id: 4,
  name: "火锅"
}, {
  id: 5,
  name: "烧烤"
}, {
  id: 6,
  name: "西餐"
}];
exports.defaultPersonList = defaultPersonList;

/***/ }),

/***/ 22:
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;
exports.compileI18nJsonStr = compileI18nJsonStr;
exports.hasI18nJson = hasI18nJson;
exports.initVueI18n = initVueI18n;
exports.isI18nStr = isI18nStr;
exports.isString = void 0;
exports.normalizeLocale = normalizeLocale;
exports.parseI18nJson = parseI18nJson;
exports.resolveLocale = resolveLocale;
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var isObject = function isObject(val) {
  return val !== null && (0, _typeof2.default)(val) === 'object';
};
var defaultDelimiters = ['{', '}'];
var BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {
    (0, _classCallCheck2.default)(this, BaseFormatter);
    this._caches = Object.create(null);
  }
  (0, _createClass2.default)(BaseFormatter, [{
    key: "interpolate",
    value: function interpolate(message, values) {
      var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }]);
  return BaseFormatter;
}();
exports.Formatter = BaseFormatter;
var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
    startDelimiter = _ref2[0],
    endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({
          type: 'text',
          value: text
        });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ? 'list' : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? 'named' : 'unknown';
      tokens.push({
        value: sub,
        type: type
      });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
      text += char;
    }
  }
  text && tokens.push({
    type: 'text',
    value: text
  });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ? 'list' : isObject(values) ? 'named' : 'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;
    }
    index++;
  }
  return compiled;
}
var LOCALE_ZH_HANS = 'zh-Hans';
exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';
exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';
exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';
exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';
exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {
    return str.indexOf(part) !== -1;
  });
}
function startsWith(str, parts) {
  return parts.find(function (part) {
    return str.indexOf(part) === 0;
  });
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
  if (messages && Object.keys(messages).length > 0) {
    locales = Object.keys(messages);
  }
  var lang = startsWith(locale, locales);
  if (lang) {
    return lang;
  }
}
var I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {
    var locale = _ref3.locale,
      fallbackLocale = _ref3.fallbackLocale,
      messages = _ref3.messages,
      watcher = _ref3.watcher,
      formater = _ref3.formater;
    (0, _classCallCheck2.default)(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }
  (0, _createClass2.default)(I18n, [{
    key: "setLocale",
    value: function setLocale(locale) {
      var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    }
  }, {
    key: "getLocale",
    value: function getLocale() {
      return this.locale;
    }
  }, {
    key: "watchLocale",
    value: function watchLocale(fn) {
      var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    }
  }, {
    key: "add",
    value: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
  }, {
    key: "f",
    value: function f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    }
  }, {
    key: "t",
    value: function t(key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    }
  }]);
  return I18n;
}();
exports.I18n = I18n;
function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else {
    appVm.$watch(function () {
      return appVm.$locale;
    }, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;
  var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {
    var _ref4 = [messages, locale];
    locale = _ref4[0];
    messages = _ref4[1];
  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale = typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale || LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher
  });
  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {
      var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    }
  };
}
var isString = function isString(val) {
  return typeof val === 'string';
};
exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {
  var locale = _ref5.locale,
    locales = _ref5.locales,
    delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name]
      });
    }
  });
  localeValues.unshift({
    locale: locale,
    values: locales[locale]
  });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  } catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (Array.isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}
function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {
      return locales.indexOf(locale) > -1;
    });
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 23:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 230:
/*!*********************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/pages/index/homestays/details/data.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultPersonList = exports.containList = void 0;
var defaultPersonList = [{
  title: '景点',
  number: 0
}, {
  title: '餐食',
  number: 0
}, {
  title: '酒店',
  number: 0
}, {
  title: '行程',
  number: 0
}, {
  title: '活动',
  number: 0
}, {
  title: '购物',
  number: 0
}];
exports.defaultPersonList = defaultPersonList;
var containList = [{
  titie: '门票',
  number: 0
}, {
  titie: '餐饮',
  number: 0
}, {
  titie: '酒店',
  number: 0
}, {
  titie: '行程',
  number: 0
}, {
  titie: '导游',
  number: 1
}];
exports.containList = containList;

/***/ }),

/***/ 24:
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ 12);
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 25:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2023 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue &&
    !value.__v_isMPComponent
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
var NULLTYPE = '[object Null]';
var UNDEFINEDTYPE = '[object Undefined]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function nullOrUndefined(currentType, preType) {
    if(
        (currentType === NULLTYPE || currentType === UNDEFINEDTYPE) && 
        (preType === NULLTYPE || preType === UNDEFINEDTYPE)
    ) {
        return false
    }
    return true
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key] && nullOrUndefined(currentType, preType)) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"uniapi_pro","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"uniapi_pro","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"uniapi_pro","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function clearInstance(key, value) {
  // 简易去除 Vue 和小程序组件实例
  if (value) {
    if (value._isVue || value.__v_isMPComponent) {
      return {}
    }
  }
  return value
}

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret, clearInstance))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_DARK_MODE":"false","VUE_APP_NAME":"uniapi_pro","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      var triggerEvent = this.$scope['_triggerEvent'] || this.$scope['triggerEvent'];
      if (triggerEvent) {
        try {
          triggerEvent.call(this.$scope, event, {
            __args__: toArray(arguments, 1)
          });
        } catch (error) {

        }
      }
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    'onUploadDouyinVideo',
    'onNFCReadMessage',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 26:
/*!******************************************!*\
  !*** F:/HBuilderX/uniapi_pro/pages.json ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 27:
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 28));
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ 30));
var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ 5));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 31));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 32));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 33));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 34));
var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ 35));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _pages = _interopRequireDefault(__webpack_require__(/*! @/pages.json */ 37));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e34) { throw _e34; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e35) { didErr = true; err = _e35; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
function t(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function n(e, t, n) {
  return e(n = {
    path: t,
    exports: {},
    require: function require(e, t) {
      return function () {
        throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
      }(null == t && n.path);
    }
  }, n.exports), n.exports;
}
var s = n(function (e, t) {
    var n;
    e.exports = (n = n || function (e, t) {
      var n = Object.create || function () {
          function e() {}
          return function (t) {
            var n;
            return e.prototype = t, n = new e(), e.prototype = null, n;
          };
        }(),
        s = {},
        r = s.lib = {},
        i = r.Base = {
          extend: function extend(e) {
            var t = n(this);
            return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {
              t.$super.init.apply(this, arguments);
            }), t.init.prototype = t, t.$super = this, t;
          },
          create: function create() {
            var e = this.extend();
            return e.init.apply(e, arguments), e;
          },
          init: function init() {},
          mixIn: function mixIn(e) {
            for (var t in e) {
              e.hasOwnProperty(t) && (this[t] = e[t]);
            }
            e.hasOwnProperty("toString") && (this.toString = e.toString);
          },
          clone: function clone() {
            return this.init.prototype.extend(this);
          }
        },
        o = r.WordArray = i.extend({
          init: function init(e, n) {
            e = this.words = e || [], this.sigBytes = n != t ? n : 4 * e.length;
          },
          toString: function toString(e) {
            return (e || c).stringify(this);
          },
          concat: function concat(e) {
            var t = this.words,
              n = e.words,
              s = this.sigBytes,
              r = e.sigBytes;
            if (this.clamp(), s % 4) for (var i = 0; i < r; i++) {
              var o = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              t[s + i >>> 2] |= o << 24 - (s + i) % 4 * 8;
            } else for (i = 0; i < r; i += 4) {
              t[s + i >>> 2] = n[i >>> 2];
            }
            return this.sigBytes += r, this;
          },
          clamp: function clamp() {
            var t = this.words,
              n = this.sigBytes;
            t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e.words = this.words.slice(0), e;
          },
          random: function random(t) {
            for (var n, s = [], r = function r(t) {
                t = t;
                var n = 987654321,
                  s = 4294967295;
                return function () {
                  var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;
                  return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);
                };
              }, i = 0; i < t; i += 4) {
              var a = r(4294967296 * (n || e.random()));
              n = 987654071 * a(), s.push(4294967296 * a() | 0);
            }
            return new o.init(s, t);
          }
        }),
        a = s.enc = {},
        c = a.Hex = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push((i >>> 4).toString(16)), s.push((15 & i).toString(16));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s += 2) {
              n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;
            }
            return new o.init(n, t / 2);
          }
        },
        u = a.Latin1 = {
          stringify: function stringify(e) {
            for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {
              var i = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;
              s.push(String.fromCharCode(i));
            }
            return s.join("");
          },
          parse: function parse(e) {
            for (var t = e.length, n = [], s = 0; s < t; s++) {
              n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;
            }
            return new o.init(n, t);
          }
        },
        h = a.Utf8 = {
          stringify: function stringify(e) {
            try {
              return decodeURIComponent(escape(u.stringify(e)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function parse(e) {
            return u.parse(unescape(encodeURIComponent(e)));
          }
        },
        l = r.BufferedBlockAlgorithm = i.extend({
          reset: function reset() {
            this._data = new o.init(), this._nDataBytes = 0;
          },
          _append: function _append(e) {
            "string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
          },
          _process: function _process(t) {
            var n = this._data,
              s = n.words,
              r = n.sigBytes,
              i = this.blockSize,
              a = r / (4 * i),
              c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * i,
              u = e.min(4 * c, r);
            if (c) {
              for (var h = 0; h < c; h += i) {
                this._doProcessBlock(s, h);
              }
              var l = s.splice(0, c);
              n.sigBytes -= u;
            }
            return new o.init(l, u);
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._data = this._data.clone(), e;
          },
          _minBufferSize: 0
        });
      r.Hasher = l.extend({
        cfg: i.extend(),
        init: function init(e) {
          this.cfg = this.cfg.extend(e), this.reset();
        },
        reset: function reset() {
          l.reset.call(this), this._doReset();
        },
        update: function update(e) {
          return this._append(e), this._process(), this;
        },
        finalize: function finalize(e) {
          return e && this._append(e), this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function _createHelper(e) {
          return function (t, n) {
            return new e.init(n).finalize(t);
          };
        },
        _createHmacHelper: function _createHmacHelper(e) {
          return function (t, n) {
            return new d.HMAC.init(e, n).finalize(t);
          };
        }
      });
      var d = s.algo = {};
      return s;
    }(Math), n);
  }),
  r = s,
  i = (n(function (e, t) {
    var n;
    e.exports = (n = r, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [];
      !function () {
        for (var t = 0; t < 64; t++) {
          a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
        }
      }();
      var c = o.MD5 = i.extend({
        _doReset: function _doReset() {
          this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);
        },
        _doProcessBlock: function _doProcessBlock(e, t) {
          for (var n = 0; n < 16; n++) {
            var s = t + n,
              r = e[s];
            e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);
          }
          var i = this._hash.words,
            o = e[t + 0],
            c = e[t + 1],
            p = e[t + 2],
            f = e[t + 3],
            g = e[t + 4],
            m = e[t + 5],
            y = e[t + 6],
            _ = e[t + 7],
            w = e[t + 8],
            v = e[t + 9],
            I = e[t + 10],
            S = e[t + 11],
            b = e[t + 12],
            k = e[t + 13],
            A = e[t + 14],
            P = e[t + 15],
            T = i[0],
            C = i[1],
            x = i[2],
            O = i[3];
          T = u(T, C, x, O, o, 7, a[0]), O = u(O, T, C, x, c, 12, a[1]), x = u(x, O, T, C, p, 17, a[2]), C = u(C, x, O, T, f, 22, a[3]), T = u(T, C, x, O, g, 7, a[4]), O = u(O, T, C, x, m, 12, a[5]), x = u(x, O, T, C, y, 17, a[6]), C = u(C, x, O, T, _, 22, a[7]), T = u(T, C, x, O, w, 7, a[8]), O = u(O, T, C, x, v, 12, a[9]), x = u(x, O, T, C, I, 17, a[10]), C = u(C, x, O, T, S, 22, a[11]), T = u(T, C, x, O, b, 7, a[12]), O = u(O, T, C, x, k, 12, a[13]), x = u(x, O, T, C, A, 17, a[14]), T = h(T, C = u(C, x, O, T, P, 22, a[15]), x, O, c, 5, a[16]), O = h(O, T, C, x, y, 9, a[17]), x = h(x, O, T, C, S, 14, a[18]), C = h(C, x, O, T, o, 20, a[19]), T = h(T, C, x, O, m, 5, a[20]), O = h(O, T, C, x, I, 9, a[21]), x = h(x, O, T, C, P, 14, a[22]), C = h(C, x, O, T, g, 20, a[23]), T = h(T, C, x, O, v, 5, a[24]), O = h(O, T, C, x, A, 9, a[25]), x = h(x, O, T, C, f, 14, a[26]), C = h(C, x, O, T, w, 20, a[27]), T = h(T, C, x, O, k, 5, a[28]), O = h(O, T, C, x, p, 9, a[29]), x = h(x, O, T, C, _, 14, a[30]), T = l(T, C = h(C, x, O, T, b, 20, a[31]), x, O, m, 4, a[32]), O = l(O, T, C, x, w, 11, a[33]), x = l(x, O, T, C, S, 16, a[34]), C = l(C, x, O, T, A, 23, a[35]), T = l(T, C, x, O, c, 4, a[36]), O = l(O, T, C, x, g, 11, a[37]), x = l(x, O, T, C, _, 16, a[38]), C = l(C, x, O, T, I, 23, a[39]), T = l(T, C, x, O, k, 4, a[40]), O = l(O, T, C, x, o, 11, a[41]), x = l(x, O, T, C, f, 16, a[42]), C = l(C, x, O, T, y, 23, a[43]), T = l(T, C, x, O, v, 4, a[44]), O = l(O, T, C, x, b, 11, a[45]), x = l(x, O, T, C, P, 16, a[46]), T = d(T, C = l(C, x, O, T, p, 23, a[47]), x, O, o, 6, a[48]), O = d(O, T, C, x, _, 10, a[49]), x = d(x, O, T, C, A, 15, a[50]), C = d(C, x, O, T, m, 21, a[51]), T = d(T, C, x, O, b, 6, a[52]), O = d(O, T, C, x, f, 10, a[53]), x = d(x, O, T, C, I, 15, a[54]), C = d(C, x, O, T, c, 21, a[55]), T = d(T, C, x, O, w, 6, a[56]), O = d(O, T, C, x, P, 10, a[57]), x = d(x, O, T, C, y, 15, a[58]), C = d(C, x, O, T, k, 21, a[59]), T = d(T, C, x, O, g, 6, a[60]), O = d(O, T, C, x, S, 10, a[61]), x = d(x, O, T, C, p, 15, a[62]), C = d(C, x, O, T, v, 21, a[63]), i[0] = i[0] + T | 0, i[1] = i[1] + C | 0, i[2] = i[2] + x | 0, i[3] = i[3] + O | 0;
        },
        _doFinalize: function _doFinalize() {
          var t = this._data,
            n = t.words,
            s = 8 * this._nDataBytes,
            r = 8 * t.sigBytes;
          n[r >>> 5] |= 128 << 24 - r % 32;
          var i = e.floor(s / 4294967296),
            o = s;
          n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();
          for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {
            var h = c[u];
            c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);
          }
          return a;
        },
        clone: function clone() {
          var e = i.clone.call(this);
          return e._hash = this._hash.clone(), e;
        }
      });
      function u(e, t, n, s, r, i, o) {
        var a = e + (t & n | ~t & s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function h(e, t, n, s, r, i, o) {
        var a = e + (t & s | n & ~s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function l(e, t, n, s, r, i, o) {
        var a = e + (t ^ n ^ s) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      function d(e, t, n, s, r, i, o) {
        var a = e + (n ^ (t | ~s)) + r + o;
        return (a << i | a >>> 32 - i) + t;
      }
      t.MD5 = i._createHelper(c), t.HmacMD5 = i._createHmacHelper(c);
    }(Math), n.MD5);
  }), n(function (e, t) {
    var n;
    e.exports = (n = r, void function () {
      var e = n,
        t = e.lib.Base,
        s = e.enc.Utf8;
      e.algo.HMAC = t.extend({
        init: function init(e, t) {
          e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));
          var n = e.blockSize,
            r = 4 * n;
          t.sigBytes > r && (t = e.finalize(t)), t.clamp();
          for (var i = this._oKey = t.clone(), o = this._iKey = t.clone(), a = i.words, c = o.words, u = 0; u < n; u++) {
            a[u] ^= 1549556828, c[u] ^= 909522486;
          }
          i.sigBytes = o.sigBytes = r, this.reset();
        },
        reset: function reset() {
          var e = this._hasher;
          e.reset(), e.update(this._iKey);
        },
        update: function update(e) {
          return this._hasher.update(e), this;
        },
        finalize: function finalize(e) {
          var t = this._hasher,
            n = t.finalize(e);
          return t.reset(), t.finalize(this._oKey.clone().concat(n));
        }
      });
    }());
  }), n(function (e, t) {
    e.exports = r.HmacMD5;
  })),
  o = n(function (e, t) {
    e.exports = r.enc.Utf8;
  }),
  a = n(function (e, t) {
    var n;
    e.exports = (n = r, function () {
      var e = n,
        t = e.lib.WordArray;
      function s(e, n, s) {
        for (var r = [], i = 0, o = 0; o < n; o++) {
          if (o % 4) {
            var a = s[e.charCodeAt(o - 1)] << o % 4 * 2,
              c = s[e.charCodeAt(o)] >>> 6 - o % 4 * 2;
            r[i >>> 2] |= (a | c) << 24 - i % 4 * 8, i++;
          }
        }
        return t.create(r, i);
      }
      e.enc.Base64 = {
        stringify: function stringify(e) {
          var t = e.words,
            n = e.sigBytes,
            s = this._map;
          e.clamp();
          for (var r = [], i = 0; i < n; i += 3) {
            for (var o = (t[i >>> 2] >>> 24 - i % 4 * 8 & 255) << 16 | (t[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255) << 8 | t[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255, a = 0; a < 4 && i + .75 * a < n; a++) {
              r.push(s.charAt(o >>> 6 * (3 - a) & 63));
            }
          }
          var c = s.charAt(64);
          if (c) for (; r.length % 4;) {
            r.push(c);
          }
          return r.join("");
        },
        parse: function parse(e) {
          var t = e.length,
            n = this._map,
            r = this._reverseMap;
          if (!r) {
            r = this._reverseMap = [];
            for (var i = 0; i < n.length; i++) {
              r[n.charCodeAt(i)] = i;
            }
          }
          var o = n.charAt(64);
          if (o) {
            var a = e.indexOf(o);
            -1 !== a && (t = a);
          }
          return s(e, t, r);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      };
    }(), n.enc.Base64);
  });
var c = "FUNCTION",
  u = "OBJECT",
  h = "CLIENT_DB",
  l = "pending",
  d = "fulfilled",
  p = "rejected";
function f(e) {
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
}
function g(e) {
  return "object" === f(e);
}
function m(e) {
  return "function" == typeof e;
}
function y(e) {
  return function () {
    try {
      return e.apply(e, arguments);
    } catch (e) {
      console.error(e);
    }
  };
}
var _ = "REJECTED",
  w = "NOT_PENDING";
var v = /*#__PURE__*/function () {
  function v() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref.createPromise,
      _ref$retryRule = _ref.retryRule,
      t = _ref$retryRule === void 0 ? _ : _ref$retryRule;
    (0, _classCallCheck2.default)(this, v);
    this.createPromise = e, this.status = null, this.promise = null, this.retryRule = t;
  }
  (0, _createClass2.default)(v, [{
    key: "needRetry",
    get: function get() {
      if (!this.status) return !0;
      switch (this.retryRule) {
        case _:
          return this.status === p;
        case w:
          return this.status !== l;
      }
    }
  }, {
    key: "exec",
    value: function exec() {
      var _this = this;
      return this.needRetry ? (this.status = l, this.promise = this.createPromise().then(function (e) {
        return _this.status = d, Promise.resolve(e);
      }, function (e) {
        return _this.status = p, Promise.reject(e);
      }), this.promise) : this.promise;
    }
  }]);
  return v;
}();
function I(e) {
  return e && "string" == typeof e ? JSON.parse(e) : e;
}
var S = "development" === "development",
  b = "mp-weixin",
  k = "true" === undefined || !0 === undefined,
  A = I([]),
  P = "h5" === b ? "web" : "app-plus" === b ? "app" : b,
  T = I({
    "address": [
        "127.0.0.1",
        "192.168.1.11"
    ],
    "debugPort": 9000,
    "initialLaunchType": "local",
    "servePort": 7000,
    "skipFiles": [
        "<node_internals>/**",
        "F:/HBuilderX/HBuilderX.3.99.2023122611/HBuilderX/plugins/unicloud/**/*.js"
    ]
}
),
  C = I([{"provider":"aliyun","spaceName":"uni-admin-api","spaceId":"mp-fcd50ffd-8e88-4c8b-9299-20b1da88fc6d","clientSecret":"Nc9QpKOagXtBCLIRpZrfHA==","endpoint":"https://api.next.bspapp.com"}]) || [],
  x = true;
var O = "";
try {
  O = (__webpack_require__(/*! uni-stat-config */ 38).default || __webpack_require__(/*! uni-stat-config */ 38)).appid;
} catch (e) {}
var E = {};
function L(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n, s;
  return n = E, s = e, Object.prototype.hasOwnProperty.call(n, s) || (E[e] = t), E[e];
}
"app" === P && (E = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});
var R = ["invoke", "success", "fail", "complete"],
  U = L("_globalUniCloudInterceptor");
function N(e, t) {
  U[e] || (U[e] = {}), g(t) && Object.keys(t).forEach(function (n) {
    R.indexOf(n) > -1 && function (e, t, n) {
      var s = U[e][t];
      s || (s = U[e][t] = []), -1 === s.indexOf(n) && m(n) && s.push(n);
    }(e, n, t[n]);
  });
}
function D(e, t) {
  U[e] || (U[e] = {}), g(t) ? Object.keys(t).forEach(function (n) {
    R.indexOf(n) > -1 && function (e, t, n) {
      var s = U[e][t];
      if (!s) return;
      var r = s.indexOf(n);
      r > -1 && s.splice(r, 1);
    }(e, n, t[n]);
  }) : delete U[e];
}
function M(e, t) {
  return e && 0 !== e.length ? e.reduce(function (e, n) {
    return e.then(function () {
      return n(t);
    });
  }, Promise.resolve()) : Promise.resolve();
}
function q(e, t) {
  return U[e] && U[e][t] || [];
}
function F(e) {
  N("callObject", e);
}
var K = L("_globalUniCloudListener"),
  j = "response",
  $ = "needLogin",
  B = "refreshToken",
  W = "clientdb",
  H = "cloudfunction",
  z = "cloudobject";
function J(e) {
  return K[e] || (K[e] = []), K[e];
}
function G(e, t) {
  var n = J(e);
  n.includes(t) || n.push(t);
}
function V(e, t) {
  var n = J(e),
    s = n.indexOf(t);
  -1 !== s && n.splice(s, 1);
}
function Y(e, t) {
  var n = J(e);
  for (var _e2 = 0; _e2 < n.length; _e2++) {
    (0, n[_e2])(t);
  }
}
var Q,
  X = !1;
function Z() {
  return Q || (Q = new Promise(function (e) {
    X && e(), function t() {
      if ("function" == typeof getCurrentPages) {
        var _t2 = getCurrentPages();
        _t2 && _t2[0] && (X = !0, e());
      }
      X || setTimeout(function () {
        t();
      }, 30);
    }();
  }), Q);
}
function ee(e) {
  var t = {};
  for (var _n2 in e) {
    var _s2 = e[_n2];
    m(_s2) && (t[_n2] = y(_s2));
  }
  return t;
}
var te = /*#__PURE__*/function (_Error) {
  (0, _inherits2.default)(te, _Error);
  var _super = _createSuper(te);
  function te(e) {
    var _this2;
    (0, _classCallCheck2.default)(this, te);
    _this2 = _super.call(this, e.message), _this2.errMsg = e.message || e.errMsg || "unknown system error", _this2.code = _this2.errCode = e.code || e.errCode || "SYSTEM_ERROR", _this2.errSubject = _this2.subject = e.subject || e.errSubject, _this2.cause = e.cause, _this2.requestId = e.requestId;
    return _this2;
  }
  (0, _createClass2.default)(te, [{
    key: "toJson",
    value: function toJson() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (!(e >= 10)) return e++, {
        errCode: this.errCode,
        errMsg: this.errMsg,
        errSubject: this.errSubject,
        cause: this.cause && this.cause.toJson ? this.cause.toJson(e) : this.cause
      };
    }
  }]);
  return te;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Error));
var ne = {
  request: function request(e) {
    return uni.request(e);
  },
  uploadFile: function uploadFile(e) {
    return uni.uploadFile(e);
  },
  setStorageSync: function setStorageSync(e, t) {
    return uni.setStorageSync(e, t);
  },
  getStorageSync: function getStorageSync(e) {
    return uni.getStorageSync(e);
  },
  removeStorageSync: function removeStorageSync(e) {
    return uni.removeStorageSync(e);
  },
  clearStorageSync: function clearStorageSync() {
    return uni.clearStorageSync();
  }
};
function se() {
  return {
    token: ne.getStorageSync("uni_id_token") || ne.getStorageSync("uniIdToken"),
    tokenExpired: ne.getStorageSync("uni_id_token_expired")
  };
}
function re() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref2.token,
    t = _ref2.tokenExpired;
  e && ne.setStorageSync("uni_id_token", e), t && ne.setStorageSync("uni_id_token_expired", t);
}
var ie, oe;
function ae() {
  return ie || (ie = uni.getSystemInfoSync()), ie;
}
function ce() {
  var e, t;
  try {
    if (uni.getLaunchOptionsSync) {
      if (uni.getLaunchOptionsSync.toString().indexOf("not yet implemented") > -1) return;
      var _uni$getLaunchOptions = uni.getLaunchOptionsSync(),
        _n3 = _uni$getLaunchOptions.scene,
        _s3 = _uni$getLaunchOptions.channel;
      e = _s3, t = _n3;
    }
  } catch (e) {}
  return {
    channel: e,
    scene: t
  };
}
function ue() {
  var e = uni.getLocale && uni.getLocale() || "en";
  if (oe) return _objectSpread(_objectSpread({}, oe), {}, {
    locale: e,
    LOCALE: e
  });
  var t = ae(),
    n = t.deviceId,
    s = t.osName,
    r = t.uniPlatform,
    i = t.appId,
    o = ["pixelRatio", "brand", "model", "system", "language", "version", "platform", "host", "SDKVersion", "swanNativeVersion", "app", "AppPlatform", "fontSizeSetting"];
  for (var _e3 = 0; _e3 < o.length; _e3++) {
    delete t[o[_e3]];
  }
  return oe = _objectSpread(_objectSpread({
    PLATFORM: r,
    OS: s,
    APPID: i,
    DEVICEID: n
  }, ce()), t), _objectSpread(_objectSpread({}, oe), {}, {
    locale: e,
    LOCALE: e
  });
}
var he = {
  sign: function sign(e, t) {
    var n = "";
    return Object.keys(e).sort().forEach(function (t) {
      e[t] && (n = n + "&" + t + "=" + e[t]);
    }), n = n.slice(1), i(n, t).toString();
  },
  wrappedRequest: function wrappedRequest(e, t) {
    return new Promise(function (n, s) {
      t(Object.assign(e, {
        complete: function complete(e) {
          e || (e = {}), S && "web" === P && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");
          var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];
          if (!e.statusCode || e.statusCode >= 400) {
            var _n4 = e.data && e.data.error && e.data.error.code || "SYS_ERR",
              _r = e.data && e.data.error && e.data.error.message || e.errMsg || "request:fail";
            return s(new te({
              code: _n4,
              message: _r,
              requestId: t
            }));
          }
          var r = e.data;
          if (r.error) return s(new te({
            code: r.error.code,
            message: r.error.message,
            requestId: t
          }));
          r.result = r.data, r.requestId = t, delete r.data, n(r);
        }
      }));
    });
  },
  toBase64: function toBase64(e) {
    return a.stringify(o.parse(e));
  }
};
var le = /*#__PURE__*/function () {
  function le(e) {
    var _this3 = this;
    (0, _classCallCheck2.default)(this, le);
    ["spaceId", "clientSecret"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), this.config = Object.assign({}, {
      endpoint: 0 === e.spaceId.indexOf("mp-") ? "https://api.next.bspapp.com" : "https://api.bspapp.com"
    }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = ne, this._getAccessTokenPromiseHub = new v({
      createPromise: function createPromise() {
        return _this3.requestAuth(_this3.setupRequest({
          method: "serverless.auth.user.anonymousAuthorize",
          params: "{}"
        }, "auth")).then(function (e) {
          if (!e.result || !e.result.accessToken) throw new te({
            code: "AUTH_FAILED",
            message: "获取accessToken失败"
          });
          _this3.setAccessToken(e.result.accessToken);
        });
      },
      retryRule: w
    });
  }
  (0, _createClass2.default)(le, [{
    key: "hasAccessToken",
    get: function get() {
      return !!this.accessToken;
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e) {
      this.accessToken = e;
    }
  }, {
    key: "requestWrapped",
    value: function requestWrapped(e) {
      return he.wrappedRequest(e, this.adapter.request);
    }
  }, {
    key: "requestAuth",
    value: function requestAuth(e) {
      return this.requestWrapped(e);
    }
  }, {
    key: "request",
    value: function request(e, t) {
      var _this4 = this;
      return Promise.resolve().then(function () {
        return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {
          return new Promise(function (e, n) {
            !t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();
          }).then(function () {
            return _this4.getAccessToken();
          }).then(function () {
            var t = _this4.rebuildRequest(e);
            return _this4.request(t, !0);
          });
        }) : _this4.getAccessToken().then(function () {
          var t = _this4.rebuildRequest(e);
          return _this4.request(t, !0);
        });
      });
    }
  }, {
    key: "rebuildRequest",
    value: function rebuildRequest(e) {
      var t = Object.assign({}, e);
      return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = he.sign(t.data, this.config.clientSecret), t;
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = he.sign(n, this.config.clientSecret), {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: s
      };
    }
  }, {
    key: "getAccessToken",
    value: function getAccessToken() {
      return this._getAccessTokenPromiseHub.exec();
    }
  }, {
    key: "authorize",
    value: function () {
      var _authorize = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getAccessToken();
              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function authorize() {
        return _authorize.apply(this, arguments);
      }
      return authorize;
    }()
  }, {
    key: "callFunction",
    value: function callFunction(e) {
      var t = {
        method: "serverless.function.runtime.invoke",
        params: JSON.stringify({
          functionTarget: e.name,
          functionArgs: e.data || {}
        })
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "getOSSUploadOptionsFromPath",
    value: function getOSSUploadOptionsFromPath(e) {
      var t = {
        method: "serverless.file.resource.generateProximalSign",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref3) {
      var _this5 = this;
      var e = _ref3.url,
        t = _ref3.formData,
        n = _ref3.name,
        s = _ref3.filePath,
        r = _ref3.fileType,
        i = _ref3.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this5.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          header: {
            "X-OSS-server-side-encrpytion": "AES256"
          },
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "reportOSSUpload",
    value: function reportOSSUpload(e) {
      var t = {
        method: "serverless.file.resource.report",
        params: JSON.stringify(e)
      };
      return this.request(this.setupRequest(t));
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref4) {
        var e, t, _ref4$fileType, n, _ref4$cloudPathAsReal, s, r, i, o, a, c, u, h, l, d, p, g, m, y, _, _e4, w;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                e = _ref4.filePath, t = _ref4.cloudPath, _ref4$fileType = _ref4.fileType, n = _ref4$fileType === void 0 ? "image" : _ref4$fileType, _ref4$cloudPathAsReal = _ref4.cloudPathAsRealPath, s = _ref4$cloudPathAsReal === void 0 ? !1 : _ref4$cloudPathAsReal, r = _ref4.onUploadProgress, i = _ref4.config;
                if (!("string" !== f(t))) {
                  _context2.next = 3;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath必须为字符串类型"
                });
              case 3:
                if (t = t.trim()) {
                  _context2.next = 5;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不可为空"
                });
              case 5:
                if (!/:\/\//.test(t)) {
                  _context2.next = 7;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不合法"
                });
              case 7:
                o = i && i.envType || this.config.envType;
                if (!(s && ("/" !== t[0] && (t = "/" + t), t.indexOf("\\") > -1))) {
                  _context2.next = 10;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "使用cloudPath作为路径时，cloudPath不可包含“\\”"
                });
              case 10:
                _context2.next = 12;
                return this.getOSSUploadOptionsFromPath({
                  env: o,
                  filename: s ? t.split("/").pop() : t,
                  fileId: s ? t : void 0
                });
              case 12:
                a = _context2.sent.result;
                c = "https://" + a.cdnDomain + "/" + a.ossPath;
                u = a.securityToken;
                h = a.accessKeyId;
                l = a.signature;
                d = a.host;
                p = a.ossPath;
                g = a.id;
                m = a.policy;
                y = a.ossCallbackUrl;
                _ = {
                  "Cache-Control": "max-age=2592000",
                  "Content-Disposition": "attachment",
                  OSSAccessKeyId: h,
                  Signature: l,
                  host: d,
                  id: g,
                  key: p,
                  policy: m,
                  success_action_status: 200
                };
                if (u && (_["x-oss-security-token"] = u), y) {
                  _e4 = JSON.stringify({
                    callbackUrl: y,
                    callbackBody: JSON.stringify({
                      fileId: g,
                      spaceId: this.config.spaceId
                    }),
                    callbackBodyType: "application/json"
                  });
                  _.callback = he.toBase64(_e4);
                }
                w = {
                  url: "https://" + a.host,
                  formData: _,
                  fileName: "file",
                  name: "file",
                  filePath: e,
                  fileType: n
                };
                _context2.next = 27;
                return this.uploadFileToOSS(Object.assign({}, w, {
                  onUploadProgress: r
                }));
              case 27:
                if (!y) {
                  _context2.next = 29;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: c
                });
              case 29:
                _context2.next = 31;
                return this.reportOSSUpload({
                  id: g
                });
              case 31:
                if (!_context2.sent.success) {
                  _context2.next = 33;
                  break;
                }
                return _context2.abrupt("return", {
                  success: !0,
                  filePath: e,
                  fileID: c
                });
              case 33:
                throw new te({
                  code: "UPLOAD_FAILED",
                  message: "文件上传失败"
                });
              case 34:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));
      function uploadFile(_x) {
        return _uploadFile.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref5.fileList;
      return new Promise(function (t, n) {
        Array.isArray(e) && 0 !== e.length || n(new te({
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        })), t({
          fileList: e.map(function (e) {
            return {
              fileID: e,
              tempFileURL: e
            };
          })
        });
      });
    }
  }, {
    key: "getFileInfo",
    value: function () {
      var _getFileInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _ref6,
          e,
          t,
          _args3 = arguments;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _ref6 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {}, e = _ref6.fileList;
                if (!(!Array.isArray(e) || 0 === e.length)) {
                  _context3.next = 3;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "fileList的元素必须是非空的字符串"
                });
              case 3:
                t = {
                  method: "serverless.file.resource.info",
                  params: JSON.stringify({
                    id: e.map(function (e) {
                      return e.split("?")[0];
                    }).join(",")
                  })
                };
                _context3.next = 6;
                return this.request(this.setupRequest(t));
              case 6:
                _context3.t0 = _context3.sent.result;
                return _context3.abrupt("return", {
                  fileList: _context3.t0
                });
              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function getFileInfo() {
        return _getFileInfo.apply(this, arguments);
      }
      return getFileInfo;
    }()
  }]);
  return le;
}();
var de = {
  init: function init(e) {
    var t = new le(e),
      n = {
        signInAnonymously: function signInAnonymously() {
          return t.authorize();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!1);
        }
      };
    return t.auth = function () {
      return n;
    }, t.customAuth = t.auth, t;
  }
};
var pe = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:";
var fe;
!function (e) {
  e.local = "local", e.none = "none", e.session = "session";
}(fe || (fe = {}));
var ge = function ge() {},
  me = n(function (e, t) {
    var n;
    e.exports = (n = r, function (e) {
      var t = n,
        s = t.lib,
        r = s.WordArray,
        i = s.Hasher,
        o = t.algo,
        a = [],
        c = [];
      !function () {
        function t(t) {
          for (var n = e.sqrt(t), s = 2; s <= n; s++) {
            if (!(t % s)) return !1;
          }
          return !0;
        }
        function n(e) {
          return 4294967296 * (e - (0 | e)) | 0;
        }
        for (var s = 2, r = 0; r < 64;) {
          t(s) && (r < 8 && (a[r] = n(e.pow(s, .5))), c[r] = n(e.pow(s, 1 / 3)), r++), s++;
        }
      }();
      var u = [],
        h = o.SHA256 = i.extend({
          _doReset: function _doReset() {
            this._hash = new r.init(a.slice(0));
          },
          _doProcessBlock: function _doProcessBlock(e, t) {
            for (var n = this._hash.words, s = n[0], r = n[1], i = n[2], o = n[3], a = n[4], h = n[5], l = n[6], d = n[7], p = 0; p < 64; p++) {
              if (p < 16) u[p] = 0 | e[t + p];else {
                var f = u[p - 15],
                  g = (f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3,
                  m = u[p - 2],
                  y = (m << 15 | m >>> 17) ^ (m << 13 | m >>> 19) ^ m >>> 10;
                u[p] = g + u[p - 7] + y + u[p - 16];
              }
              var _ = s & r ^ s & i ^ r & i,
                w = (s << 30 | s >>> 2) ^ (s << 19 | s >>> 13) ^ (s << 10 | s >>> 22),
                v = d + ((a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25)) + (a & h ^ ~a & l) + c[p] + u[p];
              d = l, l = h, h = a, a = o + v | 0, o = i, i = r, r = s, s = v + (w + _) | 0;
            }
            n[0] = n[0] + s | 0, n[1] = n[1] + r | 0, n[2] = n[2] + i | 0, n[3] = n[3] + o | 0, n[4] = n[4] + a | 0, n[5] = n[5] + h | 0, n[6] = n[6] + l | 0, n[7] = n[7] + d | 0;
          },
          _doFinalize: function _doFinalize() {
            var t = this._data,
              n = t.words,
              s = 8 * this._nDataBytes,
              r = 8 * t.sigBytes;
            return n[r >>> 5] |= 128 << 24 - r % 32, n[14 + (r + 64 >>> 9 << 4)] = e.floor(s / 4294967296), n[15 + (r + 64 >>> 9 << 4)] = s, t.sigBytes = 4 * n.length, this._process(), this._hash;
          },
          clone: function clone() {
            var e = i.clone.call(this);
            return e._hash = this._hash.clone(), e;
          }
        });
      t.SHA256 = i._createHelper(h), t.HmacSHA256 = i._createHmacHelper(h);
    }(Math), n.SHA256);
  }),
  ye = me,
  _e = n(function (e, t) {
    e.exports = r.HmacSHA256;
  });
var we = function we() {
  var e;
  if (!Promise) {
    e = function e() {}, e.promise = {};
    var _t3 = function _t3() {
      throw new te({
        message: 'Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.'
      });
    };
    return Object.defineProperty(e.promise, "then", {
      get: _t3
    }), Object.defineProperty(e.promise, "catch", {
      get: _t3
    }), e;
  }
  var t = new Promise(function (t, n) {
    e = function e(_e5, s) {
      return _e5 ? n(_e5) : t(s);
    };
  });
  return e.promise = t, e;
};
function ve(e) {
  return void 0 === e;
}
function Ie(e) {
  return "[object Null]" === Object.prototype.toString.call(e);
}
var Se;
function be(e) {
  var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);
  var n;
  var _iterator = _createForOfIteratorHelper(t),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _e6 = _step.value;
      var _t4 = _e6.isMatch,
        _n5 = _e6.genAdapter,
        _s4 = _e6.runtime;
      if (_t4()) return {
        adapter: _n5(),
        runtime: _s4
      };
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}
!function (e) {
  e.WEB = "web", e.WX_MP = "wx_mp";
}(Se || (Se = {}));
var ke = {
    adapter: null,
    runtime: void 0
  },
  Ae = ["anonymousUuidKey"];
var Pe = /*#__PURE__*/function (_ge) {
  (0, _inherits2.default)(Pe, _ge);
  var _super2 = _createSuper(Pe);
  function Pe() {
    var _this6;
    (0, _classCallCheck2.default)(this, Pe);
    _this6 = _super2.call(this), ke.adapter.root.tcbObject || (ke.adapter.root.tcbObject = {});
    return _this6;
  }
  (0, _createClass2.default)(Pe, [{
    key: "setItem",
    value: function setItem(e, t) {
      ke.adapter.root.tcbObject[e] = t;
    }
  }, {
    key: "getItem",
    value: function getItem(e) {
      return ke.adapter.root.tcbObject[e];
    }
  }, {
    key: "removeItem",
    value: function removeItem(e) {
      delete ke.adapter.root.tcbObject[e];
    }
  }, {
    key: "clear",
    value: function clear() {
      delete ke.adapter.root.tcbObject;
    }
  }]);
  return Pe;
}(ge);
function Te(e, t) {
  switch (e) {
    case "local":
      return t.localStorage || new Pe();
    case "none":
      return new Pe();
    default:
      return t.sessionStorage || new Pe();
  }
}
var Ce = /*#__PURE__*/function () {
  function Ce(e) {
    (0, _classCallCheck2.default)(this, Ce);
    if (!this._storage) {
      this._persistence = ke.adapter.primaryStorage || e.persistence, this._storage = Te(this._persistence, ke.adapter);
      var _t5 = "access_token_".concat(e.env),
        _n6 = "access_token_expire_".concat(e.env),
        _s5 = "refresh_token_".concat(e.env),
        _r2 = "anonymous_uuid_".concat(e.env),
        _i = "login_type_".concat(e.env),
        _o = "user_info_".concat(e.env);
      this.keys = {
        accessTokenKey: _t5,
        accessTokenExpireKey: _n6,
        refreshTokenKey: _s5,
        anonymousUuidKey: _r2,
        loginTypeKey: _i,
        userInfoKey: _o
      };
    }
  }
  (0, _createClass2.default)(Ce, [{
    key: "updatePersistence",
    value: function updatePersistence(e) {
      if (e === this._persistence) return;
      var t = "local" === this._persistence;
      this._persistence = e;
      var n = Te(e, ke.adapter);
      for (var _e7 in this.keys) {
        var _s6 = this.keys[_e7];
        if (t && Ae.includes(_e7)) continue;
        var _r3 = this._storage.getItem(_s6);
        ve(_r3) || Ie(_r3) || (n.setItem(_s6, _r3), this._storage.removeItem(_s6));
      }
      this._storage = n;
    }
  }, {
    key: "setStore",
    value: function setStore(e, t, n) {
      if (!this._storage) return;
      var s = {
          version: n || "localCachev1",
          content: t
        },
        r = JSON.stringify(s);
      try {
        this._storage.setItem(e, r);
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: "getStore",
    value: function getStore(e, t) {
      try {
        if (!this._storage) return;
      } catch (e) {
        return "";
      }
      t = t || "localCachev1";
      var n = this._storage.getItem(e);
      if (!n) return "";
      if (n.indexOf(t) >= 0) {
        return JSON.parse(n).content;
      }
      return "";
    }
  }, {
    key: "removeStore",
    value: function removeStore(e) {
      this._storage.removeItem(e);
    }
  }]);
  return Ce;
}();
var xe = {},
  Oe = {};
function Ee(e) {
  return xe[e];
}
var Le = /*#__PURE__*/(0, _createClass2.default)(function Le(e, t) {
  (0, _classCallCheck2.default)(this, Le);
  this.data = t || null, this.name = e;
});
var Re = /*#__PURE__*/function (_Le) {
  (0, _inherits2.default)(Re, _Le);
  var _super3 = _createSuper(Re);
  function Re(e, t) {
    var _this7;
    (0, _classCallCheck2.default)(this, Re);
    _this7 = _super3.call(this, "error", {
      error: e,
      data: t
    }), _this7.error = e;
    return _this7;
  }
  return (0, _createClass2.default)(Re);
}(Le);
var Ue = new ( /*#__PURE__*/function () {
  function _class() {
    (0, _classCallCheck2.default)(this, _class);
    this._listeners = {};
  }
  (0, _createClass2.default)(_class, [{
    key: "on",
    value: function on(e, t) {
      return function (e, t, n) {
        n[e] = n[e] || [], n[e].push(t);
      }(e, t, this._listeners), this;
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return function (e, t, n) {
        if (n && n[e]) {
          var _s7 = n[e].indexOf(t);
          -1 !== _s7 && n[e].splice(_s7, 1);
        }
      }(e, t, this._listeners), this;
    }
  }, {
    key: "fire",
    value: function fire(e, t) {
      if (e instanceof Re) return console.error(e.error), this;
      var n = "string" == typeof e ? new Le(e, t || {}) : e;
      var s = n.name;
      if (this._listens(s)) {
        n.target = this;
        var _e8 = this._listeners[s] ? (0, _toConsumableArray2.default)(this._listeners[s]) : [];
        var _iterator2 = _createForOfIteratorHelper(_e8),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _t6 = _step2.value;
            _t6.call(this, n);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      return this;
    }
  }, {
    key: "_listens",
    value: function _listens(e) {
      return this._listeners[e] && this._listeners[e].length > 0;
    }
  }]);
  return _class;
}())();
function Ne(e, t) {
  Ue.on(e, t);
}
function De(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Ue.fire(e, t);
}
function Me(e, t) {
  Ue.off(e, t);
}
var qe = "loginStateChanged",
  Fe = "loginStateExpire",
  Ke = "loginTypeChanged",
  je = "anonymousConverted",
  $e = "refreshAccessToken";
var Be;
!function (e) {
  e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";
}(Be || (Be = {}));
var We = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],
  He = {
    "X-SDK-Version": "1.3.5"
  };
function ze(e, t, n) {
  var s = e[t];
  e[t] = function (t) {
    var r = {},
      i = {};
    n.forEach(function (n) {
      var _n$call = n.call(e, t),
        s = _n$call.data,
        o = _n$call.headers;
      Object.assign(r, s), Object.assign(i, o);
    });
    var o = t.data;
    return o && function () {
      var e;
      if (e = o, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, o), r);else for (var _e9 in r) {
        o.append(_e9, r[_e9]);
      }
    }(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), i), s.call(e, t);
  };
}
function Je() {
  var e = Math.random().toString(16).slice(2);
  return {
    data: {
      seqId: e
    },
    headers: _objectSpread(_objectSpread({}, He), {}, {
      "x-seqid": e
    })
  };
}
var Ge = /*#__PURE__*/function () {
  function Ge() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Ge);
    var t;
    this.config = e, this._reqClass = new ke.adapter.reqClass({
      timeout: this.config.timeout,
      timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"),
      restrictedMethods: ["post"]
    }), this._cache = Ee(this.config.env), this._localCache = (t = this.config.env, Oe[t]), ze(this._reqClass, "post", [Je]), ze(this._reqClass, "upload", [Je]), ze(this._reqClass, "download", [Je]);
  }
  (0, _createClass2.default)(Ge, [{
    key: "post",
    value: function () {
      var _post = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(e) {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this._reqClass.post(e);
              case 2:
                return _context4.abrupt("return", _context4.sent);
              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function post(_x2) {
        return _post.apply(this, arguments);
      }
      return post;
    }()
  }, {
    key: "upload",
    value: function () {
      var _upload = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(e) {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._reqClass.upload(e);
              case 2:
                return _context5.abrupt("return", _context5.sent);
              case 3:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function upload(_x3) {
        return _upload.apply(this, arguments);
      }
      return upload;
    }()
  }, {
    key: "download",
    value: function () {
      var _download = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(e) {
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._reqClass.download(e);
              case 2:
                return _context6.abrupt("return", _context6.sent);
              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function download(_x4) {
        return _download.apply(this, arguments);
      }
      return download;
    }()
  }, {
    key: "refreshAccessToken",
    value: function () {
      var _refreshAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        var e, t;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());
                _context7.prev = 1;
                _context7.next = 4;
                return this._refreshAccessTokenPromise;
              case 4:
                e = _context7.sent;
                _context7.next = 10;
                break;
              case 7:
                _context7.prev = 7;
                _context7.t0 = _context7["catch"](1);
                t = _context7.t0;
              case 10:
                if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {
                  _context7.next = 12;
                  break;
                }
                throw t;
              case 12:
                return _context7.abrupt("return", e);
              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[1, 7]]);
      }));
      function refreshAccessToken() {
        return _refreshAccessToken2.apply(this, arguments);
      }
      return refreshAccessToken;
    }()
  }, {
    key: "_refreshAccessToken",
    value: function () {
      var _refreshAccessToken3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8() {
        var _this$_cache$keys, e, t, n, s, r, i, o, a, _e10, _e11, _t7, _s8;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;
                this._cache.removeStore(e), this._cache.removeStore(t);
                i = this._cache.getStore(n);
                if (i) {
                  _context8.next = 5;
                  break;
                }
                throw new te({
                  message: "未登录CloudBase"
                });
              case 5:
                o = {
                  refresh_token: i
                };
                _context8.next = 8;
                return this.request("auth.fetchAccessTokenWithRefreshToken", o);
              case 8:
                a = _context8.sent;
                if (!a.data.code) {
                  _context8.next = 21;
                  break;
                }
                _e10 = a.data.code;
                if (!("SIGN_PARAM_INVALID" === _e10 || "REFRESH_TOKEN_EXPIRED" === _e10 || "INVALID_REFRESH_TOKEN" === _e10)) {
                  _context8.next = 20;
                  break;
                }
                if (!(this._cache.getStore(s) === Be.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e10)) {
                  _context8.next = 19;
                  break;
                }
                _e11 = this._cache.getStore(r);
                _t7 = this._cache.getStore(n);
                _context8.next = 17;
                return this.send("auth.signInAnonymously", {
                  anonymous_uuid: _e11,
                  refresh_token: _t7
                });
              case 17:
                _s8 = _context8.sent;
                return _context8.abrupt("return", (this.setRefreshToken(_s8.refresh_token), this._refreshAccessToken()));
              case 19:
                De(Fe), this._cache.removeStore(n);
              case 20:
                throw new te({
                  code: a.data.code,
                  message: "\u5237\u65B0access token\u5931\u8D25\uFF1A".concat(a.data.code)
                });
              case 21:
                if (!a.data.access_token) {
                  _context8.next = 23;
                  break;
                }
                return _context8.abrupt("return", (De($e), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), {
                  accessToken: a.data.access_token,
                  accessTokenExpire: a.data.access_token_expire
                }));
              case 23:
                a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());
              case 24:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));
      function _refreshAccessToken() {
        return _refreshAccessToken3.apply(this, arguments);
      }
      return _refreshAccessToken;
    }()
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9() {
        var _this$_cache$keys2, e, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;
                if (this._cache.getStore(n)) {
                  _context9.next = 3;
                  break;
                }
                throw new te({
                  message: "refresh token不存在，登录状态异常"
                });
              case 3:
                s = this._cache.getStore(e), r = this._cache.getStore(t), i = !0;
                _context9.t0 = this._shouldRefreshAccessTokenHook;
                if (!_context9.t0) {
                  _context9.next = 9;
                  break;
                }
                _context9.next = 8;
                return this._shouldRefreshAccessTokenHook(s, r);
              case 8:
                _context9.t0 = !_context9.sent;
              case 9:
                _context9.t1 = _context9.t0;
                if (!_context9.t1) {
                  _context9.next = 12;
                  break;
                }
                i = !1;
              case 12:
                return _context9.abrupt("return", (!s || !r || r < Date.now()) && i ? this.refreshAccessToken() : {
                  accessToken: s,
                  accessTokenExpire: r
                });
              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));
      function getAccessToken() {
        return _getAccessToken.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(e, t, n) {
        var s, r, i, _e12, o, _e13, _e14, a, c, u, h, l, d, p, f, g;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                s = "x-tcb-trace_".concat(this.config.env);
                r = "application/x-www-form-urlencoded";
                i = _objectSpread({
                  action: e,
                  env: this.config.env,
                  dataVersion: "2019-08-16"
                }, t);
                if (!(-1 === We.indexOf(e))) {
                  _context10.next = 10;
                  break;
                }
                _e12 = this._cache.keys.refreshTokenKey;
                _context10.t0 = this._cache.getStore(_e12);
                if (!_context10.t0) {
                  _context10.next = 10;
                  break;
                }
                _context10.next = 9;
                return this.getAccessToken();
              case 9:
                i.access_token = _context10.sent.accessToken;
              case 10:
                if ("storage.uploadFile" === e) {
                  o = new FormData();
                  for (_e13 in o) {
                    o.hasOwnProperty(_e13) && void 0 !== o[_e13] && o.append(_e13, i[_e13]);
                  }
                  r = "multipart/form-data";
                } else {
                  r = "application/json", o = {};
                  for (_e14 in i) {
                    void 0 !== i[_e14] && (o[_e14] = i[_e14]);
                  }
                }
                a = {
                  headers: {
                    "content-type": r
                  }
                };
                n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);
                c = this._localCache.getStore(s);
                c && (a.headers["X-TCB-Trace"] = c);
                u = t.parse, h = t.inQuery, l = t.search;
                d = {
                  env: this.config.env
                };
                u && (d.parse = !0), h && (d = _objectSpread(_objectSpread({}, h), d));
                p = function (e, t) {
                  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                  var s = /\?/.test(t);
                  var r = "";
                  for (var _e15 in n) {
                    "" === r ? !s && (t += "?") : r += "&", r += "".concat(_e15, "=").concat(encodeURIComponent(n[_e15]));
                  }
                  return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);
                }(pe, "//tcb-api.tencentcloudapi.com/web", d);
                l && (p += l);
                _context10.next = 22;
                return this.post(_objectSpread({
                  url: p,
                  data: o
                }, a));
              case 22:
                f = _context10.sent;
                g = f.header && f.header["x-tcb-trace"];
                if (!(g && this._localCache.setStore(s, g), 200 !== Number(f.status) && 200 !== Number(f.statusCode) || !f.data)) {
                  _context10.next = 26;
                  break;
                }
                throw new te({
                  code: "NETWORK_ERROR",
                  message: "network request error"
                });
              case 26:
                return _context10.abrupt("return", f);
              case 27:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));
      function request(_x5, _x6, _x7) {
        return _request.apply(this, arguments);
      }
      return request;
    }()
  }, {
    key: "send",
    value: function () {
      var _send = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {
        var t,
          n,
          _n7,
          _args11 = arguments;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                t = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : {};
                _context11.next = 3;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });
              case 3:
                n = _context11.sent;
                if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === We.indexOf(e))) {
                  _context11.next = 13;
                  break;
                }
                _context11.next = 7;
                return this.refreshAccessToken();
              case 7:
                _context11.next = 9;
                return this.request(e, t, {
                  onUploadProgress: t.onUploadProgress
                });
              case 9:
                _n7 = _context11.sent;
                if (!_n7.data.code) {
                  _context11.next = 12;
                  break;
                }
                throw new te({
                  code: _n7.data.code,
                  message: _n7.data.message
                });
              case 12:
                return _context11.abrupt("return", _n7.data);
              case 13:
                if (!n.data.code) {
                  _context11.next = 15;
                  break;
                }
                throw new te({
                  code: n.data.code,
                  message: n.data.message
                });
              case 15:
                return _context11.abrupt("return", n.data);
              case 16:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));
      function send(_x8) {
        return _send.apply(this, arguments);
      }
      return send;
    }()
  }, {
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys3 = this._cache.keys,
        t = _this$_cache$keys3.accessTokenKey,
        n = _this$_cache$keys3.accessTokenExpireKey,
        s = _this$_cache$keys3.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }]);
  return Ge;
}();
var Ve = {};
function Ye(e) {
  return Ve[e];
}
var Qe = /*#__PURE__*/function () {
  function Qe(e) {
    (0, _classCallCheck2.default)(this, Qe);
    this.config = e, this._cache = Ee(e.env), this._request = Ye(e.env);
  }
  (0, _createClass2.default)(Qe, [{
    key: "setRefreshToken",
    value: function setRefreshToken(e) {
      var _this$_cache$keys4 = this._cache.keys,
        t = _this$_cache$keys4.accessTokenKey,
        n = _this$_cache$keys4.accessTokenExpireKey,
        s = _this$_cache$keys4.refreshTokenKey;
      this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);
    }
  }, {
    key: "setAccessToken",
    value: function setAccessToken(e, t) {
      var _this$_cache$keys5 = this._cache.keys,
        n = _this$_cache$keys5.accessTokenKey,
        s = _this$_cache$keys5.accessTokenExpireKey;
      this._cache.setStore(n, e), this._cache.setStore(s, t);
    }
  }, {
    key: "refreshUserInfo",
    value: function () {
      var _refreshUserInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var _yield$this$_request$, e;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$ = _context12.sent;
                e = _yield$this$_request$.data;
                return _context12.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));
      function refreshUserInfo() {
        return _refreshUserInfo.apply(this, arguments);
      }
      return refreshUserInfo;
    }()
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e);
    }
  }]);
  return Qe;
}();
var Xe = /*#__PURE__*/function () {
  function Xe(e) {
    (0, _classCallCheck2.default)(this, Xe);
    if (!e) throw new te({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._envId = e, this._cache = Ee(this._envId), this._request = Ye(this._envId), this.setUserInfo();
  }
  (0, _createClass2.default)(Xe, [{
    key: "linkWithTicket",
    value: function linkWithTicket(e) {
      if ("string" != typeof e) throw new te({
        code: "PARAM_ERROR",
        message: "ticket must be string"
      });
      return this._request.send("auth.linkWithTicket", {
        ticket: e
      });
    }
  }, {
    key: "linkWithRedirect",
    value: function linkWithRedirect(e) {
      e.signInWithRedirect();
    }
  }, {
    key: "updatePassword",
    value: function updatePassword(e, t) {
      return this._request.send("auth.updatePassword", {
        oldPassword: t,
        newPassword: e
      });
    }
  }, {
    key: "updateEmail",
    value: function updateEmail(e) {
      return this._request.send("auth.updateEmail", {
        newEmail: e
      });
    }
  }, {
    key: "updateUsername",
    value: function updateUsername(e) {
      if ("string" != typeof e) throw new te({
        code: "PARAM_ERROR",
        message: "username must be a string"
      });
      return this._request.send("auth.updateUsername", {
        username: e
      });
    }
  }, {
    key: "getLinkedUidList",
    value: function () {
      var _getLinkedUidList = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {
        var _yield$this$_request$2, e, t, n;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this._request.send("auth.getLinkedUidList", {});
              case 2:
                _yield$this$_request$2 = _context13.sent;
                e = _yield$this$_request$2.data;
                t = !1;
                n = e.users;
                return _context13.abrupt("return", (n.forEach(function (e) {
                  e.wxOpenId && e.wxPublicId && (t = !0);
                }), {
                  users: n,
                  hasPrimaryUid: t
                }));
              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));
      function getLinkedUidList() {
        return _getLinkedUidList.apply(this, arguments);
      }
      return getLinkedUidList;
    }()
  }, {
    key: "setPrimaryUid",
    value: function setPrimaryUid(e) {
      return this._request.send("auth.setPrimaryUid", {
        uid: e
      });
    }
  }, {
    key: "unlink",
    value: function unlink(e) {
      return this._request.send("auth.unlink", {
        platform: e
      });
    }
  }, {
    key: "update",
    value: function () {
      var _update = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {
        var t, n, s, r, i, o, _yield$this$_request$3, a;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                t = e.nickName;
                n = e.gender;
                s = e.avatarUrl;
                r = e.province;
                i = e.country;
                o = e.city;
                _context14.next = 8;
                return this._request.send("auth.updateUserInfo", {
                  nickName: t,
                  gender: n,
                  avatarUrl: s,
                  province: r,
                  country: i,
                  city: o
                });
              case 8:
                _yield$this$_request$3 = _context14.sent;
                a = _yield$this$_request$3.data;
                this.setLocalUserInfo(a);
              case 11:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));
      function update(_x9) {
        return _update.apply(this, arguments);
      }
      return update;
    }()
  }, {
    key: "refresh",
    value: function () {
      var _refresh = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15() {
        var _yield$this$_request$4, e;
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this._request.send("auth.getUserInfo", {});
              case 2:
                _yield$this$_request$4 = _context15.sent;
                e = _yield$this$_request$4.data;
                return _context15.abrupt("return", (this.setLocalUserInfo(e), e));
              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));
      function refresh() {
        return _refresh.apply(this, arguments);
      }
      return refresh;
    }()
  }, {
    key: "setUserInfo",
    value: function setUserInfo() {
      var _this8 = this;
      var e = this._cache.keys.userInfoKey,
        t = this._cache.getStore(e);
      ["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {
        _this8[e] = t[e];
      }), this.location = {
        country: t.country,
        province: t.province,
        city: t.city
      };
    }
  }, {
    key: "setLocalUserInfo",
    value: function setLocalUserInfo(e) {
      var t = this._cache.keys.userInfoKey;
      this._cache.setStore(t, e), this.setUserInfo();
    }
  }]);
  return Xe;
}();
var Ze = /*#__PURE__*/function () {
  function Ze(e) {
    (0, _classCallCheck2.default)(this, Ze);
    if (!e) throw new te({
      code: "PARAM_ERROR",
      message: "envId is not defined"
    });
    this._cache = Ee(e);
    var _this$_cache$keys6 = this._cache.keys,
      t = _this$_cache$keys6.refreshTokenKey,
      n = _this$_cache$keys6.accessTokenKey,
      s = _this$_cache$keys6.accessTokenExpireKey,
      r = this._cache.getStore(t),
      i = this._cache.getStore(n),
      o = this._cache.getStore(s);
    this.credential = {
      refreshToken: r,
      accessToken: i,
      accessTokenExpire: o
    }, this.user = new Xe(e);
  }
  (0, _createClass2.default)(Ze, [{
    key: "isAnonymousAuth",
    get: function get() {
      return this.loginType === Be.ANONYMOUS;
    }
  }, {
    key: "isCustomAuth",
    get: function get() {
      return this.loginType === Be.CUSTOM;
    }
  }, {
    key: "isWeixinAuth",
    get: function get() {
      return this.loginType === Be.WECHAT || this.loginType === Be.WECHAT_OPEN || this.loginType === Be.WECHAT_PUBLIC;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }]);
  return Ze;
}();
var et = /*#__PURE__*/function (_Qe) {
  (0, _inherits2.default)(et, _Qe);
  var _super4 = _createSuper(et);
  function et() {
    (0, _classCallCheck2.default)(this, et);
    return _super4.apply(this, arguments);
  }
  (0, _createClass2.default)(et, [{
    key: "signIn",
    value: function () {
      var _signIn = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16() {
        var _this$_cache$keys7, e, t, n, s, r, _e16;
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                this._cache.updatePersistence("local");
                _this$_cache$keys7 = this._cache.keys;
                e = _this$_cache$keys7.anonymousUuidKey;
                t = _this$_cache$keys7.refreshTokenKey;
                n = this._cache.getStore(e) || void 0;
                s = this._cache.getStore(t) || void 0;
                _context16.next = 8;
                return this._request.send("auth.signInAnonymously", {
                  anonymous_uuid: n,
                  refresh_token: s
                });
              case 8:
                r = _context16.sent;
                if (!(r.uuid && r.refresh_token)) {
                  _context16.next = 20;
                  break;
                }
                this._setAnonymousUUID(r.uuid);
                this.setRefreshToken(r.refresh_token);
                _context16.next = 14;
                return this._request.refreshAccessToken();
              case 14:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.ANONYMOUS,
                  persistence: "local"
                });
                _e16 = new Ze(this.config.env);
                _context16.next = 19;
                return _e16.user.refresh();
              case 19:
                return _context16.abrupt("return", _e16);
              case 20:
                throw new te({
                  message: "匿名登录失败"
                });
              case 21:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));
      function signIn() {
        return _signIn.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {
        var _this$_cache$keys8, t, n, s, r, i;
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _this$_cache$keys8 = this._cache.keys;
                t = _this$_cache$keys8.anonymousUuidKey;
                n = _this$_cache$keys8.refreshTokenKey;
                s = this._cache.getStore(t);
                r = this._cache.getStore(n);
                _context17.next = 7;
                return this._request.send("auth.linkAndRetrieveDataWithTicket", {
                  anonymous_uuid: s,
                  refresh_token: r,
                  ticket: e
                });
              case 7:
                i = _context17.sent;
                if (!i.refresh_token) {
                  _context17.next = 16;
                  break;
                }
                this._clearAnonymousUUID();
                this.setRefreshToken(i.refresh_token);
                _context17.next = 13;
                return this._request.refreshAccessToken();
              case 13:
                De(je, {
                  env: this.config.env
                });
                De(Ke, {
                  loginType: Be.CUSTOM,
                  persistence: "local"
                });
                return _context17.abrupt("return", {
                  credential: {
                    refreshToken: i.refresh_token
                  }
                });
              case 16:
                throw new te({
                  message: "匿名转化失败"
                });
              case 17:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));
      function linkAndRetrieveDataWithTicket(_x10) {
        return _linkAndRetrieveDataWithTicket.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "_setAnonymousUUID",
    value: function _setAnonymousUUID(e) {
      var _this$_cache$keys9 = this._cache.keys,
        t = _this$_cache$keys9.anonymousUuidKey,
        n = _this$_cache$keys9.loginTypeKey;
      this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, Be.ANONYMOUS);
    }
  }, {
    key: "_clearAnonymousUUID",
    value: function _clearAnonymousUUID() {
      this._cache.removeStore(this._cache.keys.anonymousUuidKey);
    }
  }]);
  return et;
}(Qe);
var tt = /*#__PURE__*/function (_Qe2) {
  (0, _inherits2.default)(tt, _Qe2);
  var _super5 = _createSuper(tt);
  function tt() {
    (0, _classCallCheck2.default)(this, tt);
    return _super5.apply(this, arguments);
  }
  (0, _createClass2.default)(tt, [{
    key: "signIn",
    value: function () {
      var _signIn2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18(e) {
        var t, n;
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context18.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "ticket must be a string"
                });
              case 2:
                t = this._cache.keys.refreshTokenKey;
                _context18.next = 5;
                return this._request.send("auth.signInWithTicket", {
                  ticket: e,
                  refresh_token: this._cache.getStore(t) || ""
                });
              case 5:
                n = _context18.sent;
                if (!n.refresh_token) {
                  _context18.next = 15;
                  break;
                }
                this.setRefreshToken(n.refresh_token);
                _context18.next = 10;
                return this._request.refreshAccessToken();
              case 10:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.CUSTOM,
                  persistence: this.config.persistence
                });
                _context18.next = 14;
                return this.refreshUserInfo();
              case 14:
                return _context18.abrupt("return", new Ze(this.config.env));
              case 15:
                throw new te({
                  message: "自定义登录失败"
                });
              case 16:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));
      function signIn(_x11) {
        return _signIn2.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return tt;
}(Qe);
var nt = /*#__PURE__*/function (_Qe3) {
  (0, _inherits2.default)(nt, _Qe3);
  var _super6 = _createSuper(nt);
  function nt() {
    (0, _classCallCheck2.default)(this, nt);
    return _super6.apply(this, arguments);
  }
  (0, _createClass2.default)(nt, [{
    key: "signIn",
    value: function () {
      var _signIn3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context19.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "email must be a string"
                });
              case 2:
                n = this._cache.keys.refreshTokenKey;
                _context19.next = 5;
                return this._request.send("auth.signIn", {
                  loginType: "EMAIL",
                  email: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 5:
                s = _context19.sent;
                r = s.refresh_token;
                i = s.access_token;
                o = s.access_token_expire;
                if (!r) {
                  _context19.next = 22;
                  break;
                }
                this.setRefreshToken(r);
                if (!(i && o)) {
                  _context19.next = 15;
                  break;
                }
                this.setAccessToken(i, o);
                _context19.next = 17;
                break;
              case 15:
                _context19.next = 17;
                return this._request.refreshAccessToken();
              case 17:
                _context19.next = 19;
                return this.refreshUserInfo();
              case 19:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.EMAIL,
                  persistence: this.config.persistence
                });
                return _context19.abrupt("return", new Ze(this.config.env));
              case 22:
                throw s.code ? new te({
                  code: s.code,
                  message: "\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new te({
                  message: "邮箱登录失败"
                });
              case 23:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));
      function signIn(_x12, _x13) {
        return _signIn3.apply(this, arguments);
      }
      return signIn;
    }()
  }, {
    key: "activate",
    value: function () {
      var _activate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee20(e) {
        return _regenerator.default.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                return _context20.abrupt("return", this._request.send("auth.activateEndUserMail", {
                  token: e
                }));
              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));
      function activate(_x14) {
        return _activate.apply(this, arguments);
      }
      return activate;
    }()
  }, {
    key: "resetPasswordWithToken",
    value: function () {
      var _resetPasswordWithToken = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {
        return _regenerator.default.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", this._request.send("auth.resetPasswordWithToken", {
                  token: e,
                  newPassword: t
                }));
              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));
      function resetPasswordWithToken(_x15, _x16) {
        return _resetPasswordWithToken.apply(this, arguments);
      }
      return resetPasswordWithToken;
    }()
  }]);
  return nt;
}(Qe);
var st = /*#__PURE__*/function (_Qe4) {
  (0, _inherits2.default)(st, _Qe4);
  var _super7 = _createSuper(st);
  function st() {
    (0, _classCallCheck2.default)(this, st);
    return _super7.apply(this, arguments);
  }
  (0, _createClass2.default)(st, [{
    key: "signIn",
    value: function () {
      var _signIn4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee22(e, t) {
        var n, s, r, i, o;
        return _regenerator.default.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context22.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                "string" != typeof t && (t = "", console.warn("password is empty"));
                n = this._cache.keys.refreshTokenKey;
                _context22.next = 6;
                return this._request.send("auth.signIn", {
                  loginType: Be.USERNAME,
                  username: e,
                  password: t,
                  refresh_token: this._cache.getStore(n) || ""
                });
              case 6:
                s = _context22.sent;
                r = s.refresh_token;
                i = s.access_token_expire;
                o = s.access_token;
                if (!r) {
                  _context22.next = 23;
                  break;
                }
                this.setRefreshToken(r);
                if (!(o && i)) {
                  _context22.next = 16;
                  break;
                }
                this.setAccessToken(o, i);
                _context22.next = 18;
                break;
              case 16:
                _context22.next = 18;
                return this._request.refreshAccessToken();
              case 18:
                _context22.next = 20;
                return this.refreshUserInfo();
              case 20:
                De(qe);
                De(Ke, {
                  env: this.config.env,
                  loginType: Be.USERNAME,
                  persistence: this.config.persistence
                });
                return _context22.abrupt("return", new Ze(this.config.env));
              case 23:
                throw s.code ? new te({
                  code: s.code,
                  message: "\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: ".concat(s.message)
                }) : new te({
                  message: "用户名密码登录失败"
                });
              case 24:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));
      function signIn(_x17, _x18) {
        return _signIn4.apply(this, arguments);
      }
      return signIn;
    }()
  }]);
  return st;
}(Qe);
var rt = /*#__PURE__*/function () {
  function rt(e) {
    (0, _classCallCheck2.default)(this, rt);
    this.config = e, this._cache = Ee(e.env), this._request = Ye(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), Ne(Ke, this._onLoginTypeChanged);
  }
  (0, _createClass2.default)(rt, [{
    key: "currentUser",
    get: function get() {
      var e = this.hasLoginState();
      return e && e.user || null;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._cache.getStore(this._cache.keys.loginTypeKey);
    }
  }, {
    key: "anonymousAuthProvider",
    value: function anonymousAuthProvider() {
      return new et(this.config);
    }
  }, {
    key: "customAuthProvider",
    value: function customAuthProvider() {
      return new tt(this.config);
    }
  }, {
    key: "emailAuthProvider",
    value: function emailAuthProvider() {
      return new nt(this.config);
    }
  }, {
    key: "usernameAuthProvider",
    value: function usernameAuthProvider() {
      return new st(this.config);
    }
  }, {
    key: "signInAnonymously",
    value: function () {
      var _signInAnonymously = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee23() {
        return _regenerator.default.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                return _context23.abrupt("return", new et(this.config).signIn());
              case 1:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));
      function signInAnonymously() {
        return _signInAnonymously.apply(this, arguments);
      }
      return signInAnonymously;
    }()
  }, {
    key: "signInWithEmailAndPassword",
    value: function () {
      var _signInWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {
        return _regenerator.default.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                return _context24.abrupt("return", new nt(this.config).signIn(e, t));
              case 1:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));
      function signInWithEmailAndPassword(_x19, _x20) {
        return _signInWithEmailAndPassword.apply(this, arguments);
      }
      return signInWithEmailAndPassword;
    }()
  }, {
    key: "signInWithUsernameAndPassword",
    value: function signInWithUsernameAndPassword(e, t) {
      return new st(this.config).signIn(e, t);
    }
  }, {
    key: "linkAndRetrieveDataWithTicket",
    value: function () {
      var _linkAndRetrieveDataWithTicket2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {
        return _regenerator.default.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                this._anonymousAuthProvider || (this._anonymousAuthProvider = new et(this.config)), Ne(je, this._onAnonymousConverted);
                _context25.next = 3;
                return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);
              case 3:
                return _context25.abrupt("return", _context25.sent);
              case 4:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));
      function linkAndRetrieveDataWithTicket(_x21) {
        return _linkAndRetrieveDataWithTicket2.apply(this, arguments);
      }
      return linkAndRetrieveDataWithTicket;
    }()
  }, {
    key: "signOut",
    value: function () {
      var _signOut = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee26() {
        var _this$_cache$keys10, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                if (!(this.loginType === Be.ANONYMOUS)) {
                  _context26.next = 2;
                  break;
                }
                throw new te({
                  message: "匿名用户不支持登出操作"
                });
              case 2:
                _this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);
                if (s) {
                  _context26.next = 5;
                  break;
                }
                return _context26.abrupt("return");
              case 5:
                _context26.next = 7;
                return this._request.send("auth.logout", {
                  refresh_token: s
                });
              case 7:
                r = _context26.sent;
                return _context26.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), De(qe), De(Ke, {
                  env: this.config.env,
                  loginType: Be.NULL,
                  persistence: this.config.persistence
                }), r));
              case 9:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));
      function signOut() {
        return _signOut.apply(this, arguments);
      }
      return signOut;
    }()
  }, {
    key: "signUpWithEmailAndPassword",
    value: function () {
      var _signUpWithEmailAndPassword = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee27(e, t) {
        return _regenerator.default.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                return _context27.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", {
                  email: e,
                  password: t
                }));
              case 1:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));
      function signUpWithEmailAndPassword(_x22, _x23) {
        return _signUpWithEmailAndPassword.apply(this, arguments);
      }
      return signUpWithEmailAndPassword;
    }()
  }, {
    key: "sendPasswordResetEmail",
    value: function () {
      var _sendPasswordResetEmail = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {
        return _regenerator.default.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                return _context28.abrupt("return", this._request.send("auth.sendPasswordResetEmail", {
                  email: e
                }));
              case 1:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));
      function sendPasswordResetEmail(_x24) {
        return _sendPasswordResetEmail.apply(this, arguments);
      }
      return sendPasswordResetEmail;
    }()
  }, {
    key: "onLoginStateChanged",
    value: function onLoginStateChanged(e) {
      var _this9 = this;
      Ne(qe, function () {
        var t = _this9.hasLoginState();
        e.call(_this9, t);
      });
      var t = this.hasLoginState();
      e.call(this, t);
    }
  }, {
    key: "onLoginStateExpired",
    value: function onLoginStateExpired(e) {
      Ne(Fe, e.bind(this));
    }
  }, {
    key: "onAccessTokenRefreshed",
    value: function onAccessTokenRefreshed(e) {
      Ne($e, e.bind(this));
    }
  }, {
    key: "onAnonymousConverted",
    value: function onAnonymousConverted(e) {
      Ne(je, e.bind(this));
    }
  }, {
    key: "onLoginTypeChanged",
    value: function onLoginTypeChanged(e) {
      var _this10 = this;
      Ne(Ke, function () {
        var t = _this10.hasLoginState();
        e.call(_this10, t);
      });
    }
  }, {
    key: "getAccessToken",
    value: function () {
      var _getAccessToken2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee29() {
        return _regenerator.default.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.next = 2;
                return this._request.getAccessToken();
              case 2:
                _context29.t0 = _context29.sent.accessToken;
                _context29.t1 = this.config.env;
                return _context29.abrupt("return", {
                  accessToken: _context29.t0,
                  env: _context29.t1
                });
              case 5:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));
      function getAccessToken() {
        return _getAccessToken2.apply(this, arguments);
      }
      return getAccessToken;
    }()
  }, {
    key: "hasLoginState",
    value: function hasLoginState() {
      var e = this._cache.keys.refreshTokenKey;
      return this._cache.getStore(e) ? new Ze(this.config.env) : null;
    }
  }, {
    key: "isUsernameRegistered",
    value: function () {
      var _isUsernameRegistered = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee30(e) {
        var _yield$this$_request$5, t;
        return _regenerator.default.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                if (!("string" != typeof e)) {
                  _context30.next = 2;
                  break;
                }
                throw new te({
                  code: "PARAM_ERROR",
                  message: "username must be a string"
                });
              case 2:
                _context30.next = 4;
                return this._request.send("auth.isUsernameRegistered", {
                  username: e
                });
              case 4:
                _yield$this$_request$5 = _context30.sent;
                t = _yield$this$_request$5.data;
                return _context30.abrupt("return", t && t.isRegistered);
              case 7:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));
      function isUsernameRegistered(_x25) {
        return _isUsernameRegistered.apply(this, arguments);
      }
      return isUsernameRegistered;
    }()
  }, {
    key: "getLoginState",
    value: function getLoginState() {
      return Promise.resolve(this.hasLoginState());
    }
  }, {
    key: "signInWithTicket",
    value: function () {
      var _signInWithTicket = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee31(e) {
        return _regenerator.default.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                return _context31.abrupt("return", new tt(this.config).signIn(e));
              case 1:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));
      function signInWithTicket(_x26) {
        return _signInWithTicket.apply(this, arguments);
      }
      return signInWithTicket;
    }()
  }, {
    key: "shouldRefreshAccessToken",
    value: function shouldRefreshAccessToken(e) {
      this._request._shouldRefreshAccessTokenHook = e.bind(this);
    }
  }, {
    key: "getUserInfo",
    value: function getUserInfo() {
      return this._request.send("auth.getUserInfo", {}).then(function (e) {
        return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, {
          requestId: e.seqId
        });
      });
    }
  }, {
    key: "getAuthHeader",
    value: function getAuthHeader() {
      var _this$_cache$keys11 = this._cache.keys,
        e = _this$_cache$keys11.refreshTokenKey,
        t = _this$_cache$keys11.accessTokenKey,
        n = this._cache.getStore(e);
      return {
        "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n
      };
    }
  }, {
    key: "_onAnonymousConverted",
    value: function _onAnonymousConverted(e) {
      var t = e.data.env;
      t === this.config.env && this._cache.updatePersistence(this.config.persistence);
    }
  }, {
    key: "_onLoginTypeChanged",
    value: function _onLoginTypeChanged(e) {
      var _e$data = e.data,
        t = _e$data.loginType,
        n = _e$data.persistence,
        s = _e$data.env;
      s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));
    }
  }]);
  return rt;
}();
var it = function it(e, t) {
    t = t || we();
    var n = Ye(this.config.env),
      s = e.cloudPath,
      r = e.filePath,
      i = e.onUploadProgress,
      _e$fileType = e.fileType,
      o = _e$fileType === void 0 ? "image" : _e$fileType;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      var _e$data2 = e.data,
        a = _e$data2.url,
        c = _e$data2.authorization,
        u = _e$data2.token,
        h = _e$data2.fileId,
        l = _e$data2.cosFileId,
        d = e.requestId,
        p = {
          key: s,
          signature: c,
          "x-cos-meta-fileid": l,
          success_action_status: "201",
          "x-cos-security-token": u
        };
      n.upload({
        url: a,
        data: p,
        file: r,
        name: s,
        fileType: o,
        onUploadProgress: i
      }).then(function (e) {
        201 === e.statusCode ? t(null, {
          fileID: h,
          requestId: d
        }) : t(new te({
          code: "STORAGE_REQUEST_FAIL",
          message: "STORAGE_REQUEST_FAIL: ".concat(e.data)
        }));
      }).catch(function (e) {
        t(e);
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ot = function ot(e, t) {
    t = t || we();
    var n = Ye(this.config.env),
      s = e.cloudPath;
    return n.send("storage.getUploadMetadata", {
      path: s
    }).then(function (e) {
      t(null, e);
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  at = function at(_ref7, t) {
    var e = _ref7.fileList;
    if (t = t || we(), !e || !Array.isArray(e)) return {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    };
    var _iterator3 = _createForOfIteratorHelper(e),
      _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _t8 = _step3.value;
        if (!_t8 || "string" != typeof _t8) return {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是非空的字符串"
        };
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    var n = {
      fileid_list: e
    };
    return Ye(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.delete_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ct = function ct(_ref8, t) {
    var e = _ref8.fileList;
    t = t || we(), e && Array.isArray(e) || t(null, {
      code: "INVALID_PARAM",
      message: "fileList必须是非空的数组"
    });
    var n = [];
    var _iterator4 = _createForOfIteratorHelper(e),
      _step4;
    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _s9 = _step4.value;
        "object" == (0, _typeof2.default)(_s9) ? (_s9.hasOwnProperty("fileID") && _s9.hasOwnProperty("maxAge") || t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是包含fileID和maxAge的对象"
        }), n.push({
          fileid: _s9.fileID,
          max_age: _s9.maxAge
        })) : "string" == typeof _s9 ? n.push({
          fileid: _s9
        }) : t(null, {
          code: "INVALID_PARAM",
          message: "fileList的元素必须是字符串"
        });
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
    var s = {
      file_list: n
    };
    return Ye(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {
      e.code ? t(null, e) : t(null, {
        fileList: e.data.download_list,
        requestId: e.requestId
      });
    }).catch(function (e) {
      t(e);
    }), t.promise;
  },
  ut = /*#__PURE__*/function () {
    var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee32(_ref9, t) {
      var e, n, s, r;
      return _regenerator.default.wrap(function _callee32$(_context32) {
        while (1) {
          switch (_context32.prev = _context32.next) {
            case 0:
              e = _ref9.fileID;
              _context32.next = 3;
              return ct.call(this, {
                fileList: [{
                  fileID: e,
                  maxAge: 600
                }]
              });
            case 3:
              n = _context32.sent.fileList[0];
              if (!("SUCCESS" !== n.code)) {
                _context32.next = 6;
                break;
              }
              return _context32.abrupt("return", t ? t(n) : new Promise(function (e) {
                e(n);
              }));
            case 6:
              s = Ye(this.config.env);
              r = n.download_url;
              if (!(r = encodeURI(r), !t)) {
                _context32.next = 10;
                break;
              }
              return _context32.abrupt("return", s.download({
                url: r
              }));
            case 10:
              _context32.t0 = t;
              _context32.next = 13;
              return s.download({
                url: r
              });
            case 13:
              _context32.t1 = _context32.sent;
              (0, _context32.t0)(_context32.t1);
            case 15:
            case "end":
              return _context32.stop();
          }
        }
      }, _callee32, this);
    }));
    return function ut(_x27, _x28) {
      return _ref10.apply(this, arguments);
    };
  }(),
  ht = function ht(_ref11, i) {
    var e = _ref11.name,
      t = _ref11.data,
      n = _ref11.query,
      s = _ref11.parse,
      r = _ref11.search;
    var o = i || we();
    var a;
    try {
      a = t ? JSON.stringify(t) : "";
    } catch (e) {
      return Promise.reject(e);
    }
    if (!e) return Promise.reject(new te({
      code: "PARAM_ERROR",
      message: "函数名不能为空"
    }));
    var c = {
      inQuery: n,
      parse: s,
      search: r,
      function_name: e,
      request_data: a
    };
    return Ye(this.config.env).send("functions.invokeFunction", c).then(function (e) {
      if (e.code) o(null, e);else {
        var _t9 = e.data.response_data;
        if (s) o(null, {
          result: _t9,
          requestId: e.requestId
        });else try {
          _t9 = JSON.parse(e.data.response_data), o(null, {
            result: _t9,
            requestId: e.requestId
          });
        } catch (e) {
          o(new te({
            message: "response data must be json"
          }));
        }
      }
      return o.promise;
    }).catch(function (e) {
      o(e);
    }), o.promise;
  },
  lt = {
    timeout: 15e3,
    persistence: "session"
  },
  dt = {};
var pt = /*#__PURE__*/function () {
  function pt(e) {
    (0, _classCallCheck2.default)(this, pt);
    this.config = e || this.config, this.authObj = void 0;
  }
  (0, _createClass2.default)(pt, [{
    key: "init",
    value: function init(e) {
      switch (ke.adapter || (this.requestClient = new ke.adapter.reqClass({
        timeout: e.timeout || 5e3,
        timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD")
      })), this.config = _objectSpread(_objectSpread({}, lt), e), !0) {
        case this.config.timeout > 6e5:
          console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;
          break;
        case this.config.timeout < 100:
          console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;
      }
      return new pt(this.config);
    }
  }, {
    key: "auth",
    value: function auth() {
      var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref12.persistence;
      if (this.authObj) return this.authObj;
      var t = e || ke.adapter.primaryStorage || lt.persistence;
      var n;
      return t !== this.config.persistence && (this.config.persistence = t), function (e) {
        var t = e.env;
        xe[t] = new Ce(e), Oe[t] = new Ce(_objectSpread(_objectSpread({}, e), {}, {
          persistence: "local"
        }));
      }(this.config), n = this.config, Ve[n.env] = new Ge(n), this.authObj = new rt(this.config), this.authObj;
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return Ne.apply(this, [e, t]);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return Me.apply(this, [e, t]);
    }
  }, {
    key: "callFunction",
    value: function callFunction(e, t) {
      return ht.apply(this, [e, t]);
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(e, t) {
      return at.apply(this, [e, t]);
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL(e, t) {
      return ct.apply(this, [e, t]);
    }
  }, {
    key: "downloadFile",
    value: function downloadFile(e, t) {
      return ut.apply(this, [e, t]);
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(e, t) {
      return it.apply(this, [e, t]);
    }
  }, {
    key: "getUploadMetadata",
    value: function getUploadMetadata(e, t) {
      return ot.apply(this, [e, t]);
    }
  }, {
    key: "registerExtension",
    value: function registerExtension(e) {
      dt[e.name] = e;
    }
  }, {
    key: "invokeExtension",
    value: function () {
      var _invokeExtension = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee33(e, t) {
        var n;
        return _regenerator.default.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                n = dt[e];
                if (n) {
                  _context33.next = 3;
                  break;
                }
                throw new te({
                  message: "\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C")
                });
              case 3:
                _context33.next = 5;
                return n.invoke(t, this);
              case 5:
                return _context33.abrupt("return", _context33.sent);
              case 6:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));
      function invokeExtension(_x29, _x30) {
        return _invokeExtension.apply(this, arguments);
      }
      return invokeExtension;
    }()
  }, {
    key: "useAdapters",
    value: function useAdapters(e) {
      var _ref13 = be(e) || {},
        t = _ref13.adapter,
        n = _ref13.runtime;
      t && (ke.adapter = t), n && (ke.runtime = n);
    }
  }]);
  return pt;
}();
var ft = new pt();
function gt(e, t, n) {
  void 0 === n && (n = {});
  var s = /\?/.test(t),
    r = "";
  for (var i in n) {
    "" === r ? !s && (t += "?") : r += "&", r += i + "=" + encodeURIComponent(n[i]);
  }
  return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;
}
var mt = /*#__PURE__*/function () {
  function mt() {
    (0, _classCallCheck2.default)(this, mt);
  }
  (0, _createClass2.default)(mt, [{
    key: "post",
    value: function post(e) {
      var t = e.url,
        n = e.data,
        s = e.headers;
      return new Promise(function (e, r) {
        ne.request({
          url: gt("https:", t),
          data: n,
          method: "POST",
          header: s,
          success: function success(t) {
            e(t);
          },
          fail: function fail(e) {
            r(e);
          }
        });
      });
    }
  }, {
    key: "upload",
    value: function upload(e) {
      return new Promise(function (t, n) {
        var s = e.url,
          r = e.file,
          i = e.data,
          o = e.headers,
          a = e.fileType,
          c = ne.uploadFile({
            url: gt("https:", s),
            name: "file",
            formData: Object.assign({}, i),
            filePath: r,
            fileType: a,
            header: o,
            success: function success(e) {
              var n = {
                statusCode: e.statusCode,
                data: e.data || {}
              };
              200 === e.statusCode && i.success_action_status && (n.statusCode = parseInt(i.success_action_status, 10)), t(n);
            },
            fail: function fail(e) {
              n(new Error(e.errMsg || "uploadFile:fail"));
            }
          });
        "function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {
          e.onUploadProgress({
            loaded: t.totalBytesSent,
            total: t.totalBytesExpectedToSend
          });
        });
      });
    }
  }]);
  return mt;
}();
var yt = {
  setItem: function setItem(e, t) {
    ne.setStorageSync(e, t);
  },
  getItem: function getItem(e) {
    return ne.getStorageSync(e);
  },
  removeItem: function removeItem(e) {
    ne.removeStorageSync(e);
  },
  clear: function clear() {
    ne.clearStorageSync();
  }
};
var _t = {
  genAdapter: function genAdapter() {
    return {
      root: {},
      reqClass: mt,
      localStorage: yt,
      primaryStorage: "local"
    };
  },
  isMatch: function isMatch() {
    return !0;
  },
  runtime: "uni_app"
};
ft.useAdapters(_t);
var wt = ft,
  vt = wt.init;
wt.init = function (e) {
  e.env = e.spaceId;
  var t = vt.call(this, e);
  t.config.provider = "tencent", t.config.spaceId = e.spaceId;
  var n = t.auth;
  return t.auth = function (e) {
    var t = n.call(this, e);
    return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {
      var n;
      t[e] = (n = t[e], function (e) {
        e = e || {};
        var _ee = ee(e),
          t = _ee.success,
          s = _ee.fail,
          r = _ee.complete;
        if (!(t || s || r)) return n.call(this, e);
        n.call(this, e).then(function (e) {
          t && t(e), r && r(e);
        }, function (e) {
          s && s(e), r && r(e);
        });
      }).bind(t);
    }), t;
  }, t.customAuth = t.auth, t;
};
var It = wt;
var St = /*#__PURE__*/function (_le) {
  (0, _inherits2.default)(St, _le);
  var _super8 = _createSuper(St);
  function St() {
    (0, _classCallCheck2.default)(this, St);
    return _super8.apply(this, arguments);
  }
  (0, _createClass2.default)(St, [{
    key: "getAccessToken",
    value: function getAccessToken() {
      var _this11 = this;
      return new Promise(function (e, t) {
        var n = "Anonymous_Access_token";
        _this11.setAccessToken(n), e(n);
      });
    }
  }, {
    key: "setupRequest",
    value: function setupRequest(e, t) {
      var n = Object.assign({}, e, {
          spaceId: this.config.spaceId,
          timestamp: Date.now()
        }),
        s = {
          "Content-Type": "application/json"
        };
      "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = he.sign(n, this.config.clientSecret);
      var r = ue();
      s["x-client-info"] = encodeURIComponent(JSON.stringify(r));
      var _se = se(),
        i = _se.token;
      return s["x-client-token"] = i, {
        url: this.config.requestUrl,
        method: "POST",
        data: n,
        dataType: "json",
        header: JSON.parse(JSON.stringify(s))
      };
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref14) {
      var _this12 = this;
      var e = _ref14.url,
        t = _ref14.formData,
        n = _ref14.name,
        s = _ref14.filePath,
        r = _ref14.fileType,
        i = _ref14.onUploadProgress;
      return new Promise(function (o, a) {
        var c = _this12.adapter.uploadFile({
          url: e,
          formData: t,
          name: n,
          filePath: s,
          fileType: r,
          success: function success(e) {
            e && e.statusCode < 400 ? o(e) : a(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            a(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof i && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {
          i({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function uploadFile(_ref15) {
      var _this13 = this;
      var e = _ref15.filePath,
        t = _ref15.cloudPath,
        _ref15$fileType = _ref15.fileType,
        n = _ref15$fileType === void 0 ? "image" : _ref15$fileType,
        s = _ref15.onUploadProgress;
      if (!t) throw new te({
        code: "CLOUDPATH_REQUIRED",
        message: "cloudPath不可为空"
      });
      var r;
      return this.getOSSUploadOptionsFromPath({
        cloudPath: t
      }).then(function (t) {
        var _t$result = t.result,
          i = _t$result.url,
          o = _t$result.formData,
          a = _t$result.name;
        r = t.result.fileUrl;
        var c = {
          url: i,
          formData: o,
          name: a,
          filePath: e,
          fileType: n
        };
        return _this13.uploadFileToOSS(Object.assign({}, c, {
          onUploadProgress: s
        }));
      }).then(function () {
        return _this13.reportOSSUpload({
          cloudPath: t
        });
      }).then(function (t) {
        return new Promise(function (n, s) {
          t.success ? n({
            success: !0,
            filePath: e,
            fileID: r
          }) : s(new te({
            code: "UPLOAD_FAILED",
            message: "文件上传失败"
          }));
        });
      });
    }
  }, {
    key: "deleteFile",
    value: function deleteFile(_ref16) {
      var e = _ref16.fileList;
      var t = {
        method: "serverless.file.resource.delete",
        params: JSON.stringify({
          fileList: e
        })
      };
      return this.request(this.setupRequest(t)).then(function (e) {
        if (e.success) return e.result;
        throw new te({
          code: "DELETE_FILE_FAILED",
          message: "删除文件失败"
        });
      });
    }
  }, {
    key: "getTempFileURL",
    value: function getTempFileURL() {
      var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref17.fileList,
        t = _ref17.maxAge;
      if (!Array.isArray(e) || 0 === e.length) throw new te({
        code: "INVALID_PARAM",
        message: "fileList的元素必须是非空的字符串"
      });
      var n = {
        method: "serverless.file.resource.getTempFileURL",
        params: JSON.stringify({
          fileList: e,
          maxAge: t
        })
      };
      return this.request(this.setupRequest(n)).then(function (e) {
        if (e.success) return {
          fileList: e.result.fileList.map(function (e) {
            return {
              fileID: e.fileID,
              tempFileURL: e.tempFileURL
            };
          })
        };
        throw new te({
          code: "GET_TEMP_FILE_URL_FAILED",
          message: "获取临时文件链接失败"
        });
      });
    }
  }]);
  return St;
}(le);
var bt = {
    init: function init(e) {
      var t = new St(e),
        n = {
          signInAnonymously: function signInAnonymously() {
            return t.authorize();
          },
          getLoginState: function getLoginState() {
            return Promise.resolve(!1);
          }
        };
      return t.auth = function () {
        return n;
      }, t.customAuth = t.auth, t;
    }
  },
  kt = n(function (e, t) {
    e.exports = r.enc.Hex;
  });
function At() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var n = t.data,
    s = t.functionName,
    r = t.method,
    i = t.headers,
    _t$signHeaderKeys = t.signHeaderKeys,
    o = _t$signHeaderKeys === void 0 ? [] : _t$signHeaderKeys,
    a = t.config,
    c = Date.now(),
    u = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      var t = 16 * Math.random() | 0;
      return ("x" === e ? t : 3 & t | 8).toString(16);
    }),
    h = Object.assign({}, i, {
      "x-from-app-id": a.spaceAppId,
      "x-from-env-id": a.spaceId,
      "x-to-env-id": a.spaceId,
      "x-from-instance-id": c,
      "x-from-function-name": s,
      "x-client-timestamp": c,
      "x-alipay-source": "client",
      "x-request-id": u,
      "x-alipay-callid": u,
      "x-trace-id": u
    }),
    l = ["x-from-app-id", "x-from-env-id", "x-to-env-id", "x-from-instance-id", "x-from-function-name", "x-client-timestamp"].concat(o),
    _ref18 = e.split("?") || [],
    _ref19 = (0, _slicedToArray2.default)(_ref18, 2),
    _ref19$ = _ref19[0],
    d = _ref19$ === void 0 ? "" : _ref19$,
    _ref19$2 = _ref19[1],
    p = _ref19$2 === void 0 ? "" : _ref19$2,
    f = function (e) {
      var t = e.signedHeaders.join(";"),
        n = e.signedHeaders.map(function (t) {
          return "".concat(t.toLowerCase(), ":").concat(e.headers[t], "\n");
        }).join(""),
        s = ye(e.body).toString(kt),
        r = "".concat(e.method.toUpperCase(), "\n").concat(e.path, "\n").concat(e.query, "\n").concat(n, "\n").concat(t, "\n").concat(s, "\n"),
        i = ye(r).toString(kt),
        o = "HMAC-SHA256\n".concat(e.timestamp, "\n").concat(i, "\n"),
        a = _e(o, e.secretKey).toString(kt);
      return "HMAC-SHA256 Credential=".concat(e.secretId, ", SignedHeaders=").concat(t, ", Signature=").concat(a);
    }({
      path: d,
      query: p,
      method: r,
      headers: h,
      timestamp: c,
      body: JSON.stringify(n),
      secretId: a.accessKey,
      secretKey: a.secretKey,
      signedHeaders: l.sort()
    });
  return {
    url: "".concat(a.endpoint).concat(e),
    headers: Object.assign({}, h, {
      Authorization: f
    })
  };
}
function Pt(_ref20) {
  var e = _ref20.url,
    t = _ref20.data,
    _ref20$method = _ref20.method,
    n = _ref20$method === void 0 ? "POST" : _ref20$method,
    _ref20$headers = _ref20.headers,
    s = _ref20$headers === void 0 ? {} : _ref20$headers;
  return new Promise(function (r, i) {
    ne.request({
      url: e,
      method: n,
      data: t,
      header: s,
      dataType: "json",
      complete: function complete() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = s["x-trace-id"] || "";
        if (!e.statusCode || e.statusCode >= 400) {
          var _ref21 = e.data || {},
            _n8 = _ref21.message,
            _s10 = _ref21.errMsg,
            _r4 = _ref21.trace_id;
          return i(new te({
            code: "SYS_ERR",
            message: _n8 || _s10 || "request:fail",
            requestId: _r4 || t
          }));
        }
        r({
          status: e.statusCode,
          data: e.data,
          headers: e.header,
          requestId: t
        });
      }
    });
  });
}
function Tt(e, t) {
  var n = e.path,
    s = e.data,
    _e$method = e.method,
    r = _e$method === void 0 ? "GET" : _e$method,
    _At = At(n, {
      functionName: "",
      data: s,
      method: r,
      headers: {
        "x-alipay-cloud-mode": "oss",
        "x-data-api-type": "oss",
        "x-expire-timestamp": Date.now() + 6e4
      },
      signHeaderKeys: ["x-data-api-type", "x-expire-timestamp"],
      config: t
    }),
    i = _At.url,
    o = _At.headers;
  return Pt({
    url: i,
    data: s,
    method: r,
    headers: o
  }).then(function (e) {
    var t = e.data || {};
    if (!t.success) throw new te({
      code: e.errCode,
      message: e.errMsg,
      requestId: e.requestId
    });
    return t.data || {};
  }).catch(function (e) {
    throw new te({
      code: e.errCode,
      message: e.errMsg,
      requestId: e.requestId
    });
  });
}
function Ct() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = e.trim().replace(/^cloud:\/\//, ""),
    n = t.indexOf("/");
  if (n <= 0) throw new te({
    code: "INVALID_PARAM",
    message: "fileID不合法"
  });
  var s = t.substring(0, n),
    r = t.substring(n + 1);
  return s !== this.config.spaceId && console.warn("file ".concat(e, " does not belong to env ").concat(this.config.spaceId)), r;
}
function xt() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return "cloud://".concat(this.config.spaceId, "/").concat(e.replace(/^\/+/, ""));
}
var Ot = /*#__PURE__*/function () {
  function Ot(e) {
    (0, _classCallCheck2.default)(this, Ot);
    if (["spaceId", "spaceAppId", "accessKey", "secretKey"].forEach(function (t) {
      if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("".concat(t, " required"));
    }), e.endpoint) {
      if ("string" != typeof e.endpoint) throw new Error("endpoint must be string");
      if (!/^https:\/\//.test(e.endpoint)) throw new Error("endpoint must start with https://");
      e.endpoint = e.endpoint.replace(/\/$/, "");
    }
    this.config = Object.assign({}, e, {
      endpoint: e.endpoint || "https://".concat(e.spaceId, ".api-hz.cloudbasefunction.cn")
    });
  }
  (0, _createClass2.default)(Ot, [{
    key: "callFunction",
    value: function callFunction(e) {
      return function (e, t) {
        var n = e.name,
          s = e.data,
          r = "POST",
          _At2 = At("/functions/invokeFunction", {
            functionName: n,
            data: s,
            method: r,
            headers: {
              "x-to-function-name": n
            },
            signHeaderKeys: ["x-to-function-name"],
            config: t
          }),
          i = _At2.url,
          o = _At2.headers;
        return Pt({
          url: i,
          data: s,
          method: r,
          headers: o
        }).then(function (e) {
          return {
            errCode: 0,
            success: !0,
            requestId: e.requestId,
            result: e.data
          };
        }).catch(function (e) {
          throw new te({
            code: e.errCode,
            message: e.errMsg,
            requestId: e.requestId
          });
        });
      }(e, this.config);
    }
  }, {
    key: "uploadFileToOSS",
    value: function uploadFileToOSS(_ref22) {
      var e = _ref22.url,
        t = _ref22.filePath,
        n = _ref22.fileType,
        s = _ref22.formData,
        r = _ref22.onUploadProgress;
      return new Promise(function (i, o) {
        var a = ne.uploadFile({
          url: e,
          filePath: t,
          fileType: n,
          formData: s,
          name: "file",
          success: function success(e) {
            e && e.statusCode < 400 ? i(e) : o(new te({
              code: "UPLOAD_FAILED",
              message: "文件上传失败"
            }));
          },
          fail: function fail(e) {
            o(new te({
              code: e.code || "UPLOAD_FAILED",
              message: e.message || e.errMsg || "文件上传失败"
            }));
          }
        });
        "function" == typeof r && a && "function" == typeof a.onProgressUpdate && a.onProgressUpdate(function (e) {
          r({
            loaded: e.totalBytesSent,
            total: e.totalBytesExpectedToSend
          });
        });
      });
    }
  }, {
    key: "uploadFile",
    value: function () {
      var _uploadFile2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee34(_ref23) {
        var e, _ref23$cloudPath, t, _ref23$fileType, n, s, r, i, o, a, c;
        return _regenerator.default.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                e = _ref23.filePath, _ref23$cloudPath = _ref23.cloudPath, t = _ref23$cloudPath === void 0 ? "" : _ref23$cloudPath, _ref23$fileType = _ref23.fileType, n = _ref23$fileType === void 0 ? "image" : _ref23$fileType, s = _ref23.onUploadProgress;
                if (!("string" !== f(t))) {
                  _context34.next = 3;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath必须为字符串类型"
                });
              case 3:
                if (t = t.trim()) {
                  _context34.next = 5;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不可为空"
                });
              case 5:
                if (!/:\/\//.test(t)) {
                  _context34.next = 7;
                  break;
                }
                throw new te({
                  code: "INVALID_PARAM",
                  message: "cloudPath不合法"
                });
              case 7:
                _context34.next = 9;
                return Tt({
                  path: "/".concat(t.replace(/^\//, ""), "?post_url")
                }, this.config);
              case 9:
                r = _context34.sent;
                i = r.file_id;
                o = r.upload_url;
                a = r.form_data;
                c = a && a.reduce(function (e, t) {
                  return e[t.key] = t.value, e;
                }, {});
                return _context34.abrupt("return", this.uploadFileToOSS({
                  url: o,
                  filePath: e,
                  fileType: n,
                  formData: c,
                  onUploadProgress: s
                }).then(function () {
                  return {
                    fileID: i
                  };
                }));
              case 15:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));
      function uploadFile(_x31) {
        return _uploadFile2.apply(this, arguments);
      }
      return uploadFile;
    }()
  }, {
    key: "getTempFileURL",
    value: function () {
      var _getTempFileURL = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee35(_ref24) {
        var _this14 = this;
        var e;
        return _regenerator.default.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                e = _ref24.fileList;
                return _context35.abrupt("return", new Promise(function (t, n) {
                  (!e || e.length < 0) && n(new te({
                    errCode: "INVALID_PARAM",
                    errMsg: "fileList不能为空数组"
                  })), e.length > 50 && n(new te({
                    errCode: "INVALID_PARAM",
                    errMsg: "fileList数组长度不能超过50"
                  }));
                  var s = [];
                  var _iterator5 = _createForOfIteratorHelper(e),
                    _step5;
                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var _t10 = _step5.value;
                      "string" !== f(_t10) && n(new te({
                        errCode: "INVALID_PARAM",
                        errMsg: "fileList的元素必须是非空的字符串"
                      }));
                      var _e17 = Ct.call(_this14, _t10);
                      s.push({
                        file_id: _e17,
                        expire: 600
                      });
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                  Tt({
                    path: "/?download_url",
                    data: {
                      file_list: s
                    },
                    method: "POST"
                  }, _this14.config).then(function (e) {
                    var _e$file_list = e.file_list,
                      n = _e$file_list === void 0 ? [] : _e$file_list;
                    t({
                      fileList: n.map(function (e) {
                        return {
                          fileID: xt.call(_this14, e.file_id),
                          tempFileURL: e.download_url
                        };
                      })
                    });
                  }).catch(function (e) {
                    return n(e);
                  });
                }));
              case 2:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35);
      }));
      function getTempFileURL(_x32) {
        return _getTempFileURL.apply(this, arguments);
      }
      return getTempFileURL;
    }()
  }]);
  return Ot;
}();
var Et = {
  init: function init(e) {
    e.provider = "alipay";
    var t = new Ot(e);
    return t.auth = function () {
      return {
        signInAnonymously: function signInAnonymously() {
          return Promise.resolve();
        },
        getLoginState: function getLoginState() {
          return Promise.resolve(!0);
        }
      };
    }, t;
  }
};
function Lt(_ref25) {
  var e = _ref25.data;
  var t;
  t = ue();
  var n = JSON.parse(JSON.stringify(e || {}));
  if (Object.assign(n, {
    clientInfo: t
  }), !n.uniIdToken) {
    var _se2 = se(),
      _e18 = _se2.token;
    _e18 && (n.uniIdToken = _e18);
  }
  return n;
}
function Rt() {
  return _Rt.apply(this, arguments);
}
function _Rt() {
  _Rt = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee56() {
    var _this27 = this;
    var _ref67,
      e,
      t,
      _this$__dev__,
      n,
      s,
      r,
      i,
      o,
      a,
      _args6 = arguments;
    return _regenerator.default.wrap(function _callee56$(_context56) {
      while (1) {
        switch (_context56.prev = _context56.next) {
          case 0:
            _ref67 = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {}, e = _ref67.name, t = _ref67.data;
            _context56.next = 3;
            return this.__dev__.initLocalNetwork();
          case 3:
            _this$__dev__ = this.__dev__, n = _this$__dev__.localAddress, s = _this$__dev__.localPort, r = {
              aliyun: "aliyun",
              tencent: "tcb",
              alipay: "alipay"
            }[this.config.provider], i = this.config.spaceId, o = "http://".concat(n, ":").concat(s, "/system/check-function"), a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);
            return _context56.abrupt("return", new Promise(function (t, n) {
              ne.request({
                method: "POST",
                url: o,
                data: {
                  name: e,
                  platform: P,
                  provider: r,
                  spaceId: i
                },
                timeout: 3e3,
                success: function success(e) {
                  t(e);
                },
                fail: function fail() {
                  t({
                    data: {
                      code: "NETWORK_ERROR",
                      message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。"
                    }
                  });
                }
              });
            }).then(function () {
              var _ref68 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                e = _ref68.data;
              var _ref69 = e || {},
                t = _ref69.code,
                n = _ref69.message;
              return {
                code: 0 === t ? 0 : t || "SYS_ERR",
                message: n || "SYS_ERR"
              };
            }).then(function (_ref70) {
              var n = _ref70.code,
                s = _ref70.message;
              if (0 !== n) {
                switch (n) {
                  case "MODULE_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "FUNCTION_ENCRYPTED":
                    console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));
                    break;
                  case "ACTION_ENCRYPTED":
                    console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");
                    break;
                  case "NETWORK_ERROR":
                    {
                      var _e30 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";
                      throw console.error(_e30), new Error(_e30);
                    }
                  case "SWITCH_TO_CLOUD":
                    break;
                  default:
                    {
                      var _e31 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");
                      throw console.error(_e31), new Error(_e31);
                    }
                }
                return _this27._callCloudFunction({
                  name: e,
                  data: t
                });
              }
              return new Promise(function (e, n) {
                var s = Lt.call(_this27, {
                  data: t
                });
                ne.request({
                  method: "POST",
                  url: a,
                  data: {
                    provider: r,
                    platform: P,
                    param: s
                  },
                  success: function success() {
                    var _ref71 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
                      t = _ref71.statusCode,
                      s = _ref71.data;
                    return !t || t >= 400 ? n(new te({
                      code: s.code || "SYS_ERR",
                      message: s.message || "request:fail"
                    })) : e({
                      result: s
                    });
                  },
                  fail: function fail(e) {
                    n(new te({
                      code: e.code || e.errCode || "SYS_ERR",
                      message: e.message || e.errMsg || "request:fail"
                    }));
                  }
                });
              });
            }));
          case 5:
          case "end":
            return _context56.stop();
        }
      }
    }, _callee56, this);
  }));
  return _Rt.apply(this, arguments);
}
var Ut = [{
  rule: /fc_function_not_found|FUNCTION_NOT_FOUND/,
  content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间",
  mode: "append"
}];
var Nt = /[\\^$.*+?()[\]{}|]/g,
  Dt = RegExp(Nt.source);
function Mt(e, t, n) {
  return e.replace(new RegExp((s = t) && Dt.test(s) ? s.replace(Nt, "\\$&") : s, "g"), n);
  var s;
}
var qt = "none",
  Ft = "request",
  Kt = "response",
  jt = "both";
var $t = /*#__PURE__*/function () {
  function $t() {
    var _ref26 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref26.secretType,
      t = _ref26.uniCloudIns;
    (0, _classCallCheck2.default)(this, $t);
    this.clientType = "", this.secretType = e || qt, this.uniCloudIns = t;
    var _this$uniCloudIns$con = this.uniCloudIns.config,
      n = _this$uniCloudIns$con.provider,
      s = _this$uniCloudIns$con.spaceId;
    var r;
    this.provider = n, this.spaceId = s, this.scopedGlobalCache = (r = this.uniCloudIns, L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", r.config.spaceId)));
  }
  (0, _createClass2.default)($t, [{
    key: "getSystemInfo",
    value: function getSystemInfo() {
      return this._systemInfo || (this._systemInfo = ae()), this._systemInfo;
    }
  }, {
    key: "appId",
    get: function get() {
      return this.getSystemInfo().appId;
    }
  }, {
    key: "deviceId",
    get: function get() {
      return this.getSystemInfo().deviceId;
    }
  }, {
    key: "encryptData",
    value: function () {
      var _encryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee36(e) {
        return _regenerator.default.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                return _context36.abrupt("return", this.secretType === qt ? e : this.platformEncryptData(e));
              case 1:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));
      function encryptData(_x33) {
        return _encryptData.apply(this, arguments);
      }
      return encryptData;
    }()
  }, {
    key: "decryptResult",
    value: function () {
      var _decryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee37(e) {
        var _ref27, t, n;
        return _regenerator.default.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                if (!(this.secretType === qt)) {
                  _context37.next = 2;
                  break;
                }
                return _context37.abrupt("return", e);
              case 2:
                _ref27 = e || {}, t = _ref27.errCode, n = _ref27.content;
                return _context37.abrupt("return", t || !n ? e : this.secretType === Ft ? n : this.platformDecryptResult(e));
              case 4:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));
      function decryptResult(_x34) {
        return _decryptResult.apply(this, arguments);
      }
      return decryptResult;
    }()
  }, {
    key: "wrapVerifyClientCallFunction",
    value: function wrapVerifyClientCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee38() {
        var _ref29,
          n,
          _ref29$data,
          s,
          r,
          _args38 = arguments;
        return _regenerator.default.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _ref29 = _args38.length > 0 && _args38[0] !== undefined ? _args38[0] : {}, n = _ref29.name, _ref29$data = _ref29.data, s = _ref29$data === void 0 ? {} : _ref29$data;
                _context38.next = 3;
                return t.prepare();
              case 3:
                _context38.next = 5;
                return t.platformGetSignOption();
              case 5:
                (s = JSON.parse(JSON.stringify(s)))._uniCloudOptions = _context38.sent;
                _context38.next = 8;
                return e({
                  name: n,
                  data: s
                });
              case 8:
                r = _context38.sent;
                _context38.t0 = t.isClientKeyNotFound(r);
                if (!_context38.t0) {
                  _context38.next = 19;
                  break;
                }
                _context38.next = 13;
                return t.prepare({
                  forceUpdate: !0
                });
              case 13:
                _context38.next = 15;
                return t.platformGetSignOption();
              case 15:
                s._uniCloudOptions = _context38.sent;
                _context38.next = 18;
                return e({
                  name: n,
                  data: s
                });
              case 18:
                r = _context38.sent;
              case 19:
                return _context38.abrupt("return", r);
              case 20:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38);
      }));
    }
  }, {
    key: "wrapEncryptDataCallFunction",
    value: function wrapEncryptDataCallFunction(e) {
      var t = this;
      return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee39() {
        var _ref31,
          n,
          _ref31$data,
          s,
          r,
          i,
          _r5,
          _args39 = arguments;
        return _regenerator.default.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                _ref31 = _args39.length > 0 && _args39[0] !== undefined ? _args39[0] : {}, n = _ref31.name, _ref31$data = _ref31.data, s = _ref31$data === void 0 ? {} : _ref31$data;
                _context39.next = 3;
                return t.prepare();
              case 3:
                _context39.next = 5;
                return t.encryptData(s);
              case 5:
                r = _context39.sent;
                _context39.next = 8;
                return e({
                  name: n,
                  data: r
                });
              case 8:
                i = _context39.sent;
                if (!t.isClientKeyNotFound(i)) {
                  _context39.next = 21;
                  break;
                }
                _context39.next = 12;
                return t.prepare({
                  forceUpdate: !0
                });
              case 12:
                _context39.next = 14;
                return t.encryptData(s);
              case 14:
                _r5 = _context39.sent;
                _context39.next = 17;
                return t.platformGetSignOption();
              case 17:
                s._uniCloudOptions = _context39.sent;
                _context39.next = 20;
                return e({
                  name: n,
                  data: _r5
                });
              case 20:
                i = _context39.sent;
              case 21:
                _context39.next = 23;
                return t.decryptResult(i.result);
              case 23:
                i.result = _context39.sent;
                return _context39.abrupt("return", i);
              case 25:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39);
      }));
    }
  }]);
  return $t;
}();
/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
function Bt(e) {
  return parseInt(e) === e;
}
function Wt(e) {
  if (!Bt(e.length)) return !1;
  for (var t = 0; t < e.length; t++) {
    if (!Bt(e[t]) || e[t] < 0 || e[t] > 255) return !1;
  }
  return !0;
}
function Ht(e, t) {
  if (e.buffer && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
  if (Array.isArray(e)) {
    if (!Wt(e)) throw new Error("Array contains invalid value: " + e);
    return new Uint8Array(e);
  }
  if (Bt(e.length) && Wt(e)) return new Uint8Array(e);
  throw new Error("unsupported array-like object");
}
function zt(e) {
  return new Uint8Array(e);
}
function Jt(e, t, n, s, r) {
  null == s && null == r || (e = e.slice ? e.slice(s, r) : Array.prototype.slice.call(e, s, r)), t.set(e, n);
}
var Gt,
  Vt = {
    toBytes: function toBytes(e) {
      var t = [],
        n = 0;
      for (e = encodeURI(e); n < e.length;) {
        var s = e.charCodeAt(n++);
        37 === s ? (t.push(parseInt(e.substr(n, 2), 16)), n += 2) : t.push(s);
      }
      return Ht(t);
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length;) {
        var s = e[n];
        s < 128 ? (t.push(String.fromCharCode(s)), n++) : s > 191 && s < 224 ? (t.push(String.fromCharCode((31 & s) << 6 | 63 & e[n + 1])), n += 2) : (t.push(String.fromCharCode((15 & s) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2])), n += 3);
      }
      return t.join("");
    }
  },
  Yt = (Gt = "0123456789abcdef", {
    toBytes: function toBytes(e) {
      for (var t = [], n = 0; n < e.length; n += 2) {
        t.push(parseInt(e.substr(n, 2), 16));
      }
      return t;
    },
    fromBytes: function fromBytes(e) {
      for (var t = [], n = 0; n < e.length; n++) {
        var s = e[n];
        t.push(Gt[(240 & s) >> 4] + Gt[15 & s]);
      }
      return t.join("");
    }
  }),
  Qt = {
    16: 10,
    24: 12,
    32: 14
  },
  Xt = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
  Zt = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
  en = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
  tn = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
  nn = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
  sn = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
  rn = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
  on = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
  an = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
  cn = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
  un = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
  hn = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
  ln = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
  dn = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
  pn = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];
function fn(e) {
  for (var t = [], n = 0; n < e.length; n += 4) {
    t.push(e[n] << 24 | e[n + 1] << 16 | e[n + 2] << 8 | e[n + 3]);
  }
  return t;
}
var gn = /*#__PURE__*/function () {
  function gn(e) {
    (0, _classCallCheck2.default)(this, gn);
    if (!(this instanceof gn)) throw Error("AES must be instanitated with `new`");
    Object.defineProperty(this, "key", {
      value: Ht(e, !0)
    }), this._prepare();
  }
  (0, _createClass2.default)(gn, [{
    key: "_prepare",
    value: function _prepare() {
      var e = Qt[this.key.length];
      if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
      this._Ke = [], this._Kd = [];
      for (var t = 0; t <= e; t++) {
        this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
      }
      var n,
        s = 4 * (e + 1),
        r = this.key.length / 4,
        i = fn(this.key);
      for (t = 0; t < r; t++) {
        n = t >> 2, this._Ke[n][t % 4] = i[t], this._Kd[e - n][t % 4] = i[t];
      }
      for (var o, a = 0, c = r; c < s;) {
        if (o = i[r - 1], i[0] ^= Zt[o >> 16 & 255] << 24 ^ Zt[o >> 8 & 255] << 16 ^ Zt[255 & o] << 8 ^ Zt[o >> 24 & 255] ^ Xt[a] << 24, a += 1, 8 != r) for (t = 1; t < r; t++) {
          i[t] ^= i[t - 1];
        } else {
          for (t = 1; t < r / 2; t++) {
            i[t] ^= i[t - 1];
          }
          o = i[r / 2 - 1], i[r / 2] ^= Zt[255 & o] ^ Zt[o >> 8 & 255] << 8 ^ Zt[o >> 16 & 255] << 16 ^ Zt[o >> 24 & 255] << 24;
          for (t = r / 2 + 1; t < r; t++) {
            i[t] ^= i[t - 1];
          }
        }
        for (t = 0; t < r && c < s;) {
          u = c >> 2, h = c % 4, this._Ke[u][h] = i[t], this._Kd[e - u][h] = i[t++], c++;
        }
      }
      for (var u = 1; u < e; u++) {
        for (var h = 0; h < 4; h++) {
          o = this._Kd[u][h], this._Kd[u][h] = hn[o >> 24 & 255] ^ ln[o >> 16 & 255] ^ dn[o >> 8 & 255] ^ pn[255 & o];
        }
      }
    }
  }, {
    key: "encrypt",
    value: function encrypt(e) {
      if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
      for (var t = this._Ke.length - 1, n = [0, 0, 0, 0], s = fn(e), r = 0; r < 4; r++) {
        s[r] ^= this._Ke[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = tn[s[r] >> 24 & 255] ^ nn[s[(r + 1) % 4] >> 16 & 255] ^ sn[s[(r + 2) % 4] >> 8 & 255] ^ rn[255 & s[(r + 3) % 4]] ^ this._Ke[i][r];
        }
        s = n.slice();
      }
      var o,
        a = zt(16);
      for (r = 0; r < 4; r++) {
        o = this._Ke[t][r], a[4 * r] = 255 & (Zt[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (Zt[s[(r + 1) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (Zt[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (Zt[255 & s[(r + 3) % 4]] ^ o);
      }
      return a;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
      for (var t = this._Kd.length - 1, n = [0, 0, 0, 0], s = fn(e), r = 0; r < 4; r++) {
        s[r] ^= this._Kd[0][r];
      }
      for (var i = 1; i < t; i++) {
        for (r = 0; r < 4; r++) {
          n[r] = on[s[r] >> 24 & 255] ^ an[s[(r + 3) % 4] >> 16 & 255] ^ cn[s[(r + 2) % 4] >> 8 & 255] ^ un[255 & s[(r + 1) % 4]] ^ this._Kd[i][r];
        }
        s = n.slice();
      }
      var o,
        a = zt(16);
      for (r = 0; r < 4; r++) {
        o = this._Kd[t][r], a[4 * r] = 255 & (en[s[r] >> 24 & 255] ^ o >> 24), a[4 * r + 1] = 255 & (en[s[(r + 3) % 4] >> 16 & 255] ^ o >> 16), a[4 * r + 2] = 255 & (en[s[(r + 2) % 4] >> 8 & 255] ^ o >> 8), a[4 * r + 3] = 255 & (en[255 & s[(r + 1) % 4]] ^ o);
      }
      return a;
    }
  }]);
  return gn;
}();
var mn = /*#__PURE__*/function () {
  function mn(e) {
    (0, _classCallCheck2.default)(this, mn);
    if (!(this instanceof mn)) throw Error("AES must be instanitated with `new`");
    this.description = "Electronic Code Block", this.name = "ecb", this._aes = new gn(e);
  }
  (0, _createClass2.default)(mn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Ht(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = zt(e.length), n = zt(16), s = 0; s < e.length; s += 16) {
        Jt(e, n, 0, s, s + 16), Jt(n = this._aes.encrypt(n), t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Ht(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = zt(e.length), n = zt(16), s = 0; s < e.length; s += 16) {
        Jt(e, n, 0, s, s + 16), Jt(n = this._aes.decrypt(n), t, s);
      }
      return t;
    }
  }]);
  return mn;
}();
var yn = /*#__PURE__*/function () {
  function yn(e, t) {
    (0, _classCallCheck2.default)(this, yn);
    if (!(this instanceof yn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Block Chaining", this.name = "cbc", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = zt(16);
    this._lastCipherblock = Ht(t, !0), this._aes = new gn(e);
  }
  (0, _createClass2.default)(yn, [{
    key: "encrypt",
    value: function encrypt(e) {
      if ((e = Ht(e)).length % 16 != 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
      for (var t = zt(e.length), n = zt(16), s = 0; s < e.length; s += 16) {
        Jt(e, n, 0, s, s + 16);
        for (var r = 0; r < 16; r++) {
          n[r] ^= this._lastCipherblock[r];
        }
        this._lastCipherblock = this._aes.encrypt(n), Jt(this._lastCipherblock, t, s);
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if ((e = Ht(e)).length % 16 != 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
      for (var t = zt(e.length), n = zt(16), s = 0; s < e.length; s += 16) {
        Jt(e, n, 0, s, s + 16), n = this._aes.decrypt(n);
        for (var r = 0; r < 16; r++) {
          t[s + r] = n[r] ^ this._lastCipherblock[r];
        }
        Jt(e, this._lastCipherblock, 0, s, s + 16);
      }
      return t;
    }
  }]);
  return yn;
}();
var _n = /*#__PURE__*/function () {
  function _n(e, t, n) {
    (0, _classCallCheck2.default)(this, _n);
    if (!(this instanceof _n)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Cipher Feedback", this.name = "cfb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 size)");
    } else t = zt(16);
    n || (n = 1), this.segmentSize = n, this._shiftRegister = Ht(t, !0), this._aes = new gn(e);
  }
  (0, _createClass2.default)(_n, [{
    key: "encrypt",
    value: function encrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
      for (var t, n = Ht(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        Jt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Jt(n, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
      for (var t, n = Ht(e, !0), s = 0; s < n.length; s += this.segmentSize) {
        t = this._aes.encrypt(this._shiftRegister);
        for (var r = 0; r < this.segmentSize; r++) {
          n[s + r] ^= t[r];
        }
        Jt(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), Jt(e, this._shiftRegister, 16 - this.segmentSize, s, s + this.segmentSize);
      }
      return n;
    }
  }]);
  return _n;
}();
var wn = /*#__PURE__*/function () {
  function wn(e, t) {
    (0, _classCallCheck2.default)(this, wn);
    if (!(this instanceof wn)) throw Error("AES must be instanitated with `new`");
    if (this.description = "Output Feedback", this.name = "ofb", t) {
      if (16 != t.length) throw new Error("invalid initialation vector size (must be 16 bytes)");
    } else t = zt(16);
    this._lastPrecipher = Ht(t, !0), this._lastPrecipherIndex = 16, this._aes = new gn(e);
  }
  (0, _createClass2.default)(wn, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Ht(e, !0), n = 0; n < t.length; n++) {
        16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[n] ^= this._lastPrecipher[this._lastPrecipherIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return wn;
}();
var vn = /*#__PURE__*/function () {
  function vn(e) {
    (0, _classCallCheck2.default)(this, vn);
    if (!(this instanceof vn)) throw Error("Counter must be instanitated with `new`");
    0 === e || e || (e = 1), "number" == typeof e ? (this._counter = zt(16), this.setValue(e)) : this.setBytes(e);
  }
  (0, _createClass2.default)(vn, [{
    key: "setValue",
    value: function setValue(e) {
      if ("number" != typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
      if (e > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
      for (var t = 15; t >= 0; --t) {
        this._counter[t] = e % 256, e = parseInt(e / 256);
      }
    }
  }, {
    key: "setBytes",
    value: function setBytes(e) {
      if (16 != (e = Ht(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
      this._counter = e;
    }
  }, {
    key: "increment",
    value: function increment() {
      for (var e = 15; e >= 0; e--) {
        if (255 !== this._counter[e]) {
          this._counter[e]++;
          break;
        }
        this._counter[e] = 0;
      }
    }
  }]);
  return vn;
}();
var In = /*#__PURE__*/function () {
  function In(e, t) {
    (0, _classCallCheck2.default)(this, In);
    if (!(this instanceof In)) throw Error("AES must be instanitated with `new`");
    this.description = "Counter", this.name = "ctr", t instanceof vn || (t = new vn(t)), this._counter = t, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new gn(e);
  }
  (0, _createClass2.default)(In, [{
    key: "encrypt",
    value: function encrypt(e) {
      for (var t = Ht(e, !0), n = 0; n < t.length; n++) {
        16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[n] ^= this._remainingCounter[this._remainingCounterIndex++];
      }
      return t;
    }
  }, {
    key: "decrypt",
    value: function decrypt(e) {
      return this.encrypt(e);
    }
  }]);
  return In;
}();
var Sn = {
  AES: gn,
  Counter: vn,
  ModeOfOperation: {
    ecb: mn,
    cbc: yn,
    cfb: _n,
    ofb: wn,
    ctr: In
  },
  utils: {
    hex: Yt,
    utf8: Vt
  },
  padding: {
    pkcs7: {
      pad: function pad(e) {
        var t = 16 - (e = Ht(e, !0)).length % 16,
          n = zt(e.length + t);
        Jt(e, n);
        for (var s = e.length; s < n.length; s++) {
          n[s] = t;
        }
        return n;
      },
      strip: function strip(e) {
        if ((e = Ht(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
        var t = e[e.length - 1];
        if (t > 16) throw new Error("PKCS#7 padding byte out of range");
        for (var n = e.length - t, s = 0; s < t; s++) {
          if (e[n + s] !== t) throw new Error("PKCS#7 invalid padding byte");
        }
        var r = zt(n);
        return Jt(e, r, 0, 0, n), r;
      }
    }
  },
  _arrayTest: {
    coerceArray: Ht,
    createArray: zt,
    copyArray: Jt
  }
};
function bn(e, t, n) {
  var s = new Uint8Array(uni.base64ToArrayBuffer(t)),
    r = Sn.utils.utf8.toBytes(n),
    i = Sn.utils.utf8.toBytes(e),
    o = new Sn.ModeOfOperation.cbc(s, r),
    a = Sn.padding.pkcs7.pad(i),
    c = o.encrypt(a);
  return uni.arrayBufferToBase64(c);
}
var kn = {
    code: 2e4,
    message: "System error"
  },
  An = {
    code: 20101,
    message: "Invalid client"
  },
  Pn = {
    code: 20102,
    message: "Get encrypt key failed"
  },
  Tn = {
    10001: "Secure network is not supported on current playground or unimpsdk",
    10003: "Config missing in current app. If the problem pesist, please contact DCloud.",
    10009: "Encrypt payload failed",
    10010: "Decrypt response failed"
  };
function Cn(e) {
  var _ref32 = e || {},
    t = _ref32.errSubject,
    n = _ref32.subject,
    s = _ref32.errCode,
    r = _ref32.errMsg,
    i = _ref32.code,
    o = _ref32.message,
    a = _ref32.cause;
  return new te({
    subject: t || n || "uni-secure-network",
    code: s || i || kn.code,
    message: r || o,
    cause: a
  });
}
var xn,
  On,
  En = null;
var Ln = /*#__PURE__*/function (_$t) {
  (0, _inherits2.default)(Ln, _$t);
  var _super9 = _createSuper(Ln);
  function Ln(e) {
    var _this15;
    (0, _classCallCheck2.default)(this, Ln);
    _this15 = _super9.call(this, e), _this15.clientType = "mp-weixin", _this15.userEncryptKey = null;
    return _this15;
  }
  (0, _createClass2.default)(Ln, [{
    key: "isLogin",
    value: function isLogin() {
      return !!this.scopedGlobalCache.mpWeixinCode || !!this.scopedGlobalCache.mpWeixinOpenid;
    }
  }, {
    key: "prepare",
    value: function () {
      var _prepare2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee40() {
        return _regenerator.default.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                if (this.isLogin()) {
                  _context40.next = 7;
                  break;
                }
                if (this.scopedGlobalCache.initPromise) {
                  _context40.next = 3;
                  break;
                }
                throw new Error("`uniCloud.initSecureNetworkByWeixin` has not yet been called");
              case 3:
                _context40.next = 5;
                return this.scopedGlobalCache.initPromise;
              case 5:
                if (this.isLogin()) {
                  _context40.next = 7;
                  break;
                }
                throw new Error("uniCloud.initSecureNetworkByWeixin` has not yet been called or successfully excuted");
              case 7:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));
      function prepare() {
        return _prepare2.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "getUserEncryptKey",
    value: function () {
      var _getUserEncryptKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee41() {
        var _this16 = this;
        var e;
        return _regenerator.default.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                if (!this.userEncryptKey) {
                  _context41.next = 2;
                  break;
                }
                return _context41.abrupt("return", this.userEncryptKey);
              case 2:
                if (!(En && En.expireTime)) {
                  _context41.next = 6;
                  break;
                }
                e = Date.now();
                if (!(En.expireTime - e > 0)) {
                  _context41.next = 6;
                  break;
                }
                return _context41.abrupt("return", (this.userEncryptKey = En, this.userEncryptKey));
              case 6:
                return _context41.abrupt("return", new Promise(function (e, t) {
                  uni.getUserCryptoManager().getLatestUserKey({
                    success: function success(t) {
                      En = t, _this16.userEncryptKey = t, e(_this16.userEncryptKey);
                    },
                    fail: function fail(e) {
                      t(Cn(_objectSpread(_objectSpread({}, Pn), {}, {
                        cause: e
                      })));
                    }
                  });
                }));
              case 7:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));
      function getUserEncryptKey() {
        return _getUserEncryptKey.apply(this, arguments);
      }
      return getUserEncryptKey;
    }()
  }, {
    key: "getWxAppId",
    value: function getWxAppId() {
      return wx.getAccountInfoSync().miniProgram.appId;
    }
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee42() {
        var _yield$this$getUserEn, e, t, n;
        return _regenerator.default.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                _context42.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn = _context42.sent;
                e = _yield$this$getUserEn.encryptKey;
                t = _yield$this$getUserEn.iv;
                n = _yield$this$getUserEn.version;
                return _context42.abrupt("return", {
                  verifyClientSign: bn(JSON.stringify({
                    data: JSON.stringify({}),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === ae().platform,
                    timestamp: Date.now()
                  }), e, t),
                  encryptKeyId: n,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                });
              case 7:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee43(e) {
        var _yield$this$getUserEn2, t, n, s, r;
        return _regenerator.default.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _context43.next = 2;
                return this.getUserEncryptKey();
              case 2:
                _yield$this$getUserEn2 = _context43.sent;
                t = _yield$this$getUserEn2.encryptKey;
                n = _yield$this$getUserEn2.iv;
                s = _yield$this$getUserEn2.version;
                r = {
                  secretType: this.secretType,
                  encryptKeyId: s,
                  mpWeixinCode: this.scopedGlobalCache.mpWeixinCode,
                  mpWeixinOpenid: this.scopedGlobalCache.mpWeixinOpenid
                };
                return _context43.abrupt("return", this.secretType === Kt ? {
                  content: e,
                  _uniCloudOptions: r
                } : {
                  content: bn(JSON.stringify({
                    data: JSON.stringify(e),
                    appId: this.appId,
                    deviceId: this.deviceId,
                    wxAppId: this.getWxAppId(),
                    simulator: "devtools" === ae().platform,
                    timestamp: Date.now()
                  }), t, n),
                  _uniCloudOptions: r
                });
              case 8:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));
      function platformEncryptData(_x35) {
        return _platformEncryptData.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee44(e) {
        var t, _yield$this$getUserEn3, n, s;
        return _regenerator.default.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                t = e.content;
                _context44.next = 3;
                return this.getUserEncryptKey();
              case 3:
                _yield$this$getUserEn3 = _context44.sent;
                n = _yield$this$getUserEn3.encryptKey;
                s = _yield$this$getUserEn3.iv;
                return _context44.abrupt("return", JSON.parse(function (e, t, n) {
                  var s = new Uint8Array(uni.base64ToArrayBuffer(e)),
                    r = new Uint8Array(uni.base64ToArrayBuffer(t)),
                    i = Sn.utils.utf8.toBytes(n),
                    o = new Sn.ModeOfOperation.cbc(r, i),
                    a = Sn.padding.pkcs7.strip(o.decrypt(s));
                  return Sn.utils.utf8.fromBytes(a);
                }(t, n, s)));
              case 7:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));
      function platformDecryptResult(_x36) {
        return _platformDecryptResult.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      return !1;
    }
  }]);
  return Ln;
}($t);
function Rn(e) {
  var t = ["hasClientKey", "encryptGetClientKeyPayload", "setClientKey", "encrypt", "decrypt"],
    n = {};
  var _loop = function _loop(_s11) {
    var r = t[_s11];
    n[r] = function () {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }
      return new Promise(function (n, s) {
        "function" == typeof e[r] ? e[r].apply(e, t.concat([function () {
          var _ref33 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref33.type,
            t = _ref33.data,
            r = _ref33.errCode,
            i = _ref33.errMsg,
            o = _ref33.errSubject,
            a = _ref33.message;
          "success" === e ? n(t) : s(Cn({
            errCode: r,
            errMsg: Tn[r] || i || a,
            errSubject: o
          }));
        }])) : s(Cn({
          message: "请检查manifest.json内是否开启安全网络模块，另外注意标准基座不支持安全网络模块"
        }));
      });
    };
  };
  for (var _s11 = 0; _s11 < t.length; _s11++) {
    _loop(_s11);
  }
  return n;
}
var Un = /*#__PURE__*/function (_$t2) {
  (0, _inherits2.default)(Un, _$t2);
  var _super10 = _createSuper(Un);
  function Un(e) {
    var _this17;
    (0, _classCallCheck2.default)(this, Un);
    _this17 = _super10.call(this, e), _this17.clientType = "app", _this17.appUtils = _objectSpread({}, Rn(uni.requireNativePlugin("plus"))), _this17.systemInfo = xn || (xn = ae());
    return _this17;
  }
  (0, _createClass2.default)(Un, [{
    key: "hasClientKey",
    value: function () {
      var _hasClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee45() {
        return _regenerator.default.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                _context45.next = 2;
                return this.appUtils.hasClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId
                });
              case 2:
                this._hasClientKey = _context45.sent;
                return _context45.abrupt("return", this._hasClientKey);
              case 4:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));
      function hasClientKey() {
        return _hasClientKey.apply(this, arguments);
      }
      return hasClientKey;
    }()
  }, {
    key: "getAppClientKey",
    value: function () {
      var _getAppClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee46() {
        var _yield$this$appUtils$, e, t, n, s, r;
        return _regenerator.default.wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                _context46.next = 2;
                return this.appUtils.encryptGetClientKeyPayload({
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$ = _context46.sent;
                e = _yield$this$appUtils$.data;
                t = _yield$this$appUtils$.key;
                _context46.next = 7;
                return this.uniCloudIns.callFunction({
                  name: "DCloud-clientDB",
                  data: {
                    redirectTo: "encryption",
                    action: "getAppClientKey",
                    data: e,
                    key: t
                  }
                });
              case 7:
                _context46.t0 = _context46.sent.result;
                if (_context46.t0) {
                  _context46.next = 10;
                  break;
                }
                _context46.t0 = {};
              case 10:
                n = _context46.t0;
                if (!(0 !== n.errCode)) {
                  _context46.next = 13;
                  break;
                }
                throw function (e) {
                  return new te({
                    subject: e.errSubject || "uni-secure-network",
                    code: e.errCode || e.code || kn.code,
                    message: e.errMsg || e.message
                  });
                }(n);
              case 13:
                s = n.clientKey, r = n.key;
                _context46.next = 16;
                return this.appUtils.setClientKey({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  clientKey: s,
                  key: r
                });
              case 16:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));
      function getAppClientKey() {
        return _getAppClientKey.apply(this, arguments);
      }
      return getAppClientKey;
    }()
  }, {
    key: "ensureClientKey",
    value: function () {
      var _ensureClientKey = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee47() {
        var _this18 = this;
        var _ref34,
          _ref34$forceUpdate,
          e,
          _args47 = arguments;
        return _regenerator.default.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                _ref34 = _args47.length > 0 && _args47[0] !== undefined ? _args47[0] : {}, _ref34$forceUpdate = _ref34.forceUpdate, e = _ref34$forceUpdate === void 0 ? !1 : _ref34$forceUpdate;
                _context47.t1 = !0;
                _context47.next = 4;
                return this.hasClientKey();
              case 4:
                _context47.t2 = _context47.sent;
                _context47.t0 = _context47.t1 !== _context47.t2;
                if (_context47.t0) {
                  _context47.next = 8;
                  break;
                }
                _context47.t0 = e;
              case 8:
                if (!_context47.t0) {
                  _context47.next = 10;
                  break;
                }
                return _context47.abrupt("return", (e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus === l || !e && this.scopedGlobalCache.initPromise && this.scopedGlobalCache.initStatus !== p || (this.scopedGlobalCache.initPromise = this.getAppClientKey(), this.scopedGlobalCache.initPromise.then(function (e) {
                  _this18.scopedGlobalCache.initStatus = d;
                }).catch(function (e) {
                  throw _this18.scopedGlobalCache.initStatus = p, e;
                }), this.scopedGlobalCache.initStatus = l), this.scopedGlobalCache.initPromise));
              case 10:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));
      function ensureClientKey() {
        return _ensureClientKey.apply(this, arguments);
      }
      return ensureClientKey;
    }()
  }, {
    key: "prepare",
    value: function () {
      var _prepare3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee48() {
        var _ref35,
          _ref35$forceUpdate,
          e,
          _args48 = arguments;
        return _regenerator.default.wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                _ref35 = _args48.length > 0 && _args48[0] !== undefined ? _args48[0] : {}, _ref35$forceUpdate = _ref35.forceUpdate, e = _ref35$forceUpdate === void 0 ? !1 : _ref35$forceUpdate;
                _context48.next = 3;
                return this.ensureClientKey({
                  forceUpdate: e
                });
              case 3:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));
      function prepare() {
        return _prepare3.apply(this, arguments);
      }
      return prepare;
    }()
  }, {
    key: "platformGetSignOption",
    value: function () {
      var _platformGetSignOption2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee49() {
        var _yield$this$appUtils$2, e, t;
        return _regenerator.default.wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                _context49.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify({})
                });
              case 2:
                _yield$this$appUtils$2 = _context49.sent;
                e = _yield$this$appUtils$2.data;
                t = _yield$this$appUtils$2.key;
                return _context49.abrupt("return", {
                  verifyClientSign: e,
                  encryptKeyId: t
                });
              case 6:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));
      function platformGetSignOption() {
        return _platformGetSignOption2.apply(this, arguments);
      }
      return platformGetSignOption;
    }()
  }, {
    key: "platformEncryptData",
    value: function () {
      var _platformEncryptData2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee50(e) {
        var _yield$this$appUtils$3, t, n, s;
        return _regenerator.default.wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                _context50.next = 2;
                return this.appUtils.encrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: JSON.stringify(e)
                });
              case 2:
                _yield$this$appUtils$3 = _context50.sent;
                t = _yield$this$appUtils$3.data;
                n = _yield$this$appUtils$3.key;
                s = {
                  secretType: this.secretType,
                  encryptKeyId: n
                };
                return _context50.abrupt("return", this.secretType === Kt ? {
                  content: e,
                  _uniCloudOptions: s
                } : {
                  content: t,
                  _uniCloudOptions: s
                });
              case 7:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));
      function platformEncryptData(_x37) {
        return _platformEncryptData2.apply(this, arguments);
      }
      return platformEncryptData;
    }()
  }, {
    key: "platformDecryptResult",
    value: function () {
      var _platformDecryptResult2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee51(e) {
        var t, _e$_uniCloudOptions, n, s, r;
        return _regenerator.default.wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                t = e.content;
                _e$_uniCloudOptions = e._uniCloudOptions;
                n = _e$_uniCloudOptions === void 0 ? {} : _e$_uniCloudOptions;
                s = n.encryptKeyId;
                _context51.next = 6;
                return this.appUtils.decrypt({
                  provider: this.provider,
                  spaceId: this.spaceId,
                  data: t,
                  key: s
                });
              case 6:
                r = _context51.sent;
                return _context51.abrupt("return", JSON.parse(r.data));
              case 8:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));
      function platformDecryptResult(_x38) {
        return _platformDecryptResult2.apply(this, arguments);
      }
      return platformDecryptResult;
    }()
  }, {
    key: "isClientKeyNotFound",
    value: function isClientKeyNotFound() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = e.result || {};
      return 70009 === t.errCode && "uni-secure-network" === t.errSubject;
    }
  }]);
  return Un;
}($t);
function Nn() {
  var _ref36 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref36.secretType;
  return e === Ft || e === Kt || e === jt;
}
function Dn() {
  var _ref37 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref37.name,
    _ref37$data = _ref37.data,
    t = _ref37$data === void 0 ? {} : _ref37$data;
  return "app" === P && "DCloud-clientDB" === e && "encryption" === t.redirectTo && "getAppClientKey" === t.action;
}
function Mn() {
  var _ref38 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref38.provider,
    t = _ref38.spaceId,
    n = _ref38.functionName;
  var _ae = ae(),
    s = _ae.appId,
    r = _ae.uniPlatform,
    i = _ae.osName;
  var o = r;
  "app" === r && (o = i);
  var a = function () {
    var _ref39 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      e = _ref39.provider,
      t = _ref39.spaceId;
    var n = A;
    if (!n) return {};
    e = function (e) {
      return "tencent" === e ? "tcb" : e;
    }(e);
    var s = n.find(function (n) {
      return n.provider === e && n.spaceId === t;
    });
    return s && s.config;
  }({
    provider: e,
    spaceId: t
  });
  if (!a || !a.accessControl || !a.accessControl.enable) return !1;
  var c = a.accessControl.function || {},
    u = Object.keys(c);
  if (0 === u.length) return !0;
  var h = function (e, t) {
    var n, s, r;
    for (var _i2 = 0; _i2 < e.length; _i2++) {
      var _o2 = e[_i2];
      _o2 !== t ? "*" !== _o2 ? _o2.split(",").map(function (e) {
        return e.trim();
      }).indexOf(t) > -1 && (s = _o2) : r = _o2 : n = _o2;
    }
    return n || s || r;
  }(u, n);
  if (!h) return !1;
  if ((c[h] || []).find(function () {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return e.appId === s && (e.platform || "").toLowerCase() === o.toLowerCase();
  })) return !0;
  throw console.error("\u6B64\u5E94\u7528[appId: ".concat(s, ", platform: ").concat(o, "]\u4E0D\u5728\u4E91\u7AEF\u914D\u7F6E\u7684\u5141\u8BB8\u8BBF\u95EE\u7684\u5E94\u7528\u5217\u8868\u5185\uFF0C\u53C2\u8003\uFF1Ahttps://uniapp.dcloud.net.cn/uniCloud/secure-network.html#verify-client")), Cn(An);
}
function qn(_ref40) {
  var e = _ref40.functionName,
    t = _ref40.result,
    n = _ref40.logPvd;
  if (S && this.__dev__.debugLog && t && t.requestId) {
    var _s12 = JSON.stringify({
      spaceId: this.config.spaceId,
      functionName: e,
      requestId: t.requestId
    });
    console.log("[".concat(n, "-request]").concat(_s12, "[/").concat(n, "-request]"));
  }
}
function Fn(e) {
  var t = e.callFunction,
    n = function n(_n9) {
      var _this19 = this;
      var s = _n9.name;
      _n9.data = Lt.call(e, {
        data: _n9.data
      });
      var r = {
          aliyun: "aliyun",
          tencent: "tcb",
          tcb: "tcb",
          alipay: "alipay"
        }[this.config.provider],
        i = Nn(_n9),
        o = Dn(_n9),
        a = i || o;
      return t.call(this, _n9).then(function (e) {
        return e.errCode = 0, !a && qn.call(_this19, {
          functionName: s,
          result: e,
          logPvd: r
        }), Promise.resolve(e);
      }, function (e) {
        return !a && qn.call(_this19, {
          functionName: s,
          result: e,
          logPvd: r
        }), e && e.message && (e.message = function () {
          var _ref41 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref41$message = _ref41.message,
            e = _ref41$message === void 0 ? "" : _ref41$message,
            _ref41$extraInfo = _ref41.extraInfo,
            t = _ref41$extraInfo === void 0 ? {} : _ref41$extraInfo,
            _ref41$formatter = _ref41.formatter,
            n = _ref41$formatter === void 0 ? [] : _ref41$formatter;
          for (var _s13 = 0; _s13 < n.length; _s13++) {
            var _n$_s = n[_s13],
              _r6 = _n$_s.rule,
              _i3 = _n$_s.content,
              _o3 = _n$_s.mode,
              _a = e.match(_r6);
            if (!_a) continue;
            var _c = _i3;
            for (var _e19 = 1; _e19 < _a.length; _e19++) {
              _c = Mt(_c, "{$".concat(_e19, "}"), _a[_e19]);
            }
            for (var _e20 in t) {
              _c = Mt(_c, "{".concat(_e20, "}"), t[_e20]);
            }
            return "replace" === _o3 ? _c : e + _c;
          }
          return e;
        }({
          message: "[".concat(_n9.name, "]: ").concat(e.message),
          formatter: Ut,
          extraInfo: {
            functionName: s
          }
        })), Promise.reject(e);
      });
    };
  e.callFunction = function (t) {
    var _e$config = e.config,
      s = _e$config.provider,
      r = _e$config.spaceId,
      i = t.name;
    var o, a;
    if (t.data = t.data || {}, S && e.__dev__.debugInfo && !e.__dev__.debugInfo.forceRemote && C ? (e._callCloudFunction || (e._callCloudFunction = n, e._callLocalFunction = Rt), o = Rt) : o = n, o = o.bind(e), Dn(t)) a = n.call(e, t);else if (function (_ref42) {
      var e = _ref42.name,
        _ref42$data = _ref42.data,
        t = _ref42$data === void 0 ? {} : _ref42$data;
      return "mp-weixin" === P && "uni-id-co" === e && "secureNetworkHandshakeByWeixin" === t.method;
    }(t)) a = o.call(e, t);else if (Nn(t)) {
      a = new On({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapEncryptDataCallFunction(n.bind(e))(t);
    } else if (Mn({
      provider: s,
      spaceId: r,
      functionName: i
    })) {
      a = new On({
        secretType: t.secretType,
        uniCloudIns: e
      }).wrapVerifyClientCallFunction(n.bind(e))(t);
    } else a = o(t);
    return Object.defineProperty(a, "result", {
      get: function get() {
        return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};
      }
    }), a.then(function (e) {
      return "undefined" != typeof UTSJSONObject && (e.result = new UTSJSONObject(e.result)), e;
    });
  };
}
On = "mp-weixin" !== P && "app" !== P ? /*#__PURE__*/function () {
  function _class2() {
    (0, _classCallCheck2.default)(this, _class2);
    throw Cn({
      message: "Platform ".concat(P, " is not supported by secure network")
    });
  }
  return (0, _createClass2.default)(_class2);
}() : k ? "mp-weixin" === P ? Ln : Un : /*#__PURE__*/function () {
  function _class3() {
    (0, _classCallCheck2.default)(this, _class3);
    throw Cn({
      message: "Platform ".concat(P, " is not enabled, please check whether secure network module is enabled in your manifest.json")
    });
  }
  return (0, _createClass2.default)(_class3);
}();
var Kn = Symbol("CLIENT_DB_INTERNAL");
function jn(e, t) {
  return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = Kn, e.inspect = null, e.__ob__ = void 0, new Proxy(e, {
    get: function get(e, n, s) {
      if ("_uniClient" === n) return null;
      if ("symbol" == (0, _typeof2.default)(n)) return e[n];
      if (n in e || "string" != typeof n) {
        var _t11 = e[n];
        return "function" == typeof _t11 ? _t11.bind(e) : _t11;
      }
      return t.get(e, n, s);
    }
  });
}
function $n(e) {
  return {
    on: function on(t, n) {
      e[t] = e[t] || [], e[t].indexOf(n) > -1 || e[t].push(n);
    },
    off: function off(t, n) {
      e[t] = e[t] || [];
      var s = e[t].indexOf(n);
      -1 !== s && e[t].splice(s, 1);
    }
  };
}
var Bn = ["db.Geo", "db.command", "command.aggregate"];
function Wn(e, t) {
  return Bn.indexOf("".concat(e, ".").concat(t)) > -1;
}
function Hn(e) {
  switch (f(e)) {
    case "array":
      return e.map(function (e) {
        return Hn(e);
      });
    case "object":
      return e._internalType === Kn || Object.keys(e).forEach(function (t) {
        e[t] = Hn(e[t]);
      }), e;
    case "regexp":
      return {
        $regexp: {
          source: e.source,
          flags: e.flags
        }
      };
    case "date":
      return {
        $date: e.toISOString()
      };
    default:
      return e;
  }
}
function zn(e) {
  return e && e.content && e.content.$method;
}
var Jn = /*#__PURE__*/function () {
  function Jn(e, t, n) {
    (0, _classCallCheck2.default)(this, Jn);
    this.content = e, this.prevStage = t || null, this.udb = null, this._database = n;
  }
  (0, _createClass2.default)(Jn, [{
    key: "toJSON",
    value: function toJSON() {
      var e = this;
      var t = [e.content];
      for (; e.prevStage;) {
        e = e.prevStage, t.push(e.content);
      }
      return {
        $db: t.reverse().map(function (e) {
          return {
            $method: e.$method,
            $param: Hn(e.$param)
          };
        })
      };
    }
  }, {
    key: "toString",
    value: function toString() {
      return JSON.stringify(this.toJSON());
    }
  }, {
    key: "getAction",
    value: function getAction() {
      var e = this.toJSON().$db.find(function (e) {
        return "action" === e.$method;
      });
      return e && e.$param && e.$param[0];
    }
  }, {
    key: "getCommand",
    value: function getCommand() {
      return {
        $db: this.toJSON().$db.filter(function (e) {
          return "action" !== e.$method;
        })
      };
    }
  }, {
    key: "isAggregate",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = zn(e),
          _n10 = zn(e.prevStage);
        if ("aggregate" === t && "collection" === _n10 || "pipeline" === t) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        if ("command" === zn(e)) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "isAggregateCommand",
    get: function get() {
      var e = this;
      for (; e;) {
        var t = zn(e),
          _n11 = zn(e.prevStage);
        if ("aggregate" === t && "command" === _n11) return !0;
        e = e.prevStage;
      }
      return !1;
    }
  }, {
    key: "getNextStageFn",
    value: function getNextStageFn(e) {
      var t = this;
      return function () {
        return Gn({
          $method: e,
          $param: Hn(Array.from(arguments))
        }, t, t._database);
      };
    }
  }, {
    key: "count",
    get: function get() {
      return this.isAggregate ? this.getNextStageFn("count") : function () {
        return this._send("count", Array.from(arguments));
      };
    }
  }, {
    key: "remove",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("remove") : function () {
        return this._send("remove", Array.from(arguments));
      };
    }
  }, {
    key: "get",
    value: function get() {
      return this._send("get", Array.from(arguments));
    }
  }, {
    key: "add",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("add") : function () {
        return this._send("add", Array.from(arguments));
      };
    }
  }, {
    key: "update",
    value: function update() {
      return this._send("update", Array.from(arguments));
    }
  }, {
    key: "end",
    value: function end() {
      return this._send("end", Array.from(arguments));
    }
  }, {
    key: "set",
    get: function get() {
      return this.isCommand ? this.getNextStageFn("set") : function () {
        throw new Error("JQL禁止使用set方法");
      };
    }
  }, {
    key: "_send",
    value: function _send(e, t) {
      var n = this.getAction(),
        s = this.getCommand();
      if (s.$db.push({
        $method: e,
        $param: Hn(t)
      }), S) {
        var _e21 = s.$db.find(function (e) {
            return "collection" === e.$method;
          }),
          _t12 = _e21 && _e21.$param;
        _t12 && 1 === _t12.length && "string" == typeof _e21.$param[0] && _e21.$param[0].indexOf(",") > -1 && console.warn("检测到使用JQL语法联表查询时，未使用getTemp先过滤主表数据，在主表数据量大的情况下可能会查询缓慢。\n- 如何优化请参考此文档：https://uniapp.dcloud.net.cn/uniCloud/jql?id=lookup-with-temp \n- 如果主表数据量很小请忽略此信息，项目发行时不会出现此提示。");
      }
      return this._database._callCloudFunction({
        action: n,
        command: s
      });
    }
  }]);
  return Jn;
}();
function Gn(e, t, n) {
  return jn(new Jn(e, t, n), {
    get: function get(e, t) {
      var s = "db";
      return e && e.content && (s = e.content.$method), Wn(s, t) ? Gn({
        $method: t
      }, e, n) : function () {
        return Gn({
          $method: t,
          $param: Hn(Array.from(arguments))
        }, e, n);
      };
    }
  });
}
function Vn(_ref43) {
  var e = _ref43.path,
    t = _ref43.method;
  return /*#__PURE__*/function () {
    function _class4() {
      (0, _classCallCheck2.default)(this, _class4);
      this.param = Array.from(arguments);
    }
    (0, _createClass2.default)(_class4, [{
      key: "toJSON",
      value: function toJSON() {
        return {
          $newDb: [].concat((0, _toConsumableArray2.default)(e.map(function (e) {
            return {
              $method: e
            };
          })), [{
            $method: t,
            $param: this.param
          }])
        };
      }
    }, {
      key: "toString",
      value: function toString() {
        return JSON.stringify(this.toJSON());
      }
    }]);
    return _class4;
  }();
}
function Yn(e) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return jn(new e(t), {
    get: function get(e, t) {
      return Wn("db", t) ? Gn({
        $method: t
      }, null, e) : function () {
        return Gn({
          $method: t,
          $param: Hn(Array.from(arguments))
        }, null, e);
      };
    }
  });
}
var Qn = /*#__PURE__*/function (_ref44) {
  (0, _inherits2.default)(Qn, _ref44);
  var _super11 = _createSuper(Qn);
  function Qn() {
    (0, _classCallCheck2.default)(this, Qn);
    return _super11.apply(this, arguments);
  }
  (0, _createClass2.default)(Qn, [{
    key: "_parseResult",
    value: function _parseResult(e) {
      return this._isJQL ? e.result : e;
    }
  }, {
    key: "_callCloudFunction",
    value: function _callCloudFunction(_ref45) {
      var _this20 = this;
      var e = _ref45.action,
        t = _ref45.command,
        n = _ref45.multiCommand,
        s = _ref45.queryList;
      function r(e, t) {
        if (n && s) for (var _n12 = 0; _n12 < s.length; _n12++) {
          var _r7 = s[_n12];
          _r7.udb && "function" == typeof _r7.udb.setResult && (t ? _r7.udb.setResult(t) : _r7.udb.setResult(e.result.dataList[_n12]));
        }
      }
      var i = this,
        o = this._isJQL ? "databaseForJQL" : "database";
      function a(e) {
        return i._callback("error", [e]), M(q(o, "fail"), e).then(function () {
          return M(q(o, "complete"), e);
        }).then(function () {
          return r(null, e), Y(j, {
            type: W,
            content: e
          }), Promise.reject(e);
        });
      }
      var c = M(q(o, "invoke")),
        u = this._uniClient;
      return c.then(function () {
        return u.callFunction({
          name: "DCloud-clientDB",
          type: h,
          data: {
            action: e,
            command: t,
            multiCommand: n
          }
        });
      }).then(function (e) {
        var _e$result = e.result,
          t = _e$result.code,
          n = _e$result.message,
          s = _e$result.token,
          c = _e$result.tokenExpired,
          _e$result$systemInfo = _e$result.systemInfo,
          u = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;
        if (u) for (var _e22 = 0; _e22 < u.length; _e22++) {
          var _u$_e = u[_e22],
            _t13 = _u$_e.level,
            _n13 = _u$_e.message,
            _s14 = _u$_e.detail,
            _r8 = console["app" === P && "warn" === _t13 ? "error" : _t13] || console.log;
          var _i4 = "[System Info]" + _n13;
          _s14 && (_i4 = "".concat(_i4, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s14)), _r8(_i4);
        }
        if (t) {
          return a(new te({
            code: t,
            message: n,
            requestId: e.requestId
          }));
        }
        e.result.errCode = e.result.errCode || e.result.code, e.result.errMsg = e.result.errMsg || e.result.message, s && c && (re({
          token: s,
          tokenExpired: c
        }), _this20._callbackAuth("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), _this20._callback("refreshToken", [{
          token: s,
          tokenExpired: c
        }]), Y(B, {
          token: s,
          tokenExpired: c
        }));
        var h = [{
          prop: "affectedDocs",
          tips: "affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"
        }, {
          prop: "code",
          tips: "code不再推荐使用，请使用errCode替代"
        }, {
          prop: "message",
          tips: "message不再推荐使用，请使用errMsg替代"
        }];
        var _loop2 = function _loop2(_t14) {
          var _h$_t = h[_t14],
            n = _h$_t.prop,
            s = _h$_t.tips;
          if (n in e.result) {
            var _t15 = e.result[n];
            Object.defineProperty(e.result, n, {
              get: function get() {
                return console.warn(s), _t15;
              }
            });
          }
        };
        for (var _t14 = 0; _t14 < h.length; _t14++) {
          _loop2(_t14);
        }
        return function (e) {
          return M(q(o, "success"), e).then(function () {
            return M(q(o, "complete"), e);
          }).then(function () {
            r(e, null);
            var t = i._parseResult(e);
            return Y(j, {
              type: W,
              content: t
            }), Promise.resolve(t);
          });
        }(e);
      }, function (e) {
        /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB");
        return a(new te({
          code: e.code || "SYSTEM_ERROR",
          message: e.message,
          requestId: e.requestId
        }));
      });
    }
  }]);
  return Qn;
}( /*#__PURE__*/function () {
  function _class5() {
    var _ref46 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref46$uniClient = _ref46.uniClient,
      e = _ref46$uniClient === void 0 ? {} : _ref46$uniClient,
      _ref46$isJQL = _ref46.isJQL,
      t = _ref46$isJQL === void 0 ? !1 : _ref46$isJQL;
    (0, _classCallCheck2.default)(this, _class5);
    this._uniClient = e, this._authCallBacks = {}, this._dbCallBacks = {}, e._isDefault && (this._dbCallBacks = L("_globalUniCloudDatabaseCallback")), t || (this.auth = $n(this._authCallBacks)), this._isJQL = t, Object.assign(this, $n(this._dbCallBacks)), this.env = jn({}, {
      get: function get(e, t) {
        return {
          $env: t
        };
      }
    }), this.Geo = jn({}, {
      get: function get(e, t) {
        return Vn({
          path: ["Geo"],
          method: t
        });
      }
    }), this.serverDate = Vn({
      path: [],
      method: "serverDate"
    }), this.RegExp = Vn({
      path: [],
      method: "RegExp"
    });
  }
  (0, _createClass2.default)(_class5, [{
    key: "getCloudEnv",
    value: function getCloudEnv(e) {
      if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");
      return {
        $env: e.replace("$cloudEnv_", "")
      };
    }
  }, {
    key: "_callback",
    value: function _callback(e, t) {
      var n = this._dbCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "_callbackAuth",
    value: function _callbackAuth(e, t) {
      var n = this._authCallBacks;
      n[e] && n[e].forEach(function (e) {
        e.apply(void 0, (0, _toConsumableArray2.default)(t));
      });
    }
  }, {
    key: "multiSend",
    value: function multiSend() {
      var e = Array.from(arguments),
        t = e.map(function (e) {
          var t = e.getAction(),
            n = e.getCommand();
          if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");
          return {
            action: t,
            command: n
          };
        });
      return this._callCloudFunction({
        multiCommand: t,
        queryList: e
      });
    }
  }]);
  return _class5;
}());
var Xn = "token无效，跳转登录页面",
  Zn = "token过期，跳转登录页面",
  es = {
    TOKEN_INVALID_TOKEN_EXPIRED: Zn,
    TOKEN_INVALID_INVALID_CLIENTID: Xn,
    TOKEN_INVALID: Xn,
    TOKEN_INVALID_WRONG_TOKEN: Xn,
    TOKEN_INVALID_ANONYMOUS_USER: Xn
  },
  ts = {
    "uni-id-token-expired": Zn,
    "uni-id-check-token-failed": Xn,
    "uni-id-token-not-exist": Xn,
    "uni-id-check-device-feature-failed": Xn
  };
function ns(e, t) {
  var n = "";
  return n = e ? "".concat(e, "/").concat(t) : t, n.replace(/^\//, "");
}
function ss() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var n = [],
    s = [];
  return e.forEach(function (e) {
    !0 === e.needLogin ? n.push(ns(t, e.path)) : !1 === e.needLogin && s.push(ns(t, e.path));
  }), {
    needLoginPage: n,
    notNeedLoginPage: s
  };
}
function rs(e) {
  return e.split("?")[0].replace(/^\//, "");
}
function is() {
  return function (e) {
    var t = e && e.$page && e.$page.fullPath || "";
    return t ? ("/" !== t.charAt(0) && (t = "/" + t), t) : t;
  }(function () {
    var e = getCurrentPages();
    return e[e.length - 1];
  }());
}
function os() {
  return rs(is());
}
function as() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (!e) return !1;
  if (!(t && t.list && t.list.length)) return !1;
  var n = t.list,
    s = rs(e);
  return n.some(function (e) {
    return e.pagePath === s;
  });
}
var cs = !!_pages.default.uniIdRouter;
var _ref47 = function () {
    var _ref28 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _pages.default,
      _ref28$pages = _ref28.pages,
      t = _ref28$pages === void 0 ? [] : _ref28$pages,
      _ref28$subPackages = _ref28.subPackages,
      n = _ref28$subPackages === void 0 ? [] : _ref28$subPackages,
      _ref28$uniIdRouter = _ref28.uniIdRouter,
      s = _ref28$uniIdRouter === void 0 ? {} : _ref28$uniIdRouter,
      _ref28$tabBar = _ref28.tabBar,
      r = _ref28$tabBar === void 0 ? {} : _ref28$tabBar;
    var i = s.loginPage,
      _s$needLogin = s.needLogin,
      o = _s$needLogin === void 0 ? [] : _s$needLogin,
      _s$resToLogin = s.resToLogin,
      a = _s$resToLogin === void 0 ? !0 : _s$resToLogin,
      _ss = ss(t),
      c = _ss.needLoginPage,
      u = _ss.notNeedLoginPage,
      _ref30 = function () {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var t = [],
          n = [];
        return e.forEach(function (e) {
          var s = e.root,
            _e$pages = e.pages,
            r = _e$pages === void 0 ? [] : _e$pages,
            _ss2 = ss(r, s),
            i = _ss2.needLoginPage,
            o = _ss2.notNeedLoginPage;
          t.push.apply(t, (0, _toConsumableArray2.default)(i)), n.push.apply(n, (0, _toConsumableArray2.default)(o));
        }), {
          needLoginPage: t,
          notNeedLoginPage: n
        };
      }(n),
      h = _ref30.needLoginPage,
      l = _ref30.notNeedLoginPage;
    return {
      loginPage: i,
      routerNeedLogin: o,
      resToLogin: a,
      needLoginPage: [].concat((0, _toConsumableArray2.default)(c), (0, _toConsumableArray2.default)(h)),
      notNeedLoginPage: [].concat((0, _toConsumableArray2.default)(u), (0, _toConsumableArray2.default)(l)),
      loginPageInTabBar: as(i, r)
    };
  }(),
  us = _ref47.loginPage,
  hs = _ref47.routerNeedLogin,
  ls = _ref47.resToLogin,
  ds = _ref47.needLoginPage,
  ps = _ref47.notNeedLoginPage,
  fs = _ref47.loginPageInTabBar;
if (ds.indexOf(us) > -1) throw new Error("Login page [".concat(us, "] should not be \"needLogin\", please check your pages.json"));
function gs(e) {
  var t = os();
  if ("/" === e.charAt(0)) return e;
  var _e$split = e.split("?"),
    _e$split2 = (0, _slicedToArray2.default)(_e$split, 2),
    n = _e$split2[0],
    s = _e$split2[1],
    r = n.replace(/^\//, "").split("/"),
    i = t.split("/");
  i.pop();
  for (var _e23 = 0; _e23 < r.length; _e23++) {
    var _t16 = r[_e23];
    ".." === _t16 ? i.pop() : "." !== _t16 && i.push(_t16);
  }
  return "" === i[0] && i.shift(), "/" + i.join("/") + (s ? "?" + s : "");
}
function ms(e) {
  var t = rs(gs(e));
  return !(ps.indexOf(t) > -1) && (ds.indexOf(t) > -1 || hs.some(function (t) {
    return function (e, t) {
      return new RegExp(t).test(e);
    }(e, t);
  }));
}
function ys(_ref48) {
  var e = _ref48.redirect;
  var t = rs(e),
    n = rs(us);
  return os() !== n && t !== n;
}
function _s() {
  var _ref49 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref49.api,
    t = _ref49.redirect;
  if (!t || !ys({
    redirect: t
  })) return;
  var n = function (e, t) {
    return "/" !== e.charAt(0) && (e = "/" + e), t ? e.indexOf("?") > -1 ? e + "&uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e + "?uniIdRedirectUrl=".concat(encodeURIComponent(t)) : e;
  }(us, t);
  fs ? "navigateTo" !== e && "redirectTo" !== e || (e = "switchTab") : "switchTab" === e && (e = "navigateTo");
  var s = {
    navigateTo: uni.navigateTo,
    redirectTo: uni.redirectTo,
    switchTab: uni.switchTab,
    reLaunch: uni.reLaunch
  };
  setTimeout(function () {
    s[e]({
      url: n
    });
  }, 0);
}
function ws() {
  var _ref50 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    e = _ref50.url;
  var t = {
      abortLoginPageJump: !1,
      autoToLoginPage: !1
    },
    n = function () {
      var _se3 = se(),
        e = _se3.token,
        t = _se3.tokenExpired;
      var n;
      if (e) {
        if (t < Date.now()) {
          var _e24 = "uni-id-token-expired";
          n = {
            errCode: _e24,
            errMsg: ts[_e24]
          };
        }
      } else {
        var _e25 = "uni-id-check-token-failed";
        n = {
          errCode: _e25,
          errMsg: ts[_e25]
        };
      }
      return n;
    }();
  if (ms(e) && n) {
    n.uniIdRedirectUrl = e;
    if (J($).length > 0) return setTimeout(function () {
      Y($, n);
    }, 0), t.abortLoginPageJump = !0, t;
    t.autoToLoginPage = !0;
  }
  return t;
}
function vs() {
  !function () {
    var e = is(),
      _ws = ws({
        url: e
      }),
      t = _ws.abortLoginPageJump,
      n = _ws.autoToLoginPage;
    t || n && _s({
      api: "redirectTo",
      redirect: e
    });
  }();
  var e = ["navigateTo", "redirectTo", "reLaunch", "switchTab"];
  var _loop3 = function _loop3(_t17) {
    var n = e[_t17];
    uni.addInterceptor(n, {
      invoke: function invoke(e) {
        var _ws2 = ws({
            url: e.url
          }),
          t = _ws2.abortLoginPageJump,
          s = _ws2.autoToLoginPage;
        return t ? e : s ? (_s({
          api: n,
          redirect: gs(e.url)
        }), !1) : e;
      }
    });
  };
  for (var _t17 = 0; _t17 < e.length; _t17++) {
    _loop3(_t17);
  }
}
function Is() {
  this.onResponse(function (e) {
    var t = e.type,
      n = e.content;
    var s = !1;
    switch (t) {
      case "cloudobject":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref51 = e || {},
            t = _ref51.errCode;
          return t in ts;
        }(n);
        break;
      case "clientdb":
        s = function (e) {
          if ("object" != (0, _typeof2.default)(e)) return !1;
          var _ref52 = e || {},
            t = _ref52.errCode;
          return t in es;
        }(n);
    }
    s && function () {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var t = J($);
      Z().then(function () {
        var n = is();
        if (n && ys({
          redirect: n
        })) return t.length > 0 ? Y($, Object.assign({
          uniIdRedirectUrl: n
        }, e)) : void (us && _s({
          api: "navigateTo",
          redirect: n
        }));
      });
    }(n);
  });
}
function Ss(e) {
  !function (e) {
    e.onResponse = function (e) {
      G(j, e);
    }, e.offResponse = function (e) {
      V(j, e);
    };
  }(e), function (e) {
    e.onNeedLogin = function (e) {
      G($, e);
    }, e.offNeedLogin = function (e) {
      V($, e);
    }, cs && (L("_globalUniCloudStatus").needLoginInit || (L("_globalUniCloudStatus").needLoginInit = !0, Z().then(function () {
      vs.call(e);
    }), ls && Is.call(e)));
  }(e), function (e) {
    e.onRefreshToken = function (e) {
      G(B, e);
    }, e.offRefreshToken = function (e) {
      V(B, e);
    };
  }(e);
}
var bs;
var ks = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  As = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;
function Ps() {
  var e = se().token || "",
    t = e.split(".");
  if (!e || 3 !== t.length) return {
    uid: null,
    role: [],
    permission: [],
    tokenExpired: 0
  };
  var n;
  try {
    n = JSON.parse((s = t[1], decodeURIComponent(bs(s).split("").map(function (e) {
      return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
    }).join(""))));
  } catch (e) {
    throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);
  }
  var s;
  return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;
}
bs = "function" != typeof atob ? function (e) {
  if (e = String(e).replace(/[\t\n\f\r ]+/g, ""), !As.test(e)) throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");
  var t;
  e += "==".slice(2 - (3 & e.length));
  for (var n, s, r = "", i = 0; i < e.length;) {
    t = ks.indexOf(e.charAt(i++)) << 18 | ks.indexOf(e.charAt(i++)) << 12 | (n = ks.indexOf(e.charAt(i++))) << 6 | (s = ks.indexOf(e.charAt(i++))), r += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === s ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
  }
  return r;
} : atob;
var Ts = n(function (e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = "chooseAndUploadFile:ok",
      s = "chooseAndUploadFile:fail";
    function r(e, t) {
      return e.tempFiles.forEach(function (e, n) {
        e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));
      }), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {
        return e.path;
      })), e;
    }
    function i(e, t, _ref53) {
      var s = _ref53.onChooseFile,
        r = _ref53.onUploadProgress;
      return t.then(function (e) {
        if (s) {
          var _t18 = s(e);
          if (void 0 !== _t18) return Promise.resolve(_t18).then(function (t) {
            return void 0 === t ? e : t;
          });
        }
        return e;
      }).then(function (t) {
        return !1 === t ? {
          errMsg: n,
          tempFilePaths: [],
          tempFiles: []
        } : function (e, t) {
          var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
          var r = arguments.length > 3 ? arguments[3] : undefined;
          (t = Object.assign({}, t)).errMsg = n;
          var i = t.tempFiles,
            o = i.length;
          var a = 0;
          return new Promise(function (n) {
            for (; a < s;) {
              c();
            }
            function c() {
              var s = a++;
              if (s >= o) return void (!i.find(function (e) {
                return !e.url && !e.errMsg;
              }) && n(t));
              var u = i[s];
              e.uploadFile({
                provider: u.provider,
                filePath: u.path,
                cloudPath: u.cloudPath,
                fileType: u.fileType,
                cloudPathAsRealPath: u.cloudPathAsRealPath,
                onUploadProgress: function onUploadProgress(e) {
                  e.index = s, e.tempFile = u, e.tempFilePath = u.path, r && r(e);
                }
              }).then(function (e) {
                u.url = e.fileID, s < o && c();
              }).catch(function (e) {
                u.errMsg = e.errMsg || e.message, s < o && c();
              });
            }
          });
        }(e, t, 5, r);
      });
    }
    t.initChooseAndUploadFile = function (e) {
      return function () {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          type: "all"
        };
        return "image" === t.type ? i(e, function (e) {
          var t = e.count,
            n = e.sizeType,
            _e$sourceType = e.sourceType,
            i = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,
            o = e.extension;
          return new Promise(function (e, a) {
            uni.chooseImage({
              count: t,
              sizeType: n,
              sourceType: i,
              extension: o,
              success: function success(t) {
                e(r(t, "image"));
              },
              fail: function fail(e) {
                a({
                  errMsg: e.errMsg.replace("chooseImage:fail", s)
                });
              }
            });
          });
        }(t), t) : "video" === t.type ? i(e, function (e) {
          var t = e.camera,
            n = e.compressed,
            i = e.maxDuration,
            _e$sourceType2 = e.sourceType,
            o = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,
            a = e.extension;
          return new Promise(function (e, c) {
            uni.chooseVideo({
              camera: t,
              compressed: n,
              maxDuration: i,
              sourceType: o,
              extension: a,
              success: function success(t) {
                var n = t.tempFilePath,
                  s = t.duration,
                  i = t.size,
                  o = t.height,
                  a = t.width;
                e(r({
                  errMsg: "chooseVideo:ok",
                  tempFilePaths: [n],
                  tempFiles: [{
                    name: t.tempFile && t.tempFile.name || "",
                    path: n,
                    size: i,
                    type: t.tempFile && t.tempFile.type || "",
                    width: a,
                    height: o,
                    duration: s,
                    fileType: "video",
                    cloudPath: ""
                  }]
                }, "video"));
              },
              fail: function fail(e) {
                c({
                  errMsg: e.errMsg.replace("chooseVideo:fail", s)
                });
              }
            });
          });
        }(t), t) : i(e, function (e) {
          var t = e.count,
            n = e.extension;
          return new Promise(function (e, i) {
            var o = uni.chooseFile;
            if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (o = wx.chooseMessageFile), "function" != typeof o) return i({
              errMsg: s + " 请指定 type 类型，该平台仅支持选择 image 或 video。"
            });
            o({
              type: "all",
              count: t,
              extension: n,
              success: function success(t) {
                e(r(t));
              },
              fail: function fail(e) {
                i({
                  errMsg: e.errMsg.replace("chooseFile:fail", s)
                });
              }
            });
          });
        }(t), t);
      };
    };
  }),
  Cs = t(Ts);
var xs = "manual";
function Os(e) {
  return {
    props: {
      localdata: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      options: {
        type: [Object, Array],
        default: function _default() {
          return {};
        }
      },
      spaceInfo: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      collection: {
        type: [String, Array],
        default: ""
      },
      action: {
        type: String,
        default: ""
      },
      field: {
        type: String,
        default: ""
      },
      orderby: {
        type: String,
        default: ""
      },
      where: {
        type: [String, Object],
        default: ""
      },
      pageData: {
        type: String,
        default: "add"
      },
      pageCurrent: {
        type: Number,
        default: 1
      },
      pageSize: {
        type: Number,
        default: 20
      },
      getcount: {
        type: [Boolean, String],
        default: !1
      },
      gettree: {
        type: [Boolean, String],
        default: !1
      },
      gettreepath: {
        type: [Boolean, String],
        default: !1
      },
      startwith: {
        type: String,
        default: ""
      },
      limitlevel: {
        type: Number,
        default: 10
      },
      groupby: {
        type: String,
        default: ""
      },
      groupField: {
        type: String,
        default: ""
      },
      distinct: {
        type: [Boolean, String],
        default: !1
      },
      foreignKey: {
        type: String,
        default: ""
      },
      loadtime: {
        type: String,
        default: "auto"
      },
      manual: {
        type: Boolean,
        default: !1
      }
    },
    data: function data() {
      return {
        mixinDatacomLoading: !1,
        mixinDatacomHasMore: !1,
        mixinDatacomResData: [],
        mixinDatacomErrorMessage: "",
        mixinDatacomPage: {},
        mixinDatacomError: null
      };
    },
    created: function created() {
      var _this21 = this;
      this.mixinDatacomPage = {
        current: this.pageCurrent,
        size: this.pageSize,
        count: 0
      }, this.$watch(function () {
        var e = [];
        return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {
          e.push(_this21[t]);
        }), e;
      }, function (e, t) {
        if (_this21.loadtime === xs) return;
        var n = !1;
        var s = [];
        for (var _r9 = 2; _r9 < e.length; _r9++) {
          e[_r9] !== t[_r9] && (s.push(e[_r9]), n = !0);
        }
        e[0] !== t[0] && (_this21.mixinDatacomPage.current = _this21.pageCurrent), _this21.mixinDatacomPage.size = _this21.pageSize, _this21.onMixinDatacomPropsChange(n, s);
      });
    },
    methods: {
      onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {},
      mixinDatacomEasyGet: function mixinDatacomEasyGet() {
        var _this22 = this;
        var _ref54 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref54$getone = _ref54.getone,
          e = _ref54$getone === void 0 ? !1 : _ref54$getone,
          t = _ref54.success,
          n = _ref54.fail;
        this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomError = null, this.mixinDatacomGet().then(function (n) {
          _this22.mixinDatacomLoading = !1;
          var _n$result = n.result,
            s = _n$result.data,
            r = _n$result.count;
          _this22.getcount && (_this22.mixinDatacomPage.count = r), _this22.mixinDatacomHasMore = s.length < _this22.pageSize;
          var i = e ? s.length ? s[0] : void 0 : s;
          _this22.mixinDatacomResData = i, t && t(i);
        }).catch(function (e) {
          _this22.mixinDatacomLoading = !1, _this22.mixinDatacomErrorMessage = e, _this22.mixinDatacomError = e, n && n(e);
        }));
      },
      mixinDatacomGet: function mixinDatacomGet() {
        var _n14;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var n;
        t = t || {}, n = "undefined" != typeof __uniX && __uniX ? e.databaseForJQL(this.spaceInfo) : e.database(this.spaceInfo);
        var s = t.action || this.action;
        s && (n = n.action(s));
        var r = t.collection || this.collection;
        n = Array.isArray(r) ? (_n14 = n).collection.apply(_n14, (0, _toConsumableArray2.default)(r)) : n.collection(r);
        var i = t.where || this.where;
        i && Object.keys(i).length && (n = n.where(i));
        var o = t.field || this.field;
        o && (n = n.field(o));
        var a = t.foreignKey || this.foreignKey;
        a && (n = n.foreignKey(a));
        var c = t.groupby || this.groupby;
        c && (n = n.groupBy(c));
        var u = t.groupField || this.groupField;
        u && (n = n.groupField(u));
        !0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());
        var h = t.orderby || this.orderby;
        h && (n = n.orderBy(h));
        var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,
          d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,
          p = void 0 !== t.getcount ? t.getcount : this.getcount,
          f = void 0 !== t.gettree ? t.gettree : this.gettree,
          g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,
          m = {
            getCount: p
          },
          y = {
            limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel,
            startWith: void 0 !== t.startwith ? t.startwith : this.startwith
          };
        return f && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (l - 1)).limit(d).get(m), n;
      }
    }
  };
}
function Es(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    n = function (e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return e.customUI = t.customUI || e.customUI, e.parseSystemError = t.parseSystemError || e.parseSystemError, Object.assign(e.loadingOptions, t.loadingOptions), Object.assign(e.errorOptions, t.errorOptions), "object" == (0, _typeof2.default)(t.secretMethods) && (e.secretMethods = t.secretMethods), e;
    }({
      customUI: !1,
      loadingOptions: {
        title: "加载中...",
        mask: !0
      },
      errorOptions: {
        type: "modal",
        retry: !1
      }
    }, n);
    var _n15 = n,
      s = _n15.customUI,
      r = _n15.loadingOptions,
      i = _n15.errorOptions,
      o = _n15.parseSystemError,
      a = !s;
    return new Proxy({}, {
      get: function get(s, c) {
        switch (c) {
          case "toString":
            return "[object UniCloudObject]";
          case "toJSON":
            return {};
        }
        return function () {
          var _ref55 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            e = _ref55.fn,
            t = _ref55.interceptorName,
            n = _ref55.getCallbackArgs;
          return /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee52() {
            var _len2,
              s,
              _key2,
              r,
              i,
              o,
              _args = arguments;
            return _regenerator.default.wrap(function _callee52$(_context52) {
              while (1) {
                switch (_context52.prev = _context52.next) {
                  case 0:
                    for (_len2 = _args.length, s = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                      s[_key2] = _args[_key2];
                    }
                    r = n ? n({
                      params: s
                    }) : {};
                    _context52.prev = 2;
                    _context52.next = 5;
                    return M(q(t, "invoke"), _objectSpread({}, r));
                  case 5:
                    _context52.next = 7;
                    return e.apply(void 0, s);
                  case 7:
                    i = _context52.sent;
                    _context52.next = 10;
                    return M(q(t, "success"), _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 10:
                    return _context52.abrupt("return", i);
                  case 13:
                    _context52.prev = 13;
                    _context52.t0 = _context52["catch"](2);
                    o = _context52.t0;
                    _context52.next = 18;
                    return M(q(t, "fail"), _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }));
                  case 18:
                    throw o;
                  case 19:
                    _context52.prev = 19;
                    _context52.next = 22;
                    return M(q(t, "complete"), o ? _objectSpread(_objectSpread({}, r), {}, {
                      error: o
                    }) : _objectSpread(_objectSpread({}, r), {}, {
                      result: i
                    }));
                  case 22:
                    return _context52.finish(19);
                  case 23:
                  case "end":
                    return _context52.stop();
                }
              }
            }, _callee52, null, [[2, 13, 19, 23]]);
          }));
        }({
          fn: function () {
            var _s15 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee54() {
              var l,
                _len3,
                h,
                _key3,
                d,
                p,
                _ref57,
                f,
                g,
                m,
                y,
                _e26,
                _yield,
                _t19,
                _n16,
                _args4 = arguments;
              return _regenerator.default.wrap(function _callee54$(_context54) {
                while (1) {
                  switch (_context54.prev = _context54.next) {
                    case 0:
                      a && uni.showLoading({
                        title: r.title,
                        mask: r.mask
                      });
                      for (_len3 = _args4.length, h = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                        h[_key3] = _args4[_key3];
                      }
                      d = {
                        name: t,
                        type: u,
                        data: {
                          method: c,
                          params: h
                        }
                      };
                      "object" == (0, _typeof2.default)(n.secretMethods) && function (e, t) {
                        var n = t.data.method,
                          s = e.secretMethods || {},
                          r = s[n] || s["*"];
                        r && (t.secretType = r);
                      }(n, d);
                      p = !1;
                      _context54.prev = 5;
                      _context54.next = 8;
                      return e.callFunction(d);
                    case 8:
                      l = _context54.sent;
                      _context54.next = 14;
                      break;
                    case 11:
                      _context54.prev = 11;
                      _context54.t0 = _context54["catch"](5);
                      p = !0, l = {
                        result: new te(_context54.t0)
                      };
                    case 14:
                      _ref57 = l.result || {}, f = _ref57.errSubject, g = _ref57.errCode, m = _ref57.errMsg, y = _ref57.newToken;
                      if (!(a && uni.hideLoading(), y && y.token && y.tokenExpired && (re(y), Y(B, _objectSpread({}, y))), g)) {
                        _context54.next = 39;
                        break;
                      }
                      _e26 = m;
                      if (!(p && o)) {
                        _context54.next = 24;
                        break;
                      }
                      _context54.next = 20;
                      return o({
                        objectName: t,
                        methodName: c,
                        params: h,
                        errSubject: f,
                        errCode: g,
                        errMsg: m
                      });
                    case 20:
                      _context54.t1 = _context54.sent.errMsg;
                      if (_context54.t1) {
                        _context54.next = 23;
                        break;
                      }
                      _context54.t1 = m;
                    case 23:
                      _e26 = _context54.t1;
                    case 24:
                      if (!a) {
                        _context54.next = 37;
                        break;
                      }
                      if (!("toast" === i.type)) {
                        _context54.next = 29;
                        break;
                      }
                      uni.showToast({
                        title: _e26,
                        icon: "none"
                      });
                      _context54.next = 37;
                      break;
                    case 29:
                      if (!("modal" !== i.type)) {
                        _context54.next = 31;
                        break;
                      }
                      throw new Error("Invalid errorOptions.type: ".concat(i.type));
                    case 31:
                      _context54.next = 33;
                      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee53() {
                        var _ref59,
                          e,
                          t,
                          n,
                          s,
                          r,
                          _args2 = arguments;
                        return _regenerator.default.wrap(function _callee53$(_context53) {
                          while (1) {
                            switch (_context53.prev = _context53.next) {
                              case 0:
                                _ref59 = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {}, e = _ref59.title, t = _ref59.content, n = _ref59.showCancel, s = _ref59.cancelText, r = _ref59.confirmText;
                                return _context53.abrupt("return", new Promise(function (i, o) {
                                  uni.showModal({
                                    title: e,
                                    content: t,
                                    showCancel: n,
                                    cancelText: s,
                                    confirmText: r,
                                    success: function success(e) {
                                      i(e);
                                    },
                                    fail: function fail() {
                                      i({
                                        confirm: !1,
                                        cancel: !0
                                      });
                                    }
                                  });
                                }));
                              case 2:
                              case "end":
                                return _context53.stop();
                            }
                          }
                        }, _callee53);
                      }))({
                        title: "提示",
                        content: _e26,
                        showCancel: i.retry,
                        cancelText: "取消",
                        confirmText: i.retry ? "重试" : "确定"
                      });
                    case 33:
                      _yield = _context54.sent;
                      _t19 = _yield.confirm;
                      if (!(i.retry && _t19)) {
                        _context54.next = 37;
                        break;
                      }
                      return _context54.abrupt("return", s.apply(void 0, h));
                    case 37:
                      _n16 = new te({
                        subject: f,
                        code: g,
                        message: m,
                        requestId: l.requestId
                      });
                      throw _n16.detail = l.result, Y(j, {
                        type: z,
                        content: _n16
                      }), _n16;
                    case 39:
                      return _context54.abrupt("return", (Y(j, {
                        type: z,
                        content: l.result
                      }), l.result));
                    case 40:
                    case "end":
                      return _context54.stop();
                  }
                }
              }, _callee54, null, [[5, 11]]);
            }));
            function s() {
              return _s15.apply(this, arguments);
            }
            return s;
          }(),
          interceptorName: "callObject",
          getCallbackArgs: function getCallbackArgs() {
            var _ref60 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              e = _ref60.params;
            return {
              objectName: t,
              methodName: c,
              params: e
            };
          }
        });
      }
    });
  };
}
function Ls(e) {
  return L("_globalUniCloudSecureNetworkCache__{spaceId}".replace("{spaceId}", e.config.spaceId));
}
function Rs() {
  return _Rs.apply(this, arguments);
}
function _Rs() {
  _Rs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee57() {
    var _ref72,
      e,
      _ref72$callLoginByWei,
      t,
      n,
      s,
      r,
      _args7 = arguments;
    return _regenerator.default.wrap(function _callee57$(_context57) {
      while (1) {
        switch (_context57.prev = _context57.next) {
          case 0:
            _ref72 = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {}, e = _ref72.openid, _ref72$callLoginByWei = _ref72.callLoginByWeixin, t = _ref72$callLoginByWei === void 0 ? !1 : _ref72$callLoginByWei;
            n = Ls(this);
            if (!("mp-weixin" !== P)) {
              _context57.next = 4;
              break;
            }
            throw new Error("[SecureNetwork] API `initSecureNetworkByWeixin` is not supported on platform `".concat(P, "`"));
          case 4:
            if (!(e && t)) {
              _context57.next = 6;
              break;
            }
            throw new Error("[SecureNetwork] openid and callLoginByWeixin cannot be passed at the same time");
          case 6:
            if (!e) {
              _context57.next = 8;
              break;
            }
            return _context57.abrupt("return", (n.mpWeixinOpenid = e, {}));
          case 8:
            _context57.next = 10;
            return new Promise(function (e, t) {
              uni.login({
                success: function success(t) {
                  e(t.code);
                },
                fail: function fail(e) {
                  t(new Error(e.errMsg));
                }
              });
            });
          case 10:
            s = _context57.sent;
            r = this.importObject("uni-id-co", {
              customUI: !0
            });
            _context57.next = 14;
            return r.secureNetworkHandshakeByWeixin({
              code: s,
              callLoginByWeixin: t
            });
          case 14:
            n.mpWeixinCode = s;
            return _context57.abrupt("return", {
              code: s
            });
          case 16:
          case "end":
            return _context57.stop();
        }
      }
    }, _callee57, this);
  }));
  return _Rs.apply(this, arguments);
}
function Us(_x39) {
  return _Us.apply(this, arguments);
}
function _Us() {
  _Us = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee58(e) {
    var t;
    return _regenerator.default.wrap(function _callee58$(_context58) {
      while (1) {
        switch (_context58.prev = _context58.next) {
          case 0:
            t = Ls(this);
            return _context58.abrupt("return", (t.initPromise || (t.initPromise = Rs.call(this, e).then(function (e) {
              return e;
            }).catch(function (e) {
              throw delete t.initPromise, e;
            })), t.initPromise));
          case 2:
          case "end":
            return _context58.stop();
        }
      }
    }, _callee58, this);
  }));
  return _Us.apply(this, arguments);
}
function Ns(e) {
  return function () {
    var _ref61 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      t = _ref61.openid,
      _ref61$callLoginByWei = _ref61.callLoginByWeixin,
      n = _ref61$callLoginByWei === void 0 ? !1 : _ref61$callLoginByWei;
    return Us.call(e, {
      openid: t,
      callLoginByWeixin: n
    });
  };
}
function Ds(e) {
  var t = {
    getSystemInfo: uni.getSystemInfo,
    getPushClientId: uni.getPushClientId
  };
  return function (n) {
    return new Promise(function (s, r) {
      t[e](_objectSpread(_objectSpread({}, n), {}, {
        success: function success(e) {
          s(e);
        },
        fail: function fail(e) {
          r(e);
        }
      }));
    });
  };
}
var Ms = /*#__PURE__*/function (_ref62) {
  (0, _inherits2.default)(Ms, _ref62);
  var _super12 = _createSuper(Ms);
  function Ms() {
    var _this23;
    (0, _classCallCheck2.default)(this, Ms);
    _this23 = _super12.call(this), _this23._uniPushMessageCallback = _this23._receivePushMessage.bind((0, _assertThisInitialized2.default)(_this23)), _this23._currentMessageId = -1, _this23._payloadQueue = [];
    return _this23;
  }
  (0, _createClass2.default)(Ms, [{
    key: "init",
    value: function init() {
      var _this24 = this;
      return Promise.all([Ds("getSystemInfo")(), Ds("getPushClientId")()]).then(function () {
        var _ref63 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [],
          _ref64 = (0, _slicedToArray2.default)(_ref63, 2),
          _ref64$ = _ref64[0];
        _ref64$ = _ref64$ === void 0 ? {} : _ref64$;
        var e = _ref64$.appId,
          _ref64$2 = _ref64[1];
        _ref64$2 = _ref64$2 === void 0 ? {} : _ref64$2;
        var t = _ref64$2.cid;
        if (!e) throw new Error("Invalid appId, please check the manifest.json file");
        if (!t) throw new Error("Invalid push client id");
        _this24._appId = e, _this24._pushClientId = t, _this24._seqId = Date.now() + "-" + Math.floor(9e5 * Math.random() + 1e5), _this24.emit("open"), _this24._initMessageListener();
      }, function (e) {
        throw _this24.emit("error", e), _this24.close(), e;
      });
    }
  }, {
    key: "open",
    value: function () {
      var _open = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee55() {
        return _regenerator.default.wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                return _context55.abrupt("return", this.init());
              case 1:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this);
      }));
      function open() {
        return _open.apply(this, arguments);
      }
      return open;
    }()
  }, {
    key: "_isUniCloudSSE",
    value: function _isUniCloudSSE(e) {
      if ("receive" !== e.type) return !1;
      var t = e && e.data && e.data.payload;
      return !(!t || "UNI_CLOUD_SSE" !== t.channel || t.seqId !== this._seqId);
    }
  }, {
    key: "_receivePushMessage",
    value: function _receivePushMessage(e) {
      if (!this._isUniCloudSSE(e)) return;
      var t = e && e.data && e.data.payload,
        n = t.action,
        s = t.messageId,
        r = t.message;
      this._payloadQueue.push({
        action: n,
        messageId: s,
        message: r
      }), this._consumMessage();
    }
  }, {
    key: "_consumMessage",
    value: function _consumMessage() {
      var _this25 = this;
      for (;;) {
        var _e27 = this._payloadQueue.find(function (e) {
          return e.messageId === _this25._currentMessageId + 1;
        });
        if (!_e27) break;
        this._currentMessageId++, this._parseMessagePayload(_e27);
      }
    }
  }, {
    key: "_parseMessagePayload",
    value: function _parseMessagePayload(e) {
      var t = e.action,
        n = e.messageId,
        s = e.message;
      "end" === t ? this._end({
        messageId: n,
        message: s
      }) : "message" === t && this._appendMessage({
        messageId: n,
        message: s
      });
    }
  }, {
    key: "_appendMessage",
    value: function _appendMessage() {
      var _ref65 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref65.messageId,
        t = _ref65.message;
      this.emit("message", t);
    }
  }, {
    key: "_end",
    value: function _end() {
      var _ref66 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        e = _ref66.messageId,
        t = _ref66.message;
      this.emit("end", t), this.close();
    }
  }, {
    key: "_initMessageListener",
    value: function _initMessageListener() {
      uni.onPushMessage(this._uniPushMessageCallback);
    }
  }, {
    key: "_destroy",
    value: function _destroy() {
      uni.offPushMessage(this._uniPushMessageCallback);
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return {
        appId: this._appId,
        pushClientId: this._pushClientId,
        seqId: this._seqId
      };
    }
  }, {
    key: "close",
    value: function close() {
      this._destroy(), this.emit("close");
    }
  }]);
  return Ms;
}( /*#__PURE__*/function () {
  function _class6() {
    (0, _classCallCheck2.default)(this, _class6);
    this._callback = {};
  }
  (0, _createClass2.default)(_class6, [{
    key: "addListener",
    value: function addListener(e, t) {
      this._callback[e] || (this._callback[e] = []), this._callback[e].push(t);
    }
  }, {
    key: "on",
    value: function on(e, t) {
      return this.addListener(e, t);
    }
  }, {
    key: "removeListener",
    value: function removeListener(e, t) {
      if (!t) throw new Error('The "listener" argument must be of type function. Received undefined');
      var n = this._callback[e];
      if (!n) return;
      var s = function (e, t) {
        for (var _n17 = e.length - 1; _n17 >= 0; _n17--) {
          if (e[_n17] === t) return _n17;
        }
        return -1;
      }(n, t);
      n.splice(s, 1);
    }
  }, {
    key: "off",
    value: function off(e, t) {
      return this.removeListener(e, t);
    }
  }, {
    key: "removeAllListener",
    value: function removeAllListener(e) {
      delete this._callback[e];
    }
  }, {
    key: "emit",
    value: function emit(e) {
      var n = this._callback[e];
      for (var _len4 = arguments.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        t[_key4 - 1] = arguments[_key4];
      }
      if (n) for (var _e28 = 0; _e28 < n.length; _e28++) {
        n[_e28].apply(n, t);
      }
    }
  }]);
  return _class6;
}());
function qs(_x40, _x41) {
  return _qs.apply(this, arguments);
}
function _qs() {
  _qs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee59(e, t) {
    var n, _e32, s;
    return _regenerator.default.wrap(function _callee59$(_context59) {
      while (1) {
        switch (_context59.prev = _context59.next) {
          case 0:
            n = "http://".concat(e, ":").concat(t, "/system/ping");
            _context59.prev = 1;
            _context59.next = 4;
            return s = {
              url: n,
              timeout: 500
            }, new Promise(function (e, t) {
              ne.request(_objectSpread(_objectSpread({}, s), {}, {
                success: function success(t) {
                  e(t);
                },
                fail: function fail(e) {
                  t(e);
                }
              }));
            });
          case 4:
            _e32 = _context59.sent;
            return _context59.abrupt("return", !(!_e32.data || 0 !== _e32.data.code));
          case 8:
            _context59.prev = 8;
            _context59.t0 = _context59["catch"](1);
            return _context59.abrupt("return", !1);
          case 11:
          case "end":
            return _context59.stop();
        }
      }
    }, _callee59, null, [[1, 8]]);
  }));
  return _qs.apply(this, arguments);
}
function Fs(_x42) {
  return _Fs.apply(this, arguments);
}
function _Fs() {
  _Fs = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee61(e) {
    var _ae2, _e33, _t21, t, _t$debugInfo, n, s, _yield2, r, i, o;
    return _regenerator.default.wrap(function _callee61$(_context61) {
      while (1) {
        switch (_context61.prev = _context61.next) {
          case 0:
            if (S) {
              _context61.next = 2;
              break;
            }
            return _context61.abrupt("return", Promise.resolve());
          case 2:
            if ("app" === P) {
              _ae2 = ae(), _e33 = _ae2.osName, _t21 = _ae2.osVersion;
              "ios" === _e33 && function (e) {
                if (!e || "string" != typeof e) return 0;
                var t = e.match(/^(\d+)./);
                return t && t[1] ? parseInt(t[1]) : 0;
              }(_t21) >= 14 && console.warn("iOS 14及以上版本连接uniCloud本地调试服务需要允许客户端查找并连接到本地网络上的设备（仅开发期间需要，发行后不需要）");
            }
            t = e.__dev__;
            if (t.debugInfo) {
              _context61.next = 6;
              break;
            }
            return _context61.abrupt("return");
          case 6:
            _t$debugInfo = t.debugInfo;
            n = _t$debugInfo.address;
            s = _t$debugInfo.servePort;
            _context61.next = 11;
            return function () {
              var _ref73 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee60(e, t) {
                var n, _s16, _r10;
                return _regenerator.default.wrap(function _callee60$(_context60) {
                  while (1) {
                    switch (_context60.prev = _context60.next) {
                      case 0:
                        _s16 = 0;
                      case 1:
                        if (!(_s16 < e.length)) {
                          _context60.next = 11;
                          break;
                        }
                        _r10 = e[_s16];
                        _context60.next = 5;
                        return qs(_r10, t);
                      case 5:
                        if (!_context60.sent) {
                          _context60.next = 8;
                          break;
                        }
                        n = _r10;
                        return _context60.abrupt("break", 11);
                      case 8:
                        _s16++;
                        _context60.next = 1;
                        break;
                      case 11:
                        return _context60.abrupt("return", {
                          address: n,
                          port: t
                        });
                      case 12:
                      case "end":
                        return _context60.stop();
                    }
                  }
                }, _callee60);
              }));
              return function (_x43, _x44) {
                return _ref73.apply(this, arguments);
              };
            }()(n, s);
          case 11:
            _yield2 = _context61.sent;
            r = _yield2.address;
            if (!r) {
              _context61.next = 15;
              break;
            }
            return _context61.abrupt("return", (t.localAddress = r, void (t.localPort = s)));
          case 15:
            i = console["app" === P ? "error" : "warn"];
            o = "";
            if (!("remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, o = "当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。") : o = "无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。", o += "\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs\n- 检查是否错误的使用拦截器修改uni.request方法的参数", "web" === P && (o += "\n- 部分浏览器开启节流模式之后访问本地地址受限，请检查是否启用了节流模式"), 0 === P.indexOf("mp-") && (o += "\n- 小程序中如何使用uniCloud，请参考：https://uniapp.dcloud.net.cn/uniCloud/publish.html#useinmp"), !t.debugInfo.forceRemote)) {
              _context61.next = 19;
              break;
            }
            throw new Error(o);
          case 19:
            i(o);
          case 20:
          case "end":
            return _context61.stop();
        }
      }
    }, _callee61);
  }));
  return _Fs.apply(this, arguments);
}
function Ks(e) {
  e._initPromiseHub || (e._initPromiseHub = new v({
    createPromise: function createPromise() {
      var t = Promise.resolve();
      var n;
      n = 1, t = new Promise(function (e) {
        setTimeout(function () {
          e();
        }, n);
      });
      var s = e.auth();
      return t.then(function () {
        return s.getLoginState();
      }).then(function (e) {
        return e ? Promise.resolve() : s.signInAnonymously();
      });
    }
  }));
}
var js = {
  tcb: It,
  tencent: It,
  aliyun: de,
  private: bt,
  alipay: Et
};
var $s = new ( /*#__PURE__*/function () {
  function _class7() {
    (0, _classCallCheck2.default)(this, _class7);
  }
  (0, _createClass2.default)(_class7, [{
    key: "init",
    value: function init(e) {
      var t = {};
      var n = js[e.provider];
      if (!n) throw new Error("未提供正确的provider参数");
      t = n.init(e), S && function (e) {
        if (!S) return;
        var t = {};
        e.__dev__ = t, t.debugLog = S && ("web" === P && navigator.userAgent.indexOf("HBuilderX") > 0 || "app" === P);
        var n = T;
        n && !n.code && (t.debugInfo = n);
        var s = new v({
          createPromise: function createPromise() {
            return Fs(e);
          }
        });
        t.initLocalNetwork = function () {
          return s.exec();
        };
      }(t), Ks(t), Fn(t), function (e) {
        var t = e.uploadFile;
        e.uploadFile = function (e) {
          return t.call(this, e);
        };
      }(t), function (e) {
        e.database = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).database();
          if (this._database) return this._database;
          var n = Yn(Qn, {
            uniClient: e
          });
          return this._database = n, n;
        }, e.databaseForJQL = function (t) {
          if (t && Object.keys(t).length > 0) return e.init(t).databaseForJQL();
          if (this._databaseForJQL) return this._databaseForJQL;
          var n = Yn(Qn, {
            uniClient: e,
            isJQL: !0
          });
          return this._databaseForJQL = n, n;
        };
      }(t), function (e) {
        e.getCurrentUserInfo = Ps, e.chooseAndUploadFile = Cs.initChooseAndUploadFile(e), Object.assign(e, {
          get mixinDatacom() {
            return Os(e);
          }
        }), e.SSEChannel = Ms, e.initSecureNetworkByWeixin = Ns(e), e.importObject = Es(e);
      }(t);
      return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {
        if (!t[e]) return;
        var n = t[e];
        t[e] = function () {
          return n.apply(t, Array.from(arguments));
        }, t[e] = function (e, t) {
          return function (n) {
            var _this26 = this;
            var s = !1;
            if ("callFunction" === t) {
              var _e29 = n && n.type || c;
              s = _e29 !== c;
            }
            var r = "callFunction" === t && !s,
              i = this._initPromiseHub.exec();
            n = n || {};
            var _ee2 = ee(n),
              o = _ee2.success,
              a = _ee2.fail,
              u = _ee2.complete,
              h = i.then(function () {
                return s ? Promise.resolve() : M(q(t, "invoke"), n);
              }).then(function () {
                return e.call(_this26, n);
              }).then(function (e) {
                return s ? Promise.resolve(e) : M(q(t, "success"), e).then(function () {
                  return M(q(t, "complete"), e);
                }).then(function () {
                  return r && Y(j, {
                    type: H,
                    content: e
                  }), Promise.resolve(e);
                });
              }, function (e) {
                return s ? Promise.reject(e) : M(q(t, "fail"), e).then(function () {
                  return M(q(t, "complete"), e);
                }).then(function () {
                  return Y(j, {
                    type: H,
                    content: e
                  }), Promise.reject(e);
                });
              });
            if (!(o || a || u)) return h;
            h.then(function (e) {
              o && o(e), u && u(e), r && Y(j, {
                type: H,
                content: e
              });
            }, function (e) {
              a && a(e), u && u(e), r && Y(j, {
                type: H,
                content: e
              });
            });
          };
        }(t[e], e).bind(t);
      }), t.init = this.init, t;
    }
  }]);
  return _class7;
}())();
(function () {
  var e = C;
  var t = {};
  if (e && 1 === e.length) t = e[0], $s = $s.init(t), $s._isDefault = !0;else {
    var _t20 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo", "importObject"];
    var _n18;
    _n18 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : x ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t20.forEach(function (e) {
      $s[e] = function () {
        return console.error(_n18), Promise.reject(new te({
          code: "SYS_ERR",
          message: _n18
        }));
      };
    });
  }
  Object.assign($s, {
    get mixinDatacom() {
      return Os($s);
    }
  }), Ss($s), $s.addInterceptor = N, $s.removeInterceptor = D, $s.interceptObject = F, S && "web" === P && (window.uniCloud = $s);
})();
var Bs = $s;
exports.default = Bs;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 28:
/*!************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/@babel/runtime/regenerator/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! @babel/runtime/helpers/regeneratorRuntime */ 29)();
module.exports = runtime;

/***/ }),

/***/ 29:
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
function _regeneratorRuntime() {
  "use strict";

  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return e;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function define(t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function value(t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) {
              if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            }
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(_typeof(e) + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) {
      r.push(n);
    }
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) {
        "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
      }
    },
    stop: function stop() {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function complete(t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function finish(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    "catch": function _catch(t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 30:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 303:
/*!***********************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-id-pages/common/login-page.mixin.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _store = __webpack_require__(/*! @/uni_modules/uni-id-pages/common/store.js */ 82);
var _config = _interopRequireDefault(__webpack_require__(/*! @/uni_modules/uni-id-pages/config.js */ 83));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var mixin = {
  data: function data() {
    return {
      config: _config.default,
      uniIdRedirectUrl: '',
      isMounted: false
    };
  },
  onUnload: function onUnload() {},
  mounted: function mounted() {
    this.isMounted = true;
  },
  onLoad: function onLoad(e) {
    var _this = this;
    if (e.is_weixin_redirect) {
      uni.showLoading({
        mask: true
      });
      if (window.location.href.includes('#')) {
        // 将url通过 ? 分割获取后面的参数字符串 再通过 & 将每一个参数单独分割出来
        var paramsArr = window.location.href.split('?')[1].split('&');
        paramsArr.forEach(function (item) {
          var arr = item.split('=');
          if (arr[0] == 'code') {
            e.code = arr[1];
          }
        });
      }
      this.$nextTick(function (n) {
        // console.log(this.$refs.uniFabLogin);
        _this.$refs.uniFabLogin.login({
          code: e.code
        }, 'weixin');
      });
    }
    if (e.uniIdRedirectUrl) {
      this.uniIdRedirectUrl = decodeURIComponent(e.uniIdRedirectUrl);
    }
    if (getCurrentPages().length === 1) {
      uni.hideHomeButton();
      console.log('已隐藏：返回首页按钮');
    }
  },
  computed: {
    needAgreements: function needAgreements() {
      if (this.isMounted) {
        if (this.$refs.agreements) {
          return this.$refs.agreements.needAgreements;
        } else {
          return false;
        }
      }
    },
    agree: {
      get: function get() {
        if (this.isMounted) {
          if (this.$refs.agreements) {
            return this.$refs.agreements.isAgree;
          } else {
            return true;
          }
        }
      },
      set: function set(agree) {
        if (this.$refs.agreements) {
          this.$refs.agreements.isAgree = agree;
        } else {
          console.log('不存在 隐私政策协议组件');
        }
      }
    }
  },
  methods: {
    loginSuccess: function loginSuccess(e) {
      _store.mutations.loginSuccess(_objectSpread(_objectSpread({}, e), {}, {
        uniIdRedirectUrl: this.uniIdRedirectUrl
      }));
    }
  }
};
var _default = mixin;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 31:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 32:
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 328:
/*!************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-id-pages/pages/register/validator.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _password = _interopRequireDefault(__webpack_require__(/*! @/uni_modules/uni-id-pages/common/password.js */ 329));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = _objectSpread({
  "username": {
    "rules": [{
      required: true,
      errorMessage: '请输入用户名'
    }, {
      minLength: 3,
      maxLength: 32,
      errorMessage: '用户名长度在 {minLength} 到 {maxLength} 个字符'
    }, {
      validateFunction: function validateFunction(rule, value, data, callback) {
        // console.log(value);
        if (/^1\d{10}$/.test(value) || /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value)) {
          callback('用户名不能是：手机号或邮箱');
        }
        ;
        if (/^\d+$/.test(value)) {
          callback('用户名不能为纯数字');
        }
        ;
        if (/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(value)) {
          callback('用户名不能包含中文');
        }
        return true;
      }
    }],
    "label": "用户名"
  },
  "nickname": {
    "rules": [{
      minLength: 3,
      maxLength: 32,
      errorMessage: '昵称长度在 {minLength} 到 {maxLength} 个字符'
    }, {
      validateFunction: function validateFunction(rule, value, data, callback) {
        // console.log(value);
        if (/^1\d{10}$/.test(value) || /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(value)) {
          callback('昵称不能是：手机号或邮箱');
        }
        ;
        if (/^\d+$/.test(value)) {
          callback('昵称不能为纯数字');
        }
        ;
        if (/[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/.test(value)) {
          callback('昵称不能包含中文');
        }
        return true;
      }
    }],
    "label": "昵称"
  }
}, _password.default.getPwdRules());
exports.default = _default;

/***/ }),

/***/ 329:
/*!***************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-id-pages/common/password.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _config = _interopRequireDefault(__webpack_require__(/*! @/uni_modules/uni-id-pages/config.js */ 83));
// 导入配置

var passwordStrength = _config.default.passwordStrength;

// 密码强度表达式
var passwordRules = {
  // 密码必须包含大小写字母、数字和特殊符号
  super: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,
  // 密码必须包含字母、数字和特殊符号
  strong: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,
  // 密码必须为字母、数字和特殊符号任意两种的组合
  medium: /^(?![0-9]+$)(?![a-zA-Z]+$)(?![~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]+$)[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{8,16}$/,
  // 密码必须包含字母和数字
  weak: /^(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z~!@#$%^&*_\-+=`|\\(){}[\]:;"'<>,.?/]{6,16}$/
};
var ERROR = {
  normal: {
    noPwd: '请输入密码',
    noRePwd: '再次输入密码',
    rePwdErr: '两次输入密码不一致'
  },
  passwordStrengthError: {
    super: '密码必须包含大小写字母、数字和特殊符号，密码长度必须在8-16位之间',
    strong: '密码必须包含字母、数字和特殊符号，密码长度必须在8-16位之间',
    medium: '密码必须为字母、数字和特殊符号任意两种的组合，密码长度必须在8-16位之间',
    weak: '密码必须包含字母，密码长度必须在6-16位之间'
  }
};
function validPwd(password) {
  //强度校验
  if (passwordStrength && passwordRules[passwordStrength]) {
    if (!new RegExp(passwordRules[passwordStrength]).test(password)) {
      return ERROR.passwordStrengthError[passwordStrength];
    }
  }
  return true;
}
function getPwdRules() {
  var pwdName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'password';
  var rePwdName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'password2';
  var rules = {};
  rules[pwdName] = {
    rules: [{
      required: true,
      errorMessage: ERROR.normal.noPwd
    }, {
      validateFunction: function validateFunction(rule, value, data, callback) {
        var checkRes = validPwd(value);
        if (checkRes !== true) {
          callback(checkRes);
        }
        return true;
      }
    }]
  };
  if (rePwdName) {
    rules[rePwdName] = {
      rules: [{
        required: true,
        errorMessage: ERROR.normal.noRePwd
      }, {
        validateFunction: function validateFunction(rule, value, data, callback) {
          if (value != data[pwdName]) {
            callback(ERROR.normal.rePwdErr);
          }
          return true;
        }
      }]
    };
  }
  return rules;
}
var _default = {
  ERROR: ERROR,
  validPwd: validPwd,
  getPwdRules: getPwdRules
};
exports.default = _default;

/***/ }),

/***/ 33:
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ 13)["default"];
var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized.js */ 30);
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return assertThisInitialized(self);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 34:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 35:
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf.js */ 34);
var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ 16);
var isNativeFunction = __webpack_require__(/*! ./isNativeFunction.js */ 36);
var construct = __webpack_require__(/*! ./construct.js */ 15);
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _wrapNativeSuper(Class);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 36:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  try {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  } catch (e) {
    return typeof fn === "function";
  }
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 37:
/*!***********************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/pages.json?{"type":"origin-pages-json"} ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "pages": [{
    "path": "pages/index/index",
    "style": {
      "navigationBarTitleText": "首页"
    }
  }, {
    "path": "pages/cantect/cantect",
    "style": {
      "navigationBarTitleText": "商店",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/about/about",
    "style": {
      "navigationBarTitleText": "关于",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/mylogn/mylogn",
    "style": {
      "navigationBarTitleText": "我的",
      "enablePullDownRefresh": true
    }
  }, {
    "path": "pages/index/scenicSpot/index",
    "style": {
      "navigationBarTitleText": "景区门票",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/index/scenicSpot/details/index",
    "style": {
      "navigationBarTitleText": "门票详情",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/index/homestays/index",
    "style": {
      "navigationBarTitleText": "旅游规划",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/index/entertainment/index",
    "style": {
      "navigationBarTitleText": "餐饮娱乐",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/index/MicroTravel/index",
    "style": {
      "navigationBarTitleText": "城市微旅行",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/index/scenicSpot/scenicSpot/index",
    "style": {
      "navigationBarTitleText": "景区详情",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/index/scenicSpot/reservation/reservation",
    "style": {
      "navigationBarTitleText": "门票订单",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/index/lceCityImage/lceCityImage",
    "style": {
      "navigationBarTitleText": "影像冰城",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/index/lceCityImage/lceCittyDetails/lceCittyDetails",
    "style": {
      "navigationBarTitleText": "视频详情",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/index/MicroTravel/details/details",
    "style": {
      "navigationBarTitleText": "详情",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/index/MicroTravel/MicroList/MicroList",
    "style": {
      "navigationBarTitleText": "当季推荐",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/index/position/position",
    "style": {
      "navigationBarTitleText": "地图",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/mylogn/editorial/editorial",
    "style": {
      "navigationBarTitleText": "编辑资料",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/index/entertainment/details/details",
    "style": {
      "navigationBarTitleText": "餐饮娱乐",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/index/entertainment/search/search",
    "style": {
      "navigationBarTitleText": "搜索",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/index/homestays/details/details",
    "style": {
      "navigationBarTitleText": "路线详情",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/mylogn/logon/logon",
    "style": {
      "navigationBarTitleText": "登录",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/mylogn/order/order",
    "style": {
      "navigationBarTitleText": "定制路线订单",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/mylogn/order/order-make",
    "style": {
      "navigationBarTitleText": "景区预约订单",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "pages/index/homestays/details/itinerary/itinerary",
    "style": {
      "navigationBarTitleText": "行程详情",
      "enablePullDownRefresh": false
    }
  }, {
    "path": "uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate",
    "style": {
      "navigationBarTitleText": "注销账号"
    }
  }, {
    "path": "uni_modules/uni-id-pages/pages/userinfo/userinfo",
    "style": {
      "navigationBarTitleText": "个人资料"
    }
  }, {
    "path": "uni_modules/uni-id-pages/pages/userinfo/bind-mobile/bind-mobile",
    "style": {
      "navigationBarTitleText": "绑定手机号码"
    }
  }, {
    "path": "uni_modules/uni-id-pages/pages/userinfo/cropImage/cropImage",
    "style": {
      "navigationBarTitleText": ""
    }
  }, {
    "path": "uni_modules/uni-id-pages/pages/login/login-withoutpwd",
    "style": {
      "navigationBarTitleText": ""
    }
  }, {
    "path": "uni_modules/uni-id-pages/pages/login/login-withpwd",
    "style": {
      "navigationBarTitleText": ""
    }
  }, {
    "path": "uni_modules/uni-id-pages/pages/login/login-smscode",
    "style": {
      "navigationBarTitleText": "手机验证码登录"
    }
  }, {
    "path": "uni_modules/uni-id-pages/pages/register/register",
    "style": {
      "navigationBarTitleText": "注册"
    }
  }, {
    "path": "uni_modules/uni-id-pages/pages/register/register-by-email",
    "style": {
      "navigationBarTitleText": "邮箱验证码注册"
    }
  }, {
    "path": "uni_modules/uni-id-pages/pages/retrieve/retrieve",
    "style": {
      "navigationBarTitleText": "重置密码"
    }
  }, {
    "path": "uni_modules/uni-id-pages/pages/retrieve/retrieve-by-email",
    "style": {
      "navigationBarTitleText": "通过邮箱重置密码"
    }
  }, {
    "path": "uni_modules/uni-id-pages/pages/common/webview/webview",
    "style": {
      "enablePullDownRefresh": false,
      "navigationBarTitleText": ""
    }
  }, {
    "path": "uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd",
    "style": {
      "enablePullDownRefresh": false,
      "navigationBarTitleText": "修改密码"
    }
  }, {
    "path": "uni_modules/uni-id-pages/pages/register/register-admin",
    "style": {
      "enablePullDownRefresh": false,
      "navigationBarTitleText": "注册管理员账号"
    }
  }, {
    "path": "uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd",
    "style": {
      "enablePullDownRefresh": false,
      "navigationBarTitleText": "设置密码"
    }
  }, {
    "path": "uni_modules/uni-id-pages/pages/userinfo/realname-verify/realname-verify",
    "style": {
      "enablePullDownRefresh": false,
      "navigationBarTitleText": "实名认证"
    }
  }, {
    "path": "pages/index/homestays/details/demandForm/demandForm",
    "style": {
      "navigationBarTitleText": "提交需求"
    }
  }, {
    "path": "pages/index/scenicSpot/reservation/reservationCeshi",
    "style": {
      "navigationBarTitleText": "门票订单测试"
    }
  }],
  "tabBar": {
    "color": "#7A7E83",
    "selectedColor": "#1296db",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    "list": [{
      "pagePath": "pages/index/index",
      "iconPath": "static/home_page.png",
      "selectedIconPath": "static/home.png",
      "text": "首页"
    }, {
      "pagePath": "pages/mylogn/mylogn",
      "iconPath": "static/my_page.png",
      "selectedIconPath": "static/my.png",
      "text": "我的"
    }]
  },
  "globalStyle": {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "uni-app",
    "navigationBarBackgroundColor": "#FFFFFF",
    "backgroundColor": "#FFFFFF"
  },
  "uniIdRouter": {}
};
exports.default = _default;

/***/ }),

/***/ 38:
/*!**********************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/pages.json?{"type":"stat"} ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  "appid": "__UNI__22AC80C"
};
exports.default = _default;

/***/ }),

/***/ 392:
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ 393);
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 393:
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 394:
/*!********************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-id-pages/common/check-id-card.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function checkIdCard(idCardNumber) {
  if (!idCardNumber || typeof idCardNumber !== 'string' || idCardNumber.length !== 18) return false;
  var coefficient = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  var checkCode = [1, 0, 'x', 9, 8, 7, 6, 5, 4, 3, 2];
  var code = idCardNumber.substring(17);
  var sum = 0;
  for (var i = 0; i < 17; i++) {
    sum += Number(idCardNumber.charAt(i)) * coefficient[i];
  }
  return checkCode[sum % 11].toString() === code.toLowerCase();
}
var _default = checkIdCard;
exports.default = _default;

/***/ }),

/***/ 4:
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 418:
/*!***********************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-icons/components/uni-icons/uniicons_file_vue.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fontData = void 0;
var fontData = [{
  "font_class": "arrow-down",
  "unicode": "\uE6BE"
}, {
  "font_class": "arrow-left",
  "unicode": "\uE6BC"
}, {
  "font_class": "arrow-right",
  "unicode": "\uE6BB"
}, {
  "font_class": "arrow-up",
  "unicode": "\uE6BD"
}, {
  "font_class": "auth",
  "unicode": "\uE6AB"
}, {
  "font_class": "auth-filled",
  "unicode": "\uE6CC"
}, {
  "font_class": "back",
  "unicode": "\uE6B9"
}, {
  "font_class": "bars",
  "unicode": "\uE627"
}, {
  "font_class": "calendar",
  "unicode": "\uE6A0"
}, {
  "font_class": "calendar-filled",
  "unicode": "\uE6C0"
}, {
  "font_class": "camera",
  "unicode": "\uE65A"
}, {
  "font_class": "camera-filled",
  "unicode": "\uE658"
}, {
  "font_class": "cart",
  "unicode": "\uE631"
}, {
  "font_class": "cart-filled",
  "unicode": "\uE6D0"
}, {
  "font_class": "chat",
  "unicode": "\uE65D"
}, {
  "font_class": "chat-filled",
  "unicode": "\uE659"
}, {
  "font_class": "chatboxes",
  "unicode": "\uE696"
}, {
  "font_class": "chatboxes-filled",
  "unicode": "\uE692"
}, {
  "font_class": "chatbubble",
  "unicode": "\uE697"
}, {
  "font_class": "chatbubble-filled",
  "unicode": "\uE694"
}, {
  "font_class": "checkbox",
  "unicode": "\uE62B"
}, {
  "font_class": "checkbox-filled",
  "unicode": "\uE62C"
}, {
  "font_class": "checkmarkempty",
  "unicode": "\uE65C"
}, {
  "font_class": "circle",
  "unicode": "\uE65B"
}, {
  "font_class": "circle-filled",
  "unicode": "\uE65E"
}, {
  "font_class": "clear",
  "unicode": "\uE66D"
}, {
  "font_class": "close",
  "unicode": "\uE673"
}, {
  "font_class": "closeempty",
  "unicode": "\uE66C"
}, {
  "font_class": "cloud-download",
  "unicode": "\uE647"
}, {
  "font_class": "cloud-download-filled",
  "unicode": "\uE646"
}, {
  "font_class": "cloud-upload",
  "unicode": "\uE645"
}, {
  "font_class": "cloud-upload-filled",
  "unicode": "\uE648"
}, {
  "font_class": "color",
  "unicode": "\uE6CF"
}, {
  "font_class": "color-filled",
  "unicode": "\uE6C9"
}, {
  "font_class": "compose",
  "unicode": "\uE67F"
}, {
  "font_class": "contact",
  "unicode": "\uE693"
}, {
  "font_class": "contact-filled",
  "unicode": "\uE695"
}, {
  "font_class": "down",
  "unicode": "\uE6B8"
}, {
  "font_class": "bottom",
  "unicode": "\uE6B8"
}, {
  "font_class": "download",
  "unicode": "\uE68D"
}, {
  "font_class": "download-filled",
  "unicode": "\uE681"
}, {
  "font_class": "email",
  "unicode": "\uE69E"
}, {
  "font_class": "email-filled",
  "unicode": "\uE69A"
}, {
  "font_class": "eye",
  "unicode": "\uE651"
}, {
  "font_class": "eye-filled",
  "unicode": "\uE66A"
}, {
  "font_class": "eye-slash",
  "unicode": "\uE6B3"
}, {
  "font_class": "eye-slash-filled",
  "unicode": "\uE6B4"
}, {
  "font_class": "fire",
  "unicode": "\uE6A1"
}, {
  "font_class": "fire-filled",
  "unicode": "\uE6C5"
}, {
  "font_class": "flag",
  "unicode": "\uE65F"
}, {
  "font_class": "flag-filled",
  "unicode": "\uE660"
}, {
  "font_class": "folder-add",
  "unicode": "\uE6A9"
}, {
  "font_class": "folder-add-filled",
  "unicode": "\uE6C8"
}, {
  "font_class": "font",
  "unicode": "\uE6A3"
}, {
  "font_class": "forward",
  "unicode": "\uE6BA"
}, {
  "font_class": "gear",
  "unicode": "\uE664"
}, {
  "font_class": "gear-filled",
  "unicode": "\uE661"
}, {
  "font_class": "gift",
  "unicode": "\uE6A4"
}, {
  "font_class": "gift-filled",
  "unicode": "\uE6C4"
}, {
  "font_class": "hand-down",
  "unicode": "\uE63D"
}, {
  "font_class": "hand-down-filled",
  "unicode": "\uE63C"
}, {
  "font_class": "hand-up",
  "unicode": "\uE63F"
}, {
  "font_class": "hand-up-filled",
  "unicode": "\uE63E"
}, {
  "font_class": "headphones",
  "unicode": "\uE630"
}, {
  "font_class": "heart",
  "unicode": "\uE639"
}, {
  "font_class": "heart-filled",
  "unicode": "\uE641"
}, {
  "font_class": "help",
  "unicode": "\uE679"
}, {
  "font_class": "help-filled",
  "unicode": "\uE674"
}, {
  "font_class": "home",
  "unicode": "\uE662"
}, {
  "font_class": "home-filled",
  "unicode": "\uE663"
}, {
  "font_class": "image",
  "unicode": "\uE670"
}, {
  "font_class": "image-filled",
  "unicode": "\uE678"
}, {
  "font_class": "images",
  "unicode": "\uE650"
}, {
  "font_class": "images-filled",
  "unicode": "\uE64B"
}, {
  "font_class": "info",
  "unicode": "\uE669"
}, {
  "font_class": "info-filled",
  "unicode": "\uE649"
}, {
  "font_class": "left",
  "unicode": "\uE6B7"
}, {
  "font_class": "link",
  "unicode": "\uE6A5"
}, {
  "font_class": "list",
  "unicode": "\uE644"
}, {
  "font_class": "location",
  "unicode": "\uE6AE"
}, {
  "font_class": "location-filled",
  "unicode": "\uE6AF"
}, {
  "font_class": "locked",
  "unicode": "\uE66B"
}, {
  "font_class": "locked-filled",
  "unicode": "\uE668"
}, {
  "font_class": "loop",
  "unicode": "\uE633"
}, {
  "font_class": "mail-open",
  "unicode": "\uE643"
}, {
  "font_class": "mail-open-filled",
  "unicode": "\uE63A"
}, {
  "font_class": "map",
  "unicode": "\uE667"
}, {
  "font_class": "map-filled",
  "unicode": "\uE666"
}, {
  "font_class": "map-pin",
  "unicode": "\uE6AD"
}, {
  "font_class": "map-pin-ellipse",
  "unicode": "\uE6AC"
}, {
  "font_class": "medal",
  "unicode": "\uE6A2"
}, {
  "font_class": "medal-filled",
  "unicode": "\uE6C3"
}, {
  "font_class": "mic",
  "unicode": "\uE671"
}, {
  "font_class": "mic-filled",
  "unicode": "\uE677"
}, {
  "font_class": "micoff",
  "unicode": "\uE67E"
}, {
  "font_class": "micoff-filled",
  "unicode": "\uE6B0"
}, {
  "font_class": "minus",
  "unicode": "\uE66F"
}, {
  "font_class": "minus-filled",
  "unicode": "\uE67D"
}, {
  "font_class": "more",
  "unicode": "\uE64D"
}, {
  "font_class": "more-filled",
  "unicode": "\uE64E"
}, {
  "font_class": "navigate",
  "unicode": "\uE66E"
}, {
  "font_class": "navigate-filled",
  "unicode": "\uE67A"
}, {
  "font_class": "notification",
  "unicode": "\uE6A6"
}, {
  "font_class": "notification-filled",
  "unicode": "\uE6C1"
}, {
  "font_class": "paperclip",
  "unicode": "\uE652"
}, {
  "font_class": "paperplane",
  "unicode": "\uE672"
}, {
  "font_class": "paperplane-filled",
  "unicode": "\uE675"
}, {
  "font_class": "person",
  "unicode": "\uE699"
}, {
  "font_class": "person-filled",
  "unicode": "\uE69D"
}, {
  "font_class": "personadd",
  "unicode": "\uE69F"
}, {
  "font_class": "personadd-filled",
  "unicode": "\uE698"
}, {
  "font_class": "personadd-filled-copy",
  "unicode": "\uE6D1"
}, {
  "font_class": "phone",
  "unicode": "\uE69C"
}, {
  "font_class": "phone-filled",
  "unicode": "\uE69B"
}, {
  "font_class": "plus",
  "unicode": "\uE676"
}, {
  "font_class": "plus-filled",
  "unicode": "\uE6C7"
}, {
  "font_class": "plusempty",
  "unicode": "\uE67B"
}, {
  "font_class": "pulldown",
  "unicode": "\uE632"
}, {
  "font_class": "pyq",
  "unicode": "\uE682"
}, {
  "font_class": "qq",
  "unicode": "\uE680"
}, {
  "font_class": "redo",
  "unicode": "\uE64A"
}, {
  "font_class": "redo-filled",
  "unicode": "\uE655"
}, {
  "font_class": "refresh",
  "unicode": "\uE657"
}, {
  "font_class": "refresh-filled",
  "unicode": "\uE656"
}, {
  "font_class": "refreshempty",
  "unicode": "\uE6BF"
}, {
  "font_class": "reload",
  "unicode": "\uE6B2"
}, {
  "font_class": "right",
  "unicode": "\uE6B5"
}, {
  "font_class": "scan",
  "unicode": "\uE62A"
}, {
  "font_class": "search",
  "unicode": "\uE654"
}, {
  "font_class": "settings",
  "unicode": "\uE653"
}, {
  "font_class": "settings-filled",
  "unicode": "\uE6CE"
}, {
  "font_class": "shop",
  "unicode": "\uE62F"
}, {
  "font_class": "shop-filled",
  "unicode": "\uE6CD"
}, {
  "font_class": "smallcircle",
  "unicode": "\uE67C"
}, {
  "font_class": "smallcircle-filled",
  "unicode": "\uE665"
}, {
  "font_class": "sound",
  "unicode": "\uE684"
}, {
  "font_class": "sound-filled",
  "unicode": "\uE686"
}, {
  "font_class": "spinner-cycle",
  "unicode": "\uE68A"
}, {
  "font_class": "staff",
  "unicode": "\uE6A7"
}, {
  "font_class": "staff-filled",
  "unicode": "\uE6CB"
}, {
  "font_class": "star",
  "unicode": "\uE688"
}, {
  "font_class": "star-filled",
  "unicode": "\uE68F"
}, {
  "font_class": "starhalf",
  "unicode": "\uE683"
}, {
  "font_class": "trash",
  "unicode": "\uE687"
}, {
  "font_class": "trash-filled",
  "unicode": "\uE685"
}, {
  "font_class": "tune",
  "unicode": "\uE6AA"
}, {
  "font_class": "tune-filled",
  "unicode": "\uE6CA"
}, {
  "font_class": "undo",
  "unicode": "\uE64F"
}, {
  "font_class": "undo-filled",
  "unicode": "\uE64C"
}, {
  "font_class": "up",
  "unicode": "\uE6B6"
}, {
  "font_class": "top",
  "unicode": "\uE6B6"
}, {
  "font_class": "upload",
  "unicode": "\uE690"
}, {
  "font_class": "upload-filled",
  "unicode": "\uE68E"
}, {
  "font_class": "videocam",
  "unicode": "\uE68C"
}, {
  "font_class": "videocam-filled",
  "unicode": "\uE689"
}, {
  "font_class": "vip",
  "unicode": "\uE6A8"
}, {
  "font_class": "vip-filled",
  "unicode": "\uE6C6"
}, {
  "font_class": "wallet",
  "unicode": "\uE6B1"
}, {
  "font_class": "wallet-filled",
  "unicode": "\uE6C2"
}, {
  "font_class": "weibo",
  "unicode": "\uE68B"
}, {
  "font_class": "weixin",
  "unicode": "\uE691"
}];

// export const fontData = JSON.parse<IconsDataItem>(fontDataJson)
exports.fontData = fontData;

/***/ }),

/***/ 44:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 447:
/*!**************************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-search-bar/components/uni-search-bar/i18n/index.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 448));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 449));
var _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 450));
var _default = {
  en: _en.default,
  'zh-Hans': _zhHans.default,
  'zh-Hant': _zhHant.default
};
exports.default = _default;

/***/ }),

/***/ 448:
/*!*************************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-search-bar/components/uni-search-bar/i18n/en.json ***!
  \*************************************************************************************************/
/*! exports provided: uni-search-bar.cancel, uni-search-bar.placeholder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-search-bar.cancel\":\"cancel\",\"uni-search-bar.placeholder\":\"Search enter content\"}");

/***/ }),

/***/ 449:
/*!******************************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-search-bar/components/uni-search-bar/i18n/zh-Hans.json ***!
  \******************************************************************************************************/
/*! exports provided: uni-search-bar.cancel, uni-search-bar.placeholder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-search-bar.cancel\":\"取消\",\"uni-search-bar.placeholder\":\"请输入搜索内容\"}");

/***/ }),

/***/ 45:
/*!********************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni.promisify.adaptor.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ 13);
uni.addInterceptor({
  returnValue: function returnValue(res) {
    if (!(!!res && (_typeof(res) === "object" || typeof res === "function") && typeof res.then === "function")) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        return res[0] ? reject(res[0]) : resolve(res[1]);
      });
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 450:
/*!******************************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-search-bar/components/uni-search-bar/i18n/zh-Hant.json ***!
  \******************************************************************************************************/
/*! exports provided: uni-search-bar.cancel, uni-search-bar.placeholder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-search-bar.cancel\":\"取消\",\"uni-search-bar.placeholder\":\"請輸入搜索內容\"}");

/***/ }),

/***/ 479:
/*!***********************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-popup/components/uni-popup/popup.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {};
  },
  created: function created() {
    this.popup = this.getParent();
  },
  methods: {
    /**
     * 获取父元素实例
     */
    getParent: function getParent() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'uniPopup';
      var parent = this.$parent;
      var parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent) return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 480:
/*!****************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-popup/components/uni-popup/i18n/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 481));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 482));
var _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 483));
var _default = {
  en: _en.default,
  'zh-Hans': _zhHans.default,
  'zh-Hant': _zhHant.default
};
exports.default = _default;

/***/ }),

/***/ 481:
/*!***************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-popup/components/uni-popup/i18n/en.json ***!
  \***************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-popup.cancel\":\"cancel\",\"uni-popup.ok\":\"ok\",\"uni-popup.placeholder\":\"pleace enter\",\"uni-popup.title\":\"Hint\",\"uni-popup.shareTitle\":\"Share to\"}");

/***/ }),

/***/ 482:
/*!********************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-popup/components/uni-popup/i18n/zh-Hans.json ***!
  \********************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-popup.cancel\":\"取消\",\"uni-popup.ok\":\"确定\",\"uni-popup.placeholder\":\"请输入\",\"uni-popup.title\":\"提示\",\"uni-popup.shareTitle\":\"分享到\"}");

/***/ }),

/***/ 483:
/*!********************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-popup/components/uni-popup/i18n/zh-Hant.json ***!
  \********************************************************************************************/
/*! exports provided: uni-popup.cancel, uni-popup.ok, uni-popup.placeholder, uni-popup.title, uni-popup.shareTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-popup.cancel\":\"取消\",\"uni-popup.ok\":\"確定\",\"uni-popup.placeholder\":\"請輸入\",\"uni-popup.title\":\"提示\",\"uni-popup.shareTitle\":\"分享到\"}");

/***/ }),

/***/ 5:
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ 6);
var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ 7);
var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ 8);
var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ 10);
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}
module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 519:
/*!******************************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-id-pages/pages/userinfo/cropImage/limeClipper/utils.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcImageOffset = calcImageOffset;
exports.calcImageScale = calcImageScale;
exports.calcImageSize = calcImageSize;
exports.calcPythagoreanTheorem = calcPythagoreanTheorem;
exports.clipTouchMoveOfCalculate = clipTouchMoveOfCalculate;
exports.determineDirection = determineDirection;
exports.imageTouchMoveOfCalcOffset = imageTouchMoveOfCalcOffset;
/**
 * 判断手指触摸位置
 */
function determineDirection(clipX, clipY, clipWidth, clipHeight, currentX, currentY) {
  /*
   * (右下>>1 右上>>2 左上>>3 左下>>4)
   */
  var corner;
  /**
   * 思路：（利用直角坐标系）
   *  1.找出裁剪框中心点
   *  2.如点击坐标在上方点与左方点区域内，则点击为左上角
   *  3.如点击坐标在下方点与右方点区域内，则点击为右下角
   *  4.其他角同理
   */
  var mainPoint = [clipX + clipWidth / 2, clipY + clipHeight / 2]; // 中心点
  var currentPoint = [currentX, currentY]; // 触摸点

  if (currentPoint[0] <= mainPoint[0] && currentPoint[1] <= mainPoint[1]) {
    corner = 3; // 左上
  } else if (currentPoint[0] >= mainPoint[0] && currentPoint[1] <= mainPoint[1]) {
    corner = 2; // 右上
  } else if (currentPoint[0] <= mainPoint[0] && currentPoint[1] >= mainPoint[1]) {
    corner = 4; // 左下
  } else if (currentPoint[0] >= mainPoint[0] && currentPoint[1] >= mainPoint[1]) {
    corner = 1; // 右下
  }

  return corner;
}

/**
 * 图片边缘检测检测时，计算图片偏移量
 */
function calcImageOffset(data, scale) {
  var left = data.imageLeft;
  var top = data.imageTop;
  scale = scale || data.scale;
  var imageWidth = data.imageWidth;
  var imageHeight = data.imageHeight;
  if (data.angle / 90 % 2) {
    imageWidth = data.imageHeight;
    imageHeight = data.imageWidth;
  }
  var clipX = data.clipX,
    clipWidth = data.clipWidth,
    clipY = data.clipY,
    clipHeight = data.clipHeight;

  // 当前图片宽度/高度
  var currentImageSize = function currentImageSize(size) {
    return size * scale / 2;
  };
  var currentImageWidth = currentImageSize(imageWidth);
  var currentImageHeight = currentImageSize(imageHeight);
  left = clipX + currentImageWidth >= left ? left : clipX + currentImageWidth;
  left = clipX + clipWidth - currentImageWidth <= left ? left : clipX + clipWidth - currentImageWidth;
  top = clipY + currentImageHeight >= top ? top : clipY + currentImageHeight;
  top = clipY + clipHeight - currentImageHeight <= top ? top : clipY + clipHeight - currentImageHeight;
  return {
    left: left,
    top: top,
    scale: scale
  };
}

/**
 * 图片边缘检测时，计算图片缩放比例
 */
function calcImageScale(data, scale) {
  scale = scale || data.scale;
  var imageWidth = data.imageWidth,
    imageHeight = data.imageHeight,
    clipWidth = data.clipWidth,
    clipHeight = data.clipHeight,
    angle = data.angle;
  if (angle / 90 % 2) {
    imageWidth = imageHeight;
    imageHeight = imageWidth;
  }
  if (imageWidth * scale < clipWidth) {
    scale = clipWidth / imageWidth;
  }
  if (imageHeight * scale < clipHeight) {
    scale = Math.max(scale, clipHeight / imageHeight);
  }
  return scale;
}

/**
 * 计算图片尺寸
 */
function calcImageSize(width, height, data) {
  var imageWidth = width,
    imageHeight = height;
  var clipWidth = data.clipWidth,
    clipHeight = data.clipHeight,
    sysinfo = data.sysinfo,
    originWidth = data.width,
    originHeight = data.height;
  if (imageWidth && imageHeight) {
    if (imageWidth / imageHeight > (clipWidth || originWidth) / (clipWidth || originHeight)) {
      imageHeight = clipHeight || originHeight;
      imageWidth = width / height * imageHeight;
    } else {
      imageWidth = clipWidth || originWidth;
      imageHeight = height / width * imageWidth;
    }
  } else {
    var sys = sysinfo || uni.getSystemInfoSync();
    imageWidth = sys.windowWidth;
    imageHeight = 0;
  }
  return {
    imageWidth: imageWidth,
    imageHeight: imageHeight
  };
}

/**
 * 勾股定理求斜边
 */
function calcPythagoreanTheorem(width, height) {
  return Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
}

/**
 * 拖动裁剪框时计算
 */
function clipTouchMoveOfCalculate(data, event) {
  var clientX = event.touches[0].clientX;
  var clientY = event.touches[0].clientY;
  var clipWidth = data.clipWidth,
    clipHeight = data.clipHeight,
    oldClipY = data.clipY,
    oldClipX = data.clipX,
    clipStart = data.clipStart,
    isLockRatio = data.isLockRatio,
    maxWidth = data.maxWidth,
    minWidth = data.minWidth,
    maxHeight = data.maxHeight,
    minHeight = data.minHeight;
  maxWidth = maxWidth / 2;
  minWidth = minWidth / 2;
  minHeight = minHeight / 2;
  maxHeight = maxHeight / 2;
  var width = clipWidth,
    height = clipHeight,
    clipY = oldClipY,
    clipX = oldClipX,
    // 获取裁剪框实际宽度/高度
    // 如果大于最大值则使用最大值
    // 如果小于最小值则使用最小值
    sizecorrect = function sizecorrect() {
      width = width <= maxWidth ? width >= minWidth ? width : minWidth : maxWidth;
      height = height <= maxHeight ? height >= minHeight ? height : minHeight : maxHeight;
    },
    sizeinspect = function sizeinspect() {
      sizecorrect();
      if ((width > maxWidth || width < minWidth || height > maxHeight || height < minHeight) && isLockRatio) {
        return false;
      } else {
        return true;
      }
    };
  //if (clipStart.corner) {
  height = clipStart.height + (clipStart.corner > 1 && clipStart.corner < 4 ? 1 : -1) * (clipStart.y - clientY);
  //}
  switch (clipStart.corner) {
    case 1:
      width = clipStart.width - clipStart.x + clientX;
      if (isLockRatio) {
        height = width / (clipWidth / clipHeight);
      }
      if (!sizeinspect()) return;
      break;
    case 2:
      width = clipStart.width - clipStart.x + clientX;
      if (isLockRatio) {
        height = width / (clipWidth / clipHeight);
      }
      if (!sizeinspect()) {
        return;
      } else {
        clipY = clipStart.clipY - (height - clipStart.height);
      }
      break;
    case 3:
      width = clipStart.width + clipStart.x - clientX;
      if (isLockRatio) {
        height = width / (clipWidth / clipHeight);
      }
      if (!sizeinspect()) {
        return;
      } else {
        clipY = clipStart.clipY - (height - clipStart.height);
        clipX = clipStart.clipX - (width - clipStart.width);
      }
      break;
    case 4:
      width = clipStart.width + clipStart.x - clientX;
      if (isLockRatio) {
        height = width / (clipWidth / clipHeight);
      }
      if (!sizeinspect()) {
        return;
      } else {
        clipX = clipStart.clipX - (width - clipStart.width);
      }
      break;
    default:
      break;
  }
  return {
    width: width,
    height: height,
    clipX: clipX,
    clipY: clipY
  };
}

/**
 * 单指拖动图片计算偏移
 */
function imageTouchMoveOfCalcOffset(data, clientXForLeft, clientYForLeft) {
  var left = clientXForLeft - data.touchRelative[0].x,
    top = clientYForLeft - data.touchRelative[0].y;
  return {
    left: left,
    top: top
  };
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 52:
/*!*****************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/sceniconeC.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 53:
/*!*****************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/sceniconeB.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 54:
/*!*****************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/sceniconeA.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 541:
/*!**************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-forms/components/uni-forms/validate.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 28));
var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ 32));
var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ 33));
var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ 34));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 31));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var pattern = {
  email: /^\S+?@\S+?\.\S+?$/,
  idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i')
};
var FORMAT_MAPPING = {
  "int": 'integer',
  "bool": 'boolean',
  "double": 'number',
  "long": 'number',
  "password": 'string'
  // "fileurls": 'array'
};

function formatMessage(args) {
  var resources = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var defaultMessage = ['label'];
  defaultMessage.forEach(function (item) {
    if (args[item] === undefined) {
      args[item] = '';
    }
  });
  var str = resources;
  for (var key in args) {
    var reg = new RegExp('{' + key + '}');
    str = str.replace(reg, args[key]);
  }
  return str;
}
function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }
  if (typeof value === 'string' && !value) {
    return true;
  }
  if (Array.isArray(value) && !value.length) {
    return true;
  }
  if (type === 'object' && !Object.keys(value).length) {
    return true;
  }
  return false;
}
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  string: function string(value) {
    return typeof value === 'string';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  "boolean": function boolean(value) {
    return typeof value === 'boolean';
  },
  "float": function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  object: function object(value) {
    return (0, _typeof2.default)(value) === 'object' && !types.array(value);
  },
  date: function date(value) {
    return value instanceof Date;
  },
  timestamp: function timestamp(value) {
    if (!this.integer(value) || Math.abs(value).toString().length > 16) {
      return false;
    }
    return true;
  },
  file: function file(value) {
    return typeof value.url === 'string';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  pattern: function pattern(reg, value) {
    try {
      return new RegExp(reg).test(value);
    } catch (e) {
      return false;
    }
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  idcard: function idcard(value) {
    return typeof value === 'string' && !!value.match(pattern.idcard);
  },
  'url-https': function urlHttps(value) {
    return this.url(value) && value.startsWith('https://');
  },
  'url-scheme': function urlScheme(value) {
    return value.startsWith('://');
  },
  'url-web': function urlWeb(value) {
    return false;
  }
};
var RuleValidator = /*#__PURE__*/function () {
  function RuleValidator(message) {
    (0, _classCallCheck2.default)(this, RuleValidator);
    this._message = message;
  }
  (0, _createClass2.default)(RuleValidator, [{
    key: "validateRule",
    value: function () {
      var _validateRule = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(fieldKey, fieldValue, value, data, allData) {
        var result, rules, hasRequired, message, i, rule, vt, now, resultExpr;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                result = null;
                rules = fieldValue.rules;
                hasRequired = rules.findIndex(function (item) {
                  return item.required;
                });
                if (!(hasRequired < 0)) {
                  _context.next = 8;
                  break;
                }
                if (!(value === null || value === undefined)) {
                  _context.next = 6;
                  break;
                }
                return _context.abrupt("return", result);
              case 6:
                if (!(typeof value === 'string' && !value.length)) {
                  _context.next = 8;
                  break;
                }
                return _context.abrupt("return", result);
              case 8:
                message = this._message;
                if (!(rules === undefined)) {
                  _context.next = 11;
                  break;
                }
                return _context.abrupt("return", message['default']);
              case 11:
                i = 0;
              case 12:
                if (!(i < rules.length)) {
                  _context.next = 35;
                  break;
                }
                rule = rules[i];
                vt = this._getValidateType(rule);
                Object.assign(rule, {
                  label: fieldValue.label || "[\"".concat(fieldKey, "\"]")
                });
                if (!RuleValidatorHelper[vt]) {
                  _context.next = 20;
                  break;
                }
                result = RuleValidatorHelper[vt](rule, value, message);
                if (!(result != null)) {
                  _context.next = 20;
                  break;
                }
                return _context.abrupt("break", 35);
              case 20:
                if (!rule.validateExpr) {
                  _context.next = 26;
                  break;
                }
                now = Date.now();
                resultExpr = rule.validateExpr(value, allData, now);
                if (!(resultExpr === false)) {
                  _context.next = 26;
                  break;
                }
                result = this._getMessage(rule, rule.errorMessage || this._message['default']);
                return _context.abrupt("break", 35);
              case 26:
                if (!rule.validateFunction) {
                  _context.next = 32;
                  break;
                }
                _context.next = 29;
                return this.validateFunction(rule, value, data, allData, vt);
              case 29:
                result = _context.sent;
                if (!(result !== null)) {
                  _context.next = 32;
                  break;
                }
                return _context.abrupt("break", 35);
              case 32:
                i++;
                _context.next = 12;
                break;
              case 35:
                if (result !== null) {
                  result = message.TAG + result;
                }
                return _context.abrupt("return", result);
              case 37:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
      function validateRule(_x, _x2, _x3, _x4, _x5) {
        return _validateRule.apply(this, arguments);
      }
      return validateRule;
    }()
  }, {
    key: "validateFunction",
    value: function () {
      var _validateFunction = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(rule, value, data, allData, vt) {
        var result, callbackMessage, res;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = null;
                _context2.prev = 1;
                callbackMessage = null;
                _context2.next = 5;
                return rule.validateFunction(rule, value, allData || data, function (message) {
                  callbackMessage = message;
                });
              case 5:
                res = _context2.sent;
                if (callbackMessage || typeof res === 'string' && res || res === false) {
                  result = this._getMessage(rule, callbackMessage || res, vt);
                }
                _context2.next = 12;
                break;
              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](1);
                result = this._getMessage(rule, _context2.t0.message, vt);
              case 12:
                return _context2.abrupt("return", result);
              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 9]]);
      }));
      function validateFunction(_x6, _x7, _x8, _x9, _x10) {
        return _validateFunction.apply(this, arguments);
      }
      return validateFunction;
    }()
  }, {
    key: "_getMessage",
    value: function _getMessage(rule, message, vt) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt] || message['default']);
    }
  }, {
    key: "_getValidateType",
    value: function _getValidateType(rule) {
      var result = '';
      if (rule.required) {
        result = 'required';
      } else if (rule.format) {
        result = 'format';
      } else if (rule.arrayType) {
        result = 'arrayTypeFormat';
      } else if (rule.range) {
        result = 'range';
      } else if (rule.maximum !== undefined || rule.minimum !== undefined) {
        result = 'rangeNumber';
      } else if (rule.maxLength !== undefined || rule.minLength !== undefined) {
        result = 'rangeLength';
      } else if (rule.pattern) {
        result = 'pattern';
      } else if (rule.validateFunction) {
        result = 'validateFunction';
      }
      return result;
    }
  }]);
  return RuleValidator;
}();
var RuleValidatorHelper = {
  required: function required(rule, value, message) {
    if (rule.required && isEmptyValue(value, rule.format || (0, _typeof2.default)(value))) {
      return formatMessage(rule, rule.errorMessage || message.required);
    }
    return null;
  },
  range: function range(rule, value, message) {
    var range = rule.range,
      errorMessage = rule.errorMessage;
    var list = new Array(range.length);
    for (var i = 0; i < range.length; i++) {
      var item = range[i];
      if (types.object(item) && item.value !== undefined) {
        list[i] = item.value;
      } else {
        list[i] = item;
      }
    }
    var result = false;
    if (Array.isArray(value)) {
      result = new Set(value.concat(list)).size === list.length;
    } else {
      if (list.indexOf(value) > -1) {
        result = true;
      }
    }
    if (!result) {
      return formatMessage(rule, errorMessage || message['enum']);
    }
    return null;
  },
  rangeNumber: function rangeNumber(rule, value, message) {
    if (!types.number(value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }
    var minimum = rule.minimum,
      maximum = rule.maximum,
      exclusiveMinimum = rule.exclusiveMinimum,
      exclusiveMaximum = rule.exclusiveMaximum;
    var min = exclusiveMinimum ? value <= minimum : value < minimum;
    var max = exclusiveMaximum ? value >= maximum : value > maximum;
    if (minimum !== undefined && min) {
      return formatMessage(rule, rule.errorMessage || message['number'][exclusiveMinimum ? 'exclusiveMinimum' : 'minimum']);
    } else if (maximum !== undefined && max) {
      return formatMessage(rule, rule.errorMessage || message['number'][exclusiveMaximum ? 'exclusiveMaximum' : 'maximum']);
    } else if (minimum !== undefined && maximum !== undefined && (min || max)) {
      return formatMessage(rule, rule.errorMessage || message['number'].range);
    }
    return null;
  },
  rangeLength: function rangeLength(rule, value, message) {
    if (!types.string(value) && !types.array(value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }
    var min = rule.minLength;
    var max = rule.maxLength;
    var val = value.length;
    if (min !== undefined && val < min) {
      return formatMessage(rule, rule.errorMessage || message['length'].minLength);
    } else if (max !== undefined && val > max) {
      return formatMessage(rule, rule.errorMessage || message['length'].maxLength);
    } else if (min !== undefined && max !== undefined && (val < min || val > max)) {
      return formatMessage(rule, rule.errorMessage || message['length'].range);
    }
    return null;
  },
  pattern: function pattern(rule, value, message) {
    if (!types['pattern'](rule.pattern, value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }
    return null;
  },
  format: function format(rule, value, message) {
    var customTypes = Object.keys(types);
    var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
    if (customTypes.indexOf(format) > -1) {
      if (!types[format](value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
    }
    return null;
  },
  arrayTypeFormat: function arrayTypeFormat(rule, value, message) {
    if (!Array.isArray(value)) {
      return formatMessage(rule, rule.errorMessage || message.typeError);
    }
    for (var i = 0; i < value.length; i++) {
      var element = value[i];
      var formatResult = this.format(rule, element, message);
      if (formatResult !== null) {
        return formatResult;
      }
    }
    return null;
  }
};
var SchemaValidator = /*#__PURE__*/function (_RuleValidator) {
  (0, _inherits2.default)(SchemaValidator, _RuleValidator);
  var _super = _createSuper(SchemaValidator);
  function SchemaValidator(schema, options) {
    var _this;
    (0, _classCallCheck2.default)(this, SchemaValidator);
    _this = _super.call(this, SchemaValidator.message);
    _this._schema = schema;
    _this._options = options || null;
    return _this;
  }
  (0, _createClass2.default)(SchemaValidator, [{
    key: "updateSchema",
    value: function updateSchema(schema) {
      this._schema = schema;
    }
  }, {
    key: "validate",
    value: function () {
      var _validate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(data, allData) {
        var result;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                result = this._checkFieldInSchema(data);
                if (result) {
                  _context3.next = 5;
                  break;
                }
                _context3.next = 4;
                return this.invokeValidate(data, false, allData);
              case 4:
                result = _context3.sent;
              case 5:
                return _context3.abrupt("return", result.length ? result[0] : null);
              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));
      function validate(_x11, _x12) {
        return _validate.apply(this, arguments);
      }
      return validate;
    }()
  }, {
    key: "validateAll",
    value: function () {
      var _validateAll = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(data, allData) {
        var result;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                result = this._checkFieldInSchema(data);
                if (result) {
                  _context4.next = 5;
                  break;
                }
                _context4.next = 4;
                return this.invokeValidate(data, true, allData);
              case 4:
                result = _context4.sent;
              case 5:
                return _context4.abrupt("return", result);
              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));
      function validateAll(_x13, _x14) {
        return _validateAll.apply(this, arguments);
      }
      return validateAll;
    }()
  }, {
    key: "validateUpdate",
    value: function () {
      var _validateUpdate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(data, allData) {
        var result;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                result = this._checkFieldInSchema(data);
                if (result) {
                  _context5.next = 5;
                  break;
                }
                _context5.next = 4;
                return this.invokeValidateUpdate(data, false, allData);
              case 4:
                result = _context5.sent;
              case 5:
                return _context5.abrupt("return", result.length ? result[0] : null);
              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));
      function validateUpdate(_x15, _x16) {
        return _validateUpdate.apply(this, arguments);
      }
      return validateUpdate;
    }()
  }, {
    key: "invokeValidate",
    value: function () {
      var _invokeValidate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(data, all, allData) {
        var result, schema, key, value, errorMessage;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                result = [];
                schema = this._schema;
                _context6.t0 = _regenerator.default.keys(schema);
              case 3:
                if ((_context6.t1 = _context6.t0()).done) {
                  _context6.next = 15;
                  break;
                }
                key = _context6.t1.value;
                value = schema[key];
                _context6.next = 8;
                return this.validateRule(key, value, data[key], data, allData);
              case 8:
                errorMessage = _context6.sent;
                if (!(errorMessage != null)) {
                  _context6.next = 13;
                  break;
                }
                result.push({
                  key: key,
                  errorMessage: errorMessage
                });
                if (all) {
                  _context6.next = 13;
                  break;
                }
                return _context6.abrupt("break", 15);
              case 13:
                _context6.next = 3;
                break;
              case 15:
                return _context6.abrupt("return", result);
              case 16:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));
      function invokeValidate(_x17, _x18, _x19) {
        return _invokeValidate.apply(this, arguments);
      }
      return invokeValidate;
    }()
  }, {
    key: "invokeValidateUpdate",
    value: function () {
      var _invokeValidateUpdate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(data, all, allData) {
        var result, key, errorMessage;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                result = [];
                _context7.t0 = _regenerator.default.keys(data);
              case 2:
                if ((_context7.t1 = _context7.t0()).done) {
                  _context7.next = 13;
                  break;
                }
                key = _context7.t1.value;
                _context7.next = 6;
                return this.validateRule(key, this._schema[key], data[key], data, allData);
              case 6:
                errorMessage = _context7.sent;
                if (!(errorMessage != null)) {
                  _context7.next = 11;
                  break;
                }
                result.push({
                  key: key,
                  errorMessage: errorMessage
                });
                if (all) {
                  _context7.next = 11;
                  break;
                }
                return _context7.abrupt("break", 13);
              case 11:
                _context7.next = 2;
                break;
              case 13:
                return _context7.abrupt("return", result);
              case 14:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));
      function invokeValidateUpdate(_x20, _x21, _x22) {
        return _invokeValidateUpdate.apply(this, arguments);
      }
      return invokeValidateUpdate;
    }()
  }, {
    key: "_checkFieldInSchema",
    value: function _checkFieldInSchema(data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return '';
      }
      var noExistFields = keys.filter(function (key) {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, SchemaValidator.message.TAG + SchemaValidator.message['defaultInvalid']);
      return [{
        key: 'invalid',
        errorMessage: errorMessage
      }];
    }
  }]);
  return SchemaValidator;
}(RuleValidator);
function Message() {
  return {
    TAG: "",
    default: '验证错误',
    defaultInvalid: '提交的字段{field}在数据库中并不存在',
    validateFunction: '验证无效',
    required: '{label}必填',
    'enum': '{label}超出范围',
    timestamp: '{label}格式无效',
    whitespace: '{label}不能为空',
    typeError: '{label}类型无效',
    date: {
      format: '{label}日期{value}格式无效',
      parse: '{label}日期无法解析,{value}无效',
      invalid: '{label}日期{value}无效'
    },
    length: {
      minLength: '{label}长度不能少于{minLength}',
      maxLength: '{label}长度不能超过{maxLength}',
      range: '{label}必须介于{minLength}和{maxLength}之间'
    },
    number: {
      minimum: '{label}不能小于{minimum}',
      maximum: '{label}不能大于{maximum}',
      exclusiveMinimum: '{label}不能小于等于{minimum}',
      exclusiveMaximum: '{label}不能大于等于{maximum}',
      range: '{label}必须介于{minimum}and{maximum}之间'
    },
    pattern: {
      mismatch: '{label}格式不匹配'
    }
  };
}
SchemaValidator.message = new Message();
var _default = SchemaValidator;
exports.default = _default;

/***/ }),

/***/ 542:
/*!***********************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-forms/components/uni-forms/utils.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typeFilter = exports.type = exports.setDataValue = exports.realName = exports.rawData = exports.objSet = exports.objGet = exports.name2arr = exports.isRequiredField = exports.isRealName = exports.isNumber = exports.isEqual = exports.isBoolean = exports.getValue = exports.getDataValueType = exports.getDataValue = exports.deepCopy = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
/**
 * 简单处理对象拷贝
 * @param {Obejct} 被拷贝对象
 * @@return {Object} 拷贝对象
 */
var deepCopy = function deepCopy(val) {
  return JSON.parse(JSON.stringify(val));
};
/**
 * 过滤数字类型
 * @param {String} format 数字类型
 * @@return {Boolean} 返回是否为数字类型
 */
exports.deepCopy = deepCopy;
var typeFilter = function typeFilter(format) {
  return format === 'int' || format === 'double' || format === 'number' || format === 'timestamp';
};

/**
 * 把 value 转换成指定的类型，用于处理初始值，原因是初始值需要入库不能为 undefined
 * @param {String} key 字段名
 * @param {any} value 字段值
 * @param {Object} rules 表单校验规则
 */
exports.typeFilter = typeFilter;
var getValue = function getValue(key, value, rules) {
  var isRuleNumType = rules.find(function (val) {
    return val.format && typeFilter(val.format);
  });
  var isRuleBoolType = rules.find(function (val) {
    return val.format && val.format === 'boolean' || val.format === 'bool';
  });
  // 输入类型为 number
  if (!!isRuleNumType) {
    if (!value && value !== 0) {
      value = null;
    } else {
      value = isNumber(Number(value)) ? Number(value) : value;
    }
  }

  // 输入类型为 boolean
  if (!!isRuleBoolType) {
    value = isBoolean(value) ? value : false;
  }
  return value;
};

/**
 * 获取表单数据
 * @param {String|Array} name 真实名称，需要使用 realName 获取
 * @param {Object} data 原始数据
 * @param {any} value  需要设置的值
 */
exports.getValue = getValue;
var setDataValue = function setDataValue(field, formdata, value) {
  formdata[field] = value;
  return value || '';
};

/**
 * 获取表单数据
 * @param {String|Array} field 真实名称，需要使用 realName 获取
 * @param {Object} data 原始数据
 */
exports.setDataValue = setDataValue;
var getDataValue = function getDataValue(field, data) {
  return objGet(data, field);
};

/**
 * 获取表单类型
 * @param {String|Array} field 真实名称，需要使用 realName 获取
 */
exports.getDataValue = getDataValue;
var getDataValueType = function getDataValueType(field, data) {
  var value = getDataValue(field, data);
  return {
    type: type(value),
    value: value
  };
};

/**
 * 获取表单可用的真实name
 * @param {String|Array} name 表单name
 * @@return {String} 表单可用的真实name
 */
exports.getDataValueType = getDataValueType;
var realName = function realName(name) {
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var base_name = _basePath(name);
  if ((0, _typeof2.default)(base_name) === 'object' && Array.isArray(base_name) && base_name.length > 1) {
    var realname = base_name.reduce(function (a, b) {
      return a += "#".concat(b);
    }, '_formdata_');
    return realname;
  }
  return base_name[0] || name;
};

/**
 * 判断是否表单可用的真实name
 * @param {String|Array} name 表单name
 * @@return {String} 表单可用的真实name
 */
exports.realName = realName;
var isRealName = function isRealName(name) {
  var reg = /^_formdata_#*/;
  return reg.test(name);
};

/**
 * 获取表单数据的原始格式
 * @@return {Object|Array} object 需要解析的数据
 */
exports.isRealName = isRealName;
var rawData = function rawData() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var name = arguments.length > 1 ? arguments[1] : undefined;
  var newData = JSON.parse(JSON.stringify(object));
  var formData = {};
  for (var i in newData) {
    var path = name2arr(i);
    objSet(formData, path, newData[i]);
  }
  return formData;
};

/**
 * 真实name还原为 array
 * @param {*} name 
 */
exports.rawData = rawData;
var name2arr = function name2arr(name) {
  var field = name.replace('_formdata_#', '');
  field = field.split('#').map(function (v) {
    return isNumber(v) ? Number(v) : v;
  });
  return field;
};

/**
 * 对象中设置值
 * @param {Object|Array} object 源数据
 * @param {String| Array} path 'a.b.c' 或 ['a',0,'b','c']
 * @param {String} value 需要设置的值
 */
exports.name2arr = name2arr;
var objSet = function objSet(object, path, value) {
  if ((0, _typeof2.default)(object) !== 'object') return object;
  _basePath(path).reduce(function (o, k, i, _) {
    if (i === _.length - 1) {
      // 若遍历结束直接赋值
      o[k] = value;
      return null;
    } else if (k in o) {
      // 若存在对应路径，则返回找到的对象，进行下一次遍历
      return o[k];
    } else {
      // 若不存在对应路径，则创建对应对象，若下一路径是数字，新对象赋值为空数组，否则赋值为空对象
      o[k] = /^[0-9]{1,}$/.test(_[i + 1]) ? [] : {};
      return o[k];
    }
  }, object);
  // 返回object
  return object;
};

// 处理 path， path有三种形式：'a[0].b.c'、'a.0.b.c' 和 ['a','0','b','c']，需要统一处理成数组，便于后续使用
exports.objSet = objSet;
function _basePath(path) {
  // 若是数组，则直接返回
  if (Array.isArray(path)) return path;
  // 若有 '[',']'，则替换成将 '[' 替换成 '.',去掉 ']'
  return path.replace(/\[/g, '.').replace(/\]/g, '').split('.');
}

/**
 * 从对象中获取值
 * @param {Object|Array} object 源数据
 * @param {String| Array} path 'a.b.c' 或 ['a',0,'b','c']
 * @param {String} defaultVal 如果无法从调用链中获取值的默认值
 */
var objGet = function objGet(object, path) {
  var defaultVal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'undefined';
  // 先将path处理成统一格式
  var newPath = _basePath(path);
  // 递归处理，返回最后结果
  var val = newPath.reduce(function (o, k) {
    return (o || {})[k];
  }, object);
  return !val || val !== undefined ? val : defaultVal;
};

/**
 * 是否为 number 类型 
 * @param {any} num 需要判断的值
 * @return {Boolean} 是否为 number
 */
exports.objGet = objGet;
var isNumber = function isNumber(num) {
  return !isNaN(Number(num));
};

/**
 * 是否为 boolean 类型 
 * @param {any} bool 需要判断的值
 * @return {Boolean} 是否为 boolean
 */
exports.isNumber = isNumber;
var isBoolean = function isBoolean(bool) {
  return typeof bool === 'boolean';
};
/**
 * 是否有必填字段
 * @param {Object} rules 规则
 * @return {Boolean} 是否有必填字段
 */
exports.isBoolean = isBoolean;
var isRequiredField = function isRequiredField(rules) {
  var isNoField = false;
  for (var i = 0; i < rules.length; i++) {
    var ruleData = rules[i];
    if (ruleData.required) {
      isNoField = true;
      break;
    }
  }
  return isNoField;
};

/**
 * 获取数据类型
 * @param {Any} obj 需要获取数据类型的值
 */
exports.isRequiredField = isRequiredField;
var type = function type(obj) {
  var class2type = {};

  // 生成class2type映射
  "Boolean Number String Function Array Date RegExp Object Error".split(" ").map(function (item, index) {
    class2type["[object " + item + "]"] = item.toLowerCase();
  });
  if (obj == null) {
    return obj + "";
  }
  return (0, _typeof2.default)(obj) === "object" || typeof obj === "function" ? class2type[Object.prototype.toString.call(obj)] || "object" : (0, _typeof2.default)(obj);
};

/**
 * 判断两个值是否相等
 * @param {any} a 值  
 * @param {any} b 值  
 * @return {Boolean} 是否相等
 */
exports.type = type;
var isEqual = function isEqual(a, b) {
  //如果a和b本来就全等
  if (a === b) {
    //判断是否为0和-0
    return a !== 0 || 1 / a === 1 / b;
  }
  //判断是否为null和undefined
  if (a == null || b == null) {
    return a === b;
  }
  //接下来判断a和b的数据类型
  var classNameA = toString.call(a),
    classNameB = toString.call(b);
  //如果数据类型不相等，则返回false
  if (classNameA !== classNameB) {
    return false;
  }
  //如果数据类型相等，再根据不同数据类型分别判断
  switch (classNameA) {
    case '[object RegExp]':
    case '[object String]':
      //进行字符串转换比较
      return '' + a === '' + b;
    case '[object Number]':
      //进行数字转换比较,判断是否为NaN
      if (+a !== +a) {
        return +b !== +b;
      }
      //判断是否为0或-0
      return +a === 0 ? 1 / +a === 1 / b : +a === +b;
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b;
  }
  //如果是对象类型
  if (classNameA == '[object Object]') {
    //获取a和b的属性长度
    var propsA = Object.getOwnPropertyNames(a),
      propsB = Object.getOwnPropertyNames(b);
    if (propsA.length != propsB.length) {
      return false;
    }
    for (var i = 0; i < propsA.length; i++) {
      var propName = propsA[i];
      //如果对应属性对应值不相等，则返回false
      if (a[propName] !== b[propName]) {
        return false;
      }
    }
    return true;
  }
  //如果是数组类型
  if (classNameA == '[object Array]') {
    if (a.toString() == b.toString()) {
      return true;
    }
    return false;
  }
};
exports.isEqual = isEqual;

/***/ }),

/***/ 55:
/*!*****************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/sceniconeD.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 56:
/*!***********************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/top1.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 57:
/*!***********************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/oneF.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/oneF.png";

/***/ }),

/***/ 571:
/*!************************************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-datetime-picker/components/uni-datetime-picker/i18n/index.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _en = _interopRequireDefault(__webpack_require__(/*! ./en.json */ 572));
var _zhHans = _interopRequireDefault(__webpack_require__(/*! ./zh-Hans.json */ 573));
var _zhHant = _interopRequireDefault(__webpack_require__(/*! ./zh-Hant.json */ 574));
var _default = {
  en: _en.default,
  'zh-Hans': _zhHans.default,
  'zh-Hant': _zhHant.default
};
exports.default = _default;

/***/ }),

/***/ 572:
/*!***********************************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-datetime-picker/components/uni-datetime-picker/i18n/en.json ***!
  \***********************************************************************************************************/
/*! exports provided: uni-datetime-picker.selectDate, uni-datetime-picker.selectTime, uni-datetime-picker.selectDateTime, uni-datetime-picker.startDate, uni-datetime-picker.endDate, uni-datetime-picker.startTime, uni-datetime-picker.endTime, uni-datetime-picker.ok, uni-datetime-picker.clear, uni-datetime-picker.cancel, uni-datetime-picker.year, uni-datetime-picker.month, uni-calender.MON, uni-calender.TUE, uni-calender.WED, uni-calender.THU, uni-calender.FRI, uni-calender.SAT, uni-calender.SUN, uni-calender.confirm, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-datetime-picker.selectDate\":\"select date\",\"uni-datetime-picker.selectTime\":\"select time\",\"uni-datetime-picker.selectDateTime\":\"select date and time\",\"uni-datetime-picker.startDate\":\"start date\",\"uni-datetime-picker.endDate\":\"end date\",\"uni-datetime-picker.startTime\":\"start time\",\"uni-datetime-picker.endTime\":\"end time\",\"uni-datetime-picker.ok\":\"ok\",\"uni-datetime-picker.clear\":\"clear\",\"uni-datetime-picker.cancel\":\"cancel\",\"uni-datetime-picker.year\":\"-\",\"uni-datetime-picker.month\":\"\",\"uni-calender.MON\":\"MON\",\"uni-calender.TUE\":\"TUE\",\"uni-calender.WED\":\"WED\",\"uni-calender.THU\":\"THU\",\"uni-calender.FRI\":\"FRI\",\"uni-calender.SAT\":\"SAT\",\"uni-calender.SUN\":\"SUN\",\"uni-calender.confirm\":\"confirm\"}");

/***/ }),

/***/ 573:
/*!****************************************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-datetime-picker/components/uni-datetime-picker/i18n/zh-Hans.json ***!
  \****************************************************************************************************************/
/*! exports provided: uni-datetime-picker.selectDate, uni-datetime-picker.selectTime, uni-datetime-picker.selectDateTime, uni-datetime-picker.startDate, uni-datetime-picker.endDate, uni-datetime-picker.startTime, uni-datetime-picker.endTime, uni-datetime-picker.ok, uni-datetime-picker.clear, uni-datetime-picker.cancel, uni-datetime-picker.year, uni-datetime-picker.month, uni-calender.SUN, uni-calender.MON, uni-calender.TUE, uni-calender.WED, uni-calender.THU, uni-calender.FRI, uni-calender.SAT, uni-calender.confirm, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-datetime-picker.selectDate\":\"选择日期\",\"uni-datetime-picker.selectTime\":\"选择时间\",\"uni-datetime-picker.selectDateTime\":\"选择日期时间\",\"uni-datetime-picker.startDate\":\"开始日期\",\"uni-datetime-picker.endDate\":\"结束日期\",\"uni-datetime-picker.startTime\":\"开始时间\",\"uni-datetime-picker.endTime\":\"结束时间\",\"uni-datetime-picker.ok\":\"确定\",\"uni-datetime-picker.clear\":\"清除\",\"uni-datetime-picker.cancel\":\"取消\",\"uni-datetime-picker.year\":\"年\",\"uni-datetime-picker.month\":\"月\",\"uni-calender.SUN\":\"日\",\"uni-calender.MON\":\"一\",\"uni-calender.TUE\":\"二\",\"uni-calender.WED\":\"三\",\"uni-calender.THU\":\"四\",\"uni-calender.FRI\":\"五\",\"uni-calender.SAT\":\"六\",\"uni-calender.confirm\":\"确认\"}");

/***/ }),

/***/ 574:
/*!****************************************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-datetime-picker/components/uni-datetime-picker/i18n/zh-Hant.json ***!
  \****************************************************************************************************************/
/*! exports provided: uni-datetime-picker.selectDate, uni-datetime-picker.selectTime, uni-datetime-picker.selectDateTime, uni-datetime-picker.startDate, uni-datetime-picker.endDate, uni-datetime-picker.startTime, uni-datetime-picker.endTime, uni-datetime-picker.ok, uni-datetime-picker.clear, uni-datetime-picker.cancel, uni-datetime-picker.year, uni-datetime-picker.month, uni-calender.SUN, uni-calender.MON, uni-calender.TUE, uni-calender.WED, uni-calender.THU, uni-calender.FRI, uni-calender.SAT, uni-calender.confirm, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"uni-datetime-picker.selectDate\":\"選擇日期\",\"uni-datetime-picker.selectTime\":\"選擇時間\",\"uni-datetime-picker.selectDateTime\":\"選擇日期時間\",\"uni-datetime-picker.startDate\":\"開始日期\",\"uni-datetime-picker.endDate\":\"結束日期\",\"uni-datetime-picker.startTime\":\"開始时间\",\"uni-datetime-picker.endTime\":\"結束时间\",\"uni-datetime-picker.ok\":\"確定\",\"uni-datetime-picker.clear\":\"清除\",\"uni-datetime-picker.cancel\":\"取消\",\"uni-datetime-picker.year\":\"年\",\"uni-datetime-picker.month\":\"月\",\"uni-calender.SUN\":\"日\",\"uni-calender.MON\":\"一\",\"uni-calender.TUE\":\"二\",\"uni-calender.WED\":\"三\",\"uni-calender.THU\":\"四\",\"uni-calender.FRI\":\"五\",\"uni-calender.SAT\":\"六\",\"uni-calender.confirm\":\"確認\"}");

/***/ }),

/***/ 575:
/*!******************************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-datetime-picker/components/uni-datetime-picker/util.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = void 0;
exports.addZero = addZero;
exports.checkDate = checkDate;
exports.dateCompare = dateCompare;
exports.fixIosDateFormat = fixIosDateFormat;
exports.getDate = getDate;
exports.getDateTime = getDateTime;
exports.getDefaultSecond = getDefaultSecond;
exports.getTime = getTime;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var Calendar = /*#__PURE__*/function () {
  function Calendar() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      selected = _ref.selected,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      range = _ref.range;
    (0, _classCallCheck2.default)(this, Calendar);
    // 当前日期
    this.date = this.getDateObj(new Date()); // 当前初入日期
    // 打点信息
    this.selected = selected || [];
    // 起始时间
    this.startDate = startDate;
    // 终止时间
    this.endDate = endDate;
    // 是否范围选择
    this.range = range;
    // 多选状态
    this.cleanMultipleStatus();
    // 每周日期
    this.weeks = {};
    this.lastHover = false;
  }
  /**
   * 设置日期
   * @param {Object} date
   */
  (0, _createClass2.default)(Calendar, [{
    key: "setDate",
    value: function setDate(date) {
      var selectDate = this.getDateObj(date);
      this.getWeeks(selectDate.fullDate);
    }

    /**
     * 清理多选状态
     */
  }, {
    key: "cleanMultipleStatus",
    value: function cleanMultipleStatus() {
      this.multipleStatus = {
        before: '',
        after: '',
        data: []
      };
    }
  }, {
    key: "setStartDate",
    value: function setStartDate(startDate) {
      this.startDate = startDate;
    }
  }, {
    key: "setEndDate",
    value: function setEndDate(endDate) {
      this.endDate = endDate;
    }
  }, {
    key: "getPreMonthObj",
    value: function getPreMonthObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      var oldMonth = date.getMonth();
      date.setMonth(oldMonth - 1);
      var newMonth = date.getMonth();
      if (oldMonth !== 0 && newMonth - oldMonth === 0) {
        date.setMonth(newMonth - 1);
      }
      return this.getDateObj(date);
    }
  }, {
    key: "getNextMonthObj",
    value: function getNextMonthObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      var oldMonth = date.getMonth();
      date.setMonth(oldMonth + 1);
      var newMonth = date.getMonth();
      if (newMonth - oldMonth > 1) {
        date.setMonth(newMonth - 1);
      }
      return this.getDateObj(date);
    }

    /**
     * 获取指定格式Date对象
     */
  }, {
    key: "getDateObj",
    value: function getDateObj(date) {
      date = fixIosDateFormat(date);
      date = new Date(date);
      return {
        fullDate: getDate(date),
        year: date.getFullYear(),
        month: addZero(date.getMonth() + 1),
        date: addZero(date.getDate()),
        day: date.getDay()
      };
    }

    /**
     * 获取上一个月日期集合
     */
  }, {
    key: "getPreMonthDays",
    value: function getPreMonthDays(amount, dateObj) {
      var result = [];
      for (var i = amount - 1; i >= 0; i--) {
        var month = dateObj.month - 1;
        result.push({
          date: new Date(dateObj.year, month, -i).getDate(),
          month: month,
          disable: true
        });
      }
      return result;
    }
    /**
     * 获取本月日期集合
     */
  }, {
    key: "getCurrentMonthDays",
    value: function getCurrentMonthDays(amount, dateObj) {
      var _this = this;
      var result = [];
      var fullDate = this.date.fullDate;
      var _loop = function _loop(i) {
        var currentDate = "".concat(dateObj.year, "-").concat(dateObj.month, "-").concat(addZero(i));
        var isToday = fullDate === currentDate;
        // 获取打点信息
        var info = _this.selected && _this.selected.find(function (item) {
          if (_this.dateEqual(currentDate, item.date)) {
            return item;
          }
        });

        // 日期禁用
        var disableBefore = true;
        var disableAfter = true;
        if (_this.startDate) {
          disableBefore = dateCompare(_this.startDate, currentDate);
        }
        if (_this.endDate) {
          disableAfter = dateCompare(currentDate, _this.endDate);
        }
        var multiples = _this.multipleStatus.data;
        var multiplesStatus = -1;
        if (_this.range && multiples) {
          multiplesStatus = multiples.findIndex(function (item) {
            return _this.dateEqual(item, currentDate);
          });
        }
        var checked = multiplesStatus !== -1;
        result.push({
          fullDate: currentDate,
          year: dateObj.year,
          date: i,
          multiple: _this.range ? checked : false,
          beforeMultiple: _this.isLogicBefore(currentDate, _this.multipleStatus.before, _this.multipleStatus.after),
          afterMultiple: _this.isLogicAfter(currentDate, _this.multipleStatus.before, _this.multipleStatus.after),
          month: dateObj.month,
          disable: _this.startDate && !dateCompare(_this.startDate, currentDate) || _this.endDate && !dateCompare(currentDate, _this.endDate),
          isToday: isToday,
          userChecked: false,
          extraInfo: info
        });
      };
      for (var i = 1; i <= amount; i++) {
        _loop(i);
      }
      return result;
    }
    /**
     * 获取下一个月日期集合
     */
  }, {
    key: "_getNextMonthDays",
    value: function _getNextMonthDays(amount, dateObj) {
      var result = [];
      var month = dateObj.month + 1;
      for (var i = 1; i <= amount; i++) {
        result.push({
          date: i,
          month: month,
          disable: true
        });
      }
      return result;
    }

    /**
     * 获取当前日期详情
     * @param {Object} date
     */
  }, {
    key: "getInfo",
    value: function getInfo(date) {
      var _this2 = this;
      if (!date) {
        date = new Date();
      }
      return this.calendar.find(function (item) {
        return item.fullDate === _this2.getDateObj(date).fullDate;
      });
    }

    /**
     * 比较时间是否相等
     */
  }, {
    key: "dateEqual",
    value: function dateEqual(before, after) {
      before = new Date(fixIosDateFormat(before));
      after = new Date(fixIosDateFormat(after));
      return before.valueOf() === after.valueOf();
    }

    /**
     *  比较真实起始日期
     */
  }, {
    key: "isLogicBefore",
    value: function isLogicBefore(currentDate, before, after) {
      var logicBefore = before;
      if (before && after) {
        logicBefore = dateCompare(before, after) ? before : after;
      }
      return this.dateEqual(logicBefore, currentDate);
    }
  }, {
    key: "isLogicAfter",
    value: function isLogicAfter(currentDate, before, after) {
      var logicAfter = after;
      if (before && after) {
        logicAfter = dateCompare(before, after) ? after : before;
      }
      return this.dateEqual(logicAfter, currentDate);
    }

    /**
     * 获取日期范围内所有日期
     * @param {Object} begin
     * @param {Object} end
     */
  }, {
    key: "geDateAll",
    value: function geDateAll(begin, end) {
      var arr = [];
      var ab = begin.split('-');
      var ae = end.split('-');
      var db = new Date();
      db.setFullYear(ab[0], ab[1] - 1, ab[2]);
      var de = new Date();
      de.setFullYear(ae[0], ae[1] - 1, ae[2]);
      var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
      var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
      for (var k = unixDb; k <= unixDe;) {
        k = k + 24 * 60 * 60 * 1000;
        arr.push(this.getDateObj(new Date(parseInt(k))).fullDate);
      }
      return arr;
    }

    /**
     *  获取多选状态
     */
  }, {
    key: "setMultiple",
    value: function setMultiple(fullDate) {
      if (!this.range) return;
      var _this$multipleStatus = this.multipleStatus,
        before = _this$multipleStatus.before,
        after = _this$multipleStatus.after;
      if (before && after) {
        if (!this.lastHover) {
          this.lastHover = true;
          return;
        }
        this.multipleStatus.before = fullDate;
        this.multipleStatus.after = '';
        this.multipleStatus.data = [];
        this.multipleStatus.fulldate = '';
        this.lastHover = false;
      } else {
        if (!before) {
          this.multipleStatus.before = fullDate;
          this.multipleStatus.after = undefined;
          this.lastHover = false;
        } else {
          this.multipleStatus.after = fullDate;
          if (dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
          } else {
            this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
          }
          this.lastHover = true;
        }
      }
      this.getWeeks(fullDate);
    }

    /**
     *  鼠标 hover 更新多选状态
     */
  }, {
    key: "setHoverMultiple",
    value: function setHoverMultiple(fullDate) {
      //抖音小程序点击会触发hover事件，需要避免一下

      if (!this.range || this.lastHover) return;
      var before = this.multipleStatus.before;
      if (!before) {
        this.multipleStatus.before = fullDate;
      } else {
        this.multipleStatus.after = fullDate;
        if (dateCompare(this.multipleStatus.before, this.multipleStatus.after)) {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.before, this.multipleStatus.after);
        } else {
          this.multipleStatus.data = this.geDateAll(this.multipleStatus.after, this.multipleStatus.before);
        }
      }
      this.getWeeks(fullDate);
    }

    /**
     * 更新默认值多选状态
     */
  }, {
    key: "setDefaultMultiple",
    value: function setDefaultMultiple(before, after) {
      this.multipleStatus.before = before;
      this.multipleStatus.after = after;
      if (before && after) {
        if (dateCompare(before, after)) {
          this.multipleStatus.data = this.geDateAll(before, after);
          this.getWeeks(after);
        } else {
          this.multipleStatus.data = this.geDateAll(after, before);
          this.getWeeks(before);
        }
      }
    }

    /**
     * 获取每周数据
     * @param {Object} dateData
     */
  }, {
    key: "getWeeks",
    value: function getWeeks(dateData) {
      var _this$getDateObj = this.getDateObj(dateData),
        year = _this$getDateObj.year,
        month = _this$getDateObj.month;
      var preMonthDayAmount = new Date(year, month - 1, 1).getDay();
      var preMonthDays = this.getPreMonthDays(preMonthDayAmount, this.getDateObj(dateData));
      var currentMonthDayAmount = new Date(year, month, 0).getDate();
      var currentMonthDays = this.getCurrentMonthDays(currentMonthDayAmount, this.getDateObj(dateData));
      var nextMonthDayAmount = 42 - preMonthDayAmount - currentMonthDayAmount;
      var nextMonthDays = this._getNextMonthDays(nextMonthDayAmount, this.getDateObj(dateData));
      var calendarDays = [].concat((0, _toConsumableArray2.default)(preMonthDays), (0, _toConsumableArray2.default)(currentMonthDays), (0, _toConsumableArray2.default)(nextMonthDays));
      var weeks = new Array(6);
      for (var i = 0; i < calendarDays.length; i++) {
        var index = Math.floor(i / 7);
        if (!weeks[index]) {
          weeks[index] = new Array(7);
        }
        weeks[index][i % 7] = calendarDays[i];
      }
      this.calendar = calendarDays;
      this.weeks = weeks;
    }
  }]);
  return Calendar;
}();
exports.Calendar = Calendar;
function getDateTime(date, hideSecond) {
  return "".concat(getDate(date), " ").concat(getTime(date, hideSecond));
}
function getDate(date) {
  date = fixIosDateFormat(date);
  date = new Date(date);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  return "".concat(year, "-").concat(addZero(month), "-").concat(addZero(day));
}
function getTime(date, hideSecond) {
  date = fixIosDateFormat(date);
  date = new Date(date);
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  return hideSecond ? "".concat(addZero(hour), ":").concat(addZero(minute)) : "".concat(addZero(hour), ":").concat(addZero(minute), ":").concat(addZero(second));
}
function addZero(num) {
  if (num < 10) {
    num = "0".concat(num);
  }
  return num;
}
function getDefaultSecond(hideSecond) {
  return hideSecond ? '00:00' : '00:00:00';
}
function dateCompare(startDate, endDate) {
  startDate = new Date(fixIosDateFormat(startDate));
  endDate = new Date(fixIosDateFormat(endDate));
  return startDate <= endDate;
}
function checkDate(date) {
  var dateReg = /((19|20)\d{2})(-|\/)\d{1,2}(-|\/)\d{1,2}/g;
  return date.match(dateReg);
}
//ios低版本15及以下，无法匹配 没有 ’秒‘ 时的情况，所以需要在末尾 秒 加上 问号
var dateTimeReg = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])( [0-5]?[0-9]:[0-5]?[0-9](:[0-5]?[0-9])?)?$/;
function fixIosDateFormat(value) {
  if (typeof value === 'string' && dateTimeReg.test(value)) {
    value = value.replace(/-/g, '/');
  }
  return value;
}

/***/ }),

/***/ 58:
/*!***********************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/top2.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 59:
/*!***********************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/oneG.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/oneG.png";

/***/ }),

/***/ 590:
/*!*******************************************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-transition/components/uni-transition/createAnimation.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAnimation = createAnimation;
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// const defaultOption = {
// 	duration: 300,
// 	timingFunction: 'linear',
// 	delay: 0,
// 	transformOrigin: '50% 50% 0'
// }
var MPAnimation = /*#__PURE__*/function () {
  function MPAnimation(options, _this) {
    (0, _classCallCheck2.default)(this, MPAnimation);
    this.options = options;
    // 在iOS10+QQ小程序平台下，传给原生的对象一定是个普通对象而不是Proxy对象，否则会报parameter should be Object instead of ProxyObject的错误
    this.animation = uni.createAnimation(_objectSpread({}, options));
    this.currentStepAnimates = {};
    this.next = 0;
    this.$ = _this;
  }
  (0, _createClass2.default)(MPAnimation, [{
    key: "_nvuePushAnimates",
    value: function _nvuePushAnimates(type, args) {
      var aniObj = this.currentStepAnimates[this.next];
      var styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = '';
        }
        var unit = '';
        if (type === 'rotate') {
          unit = 'deg';
        }
        styles.styles.transform += "".concat(type, "(").concat(args + unit, ") ");
      } else {
        styles.styles[type] = "".concat(args);
      }
      this.currentStepAnimates[this.next] = styles;
    }
  }, {
    key: "_animateRun",
    value: function _animateRun() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var ref = this.$.$refs['ani'].ref;
      if (!ref) return;
      return new Promise(function (resolve, reject) {
        nvueAnimation.transition(ref, _objectSpread({
          styles: styles
        }, config), function (res) {
          resolve();
        });
      });
    }
  }, {
    key: "_nvueNextAnimate",
    value: function _nvueNextAnimate(animates) {
      var _this2 = this;
      var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var fn = arguments.length > 2 ? arguments[2] : undefined;
      var obj = animates[step];
      if (obj) {
        var styles = obj.styles,
          config = obj.config;
        this._animateRun(styles, config).then(function () {
          step += 1;
          _this2._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === 'function' && fn();
        this.isEnd = true;
      }
    }
  }, {
    key: "step",
    value: function step() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.animation.step(config);
      return this;
    }
  }, {
    key: "run",
    value: function run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(function () {
        typeof fn === 'function' && fn();
      }, this.$.durationTime);
    }
  }]);
  return MPAnimation;
}();
var animateTypes1 = ['matrix', 'matrix3d', 'rotate', 'rotate3d', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scale3d', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'translate', 'translate3d', 'translateX', 'translateY', 'translateZ'];
var animateTypes2 = ['opacity', 'backgroundColor'];
var animateTypes3 = ['width', 'height', 'left', 'right', 'top', 'bottom'];
animateTypes1.concat(animateTypes2, animateTypes3).forEach(function (type) {
  MPAnimation.prototype[type] = function () {
    var _this$animation;
    (_this$animation = this.animation)[type].apply(_this$animation, arguments);
    return this;
  };
});
function createAnimation(option, _this) {
  if (!_this) return;
  clearTimeout(_this.timer);
  return new MPAnimation(option, _this);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 6:
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 60:
/*!***********************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/top3.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 61:
/*!***********************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/oneE.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/oneE.png";

/***/ }),

/***/ 7:
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) {
        ;
      }
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8:
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ 9);
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 82:
/*!************************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-id-pages/common/store.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uniCloud, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = exports.mutations = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 28));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 31));
var _pages = _interopRequireDefault(__webpack_require__(/*! @/pages.json */ 37));
var _config = _interopRequireDefault(__webpack_require__(/*! @/uni_modules/uni-id-pages/config.js */ 83));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var uniIdCo = uniCloud.importObject("uni-id-co");
var db = uniCloud.database();
var usersTable = db.collection('uni-id-users');
var hostUserInfo = uni.getStorageSync('uni-id-pages-userInfo') || {};
// console.log( hostUserInfo);
var data = {
  userInfo: hostUserInfo,
  hasLogin: Object.keys(hostUserInfo).length != 0
};

// console.log('data', data);
// 定义 mutations, 修改属性
var mutations = {
  // data不为空，表示传递要更新的值(注意不是覆盖是合并),什么也不传时，直接查库获取更新
  updateUserInfo: function updateUserInfo() {
    var _arguments = arguments,
      _this = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var data, _uniIdCo, res, realNameRes;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : false;
              if (!data) {
                _context.next = 5;
                break;
              }
              usersTable.where('_id==$env.uid').update(data).then(function (e) {
                // console.log(e);
                if (e.result.updated) {
                  uni.showToast({
                    title: "更新成功",
                    icon: 'none',
                    duration: 3000
                  });
                  _this.setUserInfo(data);
                } else {
                  uni.showToast({
                    title: "没有改变",
                    icon: 'none',
                    duration: 3000
                  });
                }
              });
              _context.next = 20;
              break;
            case 5:
              _uniIdCo = uniCloud.importObject("uni-id-co", {
                customUI: true
              });
              _context.prev = 6;
              _context.next = 9;
              return usersTable.where("'_id' == $cloudEnv_uid").field('mobile,nickname,username,email,avatar_file').get();
            case 9:
              res = _context.sent;
              _context.next = 12;
              return _uniIdCo.getRealNameInfo();
            case 12:
              realNameRes = _context.sent;
              // console.log('fromDbData',res.result.data);
              _this.setUserInfo(_objectSpread(_objectSpread({}, res.result.data[0]), {}, {
                realNameAuth: realNameRes
              }));
              _context.next = 20;
              break;
            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](6);
              _this.setUserInfo({}, {
                cover: true
              });
              console.error(_context.t0.message, _context.t0.errCode);
            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[6, 16]]);
    }))();
  },
  setUserInfo: function setUserInfo(data) {
    var _arguments2 = arguments;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var _ref, cover, userInfo;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _ref = _arguments2.length > 1 && _arguments2[1] !== undefined ? _arguments2[1] : {
                cover: false
              }, cover = _ref.cover;
              // console.log('set-userInfo', data);
              userInfo = cover ? data : Object.assign(store.userInfo, data);
              store.userInfo = Object.assign({}, userInfo);
              store.hasLogin = Object.keys(store.userInfo).length != 0;
              // console.log('store.userInfo', store.userInfo);
              uni.setStorageSync('uni-id-pages-userInfo', store.userInfo);
              return _context2.abrupt("return", data);
            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  logout: function logout() {
    var _this2 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(uniCloud.getCurrentUserInfo().tokenExpired > Date.now())) {
                _context3.next = 9;
                break;
              }
              _context3.prev = 1;
              _context3.next = 4;
              return uniIdCo.logout();
            case 4:
              _context3.next = 9;
              break;
            case 6:
              _context3.prev = 6;
              _context3.t0 = _context3["catch"](1);
              console.error(_context3.t0);
            case 9:
              uni.removeStorageSync('uni_id_token');
              uni.setStorageSync('uni_id_token_expired', 0);
              // uni.redirectTo({
              // 	url: `/${pagesJson.uniIdRouter && pagesJson.uniIdRouter.loginPage ? pagesJson.uniIdRouter.loginPage: 'uni_modules/uni-id-pages/pages/login/login-withoutpwd'}`,
              // });
              uni.navigateBack({
                delta: 1
              });
              uni.$emit('uni-id-pages-logout');
              _this2.setUserInfo({}, {
                cover: true
              });
            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 6]]);
    }))();
  },
  loginBack: function loginBack() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _e$uniIdRedirectUrl = e.uniIdRedirectUrl,
      uniIdRedirectUrl = _e$uniIdRedirectUrl === void 0 ? '' : _e$uniIdRedirectUrl;
    var delta = 0; //判断需要返回几层
    var pages = getCurrentPages();
    // console.log(pages);
    pages.forEach(function (page, index) {
      if (pages[pages.length - index - 1].route.split('/')[3] == 'login') {
        delta++;
      }
    });
    // console.log('判断需要返回几层:', delta);
    if (uniIdRedirectUrl) {
      return uni.redirectTo({
        url: uniIdRedirectUrl,
        fail: function fail(err1) {
          uni.switchTab({
            url: uniIdRedirectUrl,
            fail: function fail(err2) {
              console.log(err1, err2);
            }
          });
        }
      });
    }
    if (delta) {
      var page = _pages.default.pages[0];
      return uni.reLaunch({
        url: "/".concat(page.path)
      });
    }
    uni.navigateBack({
      delta: delta
    });
  },
  loginSuccess: function loginSuccess() {
    var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _e$showToast = e.showToast,
      showToast = _e$showToast === void 0 ? true : _e$showToast,
      _e$toastText = e.toastText,
      toastText = _e$toastText === void 0 ? '登录成功' : _e$toastText,
      _e$autoBack = e.autoBack,
      autoBack = _e$autoBack === void 0 ? true : _e$autoBack,
      _e$uniIdRedirectUrl2 = e.uniIdRedirectUrl,
      uniIdRedirectUrl = _e$uniIdRedirectUrl2 === void 0 ? '' : _e$uniIdRedirectUrl2,
      passwordConfirmed = e.passwordConfirmed;
    // console.log({toastText,autoBack});
    if (showToast) {
      uni.showToast({
        title: toastText,
        icon: 'none',
        duration: 3000
      });
    }
    this.updateUserInfo();
    uni.$emit('uni-id-pages-login-success');
    if (_config.default.setPasswordAfterLogin && !passwordConfirmed) {
      return uni.redirectTo({
        url: uniIdRedirectUrl ? "/uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd?uniIdRedirectUrl=".concat(uniIdRedirectUrl, "&loginType=").concat(e.loginType) : "/uni_modules/uni-id-pages/pages/userinfo/set-pwd/set-pwd?loginType=".concat(e.loginType),
        fail: function fail(err) {
          console.log(err);
        }
      });
    }
    if (autoBack) {
      this.loginBack({
        uniIdRedirectUrl: uniIdRedirectUrl
      });
    }
  }
};
exports.mutations = mutations;
// 通过Vue.observable创建一个可响应的对象
var store = _vue.default.observable(data);
exports.store = store;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 83:
/*!******************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/uni_modules/uni-id-pages/config.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  // 调试模式
  debug: true,
  /*
  登录类型 未列举到的或运行环境不支持的，将被自动隐藏。
  如果需要在不同平台有不同的配置，直接用条件编译即可
  */
  isAdmin: false,
  // 区分管理端与用户端
  loginTypes: [
  // "qq",
  // "xiaomi",
  // "sinaweibo",
  // "taobao",
  // "facebook",
  // "google",
  // "alipay",
  // "douyin",

  'weixin', 'username', 'smsCode'],
  // 政策协议
  agreements: {
    serviceUrl: 'https://xxx',
    // 用户服务协议链接
    privacyUrl: 'https://xxx',
    // 隐私政策条款链接
    // 哪些场景下显示，1.注册（包括登录并注册，如：微信登录、苹果登录、短信验证码登录）、2.登录（如：用户名密码登录）
    scope: ['register', 'login', 'realNameVerify']
  },
  // 提供各类服务接入（如微信登录服务）的应用id
  appid: {
    weixin: {
      // 微信公众号的appid，来源:登录微信公众号（https://mp.weixin.qq.com）-> 设置与开发 -> 基本配置 -> 公众号开发信息 -> AppID
      h5: 'wx5cf52b9a6ec9fb8c',
      // 微信开放平台的appid，来源:登录微信开放平台（https://open.weixin.qq.com） -> 管理中心 -> 网站应用 -> 选择对应的应用名称，点击查看 -> AppID
      web: 'wx5cf52b9a6ec9fb8c'
    }
  },
  /**
  * 密码强度
  * super（超强：密码必须包含大小写字母、数字和特殊符号，长度范围：8-16位之间）
  * strong（强: 密密码必须包含字母、数字和特殊符号，长度范围：8-16位之间）
  * medium (中：密码必须为字母、数字和特殊符号任意两种的组合，长度范围：8-16位之间)
  * weak（弱：密码必须包含字母和数字，长度范围：6-16位之间）
  * 为空或false则不验证密码强度
  */
  passwordStrength: 'medium',
  /**
  * 登录后允许用户设置密码（只针对未设置密码得用户）
  * 开启此功能将 setPasswordAfterLogin 设置为 true 即可
  * "setPasswordAfterLogin": false
  *
  * 如果允许用户跳过设置密码 将 allowSkip 设置为 true
  * "setPasswordAfterLogin": {
  *   "allowSkip": true
  * }
  * */
  setPasswordAfterLogin: false
  // setPasswordAfterLogin: {
  //    "allowSkip": true
  // }
};
exports.default = _default;

/***/ }),

/***/ 9:
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 90:
/*!****************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/shopImage.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 93:
/*!**************************************************************!*\
  !*** F:/HBuilderX/uniapi_pro/pages/index/scenicSpot/data.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultPersonList = void 0;
var defaultPersonList = [{
  tatle: '优惠套票',
  pathimg: [{
    url: __webpack_require__(/*! ../../../static/oneD.png */ 94),
    text: '中央大街',
    textance: '国家级风景名胜区'
  }, {
    url: __webpack_require__(/*! ../../../static/oneD.png */ 94),
    text: '中央大街',
    textance: '国家级风景名胜区'
  }, {
    url: __webpack_require__(/*! ../../../static/oneD.png */ 94),
    text: '中央大街',
    textance: '国家级风景名胜区'
  }, {
    url: __webpack_require__(/*! ../../../static/oneD.png */ 94),
    text: '中央大街',
    textance: '国家级风景名胜区'
  }]
}, {
  tatle: '景区门票',
  pathimg: [{
    url: __webpack_require__(/*! ../../../static/oneD.png */ 94),
    text: '中央大街',
    textance: '国家级风景名胜区'
  }, {
    url: __webpack_require__(/*! ../../../static/oneD.png */ 94),
    text: '中央大街',
    textance: '国家级风景名胜区'
  }, {
    url: __webpack_require__(/*! ../../../static/oneD.png */ 94),
    text: '中央大街',
    textance: '国家级风景名胜区'
  }, {
    url: __webpack_require__(/*! ../../../static/oneD.png */ 94),
    text: '中央大街',
    textance: '国家级风景名胜区'
  }, {
    url: __webpack_require__(/*! ../../../static/oneD.png */ 94),
    text: '中央大街',
    textance: '国家级风景名胜区'
  }, {
    url: __webpack_require__(/*! ../../../static/oneD.png */ 94),
    text: '中央大街',
    textance: '国家级风景名胜区'
  }, {
    url: __webpack_require__(/*! ../../../static/oneD.png */ 94),
    text: '中央大街',
    textance: '国家级风景名胜区'
  }]
}];
exports.defaultPersonList = defaultPersonList;

/***/ }),

/***/ 94:
/*!***********************************************!*\
  !*** F:/HBuilderX/uniapi_pro/static/oneD.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/oneD.png";

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map