// const loaderUtils = require('loader-utils');
const bluehtml = require('bluehtml');

module.exports = function(source) {
  return '\
const React = require(\'preact\');\
const reactCreateElementWrapper = React.h;\
const _ = require(\'underscore\');\
\
module.exports = function(ctx) {\
  return ' + bluehtml.generateVirtualDOM(source, { notGenerateContext: true, adapterName: 'R' }) + ';\
};';
};

// @TODO
// callback for side effect
// options
// template
