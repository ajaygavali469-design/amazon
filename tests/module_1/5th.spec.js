import { test, expect } from '@playwright/test';

// TEST CASE 5: Payment Options
test('Amazon Payment Options', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
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

    await page.goto('https://www.amazon.in/gp/css/homepage.html');
    await page.locator('//a[@href="https://www.amazon.in/cpe/managepaymentmethods?ref_=ya_d_c_pmt_mpo"]').click();
    await page.waitForTimeout(3000);
});
