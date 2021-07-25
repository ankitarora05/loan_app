<template>
  <div class="aspire-main">
    <div class="aspire-main-wrapper">
      <div class="header-bar">
        <div></div>
        <div class="logo-container">
          <img src="~assets/images/Logo.svg" alt="logo" />
        </div>
      </div>
      <div class="custom-wrapper">
        <div class="arpire-account-info-wrapper">
          <div class="arpire-account-info">
            <div class="title">Available balance</div>
            <div class="title-amount">
              <span class="currency">S$</span>
              <span class="currency-value">3,000</span>
            </div>
          </div>
          <div class="arpire-account-action">
            <div class="new-card-action">
              <img
                src="~assets/images/box.svg"
                class="plus-mob"
                alt="New Card"
              />
              <img
                src="~assets/images/box_plus.svg"
                class="plus-desk"
                alt="New Card"
              />
              <span class="new-card">New Card</span>
            </div>
          </div>
        </div>
        <div class="card-tabs-container">
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
        </div>
        <div class="components-wrapper">
          <div class="component-left">
            <CardsTabs></CardsTabs>
            <CardAction></CardAction>
            <div class="apply-loan-desk"><ApplyLoan></ApplyLoan></div>
          </div>
          <div class="card-accord-wrapper-desk component-right">
            <CardAccord></CardAccord>
          </div>
        </div>
      </div>
    </div>
    <div class="card-accord-wrapper-mob">
      <CardAccord></CardAccord>
    </div>
    <div class="apply-loan-mob"><ApplyLoan></ApplyLoan></div>
  </div>
</template>

