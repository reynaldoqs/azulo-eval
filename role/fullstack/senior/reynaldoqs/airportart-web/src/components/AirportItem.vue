<template>
  <li id="airport-item">
    <div class="priority-indicator">{{airport.currentPriority}}</div>
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
  list-style: none;
  touch-action: none;
  height: 100%;
  background-color:#fff;
  font-size: .8rem;
  padding: 12px;
  padding-top: 30px;
  padding-left: 25px;
  box-sizing: border-box;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,0.14), 0 3px 3px -2px rgba(0,0,0,0.12), 0 1px 8px 0 rgba(0,0,0,0.20);
}
.priority-indicator {
  position: absolute;
  top: 0;
  left: 0;
  padding: 6px;
  background-color: #414141;
  color: white;
  font-weight: bold;
}
</style>
