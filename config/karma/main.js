
'use strict';

// find all the test spec files
var tests = Object.keys(window['__karma__'].files).
  filter(function (file) {
    return (/^\/base\/lib\/.*spec\.js$/).test(file)
  }).
  map(function (file) {
    return file.replace(/^\/base\/lib\//, '').replace(/\.js$/, '')
  })


// set the base url
require.config({
  baseUrl: '/base/lib'
})

// load the main configuration
require(['main'], function () {
  // load and run tests
  require.config({
    deps: tests,
    callback: window['__karma__'].start
  })
})
