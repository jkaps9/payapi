import { test, expect } from "@playwright/test";

test.describe("Navigation and UI", () => {
  test("Mobile navigation toggle opens and closes the menu", async ({
    page,
  }) => {
    // 1. Go to the homepage
    await page.goto("/");

    // 2. Define the elements we want to interact with
    // Replace these selectors with the actual IDs or classes from your project
    const navToggle = page.locator(".nav-toggle");
    const navMenu = page.locator(".main-nav");

    // 3. Depending on your CSS, check if it's hidden.
    // If you use `display: none` or `visibility: hidden`:
    await expect(navMenu).toBeHidden();
    // OR, if you just slide it off screen, you might check for a class:
    // await expect(navMenu).not.toHaveClass(/is-active/);

    // 4. Click the button to open
    await navToggle.click();

    // 5. Verify it opened
    await expect(navMenu).toBeVisible();

    // 6. Click again to close
    await navToggle.click();

    // 7. Verify it closed
    await expect(navMenu).toBeHidden();
  });

  test("Form renders and accepts input", async ({ page }) => {
    await page.goto("/contact/"); // or wherever your form is

    // Find an input field and type into it
    const nameInput = page.locator('input[name="full-name"]');
    await nameInput.fill("Jane Doe");

    // Verify the input accepted the text
    await expect(nameInput).toHaveValue("Jane Doe");
  });
});
