<template>
    <el-container class="home-container">
      <el-header>
        <div class="div1">
          <img src="../assets/img/logo.jpg"/>
          <span style="margin-left: 10px;">XX管理系统</span>
        </div>
        <div>
          <span>用户头像</span>
          <span>登出按钮</span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">
              <el-menu
                background-color="#e4e7ed"
                text-color="#66b1ff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item index="1-2-1">
                    <i class="el-icon-location"></i>
                    <span>选项1</span>
                  </el-menu-item>
                </el-submenu>
              </el-menu>
        </el-aside>
        <el-main>主体</el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'TheHome',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .home-container{
    height: 100%;
  }
 .el-header{
   background-color: #66b1ff;
   display:flex;
   justify-content: space-between;
   padding-left: 0;
   align-items: center;
   font-size: 20px;
 }
 .div1{
   display: flex;
   align-items: center;
 }
  .el-aside{
    background-color: #e4e7ed;
  }
  .el-main{
    background-color: #ecf5ff;
  }
</style>
