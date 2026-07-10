import { Page, Locator, expect } from '@playwright/test';

export class AddEmployeePage {

    readonly page: Page;
    readonly lnkAddEmployee: Locator;
    readonly txtFirstName: Locator;
    readonly txtLastName: Locator;
    readonly btnSave: Locator;
    readonly lblPersonalDetails: Locator;

    constructor(page: Page) {

        this.page = page;

        this.lnkAddEmployee = page.getByRole('link', { name: 'Add Employee' });

        this.txtFirstName = page.locator("input[name='firstName']");

        this.txtLastName = page.locator("input[name='lastName']");

        this.btnSave = page.getByRole('button', { name: 'Save' });
        this.lblPersonalDetails = page.getByRole('heading', {
            name: 'Personal Details'});

    }

    async clickAddEmployee() {

        await this.lnkAddEmployee.click();

    }

    async addEmployee(firstName: string, lastName: string) {

        await this.txtFirstName.fill(firstName);

        await this.txtLastName.fill(lastName);

        await this.btnSave.click();

    }

    async verifyEmployeeCreated() {

        await this.lblPersonalDetails.waitFor({state: 'visible',timeout: 15000});

        await expect(this.lblPersonalDetails).toBeVisible();

    }

}