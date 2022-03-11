<template>
  <el-form :model="loginForm" :rules="rules" ref="loginForm" label-position="left" label-width="0px"
           class="demo-ruleForm login-container">
    <h3 class="title">系统登录</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号" prop="account"
                clearable></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码" prop="password"
                clearable></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:47.5%;" @click.native.prevent="reset">重 置</el-button>
      <el-button type="primary" style="width:47.5%;" @click.native.prevent="login" :loading="logining">登 录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  name: 'Login',
  data () {
    return {
      logining: false,
      loginForm: {
        account: 'admin',
        password: '123456'
      },
      rules: {
        account: [
          {required: true, message: '请输入账号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },
      checked: true
    }
  },
  methods: {
    login () {
      let userInfo = {account: this.loginForm.account, password: this.loginForm.password}
      // this.$api.login(JSON.stringify(userInfo)).then((res) => {
      //   Cookies.set('token', res.data.token) // 放置token到Cookie
      //   sessionStorage.setItem('user', userInfo.account) // 保存用户到本地会话
      //   this.$router.push('/person') // 登录成功，跳转到主页
      // }).catch(function (res) {
      //   alert(res)
      // })
      this.axios({
        method: 'post',
        url: 'http://127.0.0.1:8888/login',
        data: userInfo
      }).then(response => {
        console.log(response.data)
        if (response.data === 'error') {
          this.$message(
            {
              type: 'error',
              message: '登录失败!'
            }
          )
        } else {
          Cookies.set('token', response.data) // 放置token到Cookie
          sessionStorage.setItem('user', userInfo.account) // 保存用户到本地会话
          this.$router.push('/home') // 登录成功，跳转到主页
        }
      }).catch(error => {
        console.log(error)
      })
    },
    reset () {
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>
<style scoped lang="scss">
  .login-container {
    background: #fff url("../assets/img/Login.png") no-repeat;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 360px auto;
    width: 600px;
    padding: 35px 35px 15px 35px;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }

  .remember {
    margin: 0px 0px 35px 0px;
  }

  }
</style>
