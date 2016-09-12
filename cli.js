#!/usr/bin/env node
'use strict';
var meow = require('meow');
var setDefaultBrowser = require('./');

var cli = meow(`
  Usage:
    set-default-browser <browser-name>

  Example:
    set-default-browser chrome
`);

if (cli.input.length === 0) {
  console.error(cli.help);
  process.exit(1);
}

setDefaultBrowser(cli.input[0]);
