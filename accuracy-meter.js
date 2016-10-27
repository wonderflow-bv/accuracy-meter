

var AccuracyMeter=module.exports=function AccuracyMeter(){
    this.numberOfFalsePositive=0;
    this.numberOfFalseNegative=0;
    this.numberOfTruePositive=0;
}

AccuracyMeter.prototype.add=function(predicted, golden){
    var numberOfTruePositives;
    var numberOfFalseNegatives;
    var numberOfFalsePositives;

    if (!Array.isArray(predicted) || !Array.isArray(golden)){
        throw new Error('Please pass to add() function 2 arrays: predicted labels and golden labels');
    }

    numberOfTruePositives=predicted.filter(function(pred){
        return golden.indexOf(pred)>=0;
    });
    numberOfFalseNegatives=golden.filter(function(gold){
        return predicted.indexOf(gold)<0;
    });
    numberOfFalsePositives=predicted.filter(function(pred){
        return golden.indexOf(pred)<0;
    });

    this.numberOfFalsePositive=this.numberOfFalsePositive+numberOfFalsePositives;
    this.numberOfTruePositives=this.numberOfTruePositives+numberOfTruePositives;
    this.numberOfFalseNegatives=this.numberOfFalseNegatives+numberOfFalseNegatives;

    
};

AccuracyMeter.prototype.print=function(){
    
    var precision;
    var recall;
    var fmesasure;

    
    
};

