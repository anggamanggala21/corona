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
      let dateNow = new Date()
      let dateServer = new Date(payload.statistic_taken_at)
      dateNow = dateNow.setHours(dateServer.getHours() + ( dateNow.getHours() - dateServer.getHours() ))
      let date = payload.statistic_taken_at = new Date(dateNow)
      let month = date.getMonth()
      month += 1
      let hour = date.getHours()
      let minutes = date.getMinutes()
      if (month < 10) month = '0'+month
      if (hour < 10) hour = '0'+hour
      if (minutes < 10) minutes = '0'+minutes
      state.taken_at = hour + ':' + minutes + ' ' + date.getDate() + '-' + month + '-' + date.getFullYear()
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
