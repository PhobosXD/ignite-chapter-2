import ICreateCatedoryDTO from "../../dto/ICreateCategoryDTO";
import { Category } from "../../entities/Category";
import ICategoriesRepository from "../../repositories/ICategoriesRepository";
import { inject, injectable } from 'tsyringe'

@injectable()
export default class CreateCategoryService {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository
  ) { }

  public async execute({ description, name }: ICreateCatedoryDTO): Promise<Category> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("This category already exists!;");
    }

    const category = await this.categoriesRepository.create({ description, name });

    return category;
  }
}