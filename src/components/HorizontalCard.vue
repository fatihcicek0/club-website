<template>
  <div class="card">
    <div class="img">
      <img
        :src="require(`@/assets/img/${img}`)"
        alt="photo"
        width="360"
        height="280"
      />
    </div>
    <div class="text">
      <span class="title">{{ title }}</span>
      <span class="text-content">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    img: String,
    title: String,
    text: String,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.card {
  width: 70%;
  margin: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
}
@media only screen and (max-width: 790px) {
  .card {
    flex-direction: column;
    margin-left: -2px;
  }
}
.img img {
  border-radius: 10px;
}
.text {
  margin-left: 30px;
}
.text-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.title {
  font-size: 24px;
  font-weight: bold;
}
.text {
  font-size: 20px;
}
</style>
