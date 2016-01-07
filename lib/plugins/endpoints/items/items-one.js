(function(exports, require){
  'use strict';
  
  var Item = require('../../../models/item');
  
  exports.register = function(server, options, next){
    server.route({
      method: 'GET',
      path: '/items/{id}',
      config: {
        description: 'Get a single item',
        handler: function(request, reply){
          Item.findOne({id: request.params.id}, function(err, item){
            return reply(err ? err : item)//.code(err ? err.code : 200);
          });
        }
      }
    });
    
    return next();
  };
  
  exports.register.attributes = {
    name: 'items.one'
  };
  
})(exports, require);
