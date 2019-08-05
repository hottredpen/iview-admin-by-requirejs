<template>
  <div class="user-avatar-dropdown">
    <Dropdown @on-click="handleClick">
      <Badge :dot="!!messageUnreadCount">
        <Avatar :src="userAvatar"/>
      </Badge>
      <i-icon :size="18" type="md-arrow-dropdown"></i-icon>
      <Dropdown-menu slot="list">
        <Dropdown-item name="message">
          消息中心<Badge style="margin-left: 10px" :count="messageUnreadCount"></Badge>
        </Dropdown-item>
        <Dropdown-item name="logout">退出登录</Dropdown-item>
      </Dropdown-menu>
    </Dropdown>
  </div>
</template>

<script lang="babel">
// import 'less!./user.less'
import { mapActions } from 'vuex'
import { Icon,Dropdown,DropdownMenu,DropdownItem,Badge,Avatar} from 'iview';
export default {
  name: 'User',
  components: {
    iIcon:Icon,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Badge,
    Avatar,
  },
  props: {
    userAvatar: {
      type: String,
      default: ''
    },
    messageUnreadCount: {
      type: Number,
      default: 0
    }
  },
  methods: {
    ...mapActions([
      'handleLogOut'
    ]),
    logout () {
      this.handleLogOut().then(() => {
        this.$router.push({
          name: 'login'
        })
      })
    },
    message () {
      this.$router.push({
        name: 'message_page'
      })
    },
    handleClick (name) {
      switch (name) {
        case 'logout': this.logout()
          break
        case 'message': this.message()
          break
      }
    }
  }
};
</script>
