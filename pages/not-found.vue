<template>
  <div>
    <div class="text-center" style="font-size:36px;font-weight:500;">Oops! Terjadi kesalahan</div>
    <div class="mb-4 text-center" style="font-size:20px;font-weight:300;">Halaman yang anda akses tidak ditemukan.</div>
    <a href="#" class="cg-btn mod-form mod-outline">Kembali</a>
  </div>
</template>

<script>
export default {
  layout: 'resolve',
  mounted() {
    this.$store.dispatch('resolve-page/setDisplayImage', '404-illustration.svg')
  }
}
</script>