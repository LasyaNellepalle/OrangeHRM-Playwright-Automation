import { Page, Locator, expect } from '@playwright/test';

export class PIMPage {

    readonly page: Page;
    readonly menuPIM: Locator;
    readonly txtEmployeeName: Locator;
    readonly btnSearch: Locator;
    readonly tblRecords: Locator;
    readonly txtNoRecords: Locator;

    constructor(page: Page) {

        this.page = page;

        this.menuPIM = page.getByRole('link', { name: 'PIM' });

        this.txtEmployeeName = page.locator("input[placeholder='Type for hints...']").first();

        this.btnSearch = page.getByRole('button', { name: 'Search' });

        this.tblRecords = page.locator(".oxd-table-body");

        this.txtNoRecords = page.getByText("No Records Found");

    }

    async clickPIMMenu() {

        await this.menuPIM.click();

    }

    async searchEmployee(employeeName: string) {

        await this.txtEmployeeName.fill(employeeName);

        await this.btnSearch.click();

    }

    async verifySearchResult(employeeName: string) {

    if (await this.txtNoRecords.isVisible()) {

        await expect(this.txtNoRecords).toHaveText("No Records Found");

    } else {

        await expect(this.tblRecords).toContainText(employeeName);

    }

}};