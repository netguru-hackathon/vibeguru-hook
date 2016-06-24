require('shelljs/global');
var request = require('request');
var fs = require('fs');

var date = new Date();
var time = date.getTime();
var file = __dirname + '/images/' + time + '.jpg';
var repoUrl = process.argv[2];

echo('Taking capture into ' + file + '!');
exec('imagesnap -q -w 2 ' + file);

request.post({
  url: 'http://localhost:8080/api/vibes',
  form: {
    repo_url: repoUrl,
    image: fs.createReadStream(file)
  }
}, function (err, res, body) {
  console.log('done');
  console.log('err', err);
  console.log('res', res);
  console.log('body', body);
});
