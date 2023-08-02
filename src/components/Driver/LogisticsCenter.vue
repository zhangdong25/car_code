<template>
  <div class="logistics-center">
    <h1 class="page-title">物流中心</h1>
    <el-card class="logistics-list">
      <h2>物流更新状态</h2>
      <div class="logistics-item" v-for="logistics in logisticsData" :key="logistics.id">
        <span>{{ logistics.id }}</span>
        <span>{{ logistics.orderNumber }}</span>
        <span>{{ logistics.status }}</span>
        <el-input v-model="logistics.newStatus" placeholder="输入新的物流状态"></el-input>
        <el-button @click="updateStatus(logistics.id)" type="primary">更新状态</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logisticsData: [
        { id: 1, orderNumber: 'ORD123', status: '发货中', newStatus: '' },
        { id: 2, orderNumber: 'ORD456', status: '运输中', newStatus: '' },
        { id: 3, orderNumber: 'ORD789', status: '派送中', newStatus: '' },
        // 添加更多物流数据...
      ]
    };
  },
  methods: {
    updateStatus(logisticsId) {
      const logistics = this.logisticsData.find(logistics => logistics.id === logisticsId);
      if (logistics && logistics.newStatus) {
        logistics.status = logistics.newStatus;
        logistics.newStatus = '';
      }
    }
  }
};
</script>

<style scoped>
.logistics-center {
  padding: 20px;
}

.page-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.logistics-list {
  margin-bottom: 20px;
}

.logistics-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.el-input {
  width: 200px;
  margin-right: 10px;
}
</style>
