import { Rates } from "@/lib/types.ts";
import { CurrencyForm } from "@/components/converter/converter-form.tsx";

export function Converter({ rates }: { rates: Rates }) {
  return (
    <div className="mx-auto max-w-screen-sm border-2 p-8 rounded-3xl space-y-2">
      <h1 className="text-center text-3xl font-bold">Convert</h1>
      <CurrencyForm rates={rates} />
    </div>
  );
}
