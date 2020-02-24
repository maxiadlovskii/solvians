import {links} from "../../constants/routerLinks";

const puppeteer = require('puppeteer');

describe('Country list', () => {
    test('Can load list', async () => {
        let browser = await puppeteer.launch({
            headless: false
        });
        let page = await browser.newPage();

        page.emulate({
            viewport: {
                width: 500,
                height: 2400
            },
            userAgent: ''
        });

        await page.goto(`http://localhost:3000/countries`);
        await page.waitForSelector('.countryItem');
        await page.click('.countryItem');
        console.log('page.url() page.url() page.url() page.url()', page.url());
        // console.log('HHHHHHHHHHHHHHHHHHHH', html)
       // browser.close();
    }, 160000);
});