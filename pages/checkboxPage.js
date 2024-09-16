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

    async selectCheckbox1() {
        await this.checkbox1.click();
    }

    async selectCheckbox2() {
        await this.checkbox2.click();
    }

    async isCheckbox1Checked() {
        return await this.checkbox1.isChecked();
    }

    async isCheckbox2Checked() {
        return await this.checkbox2.isChecked();
    }

}

module.exports = {CheckboxesPage};