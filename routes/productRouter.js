const router = require("express").Router()
const { addProduct,getOneProduct, updateProduct, getAllProducts, deleteProduct } = require("../controller/productController")
const upload = require("../middleware/multer")

router.post("/product", upload.single("productImage"), addProduct)
router.get("/product/:id", getOneProduct)
router.patch("/product/:id", upload.single("productImage"), updateProduct)
router.get("/product", getAllProducts)
router.delete("/product/:id", deleteProduct)


module.exports = router