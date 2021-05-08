<template>
  <li id="airport-item">
    <div class="airport-item">
      i. {{airport.AirPortCode}} - {{airport.Name}}
      ii. {{airport.location.ProvinceOrState}} - {{airport.location.Country}}
      iii. Administrado por: {{airport.operator.Name}}
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { FullAirport } from "@/types";

@Component
export default class AirportList extends Vue {
  @Prop({required: true}) readonly airport!: FullAirport;
}
</script>

<style scoped>
#airport-item {
  width: 160px;
  height: 80px;
}
</style>
