import { Rates } from "@/lib/types.ts";
import { Wrapper } from "@/components/wrapper.tsx";

export function Navbar({ rates }: { rates: Rates }) {
  return (
    <div className="bg-accent-foreground text-primary-foreground p-5 border-b ">
      <Wrapper className="flex justify-between items-center max-w-screen-xl">
        <h1 className="text-2xl font-bold">Currency Converter</h1>
        <div>
          <ul className="text-lg">
            <li>USD: {rates.USD.toFixed(2)}</li>
            <li>EUR: {rates.EUR.toFixed(2)}</li>
          </ul>
        </div>
      </Wrapper>
    </div>
  );
}
