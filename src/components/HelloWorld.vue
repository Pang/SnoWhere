<template>
  <div class="hello">
    <h2>Select State</h2>
    <ul>
      <li
        v-for="(state, index) in states"
        v-bind:key="index"
      >
        <router-link :to="state.abbr">{{ state.state }}</router-link>
      </li>
    </ul>
    <p style="margin-top:100px;">
      This applications uses the PowderLines API
      <a href="http://powderlin.es/api.html">http://powderlin.es/api.html</a> to find the most ideal snow in the US
    </p>
  </div>
</template>

<script>
import statesData from "../data/states.json";
export default {
  name: "HelloWorld",
  data() {
    return {
      states: statesData
    };
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
