/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CURRENCY_API_URL: string;
  readonly VITE_CURRENCY_API_BACKUP_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
