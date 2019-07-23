import Vue from 'vue'
import Vuex from 'vuex'

import user from 'babel!./module/user'
import app from 'babel!./module/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app
  }
})

// import Vue from 'vue';
// import Vuex from 'vuex';

// Vue.use(Vuex);

// export default new Vuex.Store({
//     state: {
//         message: 'helloworld',
//     },
// });
