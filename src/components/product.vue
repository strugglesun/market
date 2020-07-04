<template>
  <div class="product swiper-slide">
    <img :src="product.imgUrl" />
    <p class="p-name">{{product.name}}</p>
    <span class="p-inventory">库存剩余：{{product.showInventory}}</span>
    <p class="p-price">¥ {{product.price | numToString}}</p>
    <el-button @click="addToCart(product.id)" :disabled="product.showInventory<=0">加入购物车</el-button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "product",
  props: ["product"],
  methods: {
    ...mapActions(["addToCart"])
  }
};
</script>

<style lang='scss'>
.product:hover{
  border:1px solid red;
}
.product {
  width: 25%;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  border: 1px #ccc dashed;
  span.p-inventory {
    display: block;
    font-size: 14px;
    margin-top: 15px;
    color: #ccc;
  }
  .p-name {
    /* white-space: nowrap; */
    overflow: hidden;
    text-overflow: clip;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 16px;
    font-weight: normal;
    margin: 0;
  }
  .p-price {
    color: red;
    user-select: none;
  }
}
</style>