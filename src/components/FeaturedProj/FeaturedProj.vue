<template>
  <aos-vue animation="fade-up" :duration="800">
    <div class="featured">
      <div class="featured__description">
        <div class="featured__title">
          <em class="featured__title featured__title--featured">FEATURED</em>
          <p class="featured__title featured__title--project">PROJECTS</p>
        </div>
        <div class="featured__description-wrapp">
          <div class="featured__params">
            <p class="featured__params featured__params--iq">IQ</p>
            <p class="featured__params featured__params--params">-08-SL</p>
          </div>
          <div class="featured__explore">
            <p class="featured__explore-text">EXPLORE THE PROJECT</p>
            <div class="round">
              <svg class="arrow-right">
                <use :xlink:href="('#arrow-right')" />
                <symbol id="arrow-right">
                  <path d="M1.40051 5.40094H12.6005" stroke="white" stroke-linecap="square"/>
                  <path d="M8.90051 1.00095L13.4005 5.40094L8.90051 9.80094" stroke="white" fill="transparent" stroke-linecap="square"/>
                </symbol>
              </svg>
            </div>
          </div>
        </div>
        <p class="featured__location">2019,  KYIV,  Ukraine,  560M2</p>
      </div>
      <div class="featured__design">
        <img src="@/assets/images/room.png" alt="" class="featured__room">
        <div class="featured__circle">
          <svg class="featured__arrow-x">
            <use :xlink:href="('#arrow-x')" />
            <symbol id="arrow-x">
              <path opacity="0.01" fill-rule="evenodd" clip-rule="evenodd" d="M20.7838 6.00034L32.7838 26.7849L11.9992 38.7849L-0.000795841 18.0003L20.7838 6.00034Z" fill="#1C8FF8" fill-opacity="0.338428"/>
              <path d="M21.4408 19.9392L11.7413 25.5392" stroke="black" stroke-linecap="square"/>
              <path d="M12.7456 19.8787L11.0485 25.9392L17.1456 27.4997" stroke="black" stroke-linecap="square"/>
              <path opacity="0.01" fill-rule="evenodd" clip-rule="evenodd" d="M10.392 12.0012L22.392 32.7858L43.1766 20.7858L31.1766 0.00119019L10.392 12.0012Z" fill="#1C8FF8" fill-opacity="0.338428"/>
              <path d="M22.1349 19.5396L31.8344 13.9396" stroke="black" stroke-linecap="square"/>
              <path d="M26.4302 11.9791L32.5273 13.5396L30.8302 19.6001" stroke="black" stroke-linecap="square"/>
            </symbol>
          </svg>
        </div>
      </div>
    </div>
  </aos-vue>
</template>

<script>

import './FeaturedProjStyle.scss';
export default {
 
}
</script>