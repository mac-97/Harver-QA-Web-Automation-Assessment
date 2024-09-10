const { test, expect } = require('@playwright/test');

test.describe('Hovers Test', () => {
    test('Should hover and display user information', async ({ page }) => {

        await page.goto('/hovers');

        // Hover over the first avatar
        const avatar = page.locator('.figure').first();
        await avatar.hover();

        // Assert that the user information is displayed
        const userInfo = avatar.locator('.figcaption h5');
        await expect(userInfo).toContainText('name: user1');

        // Click the profile of user1
        await page.click('a[href="/users/1"]');

        // Expect header "to have" a text
        const header = page.locator('h1');
        await expect(header).toHaveText('Not Found');

    });
});
