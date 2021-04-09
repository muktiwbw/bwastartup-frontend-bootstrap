<template>
  <div>
    <!-- Content -->
    <div class="row mb-5">
      <div class="col-9">
        <div class="cg-carousel">
          <div class="carousel-display">
            <img :src="carousel.focus" alt="">
          </div>
          <div class="carousel-thumbnail-wrapper">
            <div 
              class="carousel-thumbnail"
              v-for="image in campaign.images" :key="image.id"
              @click="shiftFocus(image)"
              :class="{ 'mod-active': carousel.focus == `${$axios.defaults.baseURL}/images/campaigns/${image.filename}` }"
            >
              <img :src="`${$axios.defaults.baseURL}/images/campaigns/${image.filename}`" alt="">
            </div>
          </div>
        </div>
      </div>
      <div class="col-3"
        style="
          background-color: var(--cl-white);
          padding: 24px;
          border-radius: var(--border-radius-xs);
          border: 1px solid var(--cl-lighter-gray);
          height: fit-content;
        "
      >
        <div>
          <!-- Project leader -->
          <div style="font-size:14px;font-weight:400;" class="mb-4">Project Leader</div>
          <div class="d-flex mb-3">
            <img :src="campaign.user.avatar == '' ? '/images/avatar.jpg' : `${$axios.defaults.baseURL}/images/users/${campaign.user.avatar}`" class="cg-ava mod-xs mr-3">
            <div class="my-auto">
              <div style="font-size:20px;font-weight:600;">{{ campaign.user.name }}</div>
              <div style="font-size:14px;font-weight:400;">{{ campaign.backers_count }} backer(s)</div>
            </div>
          </div>
          <!-- Project leader end -->
          <!-- Project perks -->
          <div class="gf-project-perks mb-3">
            <div style="font-size:14px;font-weight:600;">What you will get:</div>
            <ul>
              <li v-for="perk in campaign.perks.split('|')" :key="perk"><span>{{ perk }}</span></li>
            </ul>
          </div>
          <!-- Project perks end -->
          <div v-if="$auth.loggedIn">
            <input style="border-radius:24px;" class="form-control mb-2" type="text" placeholder="Amount in Rp" @change="formatFundAmountNumber">
            <button class="cg-btn mod-form cl-secondary" @click="fundCampaign">Fund Now!</button>
          </div>
          <div v-else>
            <button class="cg-btn mod-form cl-primary" @click="$router.push('/login')">Login to fund</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <h1 class="mb-1" style="font-size:36px;font-weight:500;">{{ campaign.name }}</h1>
        <h2 class="mb-4" style="font-size:18px;font-weight:300;">{{ campaign.highlight }}</h2>
        <div class="progress mb-2">
          <div class="progress-bar progress-bar-striped" :style="`width:${campaign.current_amount / campaign.goal_amount * 100}%`"></div>
        </div>
        <div style="font-size:24px;" class="d-flex justify-content-between mb-4">
          <div>{{ (campaign.current_amount / campaign.goal_amount * 100).toFixed(2) }}%</div>
          <div style="font-weight:600;">Rp {{ new Intl.NumberFormat('id-ID').format(campaign.goal_amount) }}</div>
        </div>
        <div style="font-size:18px;" class="project-description">
          <p v-for="paragraph in campaign.description.split('\n')" :key="paragraph">{{ paragraph }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  auth: false,
  async asyncData({ $axios, params, redirect }) {
    try {
      const campaign = await $axios.get(`/api/v1/campaigns/${params.id}`)
      
      return { campaign: campaign.data.data }
    } catch (error) {
      redirect('/not-found')
    }
  },
  data() {
    return {
      carousel: {
        focus: ''
      },
      fund: {
        amount: '',
      },
      test: {
        images: []
      }
    }
  },
  methods: {
    shiftFocus(image) {
      this.carousel.focus = `${this.$axios.defaults.baseURL}/images/campaigns/${image.filename}`
    },
    formatFundAmountNumber(e) {
      this.fund.amount = e.target.value.replace(/\D/g,'')
      e.target.value = e.target.value == '' ? '' : new Intl.NumberFormat('id-ID').format(this.fund.amount)
    },
    async fundCampaign() {
      const amount = Number.parseInt(this.fund.amount)

      try {
        await this.$axios.post(`/api/v1/campaigns/${this.$route.params.id}/back`, { amount })

        this.$router.app.refresh()
        this.$router.push('/dashboard/transactions')
      } catch (error) {
        console.log(error.response);
      }
    }
  },
  mounted() {
    this.carousel.focus = `${this.$axios.defaults.baseURL}/images/campaigns/${this.campaign.cover_image}`
    // const images = [
    //       '/images/carousel-1.jpg',
    //       '/images/carousel-2.jpg',
    //       // '/images/carousel-3.jpg',
    //       // '/images/carousel-4.png',
    //     ]
    
    // this.campaign.images = images
    // this.carousel.focus = images[0]
  }
}
</script>