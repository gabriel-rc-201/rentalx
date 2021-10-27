import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({
    name,
    driver_license,
    password,
    username,
    email,
  }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.creat({
      name,
      driver_license,
      password,
      username,
      email,
    });
  }
}

export { CreateUserUseCase };
