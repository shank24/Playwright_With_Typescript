import { chromium } from "playwright";
describe('Sign In Test', () => {
    test('Open LetCode', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://letcode.in')
        await page.click("text=Log in")
        await page.fill("input[name='email']",'creativestrikers@gmail.com')
        await page.fill("input[name='password']",'')
        await page.click('//button[text()="LOGIN"]')
        //await page.click('//a[text()="Sign out"]')
        await browser.close()
    
    })})


    