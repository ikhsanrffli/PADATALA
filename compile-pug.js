const pug = require('pug');
const fs = require('fs');

// Path file Pug yang ingin Anda kompilasi
const pugFilePath = 'index.pug';

// Mengkompilasi file Pug menjadi HTML
const compiledFunction = pug.compileFile(pugFilePath);
const html = compiledFunction();

// Menyimpan HTML yang dihasilkan ke dalam file
fs.writeFileSync('index.html', html);

console.log('File Pug berhasil dikompilasi menjadi HTML.');


// node compile-pug.js   --> terminal untuk kompilkasi file .pug menjadi .html
