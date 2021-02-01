import BasePage from './basePage';

export default class LoginPage extends BasePage {

    async isLoginFormDisplayed() {
        await page.waitForSelector('input[type="email"]');
        await page.waitForSelector('input[type="password"]');
        await page.waitForSelector('button[type="submit"]');
    }

    async login(
        email,
        password
    ) {
        await page.waitForSelector('input[type="email"]');
        await page.type('input[type="email"]', email);
        await page.type('input[type="password"]', password);
        await page.click('button[type="submit"]');
    }

}
