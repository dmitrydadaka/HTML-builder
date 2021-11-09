const { readdir, stat } = require('fs/promises');
const { join, parse } = require('path');
const { stdout } = process;


async function getFile(pathFrom) {
  const files = await readdir(pathFrom);
  if (files.length) {
    for (let item of files) {
      const stats = await stat(join(pathFrom, item));
      if (stats.isFile()) {
        const name = parse(item).name;
        const ext = parse(item).ext.slice(1);
        stdout.write(`${name} - ${ext} - ${stats.size} byte\n`);
      }
    }
  }
}

getFile(join(__dirname, 'secret-folder'));