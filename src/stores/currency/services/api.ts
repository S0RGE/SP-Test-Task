const CURRENCY_URL: string = 'https://status.neuralgeneration.com/api/currency';

const getCurrency = async (): Promise<Record<string, number>> => {
    try {
        const currency = await fetch(CURRENCY_URL);
        return await currency.json();
    } catch (error) {
        throw new Error;
    }
}

export {
    getCurrency
}