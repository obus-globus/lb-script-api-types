import type { Recipes1_11_2$LegacyRecipe } from '../../../../../com/viaversion/viafabricplus/features/recipe/Recipes1_11_2$LegacyRecipe.d.ts'
import type { Recipes1_11_2$RecipeItemStack } from '../../../../../com/viaversion/viafabricplus/features/recipe/Recipes1_11_2$RecipeItemStack.d.ts'
import type { JsonObject } from '../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
export class Recipes1_11_2$LegacyShapelessRecipe extends Record implements Recipes1_11_2$LegacyRecipe {
    static fromJson(paramarg0: JsonObject): Recipes1_11_2$LegacyShapelessRecipe;
    private constructor(group: string, result: Recipes1_11_2$RecipeItemStack, ingredients: Item[][])
    // private group: string;
    // private ingredients: Item[][];
    // private result: Recipes1_11_2$RecipeItemStack;
    equals(arg0: Object | null): boolean;
    group(): string;
    hashCode(): number;
    ingredients(): Item[][];
    result(): Recipes1_11_2$RecipeItemStack;
    toString(): string;
}