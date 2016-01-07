(function(exports, require){
  'use strict';
  
  var Item = require('../../../models/item');
  var parseQuery = require('../../../tools/parse-query');
  
  exports.register = function(server, options, next){
    server.route({
      method: 'GET',
      path: '/items',
      config: {
        description: 'Get an index of items, optionally sorted by price, creation date, or user with the use of query string addition to the url',
        handler: function(request, reply){
          Item.find({}, function(err, items){
            if(err) return reply(err);
            return reply(items).code(items.length ? 200 : 204);
          }).sort(request.query ? parseQuery(request.query) : {});
        }
      }
    });
    
    return next();
  };
  
  exports.register.attributes = {
    name: 'items.index'
  };
  
})(exports, require);
