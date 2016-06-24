var fs = require('fs');
var util = require('util');
var mime = require('mime');

var base64Image = function (src) {
  var data = fs.readFileSync(src).toString("base64");
  return util.format("data:%s;base64,%s", mime.lookup(src), data);
};

module.exports = base64Image;