import { IUserRepository } from "../repositories/interfaces/IUserRepository";
import { User } from "../models/User";
import { Bill } from "../models/Bill";
import { v4 as uuid } from "uuid";

export class UserService {
  constructor(
    private userRepository: IUserRepository
  ) {}

  async createUser(
    firstName: string,
    lastName: string,
    email: string,
    userName: string,
    password: string,
    anniversary: Date,
    bills: Bill[] = []
  ): Promise<User> {
    const user = new User(uuid(), firstName, lastName, email, userName, password, anniversary, bills)
    await this.userRepository.createUser(user)

    const createdUser = await this.userRepository.getById(user.id)
    if (!createdUser) {
      throw new Error('Erro ao criar usuário')
    }

    return createdUser
  }

  async listUsers(): Promise<User[]> {
    return this.userRepository.listUsers()
  }
}
