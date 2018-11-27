<template>
    <div class="menu">
        <ul class="list">
           <li class="list-item">
              <router-link tag="div" :to="{path:'/home'}">
                <span></span>
                <p>首页</p>
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
    }
}
</script>


<style lang="scss" scoped>
.menu{
    position: fixed;
    bottom:0;
    right:0;
    left:0;
    z-index:1000;
}
</style>

