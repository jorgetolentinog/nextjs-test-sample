import { test, expect } from '@playwright/test'

test("deberia mostrar una tabla con los archivos de la carpeta", async ({ page }) => {
    await page.goto('/')

    await expect(page.getByRole('table', { name: 'Listado de archivos' })).toBeVisible()
})
