<template>
  <div class="h-full w-full bg-dark2">
    <b-container class="py-5 h-full">   
      <div class="mb-5">
        <h1 class="font-weight-bold title">Covid-19 (Corona) Viruses Update</h1>
        <div class="d-block d-md-none text-center">Last Update : 
          <font v-if="cases_by_country.statistic_taken_at">{{ cases_by_country.statistic_taken_at }}</font>
          <font v-else style="background: rgba(0,0,0,0.3); padding: 0px 80px" class="ml-2"></font>
        </div>
      </div>
      <div>
        <div class="d-flex justify-content-between align-items-end mb-2 mb-md-4">
          <h2 class="sub-title font-weight-bold">World Status</h2>
          <p class="d-none d-md-block">Last Update : {{ taken_at }}</p>
        </div>
        <carousel :margin="20" :nav="false" :items="3" :autoWidth="true" style="height: 20vh">
          <b-card class="text-white" style="width: 300px; background: #34495e; border: none">
            <h3>Total Cases</h3>
            <h5 v-if="world_total_status.total_cases" class="font-weight-bold">{{ world_total_status.total_cases }}</h5>
            <font v-else style="background: rgba(0,0,0,0.2); padding: 1px 80px"></font>
          </b-card>
          <b-card class="text-white" style="width: 300px; background: #34495e; border: none">
            <h3>Total Deaths</h3>
            <h5 v-if="world_total_status.total_deaths" class="font-weight-bold">{{ world_total_status.total_deaths }}</h5>
            <font v-else style="background: rgba(0,0,0,0.2); padding: 1px 80px"></font>
          </b-card>
          <b-card class="text-white" style="width: 300px; background: #34495e; border: none">
            <h3>Total Recovered</h3>
            <h5 v-if="world_total_status.total_recovered" class="font-weight-bold">{{ world_total_status.total_recovered }}</h5>
            <font v-else style="background: rgba(0,0,0,0.2); padding: 1px 80px"></font>
          </b-card>
          <b-card class="text-white" style="width: 300px; background: #34495e; border: none">
            <h3>New Cases</h3>
            <h5 v-if="world_total_status.new_cases" class="font-weight-bold">{{ world_total_status.new_cases }}</h5>
            <font v-else style="background: rgba(0,0,0,0.2); padding: 1px 80px"></font>
          </b-card>
          <b-card class="text-white" style="width: 300px; background: #34495e; border: none">
            <h3>New Deaths</h3>
            <h5 v-if="world_total_status.new_deaths" class="font-weight-bold">{{ world_total_status.new_deaths }}</h5>
            <font v-else style="background: rgba(0,0,0,0.2); padding: 1px 80px"></font>
          </b-card>
        </carousel>
      </div>
      <div class="mt-5">
        <div class="d-block d-md-flex justify-content-between align-items-end mb-3 mb-md-4">
          <h2 class="sub-title font-weight-bold">Cases By Country</h2>
          <p class="d-none d-md-block">Last Update : {{ cases_by_country.statistic_taken_at }}</p>
        </div>
        <div>
          <b-input type="search" v-model="search" placeholder="Search country name" class="mb-3"></b-input>
          <b-table class="rounded" style="max-height: 80vh" sticky-header head-variant="light" responsive striped hover borderless dark :fields="fields" :items="filteredList" :busy="isBusy">
            <template v-slot:table-busy>
              <div class="text-white my-4">
                <b-spinner class="align-middle mx-3"></b-spinner>
                <strong>Loading...</strong>
              </div>
            </template>
          </b-table>
        </div>
      </div>
    </b-container>
    <div class="mb-0 pb-0">
      <p class="m-0 p-4 text-center">Copyright &copy; Angga Manggala | Data's update by Astsiatsko </p>
    </div>
  </div>
</template>

<script>
import carousel from 'vue-owl-carousel'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      fields: [
        { key: 'country_name', sortable: true },
        { key: 'cases' },
        { key: 'deaths' },
        { key: 'total_recovered' },
        { key: 'new_deaths' },
        { key: 'new_cases' },
        { key: 'serious_critical' },
        { key: 'active_cases' },
        { key: 'total_cases_per_1m_population' },
      ],
      search: '',
      isBusy: false,
    }
  },
  components: {
    carousel,
  },
  computed: {
    ...mapState({
      world_total_status: state => state.world_total_status,
      cases_by_country: state => state.cases_by_country,
      taken_at: state => state.taken_at,
    }),
    filteredList() {
      if (this.cases_by_country.countries_stat) {
        return this.cases_by_country.countries_stat.filter(country => {
          return country.country_name.toLowerCase().includes(this.search.toLowerCase())
        })
      } else {
        return []
      }
    },
  },
  created () {
    this.isBusy = true
    this.getWorldTotalStatus()
    this.getCasesByCountry()
    .then(() => {
      this.isBusy = false
    })
  },
  methods: {
    ...mapActions(['getWorldTotalStatus', 'getCasesByCountry'])
  }
}
</script>
