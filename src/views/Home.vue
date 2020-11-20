<template>
  <div id="home">
    <Banner></Banner>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: { Banner }
}
import Banner from './Banner'
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
