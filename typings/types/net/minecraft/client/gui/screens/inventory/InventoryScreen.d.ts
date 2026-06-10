import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { ScreenPosition } from '../../../../../../net/minecraft/client/gui/navigation/ScreenPosition.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { AbstractRecipeBookScreen } from '../../../../../../net/minecraft/client/gui/screens/inventory/AbstractRecipeBookScreen.d.ts'
import type { EffectsInInventory } from '../../../../../../net/minecraft/client/gui/screens/inventory/EffectsInInventory.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { InventoryMenu } from '../../../../../../net/minecraft/world/inventory/InventoryMenu.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class InventoryScreen extends AbstractRecipeBookScreen<InventoryMenu> {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INVENTORY_LOCATION: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractEntityInInventoryFollowsMouse(paramgraphics: GuiGraphicsExtractor, paramx0: number, paramy0: number, paramx1: number, paramy1: number, paramsize: number, paramoffsetY: number, parammouseX: number, parammouseY: number, paramentity: LivingEntity): void;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(player: Player)
    // private buttonClicked: boolean;
    // private effects: EffectsInInventory;
    // private xMouse: number;
    // private yMouse: number;
    containerTick(): void;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractLabels(graphics: GuiGraphicsExtractor, xm: number, ym: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getRecipeBookButtonPosition(): ScreenPosition;
    init(): void;
    init(width: number, height: number): void;
    isBiggerResultSlot(): boolean;
    mouseReleased(event: MouseButtonEvent): boolean;
    onRecipeBookButtonClick(): void;
    showsActiveEffects(): boolean;
}