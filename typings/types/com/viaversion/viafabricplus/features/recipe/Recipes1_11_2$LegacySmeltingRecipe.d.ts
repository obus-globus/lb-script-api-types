import type { Recipes1_11_2$LegacyRecipe } from '../../../../../com/viaversion/viafabricplus/features/recipe/Recipes1_11_2$LegacyRecipe.d.ts'
import type { Recipes1_11_2$RecipeItemStack } from '../../../../../com/viaversion/viafabricplus/features/recipe/Recipes1_11_2$RecipeItemStack.d.ts'
import type { JsonObject } from '../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
export class Recipes1_11_2$LegacySmeltingRecipe extends Record implements Recipes1_11_2$LegacyRecipe {
    static fromJson(paramarg0: JsonObject): Recipes1_11_2$LegacySmeltingRecipe;
    private constructor(group: string, result: Recipes1_11_2$RecipeItemStack, input: Item[], experience: number)
    // private experience: number;
    // private group: string;
    // private input: Item[];
    // private result: Recipes1_11_2$RecipeItemStack;
    equals(arg0: Object | null): boolean;
    experience(): number;
    group(): string;
    hashCode(): number;
    input(): Item[];
    result(): Recipes1_11_2$RecipeItemStack;
    toString(): string;
}