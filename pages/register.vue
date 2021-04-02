<template>
  <div>
    <form>
      <div class="mb-4">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control form-control-lg gf-form" id="name" placeholder="Enter name">
        </div>
        <div class="form-group">
          <label for="occupation">Occupation</label>
          <input type="text" class="form-control form-control-lg gf-form" id="occupation" placeholder="Enter occupation">
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control form-control-lg gf-form" id="email" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control form-control-lg gf-form" id="password" placeholder="Enter password">
        </div>
      </div>
      <div class="form-action">
        <button class="cg-btn mod-form cl-secondary">Continue</button>
      </div>
    </form>
    <p class="text-center">Already have an account? <a href="#" class="link-secondary">Login</a></p>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  mounted() {
    this.$store.dispatch('auth-form/setFormData', { title: 'Register', description: 'Create an account.', background: 'bg-register.jpg' })
  }
}
</script>