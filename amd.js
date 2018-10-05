/**
 * Created by faiyaz on 9/9/2016.
 */
// asynchronous module definition
// js lacks any way to have external references
// only one file is downloaded at a time since js is blocked


// node.js use common js pattern
// require('./main.js") to load a module
// module.exports to expose functionality

// require.js designed for in browser module loading
// collection of dependencies as an array and callback after loading the dependencies
// define takes an array of dependencies and expose a functionality