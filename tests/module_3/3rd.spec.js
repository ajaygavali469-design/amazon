import { test, expect } from '@playwright/test';

// TEST CASE 3: Customer Review + Add to Cart
test('Customer Review - Add Product to Cart', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('Headphones');
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    await page.locator('//select[@id="s-result-sort-select"]').selectOption({ label: 'Avg. Customer Review' });
    await page.waitForTimeout(3000);
    await page.locator('(//input[@name="submit.addToCart" ])[1]').click();
    await page.waitForTimeout(3000);
    await page.locator('//a[@id="nav-cart"]').click();

});
