(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/homestays/details/demandForm/demandForm"],{"33b0":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return s})),t.d(n,"a",(function(){return i}));var i={uniDatetimePicker:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker")]).then(t.bind(null,"5a1e"))},uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(t.bind(null,"1efe"))},uniPopup:function(){return t.e("uni_modules/uni-popup/components/uni-popup/uni-popup").then(t.bind(null,"9be3"))},uniPopupMessage:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-popup/components/uni-popup-message/uni-popup-message")]).then(t.bind(null,"03d1"))}},o=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.tab="home"},e.e1=function(n){e.tab="enterprise"})},s=[]},"59a8":function(e,n,t){},"6d73":function(e,n,t){"use strict";t.r(n);var i=t("7b85"),o=t.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(s);n["default"]=o.a},"7b85":function(e,n,t){"use strict";(function(e,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e.database(),o={data:function(){return{single:"",range:["",""],datetimerange:[],start:Date.now()-1e9,end:Date.now()+1e9,adult:0,children:0,tab:"home",demandForm:{},demandFormUser:{},msgType:"success",messageText:"这是一条成功提示"}},onLoad:function(e){this.demandForm=JSON.parse(decodeURIComponent(e.demandForm)),console.log(this.demandForm),this.demandFormUser=JSON.parse(decodeURIComponent(e.demandFormUser))},mounted:function(){var e=this;setTimeout((function(){e.datetimesingle=Date.now()-1728e5,e.single="2021-2-12",e.datetimerange=["2021-07-08 0:01:10","2021-08-08 23:59:59"]}),3e3),this.$watch("range",(function(e,n){this.demandForm.playtime=e[0]+"-"+e[1]})),this.$watch("tab",(function(e,n){"home"===e?this.demandForm.customizaType=0:(this.demandForm.customizaType=1,this.demandForm.enterpriseName="")}))},methods:{change:function(e){this.single=e,console.log("change事件:",this.single=e)},numberPeople:function(){this.$refs.popup.open("center")},close:function(){this.$refs.popup.close(),this.demandForm.NumberTravelers=this.adult+"成人，"+this.children+"儿童"},tabHome:function(e){this.tab=e,console.log(this.tab)},adultJia:function(){this.adult++},adultJian:function(){this.adult--},childrenJia:function(){this.children++},childrenJian:function(){this.children--},submit:function(){if(console.log(this.demandForm),""===this.demandForm.playtime)this.msgType="error",this.messageText="请选择出行时间",this.$refs.message.open();else if(0===this.adult&&0===this.children)this.msgType="error",this.messageText="请选择出行人数",this.$refs.message.open();else if(""===this.demandForm.budget)this.msgType="error",this.messageText="请输入人均预算",this.$refs.message.open();else if(""===this.demandForm.contacts)this.msgType="error",this.messageText="请输入联系人",this.$refs.message.open();else if(""===this.demandForm.contactPhone)this.msgType="error",this.messageText="请输入联系电话",this.$refs.message.open();else if("enterprise"===this.tab&&""===this.demandForm.enterpriseName)this.msgType="error",this.messageText="请输入企业名称",this.$refs.message.open();else if(e.getCurrentUserInfo().uid){var n=Date.now().toString(),i=Math.floor(1e4*Math.random()).toString().padStart(4,"0");this.demandForm.orderNumber=n+i,this.request()}else t.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd?type=smsCode"})},request:function(){t.showLoading({title:"加载中...",mask:!0}),i.collection("demo-order-form").add(this.demandForm).then((function(e){console.log(e),t.navigateBack({delta:1}),t.hideLoading()})).catch((function(e){console.log(e.message),console.log(e.code)}))}}};n.default=o}).call(this,t("861b")["default"],t("df3c")["default"])},8275:function(e,n,t){"use strict";(function(e,n){var i=t("47a9");t("ab81"),t("861b");i(t("3240"));var o=i(t("f257"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t("3223")["default"],t("df3c")["createPage"])},b17d:function(e,n,t){"use strict";var i=t("59a8"),o=t.n(i);o.a},f257:function(e,n,t){"use strict";t.r(n);var i=t("33b0"),o=t("6d73");for(var s in o)["default"].indexOf(s)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(s);t("b17d");var a=t("828b"),r=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=r.exports}},[["8275","common/runtime","common/vendor"]]]);