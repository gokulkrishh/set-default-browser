var os = require('os');
var osType = os.type();

var setDefaultBrowser = require('./');

describe('OSX tests', () => {
  describe('Detect OS Type', () => {
    it('should return OSX', () => {
      return osType === 'Darwin';
    });
  });

  describe('Set Default Browser', () => {
    it('should set chrome as default browser', () => {
      return setDefaultBrowser('chrome');
    });

    it('should set chrome canary as default browser', () => {
      return setDefaultBrowser('chromeCanary');
    });

    it('should set firefox as default browser', () => {
      return setDefaultBrowser('firefox');
    });

    it('should set firefox developer edition as default browser', () => {
      return setDefaultBrowser('firefoxDE');
    });

    it('should set safari as default browser', () => {
      return setDefaultBrowser('safari');
    });

    it('should set edge as default browser', () => {
      return setDefaultBrowser('edge');
    });

    it('should set edge canary as default browser', () => {
      return setDefaultBrowser('edgeCanary');
    });
  });
});
