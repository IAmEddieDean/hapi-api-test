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
            if(err) return reply(err);
            return reply(items).code(items.length ? 200 : 204);
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
