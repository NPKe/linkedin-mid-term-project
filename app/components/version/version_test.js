'use strict';

describe('linkedinLite.version module', function() {
  beforeEach(module('linkedinLite.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
