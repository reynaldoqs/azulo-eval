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
:root {
  --margin-horizontal: 0;
}
body {
  margin:0;
}
*,*:after,*:before{
  box-sizing: border-box;
}
#app {
  width: calc(100% - (var(--margin-horizontal) * 2));
  height: 100vh;
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@media (max-width: 480px) and (min-width: 240px) {
  #app {
    --margin-horizontal: 20px;
    margin: 50px var(--margin-horizontal);
  }
}
</style>
