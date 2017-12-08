import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
import orderList from './modules/orderList'
export default new Vuex.Store({
      modules:{
         orderList
              }
	})
