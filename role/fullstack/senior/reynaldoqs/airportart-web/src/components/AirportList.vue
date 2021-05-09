<template>
  <main id="airport-list">
    <div class="draggable-container">
      <div class="controls">
        <button @click="updatePriorities">Guardar prioridades</button>
      </div>
      <div v-if="isLoading">Loading...</div>
      <div v-else-if="airports.length > 0">
        <grid-layout
          :layout.sync="airports"
          :col-num="6"
          :row-height="30"
          :is-draggable="draggable"
          :is-resizable="resizable"
          :responsive="responsive"
          :vertical-compact="true"
          :use-css-transforms="true"
        >
          <grid-item
            v-for="item in airports"
            v-bind:key="item.i"
            :static="item.static"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
          >
            <airport-item :airport="item" v-bind:key="item.ID" />
          </grid-item>
        </grid-layout>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getAirports, postPriorityOrders } from "@/services/airport";
import { FullAirport } from "@/types";
import AirportItem from "@/components/AirportItem.vue";
import { GridLayout, GridItem } from "vue-grid-layout";

@Component({
  components: {
    AirportItem,
    GridLayout,
    GridItem,
  },
})
export default class AirportList extends Vue {
  public airports: FullAirport[] = [];
  public isLoading = false;
  public draggable = true;
  public resizable = false;
  public responsive = false;

  // Metodo para actualizar las prioridaddes
  public async updatePriorities(): Promise<void> {
    try {
      const priorityOrders = this.airports.map((airport: any) => ({
        airportId: airport.ID,
        newOrder: 1 + airport.x + airport.y * 2,
      }));
      this.isLoading = true;
      await postPriorityOrders({ priorityOrders });
      this.isLoading = false;
      this.fetchAirports();
    } catch (error) {
      this.isLoading = false;
      console.error(error);
    }
  }

  // metodo para acomodar los airports para la libreria de drag y drop
  public mapToDraggable(airports: FullAirport[]): any[] {
    const cols = 6;
    const inW = 1;
    const inH = 3;
    let rowIndex = 0;
    let colIndex = -1;
    return airports.map((airport: FullAirport, index: number) => {
      colIndex = colIndex + inW;
      rowIndex = Math.trunc((index * inW) / cols) * inH;
      if (colIndex >= cols) colIndex = 0;

      return {
        ...airport,
        x: colIndex,
        y: rowIndex,
        w: inW,
        h: inH,
        i: airport.ID,
        currentPriority: airport.PriorityOrder,
      };
    });
  }

  // metodo para cargar los aeropuertos desde el API
  public async fetchAirports(): Promise<void> {
    try {
      this.isLoading = true;
      const { airports } = await getAirports();
      this.airports = this.mapToDraggable(airports);
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
      console.error(error);
    }
  }
  mounted(): void {
    this.fetchAirports();
  }
}
</script>
<style scoped>
.controls {
  width: 100%;
  padding: 12px;
  background-color: #414141;
  color: white;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}
.controls button {
  border: none;
  background-color: palegreen;
  color: black;
  padding: 6px 20px;
}
</style>
