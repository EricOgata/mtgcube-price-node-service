const Papa = require('papaparse');
const fs = require('fs');
const httpLogger = require('../log/httpLogger');

const csvWriter = (fetchedData, filePath = './fetchedData.csv') => {
	const finalObject = {
		fields: ['Name', 'Value'],
		data: fetchedData,
	};
	const csvFile = Papa.unparse(finalObject);
	fs.writeFile(filePath, csvFile, (err) => {
		if (err) {
			httpLogger.error(err);
		}
	});
};

module.exports = csvWriter;
