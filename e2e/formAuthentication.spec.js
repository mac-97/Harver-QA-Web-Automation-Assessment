const { test, expect } = require('@playwright/test');

test.describe('Form Authentication Test', () => {
    test('Should login with valid credentials', async ({ page }) => {

        await page.goto('/login');

        await page.fill('#username', 'tomsmith');
        await page.fill('#password', 'SuperSecretPassword!');
        await page.click('button[type="submit"]');

        // Assert login success
        await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!');
    });

    test('Should show error on invalid credentials', async ({ page }) => {

        await page.goto('/login');

        await page.fill('#username', 'invalid');
        await page.fill('#password', 'invalid');
        await page.click('button[type="submit"]');

        // Assert error message
        await expect(page.locator('.flash.error')).toContainText('Your username is invalid!');
    });

});