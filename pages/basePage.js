export default class HomePage {

    async wait(time) {
        await page.waitForTimeout(time);
    }

    async defaultTimeout(time) {
        await page.setDefaultTimeout(time);
    }

    async getTitle() {
        return await page.title();
    }

    async getUrl() {
        return await page.url();
    }

    async getText(selector) {
        await page.waitForSelector(selector);
        return await page.$eval(selector, element => element.innerHTML);
    }

    async getCount(selector) {
        await page.waitForSelector(selector);
        return await page.$$eval(selector, element => element.length);
    }

    async shouldNotExist(selector) {
        await page.waitForSelector(selector, {hidden: true});
    }

}