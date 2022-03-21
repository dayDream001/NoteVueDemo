<template>
  <div  class="sidebar">
    <el-menu class="sidebar-el-menu"
             :default-active="onRoutes"
             :collapse="collapse"
              background-color="#333333"
              text-color="#ffffff"
              active-text-color="#20a0ff"
              router>
      <template  v-for="item in items" >
        <template>
          <el-menu-item :index="item.index"  :key="item.index">
            <i :class="item.icon"></i>
            {{item.title}}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  data () {
    return {
      collapse: false,
      items: [
        {
          icon: 'el-icon-document',
          index: 'hello',
          title: '系统首页'
        },
        {
          icon: 'el-icon-document',
          index: 'person',
          title: '人物管理'
        },
        {
          icon: 'el-icon-document',
          index: 'even',
          title: '事件管理'
        },
        {
          icon: 'el-icon-document',
          index: 'characterTree',
          title: '人物关系图'
        }
      ]
    }
  }
}
</script>
<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    background-color: #333333;
    overflow-y: scroll;
  }
  .sidebar-el-meun{
    width:150px ;
  }
</style>
