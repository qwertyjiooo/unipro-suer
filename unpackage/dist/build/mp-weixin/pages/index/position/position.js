(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/position/position"],{7497:function(t,e,n){"use strict";(function(t,i){var a=n("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("fc1a")),u=t.database(),c={data:function(){return{long:"",lat:"",qqmapsdk:"",covers:[{id:1,title:"中央大街",latitude:44.7249074,longitude:128.5881125,iconPath:"../../../static/markers.png",with:35,height:24}],rankDateList:{}}},mounted:function(){},onLoad:function(t){console.log(this.id),this.qqmapsdk=new o.default({key:"NOBBZ-P7GKC-YCO22-A3KEL-TQGJQ-JGFCZ"}),this.requst(t.id)},onShow:function(){},methods:{requst:function(t){var e=this;i.showLoading({title:"加载中...",mask:!0}),u.collection("demo-recommended-tourist").where("_id=='".concat(t,"'")).get().then((function(t){console.log(t);var n=t.result.data[0];e.rankDateList=n,e.long=n.longitude,e.lat=n.latitude,e.covers[0].title=n.title,e.covers[0].longitude=n.longitude,e.covers[0].latitude=n.latitude,i.hideLoading()})).catch((function(t){console.log(t.message),console.log(t.code)}),2e3)},onMarkerTap:function(){console.log("11111",this.rankDateList.title);requirePlugin("routePlan");var t=JSON.stringify({name:this.rankDateList.title,latitude:this.rankDateList.latitude,longitude:this.rankDateList.longitude});i.navigateTo({url:"plugin://routePlan/index?key=NOBBZ-P7GKC-YCO22-A3KEL-TQGJQ-JGFCZ&referer=text&endPoint="+t})}}};e.default=c}).call(this,n("861b")["default"],n("df3c")["default"])},"837e":function(t,e,n){"use strict";n.r(e);var i=n("7497"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},b34a:function(t,e,n){"use strict";var i=n("e9ec"),a=n.n(i);a.a},c17d:function(t,e,n){"use strict";(function(t,e){var i=n("47a9");n("ab81"),n("861b");i(n("3240"));var a=i(n("cffd"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},cffd:function(t,e,n){"use strict";n.r(e);var i=n("ff70"),a=n("837e");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("b34a");var u=n("828b"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=c.exports},e9ec:function(t,e,n){},ff70:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},a=[]}},[["c17d","common/runtime","common/vendor"]]]);