import { IBillRepository } from "../repositories/interfaces/IBillRepository";
import { Bill } from "../models/Bill";
import { v4 as uuid } from "uuid";
import { UserRepository } from "../repositories/UserRepository";

export class BillService {
  constructor(
    private billRepository: IBillRepository,
    private userRepository: UserRepository
  ) {}
   
  async createBill(
    userId: string,
    description: string, 
    startDate: Date, 
    endDate: Date | null, 
    price: number, 
    isRecurrent: boolean
  ): Promise<Bill> {
    const user = await this.userRepository.getById(userId)
    if(user) {
      const bill = new Bill(uuid(), userId, description, startDate, endDate, price, isRecurrent)
      await this.billRepository.createBill(bill)
      return bill
    }

    throw new Error("Usuário não encontrado")
  }
}
