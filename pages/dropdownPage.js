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

}

module.exports = {DropdownPage};