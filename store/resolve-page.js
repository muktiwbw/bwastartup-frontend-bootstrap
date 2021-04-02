export const state = () => ({
  displayImage: ''
})

export const mutations = {
  SET_DISPLAY_IMAGE: (state, displayImage) => {
    state.displayImage = displayImage
  }
}

export const actions = {
  setDisplayImage({ commit, rootGetters }, displayImage) {
    const staticPath = rootGetters['paths/GET_STATIC']
    
    commit('SET_DISPLAY_IMAGE', `${staticPath}/${displayImage}`)
  } 
}

export const getters = {
  GET_DISPLAY_IMAGE: state => state.displayImage
}