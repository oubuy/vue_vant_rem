<template>
    <div class="details">
        <div class="imgWrapper">
            <img class="img" :src="image" alt="">
            <p class="tips">深圳高级保姆，高级家教，好几工程师深圳高级保姆，高级家教，好几工程师</p>
        </div>
        <div class="timeWrapper">
            <div class="price">￥
                <span class="num">88</span>/小时
            </div>
            <div class="label">服务时间</div>
            <div class="times">2018-01-00</div>
        </div>
        <div class="infoWrapper">
            <div>
                <img class="img" :src="image" alt="">
            </div>
            <div class="info">
                <div class="label">
                    <span class="name">不二</span>
                    <span class="total">成交:36件</span>
                </div>
                <div class="address">
                    <i class="iconfont fa">&#xe651;</i>深圳市龙华区留仙大道彩悦大夏
                </div>
                <div class="tel">
                    <i class="iconfont">&#xe653;</i>
                </div>
            </div>
        </div>
        <!-- 评论区 -->
        <div class="evaluateWrapper">
           <v-evalute></v-evalute>
        </div>
        <div class="serviceDetails">
            <v-service></v-service>
        </div>
    </div>
</template>
<script>
import one from '@/assets/image/Lighthouse.jpg'
import vEvalute from './components/evaluate.vue'
import vService from './service-detail/serviceDetail.vue'

export default {
    data(){
        return{
          image:one
        }
    },
    components:{
        vEvalute,
        vService
    }
}
</script>

<style lang="scss" scoped src="./style.scss"></style>

