const echoTimeElapsed = (start, funcName) => {
    const now = Date.now();
    console.log('FuncName = ', funcName);
    console.log('Time elapsed = ', now - start);
};

module.exports = echoTimeElapsed;