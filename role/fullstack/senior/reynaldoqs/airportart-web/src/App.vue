<template>
  <div id="app">
    <airport-list/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AirportList from "@/components/AirportList.vue"

@Component({
  components: {
    AirportList
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  width: 100%;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
