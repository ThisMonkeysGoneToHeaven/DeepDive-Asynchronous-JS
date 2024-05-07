const fs = require('node:fs');

function readTextFile(path, callback){
    fs.readFile(path, (err, data) => {
        if(err) throw err;
        callback(data.toString());
    });
}

/*
The setTimeout() function takes as arguments, a function along with the number of milliseconds and executes the function after waiting for that time.
*/

setTimeout(() => console.log('Tick'), 1000);

/*
The readFile() function from the fs module does the same thing, they are both callback functions afterall, duh :/
*/

readTextFile('./utils/sampleFile.txt', data => {
    console.log(data);
});

/*
A basic illustration of what can be a very painful callback hell.
*/

function compareFiles(fileA, fileB, callback){
    readTextFile(fileA, contentA => {
        readTextFile(fileB, contentB => {
            callback(contentA == contentB);
        });
    });
}

compareFiles('./utils/sampleFile.txt', 
'./utils/sampleFile.txt', 
data => console.log(`Comparing files : ${data}`));