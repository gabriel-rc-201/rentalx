import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  creat(data: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
