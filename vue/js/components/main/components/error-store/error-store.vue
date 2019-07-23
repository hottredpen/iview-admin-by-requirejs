<template>
  <div class="error-store">
    <Badge dot :count="countComputed">
      <Button type="text" @click="openErrorLoggerPage">
        <Icon :size="20" type="ios-bug"/>
      </Button>
    </Badge>
  </div>
</template>

<script lang="babel">
import { Icon,Badge,Button } from 'iview';
export default {
  name: 'ErrorStore',
  components: {
    Icon:Icon,
    Badge,
    Button
  },
  props: {
    count: {
      type: Number,
      default: 0
    },
    hasRead: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    countComputed () {
      return this.hasRead ? 0 : this.count
    }
  },
  methods: {
    openErrorLoggerPage () {
      this.$router.push({
        name: 'error_logger_page'
      })
    }
  }
};
</script>

<style>
.error-store{
  margin-right: 12px;
}
.error-store .ivu-badge-dot{
    top: 20px;
}
.error-store .ivu-btn.ivu-btn-text{
    padding: 5px 1px 6px;
}
</style>
