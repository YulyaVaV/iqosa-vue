<template>
  <div class="next-page">
     <div class="next-page__wrapp">
       <p class="next-page__title"  @click="() => routeToCareer()">CAREER</p>
       <div class="next-page__img">
         <img src="@/assets/images/wardrobe.png" alt="" class="next-page__image">
       </div>
     </div>
  </div>
</template>

<script>
import './NextPageStyle.scss';
export default {
   methods: {
     routeToCareer() {
       this.$router.push('/career') 
     }
   }
}
</script>