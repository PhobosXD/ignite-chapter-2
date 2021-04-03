import ICreateUserDTO from "../dto/ICreateUserDTO";
import User from "../entities/User";

export default interface IUsersRepository {
  create(user: ICreateUserDTO): Promise<User>;
  findByUsername(username: string): Promise<User | undefined>;
}