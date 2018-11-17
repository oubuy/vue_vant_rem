import * as types from '../types.js';

const state={//定义数据
    userInfo:{
        testId:'',
        testName:''
    }

};

const getters={//计算最新值(外界页面获取的值是最新值)
    userInfo:state=>{
        return state.userInfo
    }

};

const actions={//方法改变值（其他页面都是通过改变这个actions里面的对应的方法去改变值）
    changeParmas({commit,state},userParams){//changeParmas外界页面通过触发这个方法去改变vuex存储的值
      localStorage.setItem('routerParams',userParams);//设置到缓存中，是为防止F5刷新清楚数据
      commit(types.RUTER_PARAMS,userParams);
    }

};

const mutations={
    [types.RUTER_PARAMS](state,userParams){
        if(userParams){
            state.userInfo=userParams;
        }else{
            state.userInfo=localStorage.getItem('routerParams')
            localStorage.removeItem('routerParams')
        }
    }
};


// 暴露出去
export default{
    state,
    getters,
    actions,
    mutations
}