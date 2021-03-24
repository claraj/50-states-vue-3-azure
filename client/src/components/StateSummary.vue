<template>
  <div>    
    <h3>You have visited {{ totalVisited }} {{ units }}</h3>
    <p id="all-visited-message" v-if="allVisited">You have visited everywhere!</p>
  </div>
</template>

<script>

export default {
  name: 'StateSummary',
  props: {
    totalVisited: Number,
    totalStates: Number
  },
  computed: {
      allVisited() {
          return this.totalVisited === this.totalStates
      },
      units() {
          if (this.totalVisited === 1) {
              return 'state'
          } else {
              return 'states'
          }
      }
  }
}

</script>

<style scoped>

#all-visited-message {
    color: brown;
    font-weight: 600;
}

</style>
