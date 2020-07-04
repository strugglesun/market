import vue from 'vue'
import Vuex from 'vuex'
import productModule from './modules/product'
import cartModule from './modules/cart'
vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    productModule,
    cartModule
  },
  actions: {
    addToCart({ commit }, id) {
      commit('addToCart', id)
    },
    delCart({ commit }, id) {
      commit('delCart', id)
    },
    changeNumber({ commit }, payload) {
      commit('changeNumber', payload)
    },
    delSelectedProductInCart({commit},payload){
      commit('delSelectedProductInCart',payload)
    }
  }
})
export default store