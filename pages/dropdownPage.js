const {expect} = require("@playwright/test");

class DropdownPage {

    constructor(page) {
        this.page = page;
        this.dropdown = page.locator('#dropdown');
    }

    async goto() {
        await this.page.goto('/dropdown');
    }

    async selectOption(value) {
        await this.dropdown.selectOption(value);
    }

    async getSelectedOptionText() {
        return await this.dropdown.locator('option:checked').textContent();
    }

    async assertSelectedOption(value, expectedText) {
        const selectedOptionValue = await this.dropdown.inputValue();
        expect(selectedOptionValue).toBe(value);
        const selectedOptionText = await this.getSelectedOptionText();
        expect(selectedOptionText).toBe(expectedText);
    }

}

module.exports = { DropdownPage };