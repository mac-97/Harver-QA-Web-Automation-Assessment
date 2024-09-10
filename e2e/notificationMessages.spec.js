const { test, expect } = require('@playwright/test');

test.describe('Notification Messages Test', () => {
    test('Should display notification message after clicking the button', async ({ page }) => {

        await page.goto('/notification_message_rendered');

        // Expect header "to have" a text
        const header = page.locator('h3');
        await expect(header).toHaveText('Notification Message');

        // Click the link
        await page.click('a[href="/notification_message"]');

        // Assert the notification message is displayed
        const notification = page.locator('.flash');
        await expect(notification).toBeVisible();

        // Close the notification message
        await page.click('.close');

    });
});
