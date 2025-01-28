const validateProduct = (req, res, next) => {
    const { name, price } = req.body;
    if (!name || typeof name !== "string")  {
        return res.status(400).json({ error: "Nama produk harus berupa string." });
    }
    if (!price || typeof price !== "number" || price < 0) {
        return res.status(400).json({ error: "Harga produk harus berupa angka positif." });
    }
    next();
};

module.exports = validateProduct;