import { PrismaClient } from "@prisma/client";
import { Database } from "../infra/Database";
import { IUserRepository } from "./interfaces/IUserRepository";
import { User } from "../models/User";
import { Bill } from "../models/Bill";

export class UserRepository implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = Database.getInstance();
  }

  async createUser(user: User): Promise<void> {
    await this.prisma.user.create({
      data: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userName: user.userName,
        password: user.password,
        anniversary: user.anniversary,
      },
    });
  }

  async listUsers(): Promise<User[]> {
    return this.prisma.user.findMany({ include: { bills: true } });
  }

  async getById(id: string): Promise<User | undefined> {
    const resp = await this.prisma.user.findUnique({ where: { id }, include: { bills: true } }) || undefined;
    return resp
  }

  async getBills(userId: string): Promise<Bill[]> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: { bills: true },
    });
  
    return user?.bills ?? [];
  }

  async addBillToUser(userId: string, bill: Bill): Promise<User | undefined> {
    await this.prisma.bill.create({
      data: {
        id: bill.id,
        userId: userId,
        description: bill.description,
        startDate: bill.startDate,
        endDate: bill.endDate,
        price: bill.price,
        isRecurrent: bill.isRecurrent,
      },
    });

    return this.getById(userId);
  }
}
