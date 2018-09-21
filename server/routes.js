const bp = require("body-parser");
const api = require("./controllers.js");


module.exports = function(app){
    app.use(bp.json());

    app.post("/api/products", api.createProduct);
    app.put("/api/products/:id", api.editProduct);
    app.get("/api/products/:id", api.oneProduct);
    app.get("/api/productId", api.maxProductId);
    app.get("/api/products", api.allProducts);
    app.delete("/api/products/:id", api.deleteProduct);
}