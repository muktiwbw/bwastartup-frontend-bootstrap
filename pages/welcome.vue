<template>
  <div>
    <div class="text-center" style="font-size:36px;font-weight:500;">Selamat Datang!</div>
    <div class="mb-4 text-center" style="font-size:20px;font-weight:300;">Akun Anda telah terdaftar di sistem.</div>
    <a href="#" class="cg-btn mod-form cl-secondary">Lanjutkan</a>
  </div>
</template>

<script>
export default {
  layout: 'resolve',
  mounted() {
    this.$store.dispatch('resolve-page/setDisplayImage', 'success-illustration.svg')
  }
}
</script>