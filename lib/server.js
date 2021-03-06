(function(require, exports){
  'use strict';
  
  var Hapi = require('hapi');
  var Mongoose = require('mongoose');
  var Plugins = require('./tools/plugins');
  var Config = require('./config');
  
  exports.init = function(cb){
    var server = new Hapi.Server({connections: {
      routes: {
        cors: true
      }
    }});
    
    server.app.environment = Config.get();
    server.connection({port: server.app.environment.PORT});
    Mongoose.connect(server.app.environment.MONGO_URL);
    
    Mongoose.connection.once('open', function(){
      server.register(Plugins, function(pluginErr){
        if(pluginErr){ return cb(pluginErr); }
        
        server.start(function(serverErr){
          return cb(serverErr, server);
        });
      });
    });
  };
})(require, exports);
