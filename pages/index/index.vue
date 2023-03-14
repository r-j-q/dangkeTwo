<!-- 商品列表 -->
<template>
	<view class="minHeightColor bannerColor">
		  <view class="minHeightColorleft">
		  	<u-icon name="list" color="#000" size="30"></u-icon>
		  </view>
		  <view class="minHeightColorRow">
		  	   <view class="boleft" @click="handleDirectSeeding(item)" :class="counts==item.id ?'actives':''" v-for="(item,index) in listTabs" :key="index">
		  	   	  {{item.name}}
		  	   </view>
		  </view>
		  <view class="minHeightColorRow">
		  	   <view class="boleft" @click="handleTimeDirectSeeding(item)" :class="countsTimes==item.id ?'activeTime':''" v-for="(item,index) in listTabTimes" :key="index">
		  	   	  {{item.name}}
		  	   </view>
		  </view>
		<view class="directSeedingCoutent">
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
				</view>
			 	<view class="tvip0 tvip02">
					<view class="tvipavatar">
						<image class="tvipstyle" :src="vip2" mode=""></image>
						<image src="https://cdn.uviewui.com/uview/album/5.jpg" mode=""></image>
					</view>
				</view>
			 	<view class="tvip0 tvip03" >
					<view class="tvipavatar">
						<image class="tvipstyle" :src="vip3" mode=""></image>
						<image src="https://cdn.uviewui.com/uview/album/5.jpg" mode=""></image>
					</view>
					</view>
			 </view>
		</view>
		 
		  
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
 
	import goodsListVue from '../../components/juzheng/goodsList.vue';
	import noData from '../../components/juzheng/noData.vue';
  import {plouto_url} from "@/shopro/utils/config.js"
	let systemInfo = uni.getSystemInfoSync();
	export default {
		components: {
			goodsListVue,
			noData
		},
		data() {
			return {
				vip2: require('../../static/images/bo/v2.png'),
				vip1: require('../../static/images/bo/v1.png'),
				vip3: require('../../static/images/bo/v3.png'),
				ploutoUrl:'',
				erweima: require('../../static/images/mine/erweima.png'),
				 counts:0,
				listTabs: [{
					name: '直播排名',
					id: 0
				}, {
					name: "玩法介绍",
					id: 1
				}],
				countsTimes:0,
				listTabTimes:[{
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
			...mapGetters(['initShop', 'homeTemplate', 'hasTemplate', 'isLogin', 'userInfo' ]),
		 
			 
		},
		onShow() {
			this.ploutoUrl = plouto_url
		console.log("B22222222222ASE_URL",plouto_url)	
		},
		methods: {
			handleDirectSeeding(item){
				this.counts = item.id;
			},
			handleTimeDirectSeeding(item){
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
                   if(res.code==1){
					   uni.showToast({
					   	title:res.msg
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
				this.getTeams()
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
	 .minHeightColor{
		 min-height: 100vh;
	 }
	 .minHeightColorleft{
		 padding: 40upx;
	 }
	 .minHeightColorRow{
		 display: flex;
		 flex-direction: row;
		 align-items: center;
		 justify-content: center;
		 padding: 20upx 0 40upx 0;
		
	 }
		 
	 .boleft{
		font-size: 30upx;
		margin-right: 28upx;
		color: #767E8B;
	 }
	 .activeTime{
		 background-color: #fff;
		 color: #1A2340;
		 font-weight: bold;
		 padding: 8upx;
		 border-radius: 10upx;
	 }
		 
	 .actives{
		 font-size: 40upx;
		 font-weight: 700;
		 color: #1A2340;
	 }
	 .directSeedingCoutent{
		 width: 90%;
		 margin: 0 auto;
		 background-color: #fff;
		 border-radius: 20upx;
	 }
	 .tvip{
		 width: 94%;
		 margin: 0 auto;
		 margin-top:140upx;
	 }
	 .tvip0{ 
		 width: 100%;
		 width: 282upx;
		 height: 200upx;
		 position: relative;
		 border-radius: 10upx;
	 }
	.tvip0:nth-child(even){
		// background-color: yellow;
		margin: 0 20upx;
		margin-top: -80upx;
	}
	.tvipavatar{
		    position: absolute;
		    top: -50upx;
		    left: 0;
		    right: 0;
		    z-index: 99;
		    display: flex;
		    align-items: center;
		    flex-direction: row;
		    justify-content: center;
	}
	.tvipavatar image{
		width: 100upx;
		height: 100upx;
		border-radius: 50upx;
	}
	.tvip01{
		background-image: url(../../static/images/bo/v_2.png);
		background-size: contain;
		background-repeat: no-repeat;
		    // width: 100%;
		    // height: 100%;
	}
	.tvip02{
		background-image: url(../../static/images/bo/v_1.png);
		background-size: contain;
		background-repeat: no-repeat;
	}
	.tvip03{
		background-image: url(../../static/images/bo/v_3.png);
		background-size: contain;
		background-repeat: no-repeat;
	}
	.tvipavatar .tvipstyle{
		position: absolute;
		    width: 52upx;
		    height: 52upx;
		    z-index: 100;
		    top: -18upx;
		    right: 24upx;
	}
	.mtop{
		margin-top: 60upx;
	}
</style>
