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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from '~plugins/axios'

import Airport from '~types/airport'

interface Data {
  airports: Airport[];
}

export default Vue.extend({
  data(): Data {
    return {
      airports: [],
    }
  },
  mounted() {
    this.loadAirports()
  },
  methods: {
    async loadAirports() {
      const response = await axios.get<Airport[]>('/airports', { params: { countries: ['AT', 'CH'] } })
      this.airports = response.data
    },
  },
})
</script>
