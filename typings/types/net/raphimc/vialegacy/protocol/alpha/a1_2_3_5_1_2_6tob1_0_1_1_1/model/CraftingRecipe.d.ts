import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CraftingRecipe extends Object {
    constructor(arg0: number, arg1: number, arg2: number[], arg3: Item)
    // private height: number;
    // private ingredientMap: number[];
    // private resultItem: Item;
    // private width: number;
    createResult(): Item;
    getRecipeSize(): number;
    matches(arg0: number[]): boolean;
    // private matches(arg0: number[], arg1: number, arg2: number, arg3: boolean): boolean;
}