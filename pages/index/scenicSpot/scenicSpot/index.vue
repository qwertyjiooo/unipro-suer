<template>
	<view class="">
		<view class="" v-if="!ShowHide"
			style="font-size: 32rpx;display: flex;align-items: center;justify-content: center;margin-top: 40%;">
			{{currently}}
		</view>
		<view class="details" v-else="ShowHide">
			<view class="areaName tattole">
				<view class="areaNameTatal">
					{{altList.title}}
					<view class="areaNameText">{{altList.title}}</view>
				</view>
				<view class="areaNameTime play">
					开园时间：{{Tickets.create_date}}-{{Tickets.end_date}}
					<view class="seeDetail" @click="clickInfo">
						预定须知 >
					</view>
				</view>
				<view class="areaNameTime">
					{{altList.title}}风景名胜区
					<view class="seeDetail" @click="onMarkerTap">
						<uni-icons type="location" size="26" color="#4caaf9"></uni-icons>
						地图·导航
					</view>
				</view>
			</view>
			<!-- 顶部导航 -->
			<view class="menuTrue tattole">
				<scroll-view class="menu" scroll-x="true">
					<view v-for="(item, index) in monthDayWeekdayUntilNextMonth" :key="index" class="menu-item"
						:class="{'active': activeTab === index}" @click="  selectionTime(index,item.month,item.day,item.weekday) ">
						<view class="" v-if="index===0">今天</view>
						<view class="" v-if="index===1">明天</view>
						<view class="" v-if="index===2">后天</view>
						<view class="" v-if="index>2">{{item.weekday}}</view>
						<view class="">{{item.month}}-{{item.day}}</view>
						<view class="" style="color: #4caaf9;">￥{{Tickets.fullFare}}</view>
					</view>
				</scroll-view>
				<view class="menuTrueText" v-show="activeTab>2">
					你选择了{{activeTab}}天后出行
				</view>
				<view class="totle" >
					<view class="totleTime" v-for="(itemC, indexC) in Time" :key="indexC"
						:class="{'active': TimeIndexC === indexC}" @click="timeIndexC(itemC,indexC)">
						{{itemC}}
					</view>
				</view>
			</view>
			<view class="bigeminy tattole">
				<view class="bigeminyText play">
					可选类型
				</view>
				<view class="spot" style="display:block;">

					<view class="spotText play">
						【{{altList.title}}-门票】
					</view>
					<view class="" v-for="(item,index) in priceTextList" :key="index">
						<view class="priceTicket playBorder">
							<view class="priceText">
								{{item.title}}
								<view class="" style="height: 26rpx;"></view>
								<view class="priceTicketText" v-for="(res,Index) in item.text" :key="Index">
									{{res}}
								</view>
								<view class="" style="height: 26rpx;"></view>
								<!-- index === 0 -->
								<view v-if="index ===0" class="seeDetail" @click="clickInfoA">
									预定须知 >
								</view>
								<!-- index === 1 -->
								<view v-else-if="index===1" class="seeDetail" @click="clickInfoB">
									预定须知 >
								</view>
								<!-- index === 2 -->
								<view v-else class="seeDetail" @click="clickInfoC">
									预定须知 >
								</view>
							</view>
							<view class="price" v-if="index===0">
								<view class="priceNamber">
									<span class="priceSpanA">￥{{Tickets.fullFare}}</span>
									<span class="priceSpanB">￥{{Tickets.fullFare}}</span>
								</view>
								<view style="display: flex;align-items: center;justify-content: flex-end;">
									<view class="addPrice Number" v-if="scoreCentent!=0" @click="addjianshaoA">
										一
									</view>
									<view class="addPriceNumber" v-if="scoreCentent!=0">
										{{scoreCentent}}
									</view>
									<view class="addPrice" @click="addzengjiaA">
										<uni-icons type="plusempty" size="24" color="#FFFFFF"></uni-icons>
									</view>
								</view>
							</view>
							<view class="price" v-else-if="index === 1">
								<view class="priceNamber">
									<span class="priceSpanA">￥{{Tickets.Discounted}}</span>
									<span class="priceSpanB">￥{{Tickets.Discounted}}</span>
								</view>
								<view style="display: flex;align-items: center;justify-content: flex-end;">
									<view class="addPrice Number" v-if="scoreCententB!=0" @click="addjianshaoB">
										一
									</view>
									<view class="addPriceNumber" v-if="scoreCententB!=0">
										{{scoreCententB}}
									</view>
									<view class="addPrice" @click="addzengjiaB">
										<uni-icons type="plusempty" size="24" color="#FFFFFF"></uni-icons>
									</view>
								</view>
							</view>
							<view class="price" v-else="index === 2">
								<view class="priceNamber">
									<span class="priceSpanA">￥0</span>
									<span class="priceSpanB">￥0</span>
								</view>
								<view style="display: flex;align-items: center;justify-content: flex-end;">
									<view class="addPrice Number" v-if="scoreCententC!=0" @click="addjianshaoC">
										一
									</view>
									<view class="addPriceNumber" v-if="scoreCententC!=0">
										{{scoreCententC}}
									</view>
									<view class="addPrice" @click="addzengjiaC">
										<uni-icons type="plusempty" size="24" color="#FFFFFF"></uni-icons>
									</view>
								</view>
							</view>
						</view>
						<!-- <view class="totle" v-if="scoreCentent!=0 && index===0">
							<view class="totleTime" v-for="(itemA, indexA) in Time" :key="indexA"
								:class="{'active': TimeIndexA === indexA}" @click="timeIndexA(itemA,indexA)">
								{{itemA}}
							</view>
						</view>
						<view class="totle" v-if="scoreCententB!=0 && index === 1">
							<view class="totleTime" v-for="(itemB, indexB) in Time" :key="indexB"
								:class="{'active': TimeIndexB === indexB}" @click="timeIndexB(itemB,indexB)">
								{{itemB}}
							</view>
						</view>
						<view class="totle" v-if="scoreCententC!=0 && index=== 2">
							<view class="totleTime" v-for="(itemC, indexC) in Time" :key="indexC"
								:class="{'active': TimeIndexC === indexC}" @click="timeIndexC(itemC,indexC)">
								{{itemC}}
							</view>
						</view> -->
					</view>
					
				</view>
			</view>
			<view class="predetermine tattole" id='section1'>
				<view class="predetermineTatle">
					景点详情
				</view>
				<view class="predetermineText" v-html="Tickets.predetermine">
				</view>
			</view>
			<view class="buttomNumber">
				<view class="add amount ">
					总额：
					<span style="font-size: 30rpx;color: #4caaf9;">￥{{scoreAdd}}.00 &NoBreak;&nbsp;</span>
					<span> 明细 <uni-icons type="up" size="18" color=""></uni-icons></span>
				</view>
				<view class="add look" v-if="scoreCentent===0&&scoreCententB===0&&scoreCententC===0">
					查看门票
				</view>
				<view class="add look" v-if="scoreCentent!==0||scoreCententB!==0||scoreCententC!==0"
					@click="reservation">
					预约
				</view>
			</view>
			<uni-popup ref="popup" type="bottom">
				<!-- 弹出框的内容 -->
				<view class="infoPoput poputPlay">
					<view class="popup-content">
						预定须知
						<img src="../../../../static/xxx.png" alt="" @click="closePopupA" />
					</view>
					<view class="cost">
						１、景区严格执行“限量、预约、错峰”要求，严格遵循“不预约不入园”的原则；<br />
						２、游览南岳衡山中心景区需从全域旅游服务中心或康家垅、白龙潭、西岭、龙凤门票卡口进入。景区内古道、游步道封闭管控；<br />
						３、游客进入景区请遵守国家森林防火法律法规，配合防火、禁火检查，主动扫“防火码”上交一切火源，禁止在景区内吸烟和野外用火等任何易发生火灾的行为；<br />
						４、请在游玩当日凭身份证或二维码入园；门票一经使用不予退换，过期作废、不延用、不兑换；<br />
						５、进入景区注意安全，照顾好同行的老人儿童，保管好随身携带的物品。<br />
						旅游咨询：0734-12345
					</view>
				</view>

			</uni-popup>
			<uni-popup ref="popupA" type="bottom">
				<!-- 弹出框的内容 -->
				<view class="infoPoput poputPlay">
					<view class="popup-content">
						门票-全价票
						<img src="../../../../static/xxx.png" alt="" @click="closePopupA" />
					</view>
					<view class="cost">
						一、请务必携带本人身份证原件，凭身份证或二维码入园。门票一经使用不予退换；过期作废，不延用、不兑换；<br />
						　二、游客如不能及时入园，请在预约游玩时间当日23:59之前发起退票申请，23:59之后门票将过期核销，视同游客已入园；<br />
						　三、如需开具电子发票，请点击“个人中心”中的“发票申请”自助开票，开票咨询请拨“0734-12345”。<br />
					</view>
				</view>
			</uni-popup>
			<uni-popup ref="popupB" type="bottom">
				<!-- 弹出框的内容 -->
				<view class="infoPoput poputPlay">
					<view class="popup-content">
						门票-半价票/学生票/长者票
						<img src="../../../../static/xxx.png" alt="" @click="closePopupB" />
					</view>
					<view class="cost">
						一、14周岁（含）-18 周岁（不含）未成年人、全日制大学本科及以下学历在校学生(不含成人教育、自考、短期进修院校学生等)，凭有效证件（学生证、身份证两证齐全）预约购票享
						五折优惠；<br />
						　二、60 周岁（含）-65 周岁（不含）长者，凭身份证预约购票享 五折优惠；<br />
						　三、检票口查验优惠证件；<br />
						　四、请务必携带本人身份证原件，凭身份证或二维码入园。门票一经使用不予退换；过期作废，不延用、不兑换；<br />
						　五、游客如不能及时入园，请在预约游玩时间当日23:59之前发起退票申请，23:59之后门票将过期核销，视同游客已入园；<br />
						　六、如需开具电子发票，请点击“个人中心”中的“发票申请”自助开票，开票咨询请拨“0734-12345”。<br />
					</view>
				</view>
			</uni-popup>
			<uni-popup ref="popupC" type="bottom">
				<!-- 弹出框的内容 -->
				<view class="infoPoput poputPlay">
					<view class="popup-content">
						门票-免费票
						<img src="../../../../static/xxx.png" alt="" @click="closePopupC" />
					</view>
					<view class="cost">
						　一、 14周岁（不含）以下的儿童，凭身份证或户口簿，免门票；<br />
						　二、 65 周岁（含）以上的长者，凭身份证预约，免门票；<br />
						　三、现役军人、残疾军人、烈士遗属、因公牺牲军人遗属、病故军人遗属、军队离退休干部，凭有效证件预约，免门票；<br />
						　四、残疾人凭身份证和有效残疾证预约，免门票；<br />
						　五、 消防救援人员凭有效证件预约，免门票；<br />
						　六、带团导游凭有效证件和出团手续预约，免门票；<br />
						　七、记者凭有效证件（国家新闻出版署核发的记者证、身份证两证齐全）预约，免门票；<br />
						　八、佛道教职人员凭有效证件，经核实后免门票；<br />
						　九、确因工作需要，进入景区的本区或驻岳各单位工作人员、驻岳部队官兵等应出示有效证件，经核实后免门票；<br />
						　十、 南岳户籍居民凭身份证预约，免门票；<br />
						　十一、 其他属于南岳区人民政府颁布的免票情形，凭身份证预约，免门票；<br />
					</view>
				</view>
			</uni-popup>
		</view>


	</view>
