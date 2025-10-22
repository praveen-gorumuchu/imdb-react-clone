import { env } from '@/config/env';
import { APIMethodEnum } from "./apiConfigModel";

export const API_CONFIG = {
    auth: {
        endpoint: `/auth`,
        method: APIMethodEnum.GET,
        isAccessTokenReq:false
    },
    user: {
        endpoint: `/user`,
        method: APIMethodEnum.GET,
    },
    movies: {
        baseUrl: env.imdbApiUrl,
        endpoint: '/movies',
        method: APIMethodEnum.GET,
    },
    trendingMovieDay: {
        baseUrl: env.imdbApiUrl,
        endpoint: '/trending/movie/day',
        method: APIMethodEnum.GET,
        isIMDB: true,
    },
};


