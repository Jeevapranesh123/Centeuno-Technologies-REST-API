const fs = require('fs');

const data = fs.readFileSync('./app/product.json');

const products = JSON.parse(data);


exports.product_list = async (req, res) => {
    const size = req.query.size || 10;
    const page = req.query.page || 1;

    const skip = size * (page - 1);
    const end = skip + size;

    const result = products.slice(skip, end).map(product => ({
        id: product.id,
        item_name: product.item_name,
        item_image: product.item_image,
        item_price: product.item_price,
    }));

    res.json(products);
}

exports.product_detail = async (req, res) => {
    const id = req.params.id;
    
    const product = products.filter(product => product.id == id);

    res.json(product[0]);
}
