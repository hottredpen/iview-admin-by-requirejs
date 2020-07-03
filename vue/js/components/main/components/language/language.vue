<template>
  <div>
    <Dropdown trigger="click" @on-click="selectLang">
      <a href="javascript:void(0)">
        {{ title }}
        <i-icon :size="18" type="md-arrow-dropdown" />
      </a>
      <Dropdown-menu slot="list">
        <Dropdown-item v-for="(value, key) in localList" :name="key" :key="`lang-${key}`">{{ value }}</Dropdown-item>
      </Dropdown-menu>
    </Dropdown>
  </div>
</template>

<script lang="babel">
import { Icon ,Dropdown,DropdownMenu,DropdownItem} from 'iview';
export default {
  name: 'Language',
  components: {
    iIcon:Icon,
    Dropdown,
    DropdownMenu,
    DropdownItem
  },
  props: {
    lang: String
  },
  data () {
    return {
      langList: {
        'zh-CN': '语言',
        'zh-TW': '語言',
        'en-US': 'Lang'
      },
      localList: {
        'zh-CN': '中文简体',
        'zh-TW': '中文繁体',
        'en-US': 'English'
      }
    }
  },
  watch: {
    // lang (lang) {
    //   this.$i18n.locale = lang
    // }
  },
  computed: {
    title () {
      // return this.langList[this.lang]
      return this.langList['zh-CN']
    }
  },
  methods: {
    selectLang (name) {
      this.$emit('on-lang-change', name)
    }
  }
};
</script>
