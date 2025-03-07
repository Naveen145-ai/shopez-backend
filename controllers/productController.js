const ProductModel = require('../models/productModel');

// Get products API - /api/v1/products
exports.getProducts = async (req, res, next) => {
    const query = req.query.keyword?{ name : { 
        $regex:req.query.keyword,
        $options : 'i'
    }}:{}  //for above three lines for filter search

    const products = await ProductModel.find(query);



    res.json({
        success: true,
        products
    })
}

// Get Single product API - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
    //console.log(req.params.id,'ID')
    try{
    const product = await ProductModel.findById(req.params.id);


    res.json({
        success: true,
      product
    })
} catch (error){
    res.status(404).json({
        success: false,
        message: 'ID can not to be found'
      
    })

}

}