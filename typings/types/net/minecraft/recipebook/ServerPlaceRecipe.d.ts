import type { Object } from '../../../java/lang/Object.d.ts'
import type { Holder } from '../../../net/minecraft/core/Holder.d.ts'
import type { ServerPlaceRecipe$CraftingMenuAccess } from '../../../net/minecraft/recipebook/ServerPlaceRecipe$CraftingMenuAccess.d.ts'
import type { StackedItemContents } from '../../../net/minecraft/world/entity/player/StackedItemContents.d.ts'
import type { RecipeBookMenu$PostPlaceAction } from '../../../net/minecraft/world/inventory/RecipeBookMenu$PostPlaceAction.d.ts'
import type { Slot } from '../../../net/minecraft/world/inventory/Slot.d.ts'
import type { Item } from '../../../net/minecraft/world/item/Item.d.ts'
import type { Recipe } from '../../../net/minecraft/world/item/crafting/Recipe.d.ts'
import type { RecipeHolder } from '../../../net/minecraft/world/item/crafting/RecipeHolder.d.ts'
export class ServerPlaceRecipe<R extends Recipe<Object>> extends Object {
    static placeRecipe(parammenu: ServerPlaceRecipe$CraftingMenuAccess<Object>, paramgridWidth: number, paramgridHeight: number, paraminputGridSlots: Slot[], paramslotsToClear: Slot[], paraminventory: (Object | null)[], paramrecipe: RecipeHolder<Object>, paramuseMaxItems: boolean, paramallowDroppingItemsToClear: boolean): RecipeBookMenu$PostPlaceAction;
    private constructor(menu: ServerPlaceRecipe$CraftingMenuAccess<R>, inventory: (Object | null)[], useMaxItems: boolean, gridWidth: number, gridHeight: number, inputGridSlots: Slot[], slotsToClear: Slot[])
    // private gridHeight: number;
    // private gridWidth: number;
    // private inputGridSlots: Slot[];
    // private inventory: (Object | null)[];
    // private menu: ServerPlaceRecipe$CraftingMenuAccess<R>;
    // private slotsToClear: Slot[];
    // private useMaxItems: boolean;
    // private calculateAmountToCraft(biggestCraftableStack: number, recipeMatchesPlaced: boolean): number;
    // private clearGrid(): void;
    // private getAmountOfFreeSlotsInInventory(): number;
    // private moveItemToGrid(targetSlot: Slot, itemInInventory: Holder<Item>, count: number): number;
    // private placeRecipe(recipe: RecipeHolder<R>, availableItems: StackedItemContents): void;
    // private testClearGrid(): boolean;
    // private tryPlaceRecipe(recipe: RecipeHolder<R>, availableItems: StackedItemContents): RecipeBookMenu$PostPlaceAction;
}