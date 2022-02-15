<template>
  <aos-vue animation="fade-up" :duration="800">
    <div class="footer">
      <div class="footer__titles">

        <div class="footer__offices">
          <h6 class="footer__title">OFFICES</h6>
          <div class="footer__location-kyiv">
            <p class="footer__location-name">Kyiv</p>
            <div class="footer__address">
              <a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%A1%D0%BE%D0%BB%D0%BE%D0%BC%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F,+15+A,+%D0%9A%D0%B8%D0%B5%D0%B2,+03110/@50.4248652,30.4763221,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4cec4213cded3:0x39781b2a1f03fe2b!8m2!3d50.4248652!4d30.4785108" target="_blank" rel="noopener noreferrer" class="footer__street">
                Solomyanska st. 15a
              </a> 
            <a href="tel:+380954003835" class="footer__phone">+380954003835</a>  
            <a href="mailto:info@iqosa.com" class="footer__email">info@iqosa.com</a>  
            </div>
          </div>
          <div class="footer__location-kharkiv">
            <p class="footer__location-name">Kharkiv</p>
            <div class="footer__address">
              <a href="https://www.google.com/maps/place/%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2,+%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C/@49.994507,36.1457416,11z/data=!3m1!4b1!4m9!1m2!2m1!1sSolomyanska+st.+15a+kharkiv!3m5!1s0x4127a09f63ab0f8b:0x2d4c18681aa4be0a!8m2!3d49.9935051!4d36.2303782!15sChtTb2xvbXlhbnNrYSBzdC4gMTVhIGtoYXJraXaSAQhsb2NhbGl0eQ" target="_blank" rel="noopener noreferrer" class="footer__street">
                Solomyanska st. 15a
              </a> 
              <a href="tel:+380954003835" class="footer__phone">+380954003835</a>  
              <a href="mailto:info@iqosa.com" class="footer__email">info@iqosa.com</a>  
            </div>
          </div>
        </div>

        <div class="footer__business">
          <h6 class="footer__title">BUSINESS</h6>
          <div class="footer__career">
            <p class="footer__business-title">Career</p>
            <a href="mailto:hr@iqosa.com" class="footer__business-email">hr@iqosa.com</a>
          </div>

          <div class="footer__suppliers">
            <p class="footer__business-title">Suppliers</p>
            <a href="mailto:supply@iqosa.com" class="footer__business-email">supply@iqosa.com</a>
          </div>

          <div class="footer__cooperation">
            <p class="footer__business-title">Cooperation</p>
            <a href="mailto:pr@iqosa.com" class="footer__business-email">pr@iqosa.com</a>
          </div>
        </div>

        <div class="footer__other">
          <h6 class="footer__title">OTHERS</h6>
          <h5 class="footer__message">Don't be shy,</h5>
          <h5 class="footer__message-sub">say hi.</h5>
          <div class="footer__other-links">
            <a href="/" class="footer__other-media">Media Kit</a>
            <a href="/" class="footer__other-brief">Brief</a>
          </div>
        </div>
      </div>
      <FooterInfo />
    </div>
  </aos-vue>
</template>

<script>

import './FooterStyle.scss';
import FooterInfo from '../FooterInfo/FooterInfo.vue';

export default {
  components: {
    FooterInfo
  }
}

</script>