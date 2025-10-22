import { API_CONFIG } from "@/api/apiConfig";
import { APIResponseModel } from "@/api/apiConfigModel";
import { apiClient } from "@/config/httpConfig";
import { API_ERROR } from "@/constants/string-constant";


/**
 * @function fetchTrendingMovies
 * @param queryParams 
 * @returns trending movie list in a day
 */

export const fetchTrendingMovies = async (queryParams?: Record<string, any>): Promise<APIResponseModel> => {
    const result: APIResponseModel = { data: null, loading: true, error: '' };
    try {
        result.data = await apiClient(API_CONFIG.trendingMovieDay, queryParams)
    } catch (err) {
        result.error = err as string ?? API_ERROR.GENERIC_ERROR
    } finally {
        result.loading = false;
    }
    return result
}
