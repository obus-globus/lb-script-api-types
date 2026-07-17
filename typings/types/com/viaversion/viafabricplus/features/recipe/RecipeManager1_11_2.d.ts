import type { JavaMap } from '../../../../../JavaMap.d.ts'
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
    constructor(arg0: RecipeHolder<any>[])
    // private recipesById: JavaMap<ResourceKey<Recipe<any>>, RecipeHolder<any>>;
    // private recipesByType: Multimap<RecipeType<any>, RecipeHolder<any>>;
    get(arg0: ResourceKey<Recipe<any>>): Optional<RecipeHolder<any>>;
    getFirstMatch<T extends Recipe<I>, I extends RecipeInput>(arg0: RecipeType<T>, arg1: I, arg2: Level): Optional<RecipeHolder<T>>;
    keys(): Stream<ResourceKey<Recipe<any>>>;
    values(): RecipeHolder<any>[];
}