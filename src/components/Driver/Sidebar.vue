<template>
  <div>
    <el-menu :default-active="defaultActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="width: 18vw;height: 100vh;" router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单中心</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/driver_orderlist">接单列表</el-menu-item>
          <el-menu-item index="/history">历史订单</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/LogisticsCenter_driver">
        <i class="el-icon-menu"></i>
        <span slot="title">物流中心</span>
      </el-menu-item>
      <el-menu-item index="/personal">
        <i class="el-icon-menu"></i>
        <span slot="title">个人中心</span>
      </el-menu-item>
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
