<template>
  <div
    style="
      display: flex;
      width: 100vw;
      height: 100vh;
      background-color: var(--cl-white);
    "
  >
    <div
      class="m-auto"
      style="
        width: 520px;
      "
    >
      <img 
        class="mb-4" 
        style="width:100%;" 
        :src="`/images/${displayImage}`" alt=""
      >
      <div style="padding: 0 36px;">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayImage: ''
    }
  },
  mounted() {
    const fullPath = this.$store.getters['resolve-page/GET_DISPLAY_IMAGE']
    
    this.displayImage = fullPath
  }
}
</script>