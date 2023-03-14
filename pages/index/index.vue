<!-- 商品列表 -->
<template>
	<view class="minHeightColor bannerColor">
		<view class="minHeightColorleft" @click="showUserInfo">
			<u-icon name="list" color="#000" size="30"></u-icon>
		</view>
		<view class="minHeightColorRow">
			<view class="boleft" @click="handleDirectSeeding(item)" :class="counts==item.id ?'actives':''"
				v-for="(item,index) in listTabs" :key="index">
				{{item.name}}
			</view>
		</view>
		<view class="minHeightColorRow" v-if="counts==0">
			<view class="boleft" @click="handleTimeDirectSeeding(item)" :class="countsTimes==item.id ?'activeTime':''"
				v-for="(item,index) in listTabTimes" :key="index">
				{{item.name}}
			</view>
		</view>
		<view class="directSeedingCoutent" v-if="counts==0">
			<view class="f12 tc p_t_b_20">说明：每个自然月，按照每天累计进行展示</view>
			<view class="tvip disRow jspacearound">
				<view class="tvip0 tvip01">
					<view class="tvipavatar">
						<image class="tvipstyle" :src="vip1" mode=""></image>
						<image src="https://cdn.uviewui.com/uview/album/5.jpg" mode=""></image>
					</view>
					<view class="f12 mtop tc">
						婷婷正在直播
					</view>
					<view class="disRow jspacearound f12 m_to_30">
						<view class=""> 总直播时长</view>
						<view class=""> 170h</view>
					</view>
				</view>
				<view class="tvip0 tvip02">
					<view class="tvipavatar">
						<image class="tvipstyle" :src="vip2" mode=""></image>
						<image src="https://cdn.uviewui.com/uview/album/5.jpg" mode=""></image>
					</view>
					<view class="f12 mtop tc">
						婷婷正在直播
					</view>
					<view class="disRow jspacearound f12 m_to_30">
						<view class=""> 总直播时长</view>
						<view class=""> 170h</view>
					</view>
				</view>
				<view class="tvip0 tvip03">
					<view class="tvipavatar">
						<image class="tvipstyle" :src="vip3" mode=""></image>
						<image src="https://cdn.uviewui.com/uview/album/5.jpg" mode=""></image>
					</view>
					<view class="f12 mtop tc">
						婷婷正在直播
					</view>
					<view class="disRow jspacearound f12 m_to_30">
						<view class=""> 总直播时长</view>
						<view class=""> 170h</view>
					</view>
				</view>
			</view>
			<view class="disRow jspacearound backgroundf2">
				<view class=""> 排名</view>
				<view class=""> TOP达人</view>
				<view class=""> 总直播时长</view>
			</view>
			<view class="disRow jspacearound backgroundf3">
				<view class=""> 2</view>
				<view class="disRow">
					<image class="rentou" :src="erweima" mode=""></image>
					<view class="">TOP达人 </view>
				</view>
				<view class=""> 1h</view>
			</view>
			<view class="disRow jspacearound backgroundf3">
				<view class=""> 3</view>
				<view class="disRow">
					<image class="rentou" :src="erweima" mode=""></image>
					<view class="">TOP达人 </view>
				</view>
				<view class=""> 1h</view>
			</view>
			<view class="disRow jspacearound backgroundf3">
				<view class=""> 4</view>
				<view class="disRow">
					<image class="rentou" :src="erweima" mode=""></image>
					<view class="">TOP达人 </view>
				</view>
				<view class=""> 1h</view>
			</view>
		</view>
		<view class="" v-if="counts==1">


			<view class="rightContent">
				<u-search placeholder="搜索商品" shape="square" height="100" @custom="bandleSearch" :showAction="true"
					:animation="true" :clearabled="true" @search="bandleSearch" v-model="keyword"></u-search>
			</view>
			<view class="rightContent">
				<view class="disRowol jspacebetween margin_bottom_20">
					<view class="listLeft">
						<image src="../../static/images/mine/erweima.png" mode=""></image>
					</view>
					<view class="listRight">
						<view class="colorc1 disRow jspacebetween">
							<view class="colorc22 el1">背景背景背景背景背景 </view>
							<view class="colorc2">进入 </view>
						</view>
						<view class="colorc">背景背景背景背景背景 </view>
						<view class="colorc">背景 | 背景背 | 景背景景 </view>
					</view>

				</view>
				<view class="disRowol jspacebetween margin_bottom_20">
					<view class="listLeft">
						<image src="../../static/images/mine/erweima.png" mode=""></image>
					</view>
					<view class="listRight">
						<view class="colorc1 disRow jspacebetween">
							<view class="colorc22 el1">背景背景背景背景背景 </view>
							<view class="colorc2">进入 </view>
						</view>
						<view class="colorc">背景背景背景背景背景 </view>
						<view class="colorc">背景 | 背景背 | 景背景景 </view>
					</view>
				
				</view>
			</view>
		</view>
		
			<ExDrawer :showLeftIcon="false" :userInfoShow="userInfoShow"/>
	</view>
</template>

