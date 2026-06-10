import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { ScreenPosition } from '../../../../../../net/minecraft/client/gui/navigation/ScreenPosition.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { AbstractRecipeBookScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/AbstractRecipeBookScreen.d.ts'
import type { RecipeBookComponent$TabInfo } from '../../../../../../net/minecraft/client/gui/screens/recipebook/RecipeBookComponent$TabInfo.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { AbstractFurnaceMenu } from '../../../../../../net/minecraft/world/inventory/AbstractFurnaceMenu.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export abstract class AbstractFurnaceScreen<T extends AbstractFurnaceMenu> extends AbstractRecipeBookScreen<T> {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INVENTORY_LOCATION: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(menu: T, inventory: (Object | null)[], title: Component, recipeFilterName: Component, texture: Identifier, litProgressSprite: Identifier, burnProgressSprite: Identifier, tabInfos: RecipeBookComponent$TabInfo[])
    // private burnProgressSprite: Identifier;
    // private litProgressSprite: Identifier;
    // private texture: Identifier;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getRecipeBookButtonPosition(): ScreenPosition;
    init(): void;
    init(width: number, height: number): void;
}