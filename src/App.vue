<template>
  <div id="app">
    <div class="header">
      <div class="logo">
        <img src="./assets/img/logo.jpg" alt="photo" width="120" height="120" />
      </div>
      <div class="menu">
        <MenuLink item="Anasayfa" onClick="#/" />
        <MenuLink item="Hakkımızda" onClick="#/about" />
        <MenuLink item="Etkinlikler" onClick="#/activitys" />
        <MenuLink item="İletişim" onClick="#/contact" />
      </div>
      <div class="social">
        <Social img="instagram.jpg" />
        <Social img="mail.jpg" />
      </div>
    </div>
    <router-view></router-view>
    <div class="footer">
      <div class="logo">
        <img src="./assets/img/logo.jpg" alt="photo" width="120" height="120" />
      </div>
      <div class="menu">
        <MenuLink item="Anasayfa" />
        <MenuLink item="Hakkımızda" />
        <MenuLink item="Etkinlikler" />
        <MenuLink item="İletişim" />
      </div>
      <div class="social">
        <Social img="instagram.jpg" />
        <Social img="mail.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import MenuLink from "./components/MenuLink.vue";
import Social from "./components/Social.vue";
export default {
  name: "App",
  components: {
    MenuLink,
    Social,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
body {
  margin: 0;
  padding: 0;
}
.menu {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

@media only screen and (max-width: 790px) {
  .menu {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
  border-bottom: 1px solid #ccc;
}
@media only screen and (max-width: 790px) {
  .logo img {
    width: 90px;
    height: 90px;
  }
}
.social {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}
@media only screen and (max-width: 790px) {
  .social {
    flex-direction: column;
  }
}
.footer {
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
}
</style>
