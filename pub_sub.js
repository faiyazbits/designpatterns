/**
 * Created by faiyaz on 9/10/2016.
 */

var cache = {}

function pub(id) {
    var args = [].slice.call(arguments, 1)
    if (!cache[id]) {
        cache[id] = []
    }
    for (var i = 0, il = cache[id].length; i < il; i++) {
        cache[id][i].apply(null, args)
    }
}

function sub(id, fn) {
    if(!cache[id]){
        cache[id] = []
    }
    cache[id].push(fn);
}

sub("umarcalled",function () {
    console.log("umar called");
})

pub("umarcalled");