<template>
  <div class="cart-content" :class='{active:product.checked}'>
    <div class="p-use">
      <el-checkbox :value="product.checked" @change="redioSelect(product.id)"></el-checkbox>
      <!-- <input type="checkbox" :checked="product.checked" @change="redioSelect(product.id)"> -->
      <img :src="product.imgUrl" alt />
      <span class="p-name">{{product.name}}</span>
    </div>
    <div class="p-right">
      <span class="p-price">¥ {{product.price | numToString}}</span>
      <div class="p-count">
        <el-button @click="changeNumber({id:product.id,value:'-'})" :disabled="product.number===0">-</el-button>
        <input type="text" class="p-input" :value="product.number" @change="handleInput" />
        <el-button @click="add">+</el-button>
      </div>
      <p class="p-total">¥{{ cartTotalPrice |numToString}}</p>
      <el-button @click="delCart(product.id)">删除</el-button>

      <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
        <span :style="{fontSize:'20px'}">商品数量不能大于{{product.inventory}}</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="centerDialogVisible = false">知道了</el-button>
        </span>
      </el-dialog>
      <el-dialog title="提示" :visible.sync="center1DialogVisible" width="30%" center>
        <span :style="{fontSize:'20px'}">商品数量不能小于0</span>
        <span slot="footer" class="dialog-footer">
          <el-button type="primary" @click="center1DialogVisible = false">知道了</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CartContent",
  props: ["product"],
  data() {
    return {
      centerDialogVisible: false,
      center1DialogVisible: false
    };
  },
  computed:{
    cartTotalPrice(){
      // console.log(this.product.number)
      // if(this.product.number===0){
      //   return 0
      // }
      return this.product.number*this.product.price
    }
  },
  methods: {
    ...mapActions({
      delCart: "delCart",
      changeNumber: "changeNumber",
      redioSelect:'redioSelect'
    }),
    add() {
      if (this.product.showInventory === 0) {
        this.centerDialogVisible = true;
      } else {
        this.changeNumber({
          id: this.product.id,
          value: "+"
        });
      }
    },
   
    handleInput() {
      const num = event.target.value;
      if (num <= 0) {
        this.center1DialogVisible = true;
        event.target.value = this.product.number;
      } else if (num > this.product.inventory) {
        this.centerDialogVisible = true;
        event.target.value = this.product.number;
      } else {
        this.changeNumber({
          id: this.product.id,
          value: event.target.value
        });
        // event.target.value = this.product.number;
      }
    }
  }
};
</script>

<style lang='scss'>
.cart-content {
  display: flex;
  padding:10px;
  // justify-content: flex-start;
  margin-bottom: 10px;
  border:#ccc 1px dashed;

  img {
    margin-left: 10px;
    width: 140px;
    height: 140px;
  }
  .p-use {
    display: flex;
    align-items: flex-start;
    // flex-grow: 1;
    .p-name {
      width: 150px;
      overflow: hidden;
      text-overflow: clip;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      font-size: 16px;
      font-weight: normal;
      margin: 0;
      margin-right: 10px;
    }
  }
  .p-right {
    display: flex;
    align-items: flex-start;
    .p-price {
      margin-right: 40px;
      width: 80px;
    }
    .p-count {
      width: 140px;
      margin-right: 60px;
    }
    .p-total {
      width: 100px;
      font-weight: bold;
      margin-right: 40px;
    }
    .p-input {
      text-align: center;
      width: 34px;
      height: 34px;
    }
  }
}
.active{
  background-color: #fff4e8;
}
</style>