<template>
  <div class="projects">
    <Header />
    <HeaderMain />
    <FeaturedProj />
    <Team :onAbout="true"/>
    <Footer />
  </div> 
</template>

<script>

import HeaderMain from '../components/HeaderMain/HeaderMain.vue';
import FeaturedProj from '../components/FeaturedProj/FeaturedProj.vue';
import Footer from '../components/Footer/Footer.vue';
import Header from '../components/Header/Header.vue';
import Team from '../components/Team/Team.vue';

export default {
  name: 'Projects',
  components: {
    Header, HeaderMain, FeaturedProj, Team, Footer
  }
}
</script>

