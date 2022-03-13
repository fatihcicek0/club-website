<template>
  <div class="link">
    <a :href="onClick">{{ item }}</a>
  </div>
</template>

<script>
export default {
  props: {
    item: String,
    onClick: String,
  },
  data() {
    return {};
  },
};
</script>

<style>
.link {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 4px;
}
@media only screen and (max-width: 600px) {
  .link {
    padding: 2px;
    margin: 4px;
  }
}
.link a {
  text-decoration: none;
  color: #000;
  font-size: 24px;
  font-weight: 500;
}
@media only screen and (max-width: 600px) {
  .link a {
    font-size: 12px;
  }
}
.link:hover {
  box-shadow: 2px 4px #888;
}
</style>
