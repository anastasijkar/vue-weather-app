<template>
  <div class='geo-map'>
    <gmap-map
      :center="{lat:50, lng:30}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    ></gmap-map>
  </div>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBOO33SMmyuAYuWvqyIAvC76qiudByTIBo'
  }
})

export default {
  name: 'geo-map',
  mounted: function () {
  },
  data: function () {
    return { }
  }
}
</script>
<!-- styling for the component -->
<style src='./GeoMap.scss' lang='scss' scoped></style>