//Program.js

var mymodule = require('./mymodule.js')

var dir = process.argv[2]
var ext = process.argv[3]

mymodule(dir, ext, function(err, list) {
  if (err) {
   throw err;
  }
  else list.forEach(function (file) {
   console.log(file);
  })
});


// mymodule.js

var fs = require('fs')

module.exports = function(dirname, filter, callback) {
var regex = new RegExp('\\.' + filter + '$')    

var filelist = new Array()
var i = 0

fs.readdir(dirname, function (err, list) {

    if (err) {
    return callback(err);
    }
    else list.forEach(function (file) {
    if (regex.test(file))
        filelist[i] = file;
        i += 1;
    })
    return callback(null, filelist)

})

};
