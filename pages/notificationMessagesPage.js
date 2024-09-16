class NotificationMessagesPage {

    constructor(page) {
        this.page = page;
        this.notificationLink = page.locator('a[href="/notification_message"]');
        this.notificationMessage = page.locator('.flash');
    }

    async goto() {
        await this.page.goto('/notification_message_rendered');
    }

    async clickNotificationLink() {
        await this.notificationLink.click();
    }

    async getNotificationMessage() {
        return await this.notificationMessage.textContent();
    }

}

module.exports = {NotificationMessagesPage};