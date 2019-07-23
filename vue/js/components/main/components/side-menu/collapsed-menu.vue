<template>
  <Dropdown ref="dropdown" @on-click="handleClick" :class="hideTitle ? '' : 'collased-menu-dropdown'" :transfer="hideTitle" :placement="placement">
    <a class="drop-menu-a" type="text" @mouseover="handleMousemove($event, children)" :style="{textAlign: !hideTitle ? 'left' : ''}">
        <span class="menu-title" v-if="!hideTitle">{{ showTitle(parentItem) }}</span>
        <common-icon :size="rootIconSize" :color="textColor" :type="parentItem.icon"/>
    <i-icon style="float: right;" v-if="!hideTitle" type="ios-arrow-forward" :size="16"/></a>
    <Dropdown-menu ref="dropdown" slot="list">
      <template v-for="child in children">
        <collapsed-menu v-if="showChildren(child)" :icon-size="iconSize" :parent-item="child" :key="`drop-${child.name}`"></collapsed-menu>
        <Dropdown-item v-else :key="`drop-${child.name}`" :name="child.name">
          <!-- 此处有个前端的bug,需要span放前面，目前用绝对地址了-->
          <div style="height:18px;width:150px;position:relative;"><span class="menu-title" style="position:absolute;left:15px;top:0px;">{{ showTitle(child) }}</span><common-icon style="position:absolute;left:0px;top:0px;" :size="iconSize" :type="child.icon || ''"/></div>
        </Dropdown-item>
      </template>
    </Dropdown-menu>
  </Dropdown>
</template>
<script lang="babel">
import mixin from 'babel!./mixin'
import itemMixin from 'babel!./item-mixin'
import { findNodeUpperByClasses } from 'babel!../../../../../libs/util'

import { Icon,Dropdown,DropdownMenu,DropdownItem } from 'iview'
export default {
  name: 'CollapsedMenu',
  components: {
    iIcon:Icon,
    Dropdown,
    DropdownMenu,
    DropdownItem
  },
  mixins: [ mixin, itemMixin ],
  props: {
    hideTitle: {
      type: Boolean,
      default: false
    },
    rootIconSize: {
      type: Number,
      default: 16
    }
  },
  data () {
    return {
      placement: 'right-end'
    }
  },
  methods: {
    handleClick (name) {
      this.$emit('on-click', name)
    },
    handleMousemove (event, children) {
      const { pageY } = event
      const height = children.length * 38
      const isOverflow = pageY + height < window.innerHeight
      this.placement = isOverflow ? 'right-start' : 'right-end'
    }
  },
  mounted () {
    let dropdown = findNodeUpperByClasses(this.$refs.dropdown.$el, ['ivu-select-dropdown', 'ivu-dropdown-transfer'])
    if (dropdown) dropdown.style.overflow = 'visible'
  }
};
</script>
