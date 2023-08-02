<template>
  <div class="order-history-page">
    <h1 class="page-title">历史订单</h1>
    <el-card class="order-list">
      <h2>历史订单列表</h2>
      <div class="order-item" v-for="order in historyOrders" :key="order.id">
        <span>{{ order.id }}</span>
        <span>{{ order.product }}</span>
        <span>{{ order.customer }}</span>
        <span class="status">{{ order.status }}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      historyOrders: [
        { id: 1, product: 'Product A', customer: 'Customer X', status: 'completed' },
        { id: 2, product: 'Product B', customer: 'Customer Y', status: 'completed' },
        { id: 3, product: 'Product C', customer: 'Customer Z', status: 'cancelled' },
        // 添加更多历史订单...
      ]
    };
  }
};
</script>

<style scoped>
.order-history-page {
  padding: 20px;
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.order-list {
  margin-bottom: 20px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.status {
  color: #999;
}
</style>
