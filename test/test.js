'use strict';

var AccuracyMeter = require('../');
var expect = require('chai').expect;

describe('AccuracyMeter', function() {

  var meter;

  beforeEach(function() {
    meter = new AccuracyMeter();
  });

  it('it should work fine', function() {

    var result;
    var expectedResult;

    expectedResult = {
      precision: 1,
      recall: 2 / 3,
      fscore: 4 / 5
    };

    meter.add(['ciao', 'hello'], ['ciao', 'hello', 'good morning']);

    result = meter.get();
    delete result.toString;

    expect(result).to.be.eql(expectedResult);

  });
});