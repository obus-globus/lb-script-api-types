import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeHolder } from '../../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { RecipeInput } from '../../../../../net/minecraft/world/item/crafting/RecipeInput.d.ts'
export interface RecipeManager$CachedCheck<I extends RecipeInput, T extends Recipe<I>> extends Object{
    getRecipeFor(input: I, level: ServerLevel): Optional<RecipeHolder<T>>;
}