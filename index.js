var rec = require('node-mic-record')
var request = require('request')

var witToken = process.env.WIT_TOKEN; // get one from wit.ai!

exports.parseResult = function (err, resp, body) {
  console.log(body)
}

rec.start().pipe(request.post({
  'url'     : 'https://api.wit.ai/speech?client=chromium&lang=en-us&output=json',
  'headers' : {
    'Accept'        : 'application/vnd.wit.20160202+json',
    'Authorization' : 'Bearer ' + witToken,
    'Content-Type'  : 'audio/wav'
  }
}, exports.parseResult))
