import { inject, injectable } from "tsyringe";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationsRepository")
    private speciricationsRepository: ISpecificationRepository
  ) {}
  execute({ name, description }: IRequest): void {
    const specificationAlreadyExists =
      this.speciricationsRepository.findByName(name);

    if (specificationAlreadyExists) {
      throw new Error("Specification already exists!");
    }

    this.speciricationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
