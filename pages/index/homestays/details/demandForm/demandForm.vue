<template>
	<view class="centent">
		<view class="" style="padding: 20rpx;">
			<view class="customizer">
				<image class="userimage child-box" src="../../../../../static/my.png" mode=""></image>
				<view class="username child-box">{{demandFormUser.userName}}</view>
				<view class="child-box">为你定制</view>
			</view>
			<view class="route rou">
				<view class="routeimage" :style="{ backgroundImage: 'url(' + demandFormUser.url + ')' }"></view>
				<view class="routeName">{{demandFormUser.title}}</view>
			</view>
			<view class="customization rou" style="padding-bottom: 0;">
				<view class="choice">
					<view class="home" @click="tab = 'home'" :class="{active:tab === 'home'}">个人/家庭定制</view>
					<view class="home" @click="tab = 'enterprise'" :class="{active:tab === 'enterprise'}">企业/团建定制</view>
				</view>
				<view class="date">
					<view class="datetext"><span style="color: red;margin-left: 5rpx;">*</span>目的地</view>
					<view class="example-body">
						<view class="datetext">{{demandForm.destination}}</view>
						<!-- <uni-icons type="right" size="18" color="#666"></uni-icons> -->
					</view>
				</view>
				<view class="date">
					<view class="datetext"><span style="color: red;margin-left: 5rpx;">*</span>出游日期</view>
					<view class="example-body">
						<uni-datetime-picker v-model="range" type="daterange" :border="false" />
						<uni-icons type="right" size="18" color="#666"></uni-icons>
					</view>

				</view>
				<view class="date" @click="numberPeople">
					<view class="datetext"><span style="color: red;margin-left: 5rpx;">*</span>出行人数</view>
					<view class="example-body">
						<view class="datetext">{{adult}}成人，{{children}}儿童</view>
						<uni-icons type="right" size="18" color="#666"></uni-icons>
					</view>
				</view>
				<view class="date">
					<view class="datetext"><span style="color: red;margin-left: 5rpx;">*</span>人均预算</view>
					<view class="datetext example-body" style="border-bottom: none;">
						<input class="uni-input" type="number" placeholder="预估人均预算" v-model="demandForm.budget" />
					</view>
				</view>
			</view>
			<view class="customization rou" style="padding-bottom: 0;">
				<view class="date">
					<view class="datetext"><span style="color: red;margin-left: 5rpx;">*</span>联系人</view>
					<view class="datetext example-body">
						<input class="uni-input" placeholder="请输入真实姓名" v-model="demandForm.contacts" />
					</view>
				</view>
				<view class="date">
					<view class="datetext"><span style="color: red;margin-left: 5rpx;">*</span>手机号码</view>
					<view class="datetext example-body">
						<input class="uni-input" type="number" placeholder="请输入手机号" v-model="demandForm.contactPhone" />
					</view>
				</view>
				<view class="date" v-if="tab === 'enterprise'">
					<view class="datetext"><span style="color: red;margin-left: 5rpx;">*</span>企业名称</view>
					<view class="datetext example-body" style="border-bottom: none;">
						<input class="uni-input" placeholder="填写公司/企业/团队名称" v-model="demandForm.enterpriseName" />
					</view>
				</view>
			</view>
			<view class="customization rou programme" @click="submit">立即定制</view>
		</view>
		<!-- 出行人数弹窗 -->
		<uni-popup ref="popup" type="center" background-color="#fff" :is-mask-click="false">
			<view class="popupCentent">
				<view class="expect">预计出行人数</view>
				<view class="adult">
					<view class="grown-up">成人</view>
					<view class="count">
						<image v-if="adult !== 0" class="reduce" src="../../../../../static/jianhao.png" mode=""
							@click="adultJian"></image>
						<image v-else class="reduce" src="../../../../../static/jianhaocdcd.png" mode=""></image>
						<view class="countNumber">{{adult}}</view>
						<image class="reduce" src="../../../../../static/jiahao.png" mode="" @click="adultJia"></image>
					</view>
				</view>
				<view class="adult" style="border-bottom: none;">
					<view class="grown-up">儿童</view>
					<view class="count">
						<image v-if="children !== 0" class="reduce" src="../../../../../static/jianhao.png" mode=""
							@click="childrenJian"></image>
						<image v-else class="reduce" src="../../../../../static/jianhaocdcd.png" mode=""></image>
						<view class="countNumber">{{children}}</view>
						<image class="reduce" src="../../../../../static/jiahao.png" mode="" @click="childrenJia">
						</image>
					</view>
				</view>
				<view class="confirm" @click="close">确定</view>
			</view>
		</uni-popup>
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
				demandForm: {},
				demandFormUser: {},
				// 验证弹窗
				// type: 'center',
				msgType: 'success',
				messageText: '这是一条成功提示',
			}
		},
		onLoad: function(option) {
			this.demandForm = JSON.parse(decodeURIComponent(option.demandForm));
			console.log(this.demandForm);
			this.demandFormUser = JSON.parse(decodeURIComponent(option.demandFormUser));
		},

		mounted() {
			setTimeout(() => {
				this.datetimesingle = Date.now() - 2 * 24 * 3600 * 1000
				this.single = '2021-2-12'
				this.datetimerange = ["2021-07-08 0:01:10", "2021-08-08 23:59:59"]
			}, 3000);
			this.$watch('range', function(newVal, oldVal) {
				// 当时间范围发生变化时，更新 demandForm 对象中的 playtime 属性
				this.demandForm.playtime = newVal[0] + '-' + newVal[1];
			});
			this.$watch('tab', function(newVal, oldVal) {
				if (newVal === 'home') {
					this.demandForm.customizaType = 0
				} else {
					this.demandForm.customizaType = 1
					this.demandForm.enterpriseName = ''
				}
			});
		},

		methods: {
			change(e) {
				this.single = e
				console.log('change事件:', this.single = e);
			},
			// 打开弹窗
			numberPeople() {
				this.$refs.popup.open('center')
			},
			//关闭弹窗
			close() {
				this.$refs.popup.close()
				this.demandForm.NumberTravelers = this.adult + '成人，' + this.children + '儿童';
			},
			//tab栏切换
			tabHome(text) {
				this.tab = text
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
			//提交验证
			submit() {
				console.log(this.demandForm);
				if (this.demandForm.playtime === '') {
					this.msgType = 'error'
					this.messageText = "请选择出行时间"
					this.$refs.message.open()
				} else if (this.adult === 0 && this.children === 0) {
					this.msgType = 'error'
					this.messageText = "请选择出行人数"
					this.$refs.message.open()
				} else if (this.demandForm.budget === '') {
					this.msgType = 'error'
					this.messageText = "请输入人均预算"
					this.$refs.message.open()
				} else if (this.demandForm.contacts === '') {
					this.msgType = 'error'
					this.messageText = "请输入联系人"
					this.$refs.message.open()
				} else if (this.demandForm.contactPhone === '') {
					this.msgType = 'error'
					this.messageText = "请输入联系电话"
					this.$refs.message.open()
				} else if (this.tab === 'enterprise' && this.demandForm.enterpriseName === '') {
					this.msgType = 'error'
					this.messageText = "请输入企业名称"
					this.$refs.message.open()
				} else {
					if (uniCloud.getCurrentUserInfo().uid) {
						const timestamp = Date.now().toString();
						// 生成4位随机数
						const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
						// 组合订单号
						this.demandForm.orderNumber = timestamp + random;
						this.request()
					}else{
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
				db.collection('demo-order-form')
					.add(this.demandForm)
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
					width: 200rpx;
					height: 35px;
					line-height: 35px;
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

	//出行人数弹窗部分
	.popupCentent {
		background-color: #ffffff;
		width: 76vw;
		border-radius: 10rpx;

		.expect {
			font-size: 32rpx;
			line-height: 84rpx;
			text-align: center;
			font-weight: bold;
			border-bottom: #dfdfdf solid 1rpx;
		}

		.adult {
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: #dfdfdf solid 1rpx;
			margin: 20rpx;

			.grown-up {
				font-size: 42rpx;
				line-height: 84rpx;
			}

			.count {
				display: flex;
				align-items: center;

				.reduce {
					width: 50rpx;
					height: 50rpx;
				}

				.countNumber {
					font-size: 28rpx;
					padding: 0 20rpx;
				}
			}
		}

		.confirm {
			font-size: 42rpx;
			background-color: #1296db;
			line-height: 84rpx;
			border-bottom-left-radius: 10rpx;
			border-bottom-right-radius: 10rpx;
			color: #ffffff;
			text-align: center;
		}
	}
</style>