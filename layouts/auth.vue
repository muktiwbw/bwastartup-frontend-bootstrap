<template>
  <div
    style="
      display: flex;
      background-color: var(--cl-primary);
      width: 100vw;
      height: 100vh;
    "
  >
    <!-- The circle thingy -->
    <div class="gf-circles-wrapper" style="top: 0;right: 0;">
      <div class="gf-circle layer-1" style=" margin-top: -200px;margin-right: -200px;">
        <div class="gf-circle layer-2">
          <div class="gf-circle layer-3">
            <div class="gf-circle layer-4">
              <div class="gf-circle layer-5">
                <div class="gf-circle layer-6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- The circle thingy -->
    <img
      :src="form.background" alt=""
      style="
        width: 35%;
        object-fit: cover;
        border-top-right-radius: calc(var(--border-radius-sm) * 2.5);
        border-bottom-right-radius: calc(var(--border-radius-sm) * 2.5);
      " 
    >
    <div class="d-flex flex-column" style="width:100%;position:relative;z-index-2;">
      <div 
        class="m-auto"
        style="width:40%;"
      >
        <div class="cg-form" style="background:none;box-shadow:none;color:var(--cl-white);">
          <div class="form-header">
            <h1>{{ form.title }}</h1>
            <h2>{{ form.description }}</h2>
          </div>
          <div class="form-body">    
            <Nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        description: '',
        background: '',
      }
    }
  },
  mounted() {
    const formData = this.$store.getters['auth-form/GET_FORM_DATA']

    this.form = formData
  }
}
</script>