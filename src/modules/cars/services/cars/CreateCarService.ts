import { inject, injectable } from "tsyringe";
import AppError from "../../../../shared/errors/AppError";
import ICreateCarDTO from "../../dto/ICreateCarDTO";
import Car from "../../infra/typeorm/entities/Car";
import ICarsRepository from "../../repositories/ICarsRepository";


@injectable()
export default class CreateCarService {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) { }

  public async execute({
    brand,
    category_id,
    daily_rate,
    description,
    fine_amount,
    license_plate,
    name,
  }: ICreateCarDTO): Promise<Car> {
    const carAlreadyExists = await this.carsRepository.findByLicensePlate(
      license_plate
    );

    if (carAlreadyExists) {
      throw new AppError("This car already exists");
    }

    const car = await this.carsRepository.create({
      brand,
      category_id,
      daily_rate,
      description,
      fine_amount,
      license_plate,
      name,
    });

    return car;
  }
}