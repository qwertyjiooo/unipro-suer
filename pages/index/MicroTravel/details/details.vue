<template>
	<view class="content">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true"
			indicator-active-color='#ffffff'>
			<swiper-item v-for="(item,index) in swiperItemList.images" :key='item.id'>
				<img referrerPolicy="no-referrer" :src='item.url' class="swiper-item" />
			</swiper-item>
		</swiper>
		<view class="text">
			<view class="title all">
				{{swiperItemList.title}}
			</view>
			<view class="substance all" v-html="swiperItemList.brief"></view>
		</view>

	</view>
</template>

<script>
	const db = uniCloud.database();
	export default {
		data() {
			return {
				swiperItemList: {},
			}
		},
		onLoad(options) {
			this.requst(options.id)

		},
		methods: {
			requst(id) {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				db.collection('demo-Nav-MicroTrave')
					.where(`_id=='${id}'`)
					// .field('title,pageavater')
					// .orderBy("status", "asc")
					.orderBy("_id", "asc")
					.get()
					.then((res) => {
						console.log(res);
						this.swiperItemList = res.result.data[0]
						console.log(this.swiperItemList);
						uni.hideLoading();
					}).catch((err) => {
						console.log(err.message);
						console.log(err.code);
					}, 2000)
			}
		}
	}
</script>

<style lang="scss">
	.content {
		font-size: 26rpx;
		height: 100vh;
		background-color: #f6fbff;
		overflow: auto;

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

		.text {
			padding: 20rpx;

			.title {
				font-size: 32rpx;
				font-weight: bold;

			}

			.substance {
				font-size: 26rpx;
			}

			.line {
				/* width: 100%; */
				height: 1px;
				background-color: #000;
				/* 设置横线的颜色 */
			}
		}


	}
</style>