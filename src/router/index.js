// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta:{
        title:'首页'
      },
      component: HelloWorld
    }
  ]
});


// // 注册全局钩子用来拦截导航
// router.beforeEach((to,from,next)=>{
//   LoadingBar.start();
// //   获取token
// let token=localStorage.getItem('token');
// if(to.meta.requiresAuth){
// 	if(token){//有token值不需要登录
//           next();
// 	}else{//没有token值需要登录
// 		next({
// 			path:'/login',
// 			query:{
// 				redirect:to.fullPath
// 			}
// 		})
// 	}

// }else{
// 	next();//不需要登录
// }
// });

// router.afterEach((to,from)=>{
// 	LoadingBar.finish();
// })

// 登录前判断或者token
router.beforeEach((to,from,next)=>{
   if(to.meta.title){
     document.title=to.meta.title;
   }
   next();
});

export default router;
