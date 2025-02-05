import { PrismaClient } from "@prisma/client";
import { Database } from "../infra/Database";
import { IBillRepository } from "./interfaces/IBillRepository";
import { Bill } from "../models/Bill";

export class BillRepository implements IBillRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = Database.getInstance();
  }
  
  async createBill(bill: Bill): Promise<void> {
    await this.prisma.bill.create({
      data: {
        id: bill.id,
        userId: bill.userId,
        description: bill.description,
        startDate: bill.startDate,
        endDate: bill.endDate,
        price: bill.price,
        isRecurrent: bill.isRecurrent
      }
    })
  }

  async listBills(): Promise<Bill[]> {
    const bills = this.prisma.bill.findMany()
    return bills
  }
}
