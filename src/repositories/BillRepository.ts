import { IBillRepository } from "./interfaces/IBillRepository";
import { Bill } from "../models/Bill";

export class BillRepository implements IBillRepository {
  private bills: Bill[] = []
  
  async createBill(bill: Bill): Promise<void> {
    this.bills.push(bill)    
  }

  async listBills(): Promise<Bill[]> {
    return this.bills
  }
}
