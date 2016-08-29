var assert = require('assert');
var setDefaultBrowser = require('./');

describe('OSX tests', function() {

  describe('Detect OS', function() {
    it('should return OSX', function() {
      return process.env._system_name === "OSX";
    });
  });

  describe('Setting browser as default browser', function() {
    it('should set chrome as default browser in OSX', function() {
      return setDefaultBrowser("chrome");
    });
  });
});
