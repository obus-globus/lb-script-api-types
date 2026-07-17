import type { JavaMap } from '../../../../../JavaMap.d.ts'
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
    static create(paramrecipes: RecipeHolder<any>[]): RecipeMap;
    private constructor(byType: Multimap<RecipeType<any>, RecipeHolder<any>>, byKey: JavaMap<ResourceKey<Recipe<any>>, RecipeHolder<any>>)
    // private byKey: JavaMap<ResourceKey<Recipe<any>>, RecipeHolder<any>>;
    // private bySyncedSerializer: JavaMap<Object | null, Object | null>;
    // private byType: Multimap<RecipeType<any>, RecipeHolder<any>>;
    byKey(recipeId: ResourceKey<Recipe<any>>): RecipeHolder<any>;
    byType<T extends Recipe<I>>(type: RecipeType<T>): RecipeHolder<T>[];
    fabric_getRecipesBySyncedSerializer(arg0: RecipeSerializer<Recipe<any>>): (Object | null)[];
    getRecipesFor<T extends Recipe<I>, I extends RecipeInput>(type: RecipeType<T>, container: I, level: Level): Stream<RecipeHolder<T>>;
    values(): RecipeHolder<any>[];
}