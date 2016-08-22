"use strict";
var exude = require("exude");
var args = process.argv.slice(2);

var cmds = {
  "osx": "",
  "linux": ""
};

module.exports = function(args) {
  exude(cmds)
  .then(function () {
    console.log(args + "browser is set as default browser");
  },
  function () {
    console.log("Error Occurred");
  })
  .catch(function () {
    console.log("Unknown OS!");
  });
};
