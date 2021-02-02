export default class UserForm {

    async isUserFormDisplayed() {
        await page.waitForSelector('i[class="ssls-icon ssls-icon-user-circle"]');
    }

    async clickUserForm() {
        await page.click('i[class="ssls-icon ssls-icon-user-circle"]');
    }

    async clickToProfile() {

        // it is ugly, i'm know
        await page.waitForSelector('ul[class="ssls-header-dropdown-nav ssls-header-user-nav"] > li:nth-child(2)');
        await page.click('ul[class="ssls-header-dropdown-nav ssls-header-user-nav"] > li:nth-child(2)');

    }

    async clickLogOut() {

        // it is ugly, i'm know
        await page.waitForSelector('ul[class="ssls-header-dropdown-nav ssls-header-user-nav"] > li:nth-child(5)');
        await page.click('ul[class="ssls-header-dropdown-nav ssls-header-user-nav"] > li:nth-child(5)');

    }

}