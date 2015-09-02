var fs = require('fs');
var crypto = require('crypto');
var moment = fs.readFileSync('public/moment.js');
var momentString = moment.toString();
var sriToolbox = require("sri-toolbox");
var hashChars = {};
var outHTML = '<!doctype html><html><body>';

for (var i = 0; i < momentString.length; i++) {
  addChar(hashChars, momentString[i]);
}

function addChar(hashChars, char) {
  var md5sum = crypto.createHash('md5');
  var out;

  md5sum.update(char);
  out = md5sum.digest('hex');
  hashChars[out] = char;
//  console.log(momentString[i]);
return char;
}

Object.keys(hashChars).forEach(function (key) {
  var fileName = 'out/' + key + '.js';
  var fileOut = 'var me = "' + hashChars[key] + '"; me = {' + hashChars[key] + ': "' + hashChars[key] + '"};';
  var integrity = sriToolbox.generate({
    algorithms: ['sha256', 'sha512']
  }, fileOut);
  fs.writeFileSync('public/' + fileName, fileOut);  
  outHTML += '<script src="'+fileName+'" integrity="'+integrity+'" charset="UTF-8" ></script>';
});

outHTML += '</body></html>';
fs.writeFileSync('public/out.html', outHTML);
