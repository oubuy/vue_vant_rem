<template>
    <div>
      <!-- <ul class="lists">
          <li class="lists-item" v-for="(item,index) in data" :key="index"> 
            <router-link class="lists-div" tag="div" :to="{path:'/details'}">
               <div class="imgs">
                   <img :src="item.imgSrc" alt="">
               </div>
               <div class="info">
                   <h6 class="label">{{item.name}}</h6>
                   <p class="desc">服务时间:{{item.time}}</p>
                   <p class="desc">服务时长:{{item.duration}}</p>
                   <p class="desc">服务地点:{{item.address}}</p>
                   <p class="price">￥
                       <span class="total">{{item.price}}</span>
                   </p>
               </div>
            </router-link>
          </li>
      </ul> --> 
      <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
        >
         <ul class="lists">
          <li class="lists-item" v-for="(item,index) in list" :key="index"> 
            <router-link class="lists-div" tag="div" :to="{path:'/details'}">
               <div class="imgs">
                   <img :src="item.imgSrc" alt="">
               </div>
               <div class="info">
                   <h6 class="label">{{item.name}}</h6>
                   <p class="desc">服务时间:{{item.time}}</p>
                   <p class="desc">服务时长:{{item.duration}}</p>
                   <p class="desc">服务地点:{{item.address}}</p>
                   <p class="price">￥
                       <span class="total">{{item.price}}</span>
                   </p>
               </div>
            </router-link>
          </li>
      </ul>
        
    </van-list>
         
    </div>
</template>

<script>
export default {
    data(){
        return{
          list: [],
      loading: false,
      finished: false
        }
    },
    props:['data'],
    mounted(){
        // this.list=this.data;
    },
    methods:{
        onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 2; i++) {
          this.list.push(this.data[i]);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= this.data.length) {
          this.finished = true;
        }
      }, 1000);
    }
    }

}
</script>
<style lang="scss" src="./style.scss" scoped>

</style>


