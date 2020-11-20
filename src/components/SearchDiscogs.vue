<template>
  <div class="search">
    <input type="text" v-model="query" @keypress.enter="searchDiscogs" />
    <button @click="searchDiscogs">Search</button>
    <button @click="searchDiscogsArtist">Search Artist ID</button>
    <div id="result" v-if="result">
      <h2>Artist Name: {{ result.name }}</h2>
      <h2>Result ID: {{ result.id }}</h2>
      <h2>Resource URL: {{ result.resource_url }}</h2>
      <h2>URI: {{ result.uri }}</h2>
      <h2>Releases URL: {{ result.releases_url }}</h2>
      <h2>Images:{{ result.images }}></h2>
      <h2>Real Name: {{ result.realname }}</h2>
      <h2>Profile: {{ result.profile }}</h2>
      <h2>URL's: {{ result.urls }}</h2>
      <h2>Name Variations: {{ result.namevariations }}</h2>
      <h2>Aliases: {{ result.aliases }}</h2>
      <h2>Groups: {{ result.groups }}</h2>
      <h2>Data Quality: {{ result.data_quality }}</h2>
<!--            <h3>{{ result }}</h3>-->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      result: false,
      props: {}
    }
  },
  methods: {
    searchDiscogs: async function () {
      await fetch(
        `https://api.discogs.com/database/search?q=${this.query}&key=MelDbWCfnIPWXiqffJfE&secret=gVezXcfHyBapgYBqbuxVTaLFVchUKdWF`
      )
        .then((result) => result.json())
        .then((result) => {
          this.$set(this, 'result', result)
        })
    },
    searchDiscogsArtist: async function () {
      await fetch(`https://api.discogs.com/artists/${this.query}`)
        .then((result) => result.json())
        .then((result) => {
          this.$set(this, 'result', result)
        })
    }
  }
}
</script>

<style scoped>
.search input {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 400px;
}
.search button {
  padding: 5px 15px;
  border: 1px solid transparent;
  background-color: transparent;
  color: #335cc2;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
}
.search {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
}
.search button:hover {
  background-color: #335cc2;
  color: white;
}

@media screen and (min-width: 694px) and (max-width: 915px) {
  .movie {
    max-width: 33%;
  }
}

@media screen and (min-width: 652px) and (max-width: 693px) {
  .movie {
    max-width: 50%;
  }
}


@media screen and (max-width: 651px) {
  .movie {
    max-width: 100%;
    margin: auto;
  }
}
</style>