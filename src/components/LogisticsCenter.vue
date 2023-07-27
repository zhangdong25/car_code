<template>
  <div>
    <el-card>
      <div slot="header" class="card-header">物流中心</div>
      <el-form :model="form" label-width="100px" style="margin-top: 20px;">
        <el-form-item label="订单编号">
          <el-input v-model="form.orderNumber"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="searchLogistics">查看物流</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card v-if="logisticsStatus">
      <h2 slot="header">物流状态</h2>
      <div class="logistics-container">
        <el-steps :active="currentStatusIndex" :space="100" direction="vertical">
          <el-step v-for="(status, index) in logisticsStatus" :key="index" :title="status.time" :description="status.message" :status="status.status" :icon="status.icon"></el-step>
        </el-steps>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        orderNumber: ''
      },
      logisticsStatus: null,
      orderNumbers: [
        'ORD123456',
        '202307150001',
        'ABC7890123',
        '202307150002',
        'XYZ4567890'
        // 添加其他虚拟的订单编号
      ],
      currentStatusIndex: 0
    };
  },
  methods: {
    searchLogistics() {
      // 在这里执行向后端或物流服务商请求查询物流信息的操作
      // 假设在这里模拟获取物流状态更新的数据
      const orderNumber = this.form.orderNumber;
      if (this.orderNumbers.includes(orderNumber)) {
        this.logisticsStatus = [
          { time: '2023-07-15 10:00', message: '您的订单已发货', status: 'success' },
          { time: '2023-07-15 12:00', message: '货物已到达目的地城市', status: 'success' },
          { time: '2023-07-15 14:00', message: '正在派送中', status: 'process', icon: "el-icon-loading" },
          /* { time: '2023-07-15 16:00', message: '订单已签收' }, */
          // 添加更多物流状态...
        ];
        this.currentStatusIndex = 0;
      } else {
        this.logisticsStatus = null;
        this.currentStatusIndex = 0;
        this.$message.error('未找到该订单编号，请输入正确的订单编号!');
      }
    }
  }
};
</script>

<style>
.logistics-container {
  max-height: 300px;
  /* 设置容器的最大高度，超出部分将显示滚动条 */
  overflow-y: auto;
  /* 显示垂直滚动条 */
}

.card-header {
  background-color: #f5f7fa;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #ebeef5;
}
</style>
