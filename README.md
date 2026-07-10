OrangeHRM Playwright Automation FrameworkOverview

This project contains an automated test suite developed using Playwright with TypeScript for the public OrangeHRM demo application.

Application URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

The framework follows the Page Object Model (POM) design pattern to improve readability, maintainability, and reusability.

Setup Instructions

Install dependencies

npm install
Install Playwright browsers
npx playwright install

Execution Instructions

Run all tests
npx playwright test

Run a specific test file
npx playwright test tests/login.spec.ts

Run tests in headed mode
npx playwright test --headed

Design Notes

This automation framework follows the Page Object Model (POM) to separate page interactions from test logic, making the tests easier to read and maintain. Each page contains only the locators and reusable methods related to that page, while the test classes focus on the business scenarios.

I primarily used Playwright's recommended locators such as getByRole() and locator() to create stable and readable selectors. Where accessible locators were available, they were preferred over brittle XPath expressions.

Synchronization is handled using Playwright's built-in auto-waiting and expect() assertions rather than hard-coded waits. For page transitions and dynamic elements, I relied on Playwright's waiting mechanisms to improve test stability.

Dynamic employee data is generated at runtime using timestamp-based values to avoid duplicate employee names and ensure repeatable test execution.

The framework also includes reusable configuration and test data classes to centralize application settings and test inputs. HTML reporting, screenshots, traces, retries, and videos are configured through playwright.config.ts to simplify debugging and provide clear execution results.