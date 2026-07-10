import { test } from '../fixtures/base.ts';
import { TestData } from '../utils/TestData';
import { Config } from '../utils/config.ts';


test('@smoke Search Existing Employee', async ({ loginPage, pimPage }) => {

    // Login
    await loginPage.openApplication();
    await loginPage.login(Config.username, Config.password);
    await loginPage.verifyDashboard();

    // Navigate to PIM
    await pimPage.clickPIMMenu();

    // Search employee
    await pimPage.searchEmployee("Amelia");

    // Verify search result
    await pimPage.verifySearchResult("Amelia");

});

test('@smoke @regression Add Employee and Verify', async ({
    loginPage,
    pimPage,
    addEmployeePage
}) => {

    // Generate unique employee name
    const firstName = TestData.firstName();
    const lastName = TestData.lastName();

    // Login
    await loginPage.openApplication();

    await loginPage.login(Config.username, Config.password);

    await loginPage.verifyDashboard();

    // Navigate to PIM
    await pimPage.clickPIMMenu();

    // Open Add Employee
    await addEmployeePage.clickAddEmployee();

    // Create employee
    await addEmployeePage.addEmployee(firstName, lastName);

    // Verify employee profile page
    await addEmployeePage.verifyEmployeeCreated();

    // Navigate back to PIM
    await pimPage.clickPIMMenu();

    // Search newly created employee
    await pimPage.searchEmployee(firstName);

    // Verify search result
    await pimPage.verifySearchResult(firstName);

});