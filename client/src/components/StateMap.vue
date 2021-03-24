
<template>
  <div class="state-map">
    <h2>The state of {{ state.name }}</h2>

    <p v-if="state.visited">You have visited this state</p>
    <p v-else>You have not visited this state</p>

    <div id="map-container">
      <l-map v-bind:zoom="state.zoom" v-bind:center="mapCenter">
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
    fetchStateData() {
      this.$stateService.getOneState(this.state.name).then( state => {
        this.state = state
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
