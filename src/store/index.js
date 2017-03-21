/**
 * Created by amgadserry on 09/03/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import User from './modules/User.store'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    User
  }
})

