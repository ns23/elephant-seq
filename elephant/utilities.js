/**
 * @file :utilities.js
 * @author:ns23
 * @description : all the utility functions 
 */

var fs = require('fs');
var colors = require('colors');
var readline = require('readline');

function readcsv(csvFilePath) {
    var data =[];
    
    return new Promise((resolve,reject)=>{
        let count=0;
        if (fileExists(csvFilePath)) {
            const rl = readline.createInterface({
                input: fs.createReadStream(csvFilePath),
                crlfDelay: Infinity
            });
    
            rl.on('line', function (line) {
                line = line.trim();
                line = line.split(" ");
                line.unshift(++count);
                data.push(line.map(x=>parseInt(x)));
                
            }).on('close', () => {
                resolve(data);
            })
                ;
        } else {
            reject('Cannot read csv');
        }
    })
    
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