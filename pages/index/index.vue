<template>
	<view class="content">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true"
			indicator-active-color='#ffffff'>
			<swiper-item v-for="(item,index) in swiperItemList" :key='item.id'>
				<img referrerPolicy="no-referrer" :src='item.pageavater.url' class="swiper-item" />
			</swiper-item>
		</swiper>
		<view class="home">
			<view class="iconList">
				<navigator :url="item.url" class="iconListimage" v-for="(item,index) in iconListimageList" :key='index'>
					<image :src="item.icon"></image>
					<view class="text">
						{{item.text}}
					</view>
				</navigator>
			</view>
			<view class="activity" @click="ParkingLot()">
				<view class="textA">不知道去哪玩？</view>
				<view class="textB">想要了解定制旅游出行，点击这里可以以快速了解</view>
			</view>
			<view class="wizard">
				<view class="recommend">
					景点推荐
				</view>
				<view class="tabulatingCard">
					<view class=" fiche" :style="{ 'backgroundImage': 'url(' + item.pageavater.url + ')' }"
						v-for="(item,index) in rankDateList" :key='index' @click="fiche(item._id)">
						<!-- <img class="backimage" :src="item.pageavater.url" alt="" /> -->
						<img class="ficheimage" :src="recommendList[index].url" />
						<view class="ficheText">
							{{item.title}}
						</view>
					</view>
				</view>
			</view>
			<view class="purchase">
				<view class="recommend">
					玩转尔滨
					<navigator class="span" url="/pages/index/MicroTravel/index">更多 <image class="more"
							src="../../static/more.png" mode=""></image>
					</navigator>
				</view>
				<scroll-view class="menu" scroll-x="true">
					<view class="menu-item" :class="{'active': activeTab === 0}" @click="allLoad">全部文娱</view>
					<view v-for="(item, index) in MicroTravelList" :key="item._id" class="menu-item"
						:class="{'active': activeTab === item._id}" @click="sift(item._id)">{{ item.title }}</view>
				</scroll-view>
				<view class="waFall">
					<view class="item" v-for="(item,Index) in NavMicroTravelKist" :key="item._id"
						@click="moreDetails(item._id)">
						<image :src="item.images[0].url" mode="widthFix" />
						<view class="item_text">{{item.title}}</view>
					</view>
				</view>
				<view v-if="NavMicroTravelKist.length ===0" class=""
					style="text-align: center;padding: 50rpx 0;font-size: 32rpx;">暂无数据</view>
			</view>
		</view>
		<!-- <view class="startStop">
			<button @click="start">开始监听陀螺仪变化</button>
			<button @click="stop">停止监听陀螺仪变化</button>
		</view> -->
	</view>
</template>

<script>
	const db = uniCloud.database();
	export default {
		data() {
			return {
				iconListimageList: [{
						text: '定制旅行',
						icon: require('../../static/sceniconeC.png'),
						url: '/pages/index/homestays/index'
					},
					{
						text: '影像冰城',
						icon: require('../../static/sceniconeB.png'),
						url: '/pages/index/lceCityImage/lceCityImage'
					},
					{
						text: '景区门票',
						icon: require('../../static/sceniconeA.png'),
						url: '/pages/index/scenicSpot/index'
					},
					{
						text: '餐饮推荐',
						icon: require('../../static/sceniconeD.png'),
						url: '/pages/index/entertainment/details/details'
					},
				],
				recommendList: [{
						text: '繁华市井',
						url: require('../../static/top1.png'),
						backimage: require('../../static/oneF.png')
					},
					{
						text: '繁华市井',
						url: require('../../static/top2.png'),
						backimage: require('../../static/oneG.png')
					},
					{
						text: '繁华市井',
						url: require('../../static/top3.png'),
						backimage: require('../../static/oneE.png')
					},
				],
				transverseList: [{
						text: '繁华市井',
						stud: 0,
					},
					{
						text: '繁华市井',
						stud: 1,
					},
					{
						text: '繁华市井',
						stud: 2,
					},
					{
						text: '繁华市井',
						stud: 3,
					},
					{
						text: '繁华市井',
						stud: 4,
					},
				],
				swiperItemList: [

				],
				columns: [
					[],
					[]
				],
				activeTab: 0,
				active: 0,
				MicroTravelList: [],
				NavMicroTravelKist: [],
				rankDateList: [],
			}
		},
		onLoad() {
			this.chartDate()
			this.loadData()
			this.rankDate()
		},
		methods: {
			// 实现瀑布流
			sift(id) {
				this.activeTab = id
				this.loadData(id)
			},
			loadData(id) {
				console.log(this.activeTab);
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				uniCloud.callFunction({
					name: "demo-Nav-MicroTrave",
					data: {
						pageNav: id
					}
				}).then(res => {
					uni.hideLoading();///微信 真机调试报错
					this.NavMicroTravelKist = res.result.data
					console.log(res);
				})
			},
			//轮番图
			chartDate() {
				uniCloud.callFunction({
					name: "home_icon",
					data: {

					}
				}).then(res => {
					this.swiperItemList = res.result.data
					console.log(res);
				});
				uniCloud.callFunction({
					name: "demo-MicroTravel",
					data: {

					}
				}).then(res => {
					this.MicroTravelList = res.result.data
					console.log(res);
				});
			},
			onSwipeChange(e) {
				this.activeIndex = e.detail.current;
			},
			moreDetails(id) {
				uni.navigateTo({
					url: `/pages/index/MicroTravel/details/details?id=${id}`,
				})
			},
			fiche(id) {
				uni.navigateTo({
					url: `/pages/index/position/position?id=${id}`,
				})
			},
			ParkingLot() {
				uni.navigateTo({
					url: '/pages/index/homestays/index',
				})
			},
			start() {
				uni.onGyroscopeChange((res) => {
					console.log('gyroData.rotationRate.x = ' + res.x)
					console.log('gyroData.rotationRate.y = ' + res.y)
					console.log('gyroData.rotationRate.z = ' + res.z)
				});
				uni.startGyroscope({
					interval: "normal",
					success() {
						console.log('success')
					},
					fail() {
						console.log('fail')
					}
				})
			},
			stop() {
				uni.stopGyroscope({
					success() {
						console.log('stop success!')
					},
					fail() {
						console.log('stop fail!')
					}
				})
			},
			//玩转哈尔滨筛选
			allLoad() {
				this.activeTab = 0,
					console.log(this.activeTab);
				this.loadData()
			},

			//本周景点推荐
			rankDate() {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				db.collection('demo-recommended-tourist')
					// .where('user_id==$cloudEnv_uid')
					.field('title,pageavater')
					// .orderBy("status", "asc")
					.orderBy("_id", "asc")
					.get()
					.then((res) => {
						console.log(res);
						this.rankDateList = res.result.data
						console.log(this.rankDateList);
						uni.hideLoading();
					}).catch((err) => {
						console.log(err.message);
						console.log(err.code);
					}, 2000)
			},
		}
	}
