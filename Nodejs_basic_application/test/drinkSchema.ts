import { Schema } from "mongoose";
import { IDrink } from "./drinkInterface";

const DrinkSchema = new Schema<IDrink>({
  product: {
    type: String,
    required: [true, "產品名稱未填寫"],
  },
  price: {
    type: Number,
    required: [true, "價錢未填寫"],
  },
  ice: {
    type: String,
    default: "正常冰",
  },
  sugar: {
    type: String,
    default: "全糖",
  },
  toppings: {
    type: [String],
  },
});

export { DrinkSchema };
