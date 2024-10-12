<template>
	<view class="map">
		<!-- 这里放置地图容器 -->
		<map class="myMap" :longitude='long' :latitude='lat' :markers='covers' @markertap="onMarkerTap"></map>
		<view class="Iactive" style="padding: 20rpx;font-size: 32rpx;font-weight: bold;">
			{{rankDateList.title}}
		</view>
		<view style="padding: 20rpx;font-size: 26rpx;" v-html="rankDateList.attractions"></view>
	</view>
</template>

<script>
	import QQMapWX from '../../../static/lib/qqmap-wx-jssdk.js';
	const db = uniCloud.database();
	export default {
		data() {
			return {
				long: '',
				lat: '',
				qqmapsdk: '',
				covers: [{
					id: 1,
					title: '中央大街',
					latitude: 44.724907400,
					longitude: 128.588112500,
					iconPath: '../../../static/markers.png',
					with: 35,
					height: 24,
				}],
				// id:''
				rankDateList:{}
			}
		},
		mounted() {
			
		},

		onLoad(options) {
			// 实例化API核心类
			// this.id = options.id
			console.log(this.id);
			this.qqmapsdk = new QQMapWX({
				key: 'NOBBZ-P7GKC-YCO22-A3KEL-TQGJQ-JGFCZ'
			});
			this.requst(options.id)

		},
		onShow: function() {},
		methods: {
			requst(id) {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				db.collection('demo-recommended-tourist')
					.where(`_id=='${id}'`)
					.get()
					.then((res) => {
						console.log(res);
						const item = res.result.data[0]
						this.rankDateList = item
						
						this.long = item.longitude
						this.lat = item.latitude
						
						this.covers[0].title = item.title
						this.covers[0].longitude = item.longitude
						this.covers[0].latitude = item.latitude
						uni.hideLoading();
					}).catch((err) => {
						console.log(err.message);
						console.log(err.code);
					}, 2000)
			},
		
			onMarkerTap() {
				console.log('11111',this.rankDateList.title);
				let plugin = requirePlugin('routePlan');
				let key = 'NOBBZ-P7GKC-YCO22-A3KEL-TQGJQ-JGFCZ'; //使用在腾讯位置服务申请的key
				let referer = 'text'; //调用插件的app的名称
				let endPoint = JSON.stringify({ //终点
					'name': this.rankDateList.title,
					'latitude': this.rankDateList.latitude,
					'longitude': this.rankDateList.longitude
				});
				uni.navigateTo({
					url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
				});
				// console.log(marker.title);
			}
			// onMarkerTap(e) {
			// 	const markerId = e.detail.markerId;
			// 	const marker = this.covers.find((cover) => cover.id === markerId);
			// 	if (marker) {
			// 		let plugin = requirePlugin('routePlan');
			// 		let key = 'NOBBZ-P7GKC-YCO22-A3KEL-TQGJQ-JGFCZ'; //使用在腾讯位置服务申请的key
			// 		let referer = 'text'; //调用插件的app的名称
			// 		let endPoint = JSON.stringify({ //终点
			// 			'name': this.thirankDateList.title,
			// 			'latitude': this.thirankDateList.latitude,
			// 			'longitude': this.thirankDateList.longitude
			// 		});
			// 		uni.navigateTo({
			// 			url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
			// 		});
			// 		console.log(marker.title);
			// 	}
			
			// 	console.log(e)
			
			// }
		},
	}
</script>

<style>
	.myMap {
		width: 100%;
		height: 400rpx;
	}
</style>