const program = require('commander');
const { prompt } = require('inquirer');
const utilities = require('./elephant/utilities');
/* 
const question = [
    {
        type: 'input',
        name: 'filename',
        message: 'Enter filepath ..'
    }
]

program
    .version('0.0.1')
    .description('Find the elephant')

program
    .command('fileName')
    .alias('a')
    .description('Select file name')
    .action(() => {
        prompt(question).then((answers) =>
            utilities.readcsv(answers.filename));
    });

if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
    program.outputHelp();
    process.exit();
}

program.parse(process.argv)    */
utilities.readcsv('data.txt').then((resp) => {
    resp = resp.sort((a, b) => {
        return a[1] - b[1];
    })

    resp.forEach((element, index) => {
        console.log(element);
        // if(element[1]<resp[index+1][1] && element[2]>resp[index+1][2]){
        //     console.log(element[0])
        // }
    });

}).catch(err => console.error(err));

