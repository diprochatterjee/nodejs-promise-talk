const https = require('https');

const getRandomBeer = async () => new Promise((resolve, reject) => {
    let response = [];
    https.get('https://api.punkapi.com/v2/beers/random' , res => 
        res.on('data', data => {
            const line = Buffer.from(data, 'base64').toString('utf8');
            response.push(line);
        })
        .on('end', () => resolve(response))
    ).on('error', (error) => reject(error)); 
});

module.exports = { getRandomBeer };