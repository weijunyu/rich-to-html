<template>
  <img :src="srcWithBaseURL" :alt="alt" />
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
  },
  computed: {
    srcWithBaseURL() {
      // Example
      // BASE_URL = "/" or "/my-path/"
      // this.src = "assets/my-image.png" or "/assets/my-image.png"
      // output = "/assets/my-image.png" or "/my-path/assets/my-image.png"
      return `${process.env.BASE_URL || "/"}${
        this.src.startsWith("/") ? this.src.slice(1) : this.src
      }`;
    },
  },
};
</script>
<style scoped>
img {
  width: 1rem;
}
</style>
