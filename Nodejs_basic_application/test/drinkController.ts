import { Request, Response } from "express";
import { IDrink } from "./drinkInterface";
import { IDrinkService } from "./drinkServiceInterface";

class DrinkController {
  constructor(private drinkService: IDrinkService) {}

  async createDrink(req: Request, res: Response) {
    try {
      const drink: IDrink = await this.drinkService.createDrink(req.body);
      res.status(201).json(drink);
    } catch (err) {
      res.status(400).json({ message: (err as Error).message });
    }
  }

  async getDrinkById(req: Request, res: Response) {
    try {
      const drink: IDrink = await this.drinkService.getDrinkById(req.params.id);
      res.status(200).json(drink);
    } catch (err) {
      res.status(404).json({ message: (err as Error).message });
    }
  }

  async updateDrinkById(req: Request, res: Response) {
    try {
      const updatedDrink: IDrink = await this.drinkService.updateDrinkById(
        req.params.id,
        req.body
      );
      res.status(200).json(updatedDrink);
    } catch (err) {
      res.status(400).json({ message: (err as Error).message });
    }
  }

  async deleteDrinkById(req: Request, res: Response) {
    try {
      await this.drinkService.deleteDrinkById(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(400).json({ message: (err as Error).message });
    }
  }
}

export { DrinkController };
