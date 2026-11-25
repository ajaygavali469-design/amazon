import { test, expect } from '@playwright/test';

// TC_01 - Trending - Best Sellers
test('TC_01 - Best Sellers', async ({ page }) => {
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

    // Open hamburger menu
    await page.locator('//a[@id="nav-hamburger-menu"]').click();

    // Click sub-option, not the Trending heading
    await page.locator('(//section[@class="category-section"]/descendant::a[@href="/gp/bestsellers/?ref_=nav_em_cs_bestsellers_0_1_1_2"])[1]').scrollIntoViewIfNeeded();
    await page.locator('(//section[@class="category-section"]/descendant::a[@href="/gp/bestsellers/?ref_=nav_em_cs_bestsellers_0_1_1_2"])[1]').click();
    await page.waitForTimeout(3000);

    // Open first product and add to cart
    await page.locator('(//a[@class="a-link-normal aok-block"])[1]').click();
    await page.waitForTimeout(3000);
    await page.locator('xpath=/html/body/div[1]/div[1]/div[2]/div[5]/div[1]/div[8]/div/div[1]/div/div[1]/div/div/div[1]/div/div[2]/div/form/div/div/div[17]/div[1]/span/span/span/input').click();
    await page.waitForTimeout(3000);

    // Verify cart
    await page.locator('//a[@id="nav-cart"]').click();
    await page.waitForTimeout(3000);

});
