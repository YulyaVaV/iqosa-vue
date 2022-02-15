<template>
  <div class="slogan">
    <aos-vue animation="fade-right" :duration="800">
      <div class="slogan__line-first">
        <p class="slogan__creates">creates</p>
        <p class="slogan__perfect">a perfect</p>
      </div>
    </aos-vue>
    <aos-vue animation="fade-left" :duration="800">
      <div class="slogan__line-second">
        <p class="slogan__a-perfect">a perfect</p>
        <p class="slogan__design">design</p>
      </div>
    </aos-vue>
  </div>
</template>

<script>
import './SloganStyle.scss'
export default {

}
</script>