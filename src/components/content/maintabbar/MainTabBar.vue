<template>
  <tabbar>
    <tabbar-item path="/home">
      <img src="@/assets/img/tabbar/home.svg" slot="item-icon">
      <img src="@/assets/img/tabbar/home_active.svg" slot="item-icon-active">
      <div slot="item-text">主页</div>
    </tabbar-item>
    <tabbar-item path="/category">
      <img src="@/assets/img/tabbar/category.svg" slot="item-icon">
      <img src="@/assets/img/tabbar/category_active.svg" slot="item-icon-active">
      <div slot="item-text">分类</div>
    </tabbar-item>
    <tabbar-item path="/cart">
      <img src="@/assets/img/tabbar/shopcart.svg" slot="item-icon">
      <img src="@/assets/img/tabbar/shopcart_active.svg" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </tabbar-item>
    <tabbar-item path="/profile">
      <img src="@/assets/img/tabbar/profile.svg" slot="item-icon">
      <img src="@/assets/img/tabbar/profile_active.svg" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tabbar-item>

  </tabbar>

</template>

<script>

import Tabbar from "@/components/common/tabbar/Tabbar";
import TabbarItem from "@/components/common/tabbar/TabbarItem";

export default {
  name: "MainTabBar",
  components:{
    Tabbar,
    TabbarItem
  }
}
</script>

<style scoped>

</style>