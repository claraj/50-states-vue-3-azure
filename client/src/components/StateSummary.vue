<template>
  <div v-if="states.length > 0">    
    <h3>You have visited {{ totalVisited }} {{ units }}</h3>
    <p id="all-visited-message" v-if="areAllVisited">You have visited everywhere!</p>
  </div>
</template>

<script>

export default {
  name: 'StateSummary',
  props: {
    states: Array,
  },
  computed: {
      totalVisited() {
          let visitedCount = 0
          this.states.forEach( state => {
              if (state.visited) {
                  visitedCount++
              }
          })
          return visitedCount
      },
      areAllVisited() {
          // totalVisited is a computed property and 
          // even though there's a method called totalVisited we have to 
          // refer to totalVisited in the same way as data or a prop, so no () 
          return this.totalVisited === this.states.length
      },
      units() {
          if (this.totalVisited === 1) {
              return 'state'
          } else {
              return 'states'
          }
      }, 
  }
}
</script>

<style scoped>

#all-visited-message {
    color: purple;
    font-weight: 600;
}

</style>
