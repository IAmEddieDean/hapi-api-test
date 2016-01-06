(function(exports, require){
  'use strict';
  
  var Item = require('../../../models/item');
  var parseQuery = require('../../../tools/parse-query');
  var parseDistance = require('../../../tools/parse-distance');
  
  exports.register = function(server, options, next){
    server.route({
      method: 'GET',
      path: '/items/{long}/{lat}/{maxDistance}',
      config: {
        description: 'Get an index of items, near the client or provided location, optionally sorted by price, creation date, or user with the use of query string addition to the url',
        handler: function(request, reply){
          var coords = [request.params.long, request.params.lat].map(Number);

          Item.find({
            loc: {
              $near: {
                $geometry: {
                  type : "Point",
                  coordinates : coords
                },
                $maxDistance: parseDistance(request.params.maxDistance)
              }
            }
          }, function(err, items){
            return reply(err ? err : items);//.code(err ? err.code : 200);
          }).sort(request.query ? parseQuery(request.query) : {});
        }
      }
    });
    
    return next();
  };
  
  exports.register.attributes = {
    name: 'items.geo'
  };
  
})(exports, require);
