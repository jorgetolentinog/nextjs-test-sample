import { test, expect } from '@playwright/test'

test("should show the send document modal", async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Enviar documento' }).click();

    await expect(page.getByRole('dialog', { name: 'Enviar documento' })).toBeVisible()
})

test("should close the send document modal", async ({ page }) => {
    await page.goto('/')
    await page.getByRole('button', { name: 'Enviar documento' }).click();
    await page.getByRole('button', { name: 'Cancelar' }).click();

    await expect(page.getByRole('dialog', { name: 'Enviar documento' })).not.toBeVisible()
})
