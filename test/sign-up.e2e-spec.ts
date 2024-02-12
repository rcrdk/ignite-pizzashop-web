import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
	await page.goto('/sign-up', { waitUntil: 'networkidle' })

	await page.getByLabel('Nome do estabelecimento').fill('Pizza Shop')
	await page.getByLabel('Seu nome').fill('Ricardo Doe')
	await page.getByLabel('Seu e-mail').fill('ricardo@email.com')
	await page.getByLabel('Seu celular').fill('(00) 00000-0000')

	await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

	const toast = page.getByText('Estabelecimento cadastrado com sucesso.')

	await expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
	await page.goto('/sign-up', { waitUntil: 'networkidle' })

	await page.getByLabel('Nome do estabelecimento').fill('Rocket Pizza Shop')
	await page.getByLabel('Seu nome').fill('Ricardo Doe')
	await page.getByLabel('Seu e-mail').fill('ricardo@email.com')
	await page.getByLabel('Seu celular').fill('(00) 00000-0000')

	await page.getByRole('button', { name: 'Finalizar cadastro' }).click()

	const toast = page.getByText('Erro ao cadastrar estabelecimento.')

	await expect(toast).toBeVisible()
})

test('navigate to login page', async ({ page }) => {
	await page.goto('/sign-up', { waitUntil: 'networkidle' })

	await page.getByRole('link', { name: 'Fazer login' }).click()

	expect(page.url()).toContain('/sign-in')
})
