<template>
  <div>
    <div class="horizontal">
      <HorizontalCard
        img="card2new.jpg"
        title="Finansal Okur Yazarlık"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum nihil unde saepe assumenda blanditiis sit, labore ipsum iste perspiciatis odit modi fugit commodi nemo laudantium corrupti officiis velit enim!"
      />
    </div>
  </div>
</template>
<script>
import HorizontalCard from "../components/HorizontalCard.vue";
export default {
  name: "Activitys",
  components: {
    HorizontalCard,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
.horizontal {
  display: flex;
  padding: 20px;
  justify-content: center;
}
</style>
