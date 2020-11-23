<template>
  <div id="home">
    <div id="svg">
      <img id="logo-dark" src="../assets/enstantane-dark.svg" />
    </div>
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
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #000000;
  color: white;

}
#home {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#logo-dark {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#logo-dark path:nth-child(1) {
  stroke-dasharray: 20px;
}

#logo-dark path:nth-child(2) {

}

#logo-dark path:nth-child(3) {

}

#logo-dark path:nth-child(4) {

}

#logo-dark path:nth-child(5) {

}

#logo-dark path:nth-child(6) {

}

#logo-dark path:nth-child(7) {

}

#logo-dark path:nth-child(8) {

}

#logo-dark path:nth-child(9) {

}

#logo-dark path:nth-child(10) {

}
</style>
