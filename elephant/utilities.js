/**
 * @file :utilities.js
 * @author:ns23
 * @description : all the utility functions 
 */

var fs = require('fs');
var colors = require('colors');
var readline = require('readline');

async function readcsv(csvFilePath) {
    var data =[];
    if (fileExists(csvFilePath)) {
        const rl = await readline.createInterface({
            input: fs.createReadStream(csvFilePath),
            crlfDelay: Infinity
        });

        rl.on('line', function (line) {
            line = line.trim();
            data.push(line.split(" ").map(x=>parseInt(x)));
            
        }).on('close', () => {
            console.log(data);
        })
            ;
    } else {
        console.log('cannot read the file');
    }
}

async function validateInt(num){
    return parseInt(num)?true:false;
}
function fileExists(path) {
    return fs.existsSync(path) ? true : false;
}


module.exports = {
    readcsv: readcsv,

}