import { test, expect } from '@playwright/test';

test('Validar formulario de registro', async ({ page }) => {

  // 1. Abrir formulario local
  await page.goto('file:///C:/Users/migue/Desarrollos/Formulario/index.html');

  // 2. Validar título de la página
  await expect(page).toHaveTitle(/Formulario de Registro/);

  // 3. Completar campo Nombre
  const campoNombre = page.locator('#nombre');
  await campoNombre.fill('Miguel Angel');

  // 4. Completar campo Dirección
  const campoDireccion = page.locator('#direccion');
  await campoDireccion.fill('Quillay 7189');

  // 5. Completar campo Correo
  const campoCorreo = page.locator('#correo');
  await campoCorreo.fill('miguel@test.com');

  // 6. Validar que los campos tengan información
  await expect(campoNombre).toHaveValue('Miguel Angel');
  await expect(campoDireccion).toHaveValue('Quillay 7189');
  await expect(campoCorreo).toHaveValue('miguel@test.com');

  // 7. Hacer clic en el botón Guardar
  const botonGuardar = page.getByRole('button', { name: 'Guardar' });
  await botonGuardar.click();

  // 8. Validar navegación a página OK
  await expect(page).toHaveURL(/OK\.html/);

  // 9. Validar mensaje de éxito
  await expect(
    page.getByText('OK Registro Guardado')
  ).toBeVisible();

  // 10. Validar texto secundario
  await expect(
    page.getByText('La información fue registrada correctamente.')
  ).toBeVisible();

});