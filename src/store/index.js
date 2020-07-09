import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.sessionStorage
})

Vue.use(Vuex);

let api_url = 'https://server-nanime-scraper-api.herokuapp.com/'
// if(process.env.NODE_ENV === 'development') {
//   api_url = process.env.VUE_APP_API_PRODUCTION
// } else {
//   api_url = process.env.VUE_APP_API_PRODUCTION
// }

export default new Vuex.Store({
  state: {
    loading: false,
    animes:[],
    pages:[],
    anime:{},
    episode:{},
    anime_search:'',
    // page:'',
  },
  getters:{
    getAnimes(state) {
      return state.animes 
    },
    getAnime(state){
      return state.anime
    },
    getPages(state){
      return state.pages
    },
    // getPage(state){
    //   return state.page
    // },
    getEpisode(state){
      return state.episode
    },
    getAnimeSearch(state){
      return state.anime_search
    }
  },
  mutations: {
    setLoading: (state, payload) => {
      return state.loading = payload
    },
    setAnimes: (state, payload) => {
      return state.animes = payload
    },
    setAnime: (state, payload) => {
      return state.anime = payload
    },
    setPages: (state, payload) => {
      return state.pages = payload
    },
    // setPage: (state, payload) => {
    //   return state.page = payload
    // },
    setEpisode:(state, payload) => {
      return state.episode = payload
    },
    setAnimeSearch:(state, payload) => {
      return state.anime_search = payload
    }
  },
  actions: {
    retrieveAnimes:({commit}, payload) => {
      commit('setAnimeSearch', payload)
      commit('setLoading', true)
      return fetch(`${api_url}api/search/${payload}`)
        .then(res => res.json())
        .then(result => {
          commit('setAnimes', result.animes)
          commit('setPages', result.pages)
          commit('setLoading', false)
          return result;
        })
        .catch((error) => {
          return error
        })
    },
    retrieveAnimesPerPage:({commit}, payload) => {
      commit('setPage', payload.page)
      commit('setLoading', true)
      return fetch(`${api_url}api/search/${payload.anime_name}/${payload.page}`)
        .then(res => res.json())
        .then(result => {
          commit('setAnimes', result.animes)
          commit('setPages', result.pages)
          return result;
        })
    },
    retrieveAnime:({commit}, payload) => {
      commit('setLoading', true)
      return fetch(`${api_url}api/animes/${payload.type}/${payload.link_name}`)
        .then(res => res.json())
        .then(result => {
          commit('setAnime', result)
          return result;
        })
    },
    retrieveEpisode:({commit}, payload) => {
      commit('setLoading', true)
      return fetch(`${api_url}api/watch/${payload}`)
        .then(res => res.json())
        .then(result => {
          commit('setEpisode', result)
          return result;
        })
    },
    changeLoading:({commit}, payload) => {
      commit('setLoading', payload)
    },
    saveNameSeach:({commit}, payload) => {
      commit('setAnimeSearch', payload)
    }
  },
  modules: {
  },
  plugins:[vuexLocal.plugin]
});
