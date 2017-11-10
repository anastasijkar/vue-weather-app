<template>
  <div class='weather-block'>
    <div class='wrapper' v-if='weatherInfo'>
      <div class='block-wrapper'>
        <p>
          Today is {{ new Date(weatherInfo.dt *1000).toString() | toDateString }}
        </p>
        <div>
          <img
            :src='"../../assets/" + illustration + ".png"'
            :alt='illustration'>
          <p><strong>{{ weatherInfo.weather[0].main }}</strong></p>
        </div>
      </div>
      <div class='block-wrapper'>
        <h1>Weather forecast for: Kharkiv</h1>
        <div class='temperature'>
          <p class='text-info'>
            <icon name='thermometer-half'></icon>
            Temperature: {{ weatherInfo.main.temp | temperature(temperature_filter) }} {{ temperature_key }}
            <br>
            Humidity: {{ weatherInfo.main.humidity }} %
            <br>
            Pressure: {{ weatherInfo.main.pressure }}
          </p>
          <div class='options' v-on:click='toggleTemFilter()'>
            <span>{{ temperature_key }}</span>
          </div>
        </div>
        <div class="inner-wrapper">
          <div class='sun-clock'>
            <p class='text-info'>
              <icon name='sun-o'></icon>
              Sunrise: {{ new Date(weatherInfo.sys.sunrise*1000).toString() | toTimeString }}
              <br>
              Sunset: {{ new Date(weatherInfo.sys.sunset*1000).toString() | toTimeString }}
            </p>
          </div>
          <div class='clouds-wind'>
            <p class='text-info'>
              <icon name='cloud'></icon>
              Clouds: {{ weatherInfo.clouds.all }} %
            </p>
            <p class='text-info'>
              <icon name='mixcloud'></icon>
              Wind: {{ weatherInfo.wind.speed }} m/sec
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <img src='../../assets/loader.svg' alt="loading...">
    </div>
  </div>
</template>

<script>
import { HTTP } from '../http-common'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'weather-block',
  beforeMount: function () {
    HTTP.get('weather?q=Kharkiv,ua&appid=89bf64420a722fa6304a5390561d28e9')
    .then(response => {
      this.weatherInfo = response.data
    })
    .catch(e => {
      this.weatherInfo = e
    })
  },
  data: function () {
    return {
      weatherInfo: '',
      today: Date.now(),
      temperature_filter: 'c',
      TEMP_TYPES: ['c', 'f', 'k']
    }
  },
  computed: {
    temperature_key: function () {
      switch (this.temperature_filter) {
        case 'c':
          return '℃'
        case 'f':
          return '℉'
        default:
          return 'K'
      }
    },
    illustration: function () {
      let weatherID = +this.weatherInfo.weather[0].id
      if ([200, 201, 202, 230, 231, 232].includes(weatherID)) {
        return 'storm'
      } else if ([210, 211, 212, 221].includes(weatherID)) {
        return 'lightning'
      } else if ()
    }
  },
  filters: {
    toDateString: function (str) {
      return str.substr(3, 12)
    },
    toTimeString: function (str) {
      return str.substr(16, 8)
    },
    temperature: function (value, type) {
      switch (type) {
        case 'c':
          value = value - 273
          return value.toFixed()
        case 'f':
          value = 1.8 * (value - 273) + 32
          return value.toFixed()
        default:
          return value
      }
    }
  },
  methods: {
    toggleTemFilter: function () {
      let current = this.TEMP_TYPES.indexOf(this.temperature_filter)
      if (this.TEMP_TYPES[current + 1]) {
        this.temperature_filter = this.TEMP_TYPES[current + 1]
      } else {
        this.temperature_filter = this.TEMP_TYPES[0]
      }
    }
  },
  components: {
    Icon
  }
}
</script>
<!-- styling for the component -->
<style src='./WeatherBlock.scss' lang='scss' scoped></style>