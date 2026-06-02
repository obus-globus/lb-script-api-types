import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { RecipeSerializer } from '../../../../../../../net/minecraft/world/item/crafting/RecipeSerializer.d.ts'
export class RecipeSynchronization extends Object {
    static RECIPE_SYNC_EVENT_PHASE: Identifier;
    static synchronizeRecipeSerializer(paramarg0: RecipeSerializer<Object>): void;
    private constructor()
}