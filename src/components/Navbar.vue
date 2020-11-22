<template lang="html">
  <nav clas="">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-start">
        <div id="">
<!--          <router-link style="text-decoration: none" :to="{ name: 'Home' }">-->
<!--            <strong><h1>Mehmetcan Budak</h1></strong>-->
<!--          </router-link>-->
        </div>
        <div class="navbar-end">
          <div id="nav">
<!--            <div class="navbar-brand">-->
<!--              <a class="navbar-item">-->
<!--                <img src="../assets/logo.png" width="36" height="36">-->
<!--              </a>-->
<!--              <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">-->
<!--                <span aria-hidden="true"></span>-->
<!--                <span aria-hidden="true"></span>-->
<!--                <span aria-hidden="true"></span>-->
<!--              </a>-->
<!--            </div>-->
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
  font-weight: bold;
  color: #2c3e50;
  //color: #194ac5;
  //color: #194ac5;
}

#nav a.router-link-exact-active {
  //color: #42b983;
  color: #335cc2;
}
</style>
