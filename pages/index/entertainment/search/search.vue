<template>
	<view class="container">
		<uni-search-bar placeholder="请输入名称" bgColor="#EEEEEE" @confirm="search" @cancel='issearch' />
		<scroll-view scroll-y="true" class="scrollView">
			<view class="Iactive" v-for="(item,index) in IactiveList" :key="item._id" @click="onMarkerTap(item.create_date,item.longitude,item.latitude)">
				<uni-icons type="search" size="20" color="#999"></uni-icons>
				<view class=" PackageNore" v-html="highlightText(item.create_date)"></view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detailsList: [],
				IactiveList: [],
				value: ''
			};
		},
		onLoad() {
			this.request()
		},
		methods: {
			//根据请求的数组 对其内的对象name进行筛选
			search(res) {
				this.value = res.value
				this.IactiveList = this.detailsList.filter(item => item.create_date.toLowerCase().includes(res.value
					.toLowerCase()))
			},
			issearch() {
				this.request();
			},
			//对所搜索的 字段进行 处理高亮
			highlightText(text) {
				if (!this.value) {
					return text;
				} else {
					const regex = new RegExp(this.value, 'gi');
					return text.replace(regex, match => `<span style="color: #1296db;font-size:13px;">${match}</span>`);
				}
			},
			request() {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				uniCloud.callFunction({
					name: "demo-defaultCatering-details",
					data: {}
				}).then(res => {
					this.detailsList = res.result.data
					this.IactiveList = res.result.data
					this.value=''
					uni.hideLoading();
				}, 2000);
			},
			onMarkerTap(title,longitude,latitude,) {
				let plugin = requirePlugin('routePlan');
				let key = 'NOBBZ-P7GKC-YCO22-A3KEL-TQGJQ-JGFCZ'; //使用在腾讯位置服务申请的key
				let referer = 'text'; //调用插件的app的名称
				let endPoint = JSON.stringify({ //终点
					'name': title,
					'latitude': latitude,
					'longitude': longitude,
				});
				uni.navigateTo({
					url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
				});
				// console.log(marker.title);
			}
		}
	}
</script>

<style lang="scss">
	.container {
		.scrollView {
			.Iactive {
				padding: 20rpx 0;
				margin: 0 20rpx;
				display: flex;
				align-items: center;
				border-bottom: 1rpx solid #f5f5f5;

				.PackageNore {
					padding-left: 20rpx;
					font-size: 26rpx;

				}
			}
		}

	}
</style>