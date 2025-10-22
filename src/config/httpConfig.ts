import { env } from '@/config/env';
import { ApiConfigModel } from "../api/apiConfigModel";

function toQueryString(params: Record<string, any> = {}) {
    const esc = encodeURIComponent;
    return Object.keys(params)
        .map(k => `${esc(k)}=${esc(params[k])}`)
        .join("&");
}

/**
 * Common API call function
 * @param apiConfig - module config from API_CONFIG
 * @param queryParams - optional query params
 * @param body - optional request body
 * @param token - optional access token
 */
export async function apiClient(
    apiConfig: ApiConfigModel,
    queryParams?: Record<string, any>,
    body?: any,
) {
    // Build headers
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };
    const token = env.imdbAccessToken || '';

    if (token && apiConfig?.isAccessTokenReq !== false) {
        headers["Authorization"] = `Bearer ${token}`;
    }

    const finalQueryParams = { ...queryParams };
    if (apiConfig?.isIMDB && env.imdbApikey) {
        finalQueryParams["api_key"] = env.imdbApikey;
    }
    const baseUrl = apiConfig?.baseUrl ?? env.apiBaseUrl;

    let url = `${baseUrl}${apiConfig.endpoint}`;

    if (Object.keys(finalQueryParams).length > 0) {
        url += `?${toQueryString(finalQueryParams)}`;
    }

    // Fetch options
    const options: RequestInit = {
        method: apiConfig.method || "GET",
        headers,
    };

    if (body) {
        options.body = JSON.stringify(body);
    }

    // Make the request
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
    }

    return response.json();
}
