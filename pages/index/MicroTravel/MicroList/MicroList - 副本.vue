<template>
	<view class="content">
		<view ref="myView" class="tabTop">
			<view class="tab" style="display: flex;align-items: center;justify-content: space-around;">
				<view class="tabText" :class="{active:index === Tab}" v-for="(item,index) in tabList" :key="index"
					@click="tabText(index)">{{item.text}}
					<image v-if="index === Tab" src="../../../../static/tab-down.png" mode="" />
					<image v-else src="../../../../static/tab-up.png" mode="" />
				</view>
			</view>
			<view class="gridTag">
				<view v-if="index === Tab" class="gridContainer" v-for="(item,index) in tabTagList" :key="index">
					<view class="gridItem" :class="{Iactive: gridItemAll(index) }" @click="gridContainer">
						全部
					</view>
					<view class="gridItem" :class="{Iactive: determine(Index) }" v-for="(res,Index) in item.TagList"
						:key="Index" @click="gridItem(Index,res.title,res._id)">
						{{res.title}}
					</view>
				</view>
			</view>
		</view>
		<view class="" style="padding-bottom:20rpx ;">
			<view class="allCard">
				<view class="contentCard all" v-for="(item,index) in homestaysList" :key="item._id"
					@click="cliDatals(item._id)">
					<img class="image" :src="item.images[0].url" alt="" />
					<view class="textCard">
						{{item.title}}
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import {
		tabList,
		tabTagList,
	} from './data.js'
	export default {
		data() {
			return {
				tabList: tabList,
				tabTagList: tabTagList,
				Tab: '',
				Grid: 0,
				gridItemArr: [{
						index: undefined
					},
					{
						index: undefined
					},
					{
						index: undefined
					},
				],
				targetArray: [

				],
				homestaysList: [],
				region: undefined,
				source: undefined,
				theme: undefined,

			}
		},
		onLoad() {
			this.homestays()
			this.RegionOld()
			this.themeOld()
			this.sourceOld()
		},
		created() {
			this.targetArray = this.tabList.map(item => item.text);
		},
		methods: {
			// 三个导航切换
			tabText(index) {
				console.log(index);
				if (typeof index !== 'undefined') {
					if (this.Tab === index) {
						this.Tab = ''
					} else {
						this.Tab = index
					}
				}
			},
			//点击除全部外的其他
			gridItem(Index, text, id) {
				this.Grid = Index
				this.tabList[this.Tab].text = text
				this.gridItemArr[this.Tab].index = Index
				if (this.Tab === 0) {
					this.region = id
				}
				if (this.Tab === 1) {
					this.theme = id
				}
				if (this.Tab === 2) {
					this.source = id
				}
				this.homestays()
				console.log(this.region, this.theme, this.source);
			},
			//判断除全部外的其他
			determine(Index) {
				if (this.gridItemArr[this.Tab].index === Index) {
					return true
				}
			},
			//点击全部
			gridContainer() {
				this.gridItemArr[this.Tab].index = undefined
				this.tabList[this.Tab].text = this.targetArray[this.Tab]
				if (this.Tab === 0) {
					this.region = undefined
				}
				if (this.Tab === 1) {
					this.theme = undefined
				}
				if (this.Tab === 2) {
					this.source = undefined
				}
				this.homestays()
				console.log(this.region, this.theme, this.source);
			},
			//判断全部的时候
			gridItemAll(index) {
				if (this.gridItemArr[this.Tab].index === undefined) {
					return true
				}
			},
			cliDatals(id) {
				uni.navigateTo({
					url: `/pages/index/lceCityImage/lceCittyDetails/lceCittyDetails?id=${id}`,
				})
			},

			homestays() {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				uniCloud.callFunction({
					name: "demo-Nav-MicroTrave",
					data: {
						region: this.region,
						theme: this.theme,
						source: this.source
					}
				}).then(res => {
					this.homestaysList = res.result.data
					uni.hideLoading();
					console.log(res);
				});
			},
			RegionOld() {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				uniCloud.callFunction({
					name: "demo-lceCityImage-Region",
					data: {

					}
				}).then(res => {
					this.tabTagList[0].TagList = res.result.data
					uni.hideLoading();
					console.log(res);
				});
			},
			themeOld() {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				uniCloud.callFunction({
					name: "demo-lceCityImage-theme",
					data: {

					}
				}).then(res => {
					this.tabTagList[1].TagList = res.result.data
					uni.hideLoading();
					console.log(res);
				});
			},
			sourceOld() {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				uniCloud.callFunction({
					name: "demo-lceCityImage-source",
					data: {

					}
				}).then(res => {
					this.tabTagList[2].TagList = res.result.data
					uni.hideLoading();
					console.log(res);
				});
			},
		},

	}
</script>

<style lang="scss">
	.content {
		background-color: aliceblue;
		height: 100vh;
		overflow: auto;

		.tabTop {
			background-color: #ffffff;
			padding-bottom: 20rpx;
			// position: relative;
			position: fixed;
			width: 100%;
			top: 0rpx;
			left: 0;
			z-index: 999;

		}

		.tab {
			font-size: 26rpx;

			.tabText {
				font-size: 26rpx;
				width: 33.33%;
				text-align: center;

				image {
					width: 20rpx;
					height: 20rpx;
				}
			}

			.active {
				color: #1296db;
			}
		}

		.gridTag {

			background-color: #ffffff;
			position: absolute;
			z-index: 1000;
			width: 100%;

			.gridContainer {
				text-align: center;
				padding: 20rpx;
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				/* 创建 4 列网格 */
				grid-gap: 10px;

				/* 设置网格间隙，可根据需要调整 */
				.gridItem {
					padding: 20rpx;
					background-color: #f8f8f8;
					border-radius: 100rpx;
					font-size: 26rpx;
				}

				.Iactive {
					background-color: #1296db;
					color: #ffffff;
				}
			}
		}

		.marginTop {
			margin-top: 60rpx;
		}

		.allCard {
			// padding: 20rpx;
			column-count: 2;
			column-gap: 20rpx;

			padding-top: 60rpx;

			/* 允许元素换行 */
			.contentCard {
				// width: 100%;
				// height: auto;
				/* 确保宽度适应列宽 */
				break-inside: avoid;


				/* 防止元素在列内换行 */
				.image {
					display: block;
					width: 100%;
					object-fit: cover;
					height: 200rpx;
					border-top-right-radius: 10rpx;
					border-top-left-radius: 10rpx;
				}

				.textCard {
					text-align: center;
					padding: 10rpx;
					font-size: 26rpx;
					background-color: #ffffff;
					box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
					margin-bottom: 20rpx;
				}
			}
		}


	}
</style>