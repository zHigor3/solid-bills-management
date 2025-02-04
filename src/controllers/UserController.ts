import { Request, Response } from "express";
import { UserService } from "../services/UserService";
import { UserRepository } from "../repositories/UserRepository";

const userRepository = new UserRepository
const userService = new UserService(userRepository)

export class UserController {
  static async createUser(req: Request, res: Response) {
    const {
      firstName,
      lastName,
      email,
      userName,
      password,
      anniversary
    } = req.body

    const user = await userService.createUser(firstName, lastName, email, userName, password, anniversary, [])
    res.status(201).json(user)
  }

  static async listUsers(req: Request, res: Response) {
    try {
      const users = await userService.listUsers()
      res.json(users)
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar usuários"})
    }
  }
}
