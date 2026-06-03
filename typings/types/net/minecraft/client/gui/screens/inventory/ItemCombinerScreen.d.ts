import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { AbstractContainerScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { AbstractContainerMenu } from '../../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { ContainerListener } from '../../../../../../net/minecraft/world/inventory/ContainerListener.d.ts'
import type { ItemCombinerMenu } from '../../../../../../net/minecraft/world/inventory/ItemCombinerMenu.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export abstract class ItemCombinerScreen<T extends ItemCombinerMenu> extends AbstractContainerScreen<T> implements ContainerListener {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INVENTORY_LOCATION: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(menu: T, inventory: (Object | null)[], title: Component, menuResource: Identifier)
    // private menuResource: Identifier;
    dataChanged(container: AbstractContainerMenu, id: number, value: number): void;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractErrorIcon(graphics: GuiGraphicsExtractor, xo: number, yo: number): void;
    init(): void;
    init(width: number, height: number): void;
    removed(): void;
    slotChanged(container: AbstractContainerMenu, slotIndex: number, itemStack: ItemStack): void;
    subInit(): void;
}