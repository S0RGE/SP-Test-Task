<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useCurrencyStore } from "../../stores/currency";

// Currency store
const currencyStore = useCurrencyStore();
const { getCurrencyValues } = currencyStore;
const { currencyNames, selectedCurrency } = storeToRefs(currencyStore);

onMounted(async () => {
  await getCurrencyValues();
});
</script>

<template>
  <div class="header">
    <nav>
      <ul class="header__nav-list">
        <li class="nav-list__item">
          <router-link to="/main">Main</router-link>
        </li>
        <li class="nav-list__item">
          <router-link to="/currency">Currency</router-link>
        </li>
      </ul>
    </nav>

    <div class="header__currency">
      <select name="currency" id="currency" v-model="selectedCurrency">
        <option v-for="currencyName in currencyNames" :key="currencyName">
          {{ currencyName }}
        </option>
      </select>
    </div>
  </div>
</template>

<style>
.header__nav-list {
  display: flex;
  gap: 1rem;
}
</style>
