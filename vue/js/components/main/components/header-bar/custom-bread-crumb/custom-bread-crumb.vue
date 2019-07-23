<template>
  <div class="custom-bread-crumb">
    <i-breadcrumb :style="{fontSize: `${fontSize}px`}">
      <i-breadcrumb-item v-for="item in list" :to="item.to" :key="`bread-crumb-${item.name}`">
        <common-icon style="margin-right: 4px;" :type="item.icon || ''"/>
        {{ showTitle(item) }}
      </i-breadcrumb-item>
    </i-breadcrumb>
  </div>
</template>
<script lang="babel">
import { showTitle } from 'babel!../../../../../libs/util'
import CommonIcon from 'component!../../../../../components/common-icon/common-icon'
import 'less!./custom-bread-crumb.less'
import { Breadcrumb,BreadcrumbItem } from 'iview';
export default {
  name: 'customBreadCrumb',
  components: {
    CommonIcon,
    iBreadcrumb:Breadcrumb,
    iBreadcrumbItem:BreadcrumbItem
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    fontSize: {
      type: Number,
      default: 14
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showTitle (item) {
      return showTitle(item, this)
    },
    isCustomIcon (iconName) {
      return iconName.indexOf('_') === 0
    },
    getCustomIconName (iconName) {
      return iconName.slice(1)
    }
  }
};
</script>
