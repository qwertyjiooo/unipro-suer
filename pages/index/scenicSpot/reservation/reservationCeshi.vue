<template>
	<view class="centent">
		<view class="" style="padding: 20rpx;">
			<view class="route rou">
				<view class="routeimage" :style="{ 'background-image': 'url(' + altList.url + ')' }"></view>
				<view class="routeName">
					{{altList.title}}
				</view>
			</view>
			<view class="customization rou" style="padding-bottom: 0;">
				<view class="choice">
					<view class="home" @click="tab = 'home'" :class="{active:tab === 'home'}">个人/家庭预约</view>
					<view class="home" @click="tab = 'enterprise'" :class="{active:tab === 'enterprise'}">企业/团建预约</view>
				</view>
				<view class="date">
					<view class="datetext datawidth"><span style="color: red;margin-left: 5rpx;">*</span>景区名称</view>
					<view class="example-body">
						<view class="datetext">{{altList.title}}</view>
					</view>
				</view>
				<view class="date">
					<view class="datetext datawidth"><span style="color: red;margin-left: 5rpx;">*</span>出游日期</view>
					<view class="example-body">
						<view class="datetext">{{altList.data}} {{altList.time}}</view>
					</view>

				</view>
				<view class="date">
					<view class="datetext datawidth"><span style="color: red;margin-left: 5rpx;">*</span>出行人数</view>
					<view class="example-body">
						<view class="datetext">{{altList.fullVote}}全票,{{altList.halfVote}}半票,{{altList.freeVote}}免费
						</view>
					</view>
				</view>

			</view>
			<view class="customization rou" style="padding-bottom: 0;">
				<view class="date">
					<view class="datetext datawidth"><span style="color: red;margin-left: 5rpx;">*</span>联系人</view>
					<view class="datetext example-body">
						<input class="uni-input" placeholder="请输入真实姓名" v-model="formDate.contacts" />
					</view>
				</view>
				<view class="date">
					<view class="datetext datawidth"><span style="color: red;margin-left: 5rpx;">*</span>手机号码</view>
					<view class="datetext example-body">
						<input class="uni-input" type="number" placeholder="请输入手机号" v-model="formDate.contactPhone" />
					</view>
				</view>
				<view class="date" v-if="tab === 'enterprise'">
					<view class="datetext datawidth"><span style="color: red;margin-left: 5rpx;">*</span>企业名称</view>
					<view class="datetext example-body" style="border-bottom: none;">
						<input class="uni-input" placeholder="填写公司/企业/团队名称" v-model="formDate.enterpriseName" />
					</view>
				</view>
			</view>
			<view class="customization rou programme" @click="sbmit()">立即预约</view>
		</view>
		<uni-popup ref="message" type="message">
			<uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message>
		</uni-popup>
	</view>
</template>

