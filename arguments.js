/**
 * Created by faiyaz on 9/7/2016.
 */

function myFunc(a, b, c) {
    return a + b + c;
}

console.log(myFunc(1, 2, 3));
console.log(myFunc(1, 2, 3, 4));
console.log(myFunc(1, 2));

function myNewFunc() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

// used by jquery to make a logical assessment on what you are trying to do depending on the arguments provided