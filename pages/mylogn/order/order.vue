<template>
	<view class="centent">
		<view class="" style="padding:0 20rpx 20rpx;">
			<!-- 状态 -->
			<view class="personal">
				<view class="personalImg"></view>
				<view class="personalin"></view>
				<view class="welcome">
					<view class="user" v-if="orderformList.status===0">待接收</view>
					<view class="user" v-else-if="orderformList.status===1">待旅行</view>
					<view class="user" v-else-if="orderformList.status===2">已完成</view>
					<view class="user" v-else>已取消</view>
					<view class="logout">订单
						<span class="logout" v-if="orderformList.status===0">待接收,</span>
						<span class="logout" v-else-if="orderformList.status===1">待旅行,</span>
						<span class="logout" v-else-if="orderformList.status===2">已完成,</span>
						<span class="logout" v-else>已取消,</span>
						感谢您的使用,祝您快乐每一程
					</view>
				</view>
			</view>
			<!-- 订单 -->
			<view class="customization rou">
				<view class="datetext">{{orderformList.title}}</view>
				<view class="date">
					<view class="Destination">定制单号</view>
					<view class="example-body">
						<view class="DestinationStuta">{{orderformList.orderNumber}}</view>
					</view>
				</view>
				<view class="date">
					<view class="Destination">提交时间</view>
					<view class="example-body">
						<view class="DestinationStuta">{{formatDateTime(orderformList.create_time)}}</view>
					</view>
				</view>
				<view class="date">
					<view class="Destination">出发目的地</view>
					<view class="example-body">
						<view class="DestinationStuta">{{orderformList.destination}}</view>
					</view>
				</view>
				<view class="date">
					<view class="Destination">游玩时间</view>
					<view class="example-body">
						<view class="DestinationStuta">{{orderformList.playtime}}</view>
					</view>
				</view>
				<view class="date">
					<view class="Destination">出游人数</view>
					<view class="example-body">
						<view class="DestinationStuta">{{orderformList.NumberTravelers}}</view>
					</view>
				</view>
				<view class="date">
					<view class="Destination">人均预算</view>
					<view class="example-body">
						<view class="DestinationStuta">{{orderformList.budget}}</view>
					</view>
				</view>
				<view class="date">
					<view class="Destination">定制类型</view>
					<view class="example-body">
						<view class="DestinationStuta" v-if="orderformList.customizaType === 0">个人/家庭定制</view>
						<view class="DestinationStuta" v-else>企业/团建定制</view>
					</view>
				</view>
				<view class="date">
					<view class="Destination">联系人</view>
					<view class="example-body">
						<view class="DestinationStuta">{{orderformList.contactPhone}}</view>
					</view>
				</view>
				<view class="date">
					<view class="Destination">联系电话</view>
					<view class="example-body">
						<view class="DestinationStuta">{{orderformList.contacts}}</view>
					</view>
				</view>
				<view class="cancelorder" v-if="orderformList.status === 0">
					<view class="cancel">取消订单</view>
				</view>
				<view class="cancelorder" v-if="orderformList.status === 1">
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
	const db = uniCloud.database()
	export default {
		data() {
			return {
				orderformList: {}
			}
		},
		onLoad(option) {
			this.request(option.id)
		},
		methods: {
			request(id) {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				db.collection('demo-order-form')
					.where({
						_id: id
					})
					.get()
					.then((res) => {
						console.log(res);
						this.orderformList = res.result.data[0]
						uni.hideLoading();
					}).catch((err) => {
						console.log(err.message);
						console.log(err.code);
					}, 2000)
			},
			formatDateTime(dateString) {
				const date = new Date(dateString);
				const year = date.getFullYear();
				const month = ('0' + (date.getMonth() + 1)).slice(-2);
				const day = ('0' + date.getDate()).slice(-2);
				const hours = ('0' + date.getHours()).slice(-2);
				const minutes = ('0' + date.getMinutes()).slice(-2);
				const seconds = ('0' + date.getSeconds()).slice(-2);
				return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
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
			position: relative;
			padding-bottom: 40rpx;
			padding-top: 20rpx;
			// align-items: center;

			.personalImg {
				width: 30rpx;
				height: 30rpx;
				border-radius: 100rpx;
				margin-right: 20rpx;
				margin-top: 18rpx;
				background-color: #ffffff;
			}

			.personalin {
				position: absolute;
				width: 2rpx;
				height: 180rpx;
				left: 15rpx;
				top: 0;
				background: linear-gradient(to bottom, rgba(240, 240, 240, 0) 0%, rgba(240, 240, 240, 1) 50%, rgba(240, 240, 240, 0) 100%);
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
					color: #f6fbff;
					font-size: 28rpx;
					line-height: 54rpx;
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
		}

		.customization {
			// .choice {
			// 	display: flex;
			// 	align-items: center;
			// 	justify-content: space-between;
			// 	padding-bottom: 20rpx;
			// 	border-bottom: #f6fbff 1rpx solid;

			// 	span {
			// 		color: #666;
			// 		font-size: 28rpx;
			// 	}
			// }

			.datetext {
				font-size: 32rpx;
				font-weight: bold;
				line-height: 64rpx;
			}

			.date {
				display: flex;
				align-items: center;

				.Destination {
					font-size: 28rpx;
					width: 200rpx;
					height: 35px;
					line-height: 35px;
				}

				.DestinationStuta {
					font-size: 28rpx;
					height: 35px;
					line-height: 35px;
				}

				.example-body {
					background-color: #fff;
					// padding: 10px;
					flex: 1;
					color: #666;
					display: flex;
					align-items: center;
					justify-content: space-between;
					// border-bottom: #dfdfdf solid 1rpx;
				}
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