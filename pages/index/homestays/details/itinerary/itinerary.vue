<template>
	<view class="centent">
		<view class="catalogue" ref="box">
			<span class="catalogueOne">目录</span>
			<view class="catalogueTou">
				<span :class="{active: cur === index}" v-for="index in routersList.length" :key="index"
					@click="IntoView(index)">D{{index+1}}</span>
			</view>
		</view>
		<scroll-view class="waFall" scroll-y="true" :scroll-into-view="rightIndex" scroll-with-animation
			 :style="{height: `calc(100vh - ${boxHeight}px)`}">
			 <!-- 视图滚动时相应的导航标亮 -->
			<!-- @scroll="handleScroll" :style="{height: `calc(100vh - ${boxHeight}px)`}"> -->
			<view class="ttractions" :id="`right${index}`" v-for="(item,index) in routersList" :key="index">
				<view class="day" style="">
					第{{index+1}}天 {{item.title}}
					<view class="place">
					</view>
				</view>
				<view class="scenic day" v-for="(res,Index) in item.day" :key="Index">
					{{res.text}}
					<view class="place">
						<span class="choice">{{judgeAttractions(res.level)}}</span>
						{{res.name}}
						<view class="images" :style="{ 'background-image': `url(${cur.url})` }" v-for="(cur,cndex) in res.images" :key="cndex">
							{{res.text}}
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cur: 0,
				boxHeight: 0,
				rightIndex: `right${0}`,
				leftIndex: 0,
				routersList:[]
			};
		},
		onLoad: function (option) {
			this.routersList = JSON.parse(decodeURIComponent(option.item));
			// console.log(JSON.parse(decodeURIComponent(option.item)));
		},
		mounted() {
			//确保你在修改数据后操作的是更新后的 DOM，而不是未更新的 DOM。
			this.$nextTick(() => {
				this.getBoxHeight();
			});
		},
		methods: {
			judgeAttractions(level) {
				if (level === 0) {
					return '景点'
				} else if (level === 1) {
					return '餐食'
				} else if (level === 2) {
					return '酒店'
				} else if (level === 3) {
					return '航班'
				} else if (level === 4) {
					return '活动'
				} else {
					return '购物'
				}
			},
			//获取目录的高度
			getBoxHeight() {
				uni.createSelectorQuery().in(this).select('.catalogue').boundingClientRect(rect => {
					if (rect) {
						this.boxHeight = rect.height;
					}
				}).exec();
			},
			IntoView(index) {
				this.cur = index;
				this.rightIndex = `right${index}`
			},
			// 有问题当滚动到2的时候3会标亮,滚动到3,4的时候5会标亮
			handleScroll(event) {
				// 获取滚动位置的y坐标
				const scrollTop = event.detail.scrollTop;
				// console.log("222",scrollTop);
				// 获取内容视图的位置信息
				uni.createSelectorQuery().in(this).selectAll('.ttractions').boundingClientRect(rects => {
					// console.log("1111",rects.length);
					// 查找第一个顶部位置小于等于滚动位置的内容视图
					for (let i = 0; i < rects.length; i++) {
						if (scrollTop >= rects[i].top) {
							// 更新导航状态
							this.cur = i;
							
							// this.rightIndex = `right${i}`;
						}
					}
				}).exec();
			}
		},
	}
</script>

<style lang="scss">
	.centent {
		// padding:0 0rpx 20rpx;
		position: relative;
		background-color: #f6fbff;
		display: flex;
		flex-direction: column;
		height: calc(100vh - 44px);

		.catalogue {
			padding: 0 20rpx 0rpx;
			// padding-top: -20rpx;
			display: flex;
			align-items: center;
			// position: fixed;
			// z-index: 1000;
			background-color: #ffffff;

			.catalogueOne {
				line-height: 52rpx;
				font-size: 26rpx;
				color: #1296db;
				padding-right: 40rpx;
			}

			.catalogueTou {
				flex: 1;
				overflow: auto;
				white-space: nowrap;

				span {
					font-size: 26rpx;
					margin-right: 40rpx;
					line-height: 52rpx;
				}

				.active {
					color: #1296db;
					border-bottom: #1296db 4rpx solid;
				}
			}
		}

		.waFall {
			// flex: 1;
			// overflow: auto;
			height: calc(100vh - 70px);

			.ttractions {
				padding: 0rpx 20rpx 10rpx;
				// padding-top: 40rpx;
				margin-top: 20rpx;
				background-color: #ffffff;

				.day {
					padding-left: 70rpx;
					font-size: 32rpx;
					font-weight: bold;
					padding-top: 40rpx;
					position: relative;
				}

				.place {
					font-size: 26rpx;
					line-height: 52rpx;
					font-weight: 400;

					.choice {
						position: absolute;
						left: 0;
						top: 50rpx;
						font-size: 22rpx;
						border: #999 1rpx solid;
						line-height: 22rpx;
						padding: 5rpx;
					}

					.images {
						flex: 1;
						height: 300rpx;
						background-color: pink;
						border-radius: 20rpx;
						padding: 20rpx;
						margin-bottom: 10rpx;
						color: #ffffff;
						display: flex;
						align-items: flex-end;
						// background-image: url(https://mp-fcd50ffd-8e88-4c8b-9299-20b1da88fc6d.cdn.bspapp.com/cloudstorage/18a5e98f-cdc2-421c-b615-b74f0edd31f5.png);
						background-size: cover;
						/* 自动填充背景图片 */
						background-position: center;
						/* 将背景图片居中 */
					}
				}
			}

			.ttractions:first-child {
				margin-top: 0rpx;
			}

			.scenic {}

		}
	}
</style>