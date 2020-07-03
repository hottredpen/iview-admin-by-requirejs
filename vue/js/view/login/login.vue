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
import Vue from 'vue'
// import config from 'babel!../../config/index'

// import 'less!./login.less'; // 为了减少请求次数，所有less都加入app.less

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
      var that = this
      this.handleLogin({ userName, password }).then(res => {
        console.log(res)
        if(res.code == 200) {
          this.getUserInfo().then(res => {
            this.$router.push({
              name: that.$config.homeName
            })
          })
        }else{
          alert(res.msg)
        }
      })
    }
  }
};
</script>

<style>

</style>


