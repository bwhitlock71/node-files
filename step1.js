const process = require('process');
const fs = require('fs');

function myCat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err){
            console.log("ERROR!!!");
            process.exit(1);
        }
        if(data){
            console.log(data);
        }
    });
}

myCat(process.argv[2]);