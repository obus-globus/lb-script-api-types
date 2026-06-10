import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Ingredient } from '../../../../../net/minecraft/world/item/crafting/Ingredient.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { SelectableRecipe } from '../../../../../net/minecraft/world/item/crafting/SelectableRecipe.d.ts'
export class SelectableRecipe$SingleInputEntry<T extends Recipe<Object>> extends Record {
    static noRecipeCodec(): StreamCodec<RegistryFriendlyByteBuf, SelectableRecipe$SingleInputEntry<Object>>;
    constructor(input: Ingredient, recipe: SelectableRecipe<T>)
    // private input: Ingredient;
    // private recipe: SelectableRecipe<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    input(): Ingredient;
    recipe(): SelectableRecipe<T>;
    toString(): string;
}