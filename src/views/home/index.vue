<template>
    <div class="entry">
        <!-- 头部 -->
        <div class="searchWrapper">
            <div class="selectbox">
                <router-link :to="{path:'/address'}" tag="div">
                    <span class="label">深圳</span>
                    <i class="iconfont">&#xe62d;</i>
                </router-link>
            </div>
            <div class="inputbox">
                <van-search
                    v-model="searchValue"
                    placeholder="请输入搜索关键词"
                    show-action
                    @search="onSearch"
                    style="background:rgba(7, 139, 243, .2)"
                    >
                    <div slot="action" style="color:#fff" @click="onSearch">搜索</div>
                </van-search>
            </div>
        </div>
        <!-- 轮播图 -->
        <v-banner></v-banner>
        <sub-nav></sub-nav>
        <todayOrder></todayOrder>
        <!-- <v-menu></v-menu> -->
    </div>
</template>
<script>
import vBanner from './banner.vue';
import subNav from '@/views/components/subnav';
import todayOrder from './today-order.vue';

// import vMenu from '@/views/menu/menu.vue';



export default {
    data(){
        return{
            searchValue:''
        }
    },
    components:{
        vBanner,
        subNav,
        todayOrder,
        // vMenu

    },
    methods:{
        onSearch(){
            console.log('搜索')
        },
        onSearch(data111){
            console.log(data111,'回车键')
        }
    }
}
</script>
<style lang="scss" scoped src="./style.scss"></style>

