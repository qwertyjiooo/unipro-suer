<template>
	<view class="container">
		<view class="Packagetitle">
			<view class="uniIcon" @click="search">
				<uni-icons type="search" size="26" color="#ffffff"></uni-icons>
				<span style="font-size: 30rpx;">搜索餐厅</span>
			</view>
		</view>
		<view class="PackageNore">
			<scroll-view scroll-x="true" show-scrollbar="true" class="costDetails">
				<span class="span-size" :class="{'person':spanIndex ===0}" @click="whole">全部</span>
				<span class="span-size" :class="{'person':spanIndex ===item._id}" v-for="(item,index) in swiperItemList"
					:key="item._id" @click="spanIndexBtn(item._id)">{{item.title}}</span>
			</scroll-view>
			<view class="feature">
				<view class="tone" :class="{'flavour':toneAIndex}" @click="toneA">全部</view>
				<view class="tone" :class="{'flavour':toneBIndex}" @click="toneB">特色餐</view>
			</view>
			<scroll-view scroll-y="true" class="allCard">
				<view class="textCard" v-for="(item,index) in detailsList" :key="item._id" @click="onMarkerTap(item.create_date,item.longitude,item.latitude)">
					<image :src="item.pageavater.url" mode=""></image>
					<view class="contitem">
						<view class="spotText">
							{{item.create_date}}
						</view>
						<uni-rate size="16" :readonly="true" :value="item.level" />
						<view class="contentCard">
							<view class="addPrice Package" style="flex: 2;">
								{{item.Discounted}}
							</view>
							<view class="addPrice Package" style="flex: 1;display: flex;align-items: center;">
								<uni-icons type="location-filled" size="18" color="#1296db"></uni-icons>
								1.04km
							</view>
						</view>
						<view class="contentCard">
							<view class="addPrice" style="flex: 2;">
								<uni-tag v-if="item.is_essence" :inverted="true" text="特色餐" type="primary" />
							</view>
							<view class="addPrice" style="flex: 1;">
								￥ <span class="addPrice" style="color: #1296db;padding: 0 10rpx;"> {{item.consumption}}元
								</span> 起
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		defaultPersonList
	} from './data.js'
	export default {
		data() {
			return {
				defaultPersonList: defaultPersonList,
				spanIndex: 0,
				toneAIndex: true,
				toneBIndex: false,
				swiperItemList: [],
				detailsList: [],
			};
		},
		onLoad() {
			uniCloud.callFunction({
				name: "demo-defaultCatering",
				data: {

				}
			}).then(res => {
				this.swiperItemList = res.result.data
			});
			this.request()
		},
		methods: {
			spanIndexBtn(id) {
				this.spanIndex = id
				this.toneAIndex= true
				this.toneBIndex= false
				this.request(id)
			},
			toneA() {
				this.toneAIndex = true
				this.toneBIndex = false
				if(this.spanIndex!==0){
					this.request(this.spanIndex)
				}else{
					this.request()
				}
				
			},
			toneB() {
				this.toneAIndex = false
				this.toneBIndex = true
				this.detailsList = this.detailsList.filter(obj => obj.is_essence === true);
			},
			search() {
				uni.navigateTo({
					url: '/pages/index/entertainment/search/search',
				})
			},
			whole(){
				this.spanIndex=0;
				this.request()
				
			},
			request(id) {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				uniCloud.callFunction({
					name: "demo-defaultCatering-details",
					data: {
						id: id
					}
				}).then(res => {
					this.detailsList = res.result.data
					uni.hideLoading();
					console.log(res);
				}, 2000);
			},
			onMarkerTap(title,longitude,latitude,) {
				let plugin = requirePlugin('routePlan');
				let key = 'NOBBZ-P7GKC-YCO22-A3KEL-TQGJQ-JGFCZ'; //使用在腾讯位置服务申请的key
				let referer = 'text'; //调用插件的app的名称
				let endPoint = JSON.stringify({ //终点
					'name': title,
					'latitude': latitude,
					'longitude': longitude,
				});
				uni.navigateTo({
					url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
				});
				// console.log(marker.title);
			}
		}
	}
</script>

<style lang="scss">
	$padding: 40rpx;

	.container {
		position: relative;
		height: calc(100vh - 44px);
		overflow: hidden;

		.Packagetitle {
			z-index: 0;
			background-image: url(https://mp-fcd50ffd-8e88-4c8b-9299-20b1da88fc6d.cdn.bspapp.com/cloudstorage/55f6b61e-ac78-45ab-90e7-e68393ff7e29.png);
			background-size: 100% auto;
			height: 400rpx;
			padding: 20rpx 10%;
			position: relative;

			.uniIcon {
				display: flex;
				align-items: center;
				justify-content: center;
				position: absolute;
				left: 50%;
				transform: translate(-50%, 0);
				background-color: #e6e6e6;
				padding: 10rpx 20rpx;
				width: 80%;
				border-radius: 200rpx;

				span {
					margin-left: 20rpx;
					color: #ffffff;
				}
			}
		}

		.PackageNore {
			min-height: 200rpx;
			width: calc(100% - #{$padding});
			background-color: #ffffff;
			border-top-left-radius: 30rpx;
			border-top-right-radius: 30rpx;

			position: absolute;
			margin-top: -100rpx;
			z-index: 1;
			padding: 20rpx;

			.costDetails {
				// display: flex;
				white-space: nowrap;
			}

			.costDetails::-webkit-scrollbar {
				display: none;
				/* 隐藏滚动条 */
			}

			.span-size {
				font-size: 30rpx;
				margin-right: 20rpx;

			}

			.person {
				font-size: 36rpx;
				color: #1296db;
			}

			.feature {
				margin-top: 20rpx;
				display: flex;

				.tone {
					font-size: 26rpx;
					margin-right: 20rpx;
					padding: 8rpx 30rpx;
					background-color: #f5f5f5;
					color: #999;
					border-radius: 50rpx;
				}

				.flavour {
					background-color: #f6fbff;
					color: #1296db;
				}
			}

			.allCard {
				margin-top: 20rpx;
                height: 70vh;

				.textCard {
					display: flex;
					margin-bottom: 20rpx;
					padding-bottom: 20rpx;
					border-bottom: #f5f5f5 1rpx solid;

					image {
						width: 200rpx;
						height: 200rpx;
					}

					.contitem {
						flex: 1;
						margin-left: 20rpx;

						// padding: 20rpx;/
						// background-color: #1296db;
						.spotText {
							font-size: 32rpx;
							line-height: 52rpx;
						}

						.contentCard {
							display: flex;
							align-items: center;

							// justify-content: space-between;
							.addPrice {
								font-size: 26rpx;
								line-height: 52rpx;
								color: #999;

							}

							.Package {
								font-size: 22rpx;
							}
						}
					}
				}
			}
		}

	}
</style>