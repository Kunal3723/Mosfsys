import express from "express";
import { getInfo, signin, signup, updateInfo } from "../controllers/user.js";
import auth from "../middleware/auth.js";
const router = express.Router();

router.post("/signin",signin);
router.post("/signup",signup);
router.get("/info",auth,getInfo);
router.put("/update",auth,updateInfo);

export default router;