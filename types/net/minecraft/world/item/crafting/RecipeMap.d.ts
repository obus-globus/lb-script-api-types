import type { Multimap } from '../../../../../com/google/common/collect/Multimap.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SyncedSerializerAwarePreparedRecipe } from '../../../../../net/fabricmc/fabric/impl/recipe/sync/SyncedSerializerAwarePreparedRecipe.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Recipe } from '../../../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeHolder } from '../../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { RecipeInput } from '../../../../../net/minecraft/world/item/crafting/RecipeInput.d.ts'
import type { RecipeSerializer } from '../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
import type { RecipeType } from '../../../../../net/minecraft/world/item/crafting/RecipeType.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class RecipeMap extends Object implements SyncedSerializerAwarePreparedRecipe {
    static EMPTY: RecipeMap;
    static create(paramrecipes: (Object | null)[]): RecipeMap;
    private constructor(byType: Multimap<RecipeType<Object>, RecipeHolder<Object>>, byKey: Map<ResourceKey<Recipe<Object>>, RecipeHolder<Object>>)
    // private byKey: Map<ResourceKey<Recipe<Object>>, RecipeHolder<Object>>;
    // private bySyncedSerializer: Map<Object | null, Object | null>;
    // private byType: Multimap<RecipeType<Object>, RecipeHolder<Object>>;
    byKey(recipeId: ResourceKey<Recipe<Object>>): RecipeHolder<Object>;
    byType(type: RecipeType<T>): E[];
    fabric_getRecipesBySyncedSerializer(arg0: RecipeSerializer<Recipe<Object>>): (Object | null)[];
    getRecipesFor<I extends RecipeInput>(type: RecipeType<T>, container: I, level: Level): Stream<RecipeHolder<T>>;
    values(): E[];
}