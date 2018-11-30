// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import store from './store';//vuex

// 引入vant UI插件
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

// iview等等UI插件也是可以在这里全局引入


import './assets/css/index.scss';//引入重置样式

import './assets/js/screen-adaptation';//px转为rem

import './assets/fonts/fonts/iconfont.css'//引入字体图标

 
Vue.use(Vant);

Vue.config.productionTip = false 



  // // 手机端适配rem
  // const baseSize = 32;
  // function setRem() {
  //   const scale = document.documentElement.clientWidth / 750;
  //   document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
  // }
  // setRem();
  // window.onresize = function () {
  //   setRem()
  // }


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


// // 设置请求拦截
// axios.interceptors.request.use(function(config){
// 	let url=config.url;
//     if(url==='/reset/login'){
// 		// 缓存是空
// 		localStorage.setItem('token','');
// 		// 设置到头部去
// 		config.headers.Authorization='';
// 	}else{
// 		config.headers.Authorization=localStorage.getItem('token');
// 	}
// 	return	 config;
// },function(err){
//   return Promise.reject(err);
// });

// // 设置响应拦截

// axios.interceptors.response.use(function(res){
//   if(res.data.data===401){
//     alert(res.data.msg)
//   }
//   if(res.data.data===500){
// 	alert(res.data.msg)
//   }
//   return res;
// },function(err){
//   return err;
// })
