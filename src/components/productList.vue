<template>
  <div class="product-list">
    <div class="swiper-container">
    <div class="swiper-wrapper">
    <product v-for="product in products" :key="product.id" :product="product"></product>

        <!-- <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div> -->
    </div>
    <!-- 如果需要分页器 -->
    <!-- <div class="swiper-pagination"></div> -->
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"></div> -->
</div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import product from "./product";
import { mapState } from "vuex";
export default {
  name: "productList",
  computed: {
    ...mapState({
      products: state => state.productModule.products
    })
  },
  mounted(){
new Swiper ('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    slidesPerView : 4,
    effect : 'coverflow',
    // centeredSlides : true,
    // centeredSlidesBounds: true,
    // freeMode : false,
    // autoplayDisableOnInteraction:false,
// centeredSlides : true,
// touchMoveStopPropagation : false,
    // loop: true, // 循环模式选项
    autoplay: {
    delay: 1000,
    stopOnLastSlide:true,
    // disableOnInteraction: false,
    },
     
    // 如果需要分页器
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    
  })        
  },
  components: {
    product
  }
};
</script>

<style>
.product-list {
  width: 100%;
  display: flex;
  
}
.product-list .swiper-container{
    width: 100%;
  }
</style>