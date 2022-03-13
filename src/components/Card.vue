<template>
  <div class="card">
    <div class="img">
      <img
        :src="require(`@/assets/img/${img}`)"
        alt="photo"
        width="280"
        height="400"
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
<style>
.card {
  margin: 25px;
}
.img img {
  border-radius: 10px;
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
