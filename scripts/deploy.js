require('colors-cli/toxic')
const ghpages = require('gh-pages')
const path = require('path')

const dirName = path.resolve() + '/build'

const config = {
  branch: 'master',
  repo: 'git@github.com:Jackson-he/Jackson-he.github.io.git'
}


const cb = function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log(`${'deploy succeed ^_^'.green}\nyour application has been pushed to the repository: ${config.repo.cyan_bt}\nbased on branch: ${config.branch.cyan_bt}`)
  }
}

ghpages.publish(dirName, config, cb);
