import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('User cannot place a bet without logging in', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.selectFirstBet();
    await homePage.enterStake('10');
    await homePage.clickPlaceBet();
    await homePage.waitForAuthModal();

    await expect(homePage.authModal, "Auth modal should appear when placing a bet while logged out.").toBeVisible();
});

test('User can search and see results', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();

    const searchPage = await homePage.clickSearch();

    await searchPage.switchToCasionTab();
    await searchPage.searchFor("luxor");

    const foundGames = await searchPage.getFoundGamesCount();
    expect(foundGames).toBe(3);
});
