import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CustomIngredient } from '../../../../../../../net/fabricmc/fabric/api/recipe/v1/ingredient/CustomIngredient.d.ts'
import type { Ingredient } from '../../../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { SlotDisplay } from '../../../../../../../net/minecraft/world/item/crafting/display/SlotDisplay.d.ts'
export abstract class CombinedIngredient extends Object implements CustomIngredient {
    constructor(arg0: Ingredient[])
    // private ingredients: Ingredient[];
    display(): SlotDisplay;
    equals(arg0: Object | null): boolean;
    getIngredients(): Ingredient[];
    hashCode(): number;
    requiresTesting(): boolean;
    toVanilla(): Ingredient;
}