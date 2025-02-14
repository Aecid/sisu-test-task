import { Page, Locator, LocatorScreenshotOptions } from '@playwright/test';

export class SearchPage {
    readonly page: Page;
    readonly resultsContainer: Locator;
    readonly searchInput: Locator;
    readonly noResultsMessage: Locator;
    readonly sportsTab: Locator;
    readonly casinoTab: Locator;

    constructor(page: Page) {
        this.page = page;
        this.resultsContainer = page.getByTestId('search-results');
        this.searchInput = page.getByTestId('search-input');
        this.noResultsMessage = page.getByTestId('no-results-message');
        this.sportsTab = this.page.locator('button[tab-id="sports"]');
        this.casinoTab = this.page.locator('button[tab-id="casino"]');
    }

    async switchToCasionTab() {
        await this.casinoTab.click();
    }

    async searchFor(input: string) {
        await this.searchInput.fill(input);
    }

    async getFoundGamesCount(): Promise<number> {
        await this.page.getByTestId('casino-game-card').first().waitFor({ state: 'visible', timeout: 5000 });
        return await this.page.getByTestId('casino-game-card').count();
    }

}