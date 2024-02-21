import { Browser, BrowserContext, Page, chromium } from "playwright-core"

describe("Learn how to handle input fields", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;

    beforeAll(async () => {
        browser = await chromium.launch({
            headless: false
        })
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://www.sendgb.com/');
    })

    test()
})