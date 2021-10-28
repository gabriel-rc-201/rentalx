import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: { name: string; email: string };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new Error("Email or Password Incorrect!!!");

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new Error("Email or Password Incorrect!!!");

    const token = sign({}, "800db3ef1f77e2928e0e1877b8c6fc54", {
      subject: user.id,
      expiresIn: "1d",
    });

    return { user, token };
  }
}

export { AuthenticateUserUseCase };
