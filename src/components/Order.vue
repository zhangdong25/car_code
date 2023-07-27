<template>
  <div>
    <h1>路线规划</h1>
    <div id="mapContainer" style="height: 500px"></div>
    <div>
      <el-form :model="form" label-width="80px" style="margin-top: 20px;">
        <el-form-item label="起始地点">
          <el-input v-model="form.origin"></el-input>
        </el-form-item>
        <el-form-item label="目的地点">
          <el-input v-model="form.destination"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="planRoute">规划路线</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import AMapLoader from '@amap/amap-jsapi-loader';
export default {
  data() {
    return {
      form: {
        origin: '',
        destination: ''
      },
      map: null,
      driving: null,
      polyline: null
    };
  },
  mounted() {
    this.initMap();
    this.$message({
      message: '欢迎进入二手车物流管理系统',
      type: 'success'
    });
  },
  methods: {
    initMap() {
      AMapLoader.load({
        key: "7e7c1d5b0e5e55e2689d0bdc9d5af47c",             // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0",      // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.Driving'],       // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      }).then((AMap) => {
        this.map = new AMap.Map("mapContainer", {  //设置地图容器id
          viewMode: "3D",    //是否为3D地图模式
          zoom: 5,           //初始化地图级别
          center: [105.602725, 37.076636], //初始化地图中心点位置
        });
      }).catch(e => {
        console.log(e);
      })
    },
    planRoute() {
      /* console.log("start");
      // 构造路线导航类
      this.driving = new AMap.Driving({
        map: this.map,
        panel: "panel"
      });
      console.log(this.driving);
      this.driving.search([
        { keyword: '北京市地震局(公交站)', city: '北京' },
        { keyword: '亦庄文化园(地铁站)', city: '北京' }
      ], function (status, result) {
        // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
        if (status === 'complete') {
          console.success('绘制驾车路线完成')
        } else {
          console.error('获取驾车数据失败：' + result)
        }
      });
      console.log("end"); */
      const { origin, destination } = this.form;

      if (!origin || !destination) {
        return;
      }

      if (this.polyline) {
        this.map.remove(this.polyline);
      }

      AMap.plugin('AMap.Driving', () => {
        this.driving = new AMap.Driving({
          map: this.map
        });

        this.driving.search([
          { keyword: origin, city: '全国' },
          { keyword: destination, city: '全国' }
        ], (status, result) => {
          if (status === 'complete' && result.routes && result.routes.length) {
            const path = result.routes[0].path;
            this.polyline = new AMap.Polyline({
              path: path,
              strokeColor: '#3366FF',
              strokeWeight: 5,
              map: this.map
            });
            this.map.setFitView();
          }
        });
      });
    }
  }
};
</script>
