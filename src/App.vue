<template>
  <div id='app'>
    <div>
      <input type='text' placeholder='City or country name' v-model='currentLocation' @keyup.enter='addLocation()'>
      <button @click='addLocation()'>Add</button>
    </div>
    <weather-block v-if='currentLocation' :location='currentLocation' :removable='false'></weather-block>
    <div class='location-empty' v-else>
      <span>Type something to see the widget...</span>
    </div>
    <hr>
    <weather-block v-for='(loc, index) in locations' :key='index' :location='loc' :removable='true' v-on:destroyWidget='deleteLocation(index)'></weather-block>
    <!--<router-link v-bind:to="'/'">Home</router-link>
    <router-link v-bind:to="'/about'">Abotu</router-link>
    <router-view></router-view>-->
  </div>
</template>

<script>
import weatherBlock from './components/WeatherBlock/WeatherBlock'

export default {
  name: 'app',
  beforeMount: function () {
    this.loadLocations()
  },
  data: function () {
    return {
      currentLocation: '',
      locations: ['Kharkiv']
    }
  },
  methods: {
    loadLocations: function () {
      if (localStorage && localStorage.getItem('vue-weather-appdata')) {
        this.locations = JSON.parse(localStorage.getItem('vue-weather-appdata'))
      }
    },
    saveLocations: function () {
      if (localStorage) {
        localStorage.setItem('vue-weather-appdata', JSON.stringify(this.locations))
      }
    },
    addLocation: function () {
      if (this.currentLocation) {
        if (this.locations.includes(this.currentLocation)) {
          this.locations.splice(this.locations.indexOf(this.currentLocation), 1)
        }
        this.locations.unshift(this.currentLocation)
        this.currentLocation = ''
        this.saveLocations()
      }
    },
    deleteLocation: function (index) {
      this.locations.splice(index, 1)
      this.saveLocations()
    }
  },
  components: {
    weatherBlock
  }
}
</script>
<!-- styling for the component -->
<style src='./styles/common.scss' lang='scss'></style>
