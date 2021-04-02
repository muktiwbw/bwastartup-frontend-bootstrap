<template>
  <div class="m-auto text-center" style="width:400px;height:fit-content;position:relative;z-index:2;color:var(--cl-white);">
    <div 
      class="cg-highlight ic-edit mod-circle mb-4"
      @click="triggerProfileUpload"
    >
      <img :src="imgPreview" class="cg-ava mod-md mod-bordered mod-o cl-primary">
    </div>
    <input 
      type="file" 
      ref="profileUpload" 
      style="display:none;"
      @change="prepareProfileUpload"
    >
    <div style="font-size:36px;font-weight:500;">Hi, Julia</div>
    <div class="mb-4" style="font-size:20px;font-weight:300;">Please upload you profile picture</div>
    <button class="cg-btn mod-form cl-secondary mb-2">Sign Up Now</button>
    <a href="#" class="cg-btn mod-form mod-outline cl-hollow">Skip</a>
  </div>
</template>

<script>
export default {
  layout: 'full-blue',
  data() {
    return {
      imgPreview: require('~/assets/img/statics/avatar.jpg')
    }
  },
  methods: {
    triggerProfileUpload() {
      this.$refs.profileUpload.click()
    },
    prepareProfileUpload(e) {
      const image = e.target.files[0]
      this.imgPreview = URL.createObjectURL(image)
    }
  }
}
</script>