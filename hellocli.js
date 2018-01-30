#! /usr/bin/env node

const argv = require('yargs').argv;

// Parse command
if (argv._.length == 1) {
    switch (argv._[0]) {
        case 'greet':
            greet(argv);
            break;
        default:
            banner();
    }
} else {
    banner();
}

function greet(argv) {
    if (argv.name) {
        console.log(`Hello ${argv.name}! 😉`);
    } else {
        console.log('Please supply a name with --name');
    }
}

function banner() {
    console.log(`
Usage:

  hello-cli greet [--name <Individual name>]

This will add a greet a user
`);
}