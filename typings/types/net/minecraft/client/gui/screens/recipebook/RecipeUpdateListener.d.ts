import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RecipeDisplay } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
export interface RecipeUpdateListener extends Object{
    fillGhostRecipe(display: RecipeDisplay): void;
    recipesUpdated(): void;
}