const { test} = require('@playwright/test');
const { CheckboxesPage } = require('../pages/CheckboxPage');

test.describe('Checkbox Tests', () => {

    let checkboxesPage;

    test.beforeEach(async ({ page }) => {
        checkboxesPage = new CheckboxesPage(page);
        await checkboxesPage.goto();
    });

    test('Should check and uncheck checkboxes', async () => {
        // Checkbox 1
        await checkboxesPage.toggleCheckbox1();
        await checkboxesPage.assertCheckbox1IsChecked();
        // Checkbox 2
        await checkboxesPage.toggleCheckbox2();
        await checkboxesPage.assertCheckbox2IsUnchecked();
    });

});
