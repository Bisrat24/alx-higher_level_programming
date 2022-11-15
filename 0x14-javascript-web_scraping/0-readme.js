#!/usr/bin/node

<<<<<<< HEAD
const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
=======
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);} 
  else {
    console.log(data);}
>>>>>>> b557e951a912d4fea92f53ce8e03eb448d828185
});