</template>

<script>
	import {
		priceTextList
	} from './data.js'
	export default {
		data() {
			return {
				priceTextList: priceTextList,
				currentTab: 'home',
				monthDayWeekdayUntilNextMonth: [],
				activeTab: 0,
				showPopup: false, // 控制弹出框显示与隐藏
				position: 'center',
				Time: [
					'00:00-08:00',
					'08:00-10:00',
					'10:00-12:00',
					'12:00-14:00',
					'14:00-17:30',
					'17:30-23:59',
				],
				TimeIndexA: 1,
				TimeIndexB: 1,
				TimeIndexC: 1,
				scoreCentent: 0,
				scoreCententB: 0,
				scoreCententC: 0,
				scoreAdd: 0,

				// 门票表单
				admissionList: [
					
					// {
					// 	people:0,
					// 	time:'',
					// },
				],
				altList:{
					id:undefined,
					title: '',//1
					url:'',//1
					data:'',
					weekday:'',
					time:'',
					fullVote:0,//全票人数
					halfVote:0,//半票人数
					freeVote:0,//免费票人数
				},
				id: '',
				Tickets: {},
				ShowHide: false,
				currently: '',
				latitude: undefined,
				longitude: undefined,
			};
		},
		created() {
			this.getMonthDayWeekdayUntilNextMonth();
		},
		onLoad(options) {
			uni.showLoading({
				title: '加载中...',
				mask: true,
			});

			uniCloud.callFunction({
				name: "demo-Tickets-details",
				data: {
					id: options.id
				}
			}).then(res => {
				if (res.result.data[0]) {
					this.ShowHide = true
					this.Tickets = res.result.data[0]
					this.altList.id = res.result.data[0]._id
					console.log(this.Tickets);
					uni.hideLoading();
					// console.log("demo-Tickets-details", this.Tickets)
					this.latitude = parseFloat(this.Tickets.latitude),
					this.longitude = parseFloat(this.Tickets.longitude)
				} else {
					this.currently = '暂无数据';
					uni.hideLoading();
				}

			}, 2000);

			this.altList.title = options.title; // 获取传递过来的 title 参数
			this.altList.url = options.url; // 获取传递过来的 title 参数
			// console.log(this.altList.title,this.altList.url); // 打印参数值
		},
		methods: {
			reservation() {
				uni.navigateTo({
					url: '/pages/index/scenicSpot/reservation/reservationCeshi?admissionList=' + encodeURIComponent(JSON
						.stringify(this.altList)),
				})
			},
			//日期选择
			selectionTime(index,month,day,weekday){
				this.activeTab = index
				this.altList.data = month + '-' + day
				this.altList.weekday = weekday
				console.log(this.altList);
			},
			getMonthDayWeekdayUntilNextMonth() {
				const dates = [];
				let currentDate = new Date(); // 获取当前日期

				const nextMonthDate = new Date();
				nextMonthDate.setMonth(nextMonthDate.getMonth() + 1); // 下个月的今天

				while (currentDate <= nextMonthDate) {
					// const month = currentDate.getMonth() + 1; // 月份从 0 开始，需要加 1
					const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
					const day = currentDate.getDate().toString().padStart(2, '0');
					const options = {
						weekday: 'long'
					};
					const aaa = currentDate.toLocaleString('zh-CN', options);
					let weekday;

					switch (aaa) {
						case '星期一':
							weekday = '星期一';
							break;
						case '星期二':
							weekday = '星期二';
							break;
						case '星期三':
							weekday = '星期三';
							break;
						case '星期四':
							weekday = '星期四';
							break;
						case '星期五':
							weekday = '星期五';
							break;
						case '星期六':
							weekday = '星期六';
							break;
						case '星期日':
							weekday = '星期日';
							break;
						default:
							// 如果 expression 不等于任何 case 值时执行这里的代码
							weekday = '未知';
					}
					dates.push({
						month,
						day,
						weekday
					});
					currentDate.setDate(currentDate.getDate() + 1);
				}
				this.monthDayWeekdayUntilNextMonth = dates;
			},
			// 一共 四个 显示和关闭弹窗
			clickInfo() {
				this.$refs.popup.open('bottom')
			},
			closePopup() {
				this.$refs.popup.close();
			},
			clickInfoA() {
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
			clickInfoC() {
				this.$refs.popupC.open('bottom')
			},
			closePopupC() {
				this.$refs.popupC.close();
			},
			// 三种 不同的票价的 逻辑 点击加号减号 进行不同逻辑的操作
			addzengjiaA() {
				this.altList.fullVote++;
				this.scoreCentent++;
				this.scoreAdd += parseFloat(this.Tickets.fullFare);
				if (!this.admissionList.some(item => item.id === 1)) {
					this.admissionList.push({
						id: 1,
						people: 1,
						time: '08:00-10:00',
						store: parseFloat(this.Tickets.fullFare)
					})
				} else {
					this.admissionList.some(item => {
						if (item.id === 1) {
							item.people++
							item.store += parseFloat(this.Tickets.fullFare)
						}
					})
				}
			},
			addjianshaoA() {
				this.altList.fullVote =this.altList.fullVote <= 0 ? 0 : this.altList.fullVote - 1;
				this.scoreCentent = this.scoreCentent <= 0 ? 0 : this.scoreCentent - 1;
				this.scoreAdd = this.scoreAdd - parseFloat(this.Tickets.fullFare) <= 0 ? 0 : this.scoreAdd - parseFloat(
					this.Tickets.fullFare);
				this.admissionList.some(item => {
					if (item.id === 1) {
						item.people--
						item.store -= parseFloat(this.Tickets.fullFare)
						if (item.people <= 0) {
							this.admissionList = this.admissionList.filter(item => item.id !== 1);
						}
					}
				})
			},
			timeIndexA(itemA, indexA) {
				this.TimeIndexA = indexA
				this.admissionList.some(item => {
					if (item.id === 1) {
						item.time = itemA
					}
				})

			},

			addzengjiaB() {
				this.altList.halfVote++;
				this.scoreCententB++
				this.scoreAdd += parseFloat(this.Tickets.Discounted)
				if (!this.admissionList.some(item => item.id === 2)) {
					this.admissionList.push({
						id: 2,
						people: 1,
						time: '00:00-08:00',
						store: parseFloat(this.Tickets.Discounted),
					})
				} else {
					this.admissionList.some(item => {
						if (item.id === 2) {
							item.people++
							item.store += parseFloat(this.Tickets.Discounted)
						}
					})
				}
			},
			addjianshaoB() {
				this.altList.halfVote =this.altList.halfVote <= 0 ? 0 : this.altList.halfVote - 1;
				this.scoreCententB = this.scoreCententB <= 0 ? 0 : this.scoreCententB - 1;
				this.scoreAdd = this.scoreAdd - parseFloat(this.Tickets.Discounted) <= 0 ? 0 : this.scoreAdd - parseFloat(
					this.Tickets.Discounted);
				this.admissionList.some(item => {
					if (item.id === 2) {
						item.people--
						item.store -= parseFloat(this.Tickets.Discounted)
						if (item.people <= 0) {
							this.admissionList = this.admissionList.filter(item => item.id !== 2);
						}
					}
				})
			},
			timeIndexB(itemB, indexB) {
				this.TimeIndexB = indexB
				this.admissionList.some(item => {
					if (item.id === 2) {
						item.time = itemB
					}
				})

			},
			addzengjiaC() {
				this.altList.freeVote++;
				this.scoreCententC++
				this.scoreAdd += 0
				if (!this.admissionList.some(item => item.id === 3)) {
					this.admissionList.push({
						id: 3,
						people: 1,
						time: '00:00-08:00',
						store: 0,
					})
				} else {
					this.admissionList.some(item => {
						if (item.id === 3) {
							item.people++
							item.store += 0
						}
					})
				}
			},
			addjianshaoC() {
				this.altList.freeVote =this.altList.freeVote <= 0 ? 0 : this.altList.freeVote - 1;
				this.scoreCententC = this.scoreCententC <= 0 ? 0 : this.scoreCententC - 1;
				this.scoreAdd = this.scoreAdd - 0 <= 0 ? 0 : this.scoreAdd - 0;
				this.admissionList.some(item => {
					if (item.id === 3) {
						item.people--
						item.store -= 0
						if (item.people <= 0) {
							this.admissionList = this.admissionList.filter(item => item.id !== 3);
						}
					}
				})
			},
			timeIndexC(itemC, indexC) {
				this.TimeIndexC = indexC
				this.altList.time = itemC
				this.admissionList.some(item => {
					if (item.id === 3) {
						item.time = itemC
					}
				})

			},
			onMarkerTap() {
				let plugin = requirePlugin('routePlan');
				let key = 'NOBBZ-P7GKC-YCO22-A3KEL-TQGJQ-JGFCZ'; //使用在腾讯位置服务申请的key
				let referer = 'text'; //调用插件的app的名称
				let endPoint = JSON.stringify({ //终点
					'name': this.altList.title,
					'latitude': this.latitude,
					'longitude': this.longitude,
				});
				uni.navigateTo({
					url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
				});
				// console.log(marker.title);
			}
		},
	};
</script>

<style lang="scss">
	.tattole {
		box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(0, 0, 0, 0.1);
	}

	.details {
		// height: 100vh;
		background-color: #f6fbff;
		// overflow: auto;
		position: relative;

		.areaName {
			background-color: #ffffff;
			padding: 20rpx 20rpx 0;

			.play {
				border-bottom: #d5d5d5 1rpx solid;
				border-top: #d5d5d5 1rpx solid;
			}

			.areaNameTatal {
				// padding: 20rpx 0;
				font-size: 32rpx;
				padding-bottom: 20rpx;

				.areaNameText {
					font-size: 24rpx;
					line-height: 48rpx;
					color: #999;


				}
			}

			.areaNameTime {
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 26rpx;
				padding: 20rpx 0;

				.seeDetail {
					font-size: 26rpx;
					color: #4caaf9;
					display: flex;
					flex-direction: column;
				}
			}

			// .famous {
			// 	.seeDetail {}
			// }
		}

		.menuTrue {
			margin: 20rpx 0;
			padding: 20rpx;
			background-color: #ffffff;
			box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(0, 0, 0, 0.1);

			.menuTrueText {
				// height: 50rpx;
				padding: 20rpx 0;
				color: #4caaf9;
				font-size: 26rpx;
				text-align: center;
				background-color: rgb(255, 249, 249);


			}
		}

		.menu {
			white-space: nowrap;

			padding-bottom: 20rpx;



			::-webkit-scrollbar {
				display: none;
			}

			/* 防止换行 */
			.menu-item {
				display: inline-block;
				cursor: pointer;
				font-size: 26rpx;
				line-height: 35rpx;
				padding: 15rpx 25rpx;
				background-color: #fffcfc;
				font-weight: 600;
				margin-right: 20rpx;
			}

			.active {
				background-color: #e6f7ff;
				// color: #ffffff;
			}
		}

		.tabtotle {
			position: relative;
		}

		.tabplay {
			position: fixed;
			width: 100%;
			top: calc(33.4px + env(safe-area-inset-top));
			;
		}

		.tab {
			.active {
				background-color: #c5e1ff;
				color: #ffffff;
				/* 高亮边框颜色 */
			}

			margin-top: 20rpx;
			display: flex;
			justify-content: space-between;
			background-color: #ffffff;
			border-bottom: #999 1rpx solid;

			.navigation {
				width: 50%;
				text-align: center;
				font-size: 26rpx;
				padding: 20rpx 20rpx;
			}
		}

		.predetermine {
			padding: 20rpx 20rpx 120rpx;
			background-color: #ffffff;
			margin-bottom: 60rpx;

			.predetermineTatle {
				// width: 100%;
				font-size: 32rpx;
				padding-bottom: 20rpx;
			}

			.predetermineText {

				word-wrap: break-word;
				/* 当单词过长时自动换行 */
				word-break: break-all;
				/* 在单词内部换行 */
				// text-indent: 2em;
				font-size: 26rpx;
			}
		}

		.bigeminy {
			padding: 20rpx;
			background-color: #ffffff;
			margin-bottom: 20rpx;

			.bigeminyText {
				border-bottom: #d5d5d5 1rpx solid;
				padding-bottom: 20rpx;
				// background-color: #999;
			}

			.play {
				font-size: 32rpx;
			}

			.spot {
				display: flex;
				align-items: center;
				justify-content: space-between;

				.playBorder {
					border-bottom: 1rpx solid #d5d5d5;
				}

				.priceTicket {
					display: flex;
					justify-content: space-between;
					padding: 20rpx;

					.priceText {
						font-size: 26rpx;

						.priceTicketText {
							color: red;
							font-size: 24rpx;
							// padding: 20rpx 0;
						}

						.seeDetail {
							font-size: 24rpx;
							color: #4caaf9;
						}


					}

					.price {
						text-align: right;

						.priceNamber {
							.priceSpanA {
								font-size: 24rpx;
								color: #999;
								position: relative;
								font-size: 24rpx;
								color: #999;
								position: relative;
								margin-right: 10rpx;
							}

							.priceSpanA::after {
								content: '';
								position: absolute;
								bottom: 50%;
								left: 0;
								right: 0;
								border-bottom: 1px solid #999;
								/* 横线样式 */
							}

							.priceSpanB {
								font-size: 32rpx;
								color: #4caaf9;
							}
						}

						.addPrice {
							margin-top: 10rpx;
							display: inline-block;
							background-color: #4caaf9;
							border-radius: 100rpx;
						}

						.Number {
							border: 2rpx #4caaf9 solid;
							background-color: #ffffff;
							font-size: 32rpx;
							padding: 1rpx 7.5rpx;
							color: #4caaf9;
						}

						.addPriceNumber {
							font-size: 26rpx;
							padding: 0 20rpx;
						}


					}
				}

				
			}
		}

		.infoPoput {
			padding: 20rpx;
			background-color: #ffffff;
			height: 500rpx;

			.popup-content {
				// height: 200rpx;
				// background-color: #ffffff;
				font-size: 32rpx;
				position: relative;
				text-align: center;
				border-bottom: #d5d5d5 1rpx solid;
				padding-bottom: 20rpx;

				img {
					position: absolute;
					top: 6rpx;
					right: 0;
					width: 32rpx;
					height: 32rpx;
				}
			}

			.cost {
				font-size: 26rpx;
				padding: 20rpx;
				background-color: #eeeeee;
				margin-top: 20rpx;
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
				line-height: 40 rpx;
			}
		}

		.poputPlay {
			height: auto;
		}

		.buttomNumber {
			position: fixed;
			bottom: 0;
			background-color: #ffffff;
			width: 100%;
			// height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 20rpx 0;

			.add {
				margin: 0 20rpx;
				font-size: 26rpx;
			}

			.amount {
				span {
					font-size: 26rpx;
					text-align: center;
				}
			}

			.look {
				padding: 20rpx 40rpx;
				background-color: #4caaf9;
				border-radius: 5rpx;
			}
		}
		// 时间选择
		.totle {
			display: grid;
			grid-template-columns: repeat(4, 1fr);
			grid-template-rows: repeat(2, 1fr);
			grid-template-areas:
				'a b c d'
				'e f g h';
			gap: 10rpx;
			padding: 20rpx;
			border-bottom: 1rpx solid #d5d5d5;
		
			.totleTime {
				padding: 5rpx;
				font-size: 24rpx;
				border: #d5d5d5 1rpx solid;
				text-align: center;
				border-radius: 5rpx;
			}
		
			.active {
				border: #4caaf9 1rpx solid;
				color: #4caaf9;
				/* 高亮边框颜色 */
			}
		
			:nth-child(1) {
				grid-area: a;
				pointer-events: none;
				border: #d5d5d5 1rpx solid;
				color: #d5d5d5;
			}
		
			:nth-child(2) {
				grid-area: b;
			}
		
			:nth-child(3) {
				grid-area: c;
			}
		
			:nth-child(4) {
				grid-area: d;
			}
		
			:nth-child(5) {
				grid-area: e;
			}
		
			:nth-child(6) {
				grid-area: f;
				pointer-events: none;
				border: #d5d5d5 1rpx solid;
				color: #d5d5d5;
			}
		}
	}
</style>