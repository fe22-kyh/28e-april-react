import express from 'express';
import authController from '../controller/authController.js';
import userController from '../controller/userController.js';
import jwtFilter from '../middleware/jwtFilter.js';


const router = express.Router();

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

router.get("/user/balance", jwtFilter, userController.getBalance);
router.get("/user/debitCard", jwtFilter, userController.getDebitCard);
router.get("/user/address", jwtFilter, userController.getAddress);

router.patch("/user/debitCard", jwtFilter, userController.updateDebitCard);
router.patch("/user/address", jwtFilter, userController.updateAdress);
router.patch("/user/balance", jwtFilter, userController.updateBalance);

export default router;