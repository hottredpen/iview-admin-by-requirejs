<template>
  <i-form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">
    <i-form-item prop="userName">
      <i-input v-model="form.userName" placeholder="请输入用户名">
        <span slot="prepend">
          <i-icon :size="16" type="ios-person"></i-icon>
        </span>
      </i-input>
    </i-form-item>
    <i-form-item prop="password">
      <i-input type="password" v-model="form.password" placeholder="请输入密码">
        <span slot="prepend">
          <i-icon :size="14" type="md-lock"></i-icon>
        </span>
      </i-input>
    </i-form-item>
    <i-form-item>
      <i-button @click="handleSubmit" type="primary" long>登录</i-button>
    </i-form-item>
  </i-form>
</template>
<script lang="babel">
import { Form ,FormItem,Input,Icon,Button} from 'iview';
export default {
  name: 'LoginForm',
  components: {
      iForm:Form,
      iFormItem:FormItem,
      iInput:Input,
      iIcon:Icon,
      iButton:Button
  },
  props: {
    userNameRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ]
      }
    },
    passwordRules: {
      type: Array,
      default: () => {
        return [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  data () {
    return {
      form: {
        userName: 'sx001',
        password: 'admin'
      }
    }
  },
  computed: {
    rules () {
      return {
        userName: this.userNameRules,
        password: this.passwordRules
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$emit('on-success-valid', {
            userName: this.form.userName,
            password: this.form.password
          })
        }
      })
    }
  }
};
</script>
