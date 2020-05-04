const { createLogger, transports, format } = require('winston');
const moment = require('moment');

const logger = createLogger({
	format: format.combine(
		format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
	),
	transports: [
		new transports.File({
			filename: `./logs/log_${moment().format('YYYY_MM_DD')}.log`,
			json: false,
			maxsize: 5242880,
			maxFiles: 5,
		}),
		new transports.Console(),
	],
});

module.exports = logger;
