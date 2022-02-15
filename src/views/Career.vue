<template>
  <div class="about">
    <AboutHeader/>
    <Slogan />
    <Team />
    <SloganTwo />
    <AboutSlider />
    <NextPage />
  </div> 
</template>

<script>

import AboutHeader from '../components/AboutHeader/AboutHeader.vue';
import Slogan from '../components/AboutSlogan/Slogan.vue';
import Team from '../components/Team/Team.vue';
import SloganTwo from '../components/AboutSloganTwo/SloganTwo.vue';
import AboutSlider from '../components/Swiper/AboutSlider.vue';
import NextPage from '../components/AboutNextPage/NextPage.vue';

export default {
  name: 'About',
  components: {
   AboutHeader, Slogan, Team, SloganTwo, AboutSlider, NextPage
  }
}
</script>

