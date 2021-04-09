<template>
  <div>
    <form>
      <div class="mb-4">
        <div class="form-group">
          <label for="email">Email address</label>
          <input @keyup.enter="login" v-model="creds.email" type="email" class="form-control form-control-lg gf-form" id="email" placeholder="Enter email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input @keyup.enter="login" v-model="creds.password" type="password" class="form-control form-control-lg gf-form" id="password" placeholder="Enter password">
        </div>
      </div>
      <div class="form-action">
        <button @click="login" class="cg-btn mod-form cl-secondary">Login</button>
      </div>
    </form>
    <p class="text-center">Don't have an account? <NuxtLink to="/register" class="link-secondary">Register</NuxtLink></p>
  </div>
</template>

<script>
export default {
  auth: false,
  layout: 'auth',
  mounted() {
    this.$store.dispatch('auth-form/setFormData', { title: 'Login', description: 'Login to your account.', background: 'bg-login.jpg' })
  },
  data() {
    return {
      creds: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async login(e) {
      e.preventDefault()

      try {
        await this.$auth.loginWith('local', { data: this.creds })
        
        this.$router.push('/dashboard/projects')
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>