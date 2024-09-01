import { defineStore } from "pinia";
import { getCurrency } from "./services/api";
import { ref, computed } from "vue";

export const useCurrencyStore = defineStore("currencyStore", () => {
    interface ICurrency {
        [key: string]: number
    }

    const currency = ref<ICurrency>({} as ICurrency);
    const selectedCurrency = ref<string>('');

    const getCurrencyValues = async (): Promise<void> => {
        currency.value = await getCurrency();
    }

    const currencyNames = computed<Array<string>>(() => {
        const pairs = Object.keys(currency.value);
        const uniqueNames = pairs.reduce((acc: Set<string>, pair: string) => {
            const names = pair.split('-');
            acc.add(names[0]);
            acc.add(names[1]);
            return acc;
        }, new Set<string>());

        return Array.from(uniqueNames);
    });

    const selectedCurrencyPairs = computed(() => {
        if (!selectedCurrency.value) return [];
        const selectedPairs: Array<string> = [];

        const pairs = Object.keys(currency.value);
        pairs.forEach((pair: string) => {
            if (pair.startsWith(selectedCurrency.value)) {
                selectedPairs.push(pair);
            }
        });

        return selectedPairs;
    });

    return {
        currency,
        currencyNames,
        selectedCurrency,
        selectedCurrencyPairs,

        getCurrencyValues
    }
});