/**
 * Created by faiyaz on 9/8/2016.
 */

// setTime functions only execute after the outer function execution completes
// browsers are typically single threaded i.e either updating uI or executing js

setInterval(function(){
    $.get('/greet',function (results) {
        // this pattern may go out of order because setInterval wont wait for the ajax response to finish
    })
},1000)

// solution is recursive asynchronous timeouts
setTimeout(function foo() {
    $.get("./greet",function (results) {
        //do something
        setTimeout(foo,1000)
    })
},1000)


//recursively invoking setTimeout can ensure execution order