<script>
	// missionHall.task
	import {
		mapMutations,
		mapActions,
		mapState,
		mapGetters
	} from 'vuex';
	import ExDrawer from '@/components/dk-drawer/ex-drawer.vue';
	import goodsListVue from '../../components/juzheng/goodsList.vue';
	import noData from '../../components/juzheng/noData.vue';
	import {
		plouto_url
	} from "@/shopro/utils/config.js"
	let systemInfo = uni.getSystemInfoSync();
	export default {
		components: {
			goodsListVue,
			noData,
			ExDrawer
		},
		data() {
			return {
				userInfoShow:0,
				keyword: '',
				vip2: require('../../static/images/bo/v2.png'),
				vip1: require('../../static/images/bo/v1.png'),
				vip3: require('../../static/images/bo/v3.png'),
				ploutoUrl: '',
				erweima: require('../../static/images/mine/erweima.png'),
				counts: 0,
				listTabs: [{
					name: '直播排名',
					id: 0
				}, {
					name: "玩法介绍",
					id: 1
				}],
				countsTimes: 0,
				listTabTimes: [{
					name: '月度直播时长top10',
					id: 0
				}, {
					name: "月度直播收益top10",
					id: 1
				}],


			};
		},
		// 触底加载更多
		onReachBottom() {},
		onLoad() {
			this.getTeams()
		},
		computed: {
			...mapGetters(['initShop', 'homeTemplate', 'hasTemplate', 'isLogin', 'userInfo']),


		},
		onShow() {
			this.ploutoUrl = plouto_url
			console.log("B22222222222ASE_URL", plouto_url)
		},
		methods: {
			showUserInfo(){
				this.userInfoShow++
			},
			handleDirectSeeding(item) {
				this.counts = item.id;
			},
			handleTimeDirectSeeding(item) {
				this.countsTimes = item.id;
			},





			// 团队列表 taskDetail
			getTeams() {
				let that = this;
				that.loadStatus = 'loadmore';
				that.$http('missionHall.task', {
					page: 1,
					rows: 10,
					sort: 'asc',
					keyword: this.keyword,
					order: "id"
				}).then(res => {
					if (res.data.data) {
						this.missionList = res.data.data
					}
					console.log("=======missionHall.task======>", res.data.data)
				});
			},
			// 抢单
			getTaskOrder(id) {
				let that = this;
				that.$http('missionHall.taskOrder', {
					id
				}).then(res => {
					if (res.code == 1) {
						uni.showToast({
							title: res.msg
						})
					}
				})
			},
			close() {},
			open() {},
			getCodeGoods() {

				this.getShow = true
				console.log("uuuuuu", this.getShow)
			},
			change() {},
			// 点击收缩时触发
			bandleSearch() {
				// this.keyword = !this.searchText;
				// this.getTeams()
				console.log("----", this.keyword)
			},
			searchTextList() {
				this.searchText = !this.searchText
			},
			tabActive(item) {
				this.current = item.id
			},
			navigatorToLine() {
				uni.navigateTo({
					url: `/pages/dkdetail/rwOrder?type=0`
				})
				console.log("9999")
			},

		}

	};
</script>

<style lang="scss" scoped>
	.minHeightColor {
		min-height: 100vh;
	}

	.minHeightColorleft {
		padding: 40upx;
	}

	.minHeightColorRow {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		padding: 20upx 0 40upx 0;

	}

	.boleft {
		font-size: 30upx;
		margin-right: 28upx;
		color: #767E8B;
	}

	.activeTime {
		background-color: #fff;
		color: #1A2340;
		font-weight: bold;
		padding: 8upx;
		border-radius: 10upx;
	}

	.actives {
		font-size: 40upx;
		font-weight: 700;
		color: #1A2340;
	}

	.directSeedingCoutent {
		width: 90%;
		margin: 0 auto;
		background-color: #fff;
		border-radius: 20upx;
	}

	.tvip {
		width: 94%;
		margin: 0 auto;
		margin-top: 140upx;
	}

	.tvip0 {
		width: 100%;
		width: 282upx;
		height: 200upx;
		position: relative;
		border-radius: 10upx;
	}

	.tvip0:nth-child(even) {
		// background-color: yellow;
		margin: 0 20upx;
		margin-top: -80upx;
	}

	.tvipavatar {
		position: absolute;
		top: -50upx;
		left: 0;
		right: 0;
		// z-index: 99;
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: center;
	}

	.tvipavatar image {
		width: 100upx;
		height: 100upx;
		border-radius: 50upx;
	}

	.tvip01 {
		background-image: url(../../static/images/bo/v_2.png);
		background-size: contain;
		background-repeat: no-repeat;
		// width: 100%;
		// height: 100%;
	}

	.tvip02 {
		background-image: url(../../static/images/bo/v_1.png);
		background-size: contain;
		background-repeat: no-repeat;
	}

	.tvip03 {
		background-image: url(../../static/images/bo/v_3.png);
		background-size: contain;
		background-repeat: no-repeat;
	}

	.tvipavatar .tvipstyle {
		position: absolute;
		width: 52upx;
		height: 52upx;
		// z-index: 100;
		top: -18upx;
		right: 24upx;
	}

	.mtop {
		margin-top: 60upx;
	}

	.m_to_30 {
		margin-top: 40upx;
	}

	.backgroundf2 {
		background-color: #f2f3f8;
		padding: 20upx 0;
		width: 94%;
		margin: 0 auto;
		font-size: 28upx;
		font-weight: 700;
	}

	.backgroundf3 {
		padding: 20upx 0;
		width: 94%;
		margin: 0 auto;
		font-size: 28upx;
		border-bottom: 1px solid #f5f5f5;
	}

	.rentou {
		width: 30upx;
		height: 30upx;
		border-radius: 15upx;
	}

	.rightContent {
		width: 94%;
		margin: 0 auto;
	}

	.listLeft {
		width: 40%;
		height: 160upx;
	}

	.listLeft image {
		width: 100%;
		height: 100%;
	}

	.listRight {
		width: 55%;
	}

	.colorc1 {
		color: #000;
		font-weight: bold;
		font-size: 30upx;
	}

	.colorc {
		color: #999;
		font-size: 24upx;
		margin-top: 20upx;
	}

	.colorc22 {
		width: 70%;
	}

	.colorc2 {
		background-color: #9da8d1;
		color: #fff;
		font-size: 12px;
		padding: 5upx 10px;
		border-radius: 15px;
	}
</style>
