import { IUserRepository } from "./interfaces/IUserRepository";
import { User } from "../models/User";
import { Bill } from "../models/Bill";

export class UserRepository implements IUserRepository {
  private users: User[] = []

  async createUser(user: User): Promise<void> {
    this.users.push(user)
    console.log(user)
    console.log(this.users)
  }

  async listUsers(): Promise<User[]> {
    return this.users
  }

  async getById(id: string): Promise<User | undefined> {
    console.log(this.users)
    return this.users.find(user => user.id === id)
  }

  async getBills(userId: string): Promise<Bill[]> {
    const user = this.users.find(user => user.id === userId)
    return user?.bills ? user?.bills : []
  }

  async changePassword(id: string, oldPassword: string, newPassword: string): Promise<void> {
    const user = this.users.find(user => user.id === id)
    if(user?.password === oldPassword) {
      user.password = newPassword
    }
  }

  async addBillToUser(userId: string, bill: Bill): Promise<User | undefined> {
    const user = await this.getById(userId)
    console.log(user)
    if (user) {
      user.bills.push(bill)
      return user
    }
    return undefined
  }
}
