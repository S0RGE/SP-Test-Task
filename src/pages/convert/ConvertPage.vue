<script setup lang="ts">
import { ref, computed } from "vue";
import { storeToRefs } from "pinia";
import { useCurrencyStore } from "@/stores/currency";

// Currency store
const currencyStore = useCurrencyStore();
const { currencyNames, currency } = storeToRefs(currencyStore);

const currencyFromName = ref("");
const currencyToName = ref("");

const currencyFrom = ref(0);
const currencyTo = computed<number>(() => {
  if (!currencyFromName.value) return 0;
  if (!currencyToName.value) return 0;
  if (currencyFromName.value === currencyToName.value)
    return currencyFrom.value;

  const pair = `${currencyFromName.value}-${currencyToName.value}`;

  const resultData = (currencyFrom.value * currency.value[pair]).toFixed(2);
  return resultData;
});
</script>

<template>
  <div class="convert-page">
    <h1>Convert page</h1>

    <div>
      <input type="number" v-model="currencyFrom" />
      <select name="currencyFrom" id="currencyFrom" v-model="currencyFromName">
        <option v-for="currencyName in currencyNames" :key="currencyName">
          {{ currencyName }}
        </option>
      </select>
    </div>
    <div>
      <input type="number" disabled v-model="currencyTo" />
      <select name="currencyTo" id="currencyTo" v-model="currencyToName">
        <option v-for="currencyName in currencyNames" :key="currencyName">
          {{ currencyName }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped></style>
