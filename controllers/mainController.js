const products = require('../data/products.json')

module.exports = {
    home : (req, res) => {
        return res.render('index', {
          products
        });
      },
      detalle: (req,res) =>{
        const {id} = req.params;
        const product = products.find(product => product.id === +id)
        return res.render('detalleMenu',{
          product
        })
      }
}