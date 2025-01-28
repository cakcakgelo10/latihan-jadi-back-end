const express = require("express");
const product = require("../models/productModel");
const validateProduct = require("../middleware/validateProduct");

const router = express.Router();

// Create
router.post("/", validateProduct, async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).json(product); 
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Read All
router.get("/", async (req, res) => {
    try {
        const product = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message});
    }
});

// Read One
router.get("/:id", async (req, param) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Produk tidak ditemukan." });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update
router.put("/:id", validateProduct, async (req, res) => {
    try {
        const product = await Product.findByIdAndupdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({ error: "Produk tidak ditemukan." });
        } 
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete
router.delete("/:id", async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Produk tidak ditemukan." });
        }
        res.status(200).json({ message: "Produk berhasil dihapus." });
    } catch (err) {
        res.status(500).json({ errror: err.message});
    }
});

module.exports = router;