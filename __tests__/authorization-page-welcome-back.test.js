import HomePage from '../pages/homePage';
import AuthorizationPage from '../pages/authorizationPage';
import UserPage from '../pages/userPage';

import {
    EMAIL,
    PASSWORD,
    JEST_TIME_OUT,
    HOME_PAGE_URL,
    AUTHORIZATION_PAGE_URL
} from '../config';

describe('Testing Authorization page. Not registered user', () => {

    let homepage;
    let authorizationpage;
    let userpage;

    beforeAll(async () => {
        jest.setTimeout(JEST_TIME_OUT);

        homepage = new HomePage();
        authorizationpage = new AuthorizationPage();
        userpage = new UserPage();
    });

    it('0. Open Home page and click on "LOG IN" text', async () => {

        await homepage.visit();

        let urlHomePage = await homepage.getUrl();
        expect(urlHomePage).toBe(HOME_PAGE_URL);

        await homepage.buttonDisplayed();
        await homepage.clickLogIn();

    });

    it('1. On the authorization page enter valid email and password for previously registered user (to check entered password, click on "eye” icon in password field.)', async () => {

        await authorizationpage.defaultTimeout(10000);

        await authorizationpage.isLoginFormDisplayed();

        let urlAuthorizationPage = await authorizationpage.getUrl();
        expect(urlAuthorizationPage).toBe(AUTHORIZATION_PAGE_URL);

        await authorizationpage.login(EMAIL, PASSWORD);
        await authorizationpage.displayPassword();
        await authorizationpage.submitLogin();

    });

    it('2. "Log in" button has to be changed on "User@email" button (with dropdown menu) from the left side in the Header of the page',async () => {

        await userpage.isUserFormDisplayed();

    });

}); // describe (Testing Authorization page. Not registered user)