<script>
import CardsTabs from "../components/cards-tabs";
import CardAction from "../components/card-actions";
import AppNav from "../components/app-nav";
import CardAccord from "../components/card-transactions";
import ApplyLoan from "../components/apply-loan";
export default {
  components: {
    CardsTabs,
    CardAction,
    AppNav,
    CardAccord,
    ApplyLoan
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
<style lang="scss" scoped>
.card-tabs-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .card-tabs-item {
    margin: 2rem;
    font-size: 1.3rem;
    padding-bottom: 0.5rem;
    cursor: pointer;
    margin-bottom: 0;
  }
  .card-tabs-active {
    border-bottom: 2px solid #23cefd;
    font-weight: bold;
  }
}
.aspire-main-wrapper {
  .header-bar {
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo-container {
      cursor: pointer;
    }
  }
}

.components-wrapper {
  display: flex;
  justify-content: space-between;
}

.arpire-account-info-wrapper {
  margin: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .arpire-account-info {
    .title {
      font-size: 1.4rem;
      font-weight: bold;
    }
    .title-amount {
      margin: 0.7rem 0;
      display: flex;
      align-items: center;
      .currency {
        background: #01d167;
        padding: 0.2rem 1rem;
        border-radius: 8px;
        font-weight: bold;
        font-size: 1.2rem;
        margin-right: 1rem;
        color: #ffffff;
      }
      .currency-value {
        font-size: 2.4rem;
        font-weight: bold;
      }
    }
  }
  .arpire-account-action {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .new-card-action {
      cursor: pointer;
      .new-card {
        font-size: 1.3rem;
        font-weight: bold;
        margin-left: 0.5rem;
      }
    }
  }
}
.apply-loan-mob {
  margin-bottom: 10rem;
}
@media (min-width: 1281px) {
  .custom-wrapper {
    flex: 1;
    margin: 6rem 3rem;
  }
  .plus-mob {
    display: none;
  }
  .plus-desk {
    display: inline-block;
  }
  .title-amount {
    color: #222222;
  }
  .arpire-account-info {
    color: #222222;
  }
  .card-accord-wrapper-mob {
    display: none;
  }
  .card-accord-wrapper-desk {
    display: block;
  }
  .aspire-main-wrapper {
    background: #ffffff;
    display: flex;
    justify-content: flex-start;
  }
  .components-wrapper {
    box-shadow: rgba(0, 0, 0, 0.2) 0 12px 28px 0, rgba(0, 0, 0, 0.1) 0 2px 4px 0,
      rgba(255, 255, 255, 0.05) 0 0 0 1px inset;
    margin: 2rem;
  }
  .header-bar {
    display: none !important;
  }
  .new-card-action {
    background: #325baf;
    padding: 0.7rem 1rem;
    border-radius: 4px;
    .new-card {
      color: #fff;
    }
  }
  .desk-app-nav {
    display: block;
  }
  .mob-app-nav {
    display: none;
  }
  .card-tabs-item {
    color: #222222;
  }
  .apply-loan-mob {
    display: none;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .custom-wrapper {
    flex: 1;
    margin: 6rem 4.5rem;
  }
  .plus-mob {
    display: none;
  }
  .plus-desk {
    display: inline-block;
  }
  .title-amount {
    color: #222222;
  }
  .arpire-account-info {
    color: #222222;
  }
  .card-accord-wrapper-mob {
    display: none;
  }
  .card-accord-wrapper-desk {
    display: block;
  }
  .aspire-main-wrapper {
    background: #ffffff;
    display: flex;
    justify-content: flex-start;
  }
  .components-wrapper {
    box-shadow: rgba(0, 0, 0, 0.2) 0 12px 28px 0, rgba(0, 0, 0, 0.1) 0 2px 4px 0,
      rgba(255, 255, 255, 0.05) 0 0 0 1px inset;
    margin: 2rem;
  }
  .header-bar {
    display: none !important;
  }
  .new-card-action {
    background: #325baf;
    padding: 0.7rem 1rem;
    border-radius: 4px;
    .new-card {
      color: #fff;
    }
  }
  .desk-app-nav {
    display: block;
  }
  .mob-app-nav {
    display: none;
  }
  .card-tabs-item {
    color: #222222;
  }
  .apply-loan-mob {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .custom-wrapper {
    flex: 1;
    margin: 6rem 4.5rem;
  }
  .plus-mob {
    display: none;
  }
  .plus-desk {
    display: inline-block;
  }
  .title-amount {
    color: #222222;
  }
  .arpire-account-info {
    color: #222222;
  }
  .card-accord-wrapper-mob {
    display: none;
  }
  .card-accord-wrapper-desk {
    display: block;
  }
  .aspire-main-wrapper {
    background: #ffffff;
    display: flex;
    justify-content: flex-start;
  }
  .components-wrapper {
    box-shadow: rgba(0, 0, 0, 0.2) 0 12px 28px 0, rgba(0, 0, 0, 0.1) 0 2px 4px 0,
      rgba(255, 255, 255, 0.05) 0 0 0 1px inset;
    margin: 2rem;
  }
  .header-bar {
    display: none !important;
  }
  .new-card-action {
    background: #325baf;
    padding: 0.7rem 1rem;
    border-radius: 4px;
    .new-card {
      color: #fff;
    }
  }
  .desk-app-nav {
    display: block;
  }
  .mob-app-nav {
    display: none;
  }
  .card-tabs-item {
    color: #222222;
  }
  .apply-loan-mob {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .custom-wrapper {
    flex: 1;
    margin: 6rem 4.5rem;
  }
  .plus-mob {
    display: none;
  }
  .plus-desk {
    display: inline-block;
  }
  .title-amount {
    color: #222222;
  }
  .arpire-account-info {
    color: #222222;
  }
  .card-accord-wrapper-mob {
    display: none;
  }
  .card-accord-wrapper-desk {
    display: block;
  }
  .aspire-main-wrapper {
    background: #ffffff;
    display: flex;
    justify-content: flex-start;
  }
  .components-wrapper {
    box-shadow: rgba(0, 0, 0, 0.2) 0 12px 28px 0, rgba(0, 0, 0, 0.1) 0 2px 4px 0,
      rgba(255, 255, 255, 0.05) 0 0 0 1px inset;
    margin: 2rem;
  }
  .header-bar {
    display: none !important;
  }
  .new-card-action {
    background: #325baf;
    padding: 0.7rem 1rem;
    border-radius: 4px;
    .new-card {
      color: #fff;
    }
  }
  .desk-app-nav {
    display: block;
  }
  .mob-app-nav {
    display: none;
  }
  .card-tabs-item {
    color: #222222;
  }
  .apply-loan-mob {
    display: none;
  }
}

@media (min-width: 400px) and (max-width: 767px) {
  .plus-mob {
    display: inline-block;
  }
  .plus-desk {
    display: none;
  }
  .title-amount {
    color: #ffffff;
  }
  .arpire-account-info {
    color: #ffffff;
  }
  .card-accord-wrapper-mob {
    display: block;
  }
  .card-accord-wrapper-desk {
    display: none;
  }
  .aspire-main-wrapper {
    background: #0c365a;
  }
  .components-wrapper {
    display: block !important;
  }
  .new-card-action {
    background: transparent;
    .new-card {
      color: #23cefd;
    }
  }
  .desk-app-nav {
    display: none;
  }
  .card-tabs-item {
    color: #ffffff;
  }
  .apply-loan-desk {
    display: none;
  }
}

@media (min-width: 320px) and (max-width: 400px) {
  .plus-mob {
    display: inline-block;
  }
  .plus-desk {
    display: none;
  }
  .title-amount {
    color: #ffffff;
  }
  .arpire-account-info {
    color: #ffffff;
  }
  .card-accord-wrapper-mob {
    display: block;
  }
  .card-accord-wrapper-desk {
    display: none;
  }
  .aspire-main-wrapper {
    background: #0c365a;
  }
  .components-wrapper {
    display: block !important;
  }
  .new-card-action {
    background: transparent;
    .new-card {
      color: #23cefd;
    }
  }
  .desk-app-nav {
    display: none;
  }
  .card-tabs-item {
    color: #ffffff;
  }
  .apply-loan-desk {
    display: none;
  }
}

@media (max-width: 320px) {
  .plus-mob {
    display: inline-block;
  }
  .plus-desk {
    display: none;
  }
  .title-amount {
    color: #ffffff;
  }
  .arpire-account-info {
    color: #ffffff;
  }
  .card-accord-wrapper-mob {
    display: block;
  }
  .card-accord-wrapper-desk {
    display: none;
  }
  .aspire-main-wrapper {
    background: #0c365a;
  }
  .components-wrapper {
    display: block !important;
  }
  .new-card-action {
    background: transparent;
    .new-card {
      color: #23cefd;
    }
  }
  .desk-app-nav {
    display: none;
  }
  .card-tabs-item {
    color: #ffffff;
  }
  .apply-loan-desk {
    display: none;
  }
}
</style>
