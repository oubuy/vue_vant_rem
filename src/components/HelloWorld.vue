<template>
  <div>
   <van-row>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
      <van-col span="8">span: 8</van-col>
   </van-row>
  </div>
</template>
<script>


export default {
  data() {
    return {
      activeKey: 0
    };
  },
  created(){
    // 1.一种使用方法    2.第二种是使用mapActions...
    // 使用vuex
    let params={
      A:'222',
      B:'3333'
    };
    // 触发方法
    this.$store.dispatch('changeParmas',params)

  },
  methods: {
    handleButton(key) {
      console.log(key, 888);
     
    }
  }
};
</script>
<style scoped>
.buttondddd {
  font-size: 14px;
}
.van-badge-group {
  width: 100%;
}
</style>

