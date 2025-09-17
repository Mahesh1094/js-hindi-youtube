//create playwright code for open google page
//playwright code to open google page
const { chromium } = require('playwright');

(async () => { 
    const browser = await chromium.launch();   
    const page = await browser.newPage();   
    await page.goto('https://www.google.com');   
    // other actions...
    await browser.close(); 
})();
