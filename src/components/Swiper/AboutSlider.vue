<template>
  <div class="about-slider">
    <swiper
      :grabCursor="true"
      :centeredSlides="false"
      :slidesPerView="'4'"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide class="swiper-slide">
        <img src="@/assets/images/marble.png" class="swiper-img"/>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src="@/assets/images/bedroom.png" class="swiper-img"/>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src="@/assets/images/kitchen.png" class="swiper-img"/>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
        <img src="@/assets/images/marble.png" class="swiper-img"/>
      </swiper-slide>
    </swiper>
    <div>
      <div class="about-slider__title">
        <p class="about-slider__desc">WE ARE A DESIGN STUDIO<br/>
          CONNECTING BRANDS TO HUMANS THROUGH</p>
        <p class="about-slider__type">DESIGN AND TECHNOLOGY</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import './AboutSliderStyle.scss';
import "swiper/swiper-bundle.min.css";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
    };
  },
};
</script>
