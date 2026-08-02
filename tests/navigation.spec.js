import { test, expect } from "@playwright/test";

test.describe("Navigation and UI", () => {
  test("Mobile navigation toggle opens and closes the menu", async ({
    page,
    isMobile,
  }) => {
    // 1. Go to the homepage
    await page.goto("/");

    // 2. Define the elements we want to interact with
    // Replace these selectors with the actual IDs or classes from your project
    const navToggle = page.locator(".nav-toggle");
    const navMenu = page.locator(".main-nav");

    if (isMobile) {
      // --- MOBILE BEHAVIOR ---
      // 1. Ensure it starts hidden
      await expect(navMenu).toBeHidden();

      // 2. Click to open
      await navToggle.click();

      // 3. Verify it opened
      await expect(navMenu).toBeVisible();

      // 4. Click to close
      await navToggle.click();

      // 5. Verify it closed
      await expect(navMenu).toBeHidden();
    } else {
      // --- NON-MOBILE (DESKTOP) BEHAVIOR ---
      // The menu should just be visible by default
      await expect(navMenu).toBeVisible();

      // Optional but recommended: Verify the hamburger toggle is hidden on desktop
      await expect(navToggle).toBeHidden();
    }
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
