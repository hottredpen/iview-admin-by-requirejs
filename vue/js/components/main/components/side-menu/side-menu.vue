<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <i-menu ref="menu" v-show="!collapsed" :active-name="activeName" :open-names="openedNames" :accordion="accordion" :theme="theme" width="auto" @on-select="handleSelect">
      <template v-for="item in menuList">
        <template v-if="item.children && item.children.length === 1">
          <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
          <i-menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`">
              <!-- 此处有个前端的bug,需要span放前面，目前用绝对地址了-->
              <div style="height:20px;"><span style="position:absolute;left:50px;top:14px;">{{ showTitle(item.children[0]) }}</span><common-icon style="position:absolute;left:24px;top:16px;" :type="item.children[0].icon || ''"/></div>
          </i-menu-item>
        </template>
        <template v-else>
          <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
          <i-menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`">
              <!-- 此处有个前端的bug,需要span放前面，目前用绝对地址了-->
              <div style="height:20px;"><span style="position:absolute;left:50px;top:14px;">{{ showTitle(item) }}</span><common-icon style="position:absolute;left:24px;top:16px;" :type="item.icon || ''"/></div>
          </i-menu-item>
        </template>
      </template>
    </i-menu>
    <div class="menu-collapsed" v-show="collapsed" :list="menuList">
      <template v-for="item in menuList">
        <collapsed-menu v-if="item.children && item.children.length > 1" @on-click="handleSelect" hide-title :root-icon-size="rootIconSize" :icon-size="iconSize" :theme="theme" :parent-item="item" :key="`drop-menu-${item.name}`"></collapsed-menu>
        <Tooltip transfer v-else :content="showTitle(item.children && item.children[0] ? item.children[0] : item)" placement="right" :key="`drop-menu-${item.name}`">
          <a @click="handleSelect(getNameOrHref(item, true))" class="drop-menu-a" :style="{textAlign: 'center'}"><common-icon :size="rootIconSize" :color="textColor" :type="item.icon || (item.children && item.children[0].icon)"/></a>
        </Tooltip>
      </template>
    </div>
  </div>
</template>
<script lang="babel">
import SideMenuItem from 'component!./side-menu-item'
import CollapsedMenu from 'component!./collapsed-menu'
import { getUnion } from 'babel!../../../../libs/tools'
import mixin from 'babel!./mixin'

import 'less!./side-menu.less';
import { Menu ,MenuItem ,Tooltip} from 'iview';
import { showTitle } from 'babel!../../../../libs/util'

export default {
  name: 'SideMenu',
  mixins: [ mixin ],
  components: {
    iMenu:Menu,
    iMenuItem:MenuItem,
    SideMenuItem,
    CollapsedMenu,
    Tooltip
  },
  props: {
    menuList: {
      type: Array,
      default () {
        return []
      }
    },
    collapsed: {
      type: Boolean
    },
    theme: {
      type: String,
      default: 'dark'
    },
    rootIconSize: {
      type: Number,
      default: 20
    },
    iconSize: {
      type: Number,
      default: 16
    },
    accordion: Boolean,
    activeName: {
      type: String,
      default: ''
    },
    openNames: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      openedNames: []
    }
  },
  methods: {
    handleSelect (name) {
      this.$emit('on-select', name)
    },
    getOpenedNamesByActiveName (name) {
      return this.$route.matched.map(item => item.name).filter(item => item !== name)
    },
    updateOpenName (name) {
      if (name === this.$config.homeName) this.openedNames = []
      else this.openedNames = this.getOpenedNamesByActiveName(name)
    }
  },
  computed: {
    textColor () {
      return this.theme === 'dark' ? '#fff' : '#495060'
    }
  },
  watch: {
    activeName (name) {
      if (this.accordion) this.openedNames = this.getOpenedNamesByActiveName(name)
      else this.openedNames = getUnion(this.openedNames, this.getOpenedNamesByActiveName(name))
    },
    openNames (newNames) {
      this.openedNames = newNames
    },
    openedNames () {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
      })
    }
  },
  mounted () {
    this.openedNames = getUnion(this.openedNames, this.getOpenedNamesByActiveName(name))
  }
};
</script>

