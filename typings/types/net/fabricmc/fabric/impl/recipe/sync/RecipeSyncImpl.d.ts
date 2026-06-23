import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModInitializer } from '../../../../../../net/fabricmc/api/ModInitializer.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { RecipeSerializer } from '../../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
export class RecipeSyncImpl extends Object implements ModInitializer {
    static RECIPE_SYNC_EVENT_PHASE: Identifier;
    static addSynchronizedSerializer(paramarg0: RecipeSerializer<any>): void;
    static getSyncedSerializers(): RecipeSerializer<any>[];
    static isSynced(paramarg0: RecipeSerializer<any>): boolean;
    constructor()
    onInitialize(): void;
}