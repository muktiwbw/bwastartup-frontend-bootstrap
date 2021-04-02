<template>
  <div>
    <!-- Jumbotron -->
    <div class="jumbotron gf-jumbotron straight">
      
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
    </div>

    <!-- Content -->
    <section class="section-content" style="margin-top:-388px;margin-bottom:284px;">
      <div class="container">
        <div class="row mb-5">
          <div class="col-9">
            <div class="cg-carousel">
              <div class="carousel-display">
                <img :src="require(`~/assets/img/statics/${carousel.focus}`)" alt="">
              </div>
              <div class="carousel-thumbnail-wrapper">
                <div 
                  class="carousel-thumbnail"
                  v-for="image in campaign.images" :key="image"
                  @click="shiftFocus(image)"
                  :class="{ 'mod-active': carousel.focus == image }"
                >
                  <img :src="require(`~/assets/img/statics/${image}`)" alt="">
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
                <img src="~/assets/img/statics/ava-1.jpg" class="cg-ava mod-xs mr-3">
                <div class="my-auto">
                  <div style="font-size:20px;font-weight:600;">Julia Keeva</div>
                  <div style="font-size:14px;font-weight:400;">209.000 backers</div>
                </div>
              </div>
              <!-- Project leader end -->
              <!-- Project perks -->
              <div class="gf-project-perks mb-3">
                <div style="font-size:14px;font-weight:600;">What will you get:</div>
                <ul>
                  <li><span>Easy money transaction</span></li>
                  <li><span>Special services & products</span></li>
                  <li><span>Private equity shareholders</span></li>
                </ul>
              </div>
              <!-- Project perks end -->
              <input style="border-radius:24px;" class="form-control mb-2" type="text" placeholder="Amount in Rp">
              <button class="cg-btn mod-form cl-secondary">
                Fund Now!
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <h1 class="mb-1" style="font-size:36px;font-weight:500;">Wireboard Fortune</h1>
            <h2 class="mb-4" style="font-size:18px;font-weight:300;">Era terbaru untuk keyboard mekanik yang cocok untuk semua kalangan.</h2>
            <div class="progress mb-2">
              <div class="progress-bar progress-bar-striped" style="width:40%"></div>
            </div>
            <div style="font-size:24px;" class="d-flex justify-content-between mb-4">
              <div>80%</div>
              <div style="font-weight:600;">Rp 40.000.000</div>
            </div>
            <div style="font-size:18px;" class="project-description">
              <p>
                Designed to fit your dedicated typing experience. No matter what you like, linear, clicky or a little in between, we’ve got you covered with three Gateron switches options (Blue, Brown, Red). With a lifespan of 50 million keystroke lifespan we want to make sure that you experience same feedback for every keystroke.
              </p>
              <p>
                With N-key rollover (NKRO on wired mode only) you can register as many keys as you can press at once without missing out characters. It allows to use all the same media keys as conventional macOS. 
              </p>
              <p>
                This keyboard can last up to 72 hours typing, or up to 9 days of normal use (8 hrs/day) with a 4000 mAh big battery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carousel: {
        focus: `carousel-1.jpg`
      },
      campaign: {
        images: [
          'carousel-1.jpg',
          'carousel-2.jpg',
          'carousel-3.jpg',
          'carousel-4.png',
        ]
      }
    }
  },
  methods: {
    shiftFocus(image) {
      this.carousel.focus = image
    }
  }
}
</script>