<template>
  <div>
    <el-card>
      <div slot="header" class="card-header">正在运输的订单</div>
      <div id="mapContainer" style="height: 400px"></div>
      <el-table :data="orders" style="width: 100%">
        <el-table-column prop="orderName" label="订单名称"></el-table-column>
        <el-table-column prop="orderAmount" label="订单金额"></el-table-column>
        <el-table-column prop="customerName" label="客户姓名"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="viewOrder(scope.row)">查看</el-button>
            <el-button type="text" @click="showRoute(scope.row)">查看路线</el-button>
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
          customerName: '客户A',
          latitude: 39.9042, // 订单的起始纬度信息
          longitude: 116.4074, // 订单的起始经度信息
          destination: {
            latitude: 31.2304, // 订单的目的地纬度信息
            longitude: 121.4737 // 订单的目的地经度信息
          },
          routePolyline: null, // 用于存储路线的折线对象
          marker: null // 用于存储标记的对象
        },
        // 其他订单数据...
      ],
      dialogVisible: false,
      selectedOrder: {}
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
    viewOrder(order) {
      this.selectedOrder = order;
      this.dialogVisible = true;
    },
    showRoute(order) {
      const { latitude, longitude, destination } = order;

      const map = new AMap.Map('mapContainer', {
        center: [longitude, latitude],
        zoom: 12
      });

      AMap.plugin(['AMap.Driving'], () => {
        const driving = new AMap.Driving({
          map: map
        });

        driving.search(
          new AMap.LngLat(longitude, latitude),
          new AMap.LngLat(destination.longitude, destination.latitude),
          (status, result) => {
            if (status === 'complete') {
              const path = result.routes[0].path;

              // 更新订单的路线信息
              order.routePolyline = new AMap.Polyline({
                path: path,
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 5,
                map: map
              });

              // 更新订单的标记位置
              order.marker = new AMap.Marker({
                position: new AMap.LngLat(longitude, latitude),
                map: map,
                icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png' // 自定义标记图标
              });
            }
          }
        );
      });
    },
    initMap() {
      const script = document.createElement('script');
      script.src = 'https://webapi.amap.com/maps?v=2.0&key=7e7c1d5b0e5e55e2689d0bdc9d5af47c&plugin=AMap.Driving';
      script.async = true;
      script.onload = () => {
        this.showRoute(this.orders[0]); // 显示第一个订单的路线和标记
      };
      document.head.appendChild(script);
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

#mapContainer {
  margin-top: 20px;
}
</style>
