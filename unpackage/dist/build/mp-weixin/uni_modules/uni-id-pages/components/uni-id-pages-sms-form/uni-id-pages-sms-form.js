(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/uni-id-pages-sms-form/uni-id-pages-sms-form"],{"1ffe":function(e,t,n){"use strict";n.r(t);var i=n("82e8"),u=n("93ce");for(var o in u)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(o);n("d376");var a=n("828b"),c=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,"b8ac4d94",null,!1,i["a"],void 0);t["default"]=c.exports},"82e8":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniCaptcha:function(){return n.e("uni_modules/uni-captcha/components/uni-captcha/uni-captcha").then(n.bind(null,"1e1f"))},uniEasyinput:function(){return n.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(n.bind(null,"c3a4"))}},u=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.focusSmsCodeInput=!1})},o=[]},"93ce":function(e,t,n){"use strict";n.r(t);var i=n("ccd0"),u=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=u.a},ccd0:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"uni-sms-form",model:{prop:"modelValue",event:"update:modelValue"},props:{event:["update:modelValue"],count:{type:[String,Number],default:60},phone:{type:[String,Number],default:""},type:{type:String,default:function(){return"login"}},focusCaptchaInput:{type:Boolean,default:function(){return!1}}},data:function(){return{captcha:"",reverseNumber:0,reverseTimer:null,modelValue:"",focusSmsCodeInput:!1}},watch:{captcha:function(e,t){4==e.length&&4!=t.length&&this.start()},modelValue:function(e){this.$emit("input",e),this.$emit("update:modelValue",e)}},computed:{innerText:function(){return 0==this.reverseNumber?"获取短信验证码":"重新发送("+this.reverseNumber+"s)"}},created:function(){this.initClick()},methods:{getImageCaptcha:function(e){this.$refs.captcha.getImageCaptcha(e)},initClick:function(){var e=this;this.start=function(e,t){var n;return t=t||500,function(){var i=this,u=arguments;n&&clearTimeout(n);var o=!n;n=setTimeout((function(){n=null}),t),o&&e.apply(i,u)}}((function(){0==e.reverseNumber&&e.sendMsg()}))},sendMsg:function(){var t=this;if(4!=this.captcha.length)return this.$refs.captcha.focusCaptchaInput=!0,e.showToast({title:"请先输入图形验证码",icon:"none",duration:3e3});if(!/^1\d{10}$/.test(this.phone))return e.showToast({title:"手机号格式错误",icon:"none",duration:3e3});var i=n.importObject("uni-id-co",{customUI:!0});console.log("sendSmsCode",{mobile:this.phone,scene:this.type,captcha:this.captcha}),i.sendSmsCode({mobile:this.phone,scene:this.type,captcha:this.captcha}).then((function(n){e.showToast({title:"短信验证码发送成功",icon:"none",duration:3e3}),t.reverseNumber=Number(t.count),t.getCode()})).catch((function(n){"uni-id-invalid-sms-template-id"==n.code?(t.modelValue="123456",e.showToast({title:"已启动测试模式,详情【控制台信息】",icon:"none",duration:3e3}),console.warn(n.message)):(t.getImageCaptcha(),t.captcha="",e.showToast({title:n.message,icon:"none",duration:3e3}))}))},getCode:function(){var e=this;if(0==this.reverseNumber)return clearTimeout(this.reverseTimer),void(this.reverseTimer=null);this.reverseNumber--,this.reverseTimer=setTimeout((function(){e.getCode()}),1e3)}}};t.default=i}).call(this,n("df3c")["default"],n("861b")["default"])},d376:function(e,t,n){"use strict";var i=n("de62"),u=n.n(i);u.a},de62:function(e,t,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/uni-id-pages-sms-form/uni-id-pages-sms-form-create-component',
    {
        'uni_modules/uni-id-pages/components/uni-id-pages-sms-form/uni-id-pages-sms-form-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("1ffe"))
        })
    },
    [['uni_modules/uni-id-pages/components/uni-id-pages-sms-form/uni-id-pages-sms-form-create-component']]
]);
