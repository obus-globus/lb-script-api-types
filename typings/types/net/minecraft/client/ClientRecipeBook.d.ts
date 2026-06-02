import type { RecipeCollection } from '../../../net/minecraft/client/gui/screens/recipebook/RecipeCollection.d.ts'
import type { RecipeBook } from '../../../net/minecraft/stats/RecipeBook.d.ts'
import type { ExtendedRecipeBookCategory } from '../../../net/minecraft/world/item/crafting/ExtendedRecipeBookCategory.d.ts'
import type { RecipeDisplayEntry } from '../../../net/minecraft/world/item/crafting/display/RecipeDisplayEntry.d.ts'
import type { RecipeDisplayId } from '../../../net/minecraft/world/item/crafting/display/RecipeDisplayId.d.ts'
export class ClientRecipeBook extends RecipeBook {
    constructor()
    // private allCollections: RecipeCollection[];
    // private collectionsByTab: Map<ExtendedRecipeBookCategory, RecipeCollection[]>;
    // private highlight: RecipeDisplayId[];
    // private known: Map<RecipeDisplayId, RecipeDisplayEntry>;
    add(display: RecipeDisplayEntry): void;
    addHighlight(id: RecipeDisplayId): void;
    clear(): void;
    getCollection(category: ExtendedRecipeBookCategory): RecipeCollection[];
    getCollections(): RecipeCollection[];
    rebuildCollections(): void;
    remove(id: RecipeDisplayId): void;
    removeHighlight(id: RecipeDisplayId): void;
    willHighlight(recipe: RecipeDisplayId): boolean;
}