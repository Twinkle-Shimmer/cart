var express = require('express');
var router = express.Router();
var Product =require('../models/product')
/* GET home page. */

router.get('/', function(req, res, next) {
  var products=Product.find(()=>{
    var productChunk=[];
    var chunkSize=3;
    for(var i=0;i<docs.legnth;i+=chunkSize){
      productChunk.push(docs.slice(i,i+chunkSize))
    }
    res.render('shop/index', { title: 'Shopping Cart',products:products });
  });
  
});

module.exports = router;
