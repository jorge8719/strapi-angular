import { DishAllergenesInterface } from "./dish-allergenes-interface";

export interface DishInterface {
  id: string,
  name: string,
  description: string,
  price: number,
  media?: string,
  allergens?: Array<DishAllergenesInterface>;
}
