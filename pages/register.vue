<template>
  <div>
    <form>
      <div class="mb-4">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control form-control-lg gf-form" id="name" placeholder="Enter name" v-model="user.name" @keyup.enter="register">
        </div>
        <div class="form-group">
          <label for="occupation">Occupation</label>
          <input type="text" class="form-control form-control-lg gf-form" id="occupation" placeholder="Enter occupation" v-model="user.occupation" @keyup.enter="register">
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control form-control-lg gf-form" id="email" placeholder="Enter email" v-model="user.email" @keyup.enter="register">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control form-control-lg gf-form" id="password" placeholder="Enter password" v-model="user.password" @keyup.enter="register">
        </div>
      </div>
      <div class="form-action">
        <button @click="register" class="cg-btn mod-form cl-secondary">Continue</button>
      </div>
    </form>
    <p class="text-center">Already have an account? <NuxtLink to="/login" class="link-secondary">Login</NuxtLink></p>
  </div>
</template>

<script>
export default {
  auth: false,
  layout: 'auth',
  mounted() {
    this.$store.dispatch('auth-form/setFormData', { title: 'Register', description: 'Create an account.', background: 'bg-register.jpg' })
  },
  data() {
    return {
      user: {
        name: '',
        occupation: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    async register(e) {
      e.preventDefault()
      
      try {
        await this.$axios.post('/api/v1/register', this.user)
        
        this.$router.push('/login')
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>