const { test} = require('@playwright/test');
const { HoversPage } = require('../pages/HoversPage');

test.describe('Hovers Tests', () => {

    let hoversPage;

    test.beforeEach(async ({ page }) => {
        hoversPage = new HoversPage(page);
        await hoversPage.goto();
    });

    test('Should hover and display user information', async () => {
        await hoversPage.hoverOverAvatar();
        await hoversPage.assertUserInfoText('name: user1');
    });
});

