import { test } from '../fixtures/base.ts';
import { Config } from '../utils/config.ts';

test('@smoke @regression Login with valid credentials and Logout', async ({ loginPage }) => {

    await loginPage.openApplication();

    await loginPage.login(Config.username, Config.password);

    await loginPage.verifyDashboard();

    await loginPage.logout();

    await loginPage.verifyLoginPage();
});

test('@regression Verify invalid login with incorrect credentials', async ({ loginPage }) => {

    await loginPage.openApplication();

    await loginPage.login(Config.username, Config.wrongPassword);

    await loginPage.verifyInvalidLogin();
    
    await loginPage.verifyLoginPage();

});