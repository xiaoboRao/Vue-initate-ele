<template>
  <div >
    <v-header></v-header>
    <div class="table">
        <div class="table-item"><router-link to="/goods">商品</router-link></div>
        <div class="table-item"><router-link to="/ratings">评论</router-link></div>
        <div class="table-item"><router-link to="/seller">商家</router-link></div>
    </div>
     <router-view></router-view>
  </div>
</template>

<script>
  import head from './components/header/header.vue';
export default {
  components:{
     "v-header": head,
  }
}
</script>

<style>
  .table{
    width: 100%;
    display: flex;
    height: 40px;
    /*//line-height表示将里面的内容显示在正中央*/
    line-height: 40px;
  }
  .table .table-item{
    flex: 1;
    /*//字体居中*/
    text-align: center;

  }

</style>
