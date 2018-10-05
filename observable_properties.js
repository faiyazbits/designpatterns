/**
 * Created by faiyaz on 9/7/2016.
 */

// properties implemented as methods
    // store event handlers in an array
var book = function (name, price) {
    var priceChanging = [];
    var priceChanged = [];
    this.name = function (val) {
        if (val != undefined && val !== name) {
            name = val;
        }
        return name;
    };
    this.price = function (val) {
        if (val != undefined && val !== price) {
            for (var i = 0; i < priceChanging.length; i++) {
                if (!priceChanging[i](this, val)) {
                    return price
                }
            }
            price = val;
            for (var j = 0; j < priceChanged.length; j++) {
                priceChanged[i](this)
            }
        }
        return price
    };
    this.onPriceChanging = function (callback) {
        priceChanging.push(callback);
    };
    this.onPriceChanged = function (callback) {
        priceChanged.push(callback);
    }
};

var javascriptBook = new book("javascript", 200);

console.log("book name: " + javascriptBook.name())
console.log("book price: " + javascriptBook.price())

javascriptBook.onPriceChanging(function (book, price) {
    if (price > 400) {
        console.log("book price more than 400");
        return false
    }
    return true;
})

javascriptBook.onPriceChanged(function (book) {
    console.log("books price have changed" + book.price())
})

javascriptBook.onPriceChanged(function (book) {
    console.log("price of" + book.name()+ " " + book.price())
})

javascriptBook.price(198.2);
javascriptBook.price(500);
