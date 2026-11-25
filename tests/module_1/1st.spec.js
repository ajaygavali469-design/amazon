
import { test, expect } from '@playwright/test';

// TEST CASE 1: shopping list
test('Amazon shopping List', async ({ page }) => {

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

    await page.locator('//*[@id="nav-link-accountList"]/a').hover();
    await page.locator('//a[@href="/hz/wishlist/ls/OPYOLI0Z5T7N/ref=nav_wishlist_lists_1"]').click();
    await page.locator('//input[@data-csa-c-action="navigate:list_d_wl_ul_click_add_keyword"]').click();
    let a = await page.locator('//input[@class="a-input-text a-span12"]');
    await a.fill('ajay1')
    await a.press('Enter');
    await page.waitForTimeout(3000);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(3000);
});
