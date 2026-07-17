import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Recipes1_11_2$LegacyRecipe } from '../../../../../com/viaversion/viafabricplus/features/recipe/Recipes1_11_2$LegacyRecipe.d.ts'
import type { Recipes1_11_2$RecipeItemStack } from '../../../../../com/viaversion/viafabricplus/features/recipe/Recipes1_11_2$RecipeItemStack.d.ts'
import type { JsonObject } from '../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
export class Recipes1_11_2$LegacyShapedRecipe extends Record implements Recipes1_11_2$LegacyRecipe {
    static fromJson(paramarg0: JsonObject): Recipes1_11_2$LegacyShapedRecipe;
    private constructor(group: string, result: Recipes1_11_2$RecipeItemStack, pattern: string[], legend: JavaMap<string, Item[]>)
    // private group: string;
    // private legend: JavaMap<string, Item[]>;
    // private pattern: string[];
    // private result: Recipes1_11_2$RecipeItemStack;
    equals(arg0: Object | null): boolean;
    group(): string;
    hashCode(): number;
    legend(): JavaMap<string, Item[]>;
    pattern(): string[];
    result(): Recipes1_11_2$RecipeItemStack;
    toString(): string;
}