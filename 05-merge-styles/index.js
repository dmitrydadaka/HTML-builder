const fs = require('fs');
const path = require('path');
const styles = path.join(__dirname, 'styles');
const bundle = path.join(__dirname, 'project-dist', 'bundle.css');


fs.readdir(styles, (err, data) => {
  if (err) throw err;
  fs.writeFile(bundle,'',function(err){
    if(err) throw err;
  });
  for (let i = 0; i < data.length; i++) {
    let currentPath = path.join(styles, `${data[i]}`);
    let a = path.extname(currentPath);
     if(a==='.css'){
      fs.readFile(currentPath, 'utf-8', (err, content)=>{
         if(err) throw err;
        let b = content;
        fs.appendFile(bundle, b, (err)=>{
          if(err) throw err;
        });
      });
    }}}
);