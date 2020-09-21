const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);

    const [el] = await page.$x('/html/body/div[6]/div[1]/div/table/tbody/tr/td/div/img');
    const src = await el.getProperty('src');
    const srcTxt = await src.jsonValue();

    console.log({srcTxt});
    browser.close()
}

scrapeProduct('https://www.ebay.ca/itm/Real-32GB-64GB-128GB-Cartoon-Animals-USB-2-0-Thumb-Memory-Stick-Flash-Drive-Gift/401620380208?hash=item5d8270aa30:g:fqcAAOSwd2ZbytsC&var=671364717418%27);