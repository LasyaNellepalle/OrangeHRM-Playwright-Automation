import { Page, Locator, expect } from '@playwright/test';
import { Config } from '../utils/config.ts';

export class LoginPage {

    readonly page: Page;
    readonly txtUsername: Locator;
    readonly txtPassword: Locator;
    readonly btnLogin: Locator;
    readonly lblDashboard: Locator;
    readonly lblErrorMessage: Locator;
    readonly userDropdown: Locator;
    readonly lnkLogout: Locator;

    constructor(page: Page) {
        this.page = page;

        // Login Page
        this.txtUsername = page.locator('input[name="username"]');
        this.txtPassword = page.locator('input[name="password"]');
        this.btnLogin = page.getByRole('button', { name: 'Login' });

        // Dashboard
        this.lblDashboard = page.getByRole('heading', { name: 'Dashboard' });

        // Invalid Login
        this.lblErrorMessage = page.locator('.oxd-alert-content-text');

        // Logout
        this.userDropdown = page.locator('.oxd-userdropdown-tab');
        this.lnkLogout = page.getByRole('menuitem', { name: 'Logout' });
    }

    // Open OrangeHRM Login Page
    async openApplication() {
        await this.page.goto(Config.url);
    }

    // Login
    async login(username: string, password: string) {
        await this.txtUsername.fill(username);
        await this.txtPassword.fill(password);
        await this.btnLogin.click();
    }

    // Verify Dashboard
    async verifyDashboard() {
        await expect(this.lblDashboard).toBeVisible();
        await expect(this.page).toHaveURL(/dashboard/);
    }

    // Verify Invalid Login
    async verifyInvalidLogin() {
        await expect(this.lblErrorMessage).toHaveText('Invalid credentials');
        await expect(this.page).toHaveURL(/login/);
    }

    // Logout
    async logout() {
        await this.userDropdown.click();
        await this.lnkLogout.click();
    }

    // Verify Login Page
    async verifyLoginPage() {
        await expect(this.btnLogin).toBeVisible();
        await expect(this.page).toHaveURL(/login/);
    }
}