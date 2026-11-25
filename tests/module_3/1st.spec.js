import { test, expect } from '@playwright/test';

// TEST CASE 1: Price Low to High + Add to Cart
test('Low to High - Add Product to Cart', async ({ page }) => {

    await page.goto('https://www.amazon.in/');
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('Laptop');
    await page.locator('//input[@id="nav-search-submit-button"]').click();
    await page.locator('//select[@id="s-result-sort-select"]').selectOption({ label: 'Price: Low to High' });
    await page.waitForTimeout(3000);
    await page.locator('(//input[@name="submit.addToCart" ])[1]').click();
    await page.waitForTimeout(3000);
    await page.locator('//a[@id="nav-cart"]').click();

});