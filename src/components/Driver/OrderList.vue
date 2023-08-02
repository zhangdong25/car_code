<template>
  <div class="order-page">
    <h1 class="page-title">订单管理</h1>
    <el-card class="order-list">
      <h2>未接受订单</h2>
      <div class="order-item" v-for="order in pendingOrders" :key="order.id">
        <span>{{ order.id }}</span>
        <span>{{ order.product }}</span>
        <span>{{ order.customer }}</span>
        <span class="pending-status">{{ order.status }}</span>
        <el-button @click="acceptOrder(order.id)" type="primary">接受订单</el-button>
      </div>
    </el-card>

    <el-card class="order-list">
      <h2>已接受订单</h2>
      <div class="order-item accepted" v-for="order in acceptedOrders" :key="order.id">
        <span>{{ order.id }}</span>
        <span>{{ order.product }}</span>
        <span>{{ order.customer }}</span>
        <span class="accepted-status">{{ order.status }}</span>
        <el-button @click="canelOrder(order.id)" type="primary">取消订单</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        { id: 1, product: 'Product A', customer: 'Customer X', status: '待接单' },
        { id: 2, product: 'Product B', customer: 'Customer Y', status: '待接单' },
        { id: 3, product: 'Product C', customer: 'Customer Z', status: '已接单' },
        // 添加更多订单...
      ]
    };
  },
  computed: {
    pendingOrders() {
      return this.orders.filter(order => order.status === '待接单');
    },
    acceptedOrders() {
      return this.orders.filter(order => order.status === '已接单');
    }
  },
  methods: {
    acceptOrder(orderId) {
      const order = this.orders.find(order => order.id === orderId);
      if (order) {
        order.status = '已接单';
      }
    },
    canelOrder(orderId) {
      const order = this.orders.find(order => order.id === orderId);
      if (order) {
        order.status = '待接单'
      }
    }
  }
};
</script>

<style scoped>
.order-page {
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

.accepted {
  background-color: #f0f0f0;
}

.pending-status {
  color: orange;
}

.accepted-status {
  color: green;
}
</style>
