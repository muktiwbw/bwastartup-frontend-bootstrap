<template>
  <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark py-5" style="position: relative;z-index: 2;">
      <div class="container">
        <NuxtLink class="navbar-brand" to="/">GO-Fund</NuxtLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NuxtLink class="nav-link" to="/">Home <span class="sr-only">(current)</span></NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="#">Projects</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="#">Features</NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink class="nav-link" to="#">Success Stories</NuxtLink>
            </li>
          </ul>
          <ul v-if="!this.$auth.loggedIn" class="navbar-nav">
            <li class="nav-item">
              <NuxtLink to="/register" class="nav-link cg-btn mod-outline cl-hollow">Register</NuxtLink>
            </li>
            <li class="nav-item ml-3">
              <NuxtLink to="/login" class="nav-link cg-btn mod-outline cl-hollow">Login</NuxtLink>
            </li>
          </ul>
          <ul v-else class="navbar-nav">
            <!-- <li class="nav-item">
              <NuxtLink to="/dashboard/projects" class="nav-link cg-btn mod-outline cl-hollow">Dashboard</NuxtLink>
            </li> -->
            <li class="nav-item">
              <b-dropdown variant="bg-transparent text-white">
                <template #button-content class="d-flex">
                  <img 
                    :src="$auth.user.avatar == '' ? '/images/avatar.jpg' : `${$axios.defaults.baseURL}/images/users/${$auth.user.avatar}`" 
                    class="cg-ava mod-ty mr-1"
                    alt=""
                  >
                  <span class="mr-1">{{ $auth.user.name }}</span>
                </template>
                <b-dropdown-item to="/dashboard/projects">Dashboard</b-dropdown-item>
                <b-dropdown-item to="/upload">Account Setting</b-dropdown-item>
                <b-dropdown-item @click="logout">Logout</b-dropdown-item>
              </b-dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  methods: {
    async logout() {
      try {
        await this.$auth.logout()

        this.$router.push('/')
      } catch (error) {
        console.log(error.response);
      }
    } 
  }
}
</script>