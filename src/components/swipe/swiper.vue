<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
      <slot name="swiper-con"></slot>
    </div>
    <!-- 分页器 -->
    <div :class="{'swiper-pagination':pagination}"></div>
  </div>
</template>
<script>
  import './swiper.js'
  export default {
    name: "m-swipe",
    props: {
      swipeid: {
        type: String,
        default: ''
      },
      effect: {
        type: String,
        default: 'slide'
      },
      loop: {
        type: Boolean,
        default: false
      },
      direction: {
        type: String,
        default: 'horizontal'
      },
      pagination: {
        type: Boolean,
        default: true
      },
      autoplay: {
        type: Number,
        default: 5000,
      },
      paginationType: {
        type: String,
        default: 'bullets'
      }
    },
    data(){
      return {
        demo: ""
      }
    },
    mounted() {
      let that = this;
      this.demo = new Swiper('.' + that.swipeid, {
        //循环
        loop: that.loop,
        //分页器
        pagination: '.swiper-pagination',
        //分页类型
        paginationType: that.paginationType, //fraction,progress,bullets
        //自动播放
        // autoplay: that.autoplay,
        autoplay: that.autoplay,
        //方向
        direction: that.direction,
        //特效
        effect: that.effect, //slide,fade,coverflow,cube
        autoplayDisableOnInteraction: false,
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true //修改swiper的父元素时，自动初始化swiper
      })
    }
  }
</script>
<style>
  @import './swiper.min.css';
  .swiper-pagination-bullet-active {
    background: #fff;
  }
</style>
