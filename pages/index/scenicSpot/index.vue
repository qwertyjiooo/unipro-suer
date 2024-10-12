<template>
	<view class="scenicSpot">
		<view class="Tickets">
			<img class="TicketsImage" src="../../../static/oneF.png" alt="" />
		</view>
		<view class="title">
			<view class="text">
				景区门票
			</view>
			<view @click="cliDatals(item.title,item._id,item.pageavater.url)" class="Package" v-for="(item,index) in TicketsList" :key="item._id">
				<img class="PackageImage" :src="item.pageavater.url" alt="" />
				<view class="PackageText">
					<view class=" Packagetitle">
						{{item.title}}
						<view v-if="item.level===1" class="PackageNore">5A级旅游景区</view>
						<view v-if="item.level===2" class="PackageNore">4A级旅游景区}</view>
						<view v-if="item.level===3" class="PackageNore">3A级旅游景区</view>
						<view v-if="item.level===4" class="PackageNore">2A级旅游景区</view>
						<view v-if="item.level===5" class="PackageNore">A级旅游景区</view>
					</view>
				</view>
				<img class="PackageImageB" src="../../../static/shopImage.png" alt="" />
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
				defaultPersonList: defaultPersonList,
				TicketsList: [],
			};
		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true,
			});
			uniCloud.callFunction({
				name: "demo-Tickets",
				data: {

				}
			}).then(res => {
				this.TicketsList = res.result.data
				uni.hideLoading();
				console.log(res);
			},2000);
		},
		methods: {
			cliDatals(title,id,url) {
				uni.navigateTo({
					url: `/pages/index/scenicSpot/scenicSpot/index?title=${title}&id=${id}&url=${url}`,
				})
			}
		},
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
			padding: 0 20rpx;
			border-radius: 20rpx;

			.text {
				font-size: 36rpx;
				line-height: 72rpx;
				font-weight: bold;

				background: linear-gradient(to bottom, #e3f1ff, #01a2ff);
				-webkit-background-clip: text;
				color: transparent;
				display: inline-block;
			}

			.Package {
				width: 100%;
				height: 200rpx;
				display: flex;
				margin-bottom: 30rpx;
				align-items: center;
				justify-content: space-between;
				border-radius: 20rpx;
				background-color: #ffffff;
				box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(0, 0, 0, 0.1);

				.PackageImage {
					width: 45%;
					height: 100%;
					object-fit: cover;
					border-radius: 20rpx;
				}

				.PackageImageB {
					width: 50rpx;
					height: 50rpx;
					margin-right: 20rpx;
				}

				.PackageText {
					color: #74a9d3;
					
					line-height: 64rpx;
					text-align: left;

					.Packagetitle {
						font-size: 32rpx;
					}

					.PackageNore {
						width: 200rpx;
						background-color: #d8f4ff;
						font-size: 20rpx;
						line-height: 20rpx;
						padding: 10rpx 15rpx;
					}
				}
			}
		}
	}
</style>