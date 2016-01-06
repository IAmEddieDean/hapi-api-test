(function(exports, require){
  'use strict';
  
  var Item = require('../models/item');
  var fakeItems = require('../../db');
  
  exports.register = function(server, options, next){
    server.route({
      method: 'GET',
      path: '/reset',
      config: {
        description: 'Create a database based on JSON file',
        handler: function(request, reply){
          Item.find({}).remove(function(er, items){
            if(er) return reply(er);
            
            var counter = 0;
            
            for(var i = 0, len = fakeItems.length; i < len; i++){
              new Item(fakeItems[i]).save(postSave);
            }
            
            function postSave(err, item){
              if(!err) counter++;
              else return reply('uh oh').code(err.code);
              
              if(counter === len) return reply('hurray!');
            }
          });
        }
      }
    });
    
    return next();
  };
  
  exports.register.attributes = {
    name: 'reset'
  };
  
})(exports, require);
