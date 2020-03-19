<template>
  <div class="h-full w-full bg-dark2">
    <b-container class="py-5 h-full">   
      <div class="mb-5">
        <h1 class="font-weight-bold title">Covid-19 (Corona) Viruses Update</h1>
        <div class="d-block d-md-none text-center">Last Updated : 
          <font v-if="taken_at">{{ taken_at }}</font>
          <font v-else style="background: rgba(0,0,0,0.3); padding: 0px 80px" class="ml-2"></font>
        </div>
      </div>
      <div>
        <div class="d-flex justify-content-between align-items-start mb-2 mb-md-3">
          <h2 class="sub-title font-weight-bold">World Status</h2>
          <div class="d-none d-md-block">Last Updated : 
            <font v-if="taken_at">{{ taken_at }}</font>
            <font v-else style="background: rgba(0,0,0,0.3); padding: 0px 80px" class="ml-2"></font>
          </div>
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
        <div class="d-block d-md-flex justify-content-between align-items-start mb-3 mb-md-3">
          <h2 class="sub-title font-weight-bold">Cases By Country</h2>
          <div class="d-none d-md-block">Last Updated : 
            <font v-if="taken_at">{{ taken_at }}</font>
            <font v-else style="background: rgba(0,0,0,0.3); padding: 0px 80px" class="ml-2"></font>
          </div>
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
      <div class="mt-5">
        <hr>
        <div>          
          <h2 class="font-weight-bold mb-4">What is Covid-19 ?</h2>
          <p style="text-align: justify"><b>Coronavirus Disease 2019 (COVID-19)</b> is a virus that emerged in the city of Wuhan, China and has now spread throughout the world. This virus was opened taken from animals sold in the Wuhan city market. Now this virus is very feared all over the world because there have been thousands of people who died from this virus. Most countries in the world are currently taking steps to prevent the spread of this virus and the people are encouraged to stay at home to avoid the spread of Covid-19 (Corona) Viruses.</p>          
        </div>

        <h3 class="font-weight-bold my-5">Covid-19 ( Corona ) Viruses Realtime Updated Informations</h3>

        <h2 class="sub-title font-weight-bold">Keywords</h2>
        <div style="margin: 0px -10px">
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">Covid-19</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">Corona</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">Viruses</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">Corona Viruses</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">Corona Spread</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">Informations</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">News</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">Realtime</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">World</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">World Cases</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">Cases By Country</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">Corona Cases</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">Covid-19 Updated</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">Covid-19 Viruses lates Informations</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">Healty</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">Save World</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">Disaster</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">Viruses Monitoring</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">Covid-19 Monitoring</p>
          <p class="rounded py-1 px-2 m-2 float-left" style="background: #34495e">People</p>
        </div>        
        <div style="clear: both">
          <br><br>
          <h4 class="font-weight-bold">Corona Viruses Monitoring</h4>
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
