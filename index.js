'use strict';
var exude = require('exude');
var args = process.argv.slice(2);

var cmds = {
  'osx': '',
  'linux': ''
};

module.exports = function(args) {
  return exude(cmds)
    .then(function () {
      return true;
    },
    function () {
      return false;
    })
    .catch(function () {
      console.log('Unknown OS!');
    });
};
