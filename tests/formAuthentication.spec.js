const {test, expect} = require('@playwright/test');
const {FormAuthenticationPage} = require('../pages/FormAuthenticationPage');

test.describe('Form Authentication Tests', () => {

    let formAuthenticationPage;

    test.beforeEach(async ({page}) => {
        formAuthenticationPage = new FormAuthenticationPage(page);
        await formAuthenticationPage.goto();
    });

    test('Should login successfully with valid credentials', async () => {
        await formAuthenticationPage.login('tomsmith', 'SuperSecretPassword!');
        const successMessage = await formAuthenticationPage.getSuccessMessage();
        expect(successMessage).toContain('You logged into a secure area!');
    });

    test('Should show error with invalid credentials', async () => {
        await formAuthenticationPage.login('invalidUser', 'invalidPassword');
        const errorMessage = await formAuthenticationPage.getErrorMessage();
        expect(errorMessage).toContain('Your username is invalid!');
    });

});