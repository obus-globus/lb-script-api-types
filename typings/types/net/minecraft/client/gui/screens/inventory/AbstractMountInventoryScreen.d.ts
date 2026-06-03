import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { AbstractContainerScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AbstractMountInventoryMenu } from '../../../../../../net/minecraft/world/inventory/AbstractMountInventoryMenu.d.ts'
import type { Slot } from '../../../../../../net/minecraft/world/inventory/Slot.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export abstract class AbstractMountInventoryScreen<T extends AbstractMountInventoryMenu> extends AbstractContainerScreen<T> {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INVENTORY_LOCATION: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(menu: T, inventory: (Object | null)[], title: Component, inventoryColumns: number, mount: LivingEntity)
    // private inventoryColumns: number;
    // private mount: LivingEntity;
    // private xMouse: number;
    // private yMouse: number;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractSlot(graphics: GuiGraphicsExtractor, x: number, y: number): void;
    extractSlot(graphics: GuiGraphicsExtractor, slot: Slot, mouseX: number, mouseY: number): void;
    getBackgroundTextureLocation(): Identifier;
    getChestSlotsSpriteLocation(): Identifier;
    getSlotSpriteLocation(): Identifier;
    shouldRenderArmorSlot(): boolean;
    shouldRenderSaddleSlot(): boolean;
}