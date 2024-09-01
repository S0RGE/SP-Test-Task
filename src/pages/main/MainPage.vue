<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCurrencyStore } from "@/stores/currency";

// Currency store
const currencyStore = useCurrencyStore();
const { currency, selectedCurrency, selectedCurrencyPairs } =
  storeToRefs(currencyStore);
</script>

<template>
  <div class="main-page">
    <h1>Main page</h1>

    <div class="main-page__currency-pairs">
      <ul v-if="selectedCurrency">
        <li v-for="currencyPair in selectedCurrencyPairs" :key="currencyPair">
          {{ currencyPair }}: {{ currency[currencyPair] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
