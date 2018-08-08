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

utilities.readcsv('data.txt');