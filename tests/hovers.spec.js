const {test, expect} = require('@playwright/test');
const {HoversPage} = require('../pages/HoversPage');

test.describe('Hovers Tests', () => {

    let hoversPage;

    test.beforeEach(async ({page}) => {
        hoversPage = new HoversPage(page);
        await hoversPage.goto();
    });

    test('Should display user information when hovering over avatar', async () => {
        await hoversPage.hoverOverAvatar();
        const userInfoText = await hoversPage.getUserInfoText();
        expect(userInfoText).toContain('name: user1');
    });

});