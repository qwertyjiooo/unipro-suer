<template>
	<view class="centent">
		<view class="" style="padding: 20rpx;">
			<!-- 未登录 -->
			<view class="personal" v-if="uid === null">
				<image class="personalImg" src="../../static/nvren.png" mode=""></image>
				<view class="welcome">
					<view class="user">手机号码登录</view>
					<view class="logout">
						<span @click="logn">开启你的定制预约之旅 <uni-icons type="right" size="18"
								color="#f6fbff"></uni-icons></span>
					</view>
				</view>
			</view>
			<!-- 已登录 -->
			<view class="personal" v-else>
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
			<view class="customiApp">
				<view class="cus customi " @click="tab = 'home'" :class="{cusActive:tab === 'home'}">定制路线订单</view>
				<view class="cus appointment " @click="tab = 'enterprise'" :class="{cusActive:tab === 'enterprise'}">景区预约订单</view>
			</view>
			<!-- 定制路线订单 -->
			<view class="" v-if="tab === 'home'">
				<view class="customization rou" v-for="(item,index) in orderformList" :key="item._id">
					<view class="" @click="cliorder(item._id)">
						<view class="choice">
							<span v-if="item.customizaType === 0">个人/家庭定制</span>
							<span v-else>企业/团建定制</span>
							<span v-if="item.status === 0">待接收</span>
							<span v-else-if="item.status === 1">待旅行</span>
							<span v-else-if="item.status === 2">已完成</span>
							<span v-else>已取消</span>
						</view>
						<view class="datetext">{{item.title}}</view>
						<view class="example-body">行程时间：{{item.playtime}}</view>
						<view class="example-body">出行人数：{{item.NumberTravelers}}</view>
					</view>
					<view class="cancelorder" v-if="item.status === 0 || item.status === 1">
						<view class="cancel" @click="requstCancel(item._id,3,'demo-order-form')">取消订单</view>
						<view class="cancel" v-if="item.status === 1" @click="requstCancel(item._id,2,'demo-order-form')">完成订单</view>
					</view>
				</view>
			</view>
			
			<!-- 景区预约订单 -->
			<view class="" v-else>
				<view class="customization rou" v-for="(item,index) in makeformList" :key="item._id">
					<view class="" @click="cliorderMake(item._id)">
						<view class="choice">
							<span v-if="item.customizaType === 0">个人/家庭定制</span>
							<span v-else>企业/团建定制</span>
							<span v-if="item.status === 0">待旅行</span>
							<span v-else-if="item.status === 1">已完成</span>
							<span v-else>已取消</span>
						</view>
						<view class="datetext">{{item.title}}</view>
						<view class="example-body">行程时间：{{'xxxx'}}</view>
						<view class="example-body">出行人数：{{item.NumberTravelers}}</view>
					</view>
					<view class="cancelorder" v-if="item.status === 0">
						<view class="cancel" @click="requstCancel(item._id,2,'demo-order-make-form')">取消订单</view>
						<view class="cancel" v-if="item.status === 0" @click="requstCancel(item._id,1,'demo-order-make-form')">完成订单</view>
					</view>
				</view>
			</view>
			<view class="customization rou" v-if="uid === null"
				style="height: 300rpx;display: flex;align-items: center;justify-content: center;font-size: 32rpx;">
				请登录后查看更多
			</view>
			<view class="customization rou" v-if="orderformList.length === 0&&makeformList.length === 0"
				style="height: 300rpx;display: flex;align-items: center;justify-content: center;font-size: 32rpx;">
				暂无订单(如已预约下拉刷新)
			</view>
		</view>
	</view>
</template>

