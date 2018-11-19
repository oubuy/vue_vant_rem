<template>
    <div class="entry">
        <!-- 头部 -->
        <div class="searchWrapper">
            <div class="selectbox">
                <router-link :to="{path:'/address'}" tag="div">
                     首页
                </router-link>
            </div>
            <div class="inputbox">
                <van-search
                    v-model="searchValue"
                    placeholder="请输入搜索关键词"
                    show-action
                    @search="onSearch"
                    >
                    <div slot="action" @click="onSearch">搜索</div>
                </van-search>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            searchValue:'',
        }
    },
    methods:{
        onSearch(){
            console.log('搜索')
        },
        onSearch(data){
            console.log(data,'回车键')
        }
    }
}
</script>
<style lang="scss" scoped src="./style.scss"></style>

