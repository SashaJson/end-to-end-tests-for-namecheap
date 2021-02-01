import BasePage from './basePage';

export default class HomePage extends BasePage {

    async visit() {
        await page.goto('https://www.sbzend.ssls.com');
    }

    async buttonDisplayed() {
        await page.waitForSelector('button[class="ssls-btn waves-effect waves-classic ssls-btn--sm ssls-header-btn"]');
    }

    async clickLogIn() {
        await page.click('button[class="ssls-btn waves-effect waves-classic ssls-btn--sm ssls-header-btn"]');
    }

}