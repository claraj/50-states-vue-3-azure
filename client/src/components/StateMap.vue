
<template>
  <div class="state-map" v-if="state.name">
    <h2>The state of {{ state.name }}</h2>

    <p v-if="state.visited">You have visited this state</p>
    <p v-else>You have not visited this state</p>

    <div id="map-container">
      <l-map ref="map" v-on:ready="onMapReady" v-bind:zoom="state.zoom" v-bind:center="mapCenter">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors">
        </l-tile-layer>    
      </l-map>
    </div>
  </div>
</template>

<script>

import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet'  

export default {
  name: 'StateMap',
  components: { LMap, LTileLayer },
  data() {
    return {
      state: {}
    }
  },
  mounted() {
    this.state.name = this.$route.params.state
    this.fetchStateData()
  },
  methods: {
    onMapReady() {
      // Ensure map is showing the correct location - if the data is fetched 
      // from the API before the map is ready, the view may not update 
      this.$refs.map.leafletObject.setView(this.mapCenter, this.state.zoom)
    },
    fetchStateData() {
      this.$stateService.getOneState(this.state.name).then( state => {
        this.state = state
      })
      .catch( err => {
        if (err.response && err.response.status === 404) { // Not found
          this.state.name = '?'   // TODO - think about the best way to communicate this to the user
        } 
        else {  // a different error 
          alert('Sorry, error fetching data about this state')
          console.error(err)
        }
      })
    }
  },
  computed: {
      mapCenter() {
          if (!this.state.lat || !this.state.lon) {
              return [40, -80]  // roughly the center of the US

          } else {
              return [this.state.lat, this.state.lon]
          }
      }
  }
}

</script>

<style scoped>
#map-container {
  height: 30rem;
}
</style>
