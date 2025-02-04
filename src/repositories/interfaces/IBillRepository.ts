import { Bill } from "../../models/Bill";

export interface IBillRepository {
  createBill(bill: Bill): Promise<void>
  listBills(): Promise<Bill[]>
}
