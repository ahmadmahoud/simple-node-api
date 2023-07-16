var MemoryStorage = require('memorystorage');
// here, the MemoryStorage function is available
var myStorage = new MemoryStorage('note-app');

exports.getKeys = (myStorage) => {
    var keys = [];
    for (var i=0; i<myStorage.length; i++) {
        keys.push(myStorage.key(i))
    }
    return keys;
}

exports.getValus = (myStorage) => {
    var valus = [];
    for (var i=0; i<myStorage.length; i++) {
        var key = myStorage.key(i);
        valus.push(myStorage.getItem(key))
    }
    return valus;
}

exports.myStorage = myStorage;