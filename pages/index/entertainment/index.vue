<template>
	<view class="scenicSpot">
		<view class="Tickets">
			<img class="TicketsImage" src="../../../static/oneF.png" alt="" />
		</view>
		<view class="title">
			<view class="text">
				传统美食
				<span @click="details">更多 <img src="../../../static/more.png" alt="" /></span>
			</view>
			<view class="container">
				<view class="item" v-for="(item,index) in defaultPersonList" :key="index">
					<view class="itemText">
						{{item.text}}
					</view>
					<img :src="item.icon" alt="" />
				</view>
			</view>
			<view class="text">
				传统美食
			</view>
			<view class="container contitem">
				<view class="item">
					<img src="../../../static/oneA.png" alt="" />
					<view class="containerText">
						散发出浓郁的烟熏香气，口感咸香可口。秋林里道斯红肠被评为哈尔滨十大特色食品之一。
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import {
		defaultPersonList
	} from './data.js';

	export default {
		data() {
			return {
				defaultPersonList: defaultPersonList
			};
		},
		methods: {
			details() {
				uni.navigateTo({
					url: '/pages/index/entertainment/details/details',
				})
			}
		}
	};
</script>

<style lang="scss">
	.scenicSpot {
		height: 100vh;
		background-color: #f6fbff;
		overflow: auto;
		position: relative;

		.Tickets {
			height: 400rpx;

			.TicketsImage {
				object-fit: cover;
				width: 100%;
				height: 100%;
			}
		}

		.title {
			border-radius: 20rpx;
			position: absolute;
			background-color: #f6fbff;
			top: 350rpx;
			padding-top: 20rpx;

			.text {
				padding-right: 20rpx;
				padding-left: 20rpx;
				margin-top: 20rpx;
				font-size: 36rpx;
				line-height: 72rpx;
				font-weight: bold;
				background: linear-gradient(to bottom, #e3f1ff, #01a2ff);
				-webkit-background-clip: text;
				color: transparent;
				display: flex;
				align-items: center;
				justify-content: space-between;

				span {
					font-size: 26rpx;
					right: 0;
					display: flex;
					align-items: center;
					justify-content: center;
					color: #999;
					font-weight: 400;

					img {
						width: 26rpx;
						height: 26rpx;
					}
				}
			}

			.container {
				padding: 0 20rpx;
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				grid-template-rows: repeat(4, 150rpx);
				grid-template-areas:
					'a a a a'
					'a a a a'
					'b b c c'
					'b b d d';
				gap: 10rpx;

				.item {
					background-color: #01a2ff;
					border-radius: 20rpx;
					position: relative;
					width: 100%;

					.itemText {
						position: absolute;
						width: 100%;
						// height: 80rpx;
						color: #ffffff;
						font-size: 26rpx;
						bottom: 0rpx;
						background: linear-gradient(to bottom, rgba(255, 255, 255, 0.05), rgba(87, 211, 255, 0.5), rgba(3, 137, 255, 0.8));
						border-bottom-left-radius: 20rpx;
						border-bottom-right-radius: 20rpx;
						// text-align:center;
						text-indent: 20rpx;
						padding: 60rpx 0 20rpx;
					}

					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
						border-radius: 20rpx;
					}

					.containerText {
						// background-color: #01a2ff;
						color: #999;
						font-size: 26rpx;
					}
				}


				:nth-child(1) {
					grid-area: a;
				}

				:nth-child(2) {
					grid-area: b;
				}

				:nth-child(3) {
					grid-area: c;
				}

				:nth-child(4) {
					grid-area: d;
				}
			}

		}
	}
</style>