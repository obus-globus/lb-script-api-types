import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Stream } from '../../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Recipe } from '../../../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeHolder } from '../../../../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { RecipeInput } from '../../../../../../../net/minecraft/world/item/crafting/RecipeInput.d.ts'
import type { RecipeType } from '../../../../../../../net/minecraft/world/item/crafting/RecipeType.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
export interface SynchronizedRecipes extends Object{
    get(arg0: ResourceKey<Recipe<any>>): RecipeHolder<any>;
    get<T extends Recipe<any>>(arg0: RecipeType<T>, arg1: ResourceKey<Recipe<any>>): RecipeHolder<T>;
    getAllMatches<T extends Recipe<I>, I extends RecipeInput>(arg0: RecipeType<T>, arg1: I, arg2: Level): Stream<RecipeHolder<T>>;
    getAllOfType<T extends Recipe<I>>(arg0: RecipeType<T>): RecipeHolder<T>[];
    getFirstMatch<T extends Recipe<I>, I extends RecipeInput>(arg0: RecipeType<T>, arg1: I, arg2: Level): Optional<RecipeHolder<T>>;
    getFirstMatch<T extends Recipe<I>, I extends RecipeInput>(arg0: RecipeType<T>, arg1: I, arg2: Level, arg3: ResourceKey<Recipe<any>>): Optional<RecipeHolder<T>>;
    getFirstMatch<T extends Recipe<I>, I extends RecipeInput>(arg0: RecipeType<T>, arg1: I, arg2: Level, arg3: RecipeHolder<T>): Optional<RecipeHolder<T>>;
    recipes(): RecipeHolder<any>[];
}