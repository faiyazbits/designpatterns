/**
 * Created by faiyaz on 9/7/2016.
 */


// if no return value is specified javascript implicitly return undefined
// chaining optimizes memory usage as there is no need to store every execution return value in new variables

var calc = function (start) {
    this.add = function (value) {
        start = start + value;// capturing start using closure
        return this
    };
    this.multiply = function (value) {
        start = start * value;
        return this;
    };
    this.equals = function (callback) {
        callback(start);
        return this;
    }
};

new calc(0)
    .add(1)
    .add(2)
    .multiply(10)
    .equals(function (result) {
        console.log(result)
    });