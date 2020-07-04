<template>
  <div class="cart-content-list">
    <CartContent v-for="item in productListInCart" :product="item" :key="item.id" />
  </div>
</template>

<script>
import CartContent from "./CartContent";
import { mapGetters } from "vuex";
export default {
  name: "CartContentList",
  computed: {
    ...mapGetters(["productListInCart"])
  },
  components: {
    CartContent
  }
};
</script>

<style>
</style>