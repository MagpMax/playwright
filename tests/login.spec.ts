import {test,expect} from "@playwright/test"


test("Validar formulario de login", async ({page}) => {
    // paso 1
    await page.goto("https://practicesoftwaretesting.com/");

    await expect(page).toHaveTitle("Practice Software Testing - Toolshop - v5.0");

    // paso 2 iniciar sesion
    await page.getByTestId("nav-sign-in").click();

    await page.getByTestId("email").fill("customer@practicesoftwaretesting.com");
    await page.getByTestId("password").fill("welcome01")
    
    await page.getByTestId("login-submit").click();

    // paso 3 validar que se inicio sesion
    await expect(page.getByTestId("page-title")).toContainText("My account");
});