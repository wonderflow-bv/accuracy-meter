var Table = require('cli-table');



var AccuracyMeter = module.exports = function AccuracyMeter() {
  this.numberOfFalsePositives = 0;
  this.numberOfFalseNegatives = 0;
  this.numberOfTruePositives = 0;
}

AccuracyMeter.prototype.add = function(predicted, golden) {
  var numberOfTruePositives;
  var numberOfFalseNegatives;
  var numberOfFalsePositives;

  if (!Array.isArray(predicted) || !Array.isArray(golden)) {
    throw new Error('Please pass to add() function 2 arrays: predicted labels and golden labels');
  }

  numberOfTruePositives = predicted.filter(function(pred) {
    return golden.indexOf(pred) >= 0;
  }).length;
  numberOfFalseNegatives = golden.filter(function(gold) {
    return predicted.indexOf(gold) < 0;
  }).length;
  numberOfFalsePositives = predicted.filter(function(pred) {
    return golden.indexOf(pred) < 0;
  }).length;

  this.numberOfFalsePositives = this.numberOfFalsePositives + numberOfFalsePositives;
  this.numberOfTruePositives = this.numberOfTruePositives + numberOfTruePositives;
  this.numberOfFalseNegatives = this.numberOfFalseNegatives + numberOfFalseNegatives;


};

AccuracyMeter.prototype.getResultToStringMethod = function(precision, recall, fscore) {

  return function() {
    var table = new Table({
      head: ['Precision', 'Recall', 'Fscore'],
      colWidths: [100, 200]
    });

    table.push([precision, recall, fscore]);

    return table.toString();

  };


};

AccuracyMeter.prototype.get = function() {
  var precision;
  var recall;
  var fscore;

  precision = this.numberOfTruePositives / (this.numberOfTruePositives + this.numberOfFalsePositives);
  recall = this.numberOfTruePositives / (this.numberOfTruePositives + this.numberOfFalseNegatives);

  fscore = 2 * (precision * recall) / (precision + recall);

  return {
    precision: precision,
    recall: recall,
    fscore: fscore,
    toString: this.getResultToStringMethod(precision, recall, fscore)
  };
};
AccuracyMeter.prototype.print = function() {

  console.log(this.get().toString());



};

