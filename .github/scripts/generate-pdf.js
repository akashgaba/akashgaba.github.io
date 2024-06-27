const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Load your HTML file
    await page.goto(`file://${process.cwd()}/index.html`, { waitUntil: 'networkidle0' });

    // Ensure the output directory exists
    if (!fs.existsSync('output')){
        fs.mkdirSync('output');
    }

    // Create PDF
    await page.pdf({ path: 'akashgaba.pdf', format: 'A4' });

    await browser.close();
})();
