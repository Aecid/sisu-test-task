import { Page, Locator } from '@playwright/test';
import { SearchPage } from './SearchPage';

export class HomePage {
    readonly page: Page;
    readonly matchContainer: Locator;
    readonly outcomeButton: Locator;
    readonly stakeInput: Locator;
    readonly placeBetButton: Locator;
    readonly authModal: Locator;
    readonly searchButton: Locator;
    readonly searchContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.matchContainer = page.getByTestId('match-container').first();
        this.outcomeButton = this.matchContainer.getByTestId('outcome-button').first();
        this.stakeInput = page.getByTestId('stake-input');
        this.placeBetButton = page.getByTestId('place-bet-button');
        this.authModal = page.getByTestId('auth-modal');
        this.searchButton = page.getByTestId('search-button');
        this.searchContainer = page.getByTestId('search-container');
    }

    async goto() {
        await this.page.goto('/');
    }

    async selectFirstBet() {
        await this.outcomeButton.click();
    }

    async enterStake(amount: string) {
        await this.stakeInput.fill(amount);
    }

    async clickPlaceBet() {
        await this.page.waitForSelector('[data-testid="place-bet-button"]:not([disabled])');
        await this.placeBetButton.click();
    }

    async waitForAuthModal() {
        await this.authModal.waitFor();
    }

    async clickSearch(): Promise<SearchPage> {
        await this.searchButton.click();
        await this.searchContainer.waitFor({ state: 'visible' });
        return new SearchPage(this.page);
    }
}
