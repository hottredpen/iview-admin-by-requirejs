<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="babel">
import 'less!./app.less';
export default {
  name: 'App'
};
</script>

<style>
html,body{
  overflow: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>