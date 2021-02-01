export default class UserForm {

    async isUserFormDisplayed() {
        await page.waitForSelector('button[class="ssls-btn waves-effect waves-classic ssls-btn--sm ssls-dropdown__toggle ssls-header-btn"]');
    }

}