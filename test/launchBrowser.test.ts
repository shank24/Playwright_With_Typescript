import { chromium } from "playwright";


describe('Launch Browser', () => {
    test('Open Google', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.google.com')
        await browser.close()
    
    })})