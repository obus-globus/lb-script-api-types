import type { RecipeStorage$Recipe } from '../../../../../../com/viaversion/viabackwards/protocol/v1_21_2to1_21/storage/RecipeStorage$Recipe.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
export class RecipeStorage$FurnaceRecipe extends RecipeStorage$Recipe {
    private constructor(arg0: Item[], arg1: Item, arg2: number, arg3: number)
    // private cookingTime: number;
    // private experience: number;
    // private ingredient: Item[];
    // private result: Item;
    // private serializerId(): number;
    write(arg0: PacketWrapper): void;
}