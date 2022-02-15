<template>
  <div class="page"></div>
  <transition name="fade">
    <router-view/>
  </transition>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style>
  @font-face {
    font-family: "HelveticaNeueCyr-Medium";
    src: url('~@/assets/fonts/HelveticaNeueCyr-Medium.eot') format('eot'),
        url('~@/assets/fonts/HelveticaNeueCyr-Medium.ttf') format('ttf'),
        url('~@/assets/fonts/HelveticaNeueCyr-Medium.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "HelveticaNeueCyr-Light";
    src: url('~@/assets/fonts/HelveticaNeueCyr-Light.eot') format('eot'),
        url('~@/assets/fonts/HelveticaNeueCyr-Light.ttf') format('ttf'),
        url('~@/assets/fonts/HelveticaNeueCyr-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "HelveticaNeueCyr-LightItalic";
    src: url('~@/assets/fonts/HelveticaNeueCyr-LightItalic.eot') format('eot'),
        url('~@/assets/fonts/HelveticaNeueCyr-LightItalic.ttf') format('ttf'),
        url('~@/assets/fonts/HelveticaNeueCyr-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "HelveticaNeueCyr-Roman";
    src: url('~@/assets/fonts/HelveticaNeueCyr-Roman.eot') format('eot'),
        url('~@/assets/fonts/HelveticaNeueCyr-Roman.ttf') format('ttf'),
        url('~@/assets/fonts/HelveticaNeueCyr-Roman.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "HelveticaNeueCyr-ThinItalic";
    src: url('~@/assets/fonts/HelveticaNeueCyr-ThinItalic.ttf') format('ttf'),
        url('~@/assets/fonts/HelveticaNeueCyr-ThinItalic.woff') format('woff');
    font-weight: 400;
    font-style: italic;
  }

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  scroll-behavior: smooth;
}

body {
  min-width: 390px;
  max-width: 1440px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #1b1b1b;
}

.projects {
  background-color: #1b1b1b;
}

.about {
  background: #1b1b1b;
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.8;
}

.round {
  border-radius: 50%;
  border: 1px solid #313131;
  padding: 24px;
  cursor: pointer;
}

.arrow-right {
  display: flex;
  align-items: center;
  width: 14px;
  height: 12px;
  color: #fff;
}

</style>
