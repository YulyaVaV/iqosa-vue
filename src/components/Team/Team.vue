<template>
  <aos-vue animation="fade-up" :duration="800">
    <kinesis-container>
      <div class="team" id="team">
        <div class="team__wrapp">
          <kinesis-element>
            <div class="team__person">
              <img src="@/assets/images/person1.png" alt="" class="team__person" :data-depth='0.9'>
            </div>
          </kinesis-element>
          <kinesis-element :strength="10" type="depth">
            <div class="team__person">
              <img src="@/assets/images/person2.png" alt="" class="team__person" :data-depth='0.7'>
            </div>
        </kinesis-element>
        <kinesis-element >
          <div class="team__person">
            <img src="@/assets/images/person3.png" alt="" class="team__person">
          </div>
        </kinesis-element>
        </div>

        <div v-if="onAbout" class="team__caption">
          <p class="team__caption-about">ABOUT</p>
          <p class="team__caption-team">TEAM</p>
        </div>

        <div class="team__inner">
          <kinesis-element :strength="10" type="depth">
            <div>
              <img src="@/assets/images/person7.png" alt="" class="team__photo">
            </div>
          </kinesis-element>
          <div class="team__container">
            <div class="team__title">
              <p class="team__title-firstline"> Lorem ipsum dolor</p>
              <p class="team__title-twoline">amet, consectetur </p>
              <p class="team__title-threeline">adipiscing elit.</p>
            </div>
            <div class="team__discover">
              <div v-if="onAbout" class="team__discover-text">discover more</div>
              <div v-else class="team__discover-text">WATCH THE FILM</div>
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
          <div class="team__photo">
            <kinesis-element :strength="10" type="depth">
            <img src="@/assets/images/person4.png" alt="" class="team__photo" />
            </kinesis-element>
            <p v-if="onAbout" class="team__photo-desc">Nikita Ryazhko, Lead designer</p>
            <p v-else class="team__photo-descr">Lorem ipsum dolor sit amet<br/> consectetur adipisicing elit, sed do<br/> eismod tempor.</p>
          </div>
        </div>
        <div class="team__holder">
          <kinesis-element>
            <div class="team__people-bottom">
              <img src="@/assets/images/person6.png" alt="" class="team__people" id="parallax">
            </div>
          </kinesis-element>
          <kinesis-element :strength="10" type="depth">
            <div class="team__people">
              <img src="@/assets/images/person5.png" alt="" class="team__people">
            </div>
          </kinesis-element>
        </div>
      </div>
    </kinesis-container>
  </aos-vue>
</template>

<script>
import './TeamStyle.scss';
import { KinesisContainer, KinesisElement} from 'vue-kinesis';

export default {

data() {
  return {
    props: ["onAbout"]
    }
  },
  components: {
    KinesisContainer, KinesisElement
  }
}
</script>
