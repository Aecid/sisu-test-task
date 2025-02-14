import { APIRequestContext } from '@playwright/test';
import { buildApiUrl, validateApiResponse } from '../utils/apiUtils';

export class MatchHotAPI {
    readonly request: APIRequestContext;
    readonly endpoint: string = '/s/sport-base/public/match.hot';

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async getHotMatches(params = { language: 'en', country: 'EE', period: '24h', offset: 0, limit: 20 }) {
        const fullUrl = buildApiUrl(this.endpoint, params);
        const response = await this.request.get(fullUrl);

        await validateApiResponse(response);

        return response.json();
    }
}
