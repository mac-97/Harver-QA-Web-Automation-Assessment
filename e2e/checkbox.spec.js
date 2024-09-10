const { test, expect } = require('@playwright/test');

test.describe('Checkboxes Test', () => {
    test('Should select and assert checkboxes', async ({ page }) => {

        await page.goto('/checkboxes');

        // Locate both checkboxes
        const checkbox1 = page.locator('input[type="checkbox"]').first();
        const checkbox2 = page.locator('input[type="checkbox"]').nth(1);

        // Assert initial states
        await expect(checkbox1).not.toBeChecked();
        await expect(checkbox2).toBeChecked();

        // Check/uncheck boxes
        await checkbox1.check();
        await expect(checkbox1).toBeChecked();

        await checkbox2.uncheck();
        await expect(checkbox2).not.toBeChecked();

    });
});
