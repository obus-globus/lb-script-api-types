import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { CyclingSlotBackground } from '../../../../../../net/minecraft/client/gui/screens/inventory/CyclingSlotBackground.d.ts'
import type { ItemCombinerScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/ItemCombinerScreen.d.ts'
import type { ArmorStandRenderState } from '../../../../../../net/minecraft/client/renderer/entity/state/ArmorStandRenderState.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { AbstractContainerMenu } from '../../../../../../net/minecraft/world/inventory/AbstractContainerMenu.d.ts'
import type { SmithingMenu } from '../../../../../../net/minecraft/world/inventory/SmithingMenu.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { SmithingTemplateItem } from '../../../../../../net/minecraft/world/item/SmithingTemplateItem.d.ts'
export class SmithingScreen extends ItemCombinerScreen<SmithingMenu> {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INVENTORY_LOCATION: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(menu: SmithingMenu, inventory: (Object | null)[], title: Component)
    // private additionalIcon: CyclingSlotBackground;
    // private armorStandPreview: ArmorStandRenderState;
    // private baseIcon: CyclingSlotBackground;
    // private templateIcon: CyclingSlotBackground;
    containerTick(): void;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractErrorIcon(graphics: GuiGraphicsExtractor, xo: number, yo: number): void;
    // private extractOnboardingTooltips(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private getTemplateItem(): Optional<SmithingTemplateItem>;
    // private hasRecipeError(): boolean;
    slotChanged(container: AbstractContainerMenu, slotIndex: number, itemStack: ItemStack): void;
    subInit(): void;
    // private updateArmorStandPreview(itemStack: ItemStack): void;
}