const state = () => ({
  showDrafPreviewBanner: false,
  pagesSlugs: [],
})

const mutations = {
  showBanner(state) {
    state.showDrafPreviewBanner = true
  },
  setPagesSlugs(state, slugs) {
    state.pagesSlugs = slugs
  },
}

const actions = {
  async nuxtServerInit({dispatch,commit}, { $sanity }) {
      await dispatch('sanity/fetchSiteSettings')
      
      const pagesSlugs = await $sanity
      .fetch('*[_type == "pages"].slug.current')
      .catch((e) => console.error(e))
      commit('setPagesSlugs', pagesSlugs)
  },
};

export default {
  actions,
  state,
  mutations
}