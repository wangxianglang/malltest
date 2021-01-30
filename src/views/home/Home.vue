<template>
  <div>
    <Navbar class="home-nav"><div slot="center">网易云音乐</div></Navbar>
    <h1>home</h1>
  </div>

</template>

<script>

import Navbar from "@/components/common/navbar/Navbar";
export default {
  name: "Home",
  components:{
    Navbar
  }
}
</script>

<style scoped>

.home-nav{
  background-color: crimson;
  color: #ffffff;
}


</style>
