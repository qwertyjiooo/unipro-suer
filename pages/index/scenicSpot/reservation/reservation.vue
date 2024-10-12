<template>
	<view class="conter">
		<view class="datePlay">游玩日期<span>2024-2-15</span></view>
		<view class="" v-for="(item,index) in admissionList" :key="index">
			<view class="admission ">
				<view class="admiConter">
					<view v-if="item.id===1" class="people admissionText">门票-全票价</view>
					<view v-if="item.id===2" class="people admissionText">门票-半价票/学生票/长者票</view>
					<view v-if="item.id===3" class="people admissionText">门票-免费票</view>
					<view class="people peice">
						<view class="people number">x{{item.people}}</view>￥<span>{{item.store}}</span>
					</view>
				</view>
				<div class="up-arrow"></div>
				<view class="admiTime">预约时间：{{item.time}}</view>
			</view>
			<view class="naiceText" v-for="(Item,Index) in item.people" :key="Index">
				<view class="play">
					游玩人 {{Index+1}}（联系人 ）
				</view>

				<view class="fullName">
					姓&nbsp;&nbsp;&nbsp;&nbsp;名
					<input class="uni-input" placeholder="请输入姓名" />
				</view>
				<view class="fullName">
					身份证
					<input class="uni-input" placeholder="请输入身份证号" />
				</view>
				<view class="fullName">
					手机号
					<input class="uni-input" placeholder="请输入手机号" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				admissionList: [],
			};
		},
		onLoad(options) {
			this.admissionList = JSON.parse(decodeURIComponent(options.admissionList));
			console.log(this.admissionList);
			// 现在你可以在这里使用 admissionList 数组了
		},

	}
</script>

<style lang="scss">
	.conter {
		padding: 20rpx;

		.datePlay {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-weight: bold;
			margin-bottom: 40rpx;
			font-size: 26rpx;
		}

		.admission {
			background-color: #f7f7f7;
			padding: 20rpx;
			margin: 0 -20rpx;
			position: relative;
			font-size: 26rpx;

			.admiConter {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 60rpx;

				.people {
					font-size: 26rpx;
				}

				.peice {
					color: #4caaf9;
					display: flex;
					align-items: center;

					.number {
						margin-right: 50rpx;
						color: #999;
					}

					span {
						font-size: 30rpx;
					}
				}
			}

			.up-arrow {
				width: 0;
				height: 0;
				border-left: 15rpx solid transparent;
				border-right: 15rpx solid transparent;
				border-bottom: 20rpx solid #ffffff;
				bottom: 0;
				left: 40rpx;
				position: absolute;
				font-size: 26rpx;
			}

			.admiTime {
				font-size: 26rpx;
				text-align: right;
			}
		}

		.naiceText {
			.play {
				color: #999;
				padding: 20rpx 0;
				// border-bottom: #999 1rpx solid;
				font-size: 26rpx;
			}

			.fullName {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 20rpx 0;
				border-top: #e5e5e5 1rpx solid;
				font-size: 26rpx;

				// width: 100rpx;
				input {
					margin-left: 50rpx;
					// width: 100%;
					flex: 1;
					font-size: 26rpx;
				}
			}
		}
	}
</style>