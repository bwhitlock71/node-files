const process = require('process');
const fs = require('fs');
const axios = require('axios');

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


async function webCat(url) {
    try {
      let resp = await axios.get(url);
      console.log(resp.data);
    } catch (err) {
      console.error(`Error fetching ${url}: ${err}`);
      process.exit(1);
    }
  }
  
  let path = process.argv[2];
  
  if (path.slice(0, 4) === 'http') {
    webCat(path);
  } else {
    myCat(path);
  }