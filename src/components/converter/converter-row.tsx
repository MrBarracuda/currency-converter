import { ChangeEvent } from "react";

export function ConverterRow({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  onChangeAmount,
  amount,
  name,
}: CurrencyRowProps) {
  return (
    <div className="flex flex-col justify-between sm:flex-row space-y-4 sm:space-y-0">
      <input
        name={name}
        placeholder="0"
        type="number"
        value={amount}
        onChange={onChangeAmount}
        className="flex h-9 w-2/3 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
      />
      <select
        value={selectedCurrency}
        onChange={onChangeCurrency}
        className="flex h-9 w-1/4 items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
      >
        {currencyOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

type CurrencyRowProps = {
  currencyOptions: string[];
  selectedCurrency: string;
  onChangeCurrency: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeAmount: (e: ChangeEvent<HTMLInputElement>) => void;
  amount: number;
  name: string;
};
