<template>
  <div>
  <van-row gutter="20">
  <van-col span="8">
   
  <van-button type="primary">主要按钮</van-button>
  </van-col>
  <van-col span="8" class="buttondddd">span: 8</van-col>
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

