export const state = () => ({
  cnnEkonomi: [],
  cnnTeknologi: []
})

export const mutations = {
  ADD_NEWS (state, payload) {
    console.log('ADD_NEWS', payload)
    if (payload.from === 'ekonomi') { state.cnnEkonomi = payload.data }
    if (payload.from === 'teknologi') { state.cnnTeknologi = payload.data }
    // state.tasks = news
  }
}
