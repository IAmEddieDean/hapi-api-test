'use strict';

var Item = require('../../../models/item');
// var things = require('../../../../db.json')

exports.register = function(server, options, next){
  server.route({
    method: 'GET',
    path: '/items/{order?}',
    config: {
      description: 'Get an index of items',
      handler: function(request, reply){
        var ascOrDesc = request.params.order === 'desc' ? 1 : -1
        console.log(request.params);
        Item.find({}, function(err, items){
          return reply(items).code(err ? err.code : 200);
        }).sort({createdAt: ascOrDesc});
      }
    }
  });

  return next();
};

exports.register.attributes = {
  name: 'items.index'
};