<script>
	const db = uniCloud.database()
	export default {
		data() {
			return {
				single: '',
				range: ['', ''],
				datetimerange: [],
				start: Date.now() - 1000000000,
				end: Date.now() + 1000000000,
				adult: 0, //成人
				children: 0, //儿童
				tab: "home",
				altList: {},
				formDate: {},
				msgType: 'success',
				messageText: '这是一条成功提示',
			}
		},
		onLoad(options) {
			let item = JSON.parse(decodeURIComponent(options.admissionList));
			let formDate = {
				route_id: item.id, //预约景区ID
				status: 0, //订单状态，0：待旅行，1：已完成，4：已取消
				customizaType: 0, //定制类型，0：个人/家庭定制，1：企业/团建定制
				orderNumber: '', //订单号
				title: item.title, //预约景区标题
				playtime: item.data + ' ' + item.time, //游玩时间
				NumberTravelers: item.fullVote + '全票' + item.halfVote + '半票' + item.freeVote + '免费', //游玩人数
				contacts: '', //联系人
				contactPhone: '', //联系电话
				enterpriseName: '', //企业名称
			}
			console.log(formDate);
			this.altList = item
			this.formDate = formDate
			console.log(this.altList);
		},
		mounted() {
			setTimeout(() => {
				this.datetimesingle = Date.now() - 2 * 24 * 3600 * 1000
				this.single = '2021-2-12'
				this.datetimerange = ["2021-07-08 0:01:10", "2021-08-08 23:59:59"]
			}, 3000)
		},

		methods: {
			change(e) {
				this.single = e
				console.log('change事件:', this.single = e);
			},
			//tab栏切换
			tabHome(text) {
				this.tab = text
				if (text === 'enterprise') {
					this.formDate.customizaType = 1
				} else {
					this.formDate.customizaType = 0
				}
				console.log(this.tab);
			},
			adultJia() {
				this.adult++
			},
			adultJian() {
				this.adult--
			},
			childrenJia() {
				this.children++
			},
			childrenJian() {
				this.children--
			},
			//提交订单
			sbmit() {
				//表单验证
				if (this.formDate.contacts === '') {
					this.msgType = 'error'
					this.messageText = "请输入联系人"
					this.$refs.message.open()
				} else if (this.formDate.contactPhone === '') {
					this.msgType = 'error'
					this.messageText = "请输入联系电话"
					this.$refs.message.open()
				} else if (this.tab === 'enterprise' && this.formDate.enterpriseName === '') {
					this.msgType = 'error'
					this.messageText = "请输入企业名称"
					this.$refs.message.open()
				} else {
					if (uniCloud.getCurrentUserInfo().uid) {
						const timestamp = Date.now().toString();
						// 生成4位随机数
						const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
						// 组合订单号
						this.formDate.orderNumber = timestamp + random;
						this.request()
					} else {
						uni.navigateTo({
							url: '/uni_modules/uni-id-pages/pages/login/login-withoutpwd?type=smsCode',
						})
					}
				}
			},
			request() {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				db.collection('demo-order-make-form')
					.add(this.formDate)
					.then((res) => {
						console.log(res);
						uni.navigateBack({
							delta: 1
						});
						uni.hideLoading();
					}).catch((err) => {
						console.log(err.message);
						console.log(err.code);
						// err.message
						// err.code
					})
			}
		}
	}
</script>

<style lang="scss">
	.centent {
		height: 100vh;
		overflow: auto;
		background-color: #f6fbff;
		background-image: url("https://mp-fcd50ffd-8e88-4c8b-9299-20b1da88fc6d.cdn.bspapp.com/cloudstorage/5d1058e17095643195e3ebe9e12fe4b.png");
		background-size: 100% auto;
		background-repeat: no-repeat;

		/* 防止背景图片重复 */
		.customizer {
			display: flex;
			align-items: center;

			.child-box {
				margin-right: 20rpx;
				font-size: 28rpx;
				color: #ffffff;
			}

			.userimage {
				width: 50rpx;
				height: 50rpx;
				background-color: #ffffff;
				border-radius: 50rpx;
			}

			.username {}
		}

		.rou {
			padding: 20rpx;
			background-color: #ffffff;
			border-radius: 10rpx;
			margin-top: 20rpx;
			box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
		}

		//方案
		.programme {
			background-color: #1296db;
			color: #ffffff;
			text-align: center;
		}

		.route {
			display: flex;

			/* 添加阴影 */
			.routeimage {
				width: 150rpx;
				height: 150rpx;
				background-size: cover;
				/* 让背景图片填充容器 */
				background-position: center;
				/* 让背景图片在容器中居中显示 */
				border-radius: 10rpx;
				margin-right: 20rpx;
			}

			.routeName {
				flex: 1;
				font-size: 28rpx;
			}
		}

		.customization {
			.choice {
				display: flex;
				align-items: center;
				border-bottom: #dfdfdf solid 1rpx;

				.home {
					flex: 1;
					text-align: center;
					font-size: 32rpx;
					line-height: 84rpx;
					color: #666;
				}

				.active {
					color: black;
					font-weight: bold;
					position: relative;
				}

				.active:after {
					content: "";
					position: absolute;
					bottom: 0;
					width: 100rpx;
					height: 5rpx;
					border-radius: 5rpx;
					display: block;
					background-color: #1296db;
					margin-left: 50%;
					transform: translate(-50%, 0);

				}
			}

			.date {
				display: flex;
				align-items: center;

				.datetext {
					font-size: 28rpx;
					height: 35px;
					line-height: 35px;
				}

				.datawidth {
					width: 200rpx;
				}

				.example-body {
					background-color: #fff;
					// padding: 10px;
					flex: 1;
					color: #666;
					display: flex;
					align-items: center;
					justify-content: space-between;
					border-bottom: #dfdfdf solid 1rpx;
				}
			}
		}







	}
</style>