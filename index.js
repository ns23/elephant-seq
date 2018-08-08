const program = require('commander');
const { prompt } = require('inquirer');
const el = require('./elephant');

const question = [
    {
        type: 'input',
        name: 'filename',
        message: 'Enter filepath ..'
    }
]

program
    .version('0.0.1')
    .description('Find the elephants with low iq')

program
    .command('fileName')
    .alias('a')
    .description('Select file name')
    .action(() => {
        prompt(question).then((answers) =>
            el.findSequence(answers.filename));
    });

if (!process.argv.slice(2).length || !/[arudl]/.test(process.argv.slice(2))) {
    program.outputHelp();
    process.exit();
}

program.parse(process.argv)    

