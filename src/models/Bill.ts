export class Bill {
  constructor(
    public id: string,
    public userId: string,
    public description: string,
    public startDate: Date,
    public endDate: Date | null,
    public price: number,
    public isRecurrent: boolean
  ) {}
}
