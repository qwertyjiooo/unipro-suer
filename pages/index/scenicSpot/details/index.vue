<template>
	<view class="details">
		<view class="Tickets">
			<img class="TicketsImage" src="../../../../static/oneF.png" alt="" />
		</view>
		<view class="detailsTotle">
			<view class="detailsTotleTeal">
				<view class="detailsTotleTealText">
					门票特惠
				</view>
				<view class="Package">
					特惠套票
				</view>
				<view class="label">
					<span>特惠套餐</span>
					<span>优惠</span>
					<span>通票</span>
					<span>畅玩</span>
				</view>
				<view class="score">
					<view class="scoreNumber">
						4.3
						<span>分</span>
					</view>
					<view class="scorexianshi">
						1万+人已购买
					</view>
				</view>
			</view>
		</view>
		<view class="recommend">
			<!-- 推荐理由 -->
			<view class="reason">
				<img src="../../../../static/label.png" alt="" />
				<view class="recommendText play">
					推荐理由
				</view>
			</view>
			<view class="Package play" style="margin-top: 20rpx;">
				特惠套餐
			</view>
		</view>
		<!-- 顶部导航 -->
		<view class="menuTrue tattole">
			<scroll-view class="menu" scroll-x="true">
				<view v-for="(item, index) in monthDayWeekdayUntilNextMonth" :key="index" class="menu-item"
					:class="{'active': activeTab === index}" @click="activeTab = index">
					<view class="" v-if="index===0">今天</view>
					<view class="" v-if="index===1">明天</view>
					<view class="" v-if="index===2">后天</view>
					<view class="" v-if="index>2">{{item.weekday}}</view>
					<view class="">{{item.month}}-{{item.day}}</view>
					<view class="" style="color: #4caaf9;">￥ 57</view>
				</view>
			</scroll-view>
			<view class="menuTrueText" v-show="activeTab>2">
				你选择了{{activeTab}}天后出行
			</view>
		</view>
		<view class="bigeminy tattole">
			<view class="bigeminyText play">
				门票
			</view>
			<view class="spot">
				<view class="spotText play">
					南岳大庙
					<view class="label">
						<span>特惠套餐</span>
						<span>优惠</span>
						<span>通票</span>
						<span>畅玩</span>
					</view>
					<view class="seeDetail" @click="clickInfo">
						查看详情 >
					</view>

				</view>
				<view class="predetermine" v-if="activeTab!==0">
					<view class="predetermineScore play">
						￥ 57
					</view>
					<button class="predetermineButton play" type="primary" @click="clickInfoA">立即预定</button>
				</view>
				<view class="predetermine" v-if="activeTab===0">
					<view class="predetermineScore play" style="color: #999;">
						已售馨
					</view>
					<button class="predetermineButton play" type="primary" disabled="true">立即预定</button>
				</view>
			</view>
			<!-- <view class="Triplet">
				南岳大庙
			</view> -->

		</view>
		<view class="predetermine tattole" id='section1'>
			<view class="predetermineTatle">
				预定须知
			</view>
			<view class="predetermineText">
				1，1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
			</view>
			<view class="predetermineText">
				1，1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
			</view>
			<view class="predetermineText">
				1，1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
			</view>
			<view class="predetermineText">
				1，1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
			</view>
			<view class="predetermineText">
				1，1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
			</view>
		</view>
		<view class="predetermine tattole" id='section2'>
			<view class="predetermineTatle">
				预定须知
			</view>
			<view class="predetermineText information">
				1，111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
			</view>
			<view class="predetermineText information">
				1，1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
			</view>
			<view class="predetermineText information">
				1，1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
			</view>
			<view class="predetermineText information">
				1，1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
			</view>
			<view class="predetermineText information">
				1，1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
			</view>
		</view>
		<uni-popup ref="popup" type="bottom">
			<!-- 弹出框的内容 -->
			<view class="infoPoput">
				<view class="popup-content">
					南岳大庙
					<img src="../../../../static/xxx.png" alt="" @click="closePopup" />
				</view>
				<view class="cost">
					费用明细
				</view>
				<view class="costDetails">
					南岳大庙：50元【当天一次有效】水帘洞：30元【两天一次有效】 保险（A）：4元 保险（B）：3元
				</view>
			</view>

		</uni-popup>
		<uni-popup ref="popupA" type="bottom">
			<!-- 弹出框的内容 -->
			<view class="infoPoput poputPlay">
				<view class="popup-content">
					预定提醒
					<img src="../../../../static/xxx.png" alt="" @click="closePopupA" />
				</view>
				<view class="cost">
					门票一经使用，不退不换，请在有效期内使用，建议合理安排行程。祝您旅途愉快！
				</view>
				<view class="buttonPrimary">
					<button style="color: #999;" @click="closePopupA">不同意</button>
					<button style="color: #ffffff;background-color: #4caaf9;" @click="closePopupA">同意</button>
				</view>

			</view>

		</uni-popup>
	</view>
