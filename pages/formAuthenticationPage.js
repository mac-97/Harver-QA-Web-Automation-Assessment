const {expect} = require("@playwright/test");

class FormAuthenticationPage {

    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.submitButton = page.locator('button[type="submit"]');
        this.successMessage = page.locator('.flash.success');
        this.errorMessage = page.locator('.flash.error');
    }

    async goto() {
        await this.page.goto('/login');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }

    async assertLoginSuccess() {
        await expect(this.successMessage).toContainText('You logged into a secure area!');
    }

    async assertLoginFailure() {
        await expect(this.errorMessage).toContainText('Your username is invalid!');
    }

}

module.exports = { FormAuthenticationPage };