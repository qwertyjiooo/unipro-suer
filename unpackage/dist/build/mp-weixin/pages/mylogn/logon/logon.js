(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mylogn/logon/logon"],{"521f":function(n,e,o){"use strict";var t=o("9783"),c=o.n(t);c.a},"692f":function(n,e,o){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{}},methods:{WXlogin:function(){n.showModal({title:"登录获取权限提醒",content:"是否同意获取权限",success:function(e){e.confirm?(console.log("用户点击确定"),n.getUserProfile({desc:"获取用户权限",success:function(e){console.log("userinfo",e),n.login({provider:"weixin",success:function(e){console.log("code",e),n.request({url:"https://api.weixin.qq.com/sns/jscode2session",method:"GET",data:{appid:"wx5cf52b9a6ec9fb8c",secret:"586bfd917c04ade65ac86486ae4c4fc7",js_code:e.code,grant_type:"authoriztion_code"},success:function(n){console.log(n,"res2")}})}})},fail:function(e){n.showToast({title:"错误",icon:"none"}),console.log("err",e)}})):e.cancel&&(console.log("用户点击取消"),n.showToast({title:"获取失败",icon:"none"}))}})}}};e.default=o}).call(this,o("df3c")["default"])},"7b35":function(n,e,o){"use strict";o.d(e,"b",(function(){return t})),o.d(e,"c",(function(){return c})),o.d(e,"a",(function(){}));var t=function(){var n=this.$createElement;this._self._c},c=[]},"85b8":function(n,e,o){"use strict";o.r(e);var t=o("692f"),c=o.n(t);for(var i in t)["default"].indexOf(i)<0&&function(n){o.d(e,n,(function(){return t[n]}))}(i);e["default"]=c.a},9783:function(n,e,o){},d5b8:function(n,e,o){"use strict";(function(n,e){var t=o("47a9");o("ab81"),o("861b");t(o("3240"));var c=t(o("fcbe"));n.__webpack_require_UNI_MP_PLUGIN__=o,e(c.default)}).call(this,o("3223")["default"],o("df3c")["createPage"])},fcbe:function(n,e,o){"use strict";o.r(e);var t=o("7b35"),c=o("85b8");for(var i in c)["default"].indexOf(i)<0&&function(n){o.d(e,n,(function(){return c[n]}))}(i);o("521f");var s=o("828b"),u=Object(s["a"])(c["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],void 0);e["default"]=u.exports}},[["d5b8","common/runtime","common/vendor"]]]);