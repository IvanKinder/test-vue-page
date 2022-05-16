const bodyParser = require('body-parser')
const app = require('express')()

const sqlite3 = require('sqlite3');
let db = new sqlite3.Database(__dirname+'/../database/db.sqlite',sqlite3.OPEN_READWRITE,function(err){
    if(err){
        console.log(__dirname);
        console.log(err);
    }
});

const productsmodel = require(__dirname+'/../models/products.js');


app.use(bodyParser.json())
app.all('/products', async (req, res) => {
  const productsdb = new productsmodel(db);
  const products = await productsdb.findProducts();
  res.json({ products: products })
})

module.exports = app