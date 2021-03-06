(function(exports, process){
  'use strict';
  
  exports.get = function(){
    var env = process.env.NODE_ENV || 'development';
    
    var common = {
      NODE_ENV: env,
    };
    
    var environments = {
      development: {
        PORT: 8080,
        MONGO_URL: 'mongodb://localhost/close5-dev-co',
      },
      production: {
        PORT: process.env.PORT || 0,
        MONGO_URL: 'mongodb://heroku_2jzh1lpd:e1423go50spavcefhhuuqihf0r@ds039165.mongolab.com:39165/heroku_2jzh1lpd'
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
  
})(exports, process);
