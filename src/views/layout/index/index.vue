<template>
  <div class="index">
    <div class="body">
      <router-view></router-view>
    </div>
    <v-menu></v-menu>

  </div>
</template>


<script>
import vMenu from '@/views/menu/menu.vue'

export default {
  data(){
    return{

    }
  },
  components:{
    vMenu
  }
  
}
</script>
