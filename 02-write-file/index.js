const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const filePath = path.join(__dirname, 'text.txt');

fs.writeFile(filePath, '', (err) => {
  if (err) throw err;
});

stdout.write('Write text to the file:\n');

stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    exit();
  } else {
    fs.appendFile(filePath, data, (err) => {
      if (err) throw err;
    });
  }
});

process.on('SIGINT', function () {
  exit();
});

function exit() {
  stdout.write('the end program!');
  process.exit();
}