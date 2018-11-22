<template>
    <div>
      <ul class="lists">
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
      </ul>
         
    </div>
</template>

<script>
export default {
    data(){
        return{
       
        }
    },
    props:['data']

}
</script>
<style lang="scss" src="./style.scss" scoped>

</style>


