    'use strict'

    var readline = require('readline');
    var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
    });

    rl.question('', (p1) => {
    rl.question('', (p2) => {
    
        p1 = JSON.parse(p1)
        p2 = JSON.parse(p2)
        
        extender(p1, p2)
        //console.log(extender(p1,p2))
        console.log(p1)

        rl.close();
    })
    });

    function extender(obj1, obj2) {
        Object.keys(obj2).forEach(key => {
            if (!(key in obj1)) {
                obj1[key] = obj2[key];
            }
        });
    }