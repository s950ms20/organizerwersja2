<template>
  <div id="app">
    <appheader></appheader>
    <appnav></appnav>
    <router-view></router-view>
    <appfooter></appfooter>
  </div>
</template>

<script>
import appheader from './components/appHeader.vue'
import appfooter from './components/appFooter.vue'
import appnav from './components/appnav.vue'
import project from './components/project.vue'
import addproject from './components/addProject.vue'
import addtrack from './components/addtrack.vue'
import showtrack from './components/track.vue'

export default {
    components: {
        'project': project,
        'addproject': addproject,
        'appheader': appheader,
        'appfooter': appfooter,
        'appnav': appnav,
        'addtrack': addtrack,
        'showtrack': showtrack
    },
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>

@import "main";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}

</style>
