import { ChangeEvent, useState } from "react";
import { Rates } from "@/lib/types.ts";
import { ConverterRow } from "@/components/converter/converter-row.tsx";

export function CurrencyForm({ rates }: { rates: Rates }) {
  const currency = Object.keys(rates);

  const [fromCurrency, setFromCurrency] = useState(currency[0]);
  const [toCurrency, setToCurrency] = useState(currency[1]);
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  let toAmount: number, fromAmount: number;

  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * (rates[fromCurrency] / rates[toCurrency]);
  } else {
    toAmount = amount;
    fromAmount = amount * (rates[toCurrency] / rates[fromCurrency]);
  }

  function handleAmountChange(e: ChangeEvent<HTMLInputElement>) {
    const isFromAmount = e.target.name === "fromAmount";
    setAmount(Number(e.target.value));
    setAmountInFromCurrency(isFromAmount);
  }

  return (
    <div className="space-y-4 p-5">
      <ConverterRow
        currencyOptions={currency}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)}
        onChangeAmount={handleAmountChange}
        amount={fromAmount}
        name="fromAmount"
      />
      <ConverterRow
        currencyOptions={currency}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)}
        onChangeAmount={handleAmountChange}
        amount={toAmount}
        name="toAmount"
      />
    </div>
  );
}
