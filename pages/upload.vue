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
    <div style="font-size:36px;font-weight:500;">Hi, {{ $auth.user.name }}</div>
    <div class="mb-4" style="font-size:20px;font-weight:300;">Please upload you profile picture</div>
    <button @click="updateAvatar" class="cg-btn mod-form cl-secondary mb-2">Sign Up Now</button>
    <NuxtLink to="/dashboard/projects" class="cg-btn mod-form mod-outline cl-hollow">Skip</NuxtLink>
  </div>
</template>

<script>
export default {
  layout: 'full-blue',
  data() {
    return {
      imgPreview: '/images/avatar.jpg'
    }
  },
  methods: {
    triggerProfileUpload() {
      this.$refs.profileUpload.click()
    },
    prepareProfileUpload(e) {
      const image = e.target.files[0]
      this.imgPreview = URL.createObjectURL(image)
    },
    async updateAvatar() {
      const form = new FormData()
      form.append('avatar', this.$refs.profileUpload.files[0])
      
      const axiosHeaders = { 'Content-Type': 'multipart/form-data' }

      try {
        await this.$axios.post('/api/v1/update-avatar', form, axiosHeaders)
        await this.$auth.fetchUser()

        this.$router.push('/dashboard/projects')
      } catch (error) {
        console.log(error.response);
      }
    }
  }
}
</script>