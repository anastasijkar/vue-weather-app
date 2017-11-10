<template>
  <div id="app">
    <div>
      <input type="text" placeholder="City name">
    </div>
    <weather-block location='Kharkiv,ua'></weather-block>
    <!--<router-link v-bind:to="'/'">Home</router-link>
    <router-link v-bind:to="'/about'">About</router-link>
    <router-view></router-view>-->
  </div>
</template>

<script>
import weatherBlock from './components/WeatherBlock/WeatherBlock'

export default {
  name: 'app',
  components: {
    weatherBlock
  }
}
</script>
<!-- styling for the component -->
<style src='./styles/common.scss' lang='scss'></style>
