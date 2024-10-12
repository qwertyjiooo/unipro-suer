<template>
	<scroll-view class="scenicSpot" v-if="loadDataList">
		<image v-show="false" v-for="(item, index) in urlsArray" :key="index" :src="item" mode="aspectFill" />
		<view class="grid-container filteringC">
			<img class="item1 item" :src="urlsArray[0]" alt="" @click="previewImage(urlsArray[0])" />
			<img class="item2 item" :src="urlsArray[1]" alt="" @click="previewImage(urlsArray[1])" />
			<view class="item3 item">
				<img class="item" :src="urlsArray[2]" alt="" @click="previewImage(urlsArray[2])" />
				<view class="mask" v-if="urlsArray.length > 3">+{{urlsArray.length - 3}}</view>
			</view>
		</view>

		<view style="padding: 0 40rpx 40rpx;">
			<view class="title">
				{{loadDataList.title}}
			</view>
			<!-- 标签 -->
			<view class="detailsTag">
				<span>大自然的鬼斧神工</span>
				<span>桐庐山水</span>
			</view>
			<view class="price">
				￥{{loadDataList.fullFare}}
				<span style="color: #999;font-size: 22rpx;">起/人</span>
				<span style="color: darkblue;font-size: 22rpx;" @click="clickInfoB">参考价说明</span>
			</view>
			<view class="evaluate">
				暂没有用户评价
			</view>
		</view>
		<view class="centent" style="background-color: #eeeeee;padding: 20rpx 0;">
			<view class="business">
				<view class="Iactive">

				</view>
				<view class="businessText">
					<view class="businessTitle" v-if="loadDataList.user">
						{{loadDataList.user[0].username}}
					</view>
					<view class="text" v-if="loadDataList.user">
						Hi,我是旅行定制师{{loadDataList.user[0].username}}，请欣赏我制作的旅行路线规划
						<!-- Hi,我是旅行定制师{{loadDataList.user[0].username}}，已服务136人出游，擅长上海，江苏，浙江等地，请欣赏我制作的 -->
					</view>
				</view>
				<uni-icons type="right" size="20" color="#999"></uni-icons>
			</view>
		</view>
		<view class="centent" style="background-color: #eeeeee;padding:0 0 20rpx;">
			<view class="cententAll">
				<view class="characteristic">
					行程特色
				</view>
				<view class="specialDetails">
					不跟团不自助 精彩体验一网打尽
				</view>
			</view>
		</view>
		<view class="centent" style="background-color: #eeeeee;border: #f1f1f1 1rpx solid;">
			<view class="cententAll">
				<view class="" style="display: flex;align-items: center;justify-content: space-between;">
					<view class="characteristic" v-if="loadDataList.routes">
						{{loadDataList.routes.length}}日行程
					</view>
					<navigator class="trip"
						:url="'/pages/index/homestays/details/itinerary/itinerary?item='+ encodeURIComponent(JSON.stringify(this.loadDataList.routes))">
						详细行程
						<uni-icons type="right" size="20" color="#999"></uni-icons>
					</navigator>
				</view>
				<!-- 行程 -->
				<view class="sun">
					<view class="specific" v-for="(item,index) in defaultPersonList" :key="index">
						<view class="specificNumber specificall">
							{{item.number}}
						</view>
						<view class="specificTitle specificall">
							{{item.title}}
						</view>
					</view>
				</view>
			</view>
			<view class="cententAll sunday">
				<view class="" v-for="(item,index) in loadDataList.routes" :key="item._id">
					<view class="" style="display: flex;align-items: center;border-top: #f1f1f1 1rpx solid;">
						<view class="firstDay size">D{{index+1}}</view>
						<view class="location size">{{item.title}}</view>
					</view>
					<view class="resDay" v-for="(res,Index) in item.day" :key="Index">
						<view class="Attractions" v-if="res.level!==3">
							<!-- 景点 -->
							<!-- <span style="">{{judgeAttractions(res.level)}}</span> -->
							<span v-if="res.level === 0" style="color: #1296db;border: #1296db 1rpx solid;">景点</span>
							<span v-if="res.level === 1" style="color: #db9214;border: #db9214 1rpx solid;">酒店</span>
							<span v-if="res.level === 2" style="color: #ba13db;border: #ba13db 1rpx solid;">餐饮</span>
							<span v-if="res.level === 3" style="color: #1296db;border: #1296db 1rpx solid;">航班</span>
							<span v-if="res.level === 4" style="color: #1cdb59;border: #1cdb59 1rpx solid;">活动</span>
							<span v-if="res.level === 5" style="color: #db575a;border: #db575a 1rpx solid;">购物</span>
							<view class="touristDestinations">
								<view class="AttractionsTitle">
									{{res.text}}
								</view>
								<img class="AttractionsImg" @click="clickInfoA(index,Index)"
									:src="res.images && res.images.length > 0 ? res.images[0].url : ''" alt="" />
							</view>
							<view class="line"></view>
						</view>
					</view>

				</view>
				<navigator class="viewDetail"
					:url="'/pages/index/homestays/details/itinerary/itinerary?item='+ encodeURIComponent(JSON.stringify(this.loadDataList.routes))">
					查看详细行程
				</navigator>
			</view>
		</view>

		<view class="centent" style="background-color: #eeeeee;padding:20rpx 0 0;">
			<view class="cententAll">
				<view class="characteristic">
					费用包含
				</view>
				<view class="" v-for="(item,index) in containList" :key="index">
					<view class="contain" v-if="item.number!==0">
						{{item.titie}}
					</view>
				</view>

				<view class="specialDetails">
					<span style="color: red;">*</span>
					以上为参考方案，详细费用请咨询客服
				</view>
			</view>
		</view>
		<view class="centent" style="background-color: #eeeeee;padding:20rpx 0 120rpx;">
			<view class="cententAll">
				<view class="characteristic">
					预定须知
				</view>
				<view class="specialDetails" style="color: black;">
					1.请您在预订时务必提供准确完整的信息，以免产生预
					订错误，影响出行。如因客人提供错误个人信息而造成
					损失，我司不承担任何责任。同程旅游尊重并保护用户
					隐私，用户信息只会用于协助用户预订旅游商品。</br>
					2.出行前，请您确保您自身的身体状况适合参加行程，
					您应将自身健康情况如实告知旅行社。若同程旅游发现
					游客存在不宜出行的身体情况的，有权拒绝接待，敬请
					谅解。</br>
					3.请尊重当地的饮食习惯、习俗禁忌、宗教礼仪，遵守
					当地法律法规等。</br>
					4.为了您人身、财产的安全，请您避免在公开场合暴露
					贵重物品及大量现金。</br>
					5.当您参加有一定危险性的室内或户外活动时，参与前
					请根据自身条件，并充分参考当地相关部门及其它专业
					机构的相关公告和建议后出行。</br>
					6.您所预定的旅行服务可能会由于目的地当地体育赛
					事、交通延阻、罢工、示威游行、道路管制、天气状况
					和自然灾害(包括但不限于台风、大风、大雾、暴雨、
					雷电、海啸、地震、泥石流等）、恐怖袭击、暴力犯罪
					活动等不可抗力及班次调整等特殊突发情况而发生变
					更，需要用户本人及时调整具体的行程安排并自行承担
					由于上述原因引致的全部损失及额外费用。同程不承担
					违约责任，将尽最大努力协助您办理变更事宜。</br>
					7.相对于普通游客而言，特殊人群(如孕妇、老人、儿
					童）更应注重旅途安全，请您根据自身情况，谨慎前
					往。不接受80周岁以上(含80周岁)的游客，不接待孕
					妇，不接待18周岁以下旅游者单独出行，未满18周岁的
					旅游者请由家属陪同参加！出境游年龄超过65周岁玉
					内游年龄超过70周岁，须家属陪同提供《健康证明》签
					订《免责协议书》。由于不同目的地接待服务能力限
					制，请询问定制师具体年龄限制等情况再行预定，敬请
					谅解!</br>
					8.为普及旅游文明公约，提高公民出游素质，塑造中国
					公民良好国际形象，请您遵守《中国公民出境旅游文明
					行为指南》、《中国公民国内旅游文明行为公约》
				</view>
			</view>
		</view>
		<uni-popup ref="popupA" type="bottom">
			<!-- 弹出框的内容 -->
			<view class="infoPoput poputPlay">
				<view class="popup-content">
					景点详情
					<img src="../../../../static/xxx.png" alt="" @click="closePopupA" />
				</view>
				<view class="" style="height: 58vh;overflow-y: auto;">
					<view class="popup-text" v-if="imagesExist">
						<!-- 名称 -->
						{{loadDataList.routes[pic].day[cur].text}}
						<span v-if="images.length > 1  ">—>滑动</span>
					</view>
					<!-- 行程路线图片详情 -->
					<scroll-view scroll-x="true" class="cost" style="white-space: nowrap;" v-if="imagesExist">
						<img :src="item.url" v-for="(item,index) in images" :key="index" alt="" />
					</scroll-view>
					<view class="" style="font-size: 26rpx;" v-if="imagesExist">
						{{loadDataList.routes[pic].day[cur].name}}
					</view>
				</view>
				<view class="popup-bottom" @click="closePopupA">
					关闭
				</view>
			</view>
		</uni-popup>
		<uni-popup ref="popupB" type="bottom">
			<!-- 弹出框的内容 -->
			<view class="infoPoput poputPlay">
				<view class="popup-content">
					参考价说明
					<img src="../../../../static/xxx.png" alt="" @click="closePopupB" />
				</view>
				<scroll-view scroll-y="true" class="cost">
					报价仅供参考。您可根据喜好调整行程/玩法/天数。定制师 会结合您的需求，为您提供专属定制行程方案和实时精准报价
				</scroll-view>
			</view>
		</uni-popup>

		<view class="customization">
			<view class="telephone">
				<uni-icons type="phone" size="26"></uni-icons>
				电话
			</view>
			<navigator class="make" :url="'/pages/index/homestays/details/demandForm/demandForm?demandForm=' + encodeURIComponent(JSON.stringify(demandForm)) + '&demandFormUser=' + encodeURIComponent(JSON.stringify(demandFormUser))">
			    定制该行程
			</navigator>
		</view>
	</scroll-view>
</template>

<script>
	import {
		defaultPersonList,
		containList
	} from './data.js'
	export default {
		data() {
			return {
				defaultPersonList: defaultPersonList,
				containList: containList,
				loadDataList: {},
				urlsArray: [],
				pic: 0,
				cur: 0,
				demandForm: {},
				demandFormUser:{}
			};
		},
		computed: {
			// 多级判断是否存在防止报错，检查必要的属性是否存在
			imagesExist() {
				return (
					this.loadDataList &&
					this.loadDataList.routes &&
					this.loadDataList.routes[this.pic] &&
					this.loadDataList.routes[this.pic].day &&
					this.loadDataList.routes[this.pic].day[this.cur] &&
					this.loadDataList.routes[this.pic].day[this.cur].images
				);
			},
			// 返回 images 数组，确保属性存在且为数组
			images() {
				if (this.imagesExist) {
					return this.loadDataList.routes[this.pic].day[this.cur].images;
				} else {
					return [];
				}
			},
		},
		onLoad(options) {
			// console.log('Received ID:', options.id);
			this.loadData(options.id)
		},
		methods: {
			// 行程弹窗
			clickInfoA(index, Index) {
				this.pic = index
				this.cur = Index
				this.$refs.popupA.open('bottom')
			},
			closePopupA() {
				this.$refs.popupA.close();
			},
			clickInfoB() {
				this.$refs.popupB.open('bottom')
			},
			closePopupB() {
				this.$refs.popupB.close();
			},
			previewImage(index) {

				uni.previewImage({
					urls: this.urlsArray, // 需要预览的图片链接列表
					current: index, // 当前显示图片的链接
				});
			},
			catalogue() {
				uni.$emit('passRoutes', this.loadDataList.routes);
				uni.navigateTo({
					url: '/pages/index/homestays/details/itinerary/itinerary'
				})
			},
			//判断是否是景点餐饮等
			judgeAttractions(level) {
				if (level === 0) {
					return '景点'
				} else if (level === 1) {
					return '酒店'
				} else if (level === 2) {
					return '餐食'
				} else if (level === 3) {
					return '行程'
				} else if (level === 4) {
					return '活动'
				} else {
					return '购物'
				}

			},

			//数据请求
			loadData(id) {
				uni.showLoading({
					title: '加载中...',
					mask: true,
				});
				uniCloud.callFunction({
					name: "demo-homestays-information",
					data: {
						id: id
					}
				}).then(res => {
					let item = res.result.data[0]
					this.loadDataList = item
					console.log(this.loadDataList);
					// 表单赋值
					let demandForm = {
						customizer_id: item.user[0]._id, //定制师ID
						route_id: item._id, //定制路线/预约景区ID
						// user_id:undefined,//下单用户ID
						status: 0, //订单状态，0：待旅行，1：已完成，2：取消旅行审核中，3：取消失败，4：已取消
						customizaType:0,//定制类型，0：个人/家庭定制，1：企业/团建定制
						orderNumber:'',//订单号
						title: item.title, //定制路线/预约景区标题
						// create_time:'',//订单创建时间
						destination: '哈尔滨', //目的地
						playtime: '', //游玩时间
						NumberTravelers: '', //游玩人数
						budget:'',//人均预算
						contacts: '', //联系人
						contactPhone: '' ,//联系电话
						enterpriseName:'',//企业名称
					}
					console.log(demandForm);
					this.demandForm = demandForm
					let demandFormUser = {
						userName:item.user[0].username,//定制师姓名
						url:item.images[0].url,//封面url
						title: item.title, //定制路线/预约景区标题
					}
					this.demandFormUser = demandFormUser
					//取数组内的图片链接
					this.loadDataList.images.forEach(item => {
						// 如果 item 是一个对象，并且包含 url 属性，则将其值添加到 urlsArray 数组中
						if (typeof item === 'object' && item.url) {
							this.urlsArray.push(item.url);
						}
					});
					//计算总行程的景点餐食等个数
					this.loadDataList.routes.forEach(route => {
						// 检查每个对象中的 day 数组
						route.day.forEach(image => {
							if (image.level === 0) {
								this.defaultPersonList[0].number++,
									this.containList[0].number++
							} else if (image.level === 1) {
								this.defaultPersonList[1].number++,
									this.containList[1].number++
							} else if (image.level === 2) {
								this.defaultPersonList[2].number++,
									this.containList[2].number++
							} else if (image.level === 3) {
								this.defaultPersonList[3].number++,
									this.containList[3].number++
							} else if (image.level === 4) {
								this.defaultPersonList[4].number++,
									this.containList[4].number++
							} else {
								this.defaultPersonList[5].number++
							}
						});
					});
					uni.hideLoading();
					// console.log(this.loadDataList);
				});
			},
		},
		// 离开页面清除对defaultPersonList,containList的操作
		beforeDestroy() {
			for (var index in defaultPersonList) {
				defaultPersonList[index].number = 0
			}
			for (var index in containList) {
				if (index !== containList.length - 1) {
					containList[index].number = 0
				}
			}
		}
	}
</script>

<style lang="scss">
	.scenicSpot {
		height: calc(100% - 44px);
		// overflow: auto;
		position: relative;
		overflow-y: hidden;

		.cententAll {
			background-color: #ffffff;
			padding: 40rpx;
		}

		.filteringA {
			grid-template-columns: repeat(1, 1fr);
			grid-template-rows: repeat(2, 150rpx);
			grid-template-areas:
				'a a b'
				'a a c';
			gap: 10rpx;

			.item1 {
				grid-area: a;
				border-radius: 10rpx;
				// border-bottom-left-radius: 10rpx;
			}
		}

		.filteringB {

			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(2, 150rpx);
			grid-template-areas:
				'a b '
				'a b ';
			gap: 10rpx;

			.item2 {
				grid-area: b;
				border-bottom-right-radius: 10rpx;
			}
		}

		.filteringC {

			grid-template-columns: repeat(3, 1fr);
			grid-template-rows: repeat(2, 150rpx);
			grid-template-areas:
				'a a b'
				'a a c';
			gap: 10rpx;

		}

		.grid-container {
			padding: 0 20rpx;
			display: grid;
			place-items: center;

			.item {
				width: 100%;
				height: 100%;
			}

			.item1 {
				grid-area: a;
				border-top-left-radius: 10rpx;
				border-bottom-left-radius: 10rpx;
			}

			.item2 {
				grid-area: b;
				border-top-right-radius: 10rpx;
			}

			.item3 {
				grid-column: c;
				border-bottom-right-radius: 10rpx;
				position: relative;
			}

			.mask {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.5);
				/* 设置蒙版颜色及透明度 */
				z-index: 1;
				color: #ffffff;
				font-size: 32rpx;
				display: flex;
				align-items: center;
				justify-content: center;
			}

		}

		.title {
			font-weight: bold;
			font-size: 32rpx;
			padding-top: 20rpx;
		}

		.detailsTag {
			padding: 20rpx 0;

			span {
				font-size: 22rpx;
				color: #999;
				border: #999 solid 1rpx;
				padding: 5rpx 10rpx;
				border-radius: 5rpx;
				margin-right: 10rpx;
			}
		}

		.price {
			color: #1296db;
			font-size: 32rpx;

			span {
				margin-left: 10rpx;
			}
		}

		.evaluate {
			font-size: 32rpx;
			color: #999;
			line-height: 80rpx;
			background-color: #f1f1f1;
			text-align: center;
			margin-top: 20rpx;
			border-radius: 10rpx;
		}

		.business {
			display: flex;
			align-items: center;
			padding: 20rpx 40rpx;
			background-color: #ffffff;

			.Iactive {
				height: 100rpx;
				width: 100rpx;
				border-radius: 100rpx;
				background-image: url(https://mp-fcd50ffd-8e88-4c8b-9299-20b1da88fc6d.cdn.bspapp.com/cloudstorage/18a5e98f-cdc2-421c-b615-b74f0edd31f5.png);
				background-repeat: no-repeat;
				background-size: cover;
				background-position: center;
				margin-right: 10rpx;
			}

			.businessText {
				flex: 1;
				padding: 0 20rpx;

				.businessTitle {
					font-size: 28rpx;
					font-weight: 500;

				}

				.text {
					color: #999;
					font-size: 22rpx;
					line-height: 40rpx;
					text-indent: 1em;
				}
			}

		}

		.characteristic {
			font-size: 32rpx;
			font-weight: bold;
		}

		.contain {
			font-size: 26rpx;
			font-weight: bold;
			line-height: 64rpx;
			display: flex;
			align-items: center;
		}

		.contain::before {
			content: "\2022";
			/* Unicode编码表示小圆点 */
			margin-right: 8px;
			/* 调整圆点与文本之间的距离 */
			font-size: 20px;
			color: #1296db;
		}

		.trip {
			font-size: 26rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #999;
		}

		.specialDetails {
			font-size: 26rpx;
			color: #999;
			line-height: 52rpx;
		}

		.sun {
			display: flex;
			margin-top: 20rpx;

			.specific {
				flex: 1;

				.specificall {
					text-align: center;
					font-size: 26rpx;
					font-weight: bold;
				}

				.specificTitle {
					color: #999;
				}
			}
		}

		.sunday {
			// border: #f1f1f1 1rpx solid;
			// padding-bottom: 0;

			.firstDay {
				background-color: #1296db;
				padding: 20rpx;
				border-radius: 30rpx;
				font-size: 26rpx;
				color: #ffffff;
				font-weight: bold;
				margin-right: 20rpx;
			}

			.location {
				font-size: 32rpx;
				font-weight: bold;
			}

			.resDay {
				.Attractions {
					margin-left: 40rpx;
					padding-top: 20rpx;
					padding-bottom: 20rpx;
					display: flex;
					align-items: flex-start;
					position: relative;

					span {

						border-radius: 20rpx;
						padding: 5rpx 10rpx;
						font-size: 22rpx;
					}

					.touristDestinations {
						display: flex;
						justify-content: space-between;
						flex: 1;
						padding: 0 0 20rpx 20rpx;
						border-bottom: #f1f1f1 1rpx solid;

						.AttractionsTitle {
							font-size: 26rpx;
							font-weight: bold;
							color: #1296db;
						}

						.AttractionsImg {
							width: 150rpx;
							height: 100rpx;

							margin-left: auto;
							border-radius: 10rpx;
						}
					}

					.line {
						position: absolute;
						background-color: #f1f1f1;
						width: 4rpx;
						height: 78rpx;
						top: 80rpx;
						left: 33rpx;
					}

				}
			}

			.resDay:last-of-type {
				.line {
					display: none;
				}

				.touristDestinations {
					border-bottom: none;
				}
			}

			.viewDetail {
				background-color: #1296db;
				color: #ffffff;
				text-align: center;
				font-size: 32rpx;
				border-radius: 100rpx;
				padding: 25rpx;
				margin: 20rpx 0;
			}
		}

		.infoPoput {
			padding: 20rpx;
			background-color: #ffffff;
			height: 70vh;
			position: relative;
			// white-space: nowrap;

			.popup-content {
				position: relative;
				text-align: center;
				border-bottom: #d5d5d5 1rpx solid;
				padding-bottom: 20rpx;
				font-size: 32rpx;
				font-weight: bold;

				img {
					position: absolute;
					top: 6rpx;
					right: 0;
					width: 32rpx;
					height: 32rpx;
				}
			}

			.popup-bottom {
				padding: 20rpx;
				text-align: center;
				font-size: 32rpx;
				border: 1rpx solid black;
				border-radius: 200rpx;
				// margin-top: 2vh;
			}

			.popup-text {
				font-size: 32rpx;
				font-weight: bold;
				margin-top: 20rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;

				span {
					font-size: 32rpx;
					color: #999;
					font-weight: bold;
					padding-right: 20rpx;
				}
			}

			.cost {
				font-size: 26rpx;
				// padding: 20rpx;
				margin-top: 20rpx;

				img {
					width: calc(100%);
					height: 400rpx;
					margin-right: 20rpx;
				}

				:last-of-type {
					margin-right: 0;
				}
			}

			.buttonPrimary {
				display: flex;
				align-items: center;
				justify-content: space-between;

				button {
					// bottom: 0;
					width: 48%;
					margin-top: 40rpx;
				}
			}

			.costDetails {
				font-size: 26rpx;
				padding: 20rpx;
				line-height: 40rpx;
			}
		}

		.customization {
			padding: 20rpx;
			background-color: #ffffff;
			position: fixed;
			bottom: 0;
			left: 0;
			width: calc(100% - 40rpx);
			display: flex;
			align-items: center;
			justify-content: space-between;

			.telephone {
				display: flex;
				flex-direction: column;
				flex: 1;
				align-items: center;
				justify-content: center;
				font-size: 26rpx;
			}

			.make {
				flex: 3;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 32rpx;
				background-color: #1296db;
				height: 90rpx;
				border-radius: 90rpx;
				color: #ffffff;
			}
		}
	}
</style>