(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-id-pages/components/uni-id-pages-email-form/uni-id-pages-email-form"],{"303c":function(e,t,n){"use strict";n.r(t);var i=n("59cb"),a=n("7a04");for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("b95d");var o=n("828b"),r=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"1f06c581",null,!1,i["a"],void 0);t["default"]=r.exports},"59cb":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}));var i={uniCaptcha:function(){return n.e("uni_modules/uni-captcha/components/uni-captcha/uni-captcha").then(n.bind(null,"1e1f"))},uniEasyinput:function(){return n.e("uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput").then(n.bind(null,"c3a4"))}},a=function(){var e=this,t=e.$createElement;e._self._c;e._isMounted||(e.e0=function(t){e.focusEmailCodeInput=!1})},u=[]},"6ee0":function(e,t,n){},"7a04":function(e,t,n){"use strict";n.r(t);var i=n("ab98"),a=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=a.a},ab98:function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"uni-email-code-form",model:{prop:"modelValue",event:"update:modelValue"},props:{event:["update:modelValue"],count:{type:[String,Number],default:60},email:{type:[String],default:""},type:{type:String,default:function(){return"register"}},focusCaptchaInput:{type:Boolean,default:function(){return!1}}},data:function(){return{captcha:"",reverseNumber:0,reverseTimer:null,modelValue:"",focusEmailCodeInput:!1}},watch:{captcha:function(e,t){4==e.length&&4!=t.length&&this.start()},modelValue:function(e){this.$emit("input",e),this.$emit("update:modelValue",e)}},computed:{innerText:function(){return 0==this.reverseNumber?"获取邮箱验证码":"重新发送("+this.reverseNumber+"s)"}},created:function(){this.initClick()},methods:{getImageCaptcha:function(e){this.$refs.captcha.getImageCaptcha(e)},initClick:function(){var e=this;this.start=function(e,t){var n;return t=t||500,function(){var i=this,a=arguments;n&&clearTimeout(n);var u=!n;n=setTimeout((function(){n=null}),t),u&&e.apply(i,a)}}((function(){0==e.reverseNumber&&e.sendMsg()}))},sendMsg:function(){var t=this;if(4!=this.captcha.length)return this.$refs.captcha.focusCaptchaInput=!0,e.showToast({title:"请先输入图形验证码",icon:"none",duration:3e3});if(!this.email)return e.showToast({title:"请输入邮箱",icon:"none",duration:3e3});if(!/@/.test(this.email))return e.showToast({title:"邮箱格式错误",icon:"none",duration:3e3});var i=n.importObject("uni-id-co",{customUI:!0});console.log("sendEmailCode",{email:this.email,scene:this.type,captcha:this.captcha}),i.sendEmailCode({email:this.email,scene:this.type,captcha:this.captcha}).then((function(n){e.showToast({title:"邮箱验证码发送成功",icon:"none",duration:3e3}),t.reverseNumber=Number(t.count),t.getCode()})).catch((function(n){"uni-id-invalid-mail-template"==n.code?(t.modelValue="123456",e.showToast({title:"已启动测试模式,详情【控制台信息】",icon:"none",duration:3e3}),console.warn(n.message)):(t.getImageCaptcha(),t.captcha="",e.showToast({title:n.message,icon:"none",duration:3e3}))}))},getCode:function(){var e=this;if(0==this.reverseNumber)return clearTimeout(this.reverseTimer),void(this.reverseTimer=null);this.reverseNumber--,this.reverseTimer=setTimeout((function(){e.getCode()}),1e3)}}};t.default=i}).call(this,n("df3c")["default"],n("861b")["default"])},b95d:function(e,t,n){"use strict";var i=n("6ee0"),a=n.n(i);a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-id-pages/components/uni-id-pages-email-form/uni-id-pages-email-form-create-component',
    {
        'uni_modules/uni-id-pages/components/uni-id-pages-email-form/uni-id-pages-email-form-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("303c"))
        })
    },
    [['uni_modules/uni-id-pages/components/uni-id-pages-email-form/uni-id-pages-email-form-create-component']]
]);
