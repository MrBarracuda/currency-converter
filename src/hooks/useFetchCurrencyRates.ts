import { useEffect, useState } from "react";
import { Rates } from "@/lib/types.ts";

export function useFetchCurrencyRates(apiUrl: string) {
  const [rates, setRates] = useState<Rates>({});

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => {
        return res.json();
      })
      .then(({ rates }) => {
        setRates(rates);
      });
  }, []);

  return rates;
}
