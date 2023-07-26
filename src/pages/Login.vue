<template>
  <div class="content">
    <div>
      <el-radio-group size="medium" v-model="select">
        <el-radio-button label="登录"></el-radio-button>
        <el-radio-button label="注册"></el-radio-button>
      </el-radio-group>
    </div>
    <div id="login" v-if="login">
      <el-input placeholder="请输入账号" clearable v-model="username" style="width: 70%; height: 45px;"></el-input>
      <el-input placeholder="请输入密码" show-password v-model="password" style="width: 70%; height: 45px;"></el-input>
      <el-button type="success" round @click="login()">登录</el-button>
    </div>
    <div id="register" v-if="!login">
      <el-input placeholder="请输入账号" clearable v-model="username" style="width: 70%; height: 45px;"></el-input>
      <el-input placeholder="请输入密码" show-password v-model="password" style="width: 70%; height: 45px;"></el-input>
      <el-input placeholder="确认密码" show-password v-model="passwordCopy" style="width: 70%; height: 45px;"></el-input>
      <el-input placeholder="请输入联系方式" v-model="phone" style="width: 70%; height: 45px;"></el-input>
      <el-button type="primary" round @click="register()">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      passwordCopy: '',
      phone: '',
      select: '登录',
      login: true
    }
  },
  methods: {
    login() {
      alert(`用户名为：${this.username},用户密码为：${this.password},${this.select}`)
    },
    register() {
      if (this.username == '' || this.password == '' || this.passwordCopy == '' || this.phone == '') {
        this.$message.error('填写所有信息，才可以提交!');
      } else {
        if (this.password != this.passwordCopy) {
          this.$message.error('两次密码不一致!');
        } else {
          this.$message({
            message: '注册成功!',
            type: 'success'
          });
        }
      }
    }
  },
  watch: {
    'select': {
      handler(nval, oval) {
        nval === "注册" ? this.login = false : this.login = true;
      }
    }
  }
}
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}

.content {
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#login {
  width: 35%;
  height: 50%;
  border-radius: 3%;
  background-color: #F2F6FC;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

#register {
  width: 35%;
  height: 60%;
  border-radius: 3%;
  background-color: #F2F6FC;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

/deep/ .el-input__inner {
  border-radius: 18px;
  height: 100%;
}
</style>