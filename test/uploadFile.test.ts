import { chromium } from 'playwright';

describe('Upload File', () => {
    const filePath0 = './videos/file1.webm';
    const filePath1 = './videos/file2.webm';

    xtest("Upload Files Using Set Input Files", async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://www.sendgb.com/');
        await page.setInputFiles("//input[@name='qqfile']", [filePath0, filePath1]);

        await page.close()
        await context.close()
        await browser.close()

    })

    test("Upload Files Via On Function", async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://the-internet.herokuapp.com/upload');
        page.on("filechooser", async (filechooser) => {
            //await afilechooser.isMultiple();
            await filechooser.setFiles([filePath0, filePath1])
        })
        await page.click(".example + div#drag-drop-upload", { force: true })


    })

}) 
