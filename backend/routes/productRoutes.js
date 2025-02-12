import express, { Router } from "express"
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/productcontroller.js";

const router = express.Router();
router.get("/test",getProducts);
router.get("/:id",getProduct);
router.post("/createproduct",createProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);

export default router;
