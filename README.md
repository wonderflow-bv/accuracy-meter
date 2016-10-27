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

## API

### add(predicted, golden)

It adds a pair <predicted, golden>, representing the set of prdicted labels and the set of golden labels. Golden and predicted labels are both arrays.

### get()

It returns an object containing:
* precision
* recall
* fscore

# Why

* node.js is not a standard language for NLP tasks, but...
* machine learning is more and more in the cloud (check Watson NLP Classifier)
* machine learning is becoming just a set of Http end points to invoke
* node.js is perfect as middleware and client among Http end points
* ...so it might help you to measure the accuracy of your algorithms in the cloud

