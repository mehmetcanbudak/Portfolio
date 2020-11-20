<template>
  <div id="discogs_api">
    <div id="search">
      <h1>Discogs API</h1>
      <searchDiscogs></searchDiscogs>
    </div>
  </div>
</template>

<script>
import searchDiscogs from '../components/SearchDiscogs'
export default {
  name: 'DiscogsApi',
  components: { searchDiscogs }
}
</script>
s

<style>
#search {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
