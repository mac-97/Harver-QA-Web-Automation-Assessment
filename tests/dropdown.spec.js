const { test} = require('@playwright/test');
const { DropdownPage } = require('../pages/DropdownPage');

test.describe('Dropdown Tests', () => {

    let dropdownPage;

    test.beforeEach(async ({ page }) => {
        dropdownPage = new DropdownPage(page);
        await dropdownPage.goto();
    });

    test('Should select option 2 and display its text', async () => {
        await dropdownPage.selectOption('2');
        await dropdownPage.assertSelectedOption('2', 'Option 2');
    });

    test('Should select option 1 and display its text', async () => {
        await dropdownPage.selectOption('1');
        await dropdownPage.assertSelectedOption('1', 'Option 1');
    });

});