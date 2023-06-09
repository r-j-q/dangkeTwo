// 路由
import {
	RouterMount,
	createRouter
} from './uni-simple-router.js'
import routingIntercept from '@/utils/permission.js'
import store from '@/shopro/store'

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	applet: {
		animationDuration: 0 //默认 300ms 
	},
	routerErrorEach: ({
		type,
		msg
	}) => {
		switch (type) {
			case 3: // APP退出应用
				// #ifdef APP-PLUS
				router.$lockStatus = false;
				uni.showModal({
					title: '提示',
					content: '您确定要退出应用吗？',
					success: function(res) {
						if (res.confirm) {
							plus.runtime.quit();
						}
					}
				});
				// #endif
				break;
			case 2:
			case 0:
				router.$lockStatus = false;
				break;
			default:
				break;
		}

	},
	// 通配符，非定义页面，跳转404
	routes: [...ROUTES,
		{
			path: '*',
			redirect: (to) => {
				return {
					name: '404'
				}
			}
		},
	]
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

	let token = uni.getStorageSync('token');
	console.log(to)
	console.log(from)
	console.log('token--------------------',token)
	console.log('to.fullPath--------------------',to.fullPath)
	console.log('from.fullPath--------------------',from.fullPath)
		// if(from.fullPath=='/pages/login/login'  && token){
		// 	next('/pages/index/index')
		// }  
		
		
		
		
	 if(to.meta.tokenUser&& !token){ 

		 next('/pages/login/login')  
		return	   
	 } 

	if (to.meta && to.meta.auth && !store.getters.isLogin) {
		store.dispatch('showAuthModal');
		next("false");
	} else if (store.getters.initRecharge.enable !== '1' && to.path === '/pages/user/wallet/top-up') {
		// 充值入口控制
		next(false);
	} else {
		next()
	}
});

export {
	router,
	RouterMount
}
