<template>
  <div class="slogan-two">
    <aos-vue animation="fade-left" :duration="800">
      <div class="slogan-two__line-first">
        <p class="slogan-two__creates">creates</p>
        <p class="slogan-two__perfect">a perfect</p>
      </div>
    </aos-vue>
    <aos-vue animation="fade-right" :duration="800">
      <div class="slogan-two__line-second">
        <p class="slogan-two__a-perfect">creates a perfect</p>
        <p class="slogan-two__design">design</p>
      </div>
    </aos-vue>
  </div>
</template>

<script>
import './SloganTwoStyle.scss'
export default {

}
</script>