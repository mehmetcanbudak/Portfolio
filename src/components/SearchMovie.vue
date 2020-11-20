<template>
  <form class="search">
    <input
      type="text"
      :value="movieTitle"
      @keyup="handleChange"
    />
    <input @click="handleSubmit" type="submit" value="SEARCH" />
  </form>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  name: 'Search',
  props: ['search'],
  setup({ search }, { emit }) {
    const movieTitle = ref(search);

    return {
      movieTitle,
      handleSubmit(event) {
        event.preventDefault();
        emit('search', movieTitle.value);
      },
      handleChange(event) {
        movieTitle.value = event.target.value
      }
    }
  }
};
</script>

<style scoped>

input[type="submit"] {
  margin-left: 5px;
  cursor: pointer;
  padding: 5px 15px;
  border: 1px solid transparent;
  background-color: transparent;
  color: #335cc2;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
}

input[type="submit"]:hover {
  background-color: #335cc2;
  color: #fff;
}

.search > input[type="text"]{
  min-width: 170px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 400px;
}

</style>
