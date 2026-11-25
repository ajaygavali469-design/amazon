import { test, expect } from '@playwright/test';

// TEST CASE 4: Your Addresses
test('Amazon Your Addresses', async ({ page }) => {

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
    await page.locator('//a[@href="https://www.amazon.in/a/addresses?ref_=ya_d_c_addr"]').click();
    await page.locator('//a[@href="/a/addresses/add?ref=ya_address_book_add_button"]').click();
    await page.locator('//select[@name="address-ui-widgets-countryCode"]').selectOption('India');
    await page.locator('//input[@name="address-ui-widgets-enterAddressFullName"]').fill('Ajay R Gavali');
    await page.locator('//input[@id="address-ui-widgets-enterAddressPhoneNumber"]').fill('1234567890');
    await page.locator('//input[@id="address-ui-widgets-enterAddressPostalCode"]').fill('421605');
    await page.locator('//input[@name="address-ui-widgets-enterAddressLine1"]').fill('123 Main Street');
    await page.locator('//input[@name="address-ui-widgets-enterAddressLine2"]').fill('Apt 4B');
    await page.locator('//input[@id="address-ui-widgets-enterAddressLine2"]').fill('nandap road');
    await page.locator('//input[@id="address-ui-widgets-landmark"]').fill('g.r. patil college');
    await page.locator('//input[@id="address-ui-widgets-enterAddressCity"]').fill('titwala');
    await page.locator('//select[@name="address-ui-widgets-enterAddressStateOrRegion"]').selectOption('MAHARASHTRA');
    await page.locator('//input[@id="address-ui-widgets-use-as-my-default"]').click();
    await page.locator('//input[@aria-labelledby="address-ui-widgets-form-submit-button-announce"]').click();
    await page.waitForTimeout(3000);
});
