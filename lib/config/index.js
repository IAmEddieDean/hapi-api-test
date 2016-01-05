'use strict';

exports.get = function(){
  var env = process.env.NODE_ENV || 'development';

  var common = {
    NODE_ENV: env,
  };

  var environments = {
    development: {
      PORT: 8080,
      MONGO_URL: 'mongodb:ds039155.mongolab.com:39155/heroku_xdfr4h4l'
    },
    test: {
      PORT: process.env.PORT || 0,
      MONGO_URL: 'mongodb://localhost/close5-test',
    }
  };

  var environment = environments[env];

  Object.keys(common).forEach(function(key){
    if(!environment[key]){
      environment[key] = common[key];
    }
  });

  return environment;
};
