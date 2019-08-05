import Vue from 'vue';
import router from 'babel!./router/index';
import store from 'babel!./store/store';
import App from 'component!./App';
// import iView from 'iview'

// Vue.use(iView)
// import i18n from 'babel!./locale/index'

import config from 'babel!./config/index'
import routers from 'babel!./router/routers'

Vue.prototype.$config = config
Vue.prototype.$routers = routers

export default new Vue({
    el: '#app',
    template: `<router-view></router-view>`,
    router,
    store,
    // i18n,
    render: h => h(App)
});
