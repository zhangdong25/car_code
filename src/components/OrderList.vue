<template>
  <div>
    <el-card>
      <div slot="header" class="card-header">待运输订单</div>
      <el-table :data="orders" style="width: 100%">
        <el-table-column prop="orderName" label="订单名称"></el-table-column>
        <el-table-column prop="orderAmount" label="订单金额"></el-table-column>
        <el-table-column prop="customerName" label="客户姓名"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="viewOrder(scope.row)">查看</el-button>
            <el-button type="text" @click="deleteOrder(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <el-dialog :visible="dialogVisible" @close="dialogVisible = false">
      <span>{{ selectedOrder.orderName }}</span>
      <span>{{ selectedOrder.orderAmount }}</span>
      <span>{{ selectedOrder.customerName }}</span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          orderName: '订单1',
          orderAmount: 100,
          customerName: '客户A'
        },
        {
          orderName: '订单2',
          orderAmount: 200,
          customerName: '客户B'
        },
        // 其他订单数据...
      ],
      dialogVisible: false,
      selectedOrder: {}
    };
  },
  methods: {
    viewOrder(order) {
      this.selectedOrder = order;
      this.dialogVisible = true;
    },
    deleteOrder(order) {
      // 在此处添加删除订单的逻辑，例如发送网络请求等
      console.log('删除订单', order);
      // 从数组中移除已删除的订单
      this.orders = this.orders.filter(item => item !== order);
    }
  }
};
</script>

<style scoped>
.card-header {
  background-color: #f5f7fa;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid #ebeef5;
}
</style>
