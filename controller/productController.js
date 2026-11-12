const { Product } = require("../models")

exports.addProduct = async (req, res) => {
    try {
        const {productName, price, stock } = req.body;

        const file = req.file.path

        const product = await Product.create({
            productName,
            price,
            stock,
            productImage: file
        })
        req.status(201).json({
            message: "Product Added Successfully"
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.getOneProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        res. status(200).json({
            message: "Product found",
            data: product
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        const { productName, stock, price } = req.body

        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        const data =  {
            price,
            productName,
            stock
        }

        if (req.file) {
            const oldFilePath = product.productImage
            fs.unlinkSync(oldFilePath)
            data.productImage = req.file.path
        }

        await product.update(data)

        res.status(200).json({
            message: "Product Updated",
            data: product
        })
    } catch (error) {
        res.status(500).json({
             message: error.message
        })
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Products.findAll()

        res.status(200).json({
            message: "All products retrieved Successfully",
            data: products
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findByPk(id)
        const oldFilePath = product.productImage
            
        

      
        fs.unlinkSync(oldFilePath)
        
        await product.destroy()

        res.status(200).json({
            message: "Product deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}