</script>

<style lang="scss">
	.content {
		font-size: 26rpx;
		// display: flex;
		// flex-direction: column;
		// flex: 1;
		height: 100vh;
		background-color: #f6fbff;
		overflow: auto;
		position: relative;

		.startStop {
			position: absolute;
			top: 0;
			left: 0;

			button {
				width: 100%;
				height: 200rpx;
				background-color: #999;
				margin-top: 20rpx;
			}
		}

		swiper {
			width: 100vw;
			height: 400rpx;
			margin-bottom: 20rpx;
			z-index: -1;
		}

		.swiper-item {
			background-color: pink;
			width: 100%;
			top: 0;
			left: 0;
		}

		.home {
			// width: 100%;
			padding: 0 20rpx;

			// border-radius:300rpx ;
			// margin-top: -20rpx;
			.iconList {
				// width: 100%;
				height: 150rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.iconListimage {
					flex: 1;
					text-align: center;

					image {
						width: 80rpx;
						height: 80rpx;
					}

					.text {
						font-size: 26rpx;
						line-height: 48rpx;
						color: #999;

					}
				}
			}

			.activity {
				// width: 100%;
				height: 100rpx;
				background-color: pink;
				border-radius: 20rpx;
				color: #ffffff;
				padding: 20rpx;
				box-shadow: #999;
				margin-bottom: 40rpx;
				margin-top: 20rpx;
				background-image: url(../../static/nvren.png);
				background-size: 100% auto;
				box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

				.textA {
					font-size: 32rpx;
					// line-height: 40rpx;
				}

				.textB {
					font-size: 26rpx;
					line-height: 30rpx;
				}
			}

			.recommend {
				font-weight: bold;
				font-size: 32rpx;
				line-height: 64rpx;
				margin-bottom: 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}

			.wizard {
				margin-bottom: 20rpx;

				.tabulatingCard {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.fiche {
						width: 25%;
						height: 200rpx;
						// background-color: pink;
						padding: 20rpx;
						position: relative;
						display: flex;
						align-items: flex-end;

						background-size: cover;
						background-position: center;
						background-repeat: no-repeat;

						.backimage {
							position: absolute;
							object-fit: cover;
							width: 100%;
							height: 100%;
							top: 0;
							left: 0;
						}

						.ficheimage {
							position: absolute;
							width: 50rpx;
							height: 50rpx;
							top: -10rpx;
						}

						.ficheText {
							z-index: 1000;
							width: 100%;
							display: inline-block;
							-webkit-line-clamp: 2;
							-webkit-box-orient: vertical;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							color: #ffffff;
							font-size: 26rpx;

							// max-width: 200px;
						}
					}
				}
			}

			.purchase {
				.span {
					height: 100%;
					// width: 30%;
					padding-left: 20rpx;
					display: flex;
					font-size: 26rpx;
					align-items: center;
					justify-content: center;
					font-weight: 400;
					color: #999;
				}

				.more {
					// font-size: 20rpx;
					width: 26rpx;
					height: 26rpx;
					color: #999;
					// font-weight: bold;
				}

				.waFall {
					margin-bottom: 20rpx;
					column-count: 2;
					column-gap: 20rpx;

					.item {
						// width: 48.8%;
						/* 或者根据需要设置合适的宽度百分比 */
						margin-bottom: 20rpx;
						break-inside: avoid;

						/* 每个项目之间的间距 */
						.item_text {

							text-align: center;
							padding: 10rpx;
							font-size: 26rpx;
							background-color: #ffffff;
							box-shadow: 0rpx 0rpx 10rpx 0rpx rgba(0, 0, 0, 0.2);
						}

						image {
							width: 100%;
							display: block;
						}
					}
				}

				.menu {
					white-space: nowrap;

					/* 防止换行 */
					.menu-item {
						margin-bottom: 20rpx;
						display: inline-block;
						/* 将菜单项显示为行内块元素 */
						margin-right: 20rpx;
						/* 根据需求进行调整 */
						border-radius: 40rpx;
						/* 根据需求进行调整 */
						cursor: pointer;
						/* 当作按钮处理时，可以改变光标形状 */
						font-size: 26rpx;
						padding: 15rpx;
						background-color: #e6e6e6;
						font-weight: 300;
					}

					.active {
						background-color: #1296db;
						color: #ffffff;
					}
				}
			}
		}

	}
</style>