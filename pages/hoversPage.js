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

    async getUserInfoText() {
        return await this.userInfo.textContent();
    }

}

module.exports = {HoversPage};