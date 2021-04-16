<template>
  <div class="login-container">
		<el-form 
      class="login-form" 
      :label-position="labelPosition" 
      label-width="80px" 
      :model="loginForm"
    >
      <div class="title-container">
        <h3 class="title">Login Form</h3>
      </div>
      <el-form-item label="账号">
        <el-input ref="username" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input ref="password" v-model="loginForm.password" show-password></el-input>
      </el-form-item>
      <el-button
        :loading="loading"
        type="primary"
        style="width:100%;margin-bottom:30px;"
        @click.native.prevent="handleLogin"
        >Login</el-button
      >
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      labelPosition: 'right',
      loginForm: {
        username: 'admin',
        password: 'admin',
      },
      loading: false
    }
  },
  methods: {
    handleLogin() {
      this.loading = true
      this.$router.push({
        path: '/'
      })
    }
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    }
    if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  }
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