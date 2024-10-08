const {test, expect} = require('@playwright/test');
const {NotificationMessagesPage} = require('../pages/NotificationMessagesPage');

test.describe('Notification Messages Tests', () => {

    let notificationMessagesPage;

    test.beforeEach(async ({page}) => {
        notificationMessagesPage = new NotificationMessagesPage(page);
        await notificationMessagesPage.goto();
    });

    test('Should display notification message after clicking the link', async () => {
        await notificationMessagesPage.clickNotificationLink();
        const message = await notificationMessagesPage.getNotificationMessage();
        expect(message).toBeTruthy();
    });

});