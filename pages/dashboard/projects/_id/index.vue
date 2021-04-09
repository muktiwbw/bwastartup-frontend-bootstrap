<template>
  <div>
    <!-- Content -->
    <div class="row mb-5">
      <div class="col-9">
        <div class="cg-carousel">
          <div class="carousel-display">
            <img v-if="carousel.focus" :src="carousel.focus" alt="">
            <div class="d-flex justify-content-center align-items-center" v-else>
              Tidak ada gambar
            </div>
          </div>
          <div class="carousel-thumbnail-wrapper">
            <div 
              class="carousel-thumbnail"
              v-for="(image, i) in campaign.images" :key="i"
              @click="shiftFocus"
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
              <div style="font-size:14px;font-weight:400;">{{ new Intl.NumberFormat('id-ID').format(campaign.backers_count) }} backers</div>
            </div>
          </div>
          <!-- Project leader end -->
          <!-- Project perks -->
          <div class="gf-project-perks mb-3">
            <div style="font-size:14px;font-weight:600;">What will you get:</div>
            <ul>
              <li v-for="perk in campaign.perks.split('|')" :key="perk"><span>{{ perk }}</span></li>
            </ul>
          </div>
          <!-- Project perks end -->
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-9">
        <div class="mb-3" style="font-size:28px;font-weight:500;">Manage project images</div>
        <div class="mb-2"><input ref="imagesInput" type="file" @change="displayNewImages" multiple></div>
        <div>
          <div 
            v-for="(image, i) in newImages" 
            :key="i" 
            class="cg-highlight ic-select mr-2 mb-2"
            @click="setNewCoverImage(i)"
            :class="{ 'mod-active': newCoverImageIndex == i }"
          >
            <img :src="image" class="cg-thumbnail mod-sm">
          </div>
        </div>
        <div class="mb-3">Click one image to set as a cover. Leave them as it is if you don't want to change.</div>
        <div><button @click="uploadImages" class="cg-btn cl-secondary">Save</button></div>
      </div>
    </div>
    <div class="row mb-5">
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
          <p v-for="paragraph in campaign.description.split('\n')" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
    <NuxtLink class="cg-btn cl-secondary" :to="`./${$route.params.id}/edit`">Edit Project</NuxtLink>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const campaign = await $axios.get(`/api/v1/campaigns/${params.id}`)

    return { campaign: campaign.data.data }
  },
  data() {
    return {
      campaign: {},
      test: {},
      carousel: {
        focus: '',
      },
      newImages: [],
      newCoverImageIndex: -1
    }
  },
  methods: {
    shiftFocus(e) {
      this.carousel.focus = e.target.firstElementChild.getAttribute('src')
    },
    displayNewImages(e) {
      const images = e.target.files
      
      this.newImages = Array.from(images, img => URL.createObjectURL(img))
      this.newCoverImageIndex = 0
    },
    setNewCoverImage(i) {      
      this.newCoverImageIndex = this.newCoverImageIndex == i ? -1 : i
    },
    async uploadImages() {
      const form = new FormData()

      form.append('cover_index', this.newCoverImageIndex)

      for (const image of this.$refs.imagesInput.files) {
        form.append('images', image)
      }
      
      try {
        const campaignID = this.$route.params.id
        const headersOpt = { 'Content-Type': 'multipart/form-data' }

        await this.$axios.post(`/api/v1/campaigns/${campaignID}/images`, form, headersOpt)

        this.$refs.imagesInput.value=null;
        this.newImages = []
        this.newCoverImageIndex = -1

        this.$router.app.refresh()
      } catch (error) {
        console.log(error.response);
      }
    }
  },
  mounted() {
    this.carousel.focus = this.campaign.images.length >= 1 ? `${this.$axios.defaults.baseURL}/images/campaigns/${this.campaign.cover_image}` : ''

    // const images = [
    //       '/images/carousel-1.jpg',
    //       '/images/carousel-2.jpg',
    //       '/images/carousel-3.jpg',
    //       // '/images/carousel-4.png',
    //     ]
    
    // this.test.images = images
    // this.carousel.focus = images[0]
  }
}
</script>