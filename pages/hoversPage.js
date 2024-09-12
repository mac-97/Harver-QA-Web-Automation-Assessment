const {expect} = require("@playwright/test");

class HoversPage {

    constructor(page) {
        this.page = page;
        this.avatar = page.locator('.figure').first();
        this.userInfo = this.avatar.locator('.figcaption h5');
    }

    async goto() {
        await this.page.goto('/hovers');
    }

    async hoverOverAvatar() {
        await this.avatar.hover();
    }

    async assertUserInfoText(expectedText) {
        await expect(this.userInfo).toContainText(expectedText);
    }

}

module.exports = { HoversPage };