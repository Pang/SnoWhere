<template>
  <div v-if="switcher">
    <h1>{{ stationData.station_information.name }}</h1>
    <p>
      <b>Elevation:</b> {{ stationData.station_information.elevation }}<br>
      <b>Location:</b> {{ stationLocality }}<br>
      <b>Coordinates:</b> LAT: {{ stationData.station_information.location.lat }}, LNG: {{ stationData.station_information.location.lng }}<br>
    </p>
    <p
      class="recordings"
      v-for="(data, index) in stationData.data"
      :key="index"
    >
      <b>Date: {{ data.Date }}</b><br>
      Snow Water Equivalent: {{ data["Snow Water Equivalent (in)"] }}"<br>
      Change in Snow Water Equivalent: {{ data["Change In Snow Water Equivalent (in)"] }}"<br>
      Snow Depth: {{ data["Snow Depth (in)"] }}"<br>
      Change in Snow Depth: {{ data["Change In Snow Depth (in)"] }}"<br>
      Observed Air Temp (Fahrenheit): {{ data["Observed Air Temperature (degrees farenheit)"] }} <br>
      Observed Air Temp (Celsius): {{ (data["Observed Air Temperature (degrees farenheit)"] - 32) * 5/9 | slice()}}
    </p>
  </div>
  <div v-else>
    <h1>Loading...</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "StationInfo",
  data() {
    return {
      stationData: [],
      stationLocality: "",
      switcher: false
    };
  },
  mounted() {
    window.console.log(this.$route.params.station);
    this.getStationInfo();
  },
  methods: {
    getStationInfo() {
      axios
        .get(`http://api.powderlin.es/station/${this.$route.params.station}`)
        .then(response => {
          this.stationData = response.data;
          this.stationData.data.reverse();
          this.switcher = true;
          axios
            .get(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${response.data.station_information.location.lat}&longitude=${response.data.station_information.location.lng}&localityLanguage=en`
            )
            .then(response => {
              this.stationLocality = response.data.locality;
            });
        });
      window.console.log(this.stationData);
    }
  },
  filters: {
    slice: function(value) {
      value = value.toString();
      return value.slice(0, value.lastIndexOf(".") + 3);
    }
  }
};
</script>

<style scoped>
.recordings {
  display: inline-block;
  padding: 20px;
  margin: 20px;
  border: black solid 2px;
}
</style>