function products(db){
    this.db = db;
}
products.prototype.findProducts = async function(){
    var me = this;
    return new Promise(function(resolve,reject){
        me.db.all("select * from products",[],function(err,rows){
            if(err){
                return reject(err);
            }
            resolve(rows);
        })
    })
}

module.exports = products;