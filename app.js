require('dotenv/config');

const pLimit = require('p-limit');
const httpLogger = require('./services/log/httpLogger');
const csvReader = require('./services/readers/csvReader');
const csvWriter = require('./services/writter/csvWriter');
const { fetchCardData } = require('./services/crawler/ligaMagic');

const startServer = async () => {
	const fileName = process.argv[2];
	const outputFile = process.argv[3] !== undefined ? process.argv[3] : '';
	const limit = pLimit(5);
	const promisses = [];
	const processedCards = [];
	try {
		const csvData = csvReader(fileName);
		csvData.data.forEach((card) => {
			promisses.push(limit(() => fetchCardData(card.Name, processedCards)));
		});
		await Promise.all(promisses).then((result) => {
			csvWriter(result, outputFile);
		});
	} catch (error) {
		httpLogger.error(error);
	}
};

startServer();
