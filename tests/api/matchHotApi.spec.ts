import { test, expect } from '@playwright/test';
import { MatchHotAPI } from '../../services/MatchHotAPI';

test('Verify hot matches API response', async ({ request }) => {
    const matchAPI = new MatchHotAPI(request);

    // Fetch hot matches
    const responseBody = await matchAPI.getHotMatches();

    // Validate that response contains 'result' and 'data'
    expect(responseBody).toHaveProperty('result');
    expect(responseBody.result).toHaveProperty('data');

    // Ensure 'data' is not empty
    expect(Array.isArray(responseBody.result.data)).toBe(true);
    expect(responseBody.result.data.length).toBeGreaterThan(0);

    // Validate the structure of the first match
    validateMatchStructure(responseBody.result.data[0]);
});

// This can serve both as test assert and as a general response validation.
// If we will need validation for other tests in this test class, we can extract this function from a test. 
// We can ether put it in apiUtils, or, if it is appliable only for this test class, keep it here.
// Needs to be mentioned in team's code convention, if we decide keep it here.
function validateMatchStructure(match: any) {
    expect(match).toHaveProperty('name');
    expect(match.name).not.toBe('');
    expect(match).toHaveProperty('sportName');
    expect(match.sportName).not.toBe('');
    expect(match).toHaveProperty('leagueName');
    expect(match.leagueName).not.toBe('');
    expect(match).toHaveProperty('startDate');
    expect(match.startDate).not.toBe('');
}