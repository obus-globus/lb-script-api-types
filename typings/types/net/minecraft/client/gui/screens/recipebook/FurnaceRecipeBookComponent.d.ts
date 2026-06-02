import type { WidgetSprites } from '../../../../../../net/minecraft/client/gui/components/WidgetSprites.d.ts'
import type { GhostSlots } from '../../../../../../net/minecraft/client/gui/screens/recipebook/GhostSlots.d.ts'
import type { RecipeBookComponent } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeBookComponent.d.ts'
import type { RecipeBookComponent$TabInfo } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeBookComponent$TabInfo.d.ts'
import type { RecipeCollection } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeCollection.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ContextMap } from '../../../../../../net/minecraft/util/context/ContextMap.d.ts'
import type { StackedItemContents } from '../../../../../../net/minecraft/world/entity/player/StackedItemContents.d.ts'
import type { AbstractFurnaceMenu } from '../../../../../../net/minecraft/world/inventory/AbstractFurnaceMenu.d.ts'
import type { Slot } from '../../../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { RecipeDisplay } from '../../../../../../net/minecraft/world/item/crafting/display/RecipeDisplay.d.ts'
export class FurnaceRecipeBookComponent extends RecipeBookComponent<AbstractFurnaceMenu> {
    static IMAGE_HEIGHT: number;
    static IMAGE_WIDTH: number;
    static RECIPE_BUTTON_SPRITES: WidgetSprites;
    constructor(menu: AbstractFurnaceMenu, recipeFilterName: Component, tabInfos: RecipeBookComponent$TabInfo[])
    // private recipeFilterName: Component;
    fillGhostRecipe(ghostSlots: GhostSlots, recipe: RecipeDisplay, context: ContextMap): void;
    getFilterButtonTextures(): WidgetSprites;
    getRecipeFilterName(): Component;
    isCraftingSlot(slot: Slot): boolean;
    selectMatchingRecipes(collection: RecipeCollection, stackedContents: StackedItemContents): void;
}