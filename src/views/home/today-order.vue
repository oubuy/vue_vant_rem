<template>
    <div class="todayOrder">
      <h6 class="title">今日订单</h6>
      <orderListItem :data="list"></orderListItem>
    </div>
</template>

<script>
import orderListItem from '@/views/components/order-list-item'
import one from "@/assets/image/Lighthouse.jpg";
import two from "@/assets/image/Penguins.jpg";
import three from "@/assets/image/Koala.jpg";
import four from "@/assets/image/Tulips.jpg";

export default {
    data(){
     return{
            list: [
    {
      imgSrc: one,
      name: '发大水佛啊哈搜弄发大水佛啊哈搜弄发大水佛啊哈搜弄发大水佛啊哈搜弄',
      time: '2018-06-45',
      duration: '2个小时',
      address: '七星广场七星广场七星广场七星广场七星广场七星广场',
      price: '50',
      unit: '起'
    },
    {
      imgSrc: two,
      name: '发大水佛啊哈搜弄发大水佛啊哈搜弄发大水佛啊哈搜弄发大水佛啊哈搜弄',
      time: '2018-06-45',
      duration: '2个小时',
      address: '七星广场七星广场七星广场七星广场七星广场七星广场',
      price: '50',
      unit: '起'
    },
    {
      imgSrc: three,
      name: '发大水佛啊哈搜弄发大水佛啊哈搜弄发大水佛啊哈搜弄发大水佛啊哈搜弄',
      time: '2018-06-45',
      duration: '2个小时',
      address: '七星广场七星广场七星广场七星广场七星广场七星广场',
      price: '50',
      unit: '起'
    },
    {
      imgSrc: four,
      name: '发大水佛啊哈搜弄发大水佛啊哈搜弄发大水佛啊哈搜弄发大水佛啊哈搜弄',
      time: '2018-06-45',
      duration: '2个小时',
      address: '七星广场七星广场七星广场七星广场七星广场七星广场',
      price: '50',
      unit: '起'
    },
    {
      imgSrc: one,
      name: '发大水佛啊哈搜弄发大水佛啊哈搜弄发大水佛啊哈搜弄发大水佛啊哈搜弄',
      time: '2018-06-45',
      duration: '2个小时',
      address: '七星广场七星广场七星广场七星广场七星广场七星广场',
      price: '50',
      unit: '起'
    },
    {
      imgSrc: two,
      name: '发大水佛啊哈搜弄发大水佛啊哈搜弄发大水佛啊哈搜弄发大水佛啊哈搜弄',
      time: '2018-06-45',
      duration: '2个小时',
      address: '七星广场七星广场七星广场七星广场七星广场七星广场',
      price: '50',
      unit: '起'
    },
    {
      imgSrc: three,
      name: '发大水佛啊哈搜弄发大水佛啊哈搜弄发大水佛啊哈搜弄发大水佛啊哈搜弄',
      time: '2018-06-45',
      duration: '2个小时',
      address: '七星广场七星广场七星广场七星广场七星广场七星广场',
      price: '50',
      unit: '起'
    }
  ]
     }
    },
    components:{
        orderListItem
    }
}
</script>
<style lang="scss" scoped>
.todayOrder{
    margin-top: 14px;
   .title{
       font-size: 16px;
       color: #333b46;
       font-weight: 500;
       background: #fff;
       padding:14px 16px;
       border-bottom: 0.6px solid #ddd;
       text-align: left;
   } 
}
</style>


