import { test, expect } from '@playwright/test';

test('IR al concurso', async ({ page }) => {

  await page.goto('https://anid.cl/concursos/');

  // ir al tipo de concurso
  await Promise.all([
    page.waitForURL(/areas:8/),
    page.getByRole('link', {
      name: /Proyectos de Investigación/i
    }).click()
  ]);

  // precionar concurso a concurssar
  const concurso = page.locator(
    '.jet-listing-grid__item:has(h3:has-text("Concurso de Proyectos Fondecyt Regular 2027"))'
  );

  await concurso
    .locator('a[href*="concurso-de-proyectos-fondecyt-regular-2027"]')
    .first()
    .click();

  //PRESIONAR POSTULAR

  //PRESIONAR POSTULAR
  const postulaBtn = page.locator(
      'a.jet-listing-dynamic-link__link:has-text("Postula")'
    );

    const [popup] = await Promise.all([
      page.waitForEvent('popup'),
      postulaBtn.click()
    ]);

    await popup.waitForLoadState();

    await popup.getByRole('button', { name: 'Continuar' }).click();

    console.log('click ejecutado');

    //usuario y pass
       // buscar inpuot text
    await popup.locator('input[name="username"]').waitFor();

    await popup.locator('input[name="username"]').fill('correo@ejemplo.cl');
    await popup.locator('input[name="password"]').fill('xxxxxx');

    await popup.getByRole('button', { name: 'Siguiente' }).click();



});
