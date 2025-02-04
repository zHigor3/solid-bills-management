import { Request, Response } from "express";
import { BillService } from "../services/BillService";
import { BillRepository } from "../repositories/BillRepository";
import { UserRepository } from "../repositories/UserRepository";

const billRepository = new BillRepository
const userRepository = new UserRepository();
const billService = new BillService(billRepository, userRepository)

export class BillController {
  static async createBill(req: Request, res: Response) {
    const {
      userId,
      description,
      startDate,
      endDate,
      price,
      isRecurrent
    } = req.body

    const bill = await billService.createBill(userId, description, startDate, endDate, price, isRecurrent)
    res.status(201).json(bill)
  }
}
