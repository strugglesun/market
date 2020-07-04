<template>
  <div class="cart-footer">
    <div class="footer-left">
      <span>
            <el-checkbox :value="selectAllCart" @change='selectAll($event)'>全选</el-checkbox>
    </span>
    <span class="p-del" @click="delSelectedProductInCart({
      type:'del',
      selectedInCart:$store.state.cartModule.selectedInCart
    })">删除选中商品</span>
    </div>
    <div class="footer-right">
      <span>已选 <span class="p-price">{{total.totalNum}}</span> 件商品</span>
    <span class="p-total">总价：<span class="p-total-price">¥{{total.totalPrice | numToString}}</span></span>
      <el-button  @click="delSelectedProductInCart({
        type:'pay',
        selectedInCart:$store.state.cartModule.selectedInCart
      })">去结算</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name:'CartFooter',
  computed:{
...mapGetters(['selectAllCart','total'])
  },
  methods: {
    ...mapActions(['selectAll','delSelectedProductInCart'])
  },
  
}
</script>

<style lang='scss'>
.cart-footer{
  display: flex;justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  border:#ccc 1px dashed;
  .p-del{
    margin-left: 30px;
    cursor: pointer;
  }
  .p-del:hover{
    color:rgb(27, 209, 87);
  }
  .p-total{
    margin:0 20px;
    
    .p-total-price{
    color:red;
font-weight: bold;
    font-size: 18px;
    }
  }
  .p-price{
    color:red;
  }
}
</style>