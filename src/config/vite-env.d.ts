/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENV: string;
  readonly VITE_API_BASE_URL: string;
  readonly VITE_FEATURE_DEBUG: string;
  readonly VITE_IMDB_BASE_URL: string;
  readonly VITE_IMDB_BASE_IMAGE_URL: string;
  readonly VITE_PORT?: string;
  readonly VITE_IMDB_TOKEN?: string;
  readonly VITE_IMDB_API_KEY?: string;
  readonly VITE_BASENAME?: string;

}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
