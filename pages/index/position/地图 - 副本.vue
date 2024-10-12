<template>
	<view class="map">
		<!-- 这里放置地图容器 -->
		<map class="myMap" :longitude='long' :latitude='lat'></map>
	</view>
</template>

<script>
	import QQMapWX from '../../../static/lib/qqmap-wx-jssdk.js'
	export default {
		data() {
			return {
				long: '113.32446',
				lat: '23.10647',
				qqmapsdk: '',
			}
		},
		mounted() {

		},
		methods: {

		},
		onLoad: function() {
			// 实例化API核心类
			this.qqmapsdk = new QQMapWX({
				key: 'NOBBZ-P7GKC-YCO22-A3KEL-TQGJQ-JGFCZ'
			});
			let plugin = requirePlugin('routePlan');
			let key = 'NOBBZ-P7GKC-YCO22-A3KEL-TQGJQ-JGFCZ'; //使用在腾讯位置服务申请的key
			let referer = 'text'; //调用插件的app的名称
			let endPoint = JSON.stringify({ //终点
				'name': '北京西站',
				'latitude': 39.894806,
				'longitude': 116.321592
			});
			uni.navigateTo({
				url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
			});

		},
		onShow: function() {
			// 调用接口
			// this.qqmapsdk.search({
			// 	keyword: '停车场',
			// 	success: function(res) {
			// 		console.log(res);
			// 	}, 
			// 	fail: function(res) {
			// 		console.log(res);
			// 	},
			// 	complete: function(res) {
			// 		console.log(res);
			// 	}
			// });
		}
	}
</script>

<style>
	.myMap {
		width: 100vw;
		height: 100vh;
	}
</style>