/**
 * @file :utilities.js
 * @author:ns23
 * @description : all the utility functions 
 */

var fs = require('fs');
var colors = require('colors');
var readline = require('readline');

/**
 * @description : Find the  squence in list
 * @param {*} filePath Path to csv file
 */
function findSequence(filePath) {
    let op = [];
    readcsv(filePath).then((resp) => {
        resp = resp.sort((a, b) => {
            return a[1] - b[1] && a[2] - b[2];
        });
        resp = resp.reverse();

        for (let i = 0; i < resp.length; i++) {
            let el = resp[i];
            if (i < resp.length - 1) {
                if (resp[i + 1][1] > el[1] && resp[i + 1][2] < el[2]) {
                    op.push(el)
                } else {
                    op.push(el)
                    break;
                }
            }
        }
        // print output
        console.log(colors.blue(op.length));
        op.forEach(el => {
            console.log(colors.white(el[0],'|',colors.magenta(el[1]),'|',colors.cyan(el[2])));
        });

    }).catch((err) => {
        console.log(colors.red(err));
    });
}

/**
 * @description : Reads csv file and returns the array
 * @param {*} csvFilePath 
 */
function readcsv(csvFilePath) {
    var data = [];

    return new Promise((resolve, reject) => {
        let count = 0;
        if (fileExists(csvFilePath)) {
            const rl = readline.createInterface({
                input: fs.createReadStream(csvFilePath),
                crlfDelay: Infinity
            });

            rl.on('line', function (line) {
                line = line.trim();
                line = line.split(" ");
                line.unshift(++count);
                data.push(line.map(x => parseInt(x)));

                if(count > 1000){
                    console.log(colors.yellow('Waring : Records shouldnot be more than 1000'))
                }
                // add validation to check if integer is between 1 - 10000

            }).on('close', () => {
                resolve(data);
            })
                ;
        } else {
            reject('Cannot read csv');
        }
    })

}

/**
 * @description Validates if value is int or not
 * @param {*} num 
 */
async function validateInt(num) {
    return parseInt(num) ? true : false;
}

/**
 * @description :Check if file exists or not
 * @param {*} path 
 */
function fileExists(path) {
    return fs.existsSync(path) ? true : false;
}


module.exports = {
    findSequence: findSequence,

}