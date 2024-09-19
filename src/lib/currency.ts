import { Rates } from "@/lib/types.ts";

export function formatCurrency(rate: number) {
  return rate.toFixed(4);
}

export function getCurrencyRates(
  currencyObject: Rates,
  currencyCodes: string[],
) {
  return Object.fromEntries(
    currencyCodes.map((currencyCode) => [
      currencyCode,
      getCurrencyRateToUAH(currencyObject, currencyCode),
    ]),
  );
}

function getCurrencyRateToUAH(currencyObject: Rates, currencyCode: string) {
  const baseCurrency = currencyObject["UAH"];
  const targetCurrency = currencyObject[currencyCode];

  return Number(baseCurrency) / Number(targetCurrency);
}

export function getCurrencyRate(rates: Rates, data: CurrencyConversion) {
  const { base, target } = data;

  const baseCurrency = base.currency;
  const targetCurrency = target.currency;

  const baseValue = base.value;
  // const targetValue = target.value;

  const baseRate = rates[baseCurrency];
  const targetRate = rates[targetCurrency];

  // const res1 = formatCurrency(
  //   (Number(targetValue) * Number(targetRate)) / Number(baseRate),
  // );

  return formatCurrency(
    (Number(baseValue) * Number(baseRate)) / Number(targetRate),
  );

  // return reverse ? res1 : res2CurrencyConversion
}

type CurrencyConversion = {
  base: {
    currency: string;
    value: string;
  };
  target: {
    currency: string;
    value: string;
  };
};
