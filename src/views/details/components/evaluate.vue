<template>
    <div class="evaluate">
        <div class="infoWrapper">
            <div class="info">
                <div class="lable">客户评论
                    <span class="numm">(41554条)</span>
                </div>
                <div class="desc">
                    <span class="name">查看详情</span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <ul class="search">
                <!-- <li class="search-item is-active">全部</li>
                <li class="search-item">确认速度快</li>
                <li class="search-item">打扫很干净</li>
                 <li class="search-item">沟通顺畅</li>
                <li class="search-item">态度好</li> -->
                 <li class="search-item" @click="handleSearch" v-for="(item,index) in data" :key="index">{{item}}</li></li>
            </ul>
        </div>
        <div class="listsWrapper">
            <ul class="lists">
                <li class="lists-item">
                  <div class="label">
                      <div class="name">吴***达</div>
                      <div class="ratelist">
                          <p class="tip">评分</p>
                          <van-rate v-model="value" :size="15" :count="5" />
                      </div>
                  </div>
                 <div class="desc">电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好</div>
                </li>
                <li class="lists-item">
                  <div class="label">
                      <div class="name">吴***达</div>
                      <div class="ratelist">
                          <p class="tip">评分</p>
                          <van-rate v-model="value" :size="15" :count="5" />
                      </div>
                  </div>
                 <div class="desc">电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好电话玲响的很快，打扫非常干净，态度也很好</div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
      data(){
          return{
              value:3,
              data:['全部','确认速度快','打扫很干净','沟通顺畅','态度好'],
              currentSelected:null
          }
      },
      methods:{
          handleSearch(e){
        //    console.log(e,888)
           this.handleCancel();
           this.currentSelected=e.path[0].style;
        //    console.log(this.currentSelected,99999)
           e.path[0].style.background="#64cdff"
          },
          handleCancel(){
            if(this.currentSelected!=null){
              this.currentSelected.background="#fff"
            }
          }
      }
}
</script>

<style lang="scss" scoped src="./style.scss">

</style>


