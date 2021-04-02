<template>
  <div
    style="
      display: flex;
      background-color: var(--cl-primary);
      width: 100vw;
      height: 100vh;
    "
  >
    <!-- The circle thingy -->
    <div class="gf-circles-wrapper"
      style="
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      "
    >
      <div class="gf-circle layer-1">
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
    <Nuxt />
  </div>
</template>