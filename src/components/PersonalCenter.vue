<template>
  <div class="personal-center">
    <el-card class="profile-card">
      <el-form :model="formData" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model.number="formData.age"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="formData.gender">
            <el-radio label="male">男</el-radio>
            <el-radio label="female">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="saveProfile">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: 'John Doe', // 用户的姓名
        age: 30, // 用户的年龄
        gender: 'male', // 用户的性别，默认为男性
      },
    };
  },
  methods: {
    saveProfile() {
      // 在这里执行向后端发送请求，将修改后的用户信息保存
      console.log('保存用户信息', this.formData);
      // 假设保存成功后有个提示
      this.$message.success('保存成功！');
    },
  },
};
</script>

<style scoped>
.personal-center {
  width: 100%;
  height: 100%;
  /* background-color: aquamarine; */
}


.profile-card {
  padding: 20px;
}
</style>
