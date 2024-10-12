<template>
	<!-- <view class=""> -->
	<scroll-view class="scenicSpot" scroll-y="true">
		<view class="HorImage" style="">

		</view>
		<view class="Horizontal" style="">
			<view v-show="envnter" class="HorizontalTitle" :class="{'active': activeTab === ''}" @click="allcik">
				全部
			</view>
			<view class="HorizontalTitle" :class="{'active': activeTab === index}" @click="loadData(index,item._id)"
				v-for="(item,index) in homestaysList" :key="index">
				{{item.title}}
			</view>
		</view>
		<view class="allCard" @click="details(item._id)" v-for="(item,index) in demohomestaysList" :key="item._id">
			<view class="HorImage" style="flex: 1;margin-right: 20rpx;border-radius: 10rpx;height: 280rpx;">
				<view class="HorImageTag">
					专业选手
				</view>
			</view>
			<view class="cardText" style="flex: 2;">
				<view class="cardtitle">
					{{item.title}}
				</view>
				<view class="cardTag">
					<span>标签</span>
					<span>标签</span>
					<span>标签</span>
				</view>
				<view class="csrdinformation">
					<view class="cardprice">
						<span style="font-size: 28rpx;">￥</span>
						<span style="font-size: 36rpx;">{{item.fullFare}}</span>
						<span style="font-size: 28rpx;color: #999;">/人</span>
					</view>
					<view class="cardname">
						<!-- <img src="" alt="" /> -->
						<view class="cardHorImage" style="">

						</view>
						<span style="margin-right: 10rpx;">{{item.user[0].username}}</span>
						<span>为您定制</span>
					</view>
				</view>

			</view>
		</view>
	</scroll-view>
	<!-- </view> -->
</template>

<script>
	// import {
	// 	defaultPersonList
	// } from './data.js'
	const db = uniCloud.database();
	export default {
		data() {
			return {
				// defaultPersonList: defaultPersonList,
				activeTab: '',
				homestaysList: [],
				demohomestaysList: [],
				envnter:false
			};
		},
		onLoad() {
			this.homestays()
			this.demohomestays()
		},
		methods: {
			//点击全部
			allcik(){
				this.activeTab = ''
				this.demohomestays()
			},
			//点击除全部外的其他
			loadData(index, id) {
				this.activeTab = index
				this.demohomestays(id)
			},
			details(id) {
				uni.navigateTo({
					url: `/pages/index/homestays/details/details?id=${id}`
				})
			},
			homestays() {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				uniCloud.callFunction({
					name: "demo-homestays",
					data: {

					}
				}).then(res => {
					this.homestaysList = res.result.data
					this.envnter = true
					uni.hideLoading();
					console.log(res);
				});
			},
			demohomestays(id) {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				uniCloud.callFunction({
					name: "demo-homestays-details",
					data: {
						id: id
					}
				}).then(res => {
					this.demohomestaysList = res.result.data
					uni.hideLoading();
					console.log(res);
				});
			},
		}
	};
</script>

<style lang="scss">
	.scenicSpot {
		height: calc(100vh - 44px);
		// background-color: #a913ff;
		overflow: auto;
		position: relative;

		.HorImage {
			height: 300rpx;
			width: 100%;
			background-image: url(https://mp-fcd50ffd-8e88-4c8b-9299-20b1da88fc6d.cdn.bspapp.com/cloudstorage/18a5e98f-cdc2-421c-b615-b74f0edd31f5.png);
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;

			.HorImageTag {
				width: 40%;
				padding: 10rpx;
				font-size: 22rpx;
				color: #ffffff;
				background-color: rgba(0, 0, 0, 0.5);
				border-top-left-radius: 10rpx;
				border-bottom-right-radius: 10rpx;
			}
		}

		.Horizontal {
			// position: fixed;
			top: 0;
			left: 0;
			// width: 100%;
			z-index: 1000;
			position: sticky;
			padding: 20rpx;
			display: flex;
			overflow-x: auto;
			white-space: nowrap;
			border-bottom: #e1e1e1 1rpx solid;
			background-color: #ffffff;

			.HorizontalTitle {
				font-size: 28rpx;
				margin-right: 40rpx;
			}

			.active {
				color: #1296db;
				border-bottom: #1296db 4rpx solid;
				padding-bottom: 10rpx;
				font-size: 32rpx;
			}
		}

		.allCard {
			display: flex;
			margin: 20rpx;
			margin-bottom: 0;
			border-bottom: 1rpx solid #e1e1e1;
			padding-bottom: 20rpx;

			.cardText {

				.cardtitle {
					font-size: 32rpx;
					font-weight: bold;
					line-height: 52rpx;
				}

				.cardTag {
					background-color: #f1f1f1;
					border-radius: 10rpx;
					padding: 5rpx 10rpx;

					span {
						color: #999;
						border-right: #999 2rpx solid;
						padding-right: 10rpx;
						margin-right: 10rpx;
						font-size: 28rpx;
					}
				}

				.cardTag span:last-child {
					border-right: none;
					/* 移除最后一个标签的右边框样式 */
				}

				.csrdinformation {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: 40rpx;

					.cardprice {
						span {
							color: #1296db;
						}
					}

					.cardname {
						display: flex;
						align-items: center;
						justify-content: center;

						.cardHorImage {
							height: 40rpx;
							width: 40rpx;
							border-radius: 40rpx;
							background-image: url(https://mp-fcd50ffd-8e88-4c8b-9299-20b1da88fc6d.cdn.bspapp.com/cloudstorage/18a5e98f-cdc2-421c-b615-b74f0edd31f5.png);
							background-repeat: no-repeat;
							background-size: cover;
							background-position: center;
							margin-right: 10rpx;
						}

						span {
							font-size: 25rpx;
							color: #999;
						}
					}
				}

			}

		}
	}
</style>