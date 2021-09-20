import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private speciricationsRepository: ISpecificationRepository) {}
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
