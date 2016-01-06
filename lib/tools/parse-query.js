(function(module){
  module.exports = function parseQuery(queryObj){
    var query = {};
    for(var key in queryObj){
      query[key] = parseInt(queryObj[key]);
    }
    return query;
  };
})(module);
