import { test, expect } from '@playwright/test';

// TEST CASE 2: Your Orders
test('Amazon Your Orders', async ({ page }) => {

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
    await page.locator('(//a[@class="a-link-normal ya-card__whole-card-link"])[1]').click();

    await page.waitForTimeout(3000);
});
