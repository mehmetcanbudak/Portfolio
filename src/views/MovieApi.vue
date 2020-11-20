<template>
  <div class="app">
    <h1>Movie API</h1>
    <Search :search="state.search" @search="handleSearch" />
    <p class="intro">Sharing a few of our favourite movies</p>
    <div class="movies">
      <Movie v-for="movie in state.movies" :movie="movie" :key="movie.imdbID" />
    </div>
  </div>
</template>

<script>
import Search from '../components/SearchMovie';
import Movie from '../components/Movie';
import { useMovieApi } from '../hooks/movie-api.js';

export default {
  name: 'app',
  components: { Search, Movie },
  setup() {
    const state = useMovieApi();

    return {
      state,
      handleSearch(searchTerm) {
        state.loading = true;
        state.search = searchTerm;
      }
    };
  }
}
</script>

<style scoped>
.app {
  text-align: center;
}

.intro {
  font-size: large;
}

/* new css for movie component */

.header h2 {
  margin: 0;
}

.movie {
  padding: 5px 25px 10px 25px;
  max-width: 25%;
}


.movies {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
}

.search {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
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
