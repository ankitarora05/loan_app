<template>
  <div id="app-content">
    <div class="mob-app-nav">
      <AppNav></AppNav>
    </div>
    <div class="desk-app-nav">
      <AppNav></AppNav>
    </div>
    <nuxt /></div
></template>
<script>
export default {};
</script>
<style lang="scss">
html {
  font-size: 10px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;

  width: 100%;
  min-height: 100%;
}

body {
  background-color: #ffffff;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
#app-content {
  display: flex;
  justify-content: space-between;
  .aspire-main {
    flex: 1;
  }
}
@media (min-width: 1281px) {
  .mob-app-nav {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .mob-app-nav {
    display: none;
  }
}

@media (min-width: 1025px) and (max-width: 1280px) {
  .mob-app-nav {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .mob-app-nav {
    display: none;
  }
}

@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .mob-app-nav {
    display: none;
  }
}

@media (min-width: 400px) and (max-width: 767px) {
  .desk-app-nav {
    display: none;
  }
}

@media (min-width: 320px) and (max-width: 400px) {
  .desk-app-nav {
    display: none;
  }
}

@media (max-width: 320px) {
  .desk-app-nav {
    display: none;
  }
}
</style>
