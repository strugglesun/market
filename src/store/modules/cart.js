const cartModule = {
  state: () => ({
    productInCart: [],
    CartNum: {

    },
    selectedInCart:[]
  }),
  getters: {
    productListInCart(state, getters, rootState) {
      return state.productInCart.map(id => ({
        ...rootState.productModule.products.find(item => item.id === id),
        number: state.CartNum[id],
        checked:state.selectedInCart.includes(id)
        
      }))
    },
    selectAllCart(state,getters){
      return getters.productListInCart.every(item=>item.checked)
    },
    total(state,getters){
      return getters.productListInCart.reduce((res,item)=>({
            totalNum:res.totalNum+(item.checked?item.number:0),
            totalPrice:res.totalPrice+(item.checked?item.number*item.price:0)
      }),{totalNum:0,totalPrice:0})
    }
  },
  mutations: {
    addToCart(state, id) {
      if (!state.productInCart.includes(id)) {
        state.productInCart.push(id)
        state.selectedInCart.push(id)
        state.CartNum = { [id]: 1, ...state.CartNum }
      } else {
        state.CartNum[id]++
      }
    },
    delCart(state, id) {
      state.productInCart = state.productInCart.filter(item => item != id)
      delete state.CartNum[id]
      console.log(111)
    },
    changeNumber(state, payload) {
      if (payload.value === '+') {
        state.CartNum[payload.id]++
      } else if (payload.value === '-') {
        state.CartNum[payload.id]--
      } else {
        state.CartNum[payload.id] = payload.value * 1
      }
    },
    redioSelect(state,id){
      const ind=state.selectedInCart.indexOf(id)
      if(ind<0){
        state.selectedInCart.push(id)
      }else{
        state.selectedInCart.splice(ind,1)
      }
    },
    selectAll(state,payload){
      state.selectedInCart=payload?state.productInCart:[]
    },
    delSelectedProductInCart(state,payload){
      state.productInCart=state.productInCart.filter(item=>!payload.selectedInCart.includes(item))
      payload.selectedInCart.forEach(item => {
        if(state.CartNum[item]!=undefined){
          delete state.CartNum[item]
        }
      });
      state.selectedInCart=[]
      console.log(111)
    }
  },
  actions:{
    redioSelect({commit},id){
      commit('redioSelect',id)
    },
    selectAll({commit},payload){
      commit('selectAll',payload)
    },
    

  }

}
export default cartModule

