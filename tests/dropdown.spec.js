const {test, expect} = require('@playwright/test');
const {DropdownPage} = require('../pages/DropdownPage');

test.describe('Dropdown Tests', () => {

    let dropdownPage;

    test.beforeEach(async ({page}) => {
        dropdownPage = new DropdownPage(page);
        await dropdownPage.goto();
    });

    test('Should select option 2 and display its text', async () => {
        await dropdownPage.selectOption('2');
        const selectedOptionText = await dropdownPage.getSelectedOptionText();
        expect(selectedOptionText).toBe('Option 2');
    });

    test('Should select option 1 and display its text', async () => {
        await dropdownPage.selectOption('1');
        const selectedOptionText = await dropdownPage.getSelectedOptionText();
        expect(selectedOptionText).toBe('Option 1');
    });

});