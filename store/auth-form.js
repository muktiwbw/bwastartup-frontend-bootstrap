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
  setFormData({ commit, rootGetters }, form) {
    const staticPath = rootGetters['paths/GET_STATIC']

    form.background = `${staticPath}/${form.background}`
    console.log(form);
    commit('SET_FORM_DATA', form)
  }
}

export const getters = {
  GET_FORM_DATA: (state) => state.form
}