(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/MicroTravel/details/details"],{"4baf":function(t,e,n){"use strict";var a=n("da58"),c=n.n(a);c.a},"52f9":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},c=[]},"5c8f":function(t,e,n){"use strict";(function(t,e){var a=n("47a9");n("ab81"),n("861b");a(n("3240"));var c=a(n("c64c"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(c.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},"7d40":function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=t.database(),c={data:function(){return{swiperItemList:{}}},onLoad:function(t){this.requst(t.id)},methods:{requst:function(t){var e=this;n.showLoading({title:"加载中...",mask:!0}),a.collection("demo-Nav-MicroTrave").where("_id=='".concat(t,"'")).orderBy("_id","asc").get().then((function(t){console.log(t),e.swiperItemList=t.result.data[0],console.log(e.swiperItemList),n.hideLoading()})).catch((function(t){console.log(t.message),console.log(t.code)}),2e3)}}};e.default=c}).call(this,n("861b")["default"],n("df3c")["default"])},c64c:function(t,e,n){"use strict";n.r(e);var a=n("52f9"),c=n("edba");for(var o in c)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return c[t]}))}(o);n("4baf");var i=n("828b"),u=Object(i["a"])(c["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);e["default"]=u.exports},da58:function(t,e,n){},edba:function(t,e,n){"use strict";n.r(e);var a=n("7d40"),c=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);e["default"]=c.a}},[["5c8f","common/runtime","common/vendor"]]]);