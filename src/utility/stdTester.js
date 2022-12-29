const fs = require('fs');
const path = require('path');
const stdParser = require('./stdParser.js');
const stdCleaner = require('./stdCleaner.js');

const fileData = fs.readFileSync(path.join(process.cwd(), './content/articles/hello-world-in-javascript.std'), 'utf-8');

// Combined takes around 10-20 microseconds to run
const parsedData = stdParser(fileData);
const cleanedData = stdCleaner(parsedData);

console.dir(parsedData, { depth: null })
console.dir(cleanedData, { depth: null });