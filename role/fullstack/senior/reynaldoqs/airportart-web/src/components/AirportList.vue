<template>
  <main id="airport-list">
    <section class="airport-list">
      <ul>
        <li v-for="airport in airports" v-bind:key="airport.ID">
          <airport-item :airport="airport" />
        </li>
      </ul>
    </section>
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
      console.log({ airports });
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
#airport-list {
  background-color: #f1f1f1
}
</style>
