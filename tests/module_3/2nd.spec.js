import { test, expect } from '@playwright/test';

// TEST CASE 2: Price High to Low + Add to Cart
test('High to Low - Add Product to Cart', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('Mobile Phone');
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    await page.locator('//select[@id="s-result-sort-select"]').selectOption({ label: 'Price: High to Low' });
    await page.waitForTimeout(3000);
    await page.locator('(//input[@name="submit.addToCart" ])[1]').click();
    await page.waitForTimeout(3000);
    await page.locator('//a[@id="nav-cart"]').click();

});
