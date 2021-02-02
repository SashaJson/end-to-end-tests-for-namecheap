import BasePage from './basePage';

export default class ProfilePage extends BasePage {

    async isProfileFormDisplayed() {
        // it is ugly, i'm know
        await page.waitForSelector('form[name="form"] > div:nth-child(1) > div.description > span');
        await page.waitForSelector('form[name="form"] > div:nth-child(2) > div.description > span');
        await page.waitForSelector('form[name="form"] > div:nth-child(3) > div.description > span');
        await page.waitForSelector('form[name="form"] > div:nth-child(4) > div.description > span');
        await page.waitForSelector('form[name="form"] > div:nth-child(5) > div.description > span');
        await page.waitForSelector('form[name="form"] > div:nth-child(6) > div.description > span');
        await page.waitForSelector('form[name="form"] > div:nth-child(7) > div.description > span');
    }

    async getName() {
        // it is ugly, i'm know
        return await page.$eval('form[name="form"] > div:nth-child(1) > div.description > span', element => element.innerText);
    }

    async getEmail() {
        // it is ugly, i'm know
        return await page.$eval('form[name="form"] > div:nth-child(2) > div.description > span', element => element.innerText);
    }

    async getPassword() {
        // it is ugly, i'm know
        return await page.$eval('form[name="form"] > div:nth-child(3) > div.description > span', element => element.innerText);
    }

    async getPhone() {
        // it is ugly, i'm know
        return await page.$eval('form[name="form"] > div:nth-child(4) > div.description > span', element => element.innerText);
    }

    async getAddress() {
        // it is ugly, i'm know
        return await page.$eval('form[name="form"] > div:nth-child(5) > div.description > span', element => element.innerText);
    }

    async getSupportPin() {
        // it is ugly, i'm know
        return await page.$eval('form[name="form"] > div:nth-child(6) > div.description > span', element => element.innerText);
    }

    async getNewsletter() {
        // it is ugly, i'm know
        return await page.$eval('form[name="form"] > div:nth-child(7) > div.description > span', element => element.innerText);
    }
}