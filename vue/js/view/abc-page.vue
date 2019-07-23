<template>
  <div>
    <component :is="currentRole"></component>
  </div>
</template>

<script lang="babel">
import { Card,Col,Button,Row } from 'iview';
import Vue from 'vue';

import test from 'component!./test';


export default {
  name: 'abc-page',
  components: {
    Card,
    ICol:Col,
    iButton:Button,
    Row,
    test
  },
  data () {
    return {
      currentRole:null
    }
  },
  created(){
    // console.log(Row)
    // console.log(test)

    // this.currentRole = 'test2'

    var that = this
    var reg_com_name = "test2"
    this.$store.sss(reg_com_name,function(eee){
        console.log('reg_com_name');
        console.log(eee);
        Vue.component(reg_com_name,eee);
        that.currentRole = reg_com_name
    });

    // this.currentRole = 'test'
  }
};
</script>
<style>
</style>
