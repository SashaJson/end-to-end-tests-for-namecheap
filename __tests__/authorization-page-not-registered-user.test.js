import HomePage from '../pages/homePage';
import AuthorizationPage from '../pages/authorizationPage';

import randomGenerationEmailPassword from '../helpers/randomGenrationEmailPassword';

import {
    JEST_TIME_OUT,
    HOME_PAGE_URL,
    AUTHORIZATION_PAGE_URL
} from '../config';

describe('Testing Authorization page. Not registered user', () => {

    const TEXT_ERROR_MESSAGE_LOGIN = 'Uh oh! Email or password is incorrect';

    let {
        email: notRegisterEmail,
        password: notExistEmail
    } = randomGenerationEmailPassword();

    let homepage;
    let authorizationpage;

    beforeAll(async () => {
        jest.setTimeout(JEST_TIME_OUT);

        homepage = new HomePage();
        authorizationpage = new AuthorizationPage();
    });

    it('0. Open Home page and click on "LOG IN" text', async () => {

        await homepage.visit();

        let urlHomePage = await homepage.getUrl();
        expect(urlHomePage).toBe(HOME_PAGE_URL);

        await homepage.buttonDisplayed();
        await homepage.clickLogIn();

    });

    it('1. On the authorization page enter not registered email and any password and after that click "Login" button', async () => {

        await authorizationpage.defaultTimeout(10000);

        await authorizationpage.isLoginFormDisplayed();

        let urlAuthorizationPage = await authorizationpage.getUrl();
        expect(urlAuthorizationPage).toBe(AUTHORIZATION_PAGE_URL);

        await authorizationpage.login(notRegisterEmail, notExistEmail);
        await authorizationpage.displayPassword();
        await authorizationpage.submitLogin();

        let errorMessage = await authorizationpage.errorMessage();
        expect(errorMessage).toBe(TEXT_ERROR_MESSAGE_LOGIN);

    });

}); // describe (Testing Authorization page. Not registered user)

