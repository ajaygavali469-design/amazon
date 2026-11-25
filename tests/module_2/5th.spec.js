import { test, expect } from '@playwright/test';

// TC_05 - Help & Settings - Customer Service
test('TC_05 - Customer Service', async ({ page }) => {
    await page.goto('https://www.amazon.in/');
    // Login
    await page.locator('//*[@id="nav-link-accountList"]/a').click();
    await page.locator('//input[@name="email"]').fill('ajayrgavali@gmail.com');
    await page.locator('//input[@type="submit"]').click();
    if (await page.locator('//*[@id="auth-signin-button"]/span/a').isVisible()) {
        await page.locator('//*[@id="auth-signin-button"]/span/a').click();
        await page.locator('//input[@name="password"]').fill('Ajay@123');
        await page.locator('(//input[@type="submit"])[1]').click();
    }
    else {
        await page.locator('//input[@name="password"]').fill('Ajay@123');
        await page.locator('(//input[@type="submit"])[1]').click();
    }
    await page.waitForTimeout(5000);

    await page.locator('//a[@id="nav-hamburger-menu"]').click();

    await page.locator('(//a[@href="/gp/css/homepage.html?ref_=nav_em_ya_0_1_1_35"])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//a[@href="/gp/css/homepage.html?ref_=nav_em_ya_0_1_1_35"])[1]').click();
    await page.waitForTimeout(3000);

});
