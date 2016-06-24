require('shelljs/global');
var base64Image = require('./lib/base64image.js');

var date = new Date();
var time = date.getTime();
var file = __dirname + '/images/' + time + '.jpg';
var repoUrl = process.argv[2];

echo('Taking capture into ' + file + '!');
exec('imagesnap -q -w 2 ' + file);

var dataUri = base64Image(file);

console.log(repoUrl, dataUri);

exit(0);