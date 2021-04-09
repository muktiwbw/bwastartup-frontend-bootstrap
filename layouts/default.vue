<template>
  <div>
    <Navbar />
    
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
    <section class="section-content" style="margin-top:-388px;margin-bottom:284px;position:relative;z-index:2;">
      <div class="container">
        <Nuxt />
      </div>
    </section>

    <Footer />
  </div>
</template>