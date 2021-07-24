<template>
  <div class="cards-tabs-wrapper">
    <!-- <div class="card-tabs-container">
      <div
        :class="
          tabs.active ? 'card-tabs-item card-tabs-active' : 'card-tabs-item'
        "
        v-for="(tabs, idx) in tabTypes"
        :key="idx"
        @click="toggleActive(idx)"
      >
        {{ tabs.title }}
      </div>
    </div> -->

    <div class="cards-carousel-wrapper">
      <div class="card-details-action">
        <div></div>
        <div class="card-details-btn">
          <img src="~assets/images/eye.svg" alt="eye" />
          <div class="card-btn-label">Show card number</div>
        </div>
      </div>
      <carousel
        :perPage="1"
        paginationColor="#0b455c"
        paginationActiveColor="#01D167"
      >
        <slide>
          <div class="VueCarousel-slide-color-green">
            <div class="card-type-header">
              <img src="~assets/images/Logo_card.svg" alt="logo_card" />
            </div>
            <div class="card-type-name">Mark Henry</div>
            <div class="card-type-number">•••• •••• •••• <span>2020</span></div>
            <div class="card-type-info">
              <div class="card-date">Thru: 12/30</div>
              <div class="cvv-number">CVV: ***</div>
            </div>
            <div class="card-type-logo">
              <img src="~assets/images/visa_logo.svg" alt="visa logo" />
            </div>
          </div>
        </slide>
        <slide>
          <div class="VueCarousel-slide-color-purple">
            <div class="card-type-header">
              <img src="~assets/images/Logo_card.svg" alt="logo_card" />
            </div>
            <div class="card-type-name">Billy Jean</div>
            <div class="card-type-number">•••• •••• •••• <span>2020</span></div>
            <div class="card-type-info">
              <div class="card-date">Thru: 12/30</div>
              <div class="cvv-number">CVV: ***</div>
            </div>
            <div class="card-type-logo">
              <img src="~assets/images/visa_logo.svg" alt="visa logo" />
            </div>
          </div>
        </slide>
        <slide>
          <div class="VueCarousel-slide-color-blue">
            <div class="card-type-header">
              <img src="~assets/images/Logo_card.svg" alt="logo_card" />
            </div>
            <div class="card-type-name">Dylan Postl</div>
            <div class="card-type-number">•••• •••• •••• <span>2020</span></div>
            <div class="card-type-info">
              <div class="card-date">Thru: 12/30</div>
              <div class="cvv-number">CVV: ***</div>
            </div>
            <div class="card-type-logo">
              <img src="~assets/images/visa_logo.svg" alt="visa logo" />
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
</template>
<script>
import Carousel from "vue-carousel/src/Carousel.vue";
import Slide from "vue-carousel/src/Slide.vue";
export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      tabTypes: [
        {
          title: "My debit cards",
          active: true
        },
        {
          title: "All company cards",
          active: false
        }
      ]
    };
  },
  methods: {
    toggleActive(idx) {
      this.tabTypes.forEach(item => {
        item.active = false;
      });
      this.tabTypes[idx]["active"] = true;
    }
  }
};
</script>
<style lang="scss">
.cards-tabs-wrapper {
  font-size: 1.4rem;
  color: #ffffff;
}
.card-tabs-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .card-tabs-item {
    margin: 2rem;
    font-size: 1.3rem;
    padding-bottom: 0.5rem;
    cursor: pointer;
  }
  .card-tabs-active {
    border-bottom: 2px solid #23cefd;
    font-weight: bold;
  }
}
.cards-carousel-wrapper {
  max-width: 380px;
  display: inline-block;
  position: relative;
  top: -14px;
  .card-details-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    right: 5px;
    margin-right: 2rem;
    top: 2.5rem;
    .card-details-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.7rem 1.4rem 1rem;
      background: #ffffff;
      color: #01d167;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      cursor: pointer;
      .card-btn-label {
        font-size: 1.2rem;
        font-weight: bold;
        margin-left: 0.7rem;
      }
    }
  }
}

.VueCarousel {
  padding: 2rem;
}

.VueCarousel-wrapper,
.VueCarousel-pagination {
  max-width: 380px;
}
.VueCarousel-slide {
  max-width: 380px;
  height: 220px;
  border-radius: 16px;
  &:last-child {
    margin-right: 0;
  }
}
.VueCarousel-slide-color-green {
  background: #01d167;
  height: 100%;
  border-radius: 8px;
  margin: 0 0.5rem;
  padding: 2rem;
}
.card-type-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.card-type-name {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 2.2rem;
  font-weight: bold;
  margin: 3rem 0 0 0;
}
.card-type-number {
  font-size: 2.8rem;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  span {
    font-size: 1.4rem;
    margin-left: 1rem;
  }
}
.card-type-info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  .cvv-number {
    margin-left: 1.5rem;
  }
}
.card-type-logo {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.VueCarousel-slide-color-purple {
  background: #536dff;
  height: 100%;
  border-radius: 8px;
  margin: 0 0.5rem;
  padding: 2rem;
}
.VueCarousel-slide-color-blue {
  background: #23cefd;
  height: 100%;
  border-radius: 8px;
  margin: 0 0.5rem;
  padding: 2rem;
}
.VueCarousel-dot-container {
  margin-top: 0 !important;
  button {
    margin-top: 0.5rem !important;
    padding: 0.5rem !important;
  }
  .VueCarousel-dot--active {
    width: 20px !important;
    height: 10px !important;
    border-radius: 10px;
  }
}

@media (min-width: 1281px) {
  .VueCarousel {
    padding: 2rem;
  }
  .card-tabs-item {
    color: #222222;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .card-tabs-item {
    color: #222222;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .card-tabs-item {
    color: #222222;
  }
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .card-tabs-item {
    color: #222222;
  }
}

@media (min-width: 400px) and (max-width: 767px) {
  .cards-tabs-wrapper {
    text-align: center;
  }
  .cards-carousel-wrapper {
    width: 100%;
  }
  .card-tabs-item {
    color: #ffffff;
  }
}

@media (min-width: 320px) and (max-width: 400px) {
  .cards-tabs-wrapper {
    text-align: center;
  }
  .cards-carousel-wrapper {
    width: 100%;
  }
  .card-tabs-item {
    color: #ffffff;
  }
}

@media (max-width: 320px) {
  .cards-tabs-wrapper {
    text-align: center;
  }
  .cards-carousel-wrapper {
    width: 100%;
  }
  .card-tabs-item {
    color: #ffffff;
  }
}
</style>
