var ghpages = require('gh-pages');
var path = require('path');
const dirName = path.resolve() + '/build'

ghpages.publish(dirName,
  {
    branch: 'master',
    repo: 'git@github.com:Jackson-he/Jackson-he.github.io.git'
  },
  function(err) {
    if (err) {
      console.log(err)
    } else {
      console.log('deploy succeed!!!')
    }
  }
);
