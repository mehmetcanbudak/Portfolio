<template lang="html">
  <nav clas="">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-start">
        <div id="">
        </div>
        <div class="navbar-end">
          <div id="nav">
            <router-link :to="{ name: 'Home' }">Home</router-link> |
            <router-link :to="{ name: 'Movie API' }">Movie Api</router-link> |
            <router-link :to="{ name: 'Discogs API' }">Discogs Api</router-link> |
            <router-link :to="{ name: 'Giphy API' }">Giphy Api</router-link> |
            <router-link :to="{ name: 'NotFound' }">NotFound</router-link> |
            <router-link :to="{ name: 'Etc' }">Etc</router-link> |
            <router-link :to="{ name: 'Kdn' }">Kdn</router-link> |
          </div>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  text-decoration: none;
  color: white;
  font-size: 18px;
  font-weight: bold;

}

#nav a.router-link-exact-active {
  color: #335cc2;
}
</style>
