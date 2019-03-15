const fs = require('fs');

const getNumbers = async (inputFilePath) =>
    new Promise((resolve, reject) => {
        const readableStream = fs.createReadStream(inputFilePath);
        let integers = [];
        readableStream.on('data' , data => {
            const line = Buffer.from(data, 'base64').toString('utf8');
            integers = [line[0], line[1]];
        });
        readableStream.on('end', () => {
            readableStream.close();
            resolve(integers);
        });
        readableStream.on('error', error => {
            console.error(error);
            reject(error);
        });
    })

const writeSum = async (outputFilePath, value) => {
    const writestream = fs.createWriteStream(outputFilePath);
    writestream.write(`${value}`);
    return writestream.end();
}
    


module.exports = {getNumbers, writeSum};