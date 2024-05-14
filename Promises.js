const fs = require('node:fs');

function readTextFile(path, callback){
    fs.readFile(path, (err, data) => {
        if(err) throw err;
        callback(data.toString());
    });
}

/*
A promise is a receipt representing a value that may not be available yet. Let's create a simple promise that resolves immediately.
*/


let fifteen = Promise.resolve(15);
fifteen.then(value => console.log(`Got ${value}`));

/*
Promise based interface for the readTextFile function defined above.

A Promise takes a function F as an argument, now function F also takes another function as an argument, let's call it R. So till now,

return new Promise(F(R) => {
    ....
})

when the ansynchronous operation inside F is executed, it executes the R and passes the output of the async operation as an argument to it. Like this,

return new Promise(F(R) => {
    someAsyncOperation(someArgument, output => R(output));
})
*/

function textFile(fileName){
    return new Promise((reject, resolve) => {
        readTextFile(fileName, (err, text) => {
            if(err) reject (err);
            else resolve(text);
        });
    });
}

textFile('./utils/sampleFile.txt').then(console.log);


/*
Utilizing Promises to provide time-outs and delays
*/

function simulateLongRunningTask(duration){
    return new Promise((resolve, reject) => {
        console.log('Simulate long-running task ... ');
        setTimeout(() => {
            resolve('Task Completed!');
        }, duration);
    });
}

function withTimeout(promise, time){
    return new Promise((resolve, reject) => {
        promise.then(resolve, reject);
        setTimeout(() => reject('Timed Out'), time);
    });
}

// this should not timeout
withTimeout(simulateLongRunningTask(3000), 5000)
.then((data) => console.log(data))
.catch(error => console.log(error));

// this one should
withTimeout(simulateLongRunningTask(3000), 2000)
.then((data) => console.log(data))
.catch(error => console.log(error));