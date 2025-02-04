import { Bill } from "./Bill";

export class User {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public userName: string,
    public password: string,
    public anniversary: Date,
    public bills: Bill[] = []
  ) {}
}
