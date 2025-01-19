import { test, expect } from '@playwright/test';

test('홈페이지 접속', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // 페이지 타이틀 확인
  await expect(page).toHaveTitle(/React/);
});

test('환율 정보 조회', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // MSW가 mock한 API 응답 확인
  const response = await page.waitForResponse('**/exchange-rates');
  const data = await response.json();

  expect(data.base).toBe('KRW');
  expect(data.rates).toHaveProperty('USD');
  expect(data.rates).toHaveProperty('JPY');
});
