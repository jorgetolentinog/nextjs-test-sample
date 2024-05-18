import { test, expect } from '@playwright/test'

test("deberia abrir el modal de enviar documento", async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Enviar documento' }).click();

    await expect(page.getByRole('dialog', { name: 'Enviar documento' })).toBeVisible()
})

test("deberia cerrar el modal de enviar documento", async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Enviar documento' }).click();
    await page.getByRole('button', { name: 'Cancelar' }).click();

    await expect(page.getByRole('dialog', { name: 'Enviar documento' })).not.toBeVisible()
})

test("deberia mostrar el preview de tipo imagen al seleccionar una imagen como documento", async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Enviar documento' }).click();

    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('button', { name: 'Seleccionar documento' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(['./tests/files/example.jpg']);

    await expect(page.getByTestId('preview-photo')).toBeVisible()
})

test("deberia mostrar el preview de tipo pdf al seleccionar un pdf como documento", async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Enviar documento' }).click();

    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('button', { name: 'Seleccionar documento' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(['./tests/files/example.pdf']);

    await expect(page.getByTestId('preview-pdf')).toBeVisible()
})

test("deberia mostrar el preview de tipo no soportado al seleccionar un archivo no soportado como documento", async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Enviar documento' }).click();

    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('button', { name: 'Seleccionar documento' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(['./tests/files/example.txt']);

    await expect(page.getByTestId('preview-not-support')).toBeVisible()
})

test("deberia permitir borrar el documento seleccionado", async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Enviar documento' }).click();

    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('button', { name: 'Seleccionar documento' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(['./tests/files/example.jpg']);

    await page.getByRole('button', { name: 'Borrar documento' }).click();

    await expect(page.getByTestId('preview-photo')).not.toBeVisible()
    await expect(page.getByTestId('preview-blank')).toBeVisible()
})
