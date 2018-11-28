<template>
    <div class="menu">
        <ul class="list">
           <li class="list-item">
              <router-link tag="div" :to="{path:'/home'}">
                <span class="iconfont icon">&#xe612;</span>
                <p class="label">首页</p>
              </router-link>
           </li>
           <li class="list-item">
               <router-link tag="div" :to="{path:'/classify'}">
                  <span class="iconfont icon">&#xe652;</span>
                  <p class="label">分类</p>
               </router-link>
           </li>
           <li class="list-item">
               <router-link tag="div" to="/mine">
                    <span class="iconfont icon">&#xe615;</span>
                    <p class="label">我的</p>
               </router-link>
           </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
        active: '1'
    };
  },
  mounted(){
      console.log(this.$route,8888888888888888)
  }
};
</script>


<style lang="scss" scoped>
.menu {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background: #fff;
  border-top:0.5px solid #ddd;
  z-index: 1000;
  .list {
    display: flex;
    // justify-content: space-around;
    padding:8px 0;
    .list-item{
      flex:1;
    }
    .icon {
      font-size: 21px;
      color: #999faa;
      display: block;
      width: 21px;
      height: 21px;
      margin: auto;
    }
    .label{
        font-size: 10px;
        color: #626b77;
        margin-top: 5px;
    }
  }
.router-link-exact-active,
   .router-link-active {//router-link有一个active激活样式
        .icon {
          color: #45adff;
        }
        .label {
          color: #45adff;
        }
      }
    
}
</style>

