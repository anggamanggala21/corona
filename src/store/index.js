import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    world_total_status: [],
    cases_by_country: [],
    taken_at: '',
  },
  mutations: {
    SET_WORLD_TOTAL_STATUS(state, payload) {
      state.world_total_status = payload
      state.taken_at = payload.statistic_taken_at
    },
    SET_CASES_BY_COUNTRY(state, payload) {
      state.cases_by_country = payload
    },
  },
  actions: {
    getWorldTotalStatus({commit}) {
      return new Promise((resolve, reject) => {
        axios.get('https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php', {
          headers: {
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key":"c9527ba4aamsh962f604ae95ed62p1ee976jsnf15599114326"
          }
        })
        .then((res) => {        
          commit('SET_WORLD_TOTAL_STATUS', res.data)
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
      })
    },
    getCasesByCountry({commit}) {
      return new Promise((resolve, reject) => {
        axios.get('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php', {
          headers: {
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
            "x-rapidapi-key":"c9527ba4aamsh962f604ae95ed62p1ee976jsnf15599114326"
          }
        })
        .then((res) => {        
          commit('SET_CASES_BY_COUNTRY', res.data)
          resolve(res.data)
        })
        .catch((err) => {
          reject(err)
        })
      })
    }
  },
  modules: {
  }
})
