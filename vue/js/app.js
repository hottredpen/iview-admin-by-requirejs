import Vue from 'vue';
import router from 'babel!./router/index';
import store from 'babel!./store/store';
import App from 'component!./App';

import { getToken ,request } from 'babel!./libs/util'

import config from 'babel!./config/index'
import routers from 'babel!./router/routers'

import iView from 'iview'
Vue.use(iView)

console.log(iView)
// 以下只是方便在vue文件内(在Vue内对象内)快速调用
Vue.prototype.$routers = routers
Vue.prototype.$request = request
Vue.prototype.$config = config

export default new Vue({
    el: '#app',
    template: `<router-view></router-view>`,
    router,
    store,
    // i18n, // 日历组件,在多语言时有问题
    render: h => h(App)
});
