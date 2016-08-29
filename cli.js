#!/usr/bin/env node
'use strict';
var meow = require('meow');
var setDefaultBrowser = require('./');

var cli = meow({
  help: [
    'Usage',
    ' set-default-browser <browser-name>',
    '',
    'Example',
    ' set-default-browser chrome canary',
    ''
  ]
});

if (cli.input.length === 0) {
  console.error('Which browser ?');
  process.exit(1);
}

console.log(setDefaultBrowser(cli.input[0]));
