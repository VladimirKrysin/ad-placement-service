import { Router } from "express";
import { userController } from "../controllers/userController.js";
const router = Router();
router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/refresh", userController.refresh);

export const userRouter = router;
