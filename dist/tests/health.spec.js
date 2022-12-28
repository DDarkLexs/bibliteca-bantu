"use strict";

describe('Test /api/usuario/auth', function () {
  describe('Health check on /sync', function () {
    it('health should be okay', function () {
      var actualResult = healthCheckSync();
      expect(actualResult).to.equal('OK');
    });
  });
});