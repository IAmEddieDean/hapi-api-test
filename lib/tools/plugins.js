(function(module, require){
  'use strict';
  
  var Plugins = require('./plunge');
  var Blipp = require('blipp');
  
  Plugins.push(Blipp);
  
  module.exports = Plugins;
  
})(module, require);
