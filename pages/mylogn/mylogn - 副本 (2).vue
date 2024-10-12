<template>
	<view class="centent">
		<view class="" style="padding: 20rpx;">
			<!-- 未登录 -->
			<!-- <view class="personal">
				<image class="personalImg" src="../../static/nvren.png" mode=""></image>
				<view class="welcome">
					<view class="user">手机号码登录</view>
					<view class="logout">
						<span @click="logn">开启你的定制预约之旅 <uni-icons type="right" size="18" color="#f6fbff"></uni-icons></span>
					</view>
				</view>
			</view> -->
			<!-- 已登录 -->
			<view class="personal">
				<image class="personalImg" src="../../static/nvren.png" mode=""></image>
				<view class="welcome">
					<view class="user">欢迎，微信用户</view>
					<view class="logout">
						<span>159****0343</span>
						<span style="border: #f6fbff 1px solid;line-height: 28rpx;padding: 10rpx;margin-left: 20rpx;"
							@click="logout()">退出登录</span>
					</view>
				</view>
			</view>
			<!-- 订单 -->
			<view class="customization rou">
				<navigator url="/pages/mylogn/order/order"  class="">
					<view class="choice">
						<span>个人/家庭定制</span>
						<span>待旅行</span>
					</view>
					<view class="datetext">定制路线或景区标题</view>
					<view class="example-body">行程时间：xxx-xx xxx:xx</view>
					<view class="example-body">出行人数：xxx xxx xxx xx</view>
				</navigator>
				<view class="cancelorder">
					<view class="cancel">取消订单</view>
				</view>
				<view class="cancelorder">
					<view class="cancel">去评价</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		store,
		mutations
	} from "@/uni_modules/uni-id-pages/common/store.js"
	export default {
		data() {
			return {}
		},
		// onLoad() {
		// 	console.log($cloudEnv_uid);
		// },
		methods: {
			// 登录
			logn() {
				uni.navigateTo({
					url: '/uni_modules/uni-id-pages/pages/login/login-withoutpwd?type=smsCode',
				})
			},
			// 退出登录
			logout() {
				mutations.logout();
			},
		}
	}
</script>

<style lang="scss">
	.centent {
		height: 100vh;
		overflow: auto;
		background-color: #f6fbff;
		background-image: url("https://mp-fcd50ffd-8e88-4c8b-9299-20b1da88fc6d.cdn.bspapp.com/cloudstorage/5d1058e17095643195e3ebe9e12fe4b.png");
		background-size: 100% auto;
		background-repeat: no-repeat;

		//登录部分
		.personal {
			display: flex;
			align-items: center;

			.personalImg {
				width: 150rpx;
				height: 150rpx;
				border-radius: 100rpx;
				margin-right: 20rpx;
			}

			.welcome {
				.user {
					font-size: 32rpx;
					line-height: 64rpx;
					font-weight: bold;
					color: #ffffff;
				}

				.logout {
					display: flex;
					align-items: center;

					span {
						font-size: 28rpx;
						line-height: 54rpx;
						color: #f6fbff;
					}
				}
			}
		}

		//订单部分
		.rou {
			padding: 20rpx;
			background-color: #ffffff;
			border-radius: 10rpx;
			margin-top: 20rpx;
			box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
			// z-index: 999;
		}

		.customization {
			.choice {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-bottom: 20rpx;
				border-bottom: #f6fbff 1rpx solid;

				span {
					color: #666;
					font-size: 28rpx;
				}
			}

			.datetext {
				font-size: 32rpx;
				font-weight: bold;
				line-height: 64rpx;
			}

			.example-body {
				font-size: 26rpx;
				line-height: 52rpx;
				color: #666;
			}

			.cancelorder {
				display: flex;
				// align-items: right;
				justify-content: flex-end;
				padding-top: 20rpx;

				.cancel {
					color: #1296db;
					// background-color: #1296db;
					border: 2rpx #1296db solid;
					width: 150rpx;
					padding: 10rpx;
					font-size: 28rpx;
					border-radius: 150rpx;
					text-align: center;
					// z-index: 1000;
				}
			}

		}
	}
</style>