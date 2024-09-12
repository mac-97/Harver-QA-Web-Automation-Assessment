const {expect} = require("@playwright/test");

class CheckboxesPage {

    constructor(page) {
        this.page = page;
        // Locate both checkboxes
        this.checkbox1 = page.locator('input[type="checkbox"]').first();
        this.checkbox2 = page.locator('input[type="checkbox"]').nth(1);
    }

    async goto() {
        await this.page.goto('/checkboxes');
    }

    async toggleCheckbox1() {
        await this.checkbox1.check();
    }

    async toggleCheckbox2() {
        await this.checkbox2.uncheck();
    }

    // Assert initial states
    async assertCheckbox1IsChecked() {
        await expect(this.checkbox1).toBeChecked();
    }

    async assertCheckbox2IsUnchecked() {
        await expect(this.checkbox2).not.toBeChecked();
    }

}

module.exports = { CheckboxesPage };