<template>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
    />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@600&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <title>404 not found</title>
  </head>
  <body>
  <div class="container" id="container">
    <header class="header">
      <div class="header-logo">
        404 not found
      </div>
    </header>
    <main>
      <div class="main--img">
        <img src="../assets/Scarecrow.png" alt="" width="540px" height="448px">
      </div>
      <div class="main--content">
        <h1 class="headline">I have bad news for you </h1>
        <p class="description">The page you are looking for might be removed or is temporarily unavailable</p>
        <button href="#" class="homepage-button">Back to homepage</button>
      </div>
    </main>
    <footer>
      <span>Mehmetcan Budak @ DevChallenges.io</span>
    </footer>
  </div>
  </body>
  </html>
</template>

<script>
export default {
  name: '404notfound'
}
</script>

<style scoped>
* {
  background-color: white;
  box-sizing: border-box;
  font: inherit;
  color: inherit;

}

body {
  display: flex;
  padding: 0;
  margin: 0;
  color: #333333;
  height: 100vh;
}

p {
  max-width: 600;
}

#container {
  display: grid;
  grid-template-rows: auto 1fr auto;
  max-width: 1200px;
  margin: 0 auto;
  height: 100vh;
  padding-top: 4rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

header{
  display: flex;
  text-transform: uppercase;
  font-family: 'Inconsolata', monospace;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: -0.08em;
  color: #333333;
  margin-bottom: 40px;
}

main {
  display: flex;
  align-items:center;
}

.main--content {
  flex:1;
  margin-top: 40px;
  margin-bottom: 40px;
}

.main--img {
  flex:1;
}

.main--img img{
  height: 100%;
}

.headline {
  font-family: 'Space Mono', monospace;
  font-weight: bold;
  font-size: 64px;
  line-height: 95px;
  letter-spacing: -0.035em;
  margin: 0;
  padding: 0;
  color: #333333;
}

.description {
  max-width:  600px;
  font-family: 'Space Mono', monospace;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: -0.035em;
  margin: 0;
  padding: 0;
  color: #4F4F4F;
  margin-top: 24px;
  margin-bottom: 40px;
}

.homepage-button {
  border: none;
  background: #333333;
  color: #FFFF;
  padding: 20px 40px;
  text-transform: uppercase;
  text-decoration: none;
}

footer {
  display: flex;
  justify-content: center;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin-top: 40px;
}

@media only screen and (max-width: 660px) {
  main {
    display: block;
  }
}
</style>
