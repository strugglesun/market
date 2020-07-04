<template>
  <div class="cart-head">
    <span>
      <el-checkbox :value="selectAllCart" @change='selectAll($event)'>全选</el-checkbox>
      <!-- <input type="checkbox" :checked="selectAllCart" @change='selectAll($event)'> -->
    </span>
    <span>商品</span>
    <span>单价</span>
    <span>数量</span>
    <span>小计</span>
    <span>操作</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "CartHead",
  computed: {
    ...mapGetters(['selectAllCart'])
  },
  methods: {
    ...mapActions(['selectAll']),
    
  },
};
</script>

<style lang='scss'>
.cart-head {
  padding-right: 30px;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}
</style>