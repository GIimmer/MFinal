const Products = require("./models.js")

module.exports = {
    // create guild
    createProduct: (req,res) => Products.create(req.body)
                            .then(data=>res.json(data))
                            .catch(errs=>res.json(errs)),

    productCount: (req,res) => Products.count({})
                            .then(data=>res.json(data))
                            .catch(errs=>res.json(errs)),

    maxProductId: (req,res) => Products.find({})
                            .then(data=>{
                                console.log("Made it here and the data is: ", data);
                                let max = 0;
                                for(let product of data){
                                    console.log("The product, in this case, is...", product);
                                    if(product._id > max){
                                        max = product._id;
                                    }
                                }
                               max+=1;
                               console.log("One above the max is: ", max);
                               return max;
                            })
                            .then(data=>res.json(data))
                            .catch(errs=>res.json(errs)),

    editProduct: (req,res) => Products.findByIdAndUpdate(req.body._id, req.body, {runValidators: true})
                            // .then(data=>{
                            //     data.name = req.body.name,
                            //     data.qty = req.body.qty,
                            //     data.price = req.body.price
                            // })
                            .then(data=>(console.log("The data looks like...", data)||(console.log("The body is... ", req.body)||res.json(data))))
                            .catch(errs=>res.json(errs)),

    // editProduct: (req,res) => Products.findByIdAndUpdate(req.body._id, req.body)
    //                         .then(data=>(console.log("The data looks like...", data)||(console.log("The body is... ", req.body)||res.json(data))))
    //                         .catch(errs=>res.json(errs)),
    // one Product
    oneProduct: (req,res) => Products.findOne({_id: req.params.id})
                            .then(data=>res.json(data))
                            .catch(errs=>res.json(errs)),
    // all Products
    allProducts: (req,res) => Products.find({})
                            .then(data=>res.json(data))
                            .catch(errs=>res.json(errs)),
    // remove Product
    deleteProduct: (req,res) => Products.findByIdAndRemove(req.params.id)
                            .then(data=>res.json(data))
                            .catch(errs=>res.json(errs)),
    
}