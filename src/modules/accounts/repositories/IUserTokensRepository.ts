import ICreateUserTokenDTO from "../dto/ICreateUserTokenDTO";
import UserToken from "../infra/typeorm/entities/UserToken";

export default interface IUserTokensRepository {
  create(user_token: ICreateUserTokenDTO): Promise<UserToken>;
}
