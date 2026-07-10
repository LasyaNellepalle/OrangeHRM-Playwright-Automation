import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { PIMPage } from '../pages/PIMPage';
import { AddEmployeePage } from '../pages/AddEmployeePage.ts';

type MyFixtures = {
    loginPage: LoginPage;
    pimPage: PIMPage;
    addEmployeePage: AddEmployeePage;
};

export const test = base.extend<MyFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    pimPage: async ({ page }, use) => {
        await use(new PIMPage(page));
    },
    addEmployeePage: async ({ page }, use) => {

    await use(new AddEmployeePage(page));

}
});

export { expect };