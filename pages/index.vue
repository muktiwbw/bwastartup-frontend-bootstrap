<template>
  <div>
    <!-- Jumbotron -->
    <div class="jumbotron gf-jumbotron">
      
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

      <div class="container">
        <div class="row">
          <div class="col-5">
            <h1 style="font-size:36px;font-weight:500;margin-bottom:26px;">Libatkan <strong class="text-highlight">Dirimu</strong> dalam mewujudkan <strong class="text-highlight">Impian</strong> mereka!</h1>
            <p class="mb-5" style="font-size:20px;font-weight:300;margin-bottom:40px;">Danai ide terbaik untuk menjadi produk nyata dan jadilah kontributor.</p>
            <a class="cg-btn mod-lg cl-secondary" href="#">Temukan Project</a>
          </div>
          <div class="col-7">
            <div class="row">
              <!-- Project thumbnail -->
              <div class="col-6" style="position:relative;z-index:1;">
                <div class="gf-project-card" style="box-shadow: 6px 8px 18px rgba(0, 0, 0, 0.1);">
                  <img class="project-image" src="~/assets/img/statics/project-image.jpg" alt="">
                  <div class="project-title">Worldwide Uno Championship</div>
                  <div class="project-highlight">Creating robotic hand for better movement.</div>
                  <div class="project-progress progress mb-2">
                    <div class="progress-bar progress-bar-striped" style="width:40%"></div>
                  </div>
                  <div class="project-detail">
                    <span>40%</span>
                    <span>Rp 100.000.000</span>
                  </div>
                </div>
              </div>
              <!-- Project thumbnail end -->
              <div class="col-6" 
                style="
                  margin-left: -18px;
                  margin-top: 42px;
                  position:relative;
                  z-index:0;
                "
              >
                <div class="row">
                  <div class="col"
                    style="
                      background-color: var(--cl-white);
                      color: var(--cl-black);
                      padding: 22px 34px;
                      border-top-right-radius: var(--border-radius-sm);
                      border-bottom-right-radius: var(--border-radius-sm);
                      box-shadow: 6px 8px 18px rgba(0, 0, 0, 0.1);
                      margin-bottom: 24px;
                    "
                  >
                    <!-- Project perks -->
                    <div class="gf-project-perks">
                      <div>Why we fit for you:</div>
                      <ul>
                        <li><span>Easy money transaction</span></li>
                        <li><span>Special services & products</span></li>
                        <li><span>Private equity shareholders</span></li>
                      </ul>
                    </div>
                    <!-- Project perks end -->
                  </div>
                  <div class="col">
                    <div 
                      style="
                        background-color: var(--cl-white);
                        color: var(--cl-black);
                        width: 216px;
                        padding: 32px 36px;
                        border-top-right-radius: var(--border-radius-sm);
                        border-bottom-right-radius: var(--border-radius-sm);
                        border-bottom-left-radius: var(--border-radius-sm);
                        margin-left: -56px;
                        box-shadow: var(--box-shadow);
                      "
                      class="d-flex flex-column"
                    >
                      <img src="~/assets/img/statics/ava-1.jpg" class="cg-ava mod-xs mod-bordered mod-o cl-primary mx-auto mb-3">
                      <div class="text-center" style="font-size:16px;font-weight:400;">Julia Keeva</div>
                      <div class="text-center mb-3" style="font-size:13px;font-weight:300;">Project Manager</div>
                      <div class="d-flex justify-content-around mb-2">
                        <img 
                          v-for="star in 5" :key="star"
                          style="width:18px;"
                          src="~assets/img/statics/star.svg" alt=""
                        >
                      </div>
                      <div style="font-size:13px;font-weight:300;" class="d-flex justify-content-between">
                        <span>5/5</span>
                        <span>208 Projects</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Instructions -->
    <section class="section-instruction">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div style="font-size:28px;font-weight:500">Hanya butuh 3 langkah untuk menjalankan ide cemerlang Anda!</div>
          </div>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-center">
            <img src="~/assets/img/statics/line-step.svg" alt="">
          </div>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-between">
            <div class="gf-instruction-step">
              <img class="step-image" src="~/assets/img/statics/step-1-illustration.svg" alt="">
              <div class="step-title">Sign Up</div>
              <div class="step-description">Daftarkan akun Anda dan mulailah mendanai project</div>
            </div>
            <div class="gf-instruction-step" style="margin-top:-96px;">
              <img class="step-image" src="~/assets/img/statics/step-2-illustration.svg" alt="">
              <div class="step-title">Buka Project</div>
              <div class="step-description">Pilih beberapa ide project, dan mulailah mendanai</div>
            </div>
            <div class="gf-instruction-step" style="margin-top:-256px;">
              <img class="step-image" src="~/assets/img/statics/step-3-illustration.svg" alt="">
              <div class="step-title">Jalankan</div>
              <div class="step-description">Saatnya buat mimpi Anda menjadi nyata</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section class="section-projects">
      <div class="container">
        <div class="d-flex justify-content-between mb-5">
          <div style="width:319px;font-size:28px;font-weight:500">Project baru yang bisa Anda kerjakan.</div>
          <a href="#">Lihat semua</a>
        </div>
        <div class="row">
          <!-- Project thumbnail -->
          <div v-for="project in 6" :key="project" class="col-4">
            <div class="gf-project-card" style="border: 1px solid var(--cl-lighter-gray);">
              <img class="project-image" src="~/assets/img/statics/project-image.jpg" alt="">
              <div class="project-title">Worldwide Uno Championship</div>
              <div class="project-highlight">Creating robotic hand for better movement.</div>
              <div class="project-progress progress mb-2">
                <div class="progress-bar progress-bar-striped" style="width:40%"></div>
              </div>
              <div class="project-detail">
                <span>40%</span>
                <span>Rp 100.000.000</span>
              </div>
            </div>
          </div>
          <!-- Project thumbnail end -->
        </div>
      </div>
    </section>

    <!-- Feedback -->
    <section class="section-feedback">
      <div class="container">
        <div style="width:420px;font-size:28px;font-weight:500">Lihat apa yang dikatakan oleh klien kami.</div>
        <div class="row">
          <div class="col-3 text-right">
            <img src="~/assets/img/statics/testimonial-line.svg" alt="" >
          </div>
          <div class="col-9">
            <div class="mt-5 mb-5">
              <p style="font-size:32px;">
                <q>Funding at Bucker is very easy and comfortable. Just need to find an idea, click, and already funding.</q>                
              </p>
            </div>
            <div class="mb-4">
              <div style="font-size:24px;font-weight:500;">Shopie Nicole</div>
              <div style="font-size:24px;font-weight:300;">Project Manager</div>
            </div>
            <div>
              <img src="~/assets/img/statics/ava-1.jpg" class="mr-3 cg-ava mod-xs mod-bordered mod-o cl-primary">
              <img src="~/assets/img/statics/ava-2.jpg" class="mr-3 cg-ava mod-xs mod-bordered mod-o cl-primary">
              <img src="~/assets/img/statics/ava-3.jpg" class="mr-3 cg-ava mod-xs mod-bordered mod-o cl-primary">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section-cta gf-cta">
      <h2 style="font-size:48px;font-weight:600;" class="text-center mb-4">
        Cara mudah untuk mendanai<br> ide dan inovasi terbaik
      </h2>
      <div class="d-flex justify-content-center">
        <a href="#" style="padding-left:64px !important;padding-right:64px !important;" class="cg-btn cl-secondary mod-lg">Mulai</a>
      </div>
    </section>    
  </div>
</template>

<script>
export default {}
</script>