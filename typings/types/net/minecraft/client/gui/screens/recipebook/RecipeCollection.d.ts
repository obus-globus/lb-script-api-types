import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RecipeCollection$CraftableStatus } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeCollection$CraftableStatus.d.ts'
import type { StackedItemContents } from '../../../../../../net/minecraft/world/entity/player/StackedItemContents.d.ts'
import type { RecipeDisplay } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
import type { RecipeDisplayEntry } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplayEntry.d.ts'
import type { RecipeDisplayId } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplayId.d.ts'
export class RecipeCollection extends Object {
    static EMPTY: RecipeCollection;
    constructor(recipes: RecipeDisplayEntry[])
    // private craftable: RecipeDisplayId[];
    // private entries: RecipeDisplayEntry[];
    // private selected: RecipeDisplayId[];
    getRecipes(): RecipeDisplayEntry[];
    getSelectedRecipes(selector: RecipeCollection$CraftableStatus): RecipeDisplayEntry[];
    hasAnySelected(): boolean;
    hasCraftable(): boolean;
    isCraftable(recipe: RecipeDisplayId): boolean;
    selectRecipes(stackedContents: StackedItemContents, selector: (param0: RecipeDisplay) => boolean): void;
}