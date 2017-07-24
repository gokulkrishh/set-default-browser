"use strict";

const exec = require("child_process").exec;
const os = require('os');
const osType = os.type();
const browserCmds = {
  "Darwin": "open -a "
};

const browers = {
  "chrome": "'Google Chrome' --args --make-default-browser",
  "canary": "'Google Chrome Canary' --args --make-default-browser",
  "firefox": "'Firefox' --args -setDefaultBrowser",
  "firefoxDE": "'FirefoxDeveloperEdition' --args -setDefaultBrowser",
  "safari": "'Safari' --args --make-default-browser",
};

function whichOS(browerName) {
  if (osType === "Darwin" && browers[browerName]) {
    return {
      name: browerName,
      cmd: browserCmds[osType] + browers[browerName]
    };
  }

  return {};
}

module.exports = function(args) {
  var cmds = whichOS(args);
  if (cmds && !cmds.name) {
    console.log("Browser not found 🙀");
    return false;
  }

  exec(cmds.cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(error);
    }
  });
};
