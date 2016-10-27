# accuracy-meter


Measure accuracy, precision and recall of a machine learning classifier.

## Usage

```

var meter = new AccuracyMeter();

dataset.forEach(function(){

	meter.add(['positive'],['negative']); // meter.add(predicted, golden);

});

meter.get();

```
