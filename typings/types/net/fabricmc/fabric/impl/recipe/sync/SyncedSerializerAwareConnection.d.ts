import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RecipeSerializer } from '../../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
export interface SyncedSerializerAwareConnection extends Object{
    fabric_getSyncedRecipeSerializers(): RecipeSerializer<any>[];
    fabric_setSyncedRecipeSerializers(arg0: RecipeSerializer<any>[]): void;
}