<template>
  <div id="app">
    <div>
      <input type="text" placeholder="City name" v-model="location">
    </div>
    <weather-block :location='location'></weather-block>
    <!--<router-link v-bind:to="'/'">Home</router-link>
    <router-link v-bind:to="'/about'">Abotu</router-link>
    <router-view></router-view>-->
  </div>
</template>

<script>
import weatherBlock from './components/WeatherBlock/WeatherBlock'

export default {
  name: 'app',
  data: function () {
    return {
      location: ''
    }
  },
  components: {
    weatherBlock
  }
}
</script>
<!-- styling for the component -->
<style src='./styles/common.scss' lang='scss'></style>
