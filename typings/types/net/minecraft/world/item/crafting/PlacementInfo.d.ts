import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
export class PlacementInfo extends Object {
    static EMPTY_SLOT: number;
    static NOT_PLACEABLE: PlacementInfo;
    static create(paramingredients: Ingredient[]): PlacementInfo;
    static create(paramingredient: Ingredient): PlacementInfo;
    static createFromOptionals(paramingredients: (Object | null)[]): PlacementInfo;
    private constructor(ingredients: Ingredient[], slotsToIngredientIndex: (Object | null)[])
    // private ingredients: Ingredient[];
    // private slotsToIngredientIndex: (Object | null)[];
    ingredients(): Ingredient[];
    isImpossibleToPlace(): boolean;
    slotsToIngredientIndex(): (Object | null)[];
}