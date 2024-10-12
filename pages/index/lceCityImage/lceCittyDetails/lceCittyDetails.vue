<template>
	<view>
		<view>
			<video class="myVideo" id="myVideo" :src="homestaysList.video.url"
				@error="videoErrorCallback" show-loading autoplay='true' controls object-fit='contain'></video>
		</view>
		<view class="videoText">
			{{homestaysList.title}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				homestaysList: {}
			}
		},
		onLoad(options) {
			console.log('Received ID:', options.id);
			this.homestays(options.id)
		},
		methods: {
			homestays(id) {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				uniCloud.callFunction({
					name: "demo-lceCittyDetails",
					data: {
						id: id
					}
				}).then(res => {
					this.homestaysList = res.result.data[0]
					uni.hideLoading();
					console.log(this.homestaysList);
				});
			},
		}
	}
</script>

<style>
	.myVideo {
		width: 100%;
	}

	.videoText {
		font-size: 32rpx;
		line-height: 64rpx;
		padding: 0 20rpx;
	}
</style>