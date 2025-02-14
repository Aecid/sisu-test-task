import { APIResponse, expect } from '@playwright/test';

/**
 * Encodes query parameters and constructs the full API URL.
 */
export function buildApiUrl(endpoint: string, params: object): string {
    const encodedParams = encodeURIComponent(JSON.stringify(params));
    return `${endpoint}?input=${encodedParams}`;
}

/**
 * Validates the API response status and content type.
 */
export async function validateApiResponse(response: APIResponse): Promise<void> {
    expect(response.status()).toBe(200);

    const contentType = response.headers()['content-type']?.toLowerCase() || '';
    expect(contentType).toContain('application/json');
}
