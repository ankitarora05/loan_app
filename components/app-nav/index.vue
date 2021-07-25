<template>
  <div class="app-nav-wrapper">
    <div class="app-desktop-nav">
      <div class="desk-nav-content">
        <img src="~assets/images/aspire_desk_logo.svg" alt="Logo desk" />
        <div class="logo-desk-sub">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </div>
        <div class="desk-nav-menu">
          <ul>
            <li>
              <img src="~assets/images/Logo_other.svg" alt="Logo nav" /> Home
            </li>
            <li class="active-nav" @click="redirectHome()">
              <img src="~assets/images/pay.svg" alt="pay" /> Cards
            </li>
            <li>
              <img src="~assets/images/Payments.svg" alt="Payments" /> Payments
            </li>
            <li><img src="~assets/images/Credit.svg" alt="Credit" /> Credit</li>
            <li>
              <img src="~assets/images/Account.svg" alt="Account" /> Settings
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-mobile-nav">
      <div class="app-mobile-nav-wrapper">
        <div class="app-mobile-nav-item">
          <div class="app-mobile-nav-image">
            <img src="~assets/images/Logo_other.svg" alt="Logo nav" />
          </div>
          <div class="app-mobile-nav-title">Home</div>
        </div>
        <div class="app-mobile-nav-item">
          <div class="app-mobile-nav-image">
            <img src="~assets/images/pay.svg" alt="pay" />
          </div>
          <div
            class="app-mobile-nav-title app-mobile-nav-active"
            @click="redirectHome()"
          >
            Cards
          </div>
        </div>
        <div class="app-mobile-nav-item">
          <div class="app-mobile-nav-image">
            <img src="~assets/images/Payments.svg" alt="Payments" />
          </div>
          <div class="app-mobile-nav-title">Payments</div>
        </div>
        <div class="app-mobile-nav-item">
          <div class="app-mobile-nav-image">
            <img src="~assets/images/Credit.svg" alt="Credit" />
          </div>
          <div class="app-mobile-nav-title">Credit</div>
        </div>
        <div class="app-mobile-nav-item">
          <div class="app-mobile-nav-image">
            <img src="~assets/images/Account.svg" alt="Account" />
          </div>
          <div class="app-mobile-nav-title">Profile</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    redirectHome() {
      this.$router.push("/");
    }
  }
};
</script>
<style lang="scss">
.app-nav-wrapper {
  .app-desktop-nav {
    width: 340px;
    height: auto;
    background: #0c365a;
    padding: 3rem;
    .desk-nav-content {
      margin-top: 2rem;
      .logo-desk-sub {
        font-size: 1.5rem;
        color: #ffffff;
        margin-top: 1.5rem;
      }
      .desk-nav-menu {
        margin-top: 2rem;
        margin-bottom: 6rem;
        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          li {
            padding: 4rem 0;
            color: #ffffff;
            cursor: pointer;
            font-size: 1.6rem;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            img {
              margin-right: 1.5rem;
            }
          }
          .active-nav {
            color: #01d167;
          }
        }
      }
    }
  }
  .app-mobile-nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.2) 0 12px 28px 0, rgba(0, 0, 0, 0.1) 0 2px 4px 0,
      rgba(255, 255, 255, 0.05) 0 0 0 1px inset;
    background: #ffffff;
    z-index: 999;
    .app-mobile-nav-wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
      cursor: pointer;
      .app-mobile-nav-item {
        text-align: center;
        color: #dddddd;
        padding: 1rem 0 0.5rem 0;
        .app-mobile-nav-title {
          font-size: 10px;
          margin-top: 0.5rem;
          font-weight: bold;
        }
      }
      .app-mobile-nav-active {
        color: #01d167;
      }
    }
  }
}
@media (min-width: 1281px) {
  .app-mobile-nav {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .app-mobile-nav {
    display: none;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .app-mobile-nav {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .app-mobile-nav {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .app-mobile-nav {
    display: none;
  }
}

@media (min-width: 400px) and (max-width: 767px) {
  .app-desktop-nav {
    display: none;
  }
}

@media (min-width: 320px) and (max-width: 400px) {
  .app-desktop-nav {
    display: none;
  }
}

@media (max-width: 320px) {
  .app-desktop-nav {
    display: none;
  }
}
</style>
