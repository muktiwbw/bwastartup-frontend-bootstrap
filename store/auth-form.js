export const state = () => ({
  form: {
    title: '',
    description: '',
    background: ''
  }
})

export const mutations = {
  SET_FORM_DATA: (state, form) => {
    state.form.title = form.title
    state.form.description = form.description
    state.form.background = form.background
  }
}

export const actions = {
  setFormData({ commit }, form) {
    commit('SET_FORM_DATA', form)
  }
}

export const getters = {
  GET_FORM_DATA: (state) => state.form
}