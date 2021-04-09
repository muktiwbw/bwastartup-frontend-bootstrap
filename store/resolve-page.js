export const state = () => ({
  displayImage: ''
})

export const mutations = {
  SET_DISPLAY_IMAGE: (state, displayImage) => {
    state.displayImage = displayImage
  }
}

export const actions = {
  setDisplayImage({ commit }, displayImage) {    
    commit('SET_DISPLAY_IMAGE', displayImage)
  } 
}

export const getters = {
  GET_DISPLAY_IMAGE: state => state.displayImage
}