<template>
  <div id="app">
    <router-link to="/"><img
        class="headerImg"
        style="width: 100%;"
        alt="Vue logo"
        src="./assets/snowMountain2.jpg"
      /></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}

.headerImg {
  max-width: 1000px;
}
</style>
