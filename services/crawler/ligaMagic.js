const puppeteer = require('puppeteer');

process.setMaxListeners(Infinity);

const work = async (cardName) => {
	const browser = await puppeteer.launch({
		headless: true,
		handleSIGINT: false,
		args: ['--disable-gpu', '--no-sandbox'],
	});
	const page = await browser.newPage();
	page.on('console', (consoleObj) => console.log(consoleObj.text()));
	await page.goto('https://www.ligamagic.com.br/');
	await page.focus('#mainsearch');
	await page.keyboard.type(cardName);
	await page.keyboard.press('Enter');
	await page.waitForNavigation({ waitUntil: 'networkidle0' });
	if (await page.$('#precos-menor') === null) {
		page.$eval('.mtg-picture a', (el) => el.click());
		await page.waitForNavigation({ waitUntil: 'networkidle0' });
	}
	const element = await page.$('#precos-menor');
	const lowestPrice = await page.evaluate((el) => el.textContent, element);
	console.log(`${cardName}: ${lowestPrice}`);
	await browser.close();
	return lowestPrice;
};

const fetchCardData = async (cardName) => work(cardName).then(
	(result) => ({ Name: cardName, Value: result }),
);

module.exports = {
	fetchCardData,
};
