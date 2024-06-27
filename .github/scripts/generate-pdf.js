const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();

    // Load your main HTML file
    const filePath = path.resolve(__dirname, '../../index.html');
    await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });

    // Wait for Vue.js to finish rendering
    // Assuming there's an element with id "app" that Vue.js renders
    await page.waitForSelector('#app', { visible: true });

    // Create PDF with Chrome print settings
    await page.pdf({
        path: path.resolve(__dirname, '../../akashgaba.pdf'),
        format: 'A4',
        printBackground: true,
        margin: {
            top: '10mm',
            bottom: '10mm',
            left: '10mm',
            right: '10mm'
        }
    });

    await browser.close();
})();
