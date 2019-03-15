'use strict';

const path = require('path');

const getSum = require('./sync_funcs/getSum');
const { getNumbers, writeSum } = require('./fileIO');
const echoTimeElapsed = require('./eventLoop/echoTimestamp');
const { getRandomBeer } = require('./apiCalls');

const main = async (inputFilePath, outputFilePath) => {
    const start = Date.now();
    console.log('Time started =', start);
    echoTimeElapsed(start, 'start');
    let beer;
    try {
        let beers = await getRandomBeer();
        beers = JSON.parse(beers);
        beer = beers[0];
        if(!beer.name || !beer.tagline) {
            beer.name = 'Ij Wit';
            beer.tagline = 'The best white beer of Amsterdam';
        }
        //console.log( 'active handles = ', process._getActiveHandles() );
    }
    catch (error) {
        console.error('Beers were not found. reason = ', error);
    }
    echoTimeElapsed(start, 'getBeers');
    let integers;
    try {
        integers = await getNumbers(inputFilePath);
    }
    catch(error) {
        console.error('error =', error);
    }
    echoTimeElapsed(start, 'getNumbers');
    const sum = getSum(integers);
    echoTimeElapsed(start, 'getSum');
    try {
        await writeSum(outputFilePath, `${sum} EUR - ${beer.name}, ${beer.tagline}`);
    }
    catch(error) {
        console.error(error);
    }
    echoTimeElapsed(start, 'writeSum');
    let beerPromise = getRandomBeer();
    let numberPromise = getNumbers(inputFilePath);
    try {
        await Promise.all([beerPromise, numberPromise]);
    }
    catch(error) {
        console.error(error);
    }
    echoTimeElapsed(start, 'promise.all');
    
}

main(
    path.resolve(__dirname, '..', 'integers.txt'), 
    path.resolve(__dirname, '..', 'beersandnumbers.txt')
);