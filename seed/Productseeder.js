var Product=require('../models/product')
var mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/MyDB", { useNewUrlParser: true });
var products=[new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title:'VIDEO gAME',
    description:'AWESOME !!!',
    price:12,

}),
new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title:'VIDEO gAME',
    description:'AWESOME !!!',
    price:12,

}),
new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title:'VIDEO gAME',
    description:'AWESOME !!!',
    price:12,

}),new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title:'VIDEO gAME',
    description:'AWESOME !!!',
    price:12,

}),new Product({
    imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
    title:'VIDEO gAME',
    description:'AWESOME !!!',
    price:12,

})
]
var done;
for(var i=0;i<products.length;i++){
    products[i].save(function(err,result){
        done++;
        if(done===products.length){
            exit();
        }
    });
}
function exit(){
    mongoose.disconnect();
}