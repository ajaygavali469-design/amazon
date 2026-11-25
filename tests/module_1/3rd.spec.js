import { test, expect } from '@playwright/test';

// TEST CASE 3: Login & Security
test('Amazon Login and Security', async ({ page }) => {

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
    await page.locator('//a[@href="https://www.amazon.in/ap/cnep?openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fyour-account&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"]').click();
    await page.locator('//input[@id="auth-cnep-edit-name-button"]').click();
    await page.locator('//input[@name="customerName"]').fill('Ajay R Gavali');
    await page.locator('//input[@class="a-button-input"]').click();
    await page.waitForTimeout(3000);
});
