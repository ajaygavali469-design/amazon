import { test, expect } from '@playwright/test';


// TC_03 - Shop by Category - Electronics
test('TC_03 - TV Appliances Electronics', async ({ page }) => {
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

    await page.locator('(//a[@data-ref-tag="nav_em_1_1_1_13"])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//a[@data-ref-tag="nav_em_1_1_1_13"])[1]').click();
    await page.waitForTimeout(3000);

    await page.locator('(//a[@href="/gp/browse.html?node=1389396031&ref_=nav_em_sbc_tvelec_television_0_2_9_2"])[2]').scrollIntoViewIfNeeded();
    await page.locator('(//a[@href="/gp/browse.html?node=1389396031&ref_=nav_em_sbc_tvelec_television_0_2_9_2"])[2]').click();
    await page.locator('(//a[@class="a-link-normal s-line-clamp-4 s-link-style a-text-normal"])[1]').click();
    await page.waitForTimeout(3000);
    await page.locator('xpath=/html/body/div[1]/div[1]/div[2]/div[5]/div[1]/div[8]/div/div[1]/div/div/div/form/div/div/div/div/div[4]/div/div[17]/div[1]/span/span/span/input').click();
    await page.waitForTimeout(3000);
    await page.locator('//a[@aria-label="Exit this panel and return to the product page."]').click();
    await page.waitForTimeout(3000);
    await page.locator('//a[@id="nav-cart"]').click();
    await page.waitForTimeout(3000);

});
