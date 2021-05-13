import AuthorizationPage from '../pages/authorizationPage';
import UserForm from '../pages/components/userForm';
import ProfilePage from '../pages/profilePage';
import { JEST_TIME_OUT } from '../static-data';
import HomePage from '../pages/homePage';

describe('Testing My profile page. Client area', () => {

    let homepage;
    let authorizationpage;
    let profilepage;
    let userform;

    let profileData = {};

    beforeAll(async () => {
        jest.setTimeout(JEST_TIME_OUT);

        homepage = new HomePage();
        authorizationpage = new AuthorizationPage();
        profilepage = new ProfilePage();
        userform = new UserForm();
    });

    describe('Precondition', () => {

        it('0. Open Home page and click on "LOG IN" text', async () => {

            await homepage.visit();
            await homepage.buttonDisplayed();
            await homepage.clickLogIn();

        });

        it('1. On the authorization page enter valid email and password', async () => {

            await authorizationpage.defaultTimeout(10000);
            await authorizationpage.isLoginFormDisplayed();
            await authorizationpage.login(process.env.EMAIL, process.env.PASSWORD);
            await authorizationpage.submitLogin();
            await authorizationpage.wait(5000);

        });

        it('2. In drop-down menu select "Profile"', async () => {

            await userform.isUserFormDisplayed();
            await userform.clickUserForm();
            await userform.clickToProfile();

        });

        it('3. Save values to a variable(Do not change saved values) of such fields in Profile - Name, Email, Phone, Address, Support Pin, Newsletter',async () => {

            await profilepage.isProfileFormDisplayed();

            profileData.name = await profilepage.getName();
            profileData.email = await profilepage.getEmail();
            profileData.password = await profilepage.getPassword();
            profileData.phone = await profilepage.getPhone();
            profileData.address = await profilepage.getAddress();
            profileData.supportPin = await profilepage.getSupportPin();
            profileData.newsletter = await profilepage.getNewsletter();

        });

        it('4. Log out', async () => {

           await userform.clickUserForm();
           await userform.clickLogOut();

        });

    }); // describe (Precondition)

    describe('Log in to Account', () => {

        it('0. Open Home page and click on "LOG IN" text',async () => {

            await homepage.wait(5000);
            await homepage.visit();
            await homepage.buttonDisplayed();
            await homepage.clickLogIn();

        });

        it('1. On the authorization page enter valid email and password', async () => {

            await authorizationpage.defaultTimeout(10000);
            await authorizationpage.isLoginFormDisplayed();
            await authorizationpage.login(process.env.EMAIL, process.env.PASSWORD);
            await authorizationpage.submitLogin();
            await authorizationpage.wait(5000);

        });

        it('2. In drop-down menu select "Profile"', async () => {

            await userform.isUserFormDisplayed();
            await userform.clickUserForm();
            await userform.clickToProfile();

        });

    }); // describe (Log in to Account)

    it('3. After click on "Profile" opened page "Profile" should be displayed', async () => {

        await profilepage.isProfileFormDisplayed();

        let name = await profilepage.getName();
        let email = await profilepage.getEmail();
        let password = await profilepage.getPassword();
        let phone = await profilepage.getPhone();
        let address = await profilepage.getAddress();
        let supportPin = await profilepage.getSupportPin();
        let newsletter = await profilepage.getNewsletter();

        expect(name).toBe(profileData.name);
        expect(email).toBe(profileData.email);
        expect(password).toBe(profileData.password);
        expect(phone).toBe(profileData.phone);
        expect(address).toBe(profileData.address);
        expect(supportPin).toBe(profileData.supportPin);
        expect(newsletter).toBe(profileData.newsletter);

    });

}); // describe (Testing My profile page. Client area)
