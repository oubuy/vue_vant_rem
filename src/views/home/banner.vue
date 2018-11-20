<template>
    <div class="banner">
      <van-swipe :autoplay="2000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img class="img" :src="image" />
            </van-swipe-item>

       </van-swipe>
    </div>
</template>

<script>
import one from '@/assets/image/Lighthouse.jpg'
import two from '../../assets/image/Penguins.jpg'
// import three from "../../assets/image/timg.jpg"
import four from "../../assets/image/Tulips.jpg"
export default {
  data() {
    return {
      images: [
       one,two,four
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.banner{
    height: 190px;

}
.van-swipe{
   height: 100%;
   .img{
       width:100%;
       height: 100%;
   }
}
.van-search{
background: '' !important;
}
</style>


