import BasePage from './basePage';

export default class AuthorizationPage extends BasePage {

    async isLoginFormDisplayed() {
        await page.waitForSelector('input[type="email"]');
        await page.waitForSelector('input[type="password"]');
        await page.waitForSelector('button[class="btn block primary"]');
    }

    async login(
        email,
        password
    ) {
        await page.waitForSelector('input[type="email"]');
        await page.type('input[type="email"]', email);
        await page.type('input[type="password"]', password);
    }

    async submitLogin() {
        await page.click('button[class="btn block primary"]');
    }

    async displayPassword() {
        await page.click('button[class="btn-input btn-input-block"]');
    }

    async errorMessage() {
        await page.waitForSelector('.ssls-notification__info');
        return await page.$eval('.ssls-notification__info', element => element.innerText);
    }
}
