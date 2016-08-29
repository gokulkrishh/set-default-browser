"use strict";
const exec = require("child_process").exec;

function whichOS(browerName) {
  if (process.env._system_name === "OSX") {
    return "open -a " + capitalizeName(browerName);
  }
}

function capitalizeName(browerName) {
  var browser = browerName.charAt(0).toUpperCase() + browerName.substr(1).toLowerCase() + '"';
  if (browerName === "chrome") {
    return '"Google ' + browser + " --args --make-default-browser";
  }
  else if (browerName === "safari") {
    return '"' + browser + " --args --make-default-browser";
  }
  else if (browerName === "firefox") {
    return '"' + browser + " --args -setDefaultBrowser";
  }
}

module.exports = function(args) {
  var cmds = whichOS(args);
  exec(cmds, (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return;
    }
  });
};
