<template>
  <main id="airport-list">
      <ul class="airport-list">
        <template v-for="airport in airports" >
          <airport-item :airport="airport" v-bind:key="airport.ID" />
        </template>
      </ul>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getAirports } from "@/services/airport";
import { FullAirport } from "@/types";
import AirportItem from "@/components/AirportItem.vue";

@Component({
  components: {
    AirportItem,
  },
})
export default class AirportList extends Vue {
  public airports: FullAirport[] = [];
  public isLoading = false;

  // metodo para cargar los aeropuertos desde el API
  public async fetchAirports(): Promise<void> {
    try {
      this.isLoading = true;
      const { airports } = await getAirports();
      this.airports = airports;
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
.airport-list {
  padding: 0;
  margin: 0;
  display: grid;
  list-style: none;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  grid-auto-rows: 80px;
  gap: 10px;
}
</style>
