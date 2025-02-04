import { Router } from "express";
import { BillController } from "../controllers/BillController";

const router = Router()

router.post("/bill", BillController.createBill)

export default router
