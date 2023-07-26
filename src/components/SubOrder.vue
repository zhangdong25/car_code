<template>
  <div>
    <el-card>
      <div slot="header" class="card-header">发布订单</div>
      <el-form :model="form" label-width="100px">
        <el-form-item label="卖家联系方式">
          <el-input v-model="form.contact"></el-input>
        </el-form-item>
        <el-form-item label="卖家地址">
          <el-autocomplete v-model="form.address" :fetch-suggestions="querySearch" placeholder="请输入地址" @select="handleSelect"></el-autocomplete>
        </el-form-item>
        <el-form-item label="车辆品牌">
          <el-input v-model="form.brand"></el-input>
        </el-form-item>
        <el-form-item label="车辆类型">
          <el-input v-model="form.type"></el-input>
        </el-form-item>
        <el-form-item label="车况">
          <el-input v-model="form.condition"></el-input>
        </el-form-item>
        <el-form-item label="车辆颜色">
          <el-input v-model="form.color"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交订单</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        contact: '',
        address: '',
        brand: '',
        type: '',
        condition: '',
        color: ''
      }
    };
  },
  methods: {
    querySearch(query) {
      // 在此处使用高德地图的地点搜索功能，根据query获取匹配的地址列表
      // 返回一个Promise对象，解析为包含地址列表的数组
      // 示例中使用了一个静态的地址列表来模拟搜索结果
      const results = [
        '北京市朝阳区',
        '北京市海淀区',
        '上海市黄浦区',
        '上海市静安区',
        '广州市天河区',
        '广州市海珠区',
        '深圳市福田区',
        '深圳市南山区'
      ];
      return new Promise(resolve => {
        const suggestions = results.filter(item => item.includes(query));
        resolve(suggestions);
      });
    },
    handleSelect(item) {
      // 选中地址后的处理逻辑
      this.form.address = item;
    },
    submitForm() {
      // 在此处添加提交订单的逻辑，例如发送网络请求等
      console.log('提交订单', this.form);
      // 清空表单
      this.form = {
        contact: '',
        address: '',
        brand: '',
        type: '',
        condition: '',
        color: ''
      };
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
