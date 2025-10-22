// src/config/env.ts
export const env = {
    mode: import.meta.env.MODE,
    env: import.meta.env.VITE_ENV,
    apiBaseUrl: import.meta.env.VITE_API_BASE_URL,
    featureDebug: import.meta.env.VITE_FEATURE_DEBUG === "true",
    imdbApiUrl: import.meta.env.VITE_IMDB_BASE_URL,
    imdbImgUrl: import.meta.env.VITE_IMDB_BASE_IMAGE_URL,
    imdbApikey: import.meta.env.VITE_IMDB_API_KEY,
    imdbAccessToken: import.meta.env.VITE_IMDB_TOKEN
};
