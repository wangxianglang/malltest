<template>
  <div class="tab-bar-item" @click="itemClick">

    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>

    <div :style="activeStyle"> <slot name="item-text"></slot></div>

  </div>

</template>

<script>
export default {
  name: "TabbarItem",
  props:{
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }

  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {};
    }
  },


  methods:{
    itemClick() {
      this.$router.replace(this.path).catch(() => {})
    }
  }
}
</script>

<style scoped>

.tab-bar-item{
  height: 49px;
  flex: 1;
  font-size: 14px;
  text-align: center;
}

.tab-bar-item img{
  height: 24px;
  width: 24px;
  vertical-align: center;
  margin-top: 3px;
}

</style>
