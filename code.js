function printObj(obj) {
for (const key in obj) {
    if (typeof obj[key]=== "object") {
        console.log(key)
        printObj(obj[key])
    } else {
        console.log(key,' ',obj[key])
    }
}
}


const nestedJson = {
    key1:'value',
    key2 : {
        nest1 : 'val',
        nest12 : 'var'
    },
    key3:[
        'final',
        'const'
    ]
}


console.log('normal print',nestedJson)
console.log('##############################')
printObj(nestedJson)