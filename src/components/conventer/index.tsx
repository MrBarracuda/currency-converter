import { Rates } from "@/lib/types.ts";
import { ConverterForm } from "@/components/conventer/converter-form.tsx";

export function Converter({ rates }: { rates: Rates }) {
  return (
    <div className="mx-auto max-w-screen-sm border-2 p-8 rounded-3xl">
      {/*<h1>Converter</h1>*/}
      <ConverterForm rates={rates} />
    </div>
  );
}
