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
