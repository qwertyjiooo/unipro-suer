<template>
	<view class="mylogn">
		<view class="information">
			<img @click="loginWithpwd" class="informationImage" src="../../static/person.png" alt="" />
			<!-- <view class="user">
				用户
			</view>
			<view class="edit">
				编辑资料
				<img class="editorial " src="../../static/moreW.png" alt="" />
			</view> -->
			<view class="user" @click="logn()">
				登录
			</view>
			<view class="user" @click="logout()">
				退出登录
			</view>
		</view>
		<view class="play payment">
			<view class="paymenTatol" v-for="(item,index) in paymenTatolList" :key="index"
				@click="orderForm(item.path)">
				<img class="paymentImage" :src="item.url" alt="" />
				<view class="paymentText">
					{{item.text}}
				</view>
			</view>
		</view>
		<view class="play PersonalTatol">
			<view class=" Personal" v-for="(item,index) in PersonalList" :key="index">
				<view class="account">
					<img class="accountIlmage" :src="item.url" alt="" />
					{{item.text}}
				</view>
				<img class="Personalimage" src="../../static/more.png" alt="" />
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
			return {
				paymenTatolList: [
					// {
					// 	text: '待支付',
					// 	url: require('../../static/Tobepaid.png')
					// },
					{
						text: '待旅行',
						url: require('../../static/Tobeconsumed.png'),
						path: '/pages/mylogn/order/order'
					},
					{
						text: '待评价',
						url: require('../../static/Tobeevaluated.png'),
						path: '/pages/mylogn/order/order'
					},
					{
						text: '已取消',
						url: require('../../static/toberefund.png'),
						path: '/pages/mylogn/order/order'
					},
					{
						text: '全部订单',
						url: require('../../static/AllOrders.png'),
						path: '/pages/mylogn/order/order'
					},
				],
				PersonalList: [{
						text: '账户中心',
						url: require('../../static/accountA.png')
					},
					{
						text: '常用联系人',
						url: require('../../static/accountB.png')
					},
					{
						text: '收货地址',
						url: require('../../static/accountC.png')
					},
					{
						text: '发票申请',
						url: require('../../static/accountD.png')
					},
					{
						text: '年卡中心',
						url: require('../../static/accountE.png')
					},
					{
						text: '我的邮寄',
						url: require('../../static/accountF.png')
					},
				]
			}
		},
		computed: {
			userInfo() {
				console.log(store.userInfo);
				return store.userInfo
			},
		},
		methods: {
			//登录
			logn() {
				// uni.navigateTo({
				// 	// url: '/pages/mylogn/editorial/editorial',
				// 	url: '/pages/mylogn/logon/logon',
				// })

				uni.navigateTo({
					// url: '/pages/mylogn/editorial/editorial',
					url: '/uni_modules/uni-id-pages/pages/login/login-withoutpwd?type=smsCode',
				})
			},
			//修改个人信息
			loginWithpwd() {
				uni.navigateTo({
					// url: '/pages/mylogn/editorial/editorial',
					url: '/uni_modules/uni-id-pages/pages/userinfo/userinfo',
				})
			},
			//退出登录
			logout() {
				mutations.logout();
			},
			orderForm(path) {
				uni.navigateTo({
					url: path,
				})
			}
		}
	}
</script>

<style lang="scss">
	.mylogn {
		font-size: 26rpx;
		background-color: #f6f4f4;
		display: flex;
		flex-direction: column;
		flex: 1;
		height: 100vh;
		background-color: #f6fbff;
		overflow: auto;

		.play {
			padding: 0 20rpx;
		}

		.information {
			background-image: url('../../static/nvren.png');
			background-size: 100% auto;
			height: 300rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			color: #ffffff;

			.informationImage {
				width: 100rpx;
				height: 100rpx;
				background-color: #999;
				padding: 10rpx;
				border-radius: 10rpx;
			}

			.user {
				font-size: 32rpx;
				line-height: 64rpx;
			}

			.edit {
				font-size: 26rpx;
				display: flex;
				align-items: center;

				.editorial {
					width: 20rpx;
					height: 20rpx;
				}
			}
		}

		.payment {
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-top: 20rpx;
			padding-bottom: 20rpx;
			background-color: #ffffff;

			.paymenTatol {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				.paymentImage {
					width: 70rpx;
					height: 70rpx;
				}

				.paymentText {
					font-size: 28rpx;
					line-height: 56rpx;
				}
			}
		}

		.PersonalTatol {
			padding: 0 20rpx 0;
			background-color: #ffffff;
			margin-top: 30rpx;

			.Personal {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-top: 30rpx;
				padding-bottom: 30rpx;
				border-top: #f6f4f4 solid 1rpx;

				.Personalimage {
					width: 30rpx;
					height: 30rpx;
				}

				.account {
					display: flex;
					align-items: center;
					justify-content: center;
					font-size: 32rpx;

					.accountIlmage {
						width: 50rpx;
						height: 50rpx;
						margin-right: 10rpx;
					}
				}
			}
		}

	}
</style>