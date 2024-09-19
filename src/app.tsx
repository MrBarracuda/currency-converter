import { useFetchCurrencyRates } from "@/hooks/useFetchCurrencyRates.ts";
import { getCurrencyRates } from "@/lib/currency.ts";
import { CURRENCY_CODES_ARRAY } from "@/lib/config.ts";
import { Navbar } from "@/components/navbar.tsx";
import { Converter } from "@/components/conventer";

const backupApiUrl = import.meta.env.VITE_CURRENCY_API_BACKUP_URL;

export default function App() {
  const data = useFetchCurrencyRates(backupApiUrl);

  const rates = getCurrencyRates(data, CURRENCY_CODES_ARRAY);

  return (
    <>
      <div className="space-y-20">
        <Navbar rates={rates} />
        <Converter rates={rates} />
      </div>
    </>
  );
}
