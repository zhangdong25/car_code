<template>
  <div id="content">
    <el-container>
      <el-aside>
        <Sidebar></Sidebar>
      </el-aside>
      <el-container>
        <el-header>
          <HeaderTop></HeaderTop>
        </el-header>
        <el-main>
          <Content></Content>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import HeaderTop from '@/components/HeaderTop.vue'
import Content from '@/components/OrderList.vue'
export default {
  components: {
    Sidebar,
    HeaderTop,
    Content
  }
}
</script>

<style lang="less" scoped>
.el-header {
  margin: 0 !important;
  padding: 0 !important;
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  width: auto !important;
}
</style>