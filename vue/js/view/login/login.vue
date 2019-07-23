<template>
  <div class="login">
    <div class="login-con">
      <i-card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </i-card>
    </div>
  </div>
</template>

<script lang="babel">
import LoginForm from 'component!./login-form'
import { Card } from 'iview';
import { mapActions } from 'vuex'
import config from 'babel!../../config/index'
export default {
  name: 'login',
  components: {
      iCard:Card,
      LoginForm
  },
  methods: {
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit ({ userName, password }) {
      this.handleLogin({ userName, password }).then(res => {
        this.getUserInfo().then(res => {
          this.$router.push({
            name: config.homeName
          })
        })
      })
    }
  }
};
</script>

<style>

</style>


