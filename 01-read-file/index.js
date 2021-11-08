const fs = require('fs');
const path = require('path');

let stream = fs.createReadStream(path.join(__dirname, 'text.txt'));
 
stream.on('data', function(data){
    console.log(data.toString());
});
