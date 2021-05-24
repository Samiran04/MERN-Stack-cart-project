const Cart = require('../models/cart');

module.exports.item = async function(req, res){
    try{

        let products = await Cart.find({});

        return res.json(200, {
            message: 'Hello World',
            products: products
        });
    }catch(err){
        console.log('Error in Items', err);
        return;
    }
}

module.exports.increase = async function(req, res){
    try{

        let product = await Cart.findById(req.query.id);

        product.qty++;
        product.save();

        return res.json(200, {
            message: 'Increased'
        });
    }catch(err){
        console.log('Error in Increase', err);
        return;
    }
}

module.exports.decrease = async function(req, res){
    try{

        let product = await Cart.findById(req.query.id);

        if(product.qty != 0){
            product.qty--;
            product.save();
        }

        return res.json(200, {
            message: 'Decreased'
        });
    }catch(err){
        console.log('Error in Decrease', err);
        return;
    }
}