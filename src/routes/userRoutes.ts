import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();

router.post("/user", UserController.createUser);
router.get("/listUser", UserController.listUsers);

export default router;
