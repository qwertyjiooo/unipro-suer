<template>
	<view class="microTravel">
		<view class="microTraveltatol" :style="{ backgroundImage: 'url(' + item.pagebackimage.url + ')' }"
			v-for="(item,index) in defaultPersonList " :key="index" @click="MicroList(item._id)">
			<img class="microTraveltatolimg" :src="item.pageavater.url" alt="" />
			<view class="microTraveltext">
				{{item.title}}
				<img class="microTraveltextimg" src="../../../static/moreW.png" alt="" />
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
				defaultPersonList: []
			};
		},
		onLoad() {
			uni.showLoading({
				title: '加载中...',
				mask: true,
			});
			uniCloud.callFunction({
				name: "demo-MicroTravel",
				data:{
					
				}
			}).then(res => {
				this.defaultPersonList = res.result.data
				uni.hideLoading();
				console.log(res);
			},2000)
		},
		methods:{
			MicroList(id){
			  	uni.navigateTo({
			  		url: `/pages/index/MicroTravel/MicroList/MicroList?id=${id}`,
			  	})
			},
		}
	};
</script>

<style lang="scss">
	.microTravel {
		height: calc(100vh - 44px);
		background-color: #f6fbff;
		overflow: auto;
		position: relative;
		padding: 60rpx 20rpx;
		// background-image: linear-gradient(to top, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));
		// background-image: url('../../../static/oneB.png');
		background-size: cover;

		.microTraveltatol {
			height: 180rpx;
			background-color: pink;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 40rpx;
			background-size: 100% auto;
			border-radius: 20rpx;
			box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
			margin-bottom: 80rpx;

			.microTraveltatolimg {
				object-fit: cover;
				width: 150rpx;
				height: 150rpx;
				border-radius: 50%;
				margin-top: -100rpx;
				border: 2px solid #ffffff;
			}

			.microTraveltext {
				font-size: 32rpx;
				color: #ffffff;
				display: flex;
				align-items: center;
				justify-content: center;

				.microTraveltextimg {
					width: 32rpx;
					height: 32rpx;
				}
			}
		}


	}
</style>