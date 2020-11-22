<template>
  <div id="banner">
    <img src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <h2>Social Links</h2>
    <ul>
      <li><a href="https://github.com/mehmetcanbudak" target="_blank">Github</a></li>
      <li><a href="https://vercel.com/mehmetcanbudak" target="_blank">Vercel</a></li>
      <li><a href="https://twitter.com/Mehmetcan_Budak" target="_blank">Twitter</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data() {
    return {
      msg: 'Welcome!'
    }
  }
}
</script>

<style scoped lang="scss">
#banner {
  display: flex;
  //display: grid;
  flex-direction: column;
  text-align: center;
  //grid-template-rows: auto;
  color: #2c3e50;
  height: 85vh;
  justify-content: center;
  align-items: center;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  font-weight: bolder;

}

li {
  display: inline-block;
  //margin: 0 10px;
  font-weight: bolder;

}

a {
  color: #335cc2;
}
</style>
