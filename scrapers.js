const puppeteer = require('puppeteer');

scrapeProduct("https://www.ebay.ca/itm/Vilano-R2-Commuter-Aluminum-Road-Bike-21-Speed-700c/172975791694");

async function scrapeProduct(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    const [PriceEl] = await page.$x('//*[@id="prcIsum"]');
    const [imgEl] = await page.$x('//*[@id="icImg"]');

    const rawPrice = await PriceEl.getProperty('textContent');    //this is json
    const priceTxt = await rawPrice.jsonValue();    //this is a string
    const price = parseFloat((priceTxt).slice(4));  //this is a float

    const rawImgUrl = await imgEl.getProperty('src');   //this is json
    const imgUrl = await rawImgUrl.jsonValue();    //this is a string

    console.log({price, imgUrl});
    await browser.close();
}