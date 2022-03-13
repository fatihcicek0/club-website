<template>
  <div class="home">
    <div class="navbar">
      <div class="banner">
        <div class="banner-title">Hoşgeldin</div>
        <div class="banner-btn">
          <a href="https://www.instagram.com/">bize katıl</a>
        </div>
      </div>
    </div>
    <div class="article-title">
      <h1>Etkinliklerimiz</h1>
    </div>
    <div class="article">
      <div class="article-items">
        <Card
          img="card1new.jpg"
          title="Kripto Paralar"
          text="Doç.DR. Beyhan Hilal Yaslıdağ"
        />
        <Card
          img="card2new.jpg"
          title="Finansal Okur Yazarlık"
          text="Dr. Hüseyin Selimler"
        />
        <Card
          img="card2new.jpg"
          title="Finansal Okur Yazarlık"
          text="Dr. Hüseyin Selimler"
        />
        <Card
          img="card2new.jpg"
          title="Finansal Okur Yazarlık"
          text="Dr. Hüseyin Selimler"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  name: "HomePage",
  components: {
    Card,
  },
  data() {
    return {};
  },
};
</script>
<style>
.banner {
  background-image: url("../assets/img/bannernew2.jpg");
  background-size: 100% 95%;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: -30px;
}
@media only screen and (max-width: 790px) {
  .banner {
    margin-top: -22px;
    height: 420px;
  }
}
.banner-title {
  color: #fff;
  font-weight: 500;
  font-size: 120px;
  padding: 20px;
}
@media only screen and (max-width: 790px) {
  .banner-title {
    font-size: 48px;
  }
}
.banner-btn a {
  text-decoration: none;
  font-size: 30px;
  color: white;
  border-radius: 5px;
  background-color: blue;
  padding: 10px 30px;
}

.banner-btn a:hover {
  border: 1px solid #fff;
}
.article {
  display: flex;
  justify-content: center;
  margin: 30px;
  flex-wrap: wrap;
}
.article-items {
  width: 1024px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.article-title {
  display: flex;
  justify-content: center;
}
.article-title h1 {
  width: 70%;
  padding: 20px;
  border-bottom: 1px solid #ccc;
}
</style>
