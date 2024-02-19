import { chromium } from "playwright";

describe('Sign In Test', () => {
    
    test('Recorder Script', async () => {

        const browser = await chromium.launch({
            headless: false
        })

        const context = await browser.newContext();

        // Open a new page
        const page = await context.newPage();
        // Go to website
        await page.goto('https://letcode.in/');

        await Promise.all([
            page.waitForNavigation(),
            page.click('text=/.*Log in.*/')
        ])

        await page.getByRole('textbox', { name: 'Enter registered email' }).click();
        await page.getByRole('textbox', { name: 'Enter registered email' }).fill('creativestrikers@gmail.com');
        await page.getByRole('textbox', { name: 'Enter registered email' }).press('Tab');
        await page.getByPlaceholder('Enter password').fill('123');
        await page.getByPlaceholder('Enter password').press('Enter');

        await page.getByRole('link', { name: 'Work-Space' }).click();
        await page.getByRole('link', { name: 'All in One' }).click();
        await page.locator('#firstname').click();
        await page.locator('#firstname').fill('Charneet');
        await page.locator('#firstname').press('Tab');
        await page.locator('#lasttname').fill('Kaur');
        await page.locator('#lasttname').press('Tab');
        await page.getByPlaceholder('Email input').fill('creativestrikers@gmail.com');
        await page.getByPlaceholder('Email input').press('Tab');
        await page.locator('form div').filter({ hasText: 'EmailCountry codeUSA (+1)UK' }).getByRole('combobox').press('Tab');
        await page.getByPlaceholder('Phone Number').fill('1010101010');
        await page.getByPlaceholder('Phone Number').press('Tab');
        await page.getByPlaceholder('Address Line-1').fill('Noida');
        await page.getByPlaceholder('Address Line-1').press('Tab');
        await page.getByPlaceholder('Address Line-2').fill('GAur City');
        await page.getByPlaceholder('Address Line-2').press('Tab');
        await page.getByPlaceholder('State').fill('UP');
        await page.getByPlaceholder('State').press('Tab');
        await page.getByPlaceholder('Postal-Code').fill('201301');
        await page.getByPlaceholder('Postal-Code').press('Tab');

        await page.locator('form div').filter({ hasText: 'Postal-CodeCountryAfghanistan' }).getByRole('combobox').press('Tab');
        await page.locator('#Date').press('Tab');
        await page.locator('#Date').press('Tab');
        await page.getByLabel('Male', { exact: true }).press('0');

        await page.locator('#Date').fill('2001-01-01');
        await page.getByLabel('Female').check();

        await page.getByLabel('I agree to the terms and').check();
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.getByRole('link', { name: 'Sign out' }).click();

        await page.close()
        await context.close()
        await browser.close()
})
    
    
    xtest('Open LetCode', async () => {
        const browser = await chromium.launch({
            headless: false
        })
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://letcode.in')
        await page.click("text=Log in")
        await page.fill("input[name='email']",'creativestrikers@gmail.com')
        await page.fill("input[name='password']",'123')
        await page.click('//button[text()="LOGIN"]')
        await page.click('//a[text()="Sign out"]')
        await browser.close()
    
    })})


    