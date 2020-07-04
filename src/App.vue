<template>
  <div id="app">
    <h3>猜你喜欢</h3>
    <productList />
    <Cart />
  </div>
</template>

<script>
import productList from "./components/productList";
import Cart from "./components/Cart";
export default {
  name: "app",
  components: {
    productList,
    Cart
  }
};
</script>

<style>
#app {
  width: 900px;
  margin: 0 auto;
  /* background-color: #ccc; */
}
</style>
