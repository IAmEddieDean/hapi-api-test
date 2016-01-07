(function(exports, require){
  'use strict';
  
  // var html = require('../../../routes');

  
  exports.register = function(server, options, next){
    server.route({
      method: 'GET',
      path: '/{p*}',
      config: {
        description: 'Get a route map/API guide for this API',
        handler: {
          directory: {
            path: './',
            listing: true,
            index: true
          }
        }
      }
    });
    return next();
  };
  
  exports.register.attributes = {
    name: 'routes-listing'
  };
  
})(exports, require);
