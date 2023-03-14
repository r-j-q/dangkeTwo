<!-- 商品列表 -->
<template>
	<view class="notice-list">
		 
	</view>
</template>

<script>
	import {
		mapMutations,
		mapActions,
		mapState,
		mapGetters
	} from 'vuex';
 
	import noData from '../../components/juzheng/noData.vue';

	import {
		plouto_url
	} from "@/shopro/utils/config.js"
	let systemInfo = uni.getSystemInfoSync();
	export default {
		components: {
			 
		},
		data() {
			return {
			 

			};
		},
		computed: {
			...mapGetters(['initShop', 'homeTemplate', 'hasTemplate', 'isLogin', 'userInfo']),


		},
		// 触底加载更多
		onReachBottom() {},
		onLoad() {
		 
		},
		onShow() {
		 
		},
		methods: { 

		}

	};
</script>

<style lang="scss">
 .notice-list{
	 
 }
</style>
