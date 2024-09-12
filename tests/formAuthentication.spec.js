const { test} = require('@playwright/test');
const { FormAuthenticationPage } = require('../pages/FormAuthenticationPage');

test.describe('Form Authentication Tests', () => {

    let formAuthenticationPage;

    test.beforeEach(async ({ page }) => {
        formAuthenticationPage = new FormAuthenticationPage(page);
        await formAuthenticationPage.goto();
    });

    test('Should login with valid credentials', async () => {
        await formAuthenticationPage.login('tomsmith', 'SuperSecretPassword!');
        await formAuthenticationPage.assertLoginSuccess();
    });

    test('Should show error on invalid login', async () => {
        await formAuthenticationPage.login('invalid', 'invalid');
        await formAuthenticationPage.assertLoginFailure();
    });

});