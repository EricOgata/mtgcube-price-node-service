# mtgcube-price-node-service

Uma ferramenta para buscar os preços de um cubo de MTG no side LigaMagic

## Getting Started

To run this code, use the .csv file provided as template (csv_template.csv)

```
yarn start <name/direction to the file> <name/direction to where save the file>

ex.

yarn start csv_template.csv csv_saida.csv
```

## Prerequisites

- NodeJs
- Yarn

## Installing

Utilize o Yarn para instalar as dependências;
```
yarn
```

## Built With

* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/) - Dependency Management
* [Puppeteer](https://pptr.dev/) - Headless Chrome API
* [PapaParse](https://www.papaparse.com/) - CSV parser
* [WinstonJS](https://github.com/winstonjs/winston) - Logger
* [p-limit](https://github.com/sindresorhus/p-limit)

## Authors

* **Eric Ogata** - *Initial work* - [EricOgata](https://github.com/EricOgata)

## Acknowledgments

Gostaria de agradecer ao site LigaMagic por não criar uma API descente e nem disponibilizar uma ferramenta para desenvolvedores. 