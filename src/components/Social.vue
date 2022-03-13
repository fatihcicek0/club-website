<template>
  <div class="img">
    <a href="#">
      <img
        :src="require(`@/assets/img/${img}`)"
        alt="photo"
        width="48"
        height="48"
      />
    </a>
  </div>
</template>
<script>
export default {
  name: "Social",
  props: {
    img: String,
  },
  data() {
    return {};
  },
};
</script>
<style>
.img a {
  text-decoration: none;
  margin: 4px;
  width: 24px;
  height: 24px;
}

@media only screen and (max-width: 600px) {
  .img a img {
    width: 36px;
    height: 36px;
  }
}
</style>
