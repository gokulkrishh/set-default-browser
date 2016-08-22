#!/usr/bin/env node
'use strict';
var meow = require('meow');
var setDefaultBrowser = require('./');

var cli = meow({
  help: [
    'Usage',
    '  setDefaultBrowser <browser-name>',
    '',
    'Example',
    '  setDefaultBrowser chrome-canary',
    ''
  ]
});

if (cli.input.length === 0) {
  console.error('Please provide a browser name');
  process.exit(1);
}

console.log(setDefaultBrowser(cli.input[0]));
