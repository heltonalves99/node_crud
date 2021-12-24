import { getRepository } from "typeorm";

import { Category } from "../entities/Category";

export class DeleteCaegoryService {
  async execute(id: string): Promise<Error | undefined> {
    const repo = getRepository(Category);

    if (!(await repo.findOne(id))) {
      return new Error('Category does not exists!');
    }

    await repo.delete(id);
  }
}
