var assert = require('assert');
var setDefaultBrowser = require('./');
var os = require('os');
var osType = os.type();

describe('OSX tests', function() {
  describe('Detect OS Type', function() {
    it('should return OSX', function() {
      return osType === "Drawin";
    });
  });

  describe('Setting browser as default browser', function() {
    it('should set chrome as default browser in OSX', function() {
      return setDefaultBrowser("chrome");
    });
  });
});
