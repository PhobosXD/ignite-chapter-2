import ICreateRentalDTO from "../dto/ICreateRentalDTO";
import Rental from "../infra/typeorm/entities/Rental";

export default interface IRentalsRepository {
  create(rental: ICreateRentalDTO): Promise<Rental | undefined>;
  findOpenRentalByUserId(id: string): Promise<Rental | undefined>;
  update(rental: Rental): Promise<Rental>;
  findById(id: string): Promise<Rental | undefined>;
  findByUserId(user_id: string): Promise<Rental[]>;
}
