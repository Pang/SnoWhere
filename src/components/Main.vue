<template>
  <div class="hello">
    <h2>Select State</h2>
    <select @change="changeState()" v-model="selectedPriority">
      <option v-for="state in states" v-bind:key="state.abbr">
        {{ state.abbr }} : {{ state.state }}
      </option>
    </select><br>
    <router-link :to="selectedState">
      <button>Find Stations</button>
    </router-link>

    <p style="margin-top:100px;">
      This applications uses the PowderLines API
      <a href="http://powderlin.es/api.html">http://powderlin.es/api.html</a> to find the most ideal snow in the US
    </p>
  </div>
</template>

<script>
import statesData from "../data/states.json";
export default {
  name: "Main",
  data() {
    return {
      states: statesData,
      selectedPriority: "CO : Colorado",
      selectedState: "CO"
    };
  },
  props: {
    msg: String
  },
  methods: {
    changeState() {
      window.console.log("selectedPriority");
      this.selectedState = this.selectedPriority.slice(0, 2);
    }
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
