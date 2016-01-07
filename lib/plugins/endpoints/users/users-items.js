(function(exports, require){
  'use strict';
  
  var Item = require('../../../models/item');
  var parseQuery = require('../../../tools/parse-query');
  
  exports.register = function(server, options, next){
    server.route({
      method: 'GET',
      path: '/users/{id}/items',
      config: {
        description: 'Get a list of items for an individual user',
        handler: function(request, reply){
          Item.find({userId: request.params.id}, function(err, items){
            if(err) return reply(err);
            return reply(items).code(items.length ? 200 : 204);
          }).sort(request.query ? parseQuery(request.query) : {});
        }
      }
    });
    
    return next();
  };
  
  exports.register.attributes = {
    name: 'user.items'
  };
  
})(exports, require);
