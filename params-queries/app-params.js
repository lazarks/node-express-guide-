const express = require("express");
const app = express();
const { products } = require("./data");

app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
    let newProducts = products.map((product) => {
        let { id, name, image } = product;
        return { id, name, image };
    });
    res.set("content-type", "application/json");
    res.json(newProducts);
});
app.get("/api/products/:productID", (req, res) => {
    let { productID } = req.params;
    let singleProduct = products.find((product) => product.id == +productID);

    if (!singleProduct) {
        return res.status(404).send("Product Does Not Exist");
    }

    res.set("content-type", "application/json");
    res.json(singleProduct);
});

app.get("/api/products/:productID/reviews/:reviewId", (req, res) => {
    console.log(req.params);
    res.send("Heloworld");
});

app.get("/api/v1/query", (req, res) => {
    // console.log(req.query);
    let { search, limit } = req.query;
    let sortedProducts = [...products];

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        });
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, +limit);
    }

    if (sortedProducts.length < 1) {
        // res.status(200).send("no products matched your search");
        return res.status(200).json({ success: true, data: [] });
    }
    res.status(200).json(sortedProducts);
});

app.listen(5000, () => {
    console.log("server is listening on port 5000");
});
