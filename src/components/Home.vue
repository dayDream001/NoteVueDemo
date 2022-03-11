<template>
  <div>
    <el-row :span="24" class="container">
      <el-col  class="topbar-wrap">
        <TheHeader></TheHeader>
      </el-col>
      <el-col :span="24" class="main">
        <TheAside></TheAside>
        <!--<section>-->
          <!--<div class="content-container">-->
            <!--<div class="grid-content  bg-purple-light">-->
              <!--<el-col :span="24" class="content-wrapper">-->
                <!--<transition name="fade" mode="out-in">-->
                  <!--<router-view></router-view>-->
                <!--</transition>-->
              <!--</el-col>-->
            <!--</div>-->
          <!--</div>-->
        <!--</section>-->
      </el-col>
    </el-row>
  </div>
</template>
<script>
import TheHeader from './TheHeader.vue'
import TheAside from './TheAside'
export default {
  components: {
    TheHeader,
    TheAside
  }
}
</script>