<script>
	import {
		store,
		mutations
	} from "@/uni_modules/uni-id-pages/common/store.js"
	const db = uniCloud.database()
	export default {
		data() {
			return {
				orderformList: {},
				makeformList:{},
				uid: '',
				tab: "home",
			}
		},
		onLoad() {
			this.uid = uniCloud.getCurrentUserInfo().uid
			console.log(this.uid);
			if (uniCloud.getCurrentUserInfo().uid) {
				this.request()
				this.requestMake()
			}
		},
		onPullDownRefresh() {
			// 在下拉刷新时执行的操作
			if (uniCloud.getCurrentUserInfo().uid) {
				this.request()
			} else {
				setTimeout(() => {
					uni.stopPullDownRefresh();
				}, 1000);
				
			}
		},
		methods: {
			// 登录
			logn() {
				uni.navigateTo({
					url: '/uni_modules/uni-id-pages/pages/login/login-withoutpwd?type=smsCode',
				})
			},
			// 退出登录
			logout() {
				this.uid= '',
				this.orderformList = {},
				mutations.logout();
				
			},
			// 跳转cliorder
			cliorder(id) {
				uni.navigateTo({
					url: `/pages/mylogn/order/order?id=${id}`,
				})
			},
			cliorderMake(id) {
				uni.navigateTo({
					url: `/pages/mylogn/order/order-make?id=${id}`,
				})
			},
			//请求定制路线订单
			request() {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				db.collection('demo-order-form')
					.where('user_id==$cloudEnv_uid')
					.field('customizaType,status,title,NumberTravelers,playtime')
					.orderBy("status", "asc")
					.orderBy("_id", "desc")
					.get()
					.then((res) => {
						console.log(res);
						// uni.navigateTo({
						// 	url: '/pages/index/homestays/details/details'
						// })
						this.orderformList = res.result.data
						console.log(this.orderformList);
						uni.stopPullDownRefresh();
						uni.hideLoading();
					}).catch((err) => {
						console.log(err.message);
						console.log(err.code);
						// err.message
						// err.code
					}, 2000)
			},
			//请求景区预约订单
			requestMake() {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				db.collection('demo-order-make-form')
					.where('user_id==$cloudEnv_uid')
					.field('customizaType,status,title,NumberTravelers')
					.orderBy("status", "asc")
					.orderBy("_id", "desc")
					.get()
					.then((res) => {
						console.log(res);
						// uni.navigateTo({
						// 	url: '/pages/index/homestays/details/details'
						// })
						this.makeformList = res.result.data
						console.log(this.makeformList);
						uni.stopPullDownRefresh();
						uni.hideLoading();
					}).catch((err) => {
						console.log(err.message);
						console.log(err.code);
						// err.message
						// err.code
					}, 2000)
			},
			// 取消、完成订单
			requstCancel(id,status,url) {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				db.collection(url)
					.where({
						_id: id
					})
					.update({
						status: status
					})
					.then((res) => {
						console.log(res);
						if (uniCloud.getCurrentUserInfo().uid) {
							this.request()
							this.requestMake()
						}
						uni.hideLoading();
					}).catch((err) => {
						console.log(err.message);
						console.log(err.code);
						// err.message
						// err.code
					}, 2000)
			}
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
						display: flex;
						align-items: center;
						font-size: 28rpx;
						line-height: 54rpx;
						color: #f6fbff;
					}
				}
			}
		}
        //预约订单
		.customiApp{
			display: flex;
			align-items: center;
			justify-content: center;
			.cus{
				flex: 1;
				font-size: 32rpx;
				text-align: center;
				padding: 20rpx;
			}
			.cusActive {
				color: black;
				font-weight: bold;
				position: relative;
			}
			
			.cusActive:after {
				content: "";
				position: absolute;
				bottom: 0;
				width: 100rpx;
				height: 5rpx;
				border-radius: 5rpx;
				display: block;
				background-color: #1296db;
				margin-left: 50%;
				transform: translate(-70%, 0);
			
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
					margin-left: 20rpx;
					font-size: 28rpx;
					border-radius: 150rpx;
					text-align: center;
					// z-index: 1000;
				}
			}

		}
	}
</style>