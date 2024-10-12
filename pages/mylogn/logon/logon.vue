<template>
	<view class="centent">
		<view class=" HorImageTag">
			<image src="../../../static/sceniconeA.png" mode=""></image>
			<view class="textyuding">
				预约定制旅行
			</view>
			<view class="textshengxin">
				随心而行 省心安心
			</view>
		</view>
		<view class="onlogin" @click="WXlogin()">
			手机号一键登录
		</view>
		<!-- <view class="login onlogin" @click="WXlogin()">
			退出登录
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			WXlogin() {
				uni.showModal({
					title: '登录获取权限提醒',
					content: '是否同意获取权限',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
							uni.getUserProfile({
								desc:'获取用户权限',
								success: (userinfo) => {
									console.log("userinfo", userinfo);
									//调用登录
									uni.login({
										provider: 'weixin',
										success: (code) => {
											console.log('code', code);
											//发起请求，获取openidi
											uni.request({
												url: 'https://api.weixin.qq.com/sns/jscode2session',
												method: 'GET',
												data: {
													appid: 'wx5cf52b9a6ec9fb8c',
													secret: '586bfd917c04ade65ac86486ae4c4fc7',
													js_code: code.code,
													grant_type: 'authoriztion_code'
												},
												success: (res2) => {
													console.log(res2,
														"res2");
												}
											})
										}
									})
								},
								fail: (err) => {
									uni.showToast({
										title:'错误',
										icon:'none'
									})
									console.log('err',err);
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
							uni.showToast({
								title: "获取失败",
								icon: "none"
							})
						}
					}
				});
			}



			// WXlogin() {
			// 	uni.getUserInfo({
			// 		desc: '登录后同步数据',
			// 		success(ures) {
			// 			console.log(ures, '返回的用户信息');
			// 			uni.login({
			// 				success(lres) {
			// 					console.log(lres, '请求微信登录返回的数据');
			// 					let params = {
			// 						code : lres.code
			// 					}
			// 					// loginByWechat(params).then(res=>{
			// 					// 	console.log(res,"微信一键登录返回的数据");
			// 					// })
			// 				}
			// 			})
			// 		}
			// 	})


			// 	// this.login()

			// },
			// // login() {
			// // 	uni.showLoading({
			// // 		title: '加载中...',
			// // 		mask: true,
			// // 	});
			// // 	uniCloud.callFunction({
			// // 		name: "demo-MicroTravel",
			// // 		data:{

			// // 		}
			// // 	}).then(res => {
			// // 		// this.defaultPersonList = res.result.data
			// // 		uni.hideLoading();
			// // 		console.log(res);
			// // 	},2000)
			// // },
		}
	}
</script>

<style lang="scss">
	.centent {
		height: calc(100vh);
		width: 100%;
		background-color: #f6fbff;
		position: relative;

		.onlogin {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, 0);
			text-align: center;
			color: #ffffff;
			padding: 20rpx;
			font-size: 32rpx;
			border-radius: 100rpx;
			background-color: #1296db;
			width: 80%;
		}

		.login {
			top: 80%;
		}

		.HorImageTag {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding-top: 20%;

			image {
				width: 200rpx;
				height: 200rpx;
			}

			.textyuding {
				font-size: 26rpx;
				padding: 20rpx;
			}

			.textshengxin {
				font-size: 22rpx;
			}
		}
	}
</style>