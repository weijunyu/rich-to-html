<template>
  <img :src="src" :alt="alt" />
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
};
</script>
<style scoped>
img {
  width: 1rem;
}
</style>
