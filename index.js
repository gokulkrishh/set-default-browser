'use strict';

const exec = require('child_process').exec;
const os = require('os');
const osType = os.type();
const browserCmds = { Darwin: 'open -a ' };

const browsers = {
  chrome: "'Google Chrome' --args --make-default-browser",
  chromeCanary: "'Google Chrome Canary' --args --make-default-browser",
  firefox: "'Firefox' --args -setDefaultBrowser",
  firefoxDE: "'Firefox Developer Edition' --args -setDefaultBrowser",
  safari: "'Safari' --args --make-default-browser",
  edge: "'Microsoft Edge' --args --make-default-browser",
  edgeCanary: "'Microsoft Edge Canary' --args --make-default-browser"
};

function whichOS(browser) {
  if (osType === 'Darwin' && browsers[browser]) {
    return {
      name: browser,
      cmd: browserCmds[osType] + browsers[browser]
    };
  }

  return {};
}

module.exports = function(args) {
  var cmds = whichOS(args);

  if (cmds && !cmds.name) {
    console.log('Browser not found 🙀');
    return false;
  }

  exec(cmds.cmd, error => {
    if (error) {
      console.error(error);
    }
  });
};
