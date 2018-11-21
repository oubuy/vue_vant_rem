<template>
    <div class="subnav">
        <ul class="nav">
            <li class="nav-item" v-for="(item,index) in navList" :key="index">
                <router-link :to="{path:item.path,query:{id:item.id}}" tag='div'>
                    <img class="icon" :src="item.image" alt="">
                    <p class="label">{{item.name}}</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import one from "@/assets/image/Lighthouse.jpg";
import two from "@/assets/image/Penguins.jpg";
import three from "@/assets/image/Koala.jpg";
import four from "@/assets/image/Tulips.jpg";
export default {
  data() {
    return {
      navList: [
        {
          image: one,
          path: "/serivece",
          name: "超市",
          id: "1"
        },
         {
          image: two,
          path: "/serivece",
          name: "全球购",
          id: "2"
        },
          {
          image: three,
          path: "/serivece",
          name: "服饰",
          id: "3"
        },
         {
          image: four,
          path: "/serivece",
          name: "生鲜",
          id: "4"
        },
          {
          image: one,
          path: "/serivece",
          name: "到家",
          id: "5"
        },
          {
          image: two,
          path: "/serivece",
          name: "手机充值",
          id: "6"
        },
         {
          image: three,
          path: "/serivece",
          name: "领券",
          id: "7"
        },
          {
          image: four,
          path: "/serivece",
          name: "赚钱",
          id: "8"
        },
      ]
    };
  }
};
</script>

<style lang="scss" scoped src="./style.scss"></style>

