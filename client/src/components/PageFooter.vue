<template>
<div>
  <div class="navigation-links">
    
    <span class="navigation">
      
      <!-- Router-links can use absolute paths, as strings -->
      <router-link to="/">Home</router-link>

      <!-- Or can use the name of the route, defined in the router  -->
      <!-- This is more flexible because you can change the text of the URL in router/index.js -->
      <!-- without needing to change the path in all the router-links that use it -->
      <!-- <router-link v-bind:to="{ name: 'StateList' }">Home</router-link> -->


    </span>

    <span class="navigation">
      <router-link to="/about">About this site</router-link>

      <!-- alternative, navigate by name -->
      <!-- <router-link v-bind:to="{ name: 'AboutSite' }">About this site</router-link> -->

    </span>

  </div>

  <div class="credits">
    <p>Map photo by 
      <a href="https://unsplash.com/@chrislawton?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
      Chris Lawton</a> on <a href="https://unsplash.com/photos/KpBXAOs80YI">Unsplash</a></p>

      <p><a target="_blank" href="https://icons8.com/icons/set/map">Map icon</a> icon by 
      <a target="_blank" href="https://icons8.com">Icons8</a></p>
  </div>

</div>
</template>

<script>
export default {
  name: 'PageFooter',
}
</script>

<style scoped>

.navigation {
  margin: 1em;
}

</style>

