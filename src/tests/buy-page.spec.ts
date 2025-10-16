import { test, expect } from "@playwright/test";

test("Buy page loads and submits form", async ({ page }) => {
  await page.goto("http://localhost:3000/buy");

  // Check title
  await expect(page.locator("h1")).toHaveText("Checkout");

  // Fill out the form
  await page.fill('input[name="name"]', "Jaydin Tester");
  await page.fill('input[name="email"]', "test@example.com");
  await page.fill('input[name="phone"]', "0812345678");
  await page.fill('input[name="address"]', "123 Math Street");
  await page.fill('input[name="city"]', "Cape Town");
  await page.fill('input[name="code"]', "8000");

  // Simulate submission
  const [response] = await Promise.all([
    page.waitForResponse(/api\/payfast\/checkout/),
    page.click("text=Pay Securely"),
  ]);

  expect(response.status()).toBe(200);
});
