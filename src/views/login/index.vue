<template>
  <div class="login-container">
    <el-form
      class="login-form"
      :label-position="labelPosition"
      label-width="80px"
      :model="loginForm"
      ref="loginForm"
      :rules="loginRules"
    >
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>
      <el-form-item label="账号" prop="username">
        <el-input ref="username" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          ref="password"
          v-model="loginForm.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-button
        :loading="loading"
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click.native.prevent="handleLogin"
        >Login</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    // 自定义校验规则
    const validateUsername = (rule, value, callback) => {
      if (value !== 'admin') {
        callback(new Error('Please enter the correct user name'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error('The password can not be less than 5 digits'))
      } else {
        callback()
      }
    }
    return {
      labelPosition: 'right',
      loginForm: {
        username: 'admin',
        password: 'admin',
      },
      loading: false,
      loginRules: {
        username: [
          { required: true, trigger: 'blur', validator: validateUsername },
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword },
        ],
      },
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          this.loading = true
          const res = await this.actionLogin(this.loginForm)
          if (res.token) {
            this.$message({
              message: '登录成功！',
              type: 'success',
            })
            this.$router.push({
              path: '/',
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    ...mapActions(['actionLogin']),
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    }
    if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
}
</script>

<style lang="scss">
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 100%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  min-height: 100vh;
  background: $bg;
  .login-form {
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
  }
  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
