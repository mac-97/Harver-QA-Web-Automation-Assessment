const {test, expect} = require('@playwright/test');
const {CheckboxesPage} = require('../pages/CheckboxPage');

test.describe('Checkbox Tests', () => {

    let checkboxesPage;

    test.beforeEach(async ({page}) => {
        checkboxesPage = new CheckboxesPage(page);
        await checkboxesPage.goto();
    });

    test('Should check and uncheck the checkboxes', async () => {
        // Checkbox 1
        await checkboxesPage.selectCheckbox1();
        expect(await checkboxesPage.isCheckbox1Checked()).toBeTruthy();
        // Checkbox 2
        await checkboxesPage.selectCheckbox2();
        expect(await checkboxesPage.isCheckbox2Checked()).toBeFalsy();
    });

});