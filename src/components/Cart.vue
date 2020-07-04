<template>
  <div class="cart" v-if="productInCart.length">
    <CartHead />
    <CartContentList />
    <CartFooter />
  </div>
</template>

<script>
import CartHead from "./CartHead";
import CartContentList from "./CartContentList.vue";
import CartFooter from './CartFooter'
import { mapState } from "vuex";
export default {
  name: "Cart",
  computed: {
    ...mapState({
      productInCart: state => state.cartModule.productInCart
    })
  },
  components: {
    CartHead,
    CartContentList,
    CartFooter
  }
};
</script>

<style>
</style>