import BasePage from './basePage';

import {HOME_PAGE_URL} from '../config';

export default class HomePage extends BasePage {

    async visit() {
        await page.goto(HOME_PAGE_URL);
    }

    async buttonDisplayed() {
        await page.waitForSelector('button[class="ssls-btn waves-effect waves-classic ssls-btn--sm ssls-header-btn"]');
    }

    async clickLogIn() {
        await page.click('button[class="ssls-btn waves-effect waves-classic ssls-btn--sm ssls-header-btn"]');
    }

}