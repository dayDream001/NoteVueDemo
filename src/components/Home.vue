<template>
  <div>
    <the-header></the-header>
    <the-aside></the-aside>
    <router-view></router-view>
    <the-foot></the-foot>
  </div>
</template>
<script>
import TheHeader from './TheHeader.vue'
import TheAside from './TheAside'
import TheFoot from './TheFoot'
export default {
  components: {
    TheFoot,
    TheHeader,
    TheAside
  }
}
</script>
<style>
</style>
