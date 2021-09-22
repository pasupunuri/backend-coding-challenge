<template>
  <div>
    <h1 class="text-2xl font-bold">
      Code Challenge: Airports
    </h1>

    <h2 class="mt-10 text-xl font-semibold">
      All Airports
    </h2>

    <div>
      <div
        v-for="airport in airports"
        :key="airport.iata"
        class="flex items-center p-5 mt-5 text-gray-800 border border-gray-200 rounded-lg shadow-sm hover:border-blue-600 focus:border-blue-600 focus:ring focus:ring-blue-200 focus:outline-none"
      >
        <div>
          {{ airport.name }}
        </div>
        <div class="ml-auto text-mono">
          {{ airport.country }}
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: center; margin-top: 20px;">
      <button v-on:click="loadAirports(currentPage - 1)" :disabled="currentPage < 2"> Prev </button>
      <span style='margin: 10px;'> {{ currentPage}}/{{totalPages }} </span>
      <button v-on:click="loadAirports(currentPage + 1)" :disabled="currentPage == totalPages"> Next </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from '~plugins/axios'

import Airport from '~types/airport'

interface Data {
  airports: Airport[],
  currentPage: number,
  totelPages: number
}

export default Vue.extend({
  data(): Data {
    return {
      airports: [],
      currentPage: 0,
      totalPages: 0
    }
  },
  mounted() {
    this.loadAirports(1)
  },
  methods: {
    async loadAirports(page : number) {
      const response = await axios.get<Airport[]>('/airports', { params: { countries: ['AT', 'CH'], page } })
      this.airports = response.data
      this.currentPage = response.headers['current-page'] * 1
      this.totalPages = response.headers['total-pages'] * 1
    },
  },
})
</script>
