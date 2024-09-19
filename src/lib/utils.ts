import { Rates } from "@/lib/types.ts";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function setCurrencyRatesRelativeUAH(
  currencyObject: Rates,
  currencyCodes: string[],
) {
  return Object.fromEntries(
    currencyCodes.map((currencyCode) => [
      currencyCode,
      Number(currencyObject["UAH"]) / Number(currencyObject[currencyCode]),
    ]),
  );
}
