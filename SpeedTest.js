/**
 * [SpeedTest description] Measure the speed of a particular function
 * @param {function} testImplement [description] function be measured
 * @param {array} testParams    [description] params of the function(in an array)
 * @param {number} repetitions   [description] repeat time
 */
function SpeedTest(testImplement, testParams, repetitions) {
   this.testImplement = testImplement;
   this.testParams = testParams;
   this.repetitions = repetitions || 10000;
   this.average = 0;
}

SpeedTest.prototype = {
  startTest: function() {
    var beginTime, endTime, sumTimes = 0;
    for (var i = 0, x = this.repetitions; i < x; i++) {
        beginTime = +new Date();
        this.testImplement( this.testParams );
        endTime = +new Date();
        sumTimes += endTime - beginTime;
    } 

    this.average = sumTimes / this.repetitions;
    return console.log("Average execution across " +
                        this.repetitions + ": " +
                        this.average);
  }
};