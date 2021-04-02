<template>
  <div>
    <form>
      <div class="mb-4">
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
        <button class="cg-btn mod-form cl-secondary">Login</button>
      </div>
    </form>
    <p class="text-center">Don't have an account? <a href="#" class="link-secondary">Register</a></p>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  mounted() {
    this.$store.dispatch('auth-form/setFormData', { title: 'Login', description: 'Login to your account.', background: 'bg-login.jpg' })
  }
}
</script>