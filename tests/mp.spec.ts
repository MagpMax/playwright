import { test, expect } from '@playwright/test';

test('Buscar licitación y validar resultado', async ({ page }) => {
    
    // ir a la página
    await page.goto('https://www.mercadopublico.cl/Home');

    // buscar inpuot text
    await page.fill('#txtBuscar', '548874-175-LR24');

    // buscar buton
    await page.click('#btnBuscar');
    console.log('click ejecutado');

    //buscar en la pagina de resultados dentro del Iframe.
    console.log(await page.url());
    const frame = page.frameLocator('#form-iframe');

    await expect(
    frame.locator('.n-result')
    ).toHaveText('1');
});