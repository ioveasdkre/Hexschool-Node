import { DrinkModel } from "./drinkModel";
import { IDrink } from "./drinkInterface";
import { IDrinkService } from "./drinkServiceInterface";

class DrinkService implements IDrinkService {
  async createDrink(drink: IDrink): Promise<IDrink> {
    const newDrink = await DrinkModel.create(drink);
    return newDrink.toObject();
  }

  async getDrinkById(id: string): Promise<IDrink | null> {
    const drink = await DrinkModel.findById(id).lean().exec();
    return drink;
  }

  async getDrinks(): Promise<IDrink[]> {
    const drinks = await DrinkModel.find().lean().exec();
    return drinks;
  }

  async updateDrinkById(id: string, drink: IDrink): Promise<IDrink | null> {
    const updatedDrink = await DrinkModel.findByIdAndUpdate(id, drink, {
      new: true,
    })
      .lean()
      .exec();
    return updatedDrink;
  }

  async deleteDrinkById(id: string): Promise<IDrink | null> {
    const deletedDrink = await DrinkModel.findByIdAndDelete(id).lean().exec();
    return deletedDrink;
  }
}

export { DrinkService };
