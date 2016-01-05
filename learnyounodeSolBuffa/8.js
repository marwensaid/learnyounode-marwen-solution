var http = require('http')
var S = "";

http.get(process.argv[2], function callback(response) {
    response.on('data', function(data) {
        S += data.toString();
    })
		    response.on('end', function(data) {
				console.log(S.length);
        console.log(S.toString());
    })
})



// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
  // response.pipe(bl(function (err, data) {
    // if (err)
      // return console.error(err)
    // data = data.toString()
    // console.log(data.length)
    // console.log(data)
  // }))
// })