export const state = () => ({
  statics: '_nuxt/assets/img/statics'
})

export const getters = {
  GET_STATIC: state => state.statics
}