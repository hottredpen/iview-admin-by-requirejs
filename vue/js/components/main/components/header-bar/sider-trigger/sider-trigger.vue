<template>
  <a @click="handleChange" type="text" :class="['sider-trigger-a', collapsed ? 'collapsed' : '']"><i-icon :type="icon" :size="size" /></a>
</template>
<script lang="babel">
// import 'less!./sider-trigger.less';
import { Icon } from 'iview';
export default {
  name: 'siderTrigger',
  components: {
    iIcon:Icon
  },
  props: {
    collapsed: Boolean,
    icon: {
      type: String,
      default: 'navicon-round'
    },
    size: {
      type: Number,
      default: 26
    }
  },
  methods: {
    handleChange () {
      this.$emit('on-change', !this.collapsed)
    }
  }
};
</script>
