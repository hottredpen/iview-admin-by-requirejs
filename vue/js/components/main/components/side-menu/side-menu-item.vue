<template>
  <Submenu :name="`${parentName}`">
    <template slot="title">
      <!-- 此处有个前端的bug,需要span放前面，目前用绝对地址了-->
      <div style="height:20px;"><span style="position:absolute;left:50px;top:14px;">{{ showTitle(parentItem) }}</span><common-icon style="position:absolute;left:24px;top:16px;" :type="parentItem.icon || ''"/></div>
    </template>
    <template v-for="item in children">
      <template v-if="item.children && item.children.length === 1">
        <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
        <menu-item v-else :name="getNameOrHref(item, true)" :key="`menu-${item.children[0].name}`">
            <!-- 此处有个前端的bug,需要span放前面，目前用绝对地址了-->
            <div style="height:20px;"><span style="position:absolute;left:50px;top:14px;">{{ showTitle(item.children[0]) }}</span><common-icon style="position:absolute;left:24px;top:16px;" :type="item.children[0].icon || ''"/></div>
        </menu-item>
      </template>
      <template v-else>
        <side-menu-item v-if="showChildren(item)" :key="`menu-${item.name}`" :parent-item="item"></side-menu-item>
        <menu-item v-else :name="getNameOrHref(item)" :key="`menu-${item.name}`">
            <!-- 此处有个前端的bug,需要span放前面，目前用绝对地址了-->
            <div style="height:20px;"><span style="position:absolute;left:50px;top:14px;">{{ showTitle(item) }}</span><common-icon style="position:absolute;left:24px;top:16px;" :type="item.icon || ''"/></div>
        </menu-item>
      </template>
    </template>
  </Submenu>
</template>
<script lang="babel">
import mixin from 'babel!./mixin'
import itemMixin from 'babel!./item-mixin'

import { Submenu,MenuItem } from 'iview'
import CommonIcon from 'component!../../../../components/common-icon/common-icon'

export default {
  name: 'SideMenuItem',
  components: {
    Submenu,
    MenuItem
  },
  mixins: [ mixin, itemMixin ],
  methods: {
  }
};
</script>


