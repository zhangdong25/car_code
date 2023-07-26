<template>
  <div>
    <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="width: 18vw;height: 100vh;" router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/done-order">已完成</el-menu-item>
          <el-menu-item index="/trans-order">运输中</el-menu-item>
          <el-menu-item index="/order-list">待运输</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/suborder">
        <i class="el-icon-menu"></i>
        <span slot="title">发布订单</span>
      </el-menu-item>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span>合同签订</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">已签订</el-menu-item>
          <el-menu-item index="3-2">待签订</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1'
    };
  },
  computed: {
    defaultActive: function () {
      return this.$route.path.replace('//', '');
    }
  },
  methods: {
    handleSelect(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="less" scoped></style>
