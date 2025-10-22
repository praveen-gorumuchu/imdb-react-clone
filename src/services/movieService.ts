import { API_CONFIG } from "@/api/apiConfig";
import { APIResponseModel } from "@/api/apiConfigModel";
import { apiClient } from "@/config/httpConfig";


/**
 * @function fetchTrendingMovies
 * @param queryParams 
 * @returns trending movie list in a day
 */

export const fetchTrendingMovies = async (queryParams?: Record<string, any>): Promise<APIResponseModel> => {
    const result: APIResponseModel = { data: null, loading: true, error: null };
    try {
        result.data = await apiClient(API_CONFIG.trendingMovieDay, queryParams)
    } catch (err) {
        result.error = err
    } finally {
        result.loading = false;
    }
    return result
}
