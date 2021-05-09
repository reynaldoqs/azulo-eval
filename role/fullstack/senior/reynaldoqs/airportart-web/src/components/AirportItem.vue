<template>
  <li id="airport-item">
    <div class="airport-item">
      <div><strong>Aeropuerto: </strong>{{airport.Name}}</div>
      <div><strong>Codigo: </strong>{{airport.AirPortCode}}</div>
      <div>{{airport.location.ProvinceOrState}} - {{airport.location.Country}}</div>
      <div><strong>Admin: </strong>{{airport.operator.Name}}</div>
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
  background-color: #fafafa;
  font-size: .8rem;
  padding: 8px;
  box-sizing: border-box;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20);
}
</style>
