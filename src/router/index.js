import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TwitterClone from '../views/TwitterClone'
import MovieApi from '../views/MovieApi'
import DiscogsApi from '../views/DiscogsApi'
import GiphyApi from '../views/GiphyApi'
import Etc from '../views/Etc'
import Kdn from '../views/Kdn'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/twitter_clone',
    name: 'Twitter Clone',
    component: TwitterClone
  },
  {
    path: '/movie_api',
    name: 'Movie API',
    component: MovieApi
  },
  {
    path: '/discogs_api',
    name: 'Discogs API',
    component: DiscogsApi
  },
  {
    path: '/giphy_api',
    name: 'Giphy API',
    component: GiphyApi
  },
  {
    path: '/etc',
    name: 'Etc',
    component: Etc
  },
  {
    path: '/kdn',
    name: 'Kdn',
    component: Kdn
  }
]

const index = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default index
