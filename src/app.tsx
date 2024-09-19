import { useFetchCurrencyRates } from "@/hooks/useFetchCurrencyRates.ts";
import { CURRENCY_CODES_ARRAY } from "@/lib/config.ts";
import { Navbar } from "@/components/navbar.tsx";
import { setCurrencyRatesRelativeUAH } from "@/lib/utils.ts";
import { Converter } from "@/components/converter";

const backupApiUrl = import.meta.env.VITE_CURRENCY_API_BACKUP_URL;

export default function App() {
  const data = useFetchCurrencyRates(backupApiUrl);

  const rates = setCurrencyRatesRelativeUAH(data, CURRENCY_CODES_ARRAY);

  return (
    <>
      <div className="space-y-20">
        <Navbar rates={rates} />
        <Converter rates={rates} />
      </div>
    </>
  );
}
