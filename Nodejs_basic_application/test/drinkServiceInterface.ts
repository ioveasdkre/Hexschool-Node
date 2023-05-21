import { IDrink } from "./drinkInterface";

interface IDrinkService {
  createDrink(drink: IDrink): Promise<IDrink>;
  getDrinkById(id: string): Promise<IDrink | null>;
  getDrinks(): Promise<IDrink[]>;
  updateDrinkById(id: string, drink: IDrink): Promise<IDrink | null>;
  deleteDrinkById(id: string): Promise<IDrink | null>;
}

export { IDrinkService };