</template>

<script>
	import {
		defaultPersonList
	} from './data.js';

	export default {
		data() {
			return {
				defaultPersonList: defaultPersonList,
				currentTab: 'home',
				monthDayWeekdayUntilNextMonth: [],
				activeTab: 0,
				showPopup: false, // 控制弹出框显示与隐藏
				position: 'center'
			};
		},
		created() {
			this.getMonthDayWeekdayUntilNextMonth();
		},
		methods: {
			clickInfo() {
				this.$refs.popup.open('bottom')
			},
			closePopup() {
				this.$refs.popup.close();
			},
			clickInfoA() {
				this.$refs.popupA.open('center')
			},
			closePopupA() {
				this.$refs.popupA.close();
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
				console.log('this.monthDayWeekdayUntilNextMonth', this.monthDayWeekdayUntilNextMonth);
			},
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

		.Tickets {
			height: 400rpx;

			.TicketsImage {
				object-fit: cover;
				width: 100%;
				height: 100%;
			}
		}

		.detailsTotle {
			padding: 20rpx 20rpx;
			background-color: #ffffff;
			box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(0, 0, 0, 0.1);

			.detailsTotleTeal {
				.detailsTotleTealText {
					font-size: 32rpx;
					line-height: 64rpx;
				}

				.Package {
					font-size: 28rpx;
					color: #999;
				}

				.label {
					color: rgb(241, 102, 83);
					border-bottom: #d5d5d5 1rpx solid;
					padding: 20rpx 0;

					span {
						font-size: 26rpx;
						background-color: #feefed;
						line-height: 40rpx;
						padding: 5rpx 10rpx;
						margin-right: 10rpx;
					}

				}

				.score {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.scoreNumber {
						font-size: 36rpx;
						font-weight: bold;
						color: #4caaf9;
					}

					.scorexianshi {
						font-size: 24rpx;
						color: #999;
					}
				}

				// .detailsTotleTealU{
				// 	width: 100%;
				// 	border: bottom 1rpx solid #999;
				// }

			}

		}

		.recommend {
			margin-top: 20rpx;
			padding: 20rpx 20rpx;
			background-color: #ffffff;
			box-shadow: 0rpx 0rpx 20rpx 0rpx rgba(0, 0, 0, 0.1);

			.play {
				// margin-top: 20rpx;
				background: linear-gradient(to bottom, #c5e1ff, #01a2ff);
				-webkit-background-clip: text;
				color: transparent;
			}

			.reason {
				display: flex;
				background-color: rgb(255, 249, 249);
				padding: 20rpx 20rpx;

				img {
					width: 40rpx;
					height: 40rpx;
				}

				.recommendText {
					font-size: 32rpx;
				}
			}

			.Package {
				font-size: 26rpx;
			}
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
			padding: 20rpx 20rpx;
			background-color: #ffffff;
			margin-bottom: 20rpx;

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
				text-indent: 2em;
				font-size: 26rpx;
			}

			.information {
				font-size: 20rpx;
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

				.spotText {
					.label {
						padding: 20rpx 0;

						span {
							font-size: 24rpx;
							line-height: 40rpx;
							margin-right: 10rpx;
						}
					}

					.seeDetail {
						color: #4caaf9;
						font-size: 24rpx;
					}
				}

				.predetermine {
					text-align: center;

					.predetermineScore {
						line-height: 64rpx;
						color: #4caaf9;
					}

					.predetermineButton {
						background-color: #4caaf9;
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
				    button{
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
		.poputPlay{
			height: auto;
		}

	}
</style>