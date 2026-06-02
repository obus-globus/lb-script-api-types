import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RecipeHolder } from '../../../../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
import type { RecipeSerializer } from '../../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
export interface SyncedSerializerAwarePreparedRecipe extends Object{
    fabric_getRecipesBySyncedSerializer(arg0: RecipeSerializer<Object>): RecipeHolder<Object>[];
}