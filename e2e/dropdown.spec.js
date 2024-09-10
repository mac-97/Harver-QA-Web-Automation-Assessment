const { test, expect } = require('@playwright/test');

test.describe('Dropdown Test', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/dropdown');
    });

    test('Should select option 2 from the dropdown and verify its text', async ({ page }) => {

        // Select option 2
        const dropdown = page.locator('#dropdown');
        await dropdown.selectOption('2');

        // Assert that option 2 is selected
        const selectedOption = await dropdown.inputValue();
        expect(selectedOption).toBe('2');

        // Get the text content of the selected option
        const selectedOptionText = await dropdown.locator('option:checked').textContent();

        // Assert the text content is "Option 2"
        expect(selectedOptionText).toBe('Option 2');

    });

    test('Should select option 1 from the dropdown and verify its text', async ({ page }) => {

        // Select option 1
        const dropdown = page.locator('#dropdown');
        await dropdown.selectOption('1');

        // Assert that option 1 is selected
        const selectedOptionValue = await dropdown.inputValue();
        expect(selectedOptionValue).toBe('1');

        // Get the text content of the selected option
        const selectedOptionText = await dropdown.locator('option:checked').textContent();

        // Assert the text content is "Option 1"
        expect(selectedOptionText).toBe('Option 1');

    });

});