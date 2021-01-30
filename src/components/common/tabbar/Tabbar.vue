<template>
  <div id="tabbar">
    <slot>
    </slot>

  </div>

</template>

<script>
export default {
name: "Tabbar"
}
</script>

<style scoped>

#tabbar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background-color: deepskyblue;
  box-shadow: 0 -2px 1px rgba(50,50,100,.1);
}

</style>