import { model } from "mongoose";
import { DrinkSchema } from "./drinkSchema";
import { IDrink } from "./drinkInterface";

const DrinkModel = model<IDrink>("Drink", DrinkSchema);

export { DrinkModel };
