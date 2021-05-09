<template>
  <div id="app">
    <airport-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AirportList from "@/components/AirportList.vue";

@Component({
  components: {
    AirportList,
  },
})
export default class App extends Vue {}
</script>

<style>
:root {
  --margin-horizontal: 0;
}
body {
  margin: 0;
  background-color: #EEEEEE;
}
*,
*:after,
*:before {
  box-sizing: border-box;
}
#app {
  width: calc(100% - (var(--margin-horizontal) * 2));
  max-width: 1280px;
  height: 100vh;
  margin: 0 auto;
  padding: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #FFF;
}
@media (min-width: 240px) and (max-width: 480px) {
  #app {
    --margin-horizontal: 20px;
    margin: 50px var(--margin-horizontal);
  }
}
@media (min-width: 481px) and (max-width: 720px) {
  #app {
    --margin-horizontal: 60px;
    margin: 120px var(--margin-horizontal);
  }
}
@media (min-width: 721px) and (max-width: 1280px) {
  #app {
    --margin-horizontal: 90px;
    margin: 200px var(--margin-horizontal);
  }
}
@media (min-width: 1281px) {
  #app {
    --margin-horizontal: 90px;
    margin: 200px auto;
  }
}
</style>
