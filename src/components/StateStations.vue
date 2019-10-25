<template>
  <div v-if="switcher">
    <h1>{{ $route.params.state }}</h1>
    <router-link
      :to="{path: $route.params.state + '/' + station.triplet}"
      class="station"
      v-for="(station, index) in stations"
      v-bind:key="index"
      tag="div"
    >
      <b>{{ station.name }}</b><br>
      Elevation: {{ station.elevation }}
    </router-link>
  </div>
  <div v-else>
    <h1>Loading...</h1>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "StateStations",
  data() {
    return {
      stations: [],
      switcher: false
    };
  },
  mounted() {
    this.getSnowStations();
  },
  methods: {
    getSnowStations() {
      axios.get("http://api.powderlin.es/stations").then(response => {
        response.data.filter(x => {
          if (
            x.triplet.substring(
              x.triplet.indexOf(":") + 1,
              x.triplet.lastIndexOf(":")
            ) == this.$route.params.state
          ) {
            this.stations.push(x);
          }
          this.switcher = true;
        });
      });
    }
  }
};
</script>
<style scoped>
.station {
  display: inline-block;
  border: gray 2px solid;
  background-color: rgb(247, 251, 255);
  padding: 10px;
  margin: 20px;
  cursor: pointer;
}

.station:hover {
  background-color: rgb(223, 237, 255);
}
</style>