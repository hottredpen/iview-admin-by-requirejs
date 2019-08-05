<template>
  <div>
    <component :is="currentRole"></component>
  </div>
</template>

<script lang="babel">
import Vue from 'vue';

export default {
  name: 'dynamic-page',
  components: {

  },
  data () {
    return {
      currentRole:null
    }
  },
  watch: {
    $route() {

      this.showpage()


    }
  },
  created(){
    // console.log(Row)
    // console.log(test)
    this.showpage()
    // this.currentRole = 'test2'


    // this.currentRole = 'test'
  },
  methods:{
    showpage(){
        // console.log('---------this.$route------')
        // console.log(this.$route)

        var that = this
        var reg_com_name = this.$route.name
        this.$store.sss(reg_com_name,function(eee){
            // console.log('reg_com_name');
            // console.log(eee);
            Vue.component(reg_com_name,eee);
            that.currentRole = reg_com_name
        });
    }
  }
};
</script>
<style>
</style>
