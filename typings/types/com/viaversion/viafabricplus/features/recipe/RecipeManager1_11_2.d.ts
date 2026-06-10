import type { Multimap } from '../../../../../com/google/common/collect/Multimap.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeHolder } from '../../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { RecipeInput } from '../../../../../net/minecraft/world/item/crafting/RecipeInput.d.ts'
import type { RecipeType } from '../../../../../net/minecraft/world/item/crafting/RecipeType.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class RecipeManager1_11_2 extends Object {
    constructor(arg0: RecipeHolder<Object>[])
    // private recipesById: Map<ResourceKey<Recipe<Object>>, RecipeHolder<Object>>;
    // private recipesByType: Multimap<RecipeType<Object>, RecipeHolder<Object>>;
    get(arg0: ResourceKey<Recipe<Object>>): Optional<RecipeHolder<Object>>;
    getFirstMatch<T extends Recipe<I>, I extends RecipeInput>(arg0: RecipeType<T>, arg1: I, arg2: Level): Optional<RecipeHolder<T>>;
    keys(): Stream<ResourceKey<Recipe<Object>>>;
    values(): RecipeHolder<Object>[];
}