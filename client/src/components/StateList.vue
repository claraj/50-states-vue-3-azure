<template>

<div>
  <state-summary 
    v-bind:totalVisited="totalVisited"
    v-bind:totalStates="totalStates"
  ></state-summary>

  <div class="state-list-container">
    <div class="state-container" v-for="state in states" v-bind:key="state.name">
        <state-detail v-bind:state="state" v-on:update-visited="updateVisited"></state-detail>   
    </div>
  </div>
</div>
</template>

<script>
import StateDetail from './StateDetail.vue'
import StateSummary from './StateSummary.vue'

export default {
  components: { 
    StateDetail,
    StateSummary
  },
  name: 'StateList',
  data() {
      return {
          states: []
      }
  },
  mounted() {
      this.fetchAllStates()
  },
  methods: {
      fetchAllStates() {
          this.$stateService.getAllStates().then(states => {
              this.states = states
          })
      },
      updateVisited(stateName, visited) {
          this.$stateService.setVisited(stateName, visited).then(response => {
              this.fetchAllStates()
          })
      }
  },
  computed: {
      totalStates() {
          return this.states.length
      },
      totalVisited() {
          let visitedCount = 0
          this.states.forEach( state => {
              if (state.visited) {
                  visitedCount++
              }
          })
          return visitedCount
      }
  }
}
</script>

<style scoped>

.state-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.state-container {
    margin: 1em;
}
</style>

