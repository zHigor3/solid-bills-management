import { Bill } from "../../models/Bill";
import { User } from "../../models/User";

export interface IUserRepository {
  createUser(user: User): Promise<void>
  listUsers(): Promise<User[]>
  getBills(userId: string): Promise<Bill[]>
  changePassword(id: string, oldPassword: string, newPassword: string): Promise<void>
  getById(id: string): Promise<User | undefined>
  addBillToUser(userId: string, bill: Bill): Promise<User | undefined>
}
