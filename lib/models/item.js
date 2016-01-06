(function(module){
  'use strict';
  
  var Mongoose = require('mongoose');
  
  var itemSchema = Mongoose.Schema({
    id: {type: Mongoose.Schema.ObjectId, required: true},
    loc: [{type: Number, required: true}],
    userId: {type: Mongoose.Schema.ObjectId, required: true},
    description: Mongoose.Schema.Types.Mixed,
    price: {type: Number, required: true},
    status: {type: String, required: true, default: 'tos'},
    createdAt: {type: Date, required: true, default: Date.now}
  });
  itemSchema.index({loc: '2dsphere'});
  var Item = Mongoose.model('Item', itemSchema);
  module.exports = Item;
  
})(module);
