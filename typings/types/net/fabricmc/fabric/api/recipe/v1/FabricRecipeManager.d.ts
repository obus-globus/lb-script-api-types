import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricRecipeAccess } from '../../../../../../net/fabricmc/fabric/api/recipe/v1/FabricRecipeAccess.d.ts'
import type { SynchronizedRecipes } from '../../../../../../net/fabricmc/fabric/api/recipe/v1/sync/SynchronizedRecipes.d.ts'
import type { RecipeHolder } from '../../../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { RecipeInput } from '../../../../../../net/minecraft/world/item/crafting/RecipeInput.d.ts'
import type { RecipeType } from '../../../../../../net/minecraft/world/item/crafting/RecipeType.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
export interface FabricRecipeManager extends Object, FabricRecipeAccess{
    getAllMatches<I extends RecipeInput>(arg0: RecipeType<T>, arg1: I, arg2: Level): Stream<RecipeHolder<T>>;
    getAllOfType(arg0: RecipeType<T>): E[];
    getSynchronizedRecipes(): SynchronizedRecipes;
}