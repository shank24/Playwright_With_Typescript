import { chromium } from 'playwright';

describe('Upload File', () => {
    const filePath0 = './videos/file1.webm';
    const filePath1 = './videos/file2.webm';

    test("Upload Files Using Set Input Files", async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.sendgb.com/');
        await page.setInputFiles("//input[@name='qqfile']", [filePath0, filePath1]);

        /*await page.close()
        await context.close()
        await browser.close()
        */

    })
}) 
