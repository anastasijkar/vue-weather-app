<template>
  <div class='geo-map'>
    <!--<gmap-map
      :center="{lat:50, lng:30}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    ></gmap-map>-->
    <GmapAutocomplete @place_changed="setPlace"></GmapAutocomplete>
    <button @click="usePlace">Add</button>
  </div>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBOO33SMmyuAYuWvqyIAvC76qiudByTIBo',
    libraries: 'places'
  }
})

export default {
  name: 'geo-map',
  mounted: function () {
  },
  data () {
    return {
      markers: [],
      place: null
    }
  },
  methods: {
    setPlace (place) {
      this.place = place
    },
    usePlace (place) {
      if (this.place) {
        this.markers.push({
          position: {
            lat: this.place.geometry.location.lat(),
            lng: this.place.geometry.location.lng()
          }
        })
        console.log(this.place.geometry.location.lat(), this.place.geometry.location.lng())
        this.place = null
      }
    }
  }

}
</script>
<!-- styling for the component -->
<style src='./GeoMap.scss' lang='scss' scoped></style>