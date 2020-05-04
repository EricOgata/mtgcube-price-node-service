const Papa = require('papaparse');
const fs = require('fs');

const csvReader = (file, delimiter = '', newline = '') => {
	const csvData = fs.readFileSync(file, 'utf8');
	return Papa.parse(csvData, {
		delimiter,
		newline,
		header: true,
		skipEmptyLines: true,
		keepEmptyRows: false,
		worker: true,
		complete: (data) => data,
	});
};

module.exports = csvReader;
