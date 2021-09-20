import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(private createSpecificationService: CreateSpecificationUseCase) {}

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;

    this.createSpecificationService.execute({ name, description });

    return res.status(201).send();
  }
}

export { CreateSpecificationController };
